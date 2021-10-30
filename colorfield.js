/*!
  colorfield v0.0.2 (https://github.com/kodie/colorfield)
  by Kodie Grantham (https://kodieg.com)
*/

var colorfield = function () {
  var elements = document.getElementsByClassName('colorfield')

  for (var i = 0; i < elements.length; i++) {
    (function (element) {
      var input = element.querySelector('input[type="color"]')

      if (input) {
        var openElements = element.getElementsByClassName('colorfield-open')
        var valueInputs = element.getElementsByClassName('colorfield-input')
        var valueElements = element.getElementsByClassName('colorfield-value')
        var stylePropElements = element.querySelectorAll('[data-colorfield-style-prop]')

        element.open = function () {
          input.focus()
          input.click()
        }

        element.set = function (value) {
          var currentValue = input.value

          if (value.charAt(0) !== '#') value = '#' + value
          if (value === currentValue) return
          if (value.length > 7) value = value.substr(0, 7)

          if (value.length >= 4 && value.length < 7) {
            value = '#' + value[1] + value[1] + value[2] + value[2] + value[3] + value[3]
          }

          input.value = value

          colorfield.triggerEvent('change', input)
        }

        element.get = function () {
          return input.value
        }

        if (openElements.length) {
          for (var j = 0; j < openElements.length; j++) {
            var openElement = openElements[j]

            openElement.addEventListener('click', function (e) {
              element.open()
            }, false)

            openElement.addEventListener('focus', function (e) {
              element.open()
            }, false)
          }
        }

        if (valueInputs.length) {
          for (var v = 0; v < valueInputs.length; v++) {
            var valueInput = valueInputs[v]

            valueInput.addEventListener('change', function (e) {
              if (!e.colorfieldTriggered) {
                element.set(valueInput.value)
              }
            }, false)

            valueInput.addEventListener('input', function (e) {
              if (valueInput.colorfieldTimer) {
                clearTimeout(valueInput.colorfieldTimer)
              }

              valueInput.colorfieldTimer = colorfield.triggerEvent('change', valueInput, {}, 1000)
            })
          }
        }

        input.addEventListener('change', function (e) {
          if (valueInputs.length) {
            for (var a = 0; a < valueInputs.length; a++) {
              var valueInput = valueInputs[a]
              valueInput.value = input.value
            }
          }

          if (valueElements.length) {
            for (var b = 0; b < valueElements.length; b++) {
              var valueElement = valueElements[b]
              var valueElementType = valueElement.tagName.toLowerCase()

              if (valueElementType === 'input') {
                valueElement.val = input.value
              } else {
                valueElement.textContent = input.value
              }
            }
          }

          if (stylePropElements.length) {
            for (var c = 0; c < stylePropElements.length; c++) {
              var stylePropElement = stylePropElements[c]
              var styleProps = stylePropElement.getAttribute('data-colorfield-style-prop').split(',')

              for (var k = 0; k < styleProps.length; k++) {
                stylePropElement.style[styleProps[k]] = input.value
              }
            }
          }
        })

        colorfield.triggerEvent('change', input)
      } else {
        console.warn(element, 'An color input field is required for each colorfield instance.')
      }
    })(elements[i])
  }

  return elements
}

colorfield.triggerEvent = function (type, element, data, delay) {
  return setTimeout(function () {
    var e = new Event(type, { bubbles: true })

    for (var key in data) {
      if (data.hasOwnProperty(key)) e[key] = data[key]
    }

    element.dispatchEvent(e)
  }, delay || 1)
}
