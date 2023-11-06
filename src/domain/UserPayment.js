import { ERROR } from "../const/Messages.js";

class UserPayment {
  #payment;

  constructor() {
    this.#payment = null;
  }

  getUserPayment() {
    this.#payment = parseInt(input.trim(), 10);
    this.#validate(this.#payment);
    return this.#payment;
  }

  #validate(pay) {
    if (pay % 1000 !== 0) {
      throw new Error(ERROR.NO_THOUSAND_UNIT);
    }
  }

  numberOfTickets() {
    const ticketCounts = this.#payment / 1000;
    return ticketCounts;
  }
}

export default UserPayment;
