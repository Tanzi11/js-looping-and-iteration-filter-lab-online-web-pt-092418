function findMatching(drivers, string) {
  return drivers.filter(function(driver_obj) {
    return driver_obj.toUpperCase() === string.toUpperCase();
  })
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function(driver_obj) {
    return driver_obj[0] === string[0];
  })
}

function matchName(drivers,string) {
  return drivers.filter(function(driver_obj) {
    return driver_obj.name === string
  });
}
