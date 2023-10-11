// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;
let cont = true;
// COLLECT VALUES FROM THE USER
do {
    investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));
    if(!isNaN(investment)) {
        cont = false;
    } else {
        cont = true;
    }
} while (cont);

do {
    rate = parseFloat(prompt('Enter interest rate as xx.x'));
    if(!isNaN(rate) && rate > 0 && rate < 7) {
        cont = false;
    } else {
        cont = true;
    }
} while (cont);

do {
    years = parseInt(prompt('Enter the number of years you want to invest for'));
    if(!isNaN(years) && years > 0 && years < 31) {
        cont = false;
    } else {
        cont = true;
    }
} while (cont)

// CALCULATE FUTURE VALUE
futureValue = investment;
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100);
}

// DISPLAY RESULT
document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Future value: $${futureValue.toFixed(2)}`);