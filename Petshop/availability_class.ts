
//interface for the properties of pet animals
interface IAvailablePets{
    animal : String;
    name : String;
    age: Number;
    breed?: String;
}


class PetsAvailable{
    available:Array<IAvailablePets>;
    matchedRequests;

    constructor(arr){
        this.available = arr;
        this.matchedRequests = 0;
    }

    availablePets()
    {
        console.log(" ");
        console.log('Pets Available for Adoption: ');
        for(let pet of this.available)
        {
            console.log(`${pet.name} a ${pet.animal} of age ${pet.age}`);
        }
    }

    serveRequest(arrRequest:Array<String>)
    {
        console.log(" ");
        for(let req of arrRequest)
        {
            let flag = 0;
            let [animalType,petage] = req.split(",");
            for(let j=0; j< this.available.length;j++)
            {
                if(animalType === this.available[j].animal && parseInt(petage) === this.available[j].age)
                {
                    console.log(`${animalType} of age ${petage} is waiting to get adopted `);
                    this.matchedRequests += 1;
                    flag = 1;
                    break;
                }
            }
            if(flag===0)
            {
                console.log(`${animalType} of age ${petage} is currently not available`);
            }
        }
        
    }

    mapRequests(requestCount:Array<String>){
        console.log(" ");
        console.log(`We have ${this.matchedRequests} matches out of the ${requestCount.length} requests`)
    }

    AnimalCount(){
        console.log(" ");
        var dogCount=0;
        var catcount=0;
        var parrotCount=0;
        for(let i of this.available){
            switch(i.animal){
                case 'Dog': dogCount++;break;
                case 'Cat': catcount++;break;
                case 'Parrot':parrotCount++;break;
            }
        }
        console.log(`Available pets are Dogs : ${dogCount}, Cats : ${catcount}, Parrots : ${parrotCount}`);
    }

}

class PetRequests{
    public requestsArray: Array<String>;
    constructor(){
        this.requestsArray= [];
    }

    addRequest(req:String){
        this.requestsArray.push(req);
    }

    displayRequests(){
        console.log(" ");
        console.log("Pending Requets:")
        for(let request of this.requestsArray){
            console.log(request);
        }
    }

}

var newpets = new PetsAvailable([{animal:'Dog',name:'Colby',age:4,breed:"Husker"},{animal:'Cat',name:'Tommy',age:7},{animal:'Parrot',name:'Dave',age:2},{animal:'Dog',name:'Goldie',age:7,breed:"Golden Retreiver"}])
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