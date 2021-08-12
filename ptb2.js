function giai_phuong_trinh_bac_hai() {
    var a, b, c;
    a = +document.getElementById("a").value
    b = +document.getElementById("b").value
    c = +document.getElementById("c").value
    if(a == 0) {
        if(b == 0) {
            if(c == 0) {
                document.getElementById("result").innerHTML = "Vo so nghiem";
            }else {
                document.getElementById("result").innerHTML = "Vo nghiem";
            }
        }else {
            document.getElementById("result").innerHTML = "Nghiem x =" + -c/b;
        }
    }else {
        var delta = Math.pow(b, 2) - 4*a*c;
        if(delta < 0) {
            document.getElementById("result").innerHTML = "Vo nghiem";
        }else 
        if(delta == 0) {
            document.getElementById("result").innerHTML = "Nghiem kep x1 = x2 = " + -b/(2*a)
        }else {
            document.getElementById("result").innerHTML = "x1 = " + (-b + Math.sqrt(delta)) / (2*a) + "," + "x2 = " + (-b - Math.sqrt(delta)) / (2*a)
        }
    }
}