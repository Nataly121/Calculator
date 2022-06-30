let output = document.getElementById('output-form')
let pressedButton = document.getElementsByTagName('input')

console.log(pressedButton)

for (let i = 1; i < pressedButton.length; i++) {
        if (pressedButton[i].value === 'C') {pressedButton[i].addEventListener('click', () => output.value = '')}
        else if (pressedButton[i].value === '<--') {pressedButton[i].addEventListener('click', () => output.value = output.value.slice(0, -1))}
        else if (pressedButton[i].value === '=') {
            // === new Function как и eval вычислит строку ===
            pressedButton[i].addEventListener('click', () => {
                let calculateResult = new Function(`return ${output.value}`)
                output.value = calculateResult()
            })
        }
        else {
        pressedButton[i].addEventListener('click', () => output.value += pressedButton[i].value)
    }
}