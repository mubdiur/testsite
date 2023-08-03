const mouseUpButton = document.getElementById('PreventMouseUp');
const clickButton = document.getElementById('PreventClick');
const mouseDownButton = document.getElementById('PreventMouseDown');
const doubleClickButton = document.getElementById('PreventDoubleClick');
const preventAllButton = document.getElementById('PreventAll');

const events = ['click', 'mousedown', 'mouseup', 'pointerdown', 'pointerup', 'touchstart', 'dblclick'];

function hideEvent(e, elem) {
  if ((e.composedPath())[0] === elem) {
    e.stopImmediatePropagation();
    e.stopPropagation();
  }
}

window.addEventListener('mouseup', function(e) {
  hideEvent(e, mouseUpButton);
}, true);
window.addEventListener('click', function(e) {
  hideEvent(e, clickButton);
}, true);
window.addEventListener('mousedown', function(e) {
  hideEvent(e, mouseDownButton);
}, true);

window.addEventListener('dblclick', function(e) {
  hideEvent(e, doubleClickButton);
}, true);

window.addEventListener('pointerup', function(e) {
  hideEvent(e, mouseUpButton);
}, true);
window.addEventListener('pointerdown', function(e) {
  hideEvent(e, mouseDownButton);
}, true);

window.addEventListener('touchstart', function(e) {
  hideEvent(e, mouseDownButton);
}, true);

// prevent all
for (const event of events) {
  window.addEventListener(event, function(e) {
    hideEvent(e, preventAllButton);
  }, true);
}


// add event listener to window
for (const event of events) {
  window.addEventListener(event, function(e) {
    console.log(`${event} fired`);
  }, true);
}
