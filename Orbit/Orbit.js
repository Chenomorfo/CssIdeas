var planets = document.getElementById('manyPlanets')

function showMe() {
    let initial = 0;
    var nPlanets = parseInt(planets.value)
    if (!isNaN(nPlanets)) {
        document.getElementById('Sun').innerHTML = "";
        var grades = 360 / nPlanets;

        for (let i = 0; i < nPlanets; i++) {
            changeLocation(initial);
            initial += grades
        }
    }
}


function toDegrees(grades) {
    return grades * (Math.PI / 180);
}
function changeLocation(grades) {

    if (!isNaN(grades)) {
        const Y = -Math.cos(toDegrees(grades))
        const X = Math.sin(toDegrees(grades))
        const B = {
            x: (200 * X),
            y: (200 * Y)
        }
        var planet = document.createElement('div')
        planet.className = 'planet'
        planet.style.transform = `translate(${B.x}px,${B.y}px)`
        document.getElementById('Sun').appendChild(planet)
    }

}