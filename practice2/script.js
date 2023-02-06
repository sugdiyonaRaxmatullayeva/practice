"use script"
alert("hello");
//practice

let ogirlik= Number(prompt("kg"));
let boy=Number(prompt("m"));
let c =ogirlik / boy**2;

if(c<18.5){
    alert("underwegiht")
}
else if (18.5<=c && c<=24.9){
alert("normal")
}
else if(24.9<=c && c<=25){
    alert("overwegiht")
}
else if(25<=c && c<=30){
    alert("obese")
}
else if(30<=c<=35){
    alert("extremely obese")
}