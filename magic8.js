function generateAnswer() {
  var answers = ["Yup", "Fuhgeddaboudit", "Maybe", "Ask: What would Ruby do?", "Hell no", "Only if your mom would approve", "Only if there's a blue moon or eclipse"]
  var randomNum;
  var question = document.getElementById("inputField").value;
  randomNum = Math.floor(Math.random() * 8);
  document.getElementById("outputQuestion").innerHTML = question;
  document.getElementById("outputText").innerHTML = answers[randomNum];
}
