const calculate = (n1, operator, n2) => {
  let result = ''

  if (operator === 'add') {
    result = parseFloat(n1) + parseFloat(n2);
  } else if (operator === 'subtract') {
    result = parseFloat(n1) - parseFloat(n2);
  } else if (operator === 'multiply') {
    result = parseFloat(n1) * parseFloat(n2);
  } else if (operator === 'divide') {
    result = parseFloat(n1) / parseFloat(n2);
  }

  return result 
}


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
        calculator.dataset.previousKeyType = 'number'
      }


      if (action === 'decimal') {
        if (!displayedNum.includes('.')) {
          display.textContent = displayedNum + '.'
        } else if (
          previousKeyType === 'operator' ||
          previousKeyType === 'calculate'
        ) {
          display.textContent = '0.'
        }
  
        calculator.dataset.previousKeyType = 'decimal'
      }


      if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide' 
      ) {
        const firstValue = calculator.dataset.firstValue
        const operator = calculator.dataset.operator 
        const secondValue = displayedNum

        if (
          firstValue && 
          operator && 
          previousKeyType !== 'operator'
          ) {
            const calcValue = calculate(firstValue, operator, secondValue)
            display.textContent = calcValue

            calculator.dataset.firstValue = calcValue
          } else {
            calculator.dataset.firstValue = displayedNum
          }

          calculator.dataset.previousKeyType = 'operator'
          calculator.dataset.operator = action
        }

  

        if (action === 'calculate') {
          let firstValue = calculator.dataset.firstValue
          const operator = calculator.dataset.operator
          let secondValue = displayedNum
          
          if (firstValue) {
              if (previousKeyType === 'calculate') {
                firstValue = displayedNum
                secondValue = calculator.dataset.modValue
              }
              
              display.textContent = calculate(firstValue, operator, secondValue)
            }
            
            calculator.dataset.modValue = secondValue
            calculator.dataset.previousKeyType = 'calculate'
        }

    
      if (action === 'clear') {
        console.log('clear key!')
        calculator.dataset.previousKeyType = 'clear'
       }
}})



