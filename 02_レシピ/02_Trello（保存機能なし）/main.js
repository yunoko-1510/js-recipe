const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")
addButton.onclick = function () {
  const text = inputElement.value
  const card = document.createElement("div")
  card.className = "card"
  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textcontent = text
  card.append(todo)
  container.append(card)

  inputElement.value = ""

  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"
  deleteButton.onclick = function () {
    card.remove()
  }
  card.append(deleteButton)
}
