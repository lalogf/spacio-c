var canvas; 
var imgElement; 
var imgInstance;


var createCanvas = function (){
  canvas = new fabric.Canvas('c', {backgroundColor: "white", selectionBorderColor: "white"});
  canvas.setHeight(600);
  canvas.setWidth(400);
  canvas.setOverlayImage('./assets/i6.png', canvas.renderAll.bind(canvas))
};


var uploading = function (){
  var widget = uploadcare.Widget('[role=uploadcare-uploader]');
  widget.onUploadComplete(function(info) {
    $("#wuju").append('<img id="my-image">');
    $("#my-image").attr("src", info.cdnUrl);
  })
};

var addImage = function (){
  $("#agregar").click(function(){
    imgElement = $("#my-image")[0].src;
    imgInstance = new fabric.Image.fromURL(imgElement,
      function(oimg){
        canvas.add(oimg);
      },
      {
        top:0,
        left: 0,
        crossOrigin: 'anonymous'
      });
    
    // canvas.controlsAboveOverlay = true;
    // canvas.item(0).set({
    //   borderColor: 'black',
    //   cornerColor: 'black',
    //   cornerSize: 20,
    //   transparentCorners: false
    // });
  // canvas.setActiveObject(canvas.item(0));
  // canvas.deactivateAll().renderAll();
  // $('#newcaseimage').val(canvas.toDataURL('image/png'));
  // console.log(newcaseimage);
});
};

var saveCanvas = function (){
  $("#guardar").click(function(){
    canvas.deactivateAll().renderAll();
    $('#newcaseimage').attr("src", canvas.toDataURL('image/png'));
    console.log($("#newcaseimage").attr("src"));
    
  });
};

var delete_from_canvas = function () {
  window.deleteObject = function() {
    canvas.getActiveObject().remove();
  }
  console.log("working");
}


$(document).ready(function(){
  createCanvas();
  uploading();
  addImage();
  saveCanvas();
  delete_from_canvas();

  $("#creation").click(function(){
    var newtext = $("#newtext").val();
    var font_size = $("#pixels").val();
    var text_color = $("#color_font").val();
    var bg_color = $("#back_color").val();
    var text = new fabric.Text(newtext, {fontFamily: "Times New Roman",fill: text_color, backgroundColor: bg_color, fontSize: font_size});
    canvas.add(text);
  });
  $("#delete").click(function(){
    canvas.remove(canvas.getActiveObject());
  });
  $('#angle-control').change(function() {
    var rotateThisImage = canvas.getActiveObject();
    rotateThisImage.setAngle(parseInt(this.value, 10)).setCoords();
    canvas.renderAll();
  });
  $('#scale-control').change(function() {
    var scaleThisImage = canvas.getActiveObject();
    scaleThisImage.scale(parseFloat(this.value)).setCoords();
    canvas.renderAll();
  });
  $('#newtext').emojiPicker({
    height: '300px',
    width: '450px'
  })
  // $('#picker').click(function(e) {
  //       e.preventDefault();
  //       $('#picker').emojiPicker('toggle');
  //     });
});























