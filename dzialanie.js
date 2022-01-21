function odliczanie()
{
  var dzisiaj = new Date();
  var dzien =dzisiaj.getDate();
  if (dzien<10) dzien="0"+dzien;
  var miesiac=dzisiaj.getMonth()+1;
  if (miesiac<10) miesiac="0"+miesiac;
  var rok= dzisiaj.getFullYear();
  var godzina=dzisiaj.getHours();
  if(godzina<10) godzina="0"+godzina;
  var minuta=dzisiaj.getMinutes();
  if(minuta<10) minuta="0"+minuta;
  var sekunda=dzisiaj.getSeconds();
  if(sekunda<10) sekunda="0"+sekunda;

document.getElementById("zegar").innerHTML = dzien+"/"+miesiac
+"/"+rok+" | "+ godzina+":"+minuta+":"+sekunda;
setTimeout("odliczanie()",1000);
}





// Get current sensor readings when the page loads
window.addEventListener('load', getReadings);

// Create Temperature Gauge
var gaugeTemp = new LinearGauge({
  renderTo: 'gauge-temperature',
  width: 133,
  height: 370,
  units: "Temperature C",
  minValue: 0,
  startAngle: 90,
  ticksAngle: 180,
  maxValue: 40,
  colorValueBoxRect: "#851523",
  colorValueBoxRectEnd: "#00BFFF ",
  colorValueBoxBackground: "#f1fbfc",
  valueDec: 2,
  valueInt: 2,
  majorTicks: [
      "0",
      "5",
      "10",
      "15",
      "20",
      "25",
      "30",
      "35",
      "40"
  ],
  minorTicks: 4,
  strokeTicks: true,
  highlights: [
      {
          "from": 30,
          "to": 40,
          "color": "#b22222"
      }
  ],
  colorPlate: "#d3d3d3",
  colorBarProgress: "#CC2936",
  colorBarProgressEnd: "#536872",
  borderShadowWidth: 0,
  borders: false,
  needleType: "arrow",
  needleWidth: 2,
  needleCircleSize: 7,
  needleCircleOuter: true,
  needleCircleInner: false,
  animationDuration: 1500,
  animationRule: "linear",
  barWidth: 10,
}).draw();

// Create rotation speed Gauge
var gaugeHum = new RadialGauge({
  renderTo: 'gauge-rotation',
  width: 300,
  height: 300,
  units: "RPM",
  minValue: 0,
  maxValue: 18000,
  colorValueBoxRect: "#00BFFF",
  colorValueBoxRectEnd: "#4B0082",
  colorValueBoxBackground: "#f1fbfc",
  valueInt: 2,
  majorTicks: [
      "0",
      "2",
      "5000",
      "10000",
      "15000",
      "20000"

  ],
  minorTicks: 4,
  strokeTicks: true,
  highlights: [
      {
          "from": 15250,
          "to": 18000,
          "color": "#b22222"
      }
  ],
  colorPlate: "#d3d3d3",
  borderShadowWidth: 0,
  borders: false,
  needleType: "line",
  colorNeedle: "#851523",
  colorNeedleEnd: "#3366CC ",
  needleWidth: 2,
  needleCircleSize: 3,
  colorNeedleCircleOuter: "#851523",
  needleCircleOuter: true,
  needleCircleInner: false,
  animationDuration: 1500,
  animationRule: "linear"
}).draw();



// Create rotation speed Gauge
var gaugeSpeed = new RadialGauge({
  renderTo: 'speed',
  width: 300,
  height: 300,
  units: "km/h",
  minValue: 0,
  maxValue: 80,
  colorValueBoxRect: "#00BFFF",
  colorValueBoxRectEnd: "#4B0082",
  colorValueBoxBackground: "#f1fbfc",
  valueInt: 2,
  majorTicks: [
      "0",
      "15",
      "30",
      "45",
      "60",
      "80"

  ],
  minorTicks: 4,
  strokeTicks: true,
  highlights: [
      {
          "from": 68,
          "to": 80,
          "color": "#b22222"
      }
  ],
  colorPlate: "#d3d3d3",
  borderShadowWidth: 0,
  borders: false,
  needleType: "line",
  colorNeedle: "#3366CC",
  colorNeedleEnd: "#851523",
  needleWidth: 2,
  needleCircleSize: 3,
  colorNeedleCircleOuter: "#851523",
  needleCircleOuter: true,
  needleCircleInner: false,
  animationDuration: 1500,
  animationRule: "linear"
}).draw();




