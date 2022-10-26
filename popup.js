document.getElementById("confirm").addEventListener("click", createLink);
function createLink() {
  let telNum = document.getElementById('numInput').value;
  window.open('https://web.whatsapp.com/send?phone=' + telNum)
}
