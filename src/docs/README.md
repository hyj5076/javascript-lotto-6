# 미션 - 로또

## 🎁 기능 목록

1. 로또 번호 발행

- [ ] 숫자 범위 1 ~ 45의 정수
- [ ] 로또 1개 발행 시 6개의 중복되지 않는 숫자 추출

2. 당첨 번호 추첨

- [ ] 중복되지 않는 숫자 6개와 보너스 번호 1개
- [ ] 1등부터 5등까지 당첨
- [ ] 당첨 기준과 금액 조건 설정

3. 입력

- [ ] 로또 구입 금액 입력 받기
- [ ] 당첨 번호 입력 받기
- [ ] 보너스 번호 입력 받기
- [ ] 오입력 시 (예외 처리 후) 해당 부분부터 입력 다시 받음

4. 출력

- [ ] 로또 수량 및 번호 출력
- [ ] 로또 번호 오름차순 정렬

5. 수익률 계산

- [ ] 수익률 계산
- [ ] 수익률 소수점 둘째 자리에서 반올림

6. 당첨 결과

- [ ] 로또 번호와 당첨 번호 비교
- [ ] 당첨 내역 출력
- [ ] 총 수익률 출력

7. 예외 처리

- [ ] 예외 상황 시 에러 문구 출력
- [ ] 예외 상황 시 `throw`문 사용해 예외 발생

🔹 숫자만 입력 받아야 할 경우

- [ ] 문자열 포함
- [ ] 특수기호 포함
- [ ] 공백 포함
- [ ] 0일 경우
- [ ] 입력값 없음

🔹 구입 금액 입력 시

- [ ] 1000원 단위가 아닐 경우

🔹 로또 숫자 입력 시

- [ ] 1 ~ 45 사이의 숫자가 아닌 경우
- [ ] 중복된 숫자가 있는 경우
- [ ] 당첨 번호가 6개가 아닌 경우
- [ ] 보너스 번호가 1개가 아닌 경우

---

## 과제 제출 전 체크리스트

### 🍑 0점 방지

- [x] `Node.js`버전 `18.17.1`이상
- [ ] 요구 사항에 명시된 출력값 형식 지키기
- [ ] 모든 테스트 성공

### 🍏 요구 사항

- [ ] 코드 컨벤션
- [ ] 커밋 메시지 컨벤션
- [ ] `package.json` 변경 금지
- [ ] `process.exit()` 호출 금지
- [ ] 파일, 패키지 이름 수정 및 이동 금지
- [ ] 들여쓰기 2까지만 허용

### 🍊 추가 요구 사항

1. 클래스 분리

- [ ] 함수의 길이가 15라인을 넘지 않음
- [ ] 함수가 한 가지 기능만 하도록 구현
- [ ] if문 else 사용 지양 => return 사용

2. 도메인 로직 단위 테스트 작성하는 연습

- [ ] 도메인 로직에 단위 테스트 구현
- [ ] 핵심 로직을 구현하는 코드와 UI를 담당하는 로직을 구분

3. 로또 클래스

- [ ] 제공된 Lotto 클래스 활용해 구현
- [ ] `numbers`의 `#`prefix 변경하지 않아야 함
- [ ] `Lotto`에 필드 추가 할 수 없음

### 🍅 공통 피드백

1. 1주 차

- [ ] 불필요한 공백, 주석, `console.log` 제거
- [ ] 의도가 있는 이름 => 축약하지 않기
- [ ] JavaScript의 API 적극 활용
- [ ] EOL 설정 확인
- [x] `prettier`와 `eslint` 사용

2. 2주 차

- [x] `README.md` 상세히 작성 => 마크다운 문법 지키기
- [ ] 기능 목록 재검토 => 예외 상황도 정리
- [ ] 기능 목록 업데이트 => 살아있는 문서 만들기
- [ ] 값을 하드 코딩 하지 않기 => 상수로 변수 이름 부여
- [ ] 클래스 이외의 객체 생성 방법 적절하게 적용
- [ ] 구현 순서 지키기
- [ ] 작은 단위의 테스트 코드 => 수시로 업데이트