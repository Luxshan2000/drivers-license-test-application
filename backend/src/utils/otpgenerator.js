exports.OTPGenerator = ()=>{
    // Generate a random 4-digit number with leading zeros
    const min = 1;      // Minimum value (inclusive)
    const max = 9999;   // Maximum value (inclusive)

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    // Convert the random number to a 4-digit string with leading zeros
    return randomNumber.toString().padStart(4, '0');
}

