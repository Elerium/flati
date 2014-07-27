# flati

Deterministic generator of unique flat colors

## Installation

### npm:
```sh
npm install flati --save
```

### bower:
```sh
bower install flati --save
```

* Package can be loaded with AMD, Node.js or globally through `window.flati`.

## Api

`flati(seed: String|Number, i: Number)`

## Usage:

```javascript
var seed = 'foo';
var generator = flati.bind(null, seed);

var color1 = generator(0);
var color2 = generator(1);

// or just
flati('bar', 0);
```

* It's guaranteed that two similar color will not be generated consecutive.
* With the same seed, you always gets the same results.
* Seed can be e.g. user id, if you want generate different color for every user.