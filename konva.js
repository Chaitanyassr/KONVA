//test
document.getElementById("demo").innerHTML = 5 + 6;
alert("This alert box was called with the onload event");
//Stage
//Layers are under stage
//Layers1
//LAyers2...upto n
//shape 1 ,2 ,3 ..n under layer
//than we have to add shape 2 to layer 1 or we can also add to anotehr layer
//than we have to add layer to stage

//stage
var stage = new Konva.Stage({

	container: "bucket",
	width: 400,
	height: 400
});

//layer
var layer = new Konva.Layer({

});

//shape
var circle = new Konva.Circle({
	x: 100,
	y: 100,
	radius: 50;
	fill: 'blue',
	storke: 'black',
	storkeWidth: 9,
	ShadowOffsetX: 20,
	ShadowOffsetY: 10,
	shadowBlur: 50,
	opacity: 0.8 
});

//events
circle.on('mouseover', function(){
	this.fill('black');
	layer.draw() //this is important
});

circle.on('mouseout', function(){
	this.fill('blue');
	layer.draw()
});

//add shape to layer
layer.add(circle);

//add layer to shape
stage.add(layer);