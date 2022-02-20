class SwitchFish extends Fish {
  constructor(options) {
    super(options);
    this.imageUri = '/images/crab.png';
  }
  onClick(event) {
    this.makeNewVelocity(50);
  }
}
