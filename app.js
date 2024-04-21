function getValue(num){
    var input = document.getElementById("inputField")
    input.value += num ;
}
function clrAll(){
    var input = document.getElementById("inputField")
    input.value = "";
}
function deleteChar(){
    var input = document.getElementById("inputField")
    input.value = input.value.slice(0,-1);
}
function squareNum(){
    var input = document.getElementById("inputField")
    input.value = input.value * input.value;
}
function perc(){
    var input = document.getElementById("inputField")
    input.value = input.value/100 * 100
}


function button1(){
    var input = [];
    if(document.getElementById("inputField").value.includes("+")){
		input = document.getElementById("inputField").value.split('+');
		return parseInt(input[0]) + parseInt(input[1]);
		}
		
		else if(document.getElementById("inputField").value.includes("-")){
            input = document.getElementById("inputField").value.split('-');
		return parseInt(input[0]) - parseInt(input[1]);
		}
				
		else if(document.getElementById("inputField").value.includes("-")){
            input = document.getElementById("inputField").value.split('-');
		return parseInt(input[0]) - parseInt(input[1]);
		}

		else if(document.getElementById("inputField").value.includes("/")){
            input = document.getElementById("inputField").value.split('/');
		return parseInt(input[0]) / parseInt(input[1]);
		}
		
		else{
            input = document.getElementById("inputField").value.split('*');
		return answer= parseInt(input[0]) * parseInt(input[1]);
		}
}   
function equal(){	
    var a = button1()
    document.getElementById('inputField').value = a; 
}
