//CallbackTest.jsx
//10초 후에 초기값 0을 10으로 증가시키는 함수를 작성하시오.
export default function CallbackTest() {
  function increase(x, t) {
    setTimeout(()=>{
      let result = x+10;
      console.log(result);
      t(result);
    }, 10000);
	} 

 console.log("콜백함수 테스트");
  increase(0, (result) => {
    console.log(result);
    increase(result, (result) => {
      console.log(result);
      increase(result, (result) => {
        console.log(result);
        increase(result, (result) => {
          console.log(result);
					//추가 작성.....
          console.log("작업완료");
        });
      });
    });
  });
//결과 콜백지옥(?)이 무한반복되는 문제가 있음
  return (
    <div>
      <h1>Callback함수 Test</h1>
    </div>
  );
};