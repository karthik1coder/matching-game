
let i;

let array=[];

let alphabets=[];
let b=[];

let c=[];
let k=0;
let string;
string="https://countryflagsapi.com/png/";


alphabets.push(string+"india");
alphabets.push(string+"japan");
alphabets.push(string+"us");
alphabets.push(string+"england");
alphabets.push(string+"scotland");
alphabets.push(string+"ireland");
alphabets.push(string+"france");
alphabets.push(string+"china");
alphabets.push(string+"brazil");
alphabets.push(string+"ru");
alphabets.push(string+"germany");
alphabets.push(string+"greece");
alphabets.push(string+"portugal");
alphabets.push(string+"sk");
alphabets.push(string+"switzerland");
alphabets.push(string+"canada");
alphabets.push(string+"mexico");
alphabets.push(string+"israel");
alphabets.push(string+"italy");
alphabets.push(string+"finland");
alphabets.push(string+"argentina");
alphabets.push(string+"denmark");
alphabets.push(string+"sweden");
alphabets.push(string+"norway");
alphabets.push(string+"australia");
alphabets.push(string+"chile");
alphabets.push(string+"austria");
alphabets.push(string+"iceland");
alphabets.push(string+"belgium");
alphabets.push(string+"sweden");
alphabets.push(string+"georgia");
alphabets.push(string+"hungary");

function startup()
{
	let m;
for( m=0; m<64; m++)
{
	b[m].style.backgroundSize="0px";
}
}


let verify=0;
let indexer=-1;

let remain;
function checker(s)
{
	console.log(b[s].style.background);
if(c[s]==1)
{
console.log("hmmm");
}

else if(k==0)
{
verify=b[s].style.background;
indexer=s;
b[s].style.backgroundSize="62px";
k=1;
}

else if(k==1)
{
if(verify==b[s].style.background && indexer!=s)
{
	b[s].style.backgroundSize="62px";

c[s]=1;
c[indexer]=1;

	indexer=-1;
	remain--;
	if(remain==0)
	{
		console.log("You win");
		document.getElementById("point").innerHTML="<h1>YOU WIN</h1>"
	}
	else
	{
		document.getElementById("point").innerHTML="<h1>Remaining blocks="+remain+"</h1>"
	}

}
else
{
	verify=0;
b[indexer].style.backgroundSize="0px";
indexer=-1;
}
k=0;
}
}


function f()
{
	k=0;
for(i=0; i<64; i++)
{
	c.push(0);
}

	remain=32;
	document.getElementById("point").innerHTML="<h1>Remaining blocks="+remain+"</h1>"
for(i=0; i<64; i++)
{
	array.push(i);
}
let j;

	
document.getElementById("block").innerHTML="<div>";



for(j=0; j<64; j++)
{
	document.getElementById("block").innerHTML=document.getElementById("block").innerHTML+"<div class=grid onclick=checker("+j+")></div>";
}



b=document.getElementsByClassName("grid");

for(i=0; i<alphabets.length; i++)
{
let x=array.length;
let y=Math.random()*x;
y=Math.floor(y);
console.log(array[y]);
b[array[y]].style.background="url("+alphabets[i]+")";
b[array[y]].style.backgroundSize="62px";
array.splice(y,1);

 x=array.length;
 y=Math.random()*x;
y=Math.floor(y);
b[array[y]].style.background="url("+alphabets[i]+")";
b[array[y]].style.backgroundSize="62px";
console.log(array[y]);
array.splice(y,1);
}



setTimeout(startup,4000);



document.getElementById("block").innerHTML=document.getElementById("block").innerHTML+"</div>";
	

}

