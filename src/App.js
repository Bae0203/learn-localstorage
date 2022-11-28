import { useState } from "react";
import "./App.css";

//localstorage
/**
 * 로컬스토리지는 5mb이하를 웹브라우저에 영구적으로 저장해준다
 * 로컬스토리지는 딱 4개만 알면 된다
 * 값 추가, 값 불러오기, 초기화, 값 하나 삭제
 * 1) 값 추가
 * localStorage.setItem(key, value);
 *
 * 2) 값 불러오기
 * localStorage.getItem(key);
 *
 * 3) 초기화
 * localStorage.clear();
 *
 * 4) 값 하나 삭제
 * localStorage.removeItem(key);
 *
 * 이 쉬운걸 왜 지금 하나 싶다
 */

function App() {
  let localname = localStorage.getItem("name");
  const [name, setName] = useState("");
  return (
    <div className="App">
      <div>localstorage 배우기</div>
      <input
        type={"text"}
        placeholder="이름을  입력해주세요."
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          localStorage.setItem("name", name);
        }}
      >
        이름 추가하기
      </button>
      <button
        onClick={() => {
          let a = localStorage.getItem("name");
          console.log("local " + a);
        }}
      >
        이름 불러오기
      </button>
      <button
        onClick={() => {
          localStorage.clear();
        }}
      >
        전부 삭제하기
      </button>
      <h2>{localname}</h2>
    </div>
  );
}

export default App;
