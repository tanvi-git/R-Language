var result, opr;
function operation(){
   
    var str,firrstline,secondline,num1="ioh",num2="ihu";
    var a = parseInt(document.getElementById("num1").value);
    var b = parseInt(document.getElementById("num2").value);
    var Result = "Result: ";
   oper = document.getElementById("operator").value;
   console.log(a, b, oper);
   switch(oper){
       case "+":
           result = a+b;
           firstline = "number1<-readline(prompt =" + "" + "Enter the number"+")";
           secondline = "number2<-readline(prompt =" + "" + "Enter the number"+")";
            num1 = "number1<-as.integer(number1)";
            num2 = "number2<-as.integer(number2)";
           str = "print(sum(number1,number2))";
           break;
        case "-":
           result = a-b;
           firstline = "number1<-readline(prompt =" + "" + "Enter the number"+")";
           secondline = "number1<-readline(prompt =" + "" + "Enter the number"+")";
           num1 = "number1<-as.integer(number1)";
           num2 = "number2<-as.integer(number2)";
           str = "print(number1-number2)";
           break;
        case "*":
           result = a*b;
           firstline = "number1<-readline(prompt =" + "" + "Enter the number"+")";
           secondline = "number1<-readline(prompt =" + "" + "Enter the number"+")";
           num1 = "number1<-as.integer(number1)";
           num2 = "number2<-as.integer(number2)";
           str = "print(number1*number2)";
           break;
        case "/":
           result = a/b;
           firstline = "number1<-readline(prompt =" + "" + "Enter the number"+")";
           secondline = "number1<-readline(prompt =" + "" + "Enter the number"+")";
           num1 = "number1<-as.integer(number1)";
           num2 = "number2<-as.integer(number2)";
           str = "print(number1/number2)";
           break;
        case "%":
           result  = a%b;
           firstline = "number1<-readline(prompt =" + "" + "Enter the number"+")";
           secondline = "number1<-readline(prompt =" + "" + "Enter the number"+")";
           num1 = "number1<-as.integer(number1)";
           num2 = "number2<-as.integer(number2)";
           str = "print(number1%number2)";
           break;
         case "/":
           result = a/b;
           firstline = "number1<-readline(prompt =" + "" + "Enter the number"+")";
           secondline = "number1<-readline(prompt =" + "" + "Enter the number"+")";
           num1 = "number1<-as.integer(number1)";
           num2 = "number2<-as.integer(number2)";
           str = "print(number1/number2)";
           break;
        case "^":
           result = a^b;
           firstline = "number1<-readline(prompt =" + "" + "Enter the number"+")";
           secondline = "number1<-readline(prompt =" + "" + "Enter the number"+")";
           num1 = "number1<-as.integer(number1)";
           num2 = "number2<-as.integer(number2)";
           str = "print(number1^number2)";
           break;
   }
   
   
   document.getElementById("line1").innerHTML = firstline;
   document.getElementById("line2").innerHTML = secondline;
   document.getElementById("line3").innerHTML = num1;
   document.getElementById("line4").innerHTML = num2;
   document.getElementById("line5").innerHTML = str;
}
function showStep(id, step) {

}
let currentStep = 1;
let stepData = [
   () => "<br>Number1<- " + document.getElementById("num1").value,
   () => " Number2<- " + document.getElementById("num2").value,
   () => "Data Type assigned as integer",
   () => "Data Type assigned as integer",
   () => document.getElementById("num1").value + " "+document.getElementById("operator").value+" " + document.getElementById("num2").value,
   // () => document.getElementById("num1").value + " plus " + document.getElementById("num2").value,

]
function nextStep(){
      if(currentStep >= 5) {
         document.getElementById("result1").innerHTML = result;
      }
      document.getElementById("line" + currentStep).style.color="red";     
      
      let res = document.getElementById("result");
      res.innerHTML = res.innerHTML + stepData[currentStep-1]() + '<br>';
      currentStep++;
}

function selectChange(){
   console.log("ok");
}
function myFunction() {
   document.getElementById("input_values").reset();
}