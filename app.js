const display = document.querySelector('.display')
const btns = Array.from(document.querySelectorAll('.button'))

btns.map((button) => {
    button.addEventListener('click', (e) => {
        let currentText = display.textContent
        switch (e.target.innerText) {
            case 'C':
                display.innerText = '0' 
                break
            case '/':
                display.innerText += '/'
                break
            case '*':
                display.innerText += '*'
                break
            case '-':
                display.innerText += '-'
                break
            case '+':
                display.innerText += '+'
                break
            case '=':
                display.innerText = eval(display.innerText)
                break
            case '.':
                display.innerText += '.'
                break
            case 'del':
                display.innerText = currentText.slice(0, -1)
                break
            default:
                if(display.innerText == '0'){
                    display.innerText = e.target.innerText
                } else {
                    display.innerText += e.target.innerText
                }
        }
    })
})