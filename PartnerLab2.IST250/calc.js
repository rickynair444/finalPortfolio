let key = prompt("Would you like to enter the CALCULATOR?");
        //Print message
        while (key !== "yes") {
            key = prompt("Would you like to enter the CALCULATOR?");
            if (key == "yes") {
                alert("You have gained access to the CALCULATOR");
                break;
            }
        }

        alert("Welcome to the CALCULATOR!");
        let name = prompt("Enter your name:");
        alert("Hello, " + name + "! Welcome to the CALCULATOR!");
        document.getElementById('greeting').innerText = `Welcome to Calculator, ${name}!`;

        // Function to add To Do item
        function addToDo() {
            let todoText = document.getElementById('todo').value;
            if (todoText.trim() !== "") {
                let todoList = document.getElementById('todo-list');
                let listItem = document.createElement('li');
                listItem.innerText = todoText;
                todoList.appendChild(listItem);
                document.getElementById('todo').value = ""; // Clear the input box
            }
        }

        // Function to change background color
        function changeBackgroundColor() {
            let color = document.getElementById('bg-color').value;
            document.body.style.backgroundColor = color;
        }

        // Function to generate tally marks based on a number
        function generateTally(num) {
            let tally = '';
            let symbol = '|';
            if (num < 0) {
                symbol = '\\';
                num = Math.abs(num);
            }
            for (let i = 0; i < num; i++) {
                tally += symbol;
            }
            return tally;
        }

        // Function to log operations
        function logOperation(operation, num1, num2, result) {
            let logEntry = document.createElement('li');
            logEntry.innerText = `${num1} ${operation} ${num2} = ${result}`;
            document.getElementById('log').appendChild(logEntry);
        }

        // Calculator functions
        function add() {
            let num1 = parseInt(document.getElementById("num1").value);
            let num2 = parseInt(document.getElementById("num2").value);
            let result = num1 + num2;
            document.body.style.backgroundColor = "#4CAF50"; // Change background color to green
            document.getElementById("output").innerHTML = result;
            document.getElementById('explanation').innerText = `${generateTally(num1)} + ${generateTally(num2)} = ${generateTally(result)}`;
            logOperation('+', num1, num2, result);
        }

        function subtract() {
            let num1 = parseInt(document.getElementById("num1").value);
            let num2 = parseInt(document.getElementById("num2").value);
            let result = num1 - num2;
            document.body.style.backgroundColor = "#f44336"; // Change background color to red
            document.getElementById("output").innerHTML = result;
            document.getElementById('explanation').innerText = `${generateTally(num1)} - ${generateTally(num2)} = ${generateTally(result)}`;
            logOperation('-', num1, num2, result);
        }

        function multiply() {
            let num1 = parseInt(document.getElementById("num1").value);
            let num2 = parseInt(document.getElementById("num2").value);
            let result = num1 * num2;
            document.body.style.backgroundColor = "#ff9800"; // Change background color to orange
            document.getElementById("output").innerHTML = result;
            document.getElementById('explanation').innerText = `${generateTally(num1)} * ${generateTally(num2)} = ${generateTally(result)}`;
            logOperation('*', num1, num2, result);
        }

        function divide() {
            let num1 = parseInt(document.getElementById("num1").value);
            let num2 = parseInt(document.getElementById("num2").value);
            let result = num1 / num2;
            document.body.style.backgroundColor = "#2196F3"; // Change background color to blue
            document.getElementById("output").innerHTML = result;
            document.getElementById('explanation').innerText = `${generateTally(num1)} / ${generateTally(num2)} = ${generateTally(result)}`;
            logOperation('/', num1, num2, result);
        }

        function updateGreeting() {
            // Get the new values from the input fields
            let newName = document.getElementById("customName").value;
            let newMessage = document.getElementById("customMessage").value;
            
            // Update the greeting in the <h1> element.
            // Using querySelector to target the h1 inside the .calculator container.
            let greetingHeader = document.querySelector(".calculator h1");
            if (newName.trim() !== "") {
                greetingHeader.textContent = "Welcome to Calculator, " + newName + "!";
            }
            
            // Update the brief message in the first <p> element that does not have an id.
            // This targets the brief message ("Take a step into the Math Dimension").
            let messagePara = document.querySelector(".calculator p:not([id])");
            if (newMessage.trim() !== "") {
                messagePara.textContent = newMessage;
            }
        }
