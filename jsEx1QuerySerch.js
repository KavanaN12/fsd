<!DOCTYPE html>
<html>
<head>
  <title>User Info Form</title>
</head>
<body>
  <form onsubmit="return displayInfo();">
    Name: <input id="name" type="text" required /><br />
    Age: <input id="age" type="number" required /><br />
    Hometown: <input id="town" type="text" required /><br />
    <input type="submit" value="Submit" />
  </form>

  <div id="output"></div>

  <script>
    function displayInfo() {
      var name = document.getElementById("name").value;
      var age = parseInt(document.getElementById("age").value);
      var town = document.getElementById("town").value;

      var currentYear = new Date().getFullYear();
      var yearBorn = currentYear - age;

      var output = "<p><strong>" + name + "</strong> was born in " + yearBorn + ".</p>";
      output += '<p><a href="https://www.google.com/search?q=' + encodeURIComponent(town) + '" target="_blank">Search for ' + town + ' on Google</a></p>';

      document.getElementById("output").innerHTML = output;
      return false; // prevent page reload
    }
  </script>
</body>
</html>
