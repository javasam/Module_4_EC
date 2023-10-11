let miles;
let gallons;
let mpg;
let again = 'y';
let cont = true;

do {
    miles = parseFloat(prompt('Enter miles driven'));
    gallons = parseFloat(prompt('How many gallons does your car\'s tank hold'));
    if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
        mpg = miles / gallons;
        console.log(`Your car gets ${mpg.toFixed(2)} miles per gallon.`);
    } else {
        alert('One or both entries are invalid.');
    }
    while(cont) {
        again = prompt('Run application again? (y or n)');
        if (again === 'y') {
            cont = false;
        } else if (again === 'n') {
            break;
        } else {
            cont = true;
        }
    }
    cont = true;
} while (again !== 'n');
console.log('Application has exited.');