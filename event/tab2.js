//tab.1 js 코드 개선

//tab-button 클릭 시 짝 맞춰서 tab-content 보여주기
// const button1 = document.querySelector(".list li:first-child");
// const button2 = document.querySelector(".list li:nth-child(2)");
// const button3 = document.querySelector(".list li:last-child");
const buttons = document.querySelectorAll(".tab-button");

//show 클래스명 부착할 요소 찾아오기
// const show1 = document.querySelector(".container div:nth-child(2)");
// const show2 = document.querySelector(".container div:nth-child(3)");
// const show3 = document.querySelector(".container div:nth-child(4)");
const shows = document.querySelectorAll(".tab-content");

//이벤트 연결
buttons.forEach((li, idx) => {
  li.addEventListener("click", (e) => {
    // 이벤트가 일어난 대상
    console.log(e.target);
    //show 클래스명 show전부 제거
    //button 클래스명 orange전부 제거
    buttons.forEach((item) => item.classList.remove("orange"));
    shows.forEach((item) => item.classList.remove("show"));

    //현재 이벤트가 일어난 대상에 orange 클래스명 부여
    e.target.classList.add("orange");

    //allDiv 인덱스를 이용해서 show 부착
    shows[idx].classList.add("show");
  });
});

// button1.addEventListener("click", () => {
//   //show1 show 클래스명 부착
//   //다른 show2 show2 의 클래스명 show 제거
//   show1.classList.add("show");
//   show2.classList.remove("show");
//   show3.classList.remove("show");

//   //오렌지 클래스명 부착 제거
//   button1.classList.add("orange");
//   button2.classList.remove("orange");
//   button3.classList.remove("orange");
// });
// button2.addEventListener("click", () => {
//   show2.classList.add("show");
//   show1.classList.remove("show");
//   show3.classList.remove("show");

//   button2.classList.add("orange");
//   button1.classList.remove("orange");
//   button3.classList.remove("orange");
// });
// button3.addEventListener("click", () => {
//   show3.classList.add("show");
//   show2.classList.remove("show");
//   show1.classList.remove("show");

//   button3.classList.add("orange");
//   button1.classList.remove("orange");
//   button2.classList.remove("orange");
// });
