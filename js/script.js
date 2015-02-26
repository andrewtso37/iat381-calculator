// calculation functions
function s(v) { document.getElementById('res').value = v }
function a(v) { document.getElementById('res').value += v }
function e() { try { s(eval(document.getElementById('res').value)) } catch(e) { s('Error') } }

// hammer js
var myElement = document.getElementById('myElement');

// create a simple instance
// by default, it only adds horizontal recognizers
var mc = new Hammer(myElement);

mc.get('swipe').set({direction: Hammer.DIRECTION_ALL, velocity:1, threshold:1});

// listen to events...
mc.on("swipeup", function(ev) {
    myElement.textContent = a('+');
});

mc.on("swipedown", function(ev) {
    myElement.textContent = a('-');
});

mc.on("swipeleft", function(ev) {
    myElement.textContent = a('*');
});

mc.on("swiperight", function(ev) {
    myElement.textContent = a('/');
});