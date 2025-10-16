<!DOCTYPE html>
<html>
<body>
<form onsubmit="return validateForm()">
  Name: <input id="name" name="name"><br>
  Username: <input id="username" name="username"><br>
  Password: <input id="password" type="password" name="password"><br>
  Confirm Password: <input id="confirm" type="password" name="confirm"><br>
  Year of Birth: <input id="yob" name="yob"><br>
  Email: <input id="email" type="email" name="email"><br>
  <input id="terms" type="checkbox" name="terms"> I agree to the terms<br>
  <button type="submit">Register</button>
</form>

<script>
function validateForm() {
  let username = document.getElementById('username').value.trim();
  let password = document.getElementById('password').value;
  let confirm = document.getElementById('confirm').value;
  let yob = document.getElementById('yob').value.trim();
  let email = document.getElementById('email').value.trim();
  let terms = document.getElementById('terms').checked;

  if (!username || !password || !confirm || !email) {
    alert("Please fill all required fields!");
    return false;
  }
  if (password !== confirm) {
    alert("Passwords do not match!");
    return false;
  }
  if (!terms) {
    alert("You must agree to terms!");
    return false;
  }
  if (!/^\d{4}$/.test(yob) || yob < 1900 || yob > 2000) {
    alert("Year of birth must be 4 digits between 1900 and 2000!");
    return false;
  }
  return true;
}
</script>
</body>
</html>
