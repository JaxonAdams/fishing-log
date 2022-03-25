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

    const catchObject = { date, anglerName, location, fish, lure };

    // send data to the server
    fetch('/api/fish', {
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
        }
        alert(`Error: ${response.statusText}`);
    })
    .then(postResponse => {
        console.log(postResponse);
        alert('Thanks for logging your catch!');
    });
};

addCatchForm.addEventListener('submit', handleCatchFormSubmit);