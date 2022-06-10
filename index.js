// Code your solution in this file!
const returnFirstTwoDrivers = function (driversarray) {
    return driversarray.slice(0, 2);
  };
  const returnLastTwoDrivers = function (driversarray){
      return driversarray.slice(-2);
  }
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

  const createFareMultiplier = function(x) {
    return function(fare) {
      return fare*x
    }
}
const fareDoubler= function(fare){
    return createFareMultiplier(2)(fare)
}

const fareTripler= function(fare){
    return createFareMultiplier(3)(fare)
}
const selectDifferentDrivers= function(driversarray, driversToReturn){
    return driversToReturn(driversarray);

}