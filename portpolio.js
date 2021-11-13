let navigation = document.querySelector(".navigation");
let view = document.querySelector(".view");
let content = document.querySelector(".view .content");

let navcount = content.offsetWidth / view.offsetWidth;

for (let i = 1; i <= navcount; i++) {
  let num = document.createElement("span");
  num.className = "num";
  if (i == 1) num.className += " selected";
  num.dataset.index = i;
  num.textContent = "o";
  navigation.appendChild(num);
}

let nums = Array.from(document.querySelectorAll(".num"));

nums.forEach((e) => {
  e.addEventListener("click", function () {
    nums.forEach((e) => {
      e.classList.remove("selected");
    });
    e.classList.add("selected");
    content.style.transform = `translateX(${
      nums.indexOf(e) * -view.offsetWidth
    }px)`;
  });
});

// line 29
