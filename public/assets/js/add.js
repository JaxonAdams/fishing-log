// grab form to use in script
const addCatchForm = document.querySelector('#add-catch-form');

const handleCatchFormSubmit = event => {
    event.preventDefault();

    // get catch data and organize it
    const angler_name = addCatchForm.querySelector('[name="angler"]').value.toLowerCase().trim();
    const date_caught = addCatchForm.querySelector('[name="date"]').value.trim();
    const location = addCatchForm.querySelector('[name="location"]').value.toLowerCase().trim();
    const fish = addCatchForm.querySelector('[name="fish"]').value.toLowerCase().trim();
    const lure = addCatchForm.querySelector('[name="lure"]').value.toLowerCase().trim();

    const catchObject = { date_caught, angler_name, location, fish, lure };

    // send data to the server
    fetch('/api/fish-caught', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(catchObject)
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            alert(`Error: Don't forget to fill out every section!`);
        }
    })
    .then(postResponse => {
        console.log(postResponse);
        alert(`Request received!`);
    });
};

addCatchForm.addEventListener('submit', handleCatchFormSubmit);