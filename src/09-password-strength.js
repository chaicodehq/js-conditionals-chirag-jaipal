/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  if (password === "" || typeof password !== "string") return "weak";

  var strLength = password.length;
  var upper = 0;
  var lower = 0;
  var num = 0;
  var specialChar = 0

  for (let char of password) {
    if (char === char.toUpperCase() && char !== char.toLowerCase()) upper++;
    else if (char === char.toLowerCase() && char !== char.toUpperCase()) lower++;
    else if (!isNaN(Number(char)) && isFinite(Number(char))) num++;
    else specialChar++;
  }

  var criteriaMet = 0;
  if (strLength >= 8) criteriaMet++;
  if (upper >= 1) criteriaMet++;
  if (lower >= 1) criteriaMet++;
  if (num >= 1) criteriaMet++;
  if (specialChar >= 1) criteriaMet++;

  if (criteriaMet === 0 || criteriaMet === 1) return "weak";
  else if (criteriaMet === 2 || criteriaMet === 3) return "medium";
  else if (criteriaMet === 4) return "strong";
  else return "very strong";
}
