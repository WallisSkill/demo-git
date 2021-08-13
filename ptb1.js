function giai_phuong_trinh_bac_mot(){
var d, e;
d = +document.getElementById("d").value
e = +document.getElementById("e").value
if(d == 0){
    if (e == 0){
    document.getElementById("result1").innerHTML = "Vo so nghiem";}
    else{
    document.getElementById("result1").innerHTML = "Vo nghiem";}}
else{
document.getElementById("result1").innerHTML = "phuong trinh co nghiem x = " + -e/d
}}
