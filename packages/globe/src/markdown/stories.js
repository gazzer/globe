import React from 'react'
import { storiesOf } from '@storybook/react'

import Markdown from './'

import Wrapper from '../../stories/Wrapper'
import Separator from '../../stories/Separator'

const markdown = `
# Heading1
## Heading2
### Heading3
#### Heading4
##### Heading5
###### Heading6

This is a text with **bold**, *italic* and ~~stroke-through~~ text.

Some linebreaks:
<br>
<br>
<br>

----

[Links](/)
![Images](https://gazzer.io/images/sketches/event.svg)


| Table | With | Header |
| --- | --- | --- |
| Items | In | There |
| Works | Just | Fine |


Also supports \`inline code\` and code blocks.

\`\`\`javascript
const foo = bar => foo + bar
\`\`\`

Lists:

- Foo
- Bar 
- Baz
  - Nested
  - As
    - Well

Bullet List:

* Bullets
* Too


Numbered List:

1. First
2. Second
3. Third
  3.1. First
  3.2. Second


> Some quote
`

const lorem = `
# Lorem Ipsum
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
<br>
We can also have **bold** *italic* and ~~strike-through~~ text here.

## Agenda

Text before:

- Intro
- Talks
  - Foo Bar - "Baz"
  - Bar Foo - "FooBar"
- Food & Drinks
- Open End


### Some numbers
1. Foo
2. Bar
3. Baz

---

> Additional information: Check [website]().

Lorem Ipsum.<br>
~Lorem

![Images](https://gazzer.io/images/sketches/event.svg)
`

storiesOf('Misc/Markdown', module)
  .add('Default', () => (
    <Wrapper>
      <Separator>
        <Markdown value={markdown} />
      </Separator>
    </Wrapper>
  ))
  .add('Description', () => (
    <Wrapper>
      <Separator>
        <Markdown value={lorem} />
      </Separator>
    </Wrapper>
  ))
