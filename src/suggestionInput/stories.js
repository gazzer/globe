import React, { useState, useEffect } from "react"
import { storiesOf } from "@storybook/react"

import SuggestionInput from "./"

import Wrapper from "../../stories/Wrapper"
import Separator from "../../stories/Separator"

storiesOf("Forms/SuggestionInput", module).add("Default", () => {
  const suggestions = ["Apple", "Banana", "Grapes"]

  const SuggestionInputWithValue = () => {
    const [value, setValue] = useState("")

    return (
      <SuggestionInput
        value={value}
        onChange={setValue}
        onSelect={sugg => alert("Selected: " + sugg)}
        getValue={suggestion => suggestion}
        renderSuggestion={(
          suggestion,
          isFocused,
          selectSuggestion,
          count,
          index
        ) => (
          <div
            onMouseDown={selectSuggestion}
            style={{
              color: isFocused ? "red" : "black",
              borderBottom:
                index < count - 1 ? "1px solid rgb(220, 220, 220)" : "",

              padding: 10,
            }}
          >
            {suggestion}
          </div>
        )}
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
        placeholder="Type to see suggestions"
      />
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

storiesOf("Forms/SuggestionInput", module).add("Data", () => {
  const suggestions = [
    { color: "green", name: "Apple" },
    { color: "yellow", name: "Banana" },
    { color: "purple", name: "Grapes" },
  ]

  const SuggestionInputWithValue = () => {
    const [value, setValue] = useState("")

    return (
      <SuggestionInput
        value={value}
        onChange={setValue}
        onSelect={sugg => alert("Selected: " + sugg.name)}
        getValue={suggestion => suggestion.name}
        renderSuggestion={(suggestion, isFocused, selectSuggestion) => (
          <div
            onMouseDown={selectSuggestion}
            style={{
              color: isFocused ? "red" : "black",
              padding: 10,
            }}
          >
            <b>{suggestion.name}</b>
            {suggestion.color}
          </div>
        )}
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
        placeholder="Type to see suggestions"
      />
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

storiesOf("Forms/SuggestionInput", module).add("Styled", () => {
  const suggestions = ["Apple", "Banana", "Grapes"]

  const SuggestionInputWithValue = () => {
    const [value, setValue] = useState("")

    return (
      <SuggestionInput
        value={value}
        onChange={setValue}
        onSelect={sugg => alert("Selected: " + sugg)}
        getValue={s => s}
        renderSuggestion={(suggestion, isFocused, selectSuggestion) => (
          <div
            onMouseDown={selectSuggestion}
            style={{
              fontSize: 30,
              color: isFocused ? "red" : "black",
              padding: 20,
            }}
          >
            {suggestion}
          </div>
        )}
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
        placeholder="Type to see suggestions"
      />
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
