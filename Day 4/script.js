// 1. How to compatre two JSON have the same properties without order?

// var obj1 = { name: "Person 1", age:5 };
// var obj2 = { age:5, name: "Person 2" };
// if (obj1.name === obj2.name && obj1.age === obj2.age){
//     console.log("The objects are equal");
// }else console.log("The objects are not equal");


// Question 2 and 3 are solved below, launch the index file to view the solution.
// Global Variables
let countries;    //will contain "fetched" data 

fetch("https://restcountries.com/v3.1/all")
.then( res => res.json())
.then(data => initialize(data))
.catch(err => console.log("Error: " + err));

function initialize(countriesData){
    //assign API data to global variable
    countries = countriesData;
    for(let i = 0; i < countries.length; i++) {
        
        //get Country NAME
        let countriesName = (countries[i].name["official"])
        let nameElement = document.createElement("h1");
        nameElement.innerHTML = countriesName;
        document.body.appendChild(nameElement);
        console.log(`Name : ${countriesName}`);
        
        //get Country REGION
        let countryRegion = countries[i].region;
        let regionElement = document.createElement("h2");
        regionElement.innerHTML = `Region:${countryRegion}`;
        document.body.appendChild(regionElement)
        console.log(`Region : ${countryRegion}`);

        //get Country SUBREGION
        let countrySubRegion = countries[i].subregion;
        let subRegionElement = document.createElement("h2");
        subRegionElement.innerHTML = `SubRegion:${countrySubRegion}`;
        document.body.appendChild(subRegionElement)
        console.log(`SubRegion : ${countrySubRegion}`);

        //get Country POPULATION
        let countryPopulation = countries[i].population;
        let populationElement = document.createElement("h2");
        populationElement.innerHTML = `Population:${countryPopulation}`;
        document.body.appendChild(populationElement);        
        console.log(`Population : ${countryPopulation}`);

        //get Country FLAG
        let flagSource =  (countries[i].flags["png"]);  // get flag png URL from Flags object.
        let flagElement = document.createElement("img");
        flagElement.style.width = "50%";
        flagElement.style.height = "50%";        
        flagElement.src = flagSource;
        document.body.appendChild(flagElement);
        console.log(`Flag Image URL : ${flagSource}`);

        //LINE BREAK
        let lineBreak = document.createElement("hr")
        lineBreak.style.height = "2px"
        lineBreak.style.width = "100%";
        lineBreak.style.background = "black";
        document.body.appendChild(lineBreak);
        console.log("\n");
    }
}
