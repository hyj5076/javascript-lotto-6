function parseInput(input) {
  return input.split(",").map((number) => number.trim());
}

test("사용자 로또 번호 출력", () => {
  const input = "5, 12,23 , 32,45, 52";
  const expectedOutput = ["5", "12", "23", "32", "45", "52"];

  const result = parseInput(input);

  expect(result).toEqual(expectedOutput);
});
