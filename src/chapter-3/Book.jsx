//리액트 함수 컴포넌트 .jsx
import React from "react"; //가져오기

function Book(props) { //함수에 대한 Book이라는 컴포넌트를 만들어 준 것임.
  return (
    <div>
      <h1>{`이 책의 이름은 ${props.name}입니다.`}</h1>
      <h2>{`이 책은 총 ${props.numOfPage}페이지로 이뤄져 있습니다.`}</h2>
    </div>
  );
}

export default Book; //내보내기