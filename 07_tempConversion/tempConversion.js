const convertToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit - 32) / 1.8;
  if(!Number.isInteger(celsius)) return +celsius.toFixed(1);
  return celsius;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = celsius * 1.8 + 32;
  if(!Number.isInteger(fahrenheit)) return +fahrenheit.toFixed(1);
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
