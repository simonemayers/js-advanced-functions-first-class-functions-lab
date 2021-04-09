// Code your solution in this file!

//First Two Drivers 
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0, 2)
}

//Last Two Drivers 
const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2)
}

//Selecting Drivers Function 
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

//Fare Multiplier function 
const createFareMultiplier = n => function(fare){
    return fare * n
} 

//Fare Doubler Function 
const fareDoubler = createFareMultiplier(2)

//Fare Tripler 
const fareTripler = createFareMultiplier(3)

// Select Different Drivers Function 
const selectDifferentDrivers = (drivers, fn) => fn(drivers)