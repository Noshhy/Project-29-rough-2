class Polygon{
polygon=Bodies.circle(50,200,20)
World.add(world,polygon)

slingShot= new Slingshot(this.polygon,{x:100,y:200})
}


setup(){
    imageMode(CENTER)
    image(polygon_img,polygon.position.x,polygon.position.y,40,40)
}