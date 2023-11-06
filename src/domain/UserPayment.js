import { ERROR } from "../const/Messages.js";

class UserPayment {
  #payment;

  constructor() {
    this.#payment = null;
  }

  getUserPayment() {
    return this.#payment;
  }

  setUserPayment(input) {
    const pay = parseInt(input.trim(), 10);
    this.#validate(pay);
    this.#payment = pay;
  }

  #validate(pay) {
    if (pay % 1000 !== 0) {
      throw new Error(ERROR.NO_THOUSAND_UNIT);
    }
  }

  numberOfTickets() {
    if (this.#payment === null) {
      return 0; // 아직 구입 금액이 설정 되지 않았을 때 0 반환
    }
    const ticketCounts = this.#payment / 1000;
    return ticketCounts;
  }
}

export default UserPayment;
