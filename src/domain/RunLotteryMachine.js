import { Console, MissionUtils } from "@woowacourse/mission-utils";

export const runLotteryMachine = () => {
  const randomLottos = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  return randomLottos;
};