var gaugeIndEngin = new RadialGauge({
  renderTo: 'napSil',
  width: 150,
  height: 150,
  units: "V",
  minValue: 0,
  maxValue: 30,
  startAngle:90,
  ticksAngle:180,
  colorValueBoxRect: "#00BFFF",
  colorValueBoxRectEnd: "#4B0082",
  colorValueBoxBackground: "#f1fbfc",

  valueInt: 2,
  majorTicks: [
    "0",
    "4",
    "8",
    "12",
    "16",
    "20",
    "24",
    "28"

  ],
  minorTicks: 2,
  strokeTicks: true,
  highlights: [
      {
          "from": 24,
          "to": 30,
          "color": "#b22222"
      }
  ],
  colorPlate: "#d3d3d3",
  borderShadowWidth: 0,
  borders: false,
  needleType: "line",
  colorNeedle: "#851523",
  colorNeedletype:"arrow",
  colorNeedleEnd: "#3366CC ",
  needleWidth: 2,
  needleCircleSize: 7,
  colorNeedleCircleOuter: "#851523",
  needleCircleOuter: true,
  needleCircleInner: false,
  animationDuration: 1500,
  animationRule: "linear"
}).draw();

var gaugeIndBat = new RadialGauge({
  renderTo: 'bateriaV',
  width: 150,
  height: 150,
  units: "V",
  minValue: 0,
  maxValue: 16,
  startAngle:90,
  ticksAngle:180,
  colorValueBoxRect: "#00BFFF",
  colorValueBoxRectEnd: "#4B0082",
  colorValueBoxBackground: "#f1fbfc",

  valueInt: 2,
  majorTicks: [
      "0",
      "2",
      "4",
      "6",
      "8",
      "12",
      "14",
      "16"

  ],
  minorTicks: 2,
  strokeTicks: true,
  highlights: [
      {
          "from": 13,
          "to": 16,
          "color": "#b22222"
      }
  ],
  colorPlate: "#d3d3d3",
  borderShadowWidth: 0,
  borders: false,
  needleType: "line",
  colorNeedle: "#851523",
  colorNeedletype:"arrow",
  colorNeedleEnd: "#3366CC ",
  needleWidth: 2,
  needleCircleSize: 7,
  colorNeedleCircleOuter: "#851523",
  needleCircleOuter: true,
  needleCircleInner: false,
  animationDuration: 1500,
  animationRule: "linear",
  colorborderouter:"#333",
  colorborderouterend:"111",
  colorbordermiddle:"#222",
  colorbordermiddle:"#111",
  colorborderinner:"#111",
  colorborderinnerend:"333",
  colorbordershadowdown:"333",
}).draw();

// Function to get current readings on the webpage when it loads for the first time
function getReadings(){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
      console.log(myObj);
      var temp = myObj.temperature;
      var rpm = myObj.RPM;
      var speed = myObj.speed;
      var engine = myObj.engine;
      var battery = myObj.battery;
      gaugeTemp.value = temp;
      gaugeRpm.value = rpm;
      gaugeSpeed.value= speed;
      gaugeIndEngin.value=engine;
      gaugeIndBat.value=battery;
    }
  };
  xhr.open("GET", "/readings", true);
  xhr.send();
}

if (!!window.EventSource) {
  var source = new EventSource('/events');

  source.addEventListener('open', function(e) {
    console.log("Events Connected");
  }, false);

  source.addEventListener('error', function(e) {
    if (e.target.readyState != EventSource.OPEN) {
      console.log("Events Disconnected");
    }
  }, false);

  source.addEventListener('message', function(e) {
    console.log("message", e.data);
  }, false);

  source.addEventListener('new_readings', function(e) {
    console.log("new_readings", e.data);
    var myObj = JSON.parse(e.data);
    console.log(myObj);
    gaugeTemp.value = myObj.temperature;
    gaugeHpm.value = myObj.RPM;
    gaugeSpeed.value= myObj.speed;
    gaugeIndEngin.value=myObj.engine;
    gaugeIndBat.value=myObj.battery;
  }, false);
}
