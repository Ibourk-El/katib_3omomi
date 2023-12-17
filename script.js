let myData = null;
async function fetchData() {
  let src = await fetch("data.json");
  let data = await src.json();
  myData = data;
  return data;
}
fetchData();
let catigory = "";
let p = document.getElementById("text");
let catigories = document.querySelectorAll(".title");
let li = document.querySelectorAll("li");
let part = document.getElementsByClassName("part");
let show_content = document.querySelector(".show");
let print_btn = document.querySelector("#print");
let back_btn = document.querySelector("#back");
let container = document.querySelector(".container");

catigories.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    catigory = myData[e.target.innerText];
    part[index].classList.toggle("active");
  });
});
li.forEach((item) => {
  item.addEventListener("click", (e) => {
    p.innerHTML = catigory[e.target.innerText];
    container.classList.add("active");
    show_content.style.display = "block";
  });
});

back_btn.addEventListener("click", (e) => {
  container.classList.remove("active");
  show_content.style.display = "none";
});

print_btn.addEventListener("click", (e) => {
  print();
});

window.addEventListener("beforeprint", ()=>{
  print_btn.style.display="none"
  back_btn.style.display="none"
})
window.addEventListener("afterprint", ()=>{
  print_btn.style.display="inline-block"
  back_btn.style.display="inline-block"
})
