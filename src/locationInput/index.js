import React, { useRef, useState, useEffect } from "react"
import useGoogleAutocomplete from "use-google-autocomplete"

import TextInput from "../textInput"

const API_KEY = process.env.GOOGLE_PLACES_KEY
const icon =
  "PHN2ZyBoZWlnaHQ9IjEwMDBweCIgd2lkdGg9IjUwMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MDAgMTAwMCIgZmlsbD0iIzljOWM5YyI+CiAgICA8cGF0aCBkPSJNMjUwIDEwMGM2OS4zMzMgMCAxMjguMzMzIDI0LjMzMyAxNzcgNzNjNDguNjY3IDQ4LjY2NyA3MyAxMDcuNjY3IDczIDE3N2MwIDcwLjY2NyAtMjAuNjY3IDE1MS42NjcgLTYyIDI0M2MtNDEuMzMzIDkxLjMzMyAtODMuMzMzIDE2NS42NjcgLTEyNiAyMjNjMCAwIC02MiA4NCAtNjIgODRjLTYuNjY3IC04IC0xNS42NjcgLTE5LjY2NyAtMjcgLTM1Yy0xMS4zMzMgLTE1LjMzMyAtMzEuMzMzIC00NSAtNjAgLTg5Yy0yOC42NjcgLTQ0IC01NCAtODcuMzMzIC03NiAtMTMwYy0yMiAtNDIuNjY3IC00MiAtOTEuNjY3IC02MCAtMTQ3Yy0xOCAtNTUuMzMzIC0yNyAtMTA1IC0yNyAtMTQ5YzAgLTY5LjMzMyAyNC4zMzMgLTEyOC4zMzMgNzMgLTE3N2M0OC42NjcgLTQ4LjY2NyAxMDcuNjY3IC03MyAxNzcgLTczYzAgMCAwIDAgMCAwbTAgMzg4YzM3LjMzMyAwIDY5LjMzMyAtMTMuMzMzIDk2IC00MGMyNi42NjcgLTI2LjY2NyA0MCAtNTguNjY3IDQwIC05NmMwIC0zNy4zMzMgLTEzLjMzMyAtNjkgLTQwIC05NWMtMjYuNjY3IC0yNiAtNTguNjY3IC0zOSAtOTYgLTM5Yy0zNy4zMzMgMCAtNjkgMTMgLTk1IDM5Yy0yNiAyNiAtMzkgNTcuNjY3IC0zOSA5NWMwIDM3LjMzMyAxMyA2OS4zMzMgMzkgOTZjMjYgMjYuNjY3IDU3LjY2NyA0MCA5NSA0MGMwIDAgMCAwIDAgMCIvPgo8L3N2Zz4="

export default function LocationInput({
  value,
  type_ = "address",
  name,
  isValid,
  required,
  disabled,
  onChange,
}) {
  const inputRef = useRef()
  const [didClick, setDidClick] = useState(false)
  const [focused, setFocused] = useState(-1)
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  })

  const { results, isLoading, error, getPlaceDetails } = useGoogleAutocomplete({
    apiKey: API_KEY,
    query: value,
    options: {
      types: type_,
    },
  })

  const showBox =
    !didClick &&
    value.length > 0 &&
    !isLoading &&
    !error &&
    results.predictions.length > 0 &&
    (results.predictions.length > 1 ||
      results.predictions[0].description !== value)

  useEffect(() => {
    if (
      results.predictions.length === 1 &&
      results.predictions[0].description === value
    ) {
      getPlaceDetails(results.predictions[0].place_id, {})
        .then(res => {
          const { place_id, geometry, url } = res.result
          const location = {
            placeId: place_id,
            url,
            ...geometry.location,
            value,
          }

          onChange(value, JSON.stringify(location))
        })
        .catch(e => console.error(e))
    }
  }, [results])

  useEffect(() => {
    const input = inputRef.current

    if (input) {
      setDimensions({
        width: input.offsetWidth,
        height: input.offsetHeight,
        left: input.offsetLeft,
        top: input.offsetTop,
      })
    }
  }, [inputRef])

  return (
    <div style={{ width: "100%" }}>
      <TextInput
        name={name}
        isValid={isValid}
        disabled={disabled}
        required={required}
        ref={inputRef}
        value={value}
        autoComplete="off"
        onChange={value => {
          setFocused(-1)
          onChange(value)
          setDidClick(false)
        }}
        onKeyDown={e => {
          if (showBox) {
            if (e.keyCode === 13 && focused !== -1) {
              e.preventDefault()

              const { description, place_id: id } = results.predictions[focused]

              getPlaceDetails(id, {})
                .then(res => {
                  const { place_id, geometry, url } = res.result
                  const location = {
                    placeId: place_id,
                    url,
                    ...geometry.location,
                    value,
                  }

                  onChange(description, JSON.stringify(location))
                })
                .catch(e => console.error(e))

              setDidClick(true)
            }

            if (e.keyCode === 40) {
              setFocused(Math.min(results.predictions.length - 1, focused + 1))
            }

            if (e.keyCode === 38) {
              setFocused(Math.max(0, focused - 1))
            }
          }
        }}
        style={{
          borderRadius: showBox ? "7px 7px 0 0" : 7,
          backgroundImage: 'url("data:image/svg+xml;base64,' + icon + '")',
          backgroundSize: "22px 22px",
          backgroundPosition: "left 10px center",
          paddingLeft: 38,
          backgroundRepeat: "no-repeat",
        }}
      />
      {showBox ? (
        <ul
          style={{
            position: "relative",
            width: dimensions.width,
            marginTop: -2,
            listStyle: "none",
            zIndex: 100,
            borderWidth: 2,
            borderStyle: "solid",
            borderColor: "rgb(220, 220 ,220)",
            borderRadius: "0 0 7px 7px",
            boxSizing: "border-box",
          }}
        >
          {results.predictions.map((prediction, index, arr) => (
            <LocationOption
              {...prediction}
              key={prediction.description}
              isFocused={focused === index}
              isLast={arr.length - 1 === index}
              onClick={value => {
                getPlaceDetails(prediction.place_id, {})
                  .then(res => {
                    const { place_id, geometry, url } = res.result
                    const location = {
                      placeId: place_id,
                      url,
                      ...geometry.location,
                      value,
                    }

                    onChange(value, JSON.stringify(location))
                  })
                  .catch(e => console.error(e))

                setDidClick(true)
              }}
            />
          ))}
        </ul>
      ) : null}
    </div>
  )
}

const LocationOption = ({
  description,
  matched_substring,
  place_id,
  structured_formatting,
  onClick,
  isLast,
  isFocused,
}) => {
  const { main_text, secondary_text } = structured_formatting

  return (
    <li
      onClick={() => onClick(description)}
      style={{
        flexShrink: 1,
        width: "100%",
        boxSizing: "border-box",
        borderBottom: isLast ? 0 : "1px solid rgb(220, 220, 220)",
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 12,
        paddingBottom: 12,
        backgroundColor: isFocused ? "#e4e7e7" : "white",
        cursor: "pointer",
        borderRadius: isLast ? "0 0 5px 5px" : 0,
      }}
    >
      <b>{main_text}</b>
      {", "}
      {secondary_text}
    </li>
  )
}
