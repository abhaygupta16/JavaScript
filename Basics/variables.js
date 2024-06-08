const accountId = 1122
let accountEmail = "abc@abc.com";
var accountPassword = "12345";
accountCity = "Mumbai";
let accountState;

// accountId = 22222; // not allowed

// console.log(accountId);

accountEmail = "ab@ab.com";
accountPassword = "23456";
accountCity = "Miami";

/*
Prefer not to use var
because of issues in block & functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);