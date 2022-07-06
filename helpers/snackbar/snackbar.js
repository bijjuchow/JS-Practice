function snackbar(message) {
    var body = document.querySelector("body"); //document.getElementsByTagName("body")[0];
    var sb = document.createElement("div");
    sb.id = "snackbar";
    sb.className = "show";
    sb.innerHTML = message;
    body.appendChild(sb);
    setTimeout(function(){ body.removeChild(sb); }, 3000);
  }