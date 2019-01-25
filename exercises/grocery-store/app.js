var shopper = {
    firstName: "Kaybreigh",
    lastName: "Masterson",
    age: 22,
    girl: true,
    groceryCart: ["carrots", "onions", "bread", "milk", "eggs", "cheese"],
    fullName: function (){
        console.log (this.firstName + " " + this.lastName);
    }
};

shopper.fullName();