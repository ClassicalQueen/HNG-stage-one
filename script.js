document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.getElementById("mobile-menu");
  const navList = document.querySelector(".nav-list");

  mobileMenu.addEventListener("click", function () {
    navList.classList.toggle("active");
  });
});

const image = document.querySelector("img");

image.addEventListener("load", (event) => {
  const { naturalWidth, naturalHeight, width, height } = image;
  output.textContent = `
Natural size: ${naturalWidth} x ${naturalHeight} pixels
Displayed size: ${width} x ${height} pixels
`;
});

function updateTimeAndDay() {
  const utcTimeElement = document.getElementById("utcTime");
  const dayOfWeekElement = document.getElementById("dayOfWeek");

  const now = new Date();
  const utcTime = now.toISOString().split("T")[1].split(".")[0];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDay = days[now.getUTCDay()];

  utcTimeElement.textContent = utcTime;
  dayOfWeekElement.textContent = currentDay;
}

updateTimeAndDay();
setInterval(updateTimeAndDay, 1000);
