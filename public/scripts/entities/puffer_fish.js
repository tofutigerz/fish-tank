class PufferFish extends Fish {
  constructor(options) {
    super(options);
    this.imageUri = '/images/puffer.png';
  }
  onClick(event) {
    this.height *= 1.1;
    this.width *= 1.1;
    setTimeout(() => {
      this.height /= 1.1;
      this.width /= 1.1;
    }, 5000);
  }
}
