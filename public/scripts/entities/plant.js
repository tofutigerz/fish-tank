class Plant extends Fish {
  constructor(options) {
    super(options);
    this.imageUri = "/images/newPlant.png"
  }
  makeNewVelocity(minMag) {
    this.swimVelocity = this.generateSwimVelocity(this.maxSwimSpeed, minMag || 0);
    this.timeUntilSpeedChange = randRangeInt(5);
  }

  updateOneTick() {
    var delta = this.swimVelocity.scale(PHYSICS_TICK_SIZE_S);
    this.position.addMut(delta);
    if (this.position.y > 20) {
      this.timeUntilSpeedChange -= PHYSICS_TICK_SIZE_S;
      this.swimVelocity.y -= 0.1;
      if (this.timeUntilSpeedChange < 0) {
        this.makeNewVelocity();
      }
    } else {
      this.swimVelocity = new Vector(0, 0);
      setTimeout(() => {
        this.kill();
      }, 15000);
    }
  }
  generateSwimVelocity(max, min) {
    if (min && min > max) {
      min = 0;
    }
    if (this.swimVelocity) {
      var newSpeed = new Vector(randRangeInt(-max, max), this.swimVelocity.y);
    } else {
      var newSpeed = new Vector(randRangeInt(-max, max), 0);
    }
    while (min && newSpeed.magnitude() < min) {
      newSpeed = new Vector(randRangeInt(-max, max), this.swimVelocity.y);
    }
    return newSpeed;
  }
}
