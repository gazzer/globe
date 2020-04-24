import React, { useState, useEffect } from 'react'
import { storiesOf } from '@storybook/react'

import SuggestionInput from './'
import SuggestionItem from '../suggestionItem'

import Wrapper from '../../../stories/Wrapper'
import Separator from '../../../stories/Separator'

storiesOf('Forms/SuggestionInput', module)
  .add('Default', () => {
    const suggestions = [
      'Apple',
      'Banana',
      'Grapes',
      'Cherry',
      'Pineapple',
      'Strawberry',
    ]

    const SuggestionInputWithValue = () => {
      const [value, setValue] = useState('')

      return (
        <SuggestionInput
          value={value}
          onChange={setValue}
          onSelect={sugg => alert('Selected: ' + sugg)}
          getValue={suggestion => suggestion}
          getSuggestions={value =>
            new Promise((resolve, reject) => {
              const search = value.trim().toLowerCase()

              setTimeout(
                () =>
                  resolve(
                    suggestions.filter(
                      sugg =>
                        sugg
                          .trim()
                          .toLowerCase()
                          .indexOf(search) !== -1
                    )
                  ),
                Math.random() * 1000
              )
            })
          }
          placeholder="Type to see suggestions">
          {(suggestion, isFocused, selectSuggestion) => (
            <SuggestionItem isFocused={isFocused} onClick={selectSuggestion}>
              {suggestion}
            </SuggestionItem>
          )}
        </SuggestionInput>
      )
    }

    return (
      <Wrapper>
        <Separator>
          <SuggestionInputWithValue />
        </Separator>
      </Wrapper>
    )
  })

  .add('Labeled', () => {
    const suggestions = [
      'Apple',
      'Banana',
      'Grapes',
      'Cherry',
      'Pineapple',
      'Strawberry',
    ]
    const SuggestionInputWithValue = () => {
      const [value, setValue] = useState('')

      return (
        <SuggestionInput
          value={value}
          onChange={setValue}
          onSelect={sugg => alert('Selected: ' + sugg)}
          getValue={suggestion => suggestion}
          label="Choose a fruit"
          getSuggestions={value =>
            new Promise((resolve, reject) => {
              const search = value.trim().toLowerCase()

              setTimeout(
                () =>
                  resolve(
                    suggestions.filter(
                      sugg =>
                        sugg
                          .trim()
                          .toLowerCase()
                          .indexOf(search) !== -1
                    )
                  ),
                Math.random() * 1000
              )
            })
          }
          placeholder="Type to see suggestions">
          {(suggestion, isFocused, selectSuggestion) => (
            <SuggestionItem isFocused={isFocused} onClick={selectSuggestion}>
              {suggestion}
            </SuggestionItem>
          )}
        </SuggestionInput>
      )
    }

    return (
      <Wrapper>
        <Separator>
          <SuggestionInputWithValue />
        </Separator>
      </Wrapper>
    )
  })

  .add('Masked', () => {
    const suggestions = ['facebook', 'twitter', 'github']
    const SuggestionInputWithValue = () => {
      const [value, setValue] = useState('')

      return (
        <SuggestionInput
          value={value}
          onChange={setValue}
          onSelect={sugg => alert('Selected: ' + sugg)}
          getValue={suggestion => suggestion}
          label="Choose a service"
          maskStart="https://"
          maskEnd=".com"
          getSuggestions={value =>
            new Promise((resolve, reject) => {
              const search = value.trim().toLowerCase()

              setTimeout(
                () =>
                  resolve(
                    suggestions.filter(
                      sugg =>
                        sugg
                          .trim()
                          .toLowerCase()
                          .indexOf(search) !== -1
                    )
                  ),
                Math.random() * 1000
              )
            })
          }
          placeholder="Type to see suggestions">
          {(suggestion, isFocused, selectSuggestion) => (
            <SuggestionItem isFocused={isFocused} onClick={selectSuggestion}>
              {suggestion}
            </SuggestionItem>
          )}
        </SuggestionInput>
      )
    }

    return (
      <Wrapper>
        <Separator>
          <SuggestionInputWithValue />
        </Separator>
      </Wrapper>
    )
  })

  .add('Disabled', () => {
    const suggestions = [
      'Apple',
      'Banana',
      'Grapes',
      'Cherry',
      'Pineapple',
      'Strawberry',
    ]
    const SuggestionInputWithValue = () => {
      const [value, setValue] = useState('')

      return (
        <SuggestionInput
          value="Apple"
          onChange={setValue}
          disabled
          onSelect={sugg => alert('Selected: ' + sugg)}
          getValue={suggestion => suggestion}
          label="Choose a fruit"
          getSuggestions={value =>
            new Promise((resolve, reject) => {
              const search = value.trim().toLowerCase()

              setTimeout(
                () =>
                  resolve(
                    suggestions.filter(
                      sugg =>
                        sugg
                          .trim()
                          .toLowerCase()
                          .indexOf(search) !== -1
                    )
                  ),
                Math.random() * 1000
              )
            })
          }
          placeholder="Type to see suggestions">
          {(suggestion, isFocused, selectSuggestion) => (
            <SuggestionItem isFocused={isFocused} onClick={selectSuggestion}>
              {suggestion}
            </SuggestionItem>
          )}
        </SuggestionInput>
      )
    }

    return (
      <Wrapper>
        <Separator>
          <SuggestionInputWithValue />
        </Separator>
      </Wrapper>
    )
  })

  .add('Validation', () => {
    const suggestions = [
      'Apple',
      'Banana',
      'Grapes',
      'Cherry',
      'Pineapple',
      'Strawberry',
    ]
    const SuggestionInputWithValue = () => {
      const [value, setValue] = useState('')
      const [isValid, setValid] = useState(false)

      return (
        <SuggestionInput
          value={value}
          onChange={newVal => {
            setValue(newVal)
            setValid(false)
          }}
          isValid={isValid}
          error={isValid ? null : 'Please choose a fruit.'}
          onSelect={sugg => {
            setValid(true)
          }}
          getValue={suggestion => suggestion}
          label="Choose a fruit"
          getSuggestions={value =>
            new Promise((resolve, reject) => {
              const search = value.trim().toLowerCase()

              setTimeout(
                () =>
                  resolve(
                    suggestions.filter(
                      sugg =>
                        sugg
                          .trim()
                          .toLowerCase()
                          .indexOf(search) !== -1
                    )
                  ),
                Math.random() * 1000
              )
            })
          }
          placeholder="Type to see suggestions">
          {(suggestion, isFocused, selectSuggestion) => (
            <SuggestionItem isFocused={isFocused} onClick={selectSuggestion}>
              {suggestion}
            </SuggestionItem>
          )}
        </SuggestionInput>
      )
    }

    return (
      <Wrapper>
        <Separator>
          <SuggestionInputWithValue />
        </Separator>
      </Wrapper>
    )
  })

