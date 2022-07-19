class Ride {
    constructor(id, name, price, openDays, limitChild) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._openDays = openDays;
        this._limitChild = limitChild;
    }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    get openDays() {
        return this._openDays;
    }

    set openDays(value) {
        this._openDays = value;
    }

    get limitChild() {
        return this._limitChild;
    }

    set limitChild(value) {
        this._limitChild = value;
    }
}

const drop = new Ride(43, "Drop of Doom", 5, ["Monday, Friday"], true)

const water = new Ride(143, "River Rapids", 8, ["Saturday", "Sunday"], false)

const ferris = new Ride(93, "Ferris Wheel", 3, ["Tuesday"], false)

rides = [drop, water, ferris]



function logging(string){
    console.log(string)
}

function doublePrices(rideList){
    rideList.forEach((ride, index) => {
        if(index != 1) {
            ride.price = ride.price * 2;
        }
    });
}

doublePrices(rides)

function debugRides(rideList) {
    rideList.forEach((ride, index) => {
        console.log(ride.name + " " + ride.price)
    });
}

function printRides(rideList) {
    let result = '';
    rideList.forEach((ride, index) => {
        result += ride.name + ": " + ride.price + "<br/>"
    });
    return result;
}

debugRides(rides)

document.getElementById("rides-price").innerHTML = printRides(rides);
