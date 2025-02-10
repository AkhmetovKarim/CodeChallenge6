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
