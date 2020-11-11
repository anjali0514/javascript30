

window.addEventListener("keypress",function(e){
    // console.log(e)
    var Audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    var press = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    press.classList.add("playing")
    if (!Audio) return
    Audio.currentTime=0;
    Audio.play();
});

var keys = document.querySelectorAll(".key")
console.log(keys)
keys.forEach(key => {
    key.addEventListener("transitionend",function(e){
        // console.log(e)
        if (e.propertyName !== 'transform') return
        console.log(this)
        this.classList.remove("playing")
    
    
    })
})


