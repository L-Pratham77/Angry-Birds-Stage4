class SlingShot {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length: 5,
            stiffness: 0.3
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    display() {
        if (this.sling.bodyA) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;

            strokeWeight(4);

            line(
                pointA.x, pointA.y,
                pointB.x, pointB.y);
        }
    }
    Null() {
        this.sling.bodyA = null;
    }
}