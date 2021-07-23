console.log("Start the function execution");
function step1() {
    console.log("First javascript engine pushes goblal context execution in call stack ")
    let result = "line by line code execution done here in javascript";
    debugger;
    step2();
    return  result ;

}

function step2() {
    console.log("After global or Main it will push functions on top of call stack")
    debugger;
    step3();

}
function step3() {
    
    console.log("This Step3 function will pushes in the top call stack when step2() call step3()");
    debugger;
    step4();
}
function step4(){
    debugger;
    console.log("After every function execution it will pops it off from the stack and execution return to privious function")
}
debugger;
result= step1();
console.log(result)


console.log("End the function execution");