export default class Bank {
  constructor() {
    this.balance = 0
  }

  payin(deposit) {
    this.balance += deposit
  }
}