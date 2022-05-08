let chosenService = []

const washBtn = document.getElementById("wash-btn")
const mowBtn = document.getElementById("mow-btn")
const pullWeeds = document.getElementById("pull-weed-btn")
const serviceDisplay = document.getElementById("service-display")
const totalDisplay = document.getElementById("total-display")


washBtn.addEventListener("click", function(){
    const serviceClicked = { 
        service: "Wash Car", value: 10
    }
    chosenService.push(serviceClicked)
    washBtn.disabled = true;
    displayChoices()
    calcTotal()
 
}) 


mowBtn.addEventListener("click", function(){
    const serviceClicked = { 
        service: "Mow Lawn", value: 20
} 
    chosenService.push(serviceClicked)
    mowBtn.disabled = true;
    displayChoices()
    calcTotal()

})

pullWeeds.addEventListener("click", function(){
    const serviceClicked = { 
        service: "Pull Weeds", value: 30
} 
    chosenService.push(serviceClicked)
    pullWeeds.disabled = true;
    displayChoices()
    calcTotal()
})

function displayChoices() {
    let display = ""
    for (let i = 0; i < chosenService.length; i++) {
        display += `
        <div class="service-container">
            <div class="service-name">${chosenService[i].service}</div>
            <div class="service-value"><span>$</span>${chosenService[i].value}</div>
        </div>
       `
    }
    serviceDisplay.innerHTML = display

}

function calcTotal() {
    let calc = 0
    let amountDisplay =""
    for (let i = 0; i < chosenService.length; i++) {
        calc += chosenService[i].value
        amountDisplay = `
        <div class="payment-message">We accept cash, credit card, or PayPal</div>
        <div class="total-value"><span>$</span>${calc}</div>
    ` 
    }  
    totalDisplay.innerHTML = amountDisplay
}

