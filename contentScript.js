(function() {
  'use strict';
  console.log('ChatGPT Auto-Continue is running...');

  var auto_continue = function() {
    var buttons = document.querySelectorAll('button.btn-neutral');
    for (var i = buttons.length - 1; i >= 0; i--) {
      if (buttons[i].innerText === 'Continue generating') {
        setTimeout(function(index) {
          buttons[index].click();
        }, 800, i);
        break;
      }
    }
  }

  setInterval(auto_continue, 800);
})();
