var objarr=[
    {
        customerID:'001', 
        customerName:'sanjay', 
        totalBillingAmount:'4000'
    },
    {
        customerID:'002', 
        customerName:'neeraj', 
        totalBillingAmount:'2000'
    },
    {
        customerID:'003', 
        customerName:'sohail', 
        totalBillingAmount:'3500'
    },
    {
        customerID:'004', 
        customerName:'jayant', 
        totalBillingAmount:'1000'
    }
];

let list = objarr.filter(objarr =>{
    return objarr.totalBillingAmount>='3000'
});
console.log(" customers with the total Billing amount more than Rs. 3000/-",list);