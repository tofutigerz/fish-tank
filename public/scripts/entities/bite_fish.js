class BiteFish extends Fish {
  constructor(options) {
    super(options);
    this.imageUri = '/images/bite-fish.gif';
  }
  updateOneTick() {
    var delta = this.swimVelocity.scale(PHYSICS_TICK_SIZE_S);
    this.position.addMut(delta);
    this.timeUntilSpeedChange -= PHYSICS_TICK_SIZE_S;
    if (this.timeUntilSpeedChange < 0) {
      this.makeNewVelocity();
    }
    for (let den in this.tank.denizens){
      let type = this.tank.denizens[den].constructor.name;
      if (type !== "BiteFish" && type !== "Plant" && type !== "Starter") {
        // console.log("bite position", this.tank.denizens[den].position);
        // console.log("my position", this.position);
        let diffX = this.position.x - this.tank.denizens[den].position.x;
        let diffY = this.position.y - this.tank.denizens[den].position.y;
        let diff = Math.sqrt(diffX ** 2 + diffY ** 2);
        if (diff < 50) {
          this.tank.denizens[den].kill();
        }
      }
      // console.log(this.tank.denizens[den);
    }

  }
  // Implement bite killing
}
