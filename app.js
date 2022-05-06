let chosenServices = []
const washBtn = document.getElementById("wash-btn")
const mowBtn = document.getElementById("mow-btn")
const pullWeeds = document.getElementById("pull-weed-btn")
const serviceDisplay = document.getElementById("service-display")


washBtn.addEventListener("click", function(){
    const click1 = {
        washCar: 10,
    }
    chosenServices.push(click1)
    washBtn.disabled = true;
})

mowBtn.addEventListener("click", function(){
    const click2 = {
        mowLawn: 20,
    }
    chosenServices.push(click2)
    mowBtn.disabled = true;
})

pullWeeds.addEventListener("click", function(){
    const click3 = {
        pullWeeds: 30,
    }
    chosenServices.push(click3)
    pullWeeds.disabled = true;
})

