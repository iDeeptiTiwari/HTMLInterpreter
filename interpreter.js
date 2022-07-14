function run() {
  htmlCode = document.getElementById("inputBox").value;
  if (htmlCode == "") {
    alert("Entered Code Is Empty");
    return;
  }
  outputArea = document.getElementById("outputBox");
  outputArea.innerHTML = htmlCode;
}

function reset() {
  document.getElementById("inputBox").value = "";
  document.getElementById("outputBox").innerHTML = "";
}

function goHome() {
  document.location = "main.html";
}

function setTheme() {
  button = document.getElementById("themeButton");
  if (button.value == "day") {
    document.body.style.backgroundColor = "black";
    document.getElementById("inputBox").style.backgroundColor = "#453F3D";
    document.getElementById("inputBox").style.color = "white";
    document.getElementById("base").style.backgroundColor = "#c7838f";
    document.getElementById("header").style.backgroundColor = "#453F3D";
    document.getElementById("themeButton").style.backgroundImage =
      "url('resources/images/night_theme_icon.png')";
    button.value = "night";
  } else if (button.value == "night") {
    document.body.style.backgroundColor = "beige";
    document.getElementById("inputBox").style.backgroundColor = "#FCFCFB";
    document.getElementById("inputBox").style.color = "black";
    document.getElementById("base").style.backgroundColor = "#fec0cb";
    document.getElementById("header").style.backgroundColor = "palevioletred";
    document.getElementById("themeButton").style.backgroundImage =
      "url('resources/images/day_theme_icon.png')";
    button.value = "day";
  }
}
function rotate() {
  button = document.getElementById("rotateButton");
  if (button.value == "vertical") {
    document.getElementById("backBlock").style.flexWrap = "wrap";
    document.getElementById("inputBox").style.width = "100%";
    document.getElementById("outputBox").style.width = "100%";
    document.getElementById("inputBox").style.height = "49%";
    document.getElementById("outputBox").style.height = "49%";
    document.getElementById("rotateButton").style.transform = "rotate(-90deg)";
    button.value = "horizontal";
  } else if (button.value == "horizontal") {
    document.getElementById("inputBox").style.width = "50%";
    document.getElementById("inputBox").style.height = "auto";
    document.getElementById("outputBox").style.width = "50%";
    document.getElementById("outputBox").style.height = "auto";
    document.getElementById("backBlock").style.flexWrap = "nowrap";
    document.getElementById("rotateButton").style.transform = "rotate(180deg)";
    button.value = "vertical";
  }
}

// function saveHTMLCode() {
//   //   //   let fileName = prompt("Please enter file name", "index");
//   //   //   if (fileName == "") {
//   fileName = "index";
//   //   //   }
//   //   var fs = require("fs");
//   //   //   var htmlContent = document.getElementById("inputBox").value;
//   var htmlContent = "<h1>bhj</h1>";
//   var filePath = fileName + ".html";
//   //   console.log(filePath);
//   //   fs.writeFile(filePath, htmlContent);
//   writeFile(filePath, htmlContent, (err) => {
//     // In case of a error throw err.
//     if (err) throw err; //alter("Process CouldNot Be Completed");
//   });
// }
