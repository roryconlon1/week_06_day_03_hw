const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    return journey.startLocation;
  })

};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation;
  })

};

Traveller.prototype.getJourneysByTransport = function (transport) {
  let foundJourneyByTransport = this.journeys.filter((journey) => {
    if (journey.transport === transport){
      return true
    } else {
      return false
    }
  })
  return foundJourneyByTransport
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  let foundByMinDistance = this.journeys.filter((journey) => {
    if (journey.distance > minDistance){
      return true
    } else {
      return false
    }
  })
  return foundByMinDistance

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((totalTime, journey) => {
    return totalTime += journey.distance
  },0)

};

Traveller.prototype.getUniqueModesOfTransport = function () {
  let transportMode =  this.journeys.map((journey) => {
    return journey.transport
  })
  let uniqueTransport = new Set(transportMode)
  return Array.from(uniqueTransport)

};


module.exports = Traveller;
