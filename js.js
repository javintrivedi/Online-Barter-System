document.getElementById("barter-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let name = document.getElementById("item-name").value.trim();
    let desc = document.getElementById("item-desc").value.trim();

    if (name === "" || desc === "") {
        alert("Please enter both item name and description.");
        return;
    }

    let itemsList = document.getElementById("items-list");

    let newItem = document.createElement("div");
    newItem.classList.add("item");
    newItem.innerHTML = `<h3>${name}</h3><p>${desc}</p>`;

    let removeBtn = document.createElement("button");
    removeBtn.classList.add("remove-btn");
    removeBtn.textContent = "Remove";

    removeBtn.addEventListener("click", function() {
        newItem.remove();
    });

    newItem.appendChild(removeBtn);

    itemsList.appendChild(newItem);

    document.getElementById("item-name").value = "";
    document.getElementById("item-desc").value = "";
});

document.querySelectorAll(".remove-btn").forEach(button => {
    button.addEventListener("click", function() {
        this.parentElement.remove();
    });
});
