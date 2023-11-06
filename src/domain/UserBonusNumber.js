import { ERROR } from "../const/Messages.js";

class UserBonusNumber {
  #bonusNumber;

  constructor() {
    this.#bonusNumber = null;
  }

  getBonusNumber(input) {
    this.#bonusNumber = parseInt(input.trim(), 10);
    this.#validate(this.#bonusNumber);
    return this.#bonusNumber;
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
