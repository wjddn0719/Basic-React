import { useState } from "react";
//Counter 컴포넌트 생성 
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}번 클릭했음</h2>
      <button onClick={() => setCount(count + 1)}>클릭</button>
      
    </div>
  );
}

export default Counter;