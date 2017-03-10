# is-safe-path

Check if a path is safe to use to prevent directory traversal attacks.

## Installation

```
$ npm install is-safe-path
```

## Usage

```js
const isSafePath = require('is-safe-path');

isSafePath('foo/bar'); // => true
isSafePath('foo/../../bar'); // => false
```

## License
Copyright (c) 2017 Martin Kolárik. Released under the MIT license.
