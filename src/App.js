import Lotto from "./Lotto.js";
import UserBonusNumber from "./domain/UserBonusNumber.js";
import UserPayment from "./domain/UserPayment.js";
import UserBaseNumbers from "./domain/UserBaseNumbers.js";
import LottoEvaluator from "./domain/LottoEvaluator.js";
import ReturnRate from "./domain/ReturnRate.js";
import { runLotteryMachine } from "./domain/RunLotteryMachine.js";
import { ask } from "./UI/inputView.js";
import { print } from "./UI/outputView.js";
import { Console } from "@woowacourse/mission-utils";

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
      const userTickets = this.createLotto();
      this.evaluateLotto(userTickets);
      this.returnRate();
    } catch (error) {
      Console.print(error.message);
      return Promise.reject(error);
    }
  }

  async setLotto() {
    const pay = await ask.payment();
    const baseNums = await ask.baseNumbers();
    const bonusNum = await ask.bonusNumber();

    this.payment.setUserPayment(pay);
    this.base.setBaseNumbers(baseNums);
    this.bonus.setBonusNumber(bonusNum);

    Console.print(`지불금액: ${pay}`);
    Console.print(`기본숫자: ${baseNums}`);
    Console.print(`보너스숫자: ${bonusNum}`);
  }

  createLotto() {
    const ticketCount = this.payment.numberOfTickets();
    print.howManyBuyTickets(ticketCount);
    const userTickets = [];

    for (let i = 0; i < ticketCount; i++) {
      const randomLottoNumbers = runLotteryMachine();
      const myLotto = new Lotto(randomLottoNumbers);
      myLotto.ascendingOrder();
      print.formattedNumbers(myLotto.getNumbers());
      userTickets.push(myLotto.getNumbers());
    }
    return userTickets;
  }

  evaluateLotto(userTickets) {
    print.prizeStatistics();
    print.dashLine();

    this.lottoEvaluator = new LottoEvaluator(this.base.getBaseNumbers(), this.bonus.getBonusNumber());
    const results = this.lottoEvaluator.evaluateTickets(userTickets);
    print.prizeResults(results);
  }

  returnRate() {
    const totalPrize = this.lottoEvaluator.calculatePrize(); // 총 상금 계산
    // 수익률 계산을 위한 ReturnRate 인스턴스 생성
    const returnRateCalculator = new ReturnRate(totalPrize, this.payment.getUserPayment());

    // 수익률을 문자열로 변환
    const rateString = returnRateCalculator.printReturnRate();

    // 새로 업데이트된 print.returnRate 메서드를 사용하여 출력
    print.returnRate(rateString);
  }
}

export default App;
