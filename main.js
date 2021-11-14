let anchor = Array.from(document.querySelectorAll(".anchor"));

anchor[0].firstElementChild.firstElementChild.classList.add("fill");
anchor.forEach((e) => {
  e.addEventListener("click", function () {
    anchor.forEach((e) => {
      e.firstElementChild.firstElementChild.classList.remove("fill");
    });
    e.firstElementChild.firstElementChild.classList.add("fill");
  });
});

window.addEventListener("load", () => {
  const anchors = [];
  anchor.forEach((e) => {
    anchors.push(e.getAttribute("data-menuanchor"));
  });

  new fullpage("#fullpage", {
    verticalCentered: false,
    scrollBar: true,
    anchors,
    menu: "#menu",
  });
});

const body = document.querySelector("body");
const options = {
  attributes: true,
};
function callback(mutationList, observer) {
  mutationList.forEach(function (mutation) {
    if (mutation.type === "attributes" && mutation.attributeName === "class") {
      anchor[parseInt(body.classList[0].slice(-1)) - 1].click();
    }
  });
}

new MutationObserver(callback).observe(body, options);
