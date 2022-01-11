// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0,2);
}

//const returnFirstTwoDriver = (drivers) => return drivers.slice(0,2);

function returnLastTwoDrivers(drivers) {
    if (drivers.length >= 2) {
        return drivers.slice(-2);
    } else {
        return [];
    }
    
}

//const returnFirstTwoDriver = (drivers) => return drivers.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(num) {
    return function(fare) {
        return fare * num;
    }
}

// const createFareMultiplier = (num) => {return (fare) => num * fare;}

function fareDoubler(fare) {
    const double = createFareMultiplier(2)(fare);
    return double;
}

// const fareDoubler = createFareMultiplier(2);

function fareTripler(fare) {
    const triple = createFareMultiplier(3)(fare);
    return triple;
}

// const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, driversToReturn) {
    return driversToReturn(drivers)
}