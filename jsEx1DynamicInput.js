<!DOCTYPE html>
<html>
<body>
<script>
let names = [];
while (true) {
  let name = prompt("Enter a name (Cancel to stop):");
  if (name === null) break;
  names.push(name);
}
names.sort();
document.write("<ol>");
for (let n of names) document.write("<li>" + n + "</li>");
document.write("</ol>");
</script>
</body>
</html>
