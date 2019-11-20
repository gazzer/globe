import React from 'react'
import { setAddon, configure, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import StoryWrapper from '../src/StoryWrapper.bs.js'

const req = require.context('../src', true, /stories\.js$/)

function loadStories() {
  const stories = [
    // Core
    './icons/stories.js',
    './text/stories.js',

    // disclosure
    './accordion/stories.js',
    './modal/stories.js',

    // Layout
    './card/stories.js',
    './grid/stories.js',
    './box/stories.js',
    './scrollView/stories.js',

    // Actions
    './button/stories.js',
    './iconButton/stories.js',
    './link/stories.js',

    // Indicators
    './loading/stories.js',

    // Forms
    './checkbox/stories.js',
    './radio/stories.js',
    './toggle/stories.js',
    './select/stories.js',
    './textInput/stories.js',
    './textArea/stories.js',
    './numberInput/stories.js',
    './timeInput/stories.js',
    './dateInput/stories.js',
    './dateTimeInput/stories.js',
    './datePicker/stories.js',
    './locationInput/stories.js',
    './suggestionInput/stories.js',
    './markdownInput/stories.js',

    // Misc
    './markdown/stories.js',

    // Navigation
    './tabNav/stories.js',
    './nav/stories.js',
  ]

  stories.forEach(filename => req(filename))
  require('./debug.js')
}

addDecorator(withKnobs)
addDecorator(story => {
  const content = story()
  return <StoryWrapper isStorybook>{content}</StoryWrapper>
})

configure(loadStories, module)
