Feature: BMI 計算機
  我想要計算我的 BMI

  Scenario: 我的身高是 "1.8"m , 體重是 "70" kg
    Given 身高是 "1.8"
    And 體重是 "70"
    When 計算兩個值的結果
    Then 結果應該是 "21.6"
