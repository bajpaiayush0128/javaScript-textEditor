updateText = () => {
  let text = document.getElementById("text-input").value;
  document.getElementById("text-output").innerText = text;
};

makeBold = (elem) => {
  elem.classList.toggle("active");
  document.getElementById("text-output").classList.toggle("bold");
};

makeItalic = (elem) => {
  elem.classList.toggle("active");
  document.getElementById("text-output").classList.toggle("italic");
};

makeUnderline = (elem) => {
  elem.classList.toggle("active");
  document.getElementById("text-output").classList.toggle("underline");
};

alignText = (elem, alignType) => {
  elem.classList.toggle("active");
  document.getElementById("text-output").style.textAlign = alignType;
  let buttonsList = document.getElementsByClassName("align");
  for (let button of buttons) {
    button.classList.remove("active");
  }
  elem.classList.toggle("active");
};
// oninput in place of onclick is better option
