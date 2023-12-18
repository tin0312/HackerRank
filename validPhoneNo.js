function telephoneCheck(str) {
    // Create a pattern using regex for a valid phone number
    const validPattern = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
    return validPattern.test(str);
  }
//Test
console.log(telephoneCheck("555-555-5555"))

