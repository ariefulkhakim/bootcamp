const head = document.getElementById("head");
head.innerHTML = "Selamat Datang Di Warung Makan sederhana";
const input = document.getElementById("input");
const button = document.getElementById("button");
const lists = document.getElementById("list");
let menuList = [];
localData = JSON.parse(localStorage.getItem("menuList"));
if (localData != null) {
  menuList = localData;
}
button.addEventListener("click", function() {
  const simpan = input.value;
  menuList.push(simpan);
  tampilkan();
  input.value = "";
  localStorage.setItem("ListBaru", JSON.stringify(menuList));
  tampilkan();
});

function tampilkan() {
  let view = "";
  for (let i = 0; i < menuList.length; i++) {
    view = view + "<li>${menuList[i]}</li>";
  }
  lists.innerHTML = view;
}

tampilkan();
