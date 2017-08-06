var App = require('./App'),
    Slide = require('./Slide')

var db = firebase.database()
var storage = firebase.storage()

db.ref('spots').orderByChild('computer').equalTo('computer1').on('child_added', function(snap){
  var key = snap.key
  var val = snap.val()
  console.log(val)

  storage.ref(`images/${val.image}`).getDownloadURL().then((url)=>{
    App.slider.addSlide({
      key,
      imageUrl:url,
      duration: val.duration
    })
  })
})

db.ref('spots').orderByChild('computer').equalTo('computer1').on('child_changed', function(snap){
  var key = snap.key
  var val = snap.val()
  console.log(val)

  storage.ref(`images/${val.image}`).getDownloadURL().then((url)=>{
    App.slider.slides.find(slide=> slide.key==key).imageUrl = url
  })
})
