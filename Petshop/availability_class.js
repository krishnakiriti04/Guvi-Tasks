var PetsAvailable = /** @class */ (function () {
    function PetsAvailable(arr) {
        this.available = arr;
        this.matchedRequests = 0;
    }
    PetsAvailable.prototype.availablePets = function () {
        console.log(" ");
        console.log('Pets Available for Adoption: ');
        for (var _i = 0, _a = this.available; _i < _a.length; _i++) {
            var pet = _a[_i];
            console.log(pet.name + " a " + pet.animal + " of age " + pet.age);
        }
    };
    PetsAvailable.prototype.serveRequest = function (arrRequest) {
        console.log(" ");
        for (var _i = 0, arrRequest_1 = arrRequest; _i < arrRequest_1.length; _i++) {
            var req = arrRequest_1[_i];
            var flag = 0;
            var _a = req.split(","), animalType = _a[0], petage = _a[1];
            for (var j = 0; j < this.available.length; j++) {
                if (animalType === this.available[j].animal && parseInt(petage) === this.available[j].age) {
                    console.log(animalType + " of age " + petage + " is waiting to get adopted ");
                    this.matchedRequests += 1;
                    flag = 1;
                    break;
                }
            }
            if (flag === 0) {
                console.log(animalType + " of age " + petage + " is currently not available");
            }
        }
    };
    PetsAvailable.prototype.mapRequests = function (requestCount) {
        console.log(" ");
        console.log("We have " + this.matchedRequests + " matches out of the " + requestCount.length + " requests");
    };
    PetsAvailable.prototype.AnimalCount = function () {
        console.log(" ");
        var dogCount = 0;
        var catcount = 0;
        var parrotCount = 0;
        for (var _i = 0, _a = this.available; _i < _a.length; _i++) {
            var i = _a[_i];
            switch (i.animal) {
                case 'Dog':
                    dogCount++;
                    break;
                case 'Cat':
                    catcount++;
                    break;
                case 'Parrot':
                    parrotCount++;
                    break;
            }
        }
        console.log("Available pets are Dogs : " + dogCount + ", Cats : " + catcount + ", Parrots : " + parrotCount);
    };
    return PetsAvailable;
}());
var PetRequests = /** @class */ (function () {
    function PetRequests() {
        this.requestsArray = [];
    }
    PetRequests.prototype.addRequest = function (req) {
        this.requestsArray.push(req);
    };
    PetRequests.prototype.displayRequests = function () {
        console.log(" ");
        console.log("Pending Requests:");
        for (var _i = 0, _a = this.requestsArray; _i < _a.length; _i++) {
            var request = _a[_i];
            console.log(request);
        }
    };
    return PetRequests;
}());
var newpets = new PetsAvailable([{ animal: 'Dog', name: 'Colby', age: 4, breed: "Husker" }, { animal: 'Cat', name: 'Tommy', age: 7 }, { animal: 'Parrot', name: 'Dave', age: 2 }, { animal: 'Dog', name: 'Goldie', age: 7, breed: "Golden Retreiver" }]);
var request1 = new PetRequests();
//Displays the available pets for adoption
newpets.availablePets();
//adding requests to the requests array
request1.addRequest("Cat,3");
request1.addRequest("Dog,4");
request1.addRequest("Parrot,5");
request1.addRequest("Dog,7");
request1.addRequest("Cat,5");
//displays the total number of requests 
request1.displayRequests();
//displays the status of the requests Available or not
newpets.serveRequest(request1.requestsArray);
//Displays total count of different animals available in the shop
newpets.AnimalCount();
//Maps the requests with available data
newpets.mapRequests(request1.requestsArray);
