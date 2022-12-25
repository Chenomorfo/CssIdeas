let side = document.getElementById("Square").offsetWidth;

let diamondSides = Math.sqrt(Math.pow(side, 2) * 2) / 2;

document.getElementById("Diamond").style.width = diamondSides + "px";
document.getElementById("Diamond").style.height = diamondSides + "px";

/* Orbit */
const moons = document.getElementById("Sun").querySelectorAll("div");

function toDegrees(grades) {
  return grades * (Math.PI / 180);
}

const makeOrbit = (moons, distance = 0) => {
  const grades = parseFloat(360 / moons.length);
  var origin = 0;

  for (let i = 0; i < moons.length; i++) {
    moons[i].style.transform = `translate( 
        ${Math.sin(toDegrees(origin)) * distance}px,
        ${Math.cos(toDegrees(origin)) * -distance}px )`;

    origin += grades;
  }
};

document.getElementById("Sun").addEventListener("mouseover", () => {
  makeOrbit(moons,220);
});

document.getElementById("Sun").addEventListener("mouseout", () => {
    makeOrbit(moons);
  });