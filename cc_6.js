//Task 1 - Business Profit Calculation

function calculateProfit(costPrice, sellingPrice, unitsSold) { //Write function
    let profit = (sellingPrice - costPrice) * unitsSold;
    return `Total Profit: $${profit}`;
}
console.log(calculateProfit(20, 30, 100));
console.log(calculateProfit(50, 70, 200));

//Task 2 - Sales Tax Computation
const calculateSalesTax = function(amount, taxRate) { //declare function
    let tax = amount * taxRate;
    return `Sales Tax: $${tax}`;
};
console.log(calculateSalesTax(100, 0.07)); //logs
console.log(calculateSalesTax(500, 0.1));

//Task 3 - Employee Bonus Calculation
const calculateBonus =(salary, performanceRating) => { //write an arrow function to determine bonus
    let bonusPercentage = 0;
    if (performanceRating === "Excellent") {  //bonuses are based on performance
        bonusPercentage = 0.20;
    } else if (performanceRating === "Good") {
        bonusPercentage = 0.10;
    } else if (performanceRating === "Average") {
        bonusPercentage = 0.05;
    }
    let bonus = salary * bonusPercentage; //calculate bonus amount
    return `Bonus: $${bonus}`;
};
console.log(calculateBonus(5000, "Excellent")); //logs
console.log(calculateBonus(7000, "Good"));
console.log(calculateBonus(4000, "Average"));
console.log(calculateBonus(6000, "Poor"));