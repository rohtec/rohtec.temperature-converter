
    function convertTemperature() {
    const inputValue = parseFloat(document.getElementById('temperatureInput').value);
    const originalUnit = document.getElementById('originalUnit').value;
    const targetUnit = document.getElementById('targetUnit').value;
  
    let result;
    let originalUnitText;
    let targetUnitText;
  
    if (originalUnit === 'celsius' && targetUnit === 'fahrenheit') {
      result = (inputValue * 9/5) + 32;
      originalUnitText = 'Celsius';
      targetUnitText = '\u00B0F';
    } else if (originalUnit === 'celsius' && targetUnit === 'kelvin') {
      result = (inputValue + 273.15);
      originalUnitText = 'Celsius';
      targetUnitText = 'K';
    } else if (originalUnit === 'celsius' && targetUnit === 'celsius') {
      result = (inputValue);
      originalUnitText = 'Celsius';
      targetUnitText = '\u00B0C';
    }
  
    if (originalUnit === 'fahrenheit' && targetUnit === 'kelvin') {
      result = (inputValue + 459.67) * (5/9);
      originalUnitText = 'Fahrenheit';
      targetUnitText = 'K';
    } else if (originalUnit === 'fahrenheit' && targetUnit === 'celsius') {
      result = (inputValue - 32) * 5/9;
      originalUnitText = 'Fahrenheit';
      targetUnitText = '\u00B0C';
    } else if (originalUnit === 'fahrenheit' && targetUnit === 'fahrenheit') {
      result = (inputValue);
      originalUnitText = 'Fahrenheit';
      targetUnitText = '\u00B0F';
    }
  
    if (originalUnit === 'kelvin' && targetUnit === 'fahrenheit') {
      result = ((inputValue - 273.15) * (9/5) + 32);
      originalUnitText = 'kelvin';
      targetUnitText ='\u00B0F';
    } else if (originalUnit === 'kelvin' && targetUnit === 'celsius') {
      result = (inputValue - 273.15);
      originalUnitText = 'kelvin';
      targetUnitText = '\u00B0C';
    } else if (originalUnit === 'kelvin' && targetUnit === 'kelvin') {
      result = (inputValue);
      originalUnitText = 'Kelvin';
      targetUnitText = 'K';
    }
   
    result = Math.round(result);
    
    document.getElementById('result').textContent = result;
    document.getElementById('targetUnitResult').textContent = targetUnitText;


    setTimeout(() => {
      document.getElementById('temperatureInput').value = '';
    }, 2000);

    
    }
  
  
  
  
  