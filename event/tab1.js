//tab-button 클릭 시 짝 맞춰서 tab-content 보여주기
const button1 = document.querySelector(".list li:first-child");
const button2 = document.querySelector(".list li:nth-child(2)");
const button3 = document.querySelector(".list li:last-child");

//show 클래스명 부착할 요소 찾아오기
const show1 = document.querySelector(".container div:nth-child(2)");
const show2 = document.querySelector(".container div:nth-child(3)");
const show3 = document.querySelector(".container div:nth-child(4)");

//이벤트 연결
button1.addEventListener("click", () => {
  //show1 show 클래스명 부착
  //다른 show2 show2 의 클래스명 show 제거
  show1.classList.add("show");
  show2.classList.remove("show");
  show3.classList.remove("show");

  //오렌지 클래스명 부착 제거
  button1.classList.add("orange");
  button2.classList.remove("orange");
  button3.classList.remove("orange");
});
button2.addEventListener("click", () => {
  show2.classList.add("show");
  show1.classList.remove("show");
  show3.classList.remove("show");

  button2.classList.add("orange");
  button1.classList.remove("orange");
  button3.classList.remove("orange");
});
button3.addEventListener("click", () => {
  show3.classList.add("show");
  show2.classList.remove("show");
  show1.classList.remove("show");

  button3.classList.add("orange");
  button1.classList.remove("orange");
  button2.classList.remove("orange");
});
