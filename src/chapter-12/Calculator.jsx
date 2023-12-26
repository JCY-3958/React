import React, {useState} from "react";
import TemperatureInput from "./TemperatureInput";

function BoilingVerdict(props) { //끓는 점 계산
  if(props.celsius >= 100) {
    return <p>믈이 끓습니다.</p>;
  } 
  return <p>물이 끓지 않습니다.</p>;
}

function toCelsius(fahrenheit) { //화씨를 섭씨로 변환
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) { //섭씨를 화씨로 변환
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) { //온도와 변환 종류 선택해서 변환을 실행
  const input = parseFloat(temperature); //화씨의 소수점이하 값을 나타내기 위해
  if(Number.isNaN(input)) { //입력값이 숫자인지 확인
    return "";
  }

  const output = convert(input); //입력값을 output으로 저장
  const rounded = Math.round(output * 1000) / 1000; //출력값을 소수점 한자리 까지 표현
  return rounded.toString(); //정수로 값을 리턴
}

function Calculator(props) { //온도 계산
  const [temperature, setTemperature] = useState(""); //입력 받은 온도값 저장
  const [scale, setScale] = useState("c"); //입력 받은 온도 종류 저장

  const handleCelsiusChange = (temperature) => { //섭씨 온도 입력시
    setTemperature(temperature);
    setScale("c");
  };

  const handleFahrenheitChange = (temperature) => { //화씨 온도 입력시
    setTemperature(temperature);
    setScale("f");
  };

  const celsius = scale === "f" ? tryConvert(temperature, toCelsius) : temperature; //화씨로 입력되었다면 섭씨로 변환하여 입력
  const fahrenheit = scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature; //섭씨로 입력되었다면 화씨로 변환하여 입력

  return (
    <div>
      <TemperatureInput //섭씨 입력 받는 부분
        scale = "c"
        temperature = {celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput //화씨 입력 받는 부분
        scale = "f"
        temperature = {fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </div> 
  );
}

export default Calculator;