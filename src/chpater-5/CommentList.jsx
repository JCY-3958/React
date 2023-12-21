import React from "react";
import Comment from "./Comment";

function CommentList(props) {
  return (
    <div>
      <Comment name={"이인재"} comment={"안녕하세요, 힘듭니다."} />
      <Comment name={"리액트"} comment={"좋은거 맞음?"} />
    </div>
  );
}

export default CommentList;