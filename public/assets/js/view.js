// Select form elements to use in script
const fishContainer = document.querySelector('.fish-container');
const filterForm = document.querySelector('#filter-form');

// set up display for catch info
const printResults = (resultArr) => {
    console.log(resultArr);

    const fishHTML = resultArr.map(({ date, anglerName, location, fish, lure, id }) => {
        const capitalize = str => {
            return str
                .split(' ')
                .map(word => {
                    return word.substring(0, 1).toUpperCase() + word.substring(1);
                })
                .join(' ');
        }

        let displayFish = fish.substring(0, 1).toUpperCase() + fish.substring(1);
        let displayLure = lure.substring(0, 1).toUpperCase() + lure.substring(1);
        
        return `
    <div class="info-card">
        <h4>Caught on ${date}</h4>
        <h4>Caught by ${capitalize(anglerName)}</h4>
        <p class="info-card-body">Fish Caught: ${capitalize(fish)} || Location: ${capitalize(location)} || Lure: ${capitalize(lure)}</p>
    </div>
        `;
    });

    fishContainer.innerHTML = fishHTML.join('');
};

// get proper info, including with filter
const getCatchInfo = (formData = {}) => {
    let queryUrl = '/api/fish?';

    Object.entries(formData).forEach(([ key, value ]) => {
        queryUrl += `${key}=${value}&`;
    });

    console.log(queryUrl);

    fetch(queryUrl)
        .then(response => {
            if (!response.ok) {
                return alert(`Error: ${response.statusText}`);
            }

            return response.json();
        })
        .then(catchData => {
            console.log(catchData);
            printResults(catchData);
        });
};

// handle filter form submit
const getCatchInfoSubmit = event => {
    event.preventDefault();

    const anglerNameHTML = document.querySelector('#angler-name-filter');
    let anglerName = anglerNameHTML.value.toLowerCase();

    const locationHTML = document.querySelector('#location-filter');
    let location = locationHTML.value.toLowerCase();

    const lureHTML = document.querySelector('#lure-filter');
    let lure = lureHTML.value.toLowerCase();

    const catchObject = { anglerName, location, lure };

    getCatchInfo(catchObject);
};

filterForm.addEventListener('submit', getCatchInfoSubmit);

getCatchInfo();