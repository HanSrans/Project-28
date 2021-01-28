class Chain{
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.004
        }
        this.Chain = Constraint.create(options);
        this.pointB = pointB;
        World.add(world,this.Chain);
    }

    fly(){
        this.Chain.bodyA = null;
    }

    attach(){
        this.Chain.bodyA = stone.body;
    }

    display(){
        if(this.Chain.bodyA){
            var pointA = this.Chain.bodyA.position;
            var pointB = this.pointB;

            strokeWeight(3);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }

}