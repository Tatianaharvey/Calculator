const calculator = document.querySelector('.calculator')
const keys = document.querySelector('.keys')
const display = document.querySelector('.display')


keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
      let key = e.target
      let action = key.dataset.action
      const keyContent = key.textContent
      const displayedNum = display.textContent
      const previousKeyType = calculator.dataset.previousKeyType

      if (!action) {
        if (displayedNum === '0' || previousKeyType === 'operator') {
          display.textContent = keyContent
        } else {
          display.textContent = displayedNum + keyContent
        }
      }
      if (action === 'decimal') {
        display.textContent = displayedNum + '.'
      }
      if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide' 
      ) {
        calculator.dataset.previousKeyType = 'operator'
      }
    
      // } else if (action === 'clear') {
      //   console.log('clear key!')
      // } else {
      //   (action === 'calculate')
      //   console.log('equal key!')
      // }

    }
})



