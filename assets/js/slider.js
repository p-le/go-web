export default class Slider {
  constructor(element) {
    this.element = element
    this.images = this.element.getElementsByClassName("slider__img")
    console.log(this.images);
  }
}