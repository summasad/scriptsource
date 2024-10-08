const txtYear = document.querySelector("#txtYear");
const selMon = document.querySelector("#selMon");
const selDay = document.querySelector("#selDay");

init = () => {
  // 오늘 날짜 구한 뒤 구한 날짜 화면에 보여주기
  const now = new Date();
  const year = now.getFullYear();
  let month = now.getMonth() + 1;
  let day = now.getDate() - 1;

  txtYear.value = year;

  if (month < 10) {
    month = "0" + month;
  }

  if (day < 10) {
    day = "0" + day;
  }

  selMon.value = month;
  selDay.value = day;
};
init();

getMovie = () => {
  // 년,월,일 가져오기
  const year = txtYear.value;
  let month = selMon.value;
  let day = selDay.value;
  //userDate = txtYear.value + selMon.value + selDay.value;
  // url
  let url =
    "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=82ca741a2844c5c180a208137bb92bd7&targetDt=";
  url += year + month + day;
  console.log(url);
  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error("주소 확인");
      return response.json();
    })
    .then((data) => {
      //화면 출력
      console.log(data.boxOfficeResult.dailyBoxOfficeList);
      const movies = data.boxOfficeResult.dailyBoxOfficeList;
      let str = "";
      let rankInten = "";
      movies.forEach((box) => {
        if (box.rankInten > 0) {
          rankInten = "▲" + box.rankInten;
        } else if (box.rankInten < 0) {
          rankInten = "▼" + box.rankInten * -1;
        } else if (box.rankInten == 0) {
          rankInten = "0";
        }
        str +=
          "<p>" + box.rank + "위(" + rankInten + ") : " + box.movieNm + "</p>";
      });

      document.querySelector(".boder-success").innerHTML = str;
    })
    .catch((error) => console.log(err));
};

document.querySelector(".btn-secondary").addEventListener("click", getMovie);
