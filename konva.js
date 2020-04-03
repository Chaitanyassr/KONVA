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

var stage = new Konva.Stage({

	container: "matrix",
	width: 800,
	height: 1000
});

var stage = new Konva.Stage({

	container: "ellipse",
	width: 800,
	height: 1000
});

var stage = new Konva.Stage({

	container: "pie",
	width: 800,
	height: 1000
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
	shadowOffsetX: 20,
	shadowOffsetY: 10,
	shadowBlur: 50,
	opacity: 0.8 
	shadowColor: 'yellow'
//	draggable: true
});
circle.draggable(true);

var rectangle = new Konva.Rect({
	x: 10,
	y: 90,
	width: 500,
	height: 300,
	fill: '#333',
	storke: '#888'
	storkeWidth: 10
	ShadowOffsetX: 10,
    shadowOffsetY: 20,
    shadowBlur: 30
});

var ellipse = new Konva.Ellipse({
     x: 210,
     y: 100,
     radius: {
     	x: 200,
     	y: 100
     },
    fill: '#333',
	storke: '#888'
	storkeWidth: 10
	ShadowOffsetX: 10,
    shadowOffsetY: 20,
    shadowBlur: 30
});

var pie = new Konva.Wedge({
    x: 30,
    y: 20,
    angle: 30,
    radius: 100,
    fill: red
});

var randomline = new Konva.Line({
     X: 10,
     y: 10,
     points; [10,10,40,80,100,300,200,200,400,700],
     storkeWidth: 10,
     storke: '#0e5'
     dash: [100,20, 10, 10],
     //tension make line curvy
     tension: 0.5,
     lineCap: "round"
     //connect ending point and staring point
     closed: true
     fill: '#311'
     shadowOffset {
     	x: 20,
     	y: 30
     },
     shadowBlur: 30,
     rotation: -30
});

//filters / where hsl,blur etc are argument

//for bluring the image
circle.cache();
circle.filters([Konva.Filters,Blur]);
circle.blurRadius(10);

circle.cache();
circle.filters([Konva.Filters,Brighten]);
circle.brightness(10

circle.cache();
circle.filters([Konva.Filters,Enhance]);
circle.enhance(10);	

circle.cache();
circle.filters([Konva.Filters,HSL]);
circle.hue(10);	
circle.saturation(0.5);
circle.luminance(0.4);

circle.cache();
circle.filters([Konva.Filters,RGB]);
circle.red(100);
circle.blue(10);
circle.green(23);
//A in RGBA is for transparence 
circle.cache();
circle.filters([Konva.Filters,RGBA]);	
circle.red(100);
circle.blue(10);
circle.green(23);
circle.alpha(0.5);

p* 40
circle.cache();
circle.filters([Konva.Filters.Pixelate]);
circle.pixelSize(3);

circle.cache();
circle.filters([Konva.Filters.Noise]);
circle.noise(0.9);
// create laeyr of color ...must be low if you want to see the effects
circle.cache();
circle.filters([Konva.Filters.Posterize]);
circle.levels(0.01);

circle.cache();
circle.filters([Konva.Filters.Grayscale]);

circle.cache();
circle.filters([Konva.Filters.Sepia]);


//events

//it well reduce the pixel size by sub -1
circle.on('click', function(){
	this.pixelSize(--p);
	layer.draw()
});

circle.on('click', function(){
	this.blurRadius(0);
	layer.draw();
});

circle.on('mouseover', function(){
	this.fill('black');
	layer.draw() //this is important
});

circle.on('mouseout', function(){
	this.fill('blue');
	layer.draw()
});

circle.on('click', function(){
	this.fill('green');
	layer.draw()
});

circle.on('dblclick', function(){
	this.fill('grey');
	this.ShadowOffsetX(50);
	layer.draw()
});

circle.on('mouseup', function(){
	this.fill('grey');
	this.ShadowOffsetX(50);
	layer.draw()
});

circle.on('mousedown', function(){
	this.fill('blue');
	layer.draw()
});

//add shape to layer
layer.add(circle);
layer.add(rectangle);
layer.add(ellipse);
layer.add(pie);
layer.add(randomline);

//add layer to shape
stage.add(layer);