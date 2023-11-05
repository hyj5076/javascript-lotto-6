import { PRINT } from "../const/Messages";

class ReturnRate {
  constructor(prize, payment) {
    this.prize = prize;
    this.payment = payment;
  }

  returnRate() {
    const rate = (this.prize / this.payment) * 100;
    return rate;
  }

  rounding() {
    const rate = this.returnRate();
    return parseFloat(rate.toFixed(2));
  }

  printReturnRate() {
    const print = PRINT.RETURN_RATE;
    const rateString = print.replace("${rate}", this.rounding().toString());
  }
}

export default ReturnRate;
