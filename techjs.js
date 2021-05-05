var toggleBtn = document.getElementById("toggle");
var toggleBtn2 = document.getElementById("toggle2");
var toggleBtn3 = document.getElementById("toggle3");

function hideOrShow() {
  var x = document.getElementById("myDiv");
  if (x.style.display === "none") {
    x.style.display = "block";
    toggleBtn.innerHTML = '[<span style="color: #2c62c5;">hide</span>]';
  } else {
    x.style.display = "none";
    toggleBtn.innerHTML = '[<span style="color: #2c62c5;">show</span>]';
  }
}

function hideOrShow2() {
  var y = document.getElementById("myDiv2");
  if (y.style.display === "none") {
    y.style.display = "block";
    toggleBtn2.innerHTML = '[<span style="color: #2c62c5;">hide</span>]';
  } else {
    y.style.display = "none";
    toggleBtn2.innerHTML = '[<span style="color: #2c62c5;">show</span>]';
  }
}

function hideOrShow3() {
  var z = document.getElementById("myDiv3");
  if (z.style.display === "none") {
    z.style.display = "block";
    toggleBtn3.innerHTML = '[<span style="color: #2c62c5;">hide</span>]';
  } else {
    z.style.display = "none";
    toggleBtn3.innerHTML = '[<span style="color: #2c62c5;">show</span>]';
  }
}

toggleBtn.onclick = hideOrShow;
toggleBtn2.onclick = hideOrShow2;
toggleBtn3.onclick = hideOrShow3;
