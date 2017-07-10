exports.getBMI = function(height, weight) {
  return new Number(weight / (height * height)).toFixed(1);
}

exports.getMessage = function(height, weight) {
  const bmi = this.getBMI(height, weight);
  let message;
  if(bmi < 18.5){
    message = '體重過輕';
  } else if(18.5 <= bmi && bmi < 24){
    message = '正常範圍';
  } else {
    message = '異常範圍';
  }
  return message;
}