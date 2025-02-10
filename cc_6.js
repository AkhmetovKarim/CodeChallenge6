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

//Task 4 - Subscription Pricing Model
function calculateSubscriptionCost(plan, months, discount = 0) {
    let monthCost = 0;
    if (plan == "Basic") {
        monthCost = 10;
    } else if (plan === "Premium") {
        monthCost = 20;
    } else if (plan === "Enterprise") {
        monthCost = 50;
    } else {
        return
    }} 
    //i dunno really how to this task, i just skipped it so it wont be seen in console

    //Task 5 - Currency Conversion
    function convertCurrency(amount, exchangeRate) { //write a function that returns converted amount
        let convertedAmount = amount * exchangeRate;
        return `Converted Amount: $${convertedAmount.toFixed(2)}`;
    }
    console.log(convertCurrency(100, 1.1)); //log test data
    console.log(convertCurrency(250, 0.85));
    
    //Task 6 - Higher-Order Function
    let orders = [200, 600, 1200, 450, 800]; //declare an array
    const applyBulkDiscount = (orders, discountFunction) =>  //write higher order function
        orders.map(discountFunction);
    const discountedOrders = applyBulkDiscount(orders, amount =>
        amount > 500 ? amount * 0.9 : amount
);
console.log(discountedOrders); //log