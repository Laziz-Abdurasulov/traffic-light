let elRedCircle = document.querySelector(".red-circle");
let elYellowCircle = document.querySelector(".yellow-circle");
let elGreenCircle = document.querySelector(".green-circle");
let elRedText = document.querySelector(".red-text");
let elYellowText = document.querySelector(".yellow-text");
let elGreenText = document.querySelector(".green-text");

setTimeout(() => {
    elRedCircle.classList.add("opacity");
    elYellowCircle.classList.remove("opacity");
    elGreenCircle.classList.remove("opacity");

    let redSetInterval = setInterval(() => {
        elRedText.textContent--
    }, 1000);

    setTimeout(() => {
        clearInterval(redSetInterval);
        elRedText.textContent = 10;
    }, 11000)
}, 0)

setTimeout(() => {
    elRedCircle.classList.remove("opacity");
    elYellowCircle.classList.add("opacity");
    elGreenCircle.classList.remove("opacity");

    let yellowSetInterval = setInterval(() => {
        elYellowText.textContent--
    }, 1000);

    setTimeout(() => {
        clearInterval(yellowSetInterval);
        elYellowText.textContent = 3;
    }, 4000)
    
}, 11000)

setTimeout(() => {
    elRedCircle.classList.remove("opacity");
    elYellowCircle.classList.remove("opacity");
    elGreenCircle.classList.add("opacity");

    let greenSetInterval = setInterval(() => {
        elGreenText.textContent--
    }, 1000);

    setTimeout(() => {
        clearInterval(greenSetInterval);
        elGreenText.textContent = 10;
    }, 11000)
    
}, 15000)

setInterval(() => {
    setTimeout(() => {
        elRedCircle.classList.add("opacity");
        elYellowCircle.classList.remove("opacity");
        elGreenCircle.classList.remove("opacity");
    
        let redSetInterval = setInterval(() => {
            elRedText.textContent--
        }, 1000);
    
        setTimeout(() => {
            clearInterval(redSetInterval);
            elRedText.textContent = 10;
        }, 11000)
    }, 0)
    
    setTimeout(() => {
        elRedCircle.classList.remove("opacity");
        elYellowCircle.classList.add("opacity");
        elGreenCircle.classList.remove("opacity");
    
        let yellowSetInterval = setInterval(() => {
            elYellowText.textContent--
        }, 1000);
    
        setTimeout(() => {
            clearInterval(yellowSetInterval);
            elYellowText.textContent = 3;
        }, 4000)
        
    }, 11000)
    
    setTimeout(() => {
        elRedCircle.classList.remove("opacity");
        elYellowCircle.classList.remove("opacity");
        elGreenCircle.classList.add("opacity");
    
        let greenSetInterval = setInterval(() => {
            elGreenText.textContent--
        }, 1000);
    
        setTimeout(() => {
            clearInterval(greenSetInterval);
            elGreenText.textContent = 10;
        }, 11000)
        
    }, 15000)
}, 26000)