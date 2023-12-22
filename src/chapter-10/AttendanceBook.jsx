import React from "react";

const students = [
  {
    id: 1,
    name : "박00"
  },
  {
    id: 2,
    name : "전00"
  },
  {
    id: 3,
    name : "이00"
  },
  {
    id: 4,
    name : "임00"
  },
];

function AttendanceBook(props) {
  return (
    <ul>
      {students.map((student) => {
        //id를 키값으로 사용
        return <li key={student.id}>{student.name}</li>;
      })}
    </ul>
  );
}

export default AttendanceBook;

/*
{students.map((student, index) => {
  //포맷팅 된 문자열을 키값으로 사용
  return <li key={`student-id-${student.id}`}>{student.name}</li>;
  
  //배열의 인덱스를 키값으로 사용
  return <li key={index}>{student.name}</li>;
})}
*/