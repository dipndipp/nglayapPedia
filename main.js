function modal1() {
  var open = document.getElementById("open");
  var modal_container = document.getElementById("modal-container");
  var close = document.getElementById("close");
  open.addEventListener("click", () => {
    modal_container.classList.add("show");
  });

  close.addEventListener("click", () => {
    modal_container.classList.remove("show");
  });
}

function modal2() {
  var open = document.getElementById("open2");
  var close = document.getElementById("close2");
  var modal_container2 = document.getElementById("modal-container2");
  open.addEventListener("click", () => {
    modal_container2.classList.add("show");
  });

  close.addEventListener("click", () => {
    modal_container2.classList.remove("show");
  });
}

function modal3() {
  var open = document.getElementById("open3");
  var close = document.getElementById("close3");
  var modal_container3 = document.getElementById("modal-container3");
  open.addEventListener("click", () => {
    modal_container3.classList.add("show");
  });

  close.addEventListener("click", () => {
    modal_container3.classList.remove("show");
  });
}
modal1();
modal2();
modal3();
