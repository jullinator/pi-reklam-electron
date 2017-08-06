var Slide = require('./Slide')
class Slider {
  constructor(){
    this.index = 0
    this.slides = []
    this.interval = setInterval(()=>{
      this.index >= this.slides.length-1 ? this.index = 0 : this.index++
      console.log(this.index)
    }, 1000*4)
  }



  addSlide(data){
    this.slides.push(new Slide(data))
  }

}

module.exports = Slider
