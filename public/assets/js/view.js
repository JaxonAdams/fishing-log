// Select form elements to use in script
const fishContainer = document.querySelector('.fish-container');
const filterForm = document.querySelector('#filter-form');

// set up display for catch info
const printResults = (resultArr) => {
    console.log(resultArr);

    const fishHTML = resultArr.map(({ date_caught, angler_name, location, fish, lure, id }) => {
        const capitalize = str => {
            return str
                .split(' ')
                .map(word => {
                    return word.substring(0, 1).toUpperCase() + word.substring(1);
                })
                .join(' ');
        }
        
        return `
    <div class="info-card">
        <h4>Caught on ${date_caught}</h4>
        <h4>Caught by ${capitalize(angler_name)}</h4>
        <p class="info-card-body">Fish Caught: ${capitalize(fish)} || Location: ${capitalize(location)} || Lure: ${capitalize(lure)}</p>
    </div>
        `;
    });

    fishContainer.innerHTML = fishHTML.join('');
};

// get proper info, including with filter
const getCatchInfo = (formData = {}) => {
    let queryUrl = '/api/fish-caught?';

    Object.entries(formData).forEach(([ key, value ]) => {
        // don't include empty values
        if (value) {
            queryUrl += `${key}=${value}&`;
        } else {
            queryUrl = queryUrl;
        }
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

            const displayDataArr = catchData.reverse();

            printResults(displayDataArr);
        });
};

// handle filter form submit
const getCatchInfoSubmit = event => {
    event.preventDefault();

    const anglerNameHTML = document.querySelector('#angler-name-filter');
    let angler_name = anglerNameHTML.value.toLowerCase().trim();

    const locationHTML = document.querySelector('#location-filter');
    let location = locationHTML.value.toLowerCase().trim();

    const lureHTML = document.querySelector('#lure-filter');
    let lure = lureHTML.value.toLowerCase().trim();

    const catchObject = { angler_name, location, lure };

    getCatchInfo(catchObject);
};

filterForm.addEventListener('submit', getCatchInfoSubmit);

getCatchInfo();