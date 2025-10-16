<!DOCTYPE html>
<html>
<body>
<h3>Simple Calculator</h3>
<input id="num1" type="number" placeholder="Number 1">
<select id="op">
  <option>+</option>
  <option>-</option>
  <option>*</option>
  <option>/</option>
</select>
<input id="num2" type="number" placeholder="Number 2">
<button onclick="calculate()">=</button>
<span id="result"></span>

<script>
function calculate() {
  let n1 = parseFloat(document.getElementById('num1').value);
  let n2 = parseFloat(document.getElementById('num2').value);
  let op = document.getElementById('op').value;
  let result;
  switch(op) {
    case '+': result = n1 + n2; break;
    case '-': result = n1 - n2; break;
    case '*': result = n1 * n2; break;
    case '/': result = n1 / n2; break;
  }
  document.getElementById('result').textContent = result;
}
</script>
</body>
</html>
