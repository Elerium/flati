![flati](http://i62.tinypic.com/2aajbdj.jpg)

# flati

Deterministic generator of unique flat colors

## Installation

#### npm:
```sh
npm install flati --save
```

#### Bower:
```sh
bower install flati --save
```

* Package can be loaded via AMD, Node.js or globally with `window.flati`.

## Api

`flati(seed: String|Number, i: Optional Number)`

##### Returns value in RGB color space:
```javascript
{
    r: Number,
    g: Number, 
    b: Number,
    toString: Function // rgb(r, g, b)
}
```

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

* When you increment `i` parameter, it's guaranteed that two similar colors will not be generated consecutive.
* With the same seed, you always gets the same results.
