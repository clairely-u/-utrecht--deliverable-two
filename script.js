let petName = prompt('What is your pets name?');

let happiness = 0;
let energy = 0;

for (let i = 0; i < 6; i++) {
    let whatDo = prompt('What would you like to do?');
    if (whatDo ==="feed") {
        energy += 2
    } else if (whatDo==="pet") {
        happiness += 1
    } else if (whatDo==="walk" && energy==0) {
        alert(petName + " does not have enough energy for a walk!");
    } else if (whatDo==="walk") {
        happiness += 2
        energy -= 1
    }
}

console.log(petName);
console.log(happiness);
console.log(energy);
console.log(petName + " has " + happiness + " happiness and " + energy + " energy!");

alert(petName + " has " + happiness + " happiness and " + energy + " energy.");
