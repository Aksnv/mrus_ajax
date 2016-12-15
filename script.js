function checkLogin(login) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("POST", "example.php", true);
  xmlhttp.send("login=" + encodeURIComponent(login));

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4) {
      if (xmlhttp.status == 200) {
        if (xmlhttp.responseText == "error") {
          alert("Логин занят");
        } else alert("Логин свободен");
      }
    }
  }
}