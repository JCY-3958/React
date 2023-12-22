import React, {useState} from "react"; //함수 컴포넌트를 쓸 때는 {useState} 추가해야함.
//import React from "react";

/*
class ConfirmButton extends React.Component {
  constructor(props) { // Component를 생성할 때 state 값을 초기화 하거나
    super(props); // 매서드를 바인딩 할 때 constructor()를 사용함.

    this.state = {
      isConfirmed: false,
    };

    //this.handleConfirm = this.handleConfirm.bind(this); 
    //아래의 코드가 클래스 필드 문법 사용, 위의 바인드는 주석 처리해야함
    this.handleConfirm = () => {
      this.setState((prevState) => ({
        isConfirmed: !prevState.isConfirmed,
      }));
    }
  }

  handleConfirm() {
    this.setState((prevState) => ({
      isConfirmed: !prevState.isConfirmed,
    }));
  }

  render() {
    return (
      <button
        onClick={this.handleConfirm}
        disabled={this.state.isConfirmed}
      >
        {this.state.isConfirmed ? "확인됨" : "확인하기"}
      </button>
    );
  }
} */

//함수 컴포넌트로 변경하기
function ConfirmButton(props) {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
  };

  return (
    <button onClick={handleConfirm} disabled={isConfirmed}>
      {isConfirmed ? "확인됨" : "확인하기"}
    </button>
  );
}

export default ConfirmButton;