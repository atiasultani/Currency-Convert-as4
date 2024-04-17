#!/usr/bin/env node
import inquirer from "inquirer";
// 1) Getting rate of currency on 15/4/2024 , which is base amount is "USD ($)"
// 2) print conversion currencry amount from
// 3) print conversion currency amount to
// 4) calculate and round off conversion amount
const rateOfCurrency1: any = {
  "Pakistan Rupees(PKR)": 277.9,
  Euro: 0.93,
  "USD ($)": 1, // base currency
  "Japaness Yen (JPY)": 153.89,
  "Chaines Yen (CNY)": 7.2,
  "Afghanistan Afgani (AFN)": 71.2,
  "Iran Riyal (IRR)": 42000,
  "Indian Rrupee (INR)": 83.42,
  "Indonesia Rupiah (IDR)": 15840,
  "Bangladesh Taka (BDT)": 109.5,
};
const rateOfCurrency2: any = {
  "Pakistan Rupees(PKR)": 277.9,
  Euro: 0.93,
  "USD ($)": 1, // base currency
  "Japaness Yen (JPY)": 153.89,
  "Chaines Yen (CNY)": 7.2,
  "Afghanistan Afgani (AFN)": 71.2,
  "Iran Riyal (IRR)": 42000,
  "Indian Rrupee (INR)": 83.42,
  "Indonesia Rupiah (IDR)": 15840,
  "Bangladesh Taka (BDT)": 109.5,
};

let currency = await inquirer.prompt([
  {
    name: "currencyFrom",
    type: "list",
    message: "Select convert currency from",
    choices: [
      "Pakistan Rupees(PKR)",
      "Euro",
      "USD ($)",
      "Japaness Yen (JPY)",
      "Chaines Yen (CNY)",
      "Afghanistan Afgani (AFN)",
      "Iran Riyal (IRR)",
      "Indian Rrupee (INR) ",
      "Indonesia Rupiah (IDR)",
      "Bangladesh Taka (BDT)",
    ],
  },
  {
    name: "currencyTo",
    message: "Select Convert currency to",
    type: "list",
    choices: [
      "Pakistan Rupees(PKR)",
      "Euro",
      "USD ($)",
      "Japaness Yen (JPY)",
      "Chaines Yen (CNY)",
      "Afghanistan Afgani (AFN)",
      "Iran Riyal (IRR)",
      "Indian Rrupee (INR)",
      "Indonesia Rupiah (IDR)",
      "Bangladesh Taka (BDT)",
    ],
  },
  {
    name: "amount",
    message: "Enter Your Amount",
    type: "number",
  },
]);
let fromAmount = rateOfCurrency1[currency.currencyFrom];
let toAmount = rateOfCurrency2[currency.currencyTo];
let givenConversionAmount = currency.amount;
let basecurrency = givenConversionAmount / fromAmount;
let conversionAmount = basecurrency * toAmount;
let ans = Math.round(conversionAmount);
console.log(currency);
console.log("Selected Currency Amount From : ", fromAmount);
console.log("Selected Currency Amount To : ", toAmount);
console.log("Your Conversion Amount is :", conversionAmount);
console.log("Your Round Off Conversion Amount is :", ans);
