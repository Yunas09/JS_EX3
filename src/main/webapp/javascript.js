document.getElementById("div1").style.backgroundColor="green";
document.getElementById("div1").style.height="100px";
document.getElementById("div1").style.width="100px";

document.getElementById("div2").style.backgroundColor="red";
document.getElementById("div2").style.height="100px";
document.getElementById("div2").style.width="100px";

document.getElementById("div3").style.backgroundColor="orange";
document.getElementById("div3").style.height="100px";
document.getElementById("div3").style.width="100px";




function div1Click(){
    
document.getElementById("div1").addEventListener("Click",hideDiv1());
}


function hideDiv1(){
document.getElementById("div1").style.backgroundColor="";
document.getElementById("div1").style.height="20px";
document.getElementById("div1").style.width="20px";
 
}

function div2Hover(){
    document.getElementById("div2").addEventListener("mouseover",div2Hov());
    }


function div2Hov(){
    document.getElementById("div2").style.borderHeight="4px";
    document.getElementById("div2").style.borderWidth="4px";
    
}