console.log("--- Page 2 ---");

const jsonData = `
[
    {
      "id": 1,
      "todo": "Do something nice for someone I care about",
      "completed": true
    },
    {
      "id": 2,
      "todo": "Memorize the fifty states and their capitals",
      "completed": false
    },
    {
      "id": 3,
      "todo": "Watch a classic movie",
      "completed": false
    },
    {
      "id": 4,
      "todo": "Contribute code or a monetary donation to an open-source software project",
      "completed": false
    }
]
`;
// Opdracht 2a 

function jsonToObject(jsonData) {
  return JSON.parse(jsonData);
}
const todos = jsonToObject(jsonData); // Toon de objecten één voor één op console.log() 

for (const todo of todos) { console.log(todo); }


function createTodoCard(todo) {
  return `
        <div class="todo">
            <div class="todo-left"></div>
            <div class="todo-body">
                <p><b>${todo.todo}</b></p>
            </div>
            <div class="todo-right"><span class="${todo.completed ? "done" : "undone"
    }"></span></div>
        </div>
    `;
}

function showAverage(avg) {
  document.querySelector(".avg").innerHTML = avg;
}



// Opdracht 2b 
const todoContainer = document.querySelector('.todo-container');
function createTodoCard(todo) {
  return `
${todo.todo}

`;
} // Toon elk object in een card 
for (const todo of todos) {
  const todoCard = createTodoCard(todo);
  todoContainer.innerHTML += todoCard;
}
// Opdracht 1c 
const grades = [6.5, 4.3, 5.8, 6.1, 5.1, 8.2, 6.5];
function calculateAverage(grades) {
  const sum = grades.reduce((total, grade) => total + grade, 0);
  return (sum / grades.length).toFixed(2);
}
const average = calculateAverage(grades); showAverage(average); // Functie om gemiddelde weer te geven in de DOM 

