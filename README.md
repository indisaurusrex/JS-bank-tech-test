Bank Tech Test in JavaScript and Jest

Input                       |   Output
bank.payin(10, "14/10/2020")  bank.payments = ["14/10/2020 || 10 || || 10"]
bank.statement()              "date || credit || debit || balance"
bank.balance()                0
bank.payin(10, "15/10/2020")  bank.payments = ["14/10/2020 || 10 || || 10", "15/10/2020 || 10 || || 20"]