import Lotto from "./Lotto.js";
import { runLotteryMachine } from "./domain/RunLotteryMachine.js";
import UserBonusNumber from "./domain/UserBonusNumber.js";
import UserPayment from "./domain/UserPayment.js";
import { ask } from "./UI/inputView.js";
import { Console } from "@woowacourse/mission-utils";
import UserBaseNumbers from "./domain/UserBaseNumbers.js";

class App {
  constructor() {
    this.base = new UserBaseNumbers();
    this.bonus = new UserBonusNumber();
    this.payment = new UserPayment();
  }

  async play() {
    try {
      runLotteryMachine();
      await this.setLotto();
    } catch (error) {
      Console.print(error.message);
    }
  }

  async setLotto() {
    // 사용자 입력값 호출
    const pay = await ask.payment();
    const baseNums = await ask.baseNumbers();
    const bonusNum = await ask.bonusNumber();

    // 로또 유효성 검사
    this.payment.setUserPayment(pay);
    this.base.setBaseNumbers(baseNums);
    this.bonus.setBonusNumber(bonusNum);

    //const lotto = new Lotto(baseNums);
    //lotto.ascendingOrder();

    Console.print(pay);
    Console.print(baseNums);
    Console.print(bonusNum);
  }

  evaluator() {
    LottoEvaluator();
  }

  runLotteryMachine() {
    //const machineNumbers = runLotteryMachine();
  }
}

export default App;
