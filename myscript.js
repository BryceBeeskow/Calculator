/* I certify that the HTML file I am submitting is all my own work.
 None of it is copied from any source or any person.
 Signed: Bryce Beeskow
 Date: 2/16/2025
*/
/*
 Author: Bryce Beeskow
 Date: 2/16/2025
 Class: CSC135
 Project: Assignment 6
 File Name: myscript.js
 Description: JavaScript for calculator
*/
/* Add references here, if applicable*/


// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {

    var currentInput = "";
    var operator = null;
    var resultDisplayed = false;

    // Get all the buttons
    var buttons = document.querySelectorAll(".button");
    var clearButton = document.querySelector(".clear");
    var equalsButton = document.querySelector(".equals");
    var operators = document.querySelectorAll(".plus, .minus, .multiply, .division");
    var display = document.getElementById("display");

    // Function to update the display
    function updateDisplay() {
        display.textContent = currentInput || "0";
    }

    // Event listeners for number buttons
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            if (resultDisplayed) {
                currentInput = button.textContent;
                resultDisplayed = false;
            } else {
                currentInput += button.textContent;
            }
            updateDisplay();
        });
    });

    // Event listeners for operator buttons
    operators.forEach(function(opButton) {
        opButton.addEventListener("click", function() {
            if (currentInput === "") return; 
            if (operator !== null && currentInput !== "") {
                calculate();
            }
            currentInput += opButton.textContent;
            operator = opButton.textContent; 
            updateDisplay();
        });
    });

    // Function to perform calculation
    function calculate() {
        var result;
        try {
            result = eval(currentInput); 
        } catch (e) {
            result = "Error"; 
        }
        currentInput = result.toString();
        operator = null;
        resultDisplayed = true;
        updateDisplay();
    }

    // Event listener for equals button
    equalsButton.addEventListener("click", function() {
        if (currentInput !== "") {
            calculate();
        }
    });

    // Event listener for clear button
    clearButton.addEventListener("click", function() {
        currentInput = "";
        operator = null;
        resultDisplayed = false;
        updateDisplay();
    });

    
    // Prevent form submission from refreshing the page
    document.getElementById("calcform").addEventListener("submit", function(e) {
        e.preventDefault();
    });
});
