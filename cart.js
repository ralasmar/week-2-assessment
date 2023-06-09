///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////------------------------------------------------------------------------------
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((acc, curr) => acc + curr.price, 0)
console.log(summedPrice)

//////////////////PROBLEM 2////////////////////------------------------------------------------------------------------------
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (cartTotal, couponValue, tax) => {
    finalPrice = cartTotal + (cartTotal * tax) - couponValue
    return finalPrice
}

console.log(calcFinalPrice(100, 20, .07))


//////////////////PROBLEM 3////////////////////--------------------------------------------------------------------------------
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
1. full name - Customer name will be important for keeping track of whose orders belong to who
2. email - This will allow the store to send order confirmation/tracking/updates
3. card info - This will ensure that the customer can pay for their item 
4. phone number - This will allow the store to call/text customers for updates/if they need to give/receive information
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customer = {
    fullName: `Emma Nelson`,
    email: `emmanel@gmail.com`,
    cardNumber:  `1543 3656 3767 5276`,
    phoneNumber: `913-123-4567`,
};
