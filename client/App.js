var Slider = require('./Slider')

const App = new Vue({
    el:'#app',
    data: {
        slider: new Slider(),
        activeClass: "active-image",
        inActiveClass: "hidden-image"
    },
    computed:{
    }
})

module.exports = App
