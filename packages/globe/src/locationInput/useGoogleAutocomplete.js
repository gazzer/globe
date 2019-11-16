import React, { useRef, useReducer, useEffect } from 'react'

const initialState = {
  results: {
    predictions: [],
    status: '',
  },
  isLoading: false,
  error: null,
}

// For now, we just proxy with cors-anywhere to make it work
// TODO: make configurable - fix later
const cors = 'https://cors-anywhere.herokuapp.com/'

// hacky uniqueId trick
let id = 0
function getUniqueId() {
  return ++id
}

export default function useGoogleAutocomplete({
  apiKey,
  query,
  type = 'places',
  debounceMs = 400,
  options = {},
}) {
  const [state, dispatch] = useReducer(reducer, initialState)

  // Refs for unique session_tokens, for billing purposes.
  // Reference: https://developers.google.com/places/web-service/autocomplete
  const sessionToken = useRef(getUniqueId())
  const sessionTokenTimeout = useRef()

  // AbortController to cancel window.fetch requests if component unmounts.
  const abortController = React.useRef()
  const abortSignal = React.useRef()

  const placesAbortController = React.useRef()
  const placesAbortSignal = React.useRef()

  useEffect(() => {
    // Setup a timer to reset our session_token every 3 minutes.
    // Reference: (https://stackoverflow.com/questions/50398801/how-long-do-the-new-places-api-session-tokens-last/50452233#50452233)
    sessionTokenTimeout.current = window.setInterval(resetSessionToken, 180000)
    // Setup AbortControllers to cancel all http requests on unmount.
    abortController.current = new AbortController()
    abortSignal.current = abortController.current.signal
    placesAbortController.current = new AbortController()
    placesAbortSignal.current = placesAbortController.current.signal
    // Setup an AbortController for our getPlacesDetails function
    placesAbortController.current

    // Cleanup clearInterval and abort any http calls on unmount.
    return () => {
      clearInterval(sessionTokenTimeout.current)
      abortController.current.abort()
      placesAbortController.current.abort()
    }
  }, [])

  // Flag to make sure our useEffect does not run on initial render.
  const initialRender = React.useRef(false)
  // Debounce our search to only trigger an API call when user stops typing after (n)ms.
  const debouncedFn = React.useRef()
  // Effect triggers on every query change.
  React.useEffect(() => {
    if (initialRender.current === false) {
      initialRender.current = true
      return
    }

    // Cancel previous debounced call.
    if (debouncedFn.current) {
      debouncedFn.current.clear()
    }

    // If search length is 0, skip sending an API call.
    if (query.length === 0) {
      dispatch({
        type: 'INVALID_REQUEST',
      })
      return
    }

    if (!state.isLoading && !abortController.current.signal.aborted) {
      dispatch({
        type: 'LOADING',
      })
    }

    debouncedFn.current = debounce(() => {
      const types =
        options.types && type === 'places' ? `&types=${options.types}` : ''
      const strictbounds =
        options.strictbounds && types === 'places' ? `&strictbounds` : ''
      const offset =
        options.offset && type === 'query' ? `&offset=${options.offset}` : ''
      const language = options.language ? `&language=${options.language}` : ''
      const location = options.location ? `&location=${options.location}` : ''
      const radius = options.radius ? `&radius=${options.radius}` : ''

      const url = `${cors}https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}${types}${language}${location}${radius}${strictbounds}${offset}&key=${apiKey}&sessiontoken=${sessionToken.current}`

      fetch(url, { signal: abortSignal.current })
        .then(data => data.json())
        .then(data => {
          dispatch({
            type: data.status,
            payload: {
              data,
            },
          })
        })
        .catch(() => {
          // Component unmounted and API call cancelled.
          // Reset AbortController.
          if (abortController.current.signal.aborted) {
            abortController.current = new AbortController()
            abortSignal.current = abortController.current.signal
          }
        })
    }, debounceMs)

    debouncedFn.current()
  }, [
    query,
    debounceMs,
    apiKey,
    options.types,
    options.language,
    options.location,
    options.radius,
    options.strictbounds,
    options.offset,
    type,
  ])

  const getPlaceDetails = (placeId, placeDetailOptions = {}) => {
    return new Promise(resolve => {
      const fields = placeDetailOptions.fields
        ? `&fields=${placeDetailOptions.fields.join(',')}`
        : ''
      const region = placeDetailOptions.region
        ? `&region=${placeDetailOptions.region}`
        : ''
      // If no options are passed, we'll default to closured language option.
      const language = placeDetailOptions.language
        ? `&language=${placeDetailOptions.language}`
        : options.language
        ? `&language=${options.language}}`
        : ''

      const url = `${cors}https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}${fields}${region}${language}&key=${apiKey}&sessiontoken=${sessionToken.current}`

      fetch(url, { signal: placesAbortSignal.current })
        .then(data => data.json())
        .then(data => {
          // Reset session token after we make a Place Details query.
          resetSessionToken()
          resolve(data)
        })
        .catch(() => {
          // Component unmounted and API call cancelled.
        })
    })
  }

  const resetSessionToken = () => {
    sessionToken.current = getUniqueId()
  }

  // Exposes an additional method to cancel a query. Usage example would be
  // when a user selects an option and you update the input field to reflect
  // the change, calling 'cancelQuery' can cancel out the query that our hook
  // will call again (since our input field changed).
  //
  // We can pass an addition predictions to just show the item we just selected.
  const cancelQuery = prediction => {
    if (abortController.current) abortController.current.abort()

    dispatch({
      type: 'OK',
      payload: {
        data: {
          predictions: [prediction],
        },
      },
    })
  }

  return {
    results: state.results,
    isLoading: state.isLoading,
    error: state.error,
    getPlaceDetails,
    cancelQuery,
  }
}

const reducer = (state, action) => {
  // All cases, beside 'LOADING', are status codes provided from Google API's response.
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        isLoading: true,
      }
    case 'OK':
      return {
        ...state,
        results: action.payload.data,
        isLoading: false,
        error: null,
      }
    case 'ZERO_RESULTS':
      return {
        ...state,
        results: {
          predictions: [],
        },
        isLoading: false,
        error: `No results — try another input.`,
      }
    case 'INVALID_REQUEST':
      return {
        ...state,
        isLoading: false,
        error: null,
      }
    case 'REQUEST_DENIED':
      return {
        ...state,
        isLoading: false,
        error: `Invalid 'key' parameter.`,
      }
    case 'UNKNOWN_ERROR':
      return {
        ...state,
        isLoading: false,
        error: `Unknown error, refresh and try again.`,
      }
    default:
      return state
  }
}

// Credit David Walsh (https://davidwalsh.name/javascript-debounce-function)

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
  let timeout

  const executedFunction = function() {
    let context = this
    let args = arguments

    let later = function() {
      timeout = null
      if (!immediate) func.apply(context, args)
    }

    let callNow = immediate && !timeout

    clearTimeout(timeout)

    timeout = setTimeout(later, wait)

    if (callNow) func.apply(context, args)
  }

  executedFunction.clear = function() {
    clearTimeout(timeout)
    timeout = null
  }

  return executedFunction
}
