/*
Daniel Frick
271108

quelle: hennig reck
*/
var fundation;
(function (fundation) {
    let names = ["Marko", "Sergej", "Milicia", "Milana", "Jessica", "Sasha"];
    let things = ["zerschießt", "bombt", "räuchert", "zerfetzt", "detoniert", "zerstört"];
    let places = ["Yugoslavien", "Kosovo", "die kleinen Balkanstaaten", "Albanien", "teilweise Kroatien", "Bulgarien"];
    for (let index = 6; index >= 1; index--) {
        let final = verseMaker(names, things, places);
        console.log(final);
    }
    function verseMaker(_names, _things, _places) {
        let verse = "";
        let randomNumber;
        randomNumber = Math.floor(Math.random() * _names.length);
        let randomName = _names.splice(randomNumber, 1);
        randomNumber = Math.floor(Math.random() * _things.length);
        let randomThings = _things.splice(randomNumber, 1);
        randomNumber = Math.floor(Math.random() * _places.length);
        let randomPlaces = _places.splice(randomNumber, 1);
        verse = randomName + " " + randomThings + " " + randomPlaces;
        return verse;
    }
    /*
        function verseMaker(_names: string[], _things: string[], _places: string[]): string {
    
        let rngName: number = Math.floor(Math.random());
        let rngThings: number = Math.floor(Math.random());
        let rngPlaces: number = Math.floor(Math.random());
    
        let verse: string = _names[rngName] + " " + _things[rngThings] + " " + _places[rngPlaces] + ".";
    
        _names.splice(rngName, 1);
        _things.splice(rngThings, 1);
        _places.splice(rngPlaces, 1);
    
        return verse;
    }
    */
})(fundation || (fundation = {}));
//# sourceMappingURL=wtbAderall.js.map