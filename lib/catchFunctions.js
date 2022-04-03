// required node modules
const fs = require('fs');
const path = require('path');

// fish parameter is used here rather than the more fitting 'catch' to avoid confusion with catch()

function filterByQuery(query, fishArr) {
    let filteredResults = fishArr;

    if (query.angler_name) {
        filteredResults = filteredResults.filter(fish => fish.angler_name === query.angler_name);
    }

    if (query.location) {
        filteredResults = filteredResults.filter(fish => fish.location === query.location);
    }

    if (query.lure) {
        filteredResults = filteredResults.filter(fish => fish.lure === query.lure);
    }

    return filteredResults;
};

function createCatch(body, fishArr) {
    const fish = body;

    fishArr.push(fish);

    // rewrite fishingInfo.json
    fs.writeFileSync(
        path.join(__dirname, '../db/fishingInfo.json'),
        JSON.stringify({ fish: fishArr }, null, 2)
    );

    // return finished code to post route for response
    return fish;
};

function validateCatch(fish) {
    if (!fish.date || typeof fish.date !== 'string') {
        return false;
    }

    if (!fish.anglerName || typeof fish.anglerName !== 'string') {
        return false;
    }

    if (!fish.location || typeof fish.location !== 'string') {
        return false;
    }

    if (!fish.fish || typeof fish.fish !== 'string') {
        return false;
    }

    if (!fish.lure || typeof fish.lure !== 'string') {
        return false;
    }

    return true;
};

module.exports = {
    filterByQuery,
    createCatch,
    validateCatch
};