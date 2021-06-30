var scaleVar = { x: 1, y: 1 },
  zoomFactor = 1,
  stageLeft = 0,
  config = { stageWidth: 1280, stageHeight: 720 };
var scaleValue = 1;
function scaleStage() {	
  var e = document.getElementById("app");
  (scaleVar.x = window.innerWidth / config.stageWidth),
    (scaleVar.y = window.innerHeight / config.stageHeight);
  let t = scaleVar.x + ", " + scaleVar.y;
  scaleVar.x < scaleVar.y
    ? ((zoomFactor = scaleVar.x), (t = scaleVar.x + ", " + scaleVar.x))
    : ((zoomFactor = scaleVar.y), (t = scaleVar.y + ", " + scaleVar.y));
  let o = Number(t.split(",")[0]) * config.stageWidth,
    a = (window.innerWidth - o) / 2;
  (stageLeft = a), (window.rootLeftElmPos = stageLeft);
  var s = {};
  for (var i in (s = {
    "-webkit-transform": "scale(" + t + ")",
    "-moz-transform": "scale(" + t + ")",
    "-ms-transform": "scale(" + t + ")",
    "-o-transform": "scale(" + t + ")",
    transform: "scale(" + t + ")",
    "-webkit-transform-origin": "left top",
    "-moz-transform-origin": "left top",
    "-ms-transform-origin": "left top",
    "-o-transform-origin": "left top",
    "transform-origin": "left top",
    position: "absolute",
    top: "0px",
    left: a + "px",
    overflow: "hidden",
    width: config.stageWidth + "px",
    height: config.stageHeight + "px",
  }))
    s.hasOwnProperty(i) && (e.style[i] = s[i]);
  var bar = document.getElementById("toolbar");
  bar.style.transform = "scale("+1/zoomFactor +")";
  console.log(t, zoomFactor);
  window.zoomFactor = zoomFactor;
  scaleValue = Number(t.split(",")[0]);
}

scaleStage(), window.addEventListener("resize", scaleStage);
