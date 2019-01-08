# Handling Browser Events with JavaScript: Button Clicks
> The learning objective of this exercise is writing event listeners to handle button clicks, and modifying the classList of DOM elements when those events are broadcast by the browser.

1. Write a function named flightHandlerFunction that will remove the disabled class on the corresponding `<section id="flight">` (section, not button) and replace it with a class of enabled.
1. Have your developer tools open. When you click the button, the following element...
```js 
  <section id="flight" class="power disabled">
 ```
Should then look like this.

```js 
<section id="flight" class="power enabled">
```
  
1. Once you have that working, write two more JavaScript functions, and two more querySelector().addEventListener() statements for handling the click event on the other two buttons. Those event handlers should perform the same step of removing disabled, and adding enabled on the corresponding `<section>` elements
  
1. Once that is complete, write two more event handlers for activating and deactivating all powers when the corresponding buttons are clicked. You will need to use the document.querySelectorAll() method for these.

