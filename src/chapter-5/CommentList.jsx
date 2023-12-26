import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "전찬용",
    comment: "집가고 싶다.",
  },
  {
    name: "이성종",
    comment: "발더게 하고싶다.",
  },
  {
    name: "박진호",
    comment: "퇴사하고 싶다.",
  }
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return (
          <Comment name={comment.name} comment={comment.comment} />
        );
      })}
      {/* <Comment name={"이인재"} comment={"안녕하세요, 힘듭니다."} /> */}
      {/* <Comment name={"리액트"} comment={"좋은거 맞음?"} /> */}
    </div>
  );
}

export default CommentList;