import { ERROR } from "../const/Messages.js";

class UserBonusNumber {
  #bonusNumber;

  constructor() {
    this.#bonusNumber = null;
  }

  getBonusNumber(input) {
    this.setBonusNumber(input);
    return this.#bonusNumber;
  }

  setBonusNumber(input) {
    const trimmedInput = input.trim();
    const parsedNumber = parseInt(trimmedInput, 10);
    this.#validate(parsedNumber);
    this.#bonusNumber = parsedNumber;
  }

  #validate(number) {
    if (isNaN(number)) {
      throw new Error(ERROR.ONE_NUMBER);
    }
    if (number < 1 || number > 45) {
      throw new Error(ERROR.NUMBER_RANGE);
    }
  }
}

export default UserBonusNumber;
