let navigation = document.querySelector(".navigation");
let view = document.querySelector(".view");
let content = document.querySelector(".view .content");

let navcount = content.offsetWidth / view.offsetWidth;

let presetnIndex = 0;
let usable = true;

for (let i = 1; i <= navcount; i++) {
  let num = document.createElement("span");
  num.className = "num";
  num.dataset.index = i;
  let bullet = document.createElement("div");
  bullet.className = "circle";
  bullet.parentElement = num;
  if (i == 1) {
    num.className += " selected";
    bullet.className += " fill";
  }
  num.appendChild(bullet);
  navigation.appendChild(num);
}

let nums = Array.from(document.querySelectorAll(".num"));

nums.forEach((e, index) => {
  e.addEventListener("click", function () {
    presetnIndex = index;
    nums.forEach((e) => {
      e.classList.remove("selected");
      e.firstElementChild.classList.remove("fill");
    });
    e.classList.add("selected");
    e.firstElementChild.classList.add("fill");
    content.style.transform = `translateX(${
      nums.indexOf(e) * -view.offsetWidth
    }px)`;
  });
});

function moveWheel(event) {
  event.preventDefault();
  if (usable === false) return;

  if (event.deltaY > 0 && presetnIndex < nums.length)
    nums[presetnIndex + 1].click();
  else if (event.deltaY < 0 && presetnIndex > 0) nums[presetnIndex - 1].click();

  usable = false;

  setTimeout(() => {
    usable = true;
  }, 100);
}

view.onwheel = moveWheel;
