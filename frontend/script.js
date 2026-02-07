const API = "http://localhost:5000/problems";

// Add new problem
async function addProblem() {
  const data = {
    title: title.value,
    difficulty: difficulty.value,
    solution: solution.value
  };

  await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  // clear inputs
  title.value = "";
  difficulty.value = "";
  solution.value = "";

  loadProblems();
}

// Load all problems
async function loadProblems() {
  const res = await fetch(API);
  const problems = await res.json();

  list.innerHTML = "";

  problems.forEach(p => {
    const li = document.createElement("li");

    li.innerHTML = `
      <strong>${p.title}</strong> (${p.difficulty})
      - ${p.completed ? "✔ Done" : "❌ Not Done"}
      <button onclick="markDone('${p._id}')">Mark Done</button>
    `;

    list.appendChild(li);
  });
}

// Mark problem as completed
async function markDone(id) {
  await fetch(`${API}/${id}`, {
    method: "PUT"
  });

  loadProblems();
}

// Load problems on page load
loadProblems();
