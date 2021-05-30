var canvas = new fabric.Canvas('myCanvas');
var width_car = 512;
var height_car = 341;
var car_x = 10;
var car_y = 10;
var car;
var car_image;
function carUpdate() {
    fabric.Image.fromUrl("tunedsupra2.jpg", function(Img){
    car = Img;
    car.scaleToWidth(width_car);
    car.scaleToHeight(height_car);
    car.set({
        top:car_y,
        left:car_x
    });
    canvas.add(car);
});
}
function NewImage(getImage) {
    fabric.Image.fromUrl(getImage, function(Img){
        silvia_object_frontbumper = Img;
        silvia_object_frontbumper.scaleToWidth();
        silvia_object_frontbumper.scaleToHeight();
        silvia_object_frontbumper.set({
        top:steve_y,
        left:steve_x
    });
    canvas.add(blacksmith_building_object);
});
}