import Bank from "../src/Bank"

describe('#Bank', () => {
  let bank = new Bank()
  test('It has an empty balance', () => {
    expect(bank.balance).toBe(0)
  })
  test('It adds a deposit to the balance', () => {
    bank.payin(10, "14/10/2020")
    expect(bank.balance).toBe(10)
  })
  test('It adds multiple deposits to the balance', () => {
    bank.payin(10, "15/10/2020")
    expect(bank.balance).toBe(20)
  })
})