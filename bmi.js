//calculate bmi with the formula 
function bmi(weight, height) {
  // declared a variable with x with the bmi formula
  const x = weight / height ** 2;
  //used conditionals for to return the weight of the person
  if (x <= 18.5){
    return "Underweight"
  }else if (x <= 25.0){
    return "Normal"
  }else if (x <= 30.0){
    return "Overweight"
  }else if(x > 30){
    return "Obese"
  }
}
