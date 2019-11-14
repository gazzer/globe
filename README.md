# Globe

> **Warning**: Globe is WIP and not yet ready to be used. Documentation might be wrong, incomplete and changing.

Globe is the design system behind [gazzer.io](https://gazzer.io).<br>
It is mobile-first and supports theming, rtl-convertion and has accessibility built-in.

It is written in [ReasonML](https://reasonml.github.io) and [Elodin](https://elodin.dev) and right now _only_ targets React.<br>
It can be used with JavaScript **and** ReasonML.

## Installation

```sh
yarn add @gazzer/globe
```

## Usage

### JavaScript

If you're using Globe with JavaScript, all you have to do is wrap your app with the `StyleProvider` component.

```javascript
import { StyleProvider } from '@gazzer/globe'

import App from '../path/to/root'

export default () => (
  <StyleProvider>
    <App />
  </StyleProvider>
)
```

Now you're ready to import components as you like.

```javascript
import { ScrollView, Box, Button } from '@gazzer/globe'

export default () => (
  <ScrollView>
    <Box padding={4} space={2}>
      <Button>Click</Button>
      <Button>Me</Button>
    </Box>
  </ScrollView>
)
```

### ReasonML

First of all, you'll have to add `"@gazzer/globe"` to your `bsconfig.json` in order to be compiled.<br>
You might also need to add `"reason-fela"` as it's a direct dependency.

Once set up, you have to wrap your app with the `StyleProvider` component.

```reason
open Globe;

[@react.component]
let make = () =>
  <StyleProvider>
    <App />
  </StyleProvider>;
```

Now you're ready to import components as you like.

```reason
open Globe;

let s = React.string;

[@react.component]
let make = () =>
  <ScrollView>
    <Box padding=4 space=2>
      <Button>"Click"->s</Button>
      <Button>"Me"->s</Button>
    </Box>
  </ScrollView>
```

## License

Globe is licensed under the [MIT License](http://opensource.org/licenses/MIT).<br>
Documentation is licensed under [Creative Common License](http://creativecommons.org/licenses/by/4.0/).<br>
Created with ♥ by [@robinweser](http://weser.io).
