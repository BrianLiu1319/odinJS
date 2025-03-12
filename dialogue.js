const button = document.getElementById("showDialogue");
const form_dialogue = document.getElementById("form_dialogue");

button.addEventListener("click", () => {
    form_dialogue.showModal();
})

myLibrary