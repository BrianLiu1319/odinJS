const button = document.getElementById("showDialogue");
const form_dialogue = document.getElementById("form_dialogue");

button.addEventListener("click", () => {
    form_dialogue.showModal();
})

const form = document.getElementById("dialog");

form.addEventListener('submit', () => {
    const formData = new FormData(form);

    addBookToLibrary(formData.title, formData.author, formData.pages, formData.readStatus);
})