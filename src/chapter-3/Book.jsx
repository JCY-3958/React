//리액트 함수 컴포넌트 .jsx
import React from "react"; //가져오기

/* jsx 코드로 작성  태그와 자바스크립트
function Book(props) { //함수에 대한 Book이라는 컴포넌트를 만들어 준 것임.
  return (
    <div>
      <h1>{`이 책의 이름은 ${props.name}입니다.`}</h1>
      <h2>{`이 책은 총 ${props.numOfPage}페이지로 이뤄져 있습니다.`}</h2>
    </div>
  );
}
*/

//리액트 코드로 작성
//리액트 엘리먼트는 자바스크립트 객체 형태로 작성
function Book(props) {
  return React.createElement(
    'div',
    null,
    [
      React.createElement(
        'h1',
        null,
        `이 책의 이름은 ${props.name}입니다.`
      ),
      React.createElement(
        'h2',
        null,
        `이 책은 총 ${props.numOfPage}페이지로 이뤄져 있습니다.`
      )
    ]
  )
}

export default Book; //내보내기