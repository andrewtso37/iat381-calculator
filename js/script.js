// calculation functions
function s(v) { document.getElementById('res').value = v }
function a(v) { document.getElementById('res').value += v }
function e() { try { s(eval(document.getElementById('res').value)) } catch(e) { s('Error') } }