<!DOCTYPE html>
<html>
<body>
<script>
let count = parseInt(prompt("How many random numbers to generate?"));
let numbers = [];
for (let i = 0; i < count; i++) {
  numbers.push(Math.floor(Math.random() * 100) + 1);
}
let avg = numbers.reduce((a,b)=>a+b,0) / count;
alert("Numbers: " + numbers.join(", ") + "\nAverage: " + avg);
</script>
</body>
</html>
