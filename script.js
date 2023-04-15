
function rickRoll() {

  var cel = document.getElementById("cel").value;
  var mail = document.getElementById("mail").value;
  var tyc = document.getElementById("cbox1").checked;

  if (cel && mail && tyc) {

    window.location.href = 'https://www.youtube.com/watch?v=xvFZjo5PgG0';

  } else {
    alert("No hagas trampa :)");

  }
  //
}
