This is a accordion.

### Basic Usage

```jsx
const [expanded, setExpanded] = React.useState(false)

;<Accordion
  expanded={expanded}
  onChange={setExpanded}
  trigger={() => 'Accordion'}>
  Hello
</Accordion>
```

### Adapting Text

```jsx
const [expanded, setExpanded] = React.useState(false)

;<Accordion
  expanded={expanded}
  onChange={setExpanded}
  trigger={isExpanded => (isExpanded ? 'Hide' : 'Show')}>
  Hello
</Accordion>
```
