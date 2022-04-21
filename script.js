const b_sound = new Audio("super.mp3");
const b_music = new Audio("franky_theme.mp3");

const button = document.querySelector("input#c_button");
const button2 = document.querySelector("input#l_button");

window.addEventListener("pageshow", function music() {
  b_music.play();
  b_music.loop = true;
  b_music.volume = 0.2;
});

button.addEventListener("mouseenter", function enter() {
  button.style.background = "#7fff00";
});
button.addEventListener("mouseout", function out() {
  button.style.background = "";
});
button.addEventListener("click", count);

button.addEventListener("click", function bsound() {
  b_sound.play();
});

button2.addEventListener("mouseenter", function enter2() {
  button2.style.background = "#ffd700";
});
button2.addEventListener("mouseout", function out2() {
  button2.style.background = "";
});
button2.addEventListener("click", function clear() {
  msg.innerHTML = "";
});

function count() {
  const beg = document.querySelector("input#beg");
  const end = document.querySelector("input#end");
  const step = document.querySelector("input#step");
  var msg = document.querySelector("div#msg");

  if (
    beg.value.length == 0 ||
    end.value.lenght == 0 ||
    step.value.lenght == 0
  ) {
    window.alert("[ERRO] Faltam dados!");
  } else if (step.value <= 0 ){
    window.alert("[ERRO] O campo -> passo <- só aceita valores maiores que 0")
  } 
  else {
    msg.innerHTML = "Contando: ";
 
    const b = Number(beg.value);
    const e = Number(end.value);
    const s = Number(step.value);

    if (b < e) {
      for (let c = b; c <= e; c += s) {
        msg.innerHTML += ` ${c}\u{27A1} `;
      }
    } else {
      for (let c = b; c >= e; c -= s) {
        msg.innerHTML += `${c} \u{27A1}`;
      }
    }
    msg.innerHTML += `\u{2B50}`;
  }
}
