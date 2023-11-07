import Lotto from "./Lotto.js";
import { runLotteryMachine } from "./domain/RunLotteryMachine.js";
import UserBonusNumber from "./domain/UserBonusNumber.js";
import UserPayment from "./domain/UserPayment.js";
import { ask } from "./UI/inputView.js";
import { Console } from "@woowacourse/mission-utils";
import UserBaseNumbers from "./domain/UserBaseNumbers.js";
import LottoEvaluator from "./domain/LottoEvaluator.js";

class App {
  constructor() {}

  async play() {
    try {
      this.makeLotto();
    } catch (error) {
      Console.print(error.message);
    }
  }

  async setLotto() {}

  makeLotto() {
    const lottoNumbers = runLotteryMachine();
    Console.print(`Generated Lotto Numbers: ${lottoNumbers}`);
  }
}

export default App;
