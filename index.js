function val()
{
  var num =(Math.random()*5)+1;
  num =Math.round(num);
  return num;

}
// console.log(val());
// document.getElementById("myImg").src = "hackanm.gif";

var num1=val();
var num2=val();
console.log(num1+" "+num2);
if(num1=>num2)
{
  document.querySelector("h1").innerHTML="🚩Player 1 wins";
}
if(num1<=num2)
{
  document.querySelector("h1").innerHTML="Player 2 wins🚩";
}
if(num1===num2)
{
  document.querySelector("h1").innerHTML="It is a Tie";
}
function die_1_img(){
  if(num1===1)
  {
    document.getElementById("die1").src="die_face_1.png";
  }
  else if (num1===2) {
    document.getElementById("die1").src="die_face_2.png";
  }
  else if (num1===3) {
    document.getElementById("die1").src="die_face_3.png";
  }
  else if (num1===4) {
    document.getElementById("die1").src="die_face_4.png";
  }
  else if (num1===5) {
    document.getElementById("die1").src="die_face_5.png";
  }
  else if (num1===6) {
    document.getElementById("die1").src="die_face_6.png";
  }
}
die_1_img();
function die_2_img(){
  if(num2===1)
  {
    document.getElementById("die2").src="die_face_1.png";
  }
  else if (num2===2) {
    document.getElementById("die2").src="die_face_2.png";
  }
  else if (num2===3) {
    document.getElementById("die2").src="die_face_3.png";
  }
  else if (num2===4) {
    document.getElementById("die2").src="die_face_4.png";
  }
  else if (num2===5) {
    document.getElementById("die2").src="die_face_5.png";
  }
  else if (num2===6) {
    document.getElementById("die2").src="die_face_6.png";
  }
}
die_2_img();
