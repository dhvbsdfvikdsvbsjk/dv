let risu = document.querySelector('select');
let rene = document.getElementById("lll");
let vixod = document.getElementById("feris");
let tsul = document.getElementById("num");
let pavolia = document.getElementById("ila");
let ollie = document.getElementById("reru");
let lm = document.getElementById("momo");
let iput = document.querySelector('.koe');
let button = document.querySelector('button');
document.getElementById('feris').disabled = true;
let o = document.querySelector('.aqua');
let bilet = document.getElementById("elz").value;
let dlc;
let film;
let eq;
let oe;
let yu = document.getElementById("num").value;
let fo = document.getElementById("f1").value;
let fd = document.getElementById("f2").value;
let ft = document.getElementById("f3").value;
let k = document.getElementById("kn").value;
let n = document.getElementById("tk").value;
let on = document.getElementById("no").value;
let f = document.getElementById("f").value;
let v = document.getElementById("v").value;
let d = document.getElementById("d").value;
const moo = document.getElementById('num');
moo.addEventListener('keydown', function(event) {

	if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||

		(event.keyCode == 65 && event.ctrlKey === true) ||

		(event.keyCode >= 35 && event.keyCode <= 39)) {
		

		return;
	} else {

		if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
			event.preventDefault();
		}
	}
});
const moon = document.getElementById('elz');
moon.addEventListener('keydown', function(event) {

	if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 ||

		(event.keyCode == 65 && event.ctrlKey === true) ||

		(event.keyCode >= 35 && event.keyCode <= 39)) {
		

		return;
	} else {

		if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
			event.preventDefault();
		}
	}
});
document.getElementById("ila").onclick = function ()
{
    if(pavolia.value === (fo.value = 'Филь1'))
    {
        film = 199;
        console.log(film);
    }
    else if (pavolia.value == (fd.value = 'Филь2'))
    {
        film = 200;
        console.log(film);
    }
    else if (pavolia.value === (ft.value = 'Филь3'))
    {
        film = 201;
        console.log(film);
    }
}

document.getElementById("reru").onclick = function ()
{
    if(ollie.value === (k.value = 'Кинотеатр'))
    {
        eq = 100;
        console.log(eq);
    }
    else if (ollie.value == (n.value = 'Театркино'))
    {
        eq = 200;
        console.log(eq);
    }
    else if (ollie.value === (on.value = 'Нокиатреа'))
    {
        eq = 300;
        console.log(eq);
    }
}

document.getElementById("lll").onclick = function ()
{
    if(rene.value === (f.value = 'пть'))
    {
        dlc = 100;
        console.log(dlc);
    }
    else if (rene.value == (v.value = 'вмь'))
    {
        dlc = 400;
        console.log(dlc);
    }
    else if (rene.value === (d.value = 'двс'))
    {
        dlc = 600;
        console.log(dlc);
    }
}

button.onclick = function () {      
   if(Math.sign(document.getElementById("elz").value) === 1)
       { 
           if(tsul.value > 0 & tsul.value <= 20)  { 
        vixod.value = document.getElementById("elz").value * (film + dlc + eq + 100); 
           }
       else if(tsul.value > 21 & tsul.value <= 56)
       {
        vixod.value = document.getElementById("elz").value * (film + dlc + eq + 120);
       }
       else{
alert("Номер сидения равен 0");
       }
    }
else if(Math.sign(document.getElementById("elz").value) === -1)
{
    alert("Число меньше нуля");
}else
{
    alert("неверно");
}  
} 
document.getElementById("laplase").onclick = function () {
    document.getElementById("sp").value = "";
    document.getElementById("num").value = "";
    document.getElementById("ya").value = "";
    document.getElementById("elz").value = "";
    document.getElementById("feris").value = "";
    dlc = "";
    film = "";
    eq = "";
}