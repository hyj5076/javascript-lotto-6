class UserLottoNumber {
  constructor() {
    this.baseNumbers = [];
    this.bonusNumber = null;
  }

  async userBaseNumber() {
    const input = await Console.readLineAsync();
    this.baseNumbers = input.split(",").map((number) => number.trim());
    return this.baseNumbers;
  }

  async userBonusNumber() {
    const input = await Console.readLineAsync();
    this.bonusNumber = input.trim();
    return this.bonusNumber;
  }
}

export default UserLottoNumber;
