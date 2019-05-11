const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

// Convert empty fields to an empty string so we can use validator functions
  data.username = !isEmpty(data.username) ? data.username : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.confirmPassword = !isEmpty(data.confirmPassword) ? data.confirmPassword : "";

// Username checks
  if (Validator.isEmpty(data.username)) {
  errors.username = "Username field is required";
  } 

  if (!Validator.isLength(data.username, { min: 5, max: 30 })) {
    errors.username = "Username must be between 5 and 30 characters";
  }

// Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

// Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

if (Validator.isEmpty(data.confirmPassword)) {
    errors.confirmPassword = "Confirm password field is required";
  }

if (!Validator.isLength(data.password, { min: 5, max: 30 })) {
    errors.password = "Password must be between 5 and 30 characters";
  }

if (!Validator.equals(data.password, data.confirmPassword)) {
    errors.confirmPassword = "Passwords must match";
  }
return {
    errors,
    isValid: isEmpty(errors)
  };
};