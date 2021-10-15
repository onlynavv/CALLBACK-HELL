const mainDiv = document.createElement('div')

document.body.append(mainDiv)

const displayText = document.createElement('h1')
displayText.setAttribute('class','align-center')

let countdownValue = 10

displayText.innerText = countdownValue

mainDiv.append(displayText)
mainDiv.style.padding = '15px'

setTimeout(()=>{
    displayText.innerText = --countdownValue
    setTimeout(()=>{
        displayText.innerText = --countdownValue
        setTimeout(()=>{
            displayText.innerText = --countdownValue
            setTimeout(()=>{
                displayText.innerText = --countdownValue
                setTimeout(()=>{
                    displayText.innerText = --countdownValue
                    setTimeout(()=>{
                        displayText.innerText = --countdownValue
                        setTimeout(()=>{
                            displayText.innerText = --countdownValue
                            setTimeout(()=>{
                                displayText.innerText = --countdownValue
                                setTimeout(()=>{
                                    displayText.innerText = --countdownValue
                                    setTimeout(()=>{
                                        displayText.innerHTML = `
                                        Happy Independence Day!!! <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/298/flag-india_1f1ee-1f1f3.png" alt="india-flag">
                                        `
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)