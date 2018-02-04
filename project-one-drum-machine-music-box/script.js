  function removeTransition(e) {
    //if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  keys.forEach(key => key.addEventListener('keyup', removeTransition));
  window.addEventListener('keydown', playSound);



/*Changes from the tutorial: Removed the if statement on the transition property, and 
added a trigger to remove the class on the key up event, as well. This probably sacrifices
some performance, but the bug where the key would occasionally get stuck when held down
was driving me crazy, and this seems to fix that problem.


*/








