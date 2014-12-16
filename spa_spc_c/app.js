
var lo = document.getElementById("logo");
var btn = document.getElementById("saver");


// console.log(el)
// el.addEventListener("click",function draw_b() {
//   var b_canvas = document.getElementById("b");
//   var b_context = b_canvas.getContext("2d");
//   b_context.fillRect(0, 0, 150, 100);
// }, false)


var canvas = new fabric.Canvas('c');
canvas.setHeight(600);
canvas.setWidth(400);
canvas.setOverlayImage('assets/i62.png', canvas.renderAll.bind(canvas));
// canvas.setBackgroundImage('assets/i6.png', canvas.renderAll.bind(canvas));




var widgets = uploadcare.initialize('#my-form');
widgets;
var widgets = uploadcare.initialize();
var widget = uploadcare.Widget('[role=uploadcare-uploader]');
console.log(widgets);
console.log(widget);
widget.onUploadComplete(function(info) {
  console.log(info.cdnUrl);
  console.log(info);
  $("#wuju").append('<img id="my-image">');
  $("#my-image").attr("src", info.cdnUrl);
  var el = document.getElementById("my-image");
  var imgElement = document.getElementById('my-image');
  var imgInstance = new fabric.Image(imgElement, {
    height: 600,
    width: 400,
    left: 0,
    top: 0,
  // opacity: 0.85
});
  el.addEventListener("click",function(){
    canvas.add(imgInstance);
  // canvas.add(newpat);
  // canvas.item(1).selectable = false;
  // canvas.item(0).selectable = true;
  // canvas.add(newCase);
  // canvas.add(rect);
  // canvas.add(rect2);
  // canvas.add(rect3);
  // canvas.add(rect4);
});
});



// var imagElement3 = document.getElementById('case');
// var newCase = new fabric.Image(imagElement3,{
//   height: 768,
//   width: 576,
//   left: -80,
//   top:0,
// });

// var imagElement2 = document.getElementById('pattern');
// var newpat = new fabric.Image(imagElement2, {
//   height: 650,
//   width: 420,
//   left: 0,
//   top: -20
// });


var rect = new fabric.Rect({
  left: 0,
  top: 0,
  fill: 'white',
  width: 40,
  height: 600
});

var rect2 = new fabric.Rect({
  left: 0,
  top: 0,
  fill: 'white',
  width: 300,
  height: 80
});

var rect3 = new fabric.Rect({
  left: 0,
  top: 550,
  fill: 'white',
  width: 300,
  height: 50
});

var rect4 = new fabric.Rect({
  left: 277,
  top: 0,
  fill: 'white',
  width: 23,
  height: 600
});











