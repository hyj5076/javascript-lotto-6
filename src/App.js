import Lotto from "./Lotto.js";
import { runLotteryMachine } from "./domain/RunLotteryMachine.js";
import UserBonusNumber from "./domain/UserBonusNumber.js";
import UserPayment from "./domain/UserPayment.js";
import { ask } from "./UI/inputView.js";

class App {
  constructor() {
    this.lotto = new Lotto();
    this.bonus = new UserBonusNumber();
    this.payment = new UserPayment();
  }

  async play() {
    try {
      runLotteryMachine();
      await this.setLotto();
    } catch {}
  }

  async setLotto() {
    const baseNums = await ask.baseNumbers();
    const bonusNum = await ask.bonusNumber();
    const pay = await ask.payment();

    this.lotto.setUserLottoNumbers(baseNums);
    this.bonus.setBonusNumber(bonusNum);
    this.payment.setUserPayment(pay);
  }

  runLotteryMachine() {
    const machineNumbers = runLotteryMachine();
  }
}

export default App;
