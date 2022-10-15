/*
Daniel Frick
271108

quelle: hennig reck
*/

namespace fundation {

    let names: string[] = ["Marko", "Sergej", "Milicia", "Milana", "Jessica", "Sasha"];
    let things: string[] = ["zerschießt", "bombt", "räuchert", "zerfetzt", "detoniert", "zerstört"];
    let places: string[] = ["Yugoslavien", "Kosovo", "die kleinen Balkanstaaten", "Albanien", "teilweise Kroatien", "Bulgarien"];    
    
    for (let index: number = 6; index >= 1; index--) {
        let final: string = verseMaker(names, things, places);
        console.log(final);

    }

    function verseMaker(_names: string[], _things: string[], _places: string[]): string {
        let verse: string = "";
        let randomNumber: number;

        randomNumber = Math.floor(Math.random() * _names.length);
        let randomName: string[] = _names.splice(randomNumber, 1);

        randomNumber = Math.floor(Math.random() * _things.length);
        let randomThings: string[] = _things.splice(randomNumber, 1);

        randomNumber = Math.floor(Math.random() * _places.length);
        let randomPlaces: string[] = _places.splice(randomNumber, 1);

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

}