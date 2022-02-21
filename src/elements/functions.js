function setLevelEasy(seconds) {
  const setleveleasy = document.getElementById('setleveleasy').innerHTML;
  document.getElementById('leveleasy').innerHTML = setleveleasy;

  const levels = document.getElementById('levels');
  levels.classList.add('hide');

  const leveleasy = document.getElementById('leveleasy');
  leveleasy.classList.remove('hide');
  const countdowneasy = document.getElementById('countdowneasy');
  countdowneasy.classList.remove('hide');
}

function setLevelMedium() {
  const setlevelmedium = document.getElementById('setlevelmedium').innerHTML;
  document.getElementById('levelmedium').innerHTML = setlevelmedium;

  const levels = document.getElementById('levels');
  levels.classList.add('hide');

  const levelmedium = document.getElementById('levelmedium');
  levelmedium.classList.remove('hide');
  const countdownmedium = document.getElementById('countdownmedium');
  countdownmedium.classList.remove('hide');
}

function setLevelHard() {
  const setlevelhard = document.getElementById('setlevelhard').innerHTML;
  document.getElementById('levelhard').innerHTML = setlevelhard;

  const levels = document.getElementById('levels');
  levels.classList.add('hide');

  const levelhard = document.getElementById('levelhard');
  levelhard.classList.remove('hide');
  const countdownhard = document.getElementById('countdownhard');
  countdownhard.classList.remove('hide');
}

function setStart() {
  var starteasy = true;
  console.log(starteasy);
}
function done() {
  const buttondone = document.getElementById('buttondone');
  buttondone.classList.add('hide');

  const buttoncopy = document.getElementById('buttoncopy');
  buttoncopy.classList.remove('hide');
  const palette = document.getElementById('palette');
  palette.classList.add('hide');

  const socialsection = document.getElementById('socialsection');
  socialsection.classList.remove('hide');
  socialsection.classList.add('flex');
}

export { setLevelEasy, setLevelMedium, setLevelHard, setStart, done };
