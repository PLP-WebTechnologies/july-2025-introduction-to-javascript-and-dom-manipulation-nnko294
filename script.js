// ==========================
// Part 1: Basics
// ==========================
function checkAge() {
  let age = document.getElementById("userAge").value;
  let message = "";

  if (age >= 18) {
    message = "✅ You are an adult!";
  } else if (age > 0) {
    message = "👶 You are still a minor!";
  } else {
    message = "⚠️ Please enter a valid age.";
  }

  document.getElementById("ageResult").innerText = message;
}

// ==========================
// Part 2: Functions
// ==========================
// Custom reusable function
function calculateTotal(a, b) {
  let total = a + b;
  document.getElementById("totalResult").innerText = `Total: ${total}`;
}

// Another custom function (toggle)
function toggleMessage() {
  let textElement = document.getElementById("toggleText");
  if (textElement.style.display === "none") {
    textElement.style.display = "block";
  } else {
    textElement.style.display = "none";
  }
}

// ==========================
// Part 3: Loops
// ==========================
// Example 1: Countdown with a loop
function showCountdown() {
  let output = "";
  for (let i = 5; i >= 1; i--) {
    output += i + " ";
  }
  document.getElementById("countdown").innerText = output;
}

// Example 2: Iterating through an array
function listFruits() {
  let fruits = ["🍎 Apple", "🍌 Banana", "🍇 Grapes", "🍊 Orange"];
  let list = document.getElementById("fruitList");
  list.innerHTML = ""; // clear old list

  fruits.forEach(function(fruit) {
    let li = document.createElement("li");
    li.textContent = fruit;
    list.appendChild(li);
  });
}

// ==========================
// Part 4: DOM Manipulation
// ==========================

// Example 1: Change background color
document.getElementById("changeColorBtn").addEventListener("click", function() {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === "lightyellow" ? "#416385ff" : "lightyellow";
});

// Example 2: Add a new list item dynamically
document.getElementById("addItemBtn").addEventListener("click", function() {
  let ul = document.getElementById("dynamicList");
  let li = document.createElement("li");
  li.textContent = "New Item " + (ul.children.length + 1);
  ul.appendChild(li);
});

// Example 3: Another DOM interaction (auto update title color)
document.querySelector("h1").addEventListener("mouseover", function() {
  this.style.color = "#e74c3c";
});
document.querySelector("h1").addEventListener("mouseout", function() {
  this.style.color = "#2c3e50";
});