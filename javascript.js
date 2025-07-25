  document.addEventListener("keydown",(e)=>{
            if(e.key == "Enter"){
                myFunction();
            }
        })

        function myFunction() {
            let salary = document.getElementById("salary").value;
            let output;
            if(salary >= 20000){
                salary = salary - (salary * (7/100));
                output = `Your Net Salary Is ${salary} with 7% of deductions`
                document.getElementById("output").style.background = "red"
            }
            else if(salary < 20000 && salary >=10000 ){
                salary = salary - 1000;
                output = `Your Net Salary Is ${salary} with 1000 of deductions`
                document.getElementById("output").style.background = "orange"
            }
            else{
                ouput = salary;
                output = `Your Net Salary Is ${salary} with no deductions`
                document.getElementById("output").style.background = "green"
            }
            document.getElementById("output").style.display = "flex";
            document.getElementById("output").innerHTML = output;
        }
