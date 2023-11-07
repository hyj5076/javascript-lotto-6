import { Console } from "@woowacourse/mission-utils";
import { PRINT } from "../const/Messages.js";

export const print = {
  howManyBuy() {
    Console.print(PRINT.HOW_MANY_BUY);
  },

  prizeStatistics() {
    Console.print(PRINT.PRIZE_STATISTICS);
  },

  dashLine() {
    Console.print(PRINT.DASH_LINE);
  },

  count() {
    Console.print(PRINT.COUNT);
  },

  returnRate() {
    Console.print(PRINT.RETURN_RATE);
  },

  ticketCounts(ticketCounts) {
    const message = `${ticketCounts}${PRINT.HOW_MANY_BUY}`;
    Console.print(message);
  },

  formattedNumbers(numbers) {
    const formattedNumbers = numbers.join(", ");
    Console.print(`[${formattedNumbers}]`);
  },
};

export const prize = {
  results(lottoResults) {
    Console.print(lottoResults);
  },
};

/* export const printFormattedNumbers = (numbers) => {
  const formattedNumbers = numbers.join(", ");
  Console.print(`[${formattedNumbers}]`);
}; */
