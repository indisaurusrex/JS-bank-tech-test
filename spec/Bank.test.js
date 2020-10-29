import Bank from "../src/Bank"

describe('#Bank', () => {
  test('It has an empty balance', () => {
    let bank = new Bank()
    expect(bank.balance).toBe(0)
  })
})