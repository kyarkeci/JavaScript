

function performOperations(leftOperand,operator,rightOperand){
    if(!isNaN(leftOperand) && !isNaN(rightOperand)){
        if(operator == "+" || operator == "-" || operator == "*" || operator == "%" || operator == "/"){

            if(operator == "+"){ 
                console.log(Number(leftOperand) + Number(rightOperand))

            }

            if(operator == "-"){ 
            console.log(Number(leftOperand) - Number(rightOperand))

            }

            if(operator == "/"){ 
                console.log(Number(leftOperand) / Number(rightOperand))

            }

            if(operator == "%"){ 
                console.log(Number(leftOperand) % Number(rightOperand))

            }

            if(operator == "*"){ 
                console.log(Number(leftOperand) * Number(rightOperand))

            }

        }else{
            console.log("invalid operator")
        }

    }else{
        console.log("NAN")
    }

    
}

performOperations("40","+",2)