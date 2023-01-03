const {nextISSTimesForMyLocation} = require('./iss');


nextISSTimesForMyLocation((error, times) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, time to print out the fly over times!
  for (let time of times) {
    console.log(`Next pass at ${Date(time.risetime * 1000)} for ${time.duration} seconds!`);
  }
});