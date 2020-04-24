Well, a button, not much to say about that.

### Basic Usage

```jsx
<Box space={2}>
  <Button variant={Button.variant.Primary}>Click Me</Button>
  <Button variant={Button.variant.Destructive}>Click Me</Button>
</Box>
```

### Outline

Outlined buttons are usually used for actions that lead to editing something.<br>
Commonly used as a secondary button following a filled one.

```jsx
<Box space={2}>
  <Button variant={Button.variant.Primary} intent={Button.intent.Outline}>
    Click Me
  </Button>
  <Button variant={Button.variant.Destructive} intent={Button.intent.Outline}>
    Click Me
  </Button>
</Box>
```

### Text

Text-only buttons are mostly used for inline actions e.g. altering an input value.<br>
They can also be used as tertiary buttons.

```jsx
<Box space={2}>
  <Button variant={Button.variant.Primary} intent={Button.intent.Text}>
    Click Me
  </Button>
  <Button variant={Button.variant.Destructive} intent={Button.intent.Text}>
    Click Me
  </Button>
</Box>
```

### Disabled

```jsx
<Box space={2}>
  <Button disabled>Click Me</Button>
  <Button disabled intent={Button.intent.Outline}>
    Click Me
  </Button>
  <Button disabled intent={Button.intent.Text}>
    Click Me
  </Button>
</Box>
```

### Loading

Loading buttons are used for actions that are triggered by a button and do not lead to a page reload or rerender data (e.g. login)

```jsx
<Box space={2}>
  <Button loading>Click Me</Button>
  <Button loading intent={Button.intent.Outline}>
    Click Me
  </Button>
  <Button loading intent={Button.intent.Text}>
    Click Me
  </Button>
</Box>
```

### Sizes

```jsx
<Box space={2}>
  <Button size={Button.size.Small}>Small</Button>
  <Button size={Button.size.Normal}>Normal</Button>
  <Button size={Button.size.Big}>Big</Button>
</Box>
```

### onClick

```jsx
<Box space={2}>
  <Button onClick={() => alert('Clicked')}>Click Me</Button>
</Box>
```

### href

```jsx
<Box space={2}>
  <Button href="/test">Click Me</Button>
</Box>
```

### Submit Input

```jsx
<Box space={2}>
  <Button submit>Click Me</Button>
</Box>
```
