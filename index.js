const operator = ('Enter operator to perform the calculation ( either +, -, * or / ): ');  
const number1 = parseFloat();  
const number2 = parseFloat();     
let result; 
if (operator == '+') 
{   
    result = number1 + number2;  
}  
else if (operator == '-') 
{ 
    result = number1 - number2;  
}  
else if (operator == '*') 
{  
    result = number1 * number2;  
}  
else 
{  
    result = number1 / number2; 
} 