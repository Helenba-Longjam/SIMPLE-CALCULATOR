const result = document.getElementById("result")

function display(x){
    result.value += x
}
function del(){
    result.value = result.value.slice(0, -1)
}
function clr(){
    result.value =""
}
function solve(){
    if(result.value.includes("sin")){
        let sinE1 = parseInt(result.value.replace("sin",""))
        result.value = Math.sin(Math.PI/180*sinE1)
    }
    else if(result.value.includes("cos")){
        let cosE1 = parseInt(result.value.replace("cos",""))
        result.value = Math.cos(Math.PI/180*cosE1)
    }
    else
    result.value = eval(result.value)
}
