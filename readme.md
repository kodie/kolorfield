# colorfield

[![npm package version](https://img.shields.io/npm/v/@kodie/colorfield.svg?style=flat-square)](https://www.npmjs.com/package/@kodie/colorfield)
[![Travis build status](https://img.shields.io/travis/com/kodie/colorfield.svg?style=flat-square)](https://travis-ci.com/kodie/colorfield)
[![npm package downloads](https://img.shields.io/npm/dt/@kodie/colorfield.svg?style=flat-square)](https://www.npmjs.com/package/@kodie/colorfield)
[![code style](https://img.shields.io/badge/code_style-standard-yellow.svg?style=flat-square)](https://github.com/standard/standard)
[![license](https://img.shields.io/github/license/kodie/colorfield.svg?style=flat-square)](license.md)

A tiny, dependency-free, color input field helper that utilizes the native color picker.


## Demo
Visit https://kodie.github.io/colorfield


## Usage
Add the CSS (which is simply just used to hide the native color input):

```html
<link rel="stylesheet" href="dist/colorfield.min.css" />
```

and the JS:

```html
<script type="text/javascript" src="dist/colorfield.min.js"></script>
```

and your HTML:

```html
<div class="colorfield">
  <input type="color" id="main-color" value="#5185b3">
  <button type="button" class="colorfield-open colorfield-value" data-colorfield-style-prop="background-color"></button>
</div>
```

And then just use the function below:


### The `colorfield` Function

Initiates colorfield on any element that has the `colorfield` class. This should be a container around your color input.


#### Example
```js
window.addEventListener('load', function () {
  colorfield()
})
```


## Attributes/Classes

 * The `colorfield-input` class - Any input element with this class will have it's value set to the selected color any time the color is changed. The color will also be set to any value that is entered into this input field.

 * The `colorfield-open` class - Any element with this class will open the color picker when clicked.

 * The `colorfield-value` class - Any element with this class will have it's text content set to the color when the color is changed. If this element is an input, it's value will be updated instead of text content.

 * The `data-colorfield-style-prop` attribute - Set this attribute to a style property (like `background` or `color`) on an element to have it's style updated when the color is changed. Multiple style properties can be defined by separating them with a comma (ie. `background,color`).


## JavaScript Methods

The containing colorfield element (the element with the `colorfield` class) will have the following methods attached to it available for use:

```js
var color = document.querySelector('.color')

color.open() // Opens the color picker

color.set('#00ff00') // Sets the color

var currentColor = color.get() // Gets the current color

// The `change` event bubbles up to the containing element so you can detect changes like so:
color.addEventListener('change', function () {
  document.body.style.setProperty('--color', event.target.value)
})
```


## Related

 - [filebokz](https://github.com/kodie/filebokz) - A tiny, dependency-free, highly customizable and configurable, easy to use file input with some pretty sweet features.


## License
MIT. See the [license file](license.md) for more info.
