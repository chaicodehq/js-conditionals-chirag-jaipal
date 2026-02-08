/**
 * 🍽️ TipEasy - Restaurant Tip Calculator
 *
 * You're building TipEasy, an app that helps diners calculate the right
 * tip based on how they'd rate their dining experience. No more awkward
 * mental math at the table!
 *
 * Service Rating → Tip Percentage:
 *   - 1 (terrible)  → 5%
 *   - 2 (poor)      → 10%
 *   - 3 (okay)      → 15%
 *   - 4 (good)      → 20%
 *   - 5 (excellent) → 25%
 *
 * Return an object with:
 *   - tipPercentage: the percentage as a number (e.g., 15)
 *   - tipAmount: the calculated tip rounded to 2 decimal places
 *   - totalAmount: bill + tip rounded to 2 decimal places
 *
 * Rules:
 *   - If billAmount is 0 or negative, return null
 *   - If serviceRating is not an integer from 1 to 5, return null
 *
 * Example:
 *   calculateTip(50, 4)
 *   → { tipPercentage: 20, tipAmount: 10.00, totalAmount: 60.00 }
 *
 * @param {number} billAmount - The bill amount in dollars
 * @param {number} serviceRating - Service rating from 1 to 5
 * @returns {{ tipPercentage: number, tipAmount: number, totalAmount: number } | null}
 */
export function calculateTip(billAmount, serviceRating) {
  if (billAmount <= 0 || (serviceRating < 1 || serviceRating > 5) || Number.isInteger(serviceRating) === false) return null;

  var tipAmt = 0;
  var tipPer = 0;
  if (serviceRating === 1) {
    tipAmt = Math.round(((5/100) * billAmount) * 100) / 100;
    tipPer = 5;
  }
  else if (serviceRating === 2) {
    tipAmt = Math.round(((10/100) * billAmount) * 100) / 100;
    tipPer = 10;
  }
  else if (serviceRating === 3) {
    tipAmt = Math.round(((15/100) * billAmount) * 100) / 100;
    tipPer = 15;
  }
  else if (serviceRating === 4) {
    tipAmt = Math.round(((20/100) * billAmount) * 100) / 100;
    tipPer = 20;
  }
  else {
    tipAmt = Math.round(((25/100) * billAmount) * 100) / 100;
    tipPer = 25;
  }

  var totatAmt = tipAmt + billAmount;
  return { tipPercentage: tipPer, tipAmount: tipAmt, totalAmount: totatAmt }
}
