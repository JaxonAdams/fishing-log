// grab form to use in script
const addCatchForm = document.querySelector('#add-catch-form');

const handleCatchFormSubmit = event => {
    event.preventDefault();

    // get catch data and organize it
    const anglerName = addCatchForm.querySelector('[name="angler"]').value.toLowerCase();
    const date = addCatchForm.querySelector('[name="date"]').value;
    const location = addCatchForm.querySelector('[name="location"]').value.toLowerCase();
    const fish = addCatchForm.querySelector('[name="fish"]').value.toLowerCase();
    const lure = addCatchForm.querySelector('[name="lure"]').value.toLowerCase();

    
};

addCatchForm.addEventListener('submit', handleCatchFormSubmit);