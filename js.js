window.alert('Dude');

function submit() {
  var name = document.getElementById('text').value;
  if (name == "Abby") {
    location.replace("./pages/Abby/abby.html");
    document.getElementById('text').value = '';
  }
  if (name == "Madison") {
    location.replace("./pages/Madison/madison.html");
    document.getElementById('text').value = '';
  }
  if (name == "Kayla") {
    location.replace("./pages/Kayla/kayla.html");
    document.getElementById('text').value = '';
  }
  if (name == "Grant") {
    location.replace("./pages/Grant/grant.html");
    document.getElementById('text').value = '';
  }
  if (name == "Momma") {
    location.replace("./pages/Momma/momma.html");
    document.getElementById('text').value = '';
  }
  if (name == "Alex") {
    location.replace("./pages/Alex/admin.html")
    document.getElementById('text').value = '';
  } 
}
