// function clear() {
//   console.log("hi");
//   document.getElementById("display").value = "";
//   alert("hi");
// }

function show(val) {
  if (val === "c") {
    document.getElementById("display").value = "";
  } else {
    document.getElementById("display").value += val;
  }
}

function calculate() {
  let val = document.getElementById("display").value;
  let result = eval(val);
  document.getElementById("display").value = result;
}
