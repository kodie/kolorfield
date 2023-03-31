# kolorfield

[![npm package version](https://img.shields.io/npm/v/kolorfield.svg?style=flat-square)](https://www.npmjs.com/package/kolorfield)
[![Travis build status](https://img.shields.io/travis/com/kodie/kolorfield.svg?style=flat-square)](https://travis-ci.com/kodie/kolorfield)
[![npm package downloads](https://img.shields.io/npm/dt/kolorfield.svg?style=flat-square)](https://www.npmjs.com/package/kolorfield)
[![code style](https://img.shields.io/badge/code_style-standard-yellow.svg?style=flat-square)](https://github.com/standard/standard)
[![license](https://img.shields.io/github/license/kodie/kolorfield.svg?style=flat-square)](license.md)

A tiny, dependency-free, color input field helper that utilizes the native color picker.


## Demo

Visit https://kolorfield.js.org


## Installation


### Manual Download

[Download the latest version of kolorfield](https://github.com/kodie/kolorfield/archive/refs/heads/main.zip) and then place the following HTML in your page's head element:

```html
<script type="text/javascript" src="dist/kolorfield.min.js"></script>
<link rel="stylesheet" href="dist/kolorfield.min.css" />
```


### CDN (Courtesy of [jsDelivr](https://jsdelivr.com))

Place the following HTML in your page's head element (check to make sure the version in the URLs are the version you want):

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/kodie/kolorfield@0.0.2/dist/kolorfield.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/kodie/kolorfield@0.0.2/dist/kolorfield.min.css" />
```


### [NPM](https://npmjs.com)

```
npm install kolorfield --save
```

```js
// ES6
import kolorfield from 'kolorfield'

// CommonJS
const kolorfield = require('kolorfield')
```


### [GPM](https://github.com/itsahappymedium/gpm)

```
gpm install kodie/kolorfield --save
```


### [Bower](https://bower.io)

```
bower install kodie/kolorfield --save
```


## Usage


### Basic HTML Structure

```html
<div class="kolorfield">
  <input type="color" id="main-color" value="#5185b3">
  <button type="button" class="kolorfield-open kolorfield-value" data-kolorfield-style-prop="background-color"></button>
</div>
```


### The `kolorfield` Function

Initiates kolorfield on any element that has the `kolorfield` class. This should be a container around your color input.


#### Example

```js
window.addEventListener('load', function () {
  kolorfield()
})
```


## Attributes/Classes

 * The `kolorfield-input` class - Any input element with this class will have it's value set to the selected color any time the color is changed. The color will also be set to any value that is entered into this input field.

 * The `kolorfield-open` class - Any element with this class will open the color picker when clicked.

 * The `kolorfield-value` class - Any element with this class will have it's text content set to the color when the color is changed. If this element is an input, it's value will be updated instead of text content.

 * The `data-kolorfield-style-prop` attribute - Set this attribute to a style property (like `background` or `color`) on an element to have it's style updated when the color is changed. Multiple style properties can be defined by separating them with a comma (ie. `background,color`).


## JavaScript Methods

The containing kolorfield element (the element with the `kolorfield` class) will have the following methods attached to it available for use:

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

 - [growfield](https://github.com/kodie/growfield) - A tiny, dependency-free JavaScript module for making textarea elements grow with their content.

 - [hashjump](https://github.com/kodie/hashjump) - A tiny, dependency-free JavaScript module for handling anchor links and scrolling elements into view.

 - [kloner](https://github.com/kodie/kloner) - A tiny, dependency-free JavaScript module for cloning/repeating elements.

 - [minitaur](https://github.com/kodie/minitaur) - The ultimate, dependency-free, easy to use, JavaScript plugin for creating and managing modals.

 - [peekfield](https://github.com/kodie/peekfield) - A dependency-free, easy to use, JavaScript plugin for hiding and showing fields.


## License

MIT. See the [license file](license.md) for more info.
