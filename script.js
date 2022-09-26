const body = document.querySelector("body");
const button = document.querySelector("button");
const colors=["#DFFF00","#FFBF00","#FF7F50","#DE3163","#9FE2BF","#40E0D0","#6495ED","white"];

button.addEventListener("click", changeBackground);

let sira=0;

function changeBackground() {
    console.log("assasasasassa");
  //  const rastgeleSayi = Math.floor(Math.random() *  colors.length);
  //  console.log(rastgeleSayi);
  //  const secilenRenk = colors[rastgeleSayi];
  //  body.style.backgroundColor = secilenRenk;

    if(sira>colors.length-1) sira = 0;
    const secilenRenk = colors[sira];
    sira++
    body.style.backgroundColor = secilenRenk;
}