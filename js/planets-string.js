(function () {
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    planetsArray = planetsString.split('|');
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */


//todo:
    let str = "Mercury<br>Venus<br>Earth<br>Mars<br>";
    console.log(str);
    //this might become helpful when working with HTML to separate break lines


// //bonus:
//     let listPlanets = '<ul> <li>' + "one,two" + '</li> </ul>'
//     console.log(listPlanets.split(listPlanets));

    function buildPlanets(arrOfPlanets) {
        let newString = '<ul>';
        for (let i = 0; i < arrOfPlanets.length; i++) {
            newString += '<li>'
            newString += arrOfPlanets[i];
            newString += '</li>'

        }
        newString += '</ul>';
        return newString;
    }

    console.log(buildPlanets(planetsArray));
})();
