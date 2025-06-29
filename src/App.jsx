import './App.css'
import React, { useState } from 'react';

function App() {
  const [display, setDisplay] = useState('0');
  const [operation, setOperation] = useState(null);

  const handleNumberClick = (number) => {
    if (display === '0') {
      setDisplay(number);
    } else {
      setDisplay(display + number);
    }
  }

  const handleOperationClick = (operation) => {
    if (operation === 'C') {
      setDisplay('0');
      setOperation(null);
    } else if (operation === '+') {
      setDisplay(display + '+');
    } else if (operation === '-') {
      setDisplay(display + '-');
    } else if (operation === '*') {
      setDisplay(display + '*');
    } else if (operation === '/') {
      setDisplay(display + '/');
    } else if (operation === '%') {
      // Handle percentage operation
      const currentValue = parseFloat(display);
      if (!isNaN(currentValue)) {
        setDisplay((currentValue / 100).toString());
      }
      setOperation(null);
    } else if (operation === '=') {
      try {
        // Evaluate the expression in display
        const result = eval(display);
        setDisplay(result.toString());
      } catch (error) {
        setDisplay('Error');
      }
      setOperation(null);
    }
  }

  return (
    <>
      <div className='Title'>Simple Calculator</div>
      <div className='Calculator'>
        <div className='InputContainer'>
          <input type="text" className='Input' value={display} readOnly />
        </div>
        <div className='OperationContainer'>
          <div className='Operation' style={{gridColumn: 'span 2'}} onClick={() => handleOperationClick('C')}>C</div>
          <div className='Operation'  onClick={() => handleOperationClick('%')}>%</div>
          <div className='Operation'  onClick={() => handleOperationClick('/')}>/</div>
        </div>
        <div className='NumberContainer'>
          <div className='Number' onClick={() => handleNumberClick('7')}>7</div>
          <div className='Number' onClick={() => handleNumberClick('8')}>8</div>
          <div className='Number' onClick={() => handleNumberClick('9')}>9</div>
          <div className='Operation' onClick={() => handleOperationClick('*')}>*</div>
          <div className='Number' onClick={() => handleNumberClick('4')}>4</div>
          <div className='Number' onClick={() => handleNumberClick('5')}>5</div>
          <div className='Number' onClick={() => handleNumberClick('6')}>6</div>
          <div className='Operation' onClick={() => handleOperationClick('-')}>-</div>
          <div className='Number' onClick={() => handleNumberClick('1')}>1</div>
          <div className='Number' onClick={() => handleNumberClick('2')}>2</div>
          <div className='Number' onClick={() => handleNumberClick('3')}>3</div>
          <div className='Operation' onClick={() => handleNumberClick('+')}>+</div>
          <div className='Number' onClick={() => handleNumberClick('0')}>0</div>
          <div className='Decimal'>.</div>
          <div className='Operation' style={{gridColumn: 'span 2'}} onClick={() => handleOperationClick('=')}>=</div>
        </div>
      </div>
    </>
  )
}

export default App
