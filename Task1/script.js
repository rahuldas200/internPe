let output=document.getElementById("output-display");

function show(num){
    output.value += num;
}
function display(){
    try{
        output.value=eval(output.value);
    }
    catch(err){
        alert("Invalid")

    }
}
function del(){
    output.value=output.value.slice(0,-1);
}
