var on_click = function () {
  console.log (this.id);

};

for (var i=0; i<10; i++) {
  document.getElementById("myButton"+i).addEventListener("click", on_click);
}

document.getElementById("text");
document.getElementById("myButton1").addEventListener("click", on_click);
console.log(parseInt("10"));
