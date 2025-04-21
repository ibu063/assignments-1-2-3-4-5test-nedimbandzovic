// ************ TASK DESCRIPTION ************

// Analyze the given function to determine whether it is pure. 
// If it is impure, refactor it into a pure function.
// If it is already pure, retain its original form.
// In either case you will need to create the function under the "TODO" comment
/*


* let orders = [
*     { id: 1, product: "Laptop", price: 1200, status: "pending", timestamp: 0 },
*     { id: 2, product: "Phone", price: 800, status: "pending", timestamp: 0 }
* ];
* 
* function processOrder(orders, currentTimestamp, orderId) {
*     let index = orders.findIndex(o => o.id === orderId);
*     if (index === -1) {
*         return;
*     }
*     
*     orders[index].timestamp = currentTimestamp;
*     orders[index].status = "processed"
* }
*/



// TODO (if needed)


















// Below this comment any modification is prohibited. 
module.exports = processOrder;