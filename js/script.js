// calculation functions
function s(v) { document.getElementById('res').value = v }
function a(v) { document.getElementById('res').value += v }
function e() { try { s(eval(document.getElementById('res').value)) } catch(e) { s('Error') } }

// backspace button
function backspace() {
  var input, num;
  input = document.getElementById('res');
  num = input.value;
  input.value = num.slice(0,num.length-1);
  return false;
}

// hammer js swipe
var swipeElement = document.getElementById('swipeElement');

var mc = new Hammer(swipeElement);

mc.get('swipe').set({direction: Hammer.DIRECTION_ALL, velocity:0.1, threshold:1});

// listen to events...
mc.on('swipeup', function(e) {
    swipeElement.textContent = a('+');
});

mc.on('swipedown', function(e) {
    swipeElement.textContent = a('-');
});

mc.on('swipeleft', function(e) {
    swipeElement.textContent = a('*');
});

mc.on('swiperight', function(e) {
    swipeElement.textContent = a('/');
});

// hammer js pinch
var clearElement = document.getElementById('clearElement');

var mc2 = new Hammer(clearElement);

mc2.get('pinch').set({ enable: true });

mc2.on('pinchout', function(e) {
	clearElement.textContent = s('');
});

