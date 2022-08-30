const Park = function (name, ticketPrice, dinosaurCollection) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurCollection = []
};

Park.prototype.addDinosaur = function(dinosaur){
    this.dinosaurCollection.push(dinosaur)
}

Park.prototype.removeDinosaur = function(dinosaur) {
    this.dinosaurCollection.pop(dinosaur)
}

Park.prototype.findMostVisitors = function(){
    this.dinosaurCollection.guestsAttractedPerDay.sort()
    mostVisitors = this.guestsAttractedPerDay[0]
    return mostVisitors
  }

Park.prototype.findDinosaur = function (dinosaur){
    const species = [];
    for (const dinosaur of this.dinosaurCollection) {
        if( dinosaur == dinosaur.species) {
            species += dinosaur
        }
        return species
    }
}

Park.prototype.totalVisitors = function (){
    let total = []
    for (const guestsAttractedPerDay of this.dinosaurCollection) {
        total += guestsAttractedPerDay
    }
    return total;
}


module.exports = Park;

