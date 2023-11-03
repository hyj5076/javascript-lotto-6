import { MissionUtils } from "@woowacourse/mission-utils";

export const runLotteryMachine = () => {
  const lottoNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  console.log(lottoNumbers);
  return lottoNumbers;
};

runLotteryMachine();
