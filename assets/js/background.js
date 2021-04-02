// Javascript concept from: https://codepen.io/justgooddesign/pen/Ghkjx
// Colors from: https://codepen.io/billyysea/pen/whjbK
var backgroundColors = [
  ['#00000c'],
  ['linear-gradient(to right, #020111 85%,#191621 100%)'],
  ['linear-gradient(to right, #020111 60%,#20202c 100%)'],
  ['linear-gradient(to right, #020111 10%,#3a3a52 100%)'],
  ['linear-gradient(to right, #20202c 0%,#515175 100%)'],
  ['linear-gradient(to right, #40405c 0%,#6f71aa 80%,#8a76ab 100%)'],
  ['linear-gradient(to right, #4a4969 0%,#7072ab 50%,#cd82a0 100%)'],
  ['linear-gradient(to right, #757abf 0%,#8583be 60%,#eab0d1 100%)'],
  ['linear-gradient(to right, #82addb 0%,#ebb2b1 100%)'],
  ['linear-gradient(to right, #94c5f8 1%,#a6e6ff 70%,#b1b5ea 100%)'],
  ['linear-gradient(to right, #b7eaff 0%,#94dfff 100%)'],
  ['linear-gradient(to right, #9be2fe 0%,#67d1fb 100%)'],
  ['linear-gradient(to right, #90dffe 0%,#38a3d1 100%)'],
  ['linear-gradient(to right, #57c1eb 0%,#246fa8 100%)'],
  ['linear-gradient(to right, #2d91c2 0%,#1e528e 100%)'],
  ['linear-gradient(to right, #2473ab 0%,#1e528e 70%,#5b7983 100%)'],
  ['linear-gradient(to right, #1e528e 0%,#265889 50%,#9da671 100%)'],
  ['linear-gradient(to right, #1e528e 0%,#728a7c 50%,#e9ce5d 100%)'],
  ['linear-gradient(to right, #154277 0%,#576e71 30%,#e1c45e 70%,#b26339 100%)'],
  ['linear-gradient(to right, #163C52 0%,#4F4F47 30%,#C5752D 60%,#B7490F 80%, #2F1107 100%)'],
  ['linear-gradient(to right, #071B26 0%,#071B26 30%,#8A3B12 80%,#240E03 100%)'],
  ['linear-gradient(to right, #010A10 30%,#59230B 80%,#2F1107 100%)'],
  ['linear-gradient(to right, #090401 50%,#4B1D06 100%)'],
  ['linear-gradient(to right, #00000c 80%,#150800 100%)']
];

function updateBackgroundBasedOnTime()
{
  var date = new Date();
  setCSSGradientByIndex(date.getHours());
}

function setCSSGradientByIndex(newColorIndex)
{
  if (newColorIndex < 0 | newColorIndex > backgroundColors.length) newColorIndex = 0;
  if (newColorIndex == lastColorIndex)  return;

  var css = backgroundColors[newColorIndex];

  if ( css == null ) return;

  lastColorIndex = newColorIndex;
  document.documentElement.style.background = css;
  
}

var lastColorIndex = -1;
updateBackgroundBasedOnTime();

// update every minute
var interval = setInterval(function(){updateBackgroundBasedOnTime();},60 * 1000);
