import Lotto from "./Lotto.js";
import { runLotteryMachine } from "./domain/RunLotteryMachine.js";
import UserBonusNumber from "./domain/UserBonusNumber.js";
import UserPayment from "./domain/UserPayment.js";
import { ask } from "./UI/inputView.js";
import { Console } from "@woowacourse/mission-utils";
import UserBaseNumbers from "./domain/UserBaseNumbers.js";
import LottoEvaluator from "./domain/LottoEvaluator.js";

class App {
  constructor() {
    this.base = new UserBaseNumbers();
    this.bonus = new UserBonusNumber();
    this.payment = new UserPayment();
    this.lottoEvaluator = null;
  }

  async play() {
    try {
      await this.setLotto();
      this.createLottoForCounts();
    } catch (error) {
      Console.print(error.message);
    }
  }

  async setLotto() {
    // 사용자 입력값 호출
    const pay = await ask.payment();
    const baseNums = await ask.baseNumbers();
    const bonusNum = await ask.bonusNumber();

    // 로또 유효성 검사와 함께 저장
    this.payment.setUserPayment(pay);
    this.base.setBaseNumbers(baseNums);
    this.bonus.setBonusNumber(bonusNum);

    Console.print(`지불금액: ${pay}`);
    Console.print(`기본숫자: ${baseNums}`);
    Console.print(`보너스숫자: ${bonusNum}`);
  }

  createLottoForCounts() {
    const numberOfTickets = this.payment.numberOfTickets();
    Console.print(`티켓수: ${numberOfTickets}`);

    let userTickets = [];
    for (let i = 0; i < numberOfTickets; i++) {
      userTickets.push(runLotteryMachine());
    }

    Console.print(`티켓수에 따라 로또 생성: ${userTickets}`);
    return userTickets;
  }
}

export default App;
