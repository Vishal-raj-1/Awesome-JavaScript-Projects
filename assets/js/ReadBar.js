window.onscroll = function () {
  let scrolled_top =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;

  let to_scroll =
    (document.documentElement.scrollHeight || document.body.scrollHeight) -
    (document.documentElement.clientHeight ||
      document.body.clientHeight ||
      window.innerHeight);

  let horizontal_width = (scrolled_top / to_scroll) * 100;
  document.querySelector(".horizontal_scroll").style.width =
    horizontal_width + "%";
};
