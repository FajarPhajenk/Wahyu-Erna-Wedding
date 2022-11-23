const color = [
  {
    name: "pink",
    code: "#fb839e",
    url: "pink.css",
  },
  {
    name: "light blue",
    code: "#3e99fa",
    url: "light-blue.css",
  },
  {
    name: "light green",
    code: "#0dcdbd",
    url: "light-green.css",
  },
  {
    name: "red",
    code: "#cc3b3b",
    url: "red.css",
  },
  {
    name: "yellow",
    code: "#ff9800",
    url: "yellow.css",
  },
];

$(document).ready(function () {
  setColor();
  function setColor() {
    for (let i = 0; i < color.length; i++) {
      const span = document.createElement("span");
      span.style.backgroundColor = color[i].code;
      $(".colors").append(span);
    }
  }

  $(".colors span").click(function () {
    const index = $(this).index();
    $(".alternate-style").attr("href", color[index].url);
  });

  //   theme mode
  $(".theme-mode").change(function () {
    if ($(this).val() == "light") {
      $("body").removeClass("dark");
    } else {
      $("body").addClass("dark");
    }
  });

  //   toggle setting box
  $(".s-toggle-btn").click(function () {
    $(".setting").toggleClass("open");
  });
});
