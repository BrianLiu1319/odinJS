const button = document.getElementById("showDialogue");
const form_dialogue = document.getElementById("form_dialogue");

button.addEventListener("click", () => {
    form_dialogue.showModal();
})

const form = document.getElementById("dialog");



form.addEventListener('submit', () => {
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const pagesInput = document.getElementById('pages');
    const readStatusInput = document.getElementById('readStatus');

    const titleValue = titleInput.value;
    const authorValue = authorInput.value;
    const pagesValue = pagesInput.value;
    const readStatusValue = readStatusInput.checked;

    addBookToLibrary(titleValue, authorValue, pagesValue, readStatusValue);
    form.reset();
})




    