storiesOf('Forms/SuggestionInput', module).add('Data Structure', () => {
  const suggestions = [
    { color: 'green', name: 'Apple' },
    { color: 'yellow', name: 'Banana' },
    { color: 'purple', name: 'Grapes' },
  ]

  const SuggestionInputWithValue = () => {
    const [value, setValue] = useState('')

    return (
      <SuggestionInput
        value={value}
        onChange={setValue}
        label="Choose a fruit"
        onSelect={sugg => alert('Selected: ' + sugg.name)}
        getValue={sugg => sugg.name}
        getSuggestions={value =>
          new Promise((resolve, reject) => {
            const search = value.trim().toLowerCase()

            setTimeout(
              () =>
                resolve(
                  suggestions.filter(
                    sugg =>
                      sugg.name
                        .trim()
                        .toLowerCase()
                        .indexOf(search) !== -1
                  )
                ),
              Math.random() * 1000
            )
          })
        }
        placeholder="Type to see suggestions">
        {(suggestion, isFocused, selectSuggestion) => (
          <SuggestionItem isFocused={isFocused} onClick={selectSuggestion}>
            <b>{suggestion.name}</b>
            {suggestion.color}
          </SuggestionItem>
        )}
      </SuggestionInput>
    )
  }

  return (
    <Wrapper>
      <Separator>
        <SuggestionInputWithValue />
      </Separator>
    </Wrapper>
  )
})

storiesOf('Forms/SuggestionInput', module).add('Layout', () => {
  const suggestions = ['Apple', 'Banana', 'Grapes']

  const SuggestionInputWithValue = () => {
    const [value, setValue] = useState('')

    return (
      <SuggestionInput
        value={value}
        onChange={setValue}
        label="Choose a fruit"
        onSelect={sugg => alert('Selected: ' + sugg)}
        getValue={s => s}
        getSuggestions={value =>
          new Promise((resolve, reject) => {
            const search = value.trim().toLowerCase()

            setTimeout(
              () =>
                resolve(
                  suggestions.filter(
                    sugg =>
                      sugg
                        .trim()
                        .toLowerCase()
                        .indexOf(search) !== -1
                  )
                ),
              Math.random() * 1000
            )
          })
        }
        placeholder="Type to see suggestions">
        {(suggestion, isFocused, selectSuggestion) => (
          <SuggestionItem isFocused={isFocused} onClick={selectSuggestion}>
            <div
              style={{
                fontSize: 30,
                color: isFocused ? 'red' : 'black',
                padding: 10,
              }}>
              {suggestion}
            </div>
          </SuggestionItem>
        )}
      </SuggestionInput>
    )
  }

  return (
    <Wrapper>
      <Separator>
        <SuggestionInputWithValue />
      </Separator>
    </Wrapper>
  )
})
