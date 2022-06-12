const colors = ["green","red","blue","black","white","yellow","grey","orange","purple","brown"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",function(){
	//get random number between 0-(colorLength-1)
	const randomNumber = getRandomNumber();

	document.body.style.backgroundColor = colors[randomNumber];
	color.textContent = colors[randomNumber];
});

function getRandomNumber()
{
	return Math.floor(Math.random()*colors.length);
}