const calculator = document.querySelector('.calculator')
const keys = document.querySelector('.keys')
const display = document.querySelector('.display')


keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
      let key = e.target
      let action = key.dataset.action
      const keyContent = key.textContent
      const displayedNum = display.textContent
     if (!action) {
        console.log('number key!')
      } else if (
    
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide' ) {
        console.log('operator key!')
      } else if (action === 'decimal') {
        console.log('decimal key!')
      } else if (action === 'clear') {
        console.log('clear key!')
      } else {
        (action === 'calculate')
        console.log('equal key!')
      }

    }
})



