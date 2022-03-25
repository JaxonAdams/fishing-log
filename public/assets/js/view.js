// Select form elements to use in script
const fishContainer = document.querySelector('.fish-container');

// mock fish data for setting up display
const mockData = {
    "fish": [
        {
            "date": "12/24/2020",
            "anglerName": "Jaxon",
            "location": "test location",
            "fish": "test fish",
            "lure": "test lure",
            "id": "0"
        },
        {
            "date": "11/27/2001",
            "anglerName": "Jaxon",
            "location": "test location",
            "fish": "test fish",
            "lure": "test lure",
            "id": "1"
        },
        {
            "date": "06/20/2002",
            "anglerName": "Jaxon",
            "location": "test location",
            "fish": "test fish",
            "lure": "test lure",
            "id": "0"
        }
    ]
};

// get info on load, then display to page
// fetch api call here

const printResults = (resultArr) => {
    console.log(resultArr);

    const fishHTML = resultArr.map(({ date, anglerName, location, fish, lure, id }) => {
        return `
    <div class="info-card">
        <h4>Caught on ${date}</h4>
        <h4>Caught by ${anglerName}</h4>
        <p class="info-card-body">A ${fish} was caught at ${location} with ${lure}.</p>
    </div>
        `;
    });

    fishContainer.innerHTML = fishHTML.join('');
};

printResults(mockData.fish);