window.addEventListener("load", () => {
  console.log("eeee");
  new fullpage("#fullpage", {
    verticalCentered: false,
    scrollBar: true,
    anchors: ["anchor1", "anchor2", "anchor3", "anchor4"],
    menu: "#menu",
  });
});
