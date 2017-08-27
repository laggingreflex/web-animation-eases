# web-animation-eases

Advanced easing functions for [Web Animations API] using [eases].

The [Web Animations API]'s [default easing] is limited by cubic-bezier timing function which cannot replicate effects like "elastic" and "bounce" - unless you use keyframes which can be a chore to write.

In comes this handy tool that converts those complex easing functions to keyframes for you!

## Install

```
npm i web-animation-eases
```

## Usage

### Example

```js
import eases from 'web-animation-eases'

document.getElementById('…').animate(
  eases.elasticIn({ keyframes: 100 })(x => ({
    transform: `scale(${x})`
  })),
  { duration: 1000 }
)

```

### API

```js
eases.<easing-function>(options)(<keyframe-returning-function>)
```

* **`<easing-function>`** Any one of the functions exported by [eases] library.

* **`options`**:

  * **`keyframes`** `[number:int]` `(default:100)` Maximum number of objects in the keyframe array, limited by `precision`.

  * **`precision`** `[number:float]` `(default:2)` Control decimal places (using [`toPrecision`][toPrecision]) when resolving the eased value (`x`) used in styling keyframes. Higher precision = more keyframes and more accurate easing.

* **`<keyframe-returning-function>`** `[required]` Function that accepts a number and returns a keyframe object:

  * Arguments:

    * **`x`** `[number]` An eased value from `0` to `1` used in the returning the `keyframeObject` object. May go outside the `0-1` range, especially for "elastic" and "bounce" functions.

  * Returns:

    * **`keyframeObject`** `[object]` An object containing key-value pairs to style the element.


## Libraries used

* **[eases]**: A grab-bag of [Robert Penner's easing equations](www.robertpenner.com/easing/)

[eases]: https://www.npmjs.com/package/eases
[Web Animations API]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API
[default easing]: https://developer.mozilla.org/en-US/docs/Web/API/AnimationEffectTimingProperties/easing
[Keyframe_Formats]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats

[Least count]: https://en.wikipedia.org/wiki/Least_count
[toPrecision]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Number/toPrecision



