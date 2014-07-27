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

* Package can be loaded with AMD, Node.js or globally with `window.flati`.

## Api

`flati(seed: String|Number, i: Optional Number)`

## Usage:

For example if we want generate unique color for each user.

```javascript
var users = [
    {id: 'john'},
    {id: 'jane'},
    {id: 'jenny'}
];

users.forEach(function(user) {
    // use user id as seed
    var color1 = flati(user.id); // equal to flati(user.id, 0);
    var color2 = flati(user.id, 1);
});
```

* It's guaranteed that two similar color will not be generated consecutive.
* With the same seed, you always gets the same results.