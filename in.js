// var colors=[
// 	"rgb(255, 255, 0)",
// 	"rgb(255, 0, 0)",
// 	"rgb(255, 0, 255)",
// 	"rgb(255, 25, 0)",
// 	"rgb(12, 25, 0)",
// 	"rgb(255, 255, 0)"
// ]
var numSquares=6;
var colors=colorGenerator(numSquares); //Generates the random color array
// for(var i=0;i<colors.length;i++){
// 	console.log(colors[i]);
// }
var squares=document.querySelectorAll(".square");
var pickedColor=randomColor();//Randomly selects a color of colors array
var colorDisplay=document.querySelector("#colorDisplay");
var messageDisplay=document.querySelector("#messageDisplay");
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var hardBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");
colorDisplay.textContent=pickedColor;//span that shows the question

easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares=3;
	colors=colorGenerator(numSquares);
	pickedColor=randomColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)
		if(colors[i]){
			squares[i].style.background=colors[i];
		}else{
			squares[i].style.display="none";
		}

})
hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares=6;
	colors=colorGenerator(numSquares);
	pickedColor=randomColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		squares[i].style.background=colors[i];
		squares[i].style.display="block";
	}
})

reset.textContent="New Colors?";
reset.addEventListener("click",function(){
	colors=colorGenerator(numSquares);
	pickedColor=randomColor();
	messageDisplay.textContent="";
	reset.textContent="New Colors?";
	for(var i=0;i<squares.length;i++){
		squares[i].style.background=colors[i];
		colorDisplay.textContent=pickedColor;
	}
	h1.style.background="steelblue";	
})

for(var i=0;i<squares.length;i++)
{
	squares[i].style.background=colors[i];
	squares[i].addEventListener("click",function(){
		var clickedColor=this.style.background;
		if(clickedColor===pickedColor)
		{
			messageDisplay.textContent="Correct";
			changeColors(clickedColor);
			h1.style.background=pickedColor;
			reset.textContent="Play Again?";
		}
		else{
			this.style.background="#232323";// fade the squares
			messageDisplay.textContent="Try Again";
		}
	})
}

// function to change all squares to correct square color
function changeColors(color){
	for(var i=0;i<squares.length;i++)
		squares[i].style.background= color;
}

//Function that randomly selects a color of colors array
function randomColor(){
	var rand=Math.floor(Math.random()*colors.length);
	// alert(rand);
	return colors[rand];
}
// Funtion that generates the random color array
function colorGenerator(num){
	var arr=[];
	for(var i=0;i<num;i++){
		arr.push(colorRandom());
	}
	return arr;
}
// Funtion to generate the r,g,b values and return as string
function colorRandom(){
	var r= Math.floor(Math.random()*256);
	var g= Math.floor(Math.random()*256);
	var b= Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";// NOTE: The spaces matter
}