class Starter extends Denizen {

  constructor(options) {
    super(options);
    this.imageUri = '/images/volcano.jpg';
    this.position.y += this.height;
  }

  update(t) {
    // no physics for Starter
  }

  onClick(event) {
    var xVel = randRangeInt(-300, 300);
    var yVel = 400 - Math.abs(xVel);
    var s = new Seed({
      tank: this.tank,
      position: this.position,
      velocity: new Vector(xVel, yVel),
      type: this.tank.getRandomSpecies(),
    });
    // console.log(this.tank.denizens);
    this.height *= 1.3;
    this.width *= 1.3;
    setTimeout(() => {
      this.height /= 1.3;
      this.width /= 1.3;
    }, 200);
  }
}
