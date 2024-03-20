const $ = document
const divElem = $.querySelector('#text')

let Text = "Everything you can type...!"
let i = 0
let isDeleting = false

const typeWriter = () => {
    if (!isDeleting && i < Text.length) {
        divElem.innerHTML += Text[i]
        i++
        setTimeout(typeWriter, 100)
    } else if (isDeleting && i >= 0) {
        divElem.innerHTML = Text.substring(0, i+1)
        i--
        setTimeout(typeWriter, 100)
    }

    if (i === Text.length) {
        setTimeout(() => {
            isDeleting = true
        }, 1000);
    } else if (i === 0) {
        isDeleting = false
    } 
}
setInterval(() => {
    typeWriter()
}, 4000);

typeWriter() 
