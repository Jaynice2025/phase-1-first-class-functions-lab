// Code your solution in this file!
// 1. Return the first two drivers
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // 2. Return the last two drivers
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // 3. Array of the two functions
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // 4. Create fare multiplier
  const createFareMultiplier = function(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  };
  
  // 5. Double fares
  const fareDoubler = createFareMultiplier(2);
  
  // 6. Triple fares
  const fareTripler = createFareMultiplier(3);
  
  // 7. Select different drivers using one of the functions
  const selectDifferentDrivers = function(drivers, driverSelectorFunction) {
    return driverSelectorFunction(drivers);
  };
  
  // 8. Export (if needed for testing or a module system)
  module.exports = {
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
    selectingDrivers,
    createFareMultiplier,
    fareDoubler,
    fareTripler,
    selectDifferentDrivers
  };
  
