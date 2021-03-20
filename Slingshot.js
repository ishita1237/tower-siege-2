class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push()
            stroke("#ccffcc");
            
             strokeWeight(8);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            //line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
            //image(this.sling3,pointA.x-30,pointA.y-10,15,30);
            pop();
        }
    }
    
}