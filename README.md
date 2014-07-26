# flati

Deterministic unique flat color generator for JavaScript

## Installation

npm:
```sh
npm install flati --save
```

bower:
```sh
bower install flati --save
```

## Usage:

### Signature:
`flati(seed: String, i: Number)`

```javascript
var seed = 'foobar';
var generator = flati.bind(null, seed);

var color1 = generator(0);
var color2 = generator(1);

// or just
flati('foobar', 0);
```

This package can be load through AMD, CommonJS or globally. It's guaranteed that two similar color will not be generated consecutive. With the same seed, you always gets the same results. For example seed can be user id or user name if you want get different color for every user.