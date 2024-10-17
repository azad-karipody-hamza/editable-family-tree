document.getElementById("add-child").addEventListener("click", function() {
    const childName = document.getElementById("child-name").value;
    if (childName) {
        const li = document.createElement("li");
        li.textContent = childName;
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.onclick = function() {
            li.remove();
        };
        li.appendChild(removeBtn);
        document.getElementById("children-list").appendChild(li);
        document.getElementById("child-name").value = ""; // Clear input
    } else {
        alert("Please enter a child's name.");
    }
});
