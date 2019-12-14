// tests here
const BankAccount = require('./account');


test('returns account opened if status is active', () => {
    expect(BankAccount.setopen()).toBe('acc activated');
});


test('returns balance', () => {
    expect(BankAccount.getBalance()).toBe(1000000);
});


test('returns balance after deposit if account status is activated', () => {
    expect(BankAccount.getdeposit(100000)).toBe(1100000);
});

test('doesnt accept strings as input', () => {
    expect(BankAccount.getdeposit("one hundred")).toBe("invalid input");
});

test('returns insufficient balance if amount exceeds account balance', () => {
    expect(BankAccount.getwithdraw(1500000)).toBe('insufficient balance');
});

test('returns balance after withdrawal', () => {
    expect(BankAccount.getwithdraw(500000)).toBe(600000);
});

test('returns zero balance', () => {
    expect(BankAccount.getwithdraw(600000)).toBe(0);
});

/*test('returns impossible when acc status is different from active', () => { // TESTS acc status
    expect(BankAccount.getwithdraw(0)).toBe(BankAccount.status);
});*/

test('returns closed account', () => {
    expect(BankAccount.setclose()).toBe('acc closed!');
});
