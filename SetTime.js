

function a(){
    console.log("show the output");  
}

setTimeout(function loadComponent{
    console.log("Components loaded");
},3000);

a();
console.log("end")