// PARA UM CAMPO APENAS
// function mudarCor1(){
//   var x = document.getElementById("fname1");
//   x.style.background = "green";
// };
// function mudarCor2(){
//   var x = document.getElementById("fname1");
//   x.style.background = "red";
// };

// MULTIPLOS CAMPOS
var form = document.getElementById("form");
var fields = form.getElementsByTagName("input");
function mudarColor(event) {
    if (event.type === "focus") {
      this.style.backgroundColor = "green";
    } else if (event.type === "blur") {
      this.style.backgroundColor = "red";
    }
  }
for (var i = 0; i < fields.length; i++) {
  fields[i].addEventListener("focus", mudarColor);
  fields[i].addEventListener("blur", mudarColor);
}