var colors = generateRandomColors()
var squares = document.querySelectorAll('.square');
var pickedColor = pickedColor();
var guessColor = document.querySelector('.guess-color');
var message= document.querySelector('.message');
var header = document.querySelector('.header');
var audio = document.querySelector('.audio')
guessColor.textContent = pickedColor

for(var i = 0; i < colors.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;

        if(clickedColor === pickedColor){
           message.textContent = "Congratulations!!! You are Correct";
           changeColor(clickedColor);
           header.style.backgroundColor = clickedColor
           audio.setAttribute("src", 2207)
        }

        else{
            this.style.backgroundColor = "transparent"
            message.textContent = "Try Again"
            audio.setAttribute("src", 297)
        }
    })
    
}

function pickedColor(){
    var randomNumber = Math.floor(Math.random()*5+1);
    return colors[randomNumber]
}

function changeColor(color){
    for(var i = 0; i < colors.length; i++){
        squares[i].style.backgroundColor = color;
        
    }
}

function generateRandomColors(){
    var arr = []

    for (var i = 0; i < 24; i++) {
     arr.push(randomColor())
        
    }

    return arr
}


function randomColor(){
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)

    return "rgb(" + r + ", " + g + ", " + b  + ")";
}

