function createLink() {
  let telNum = document.getElementById('numInput').value;
  window.location.href('https://web.whatsapp.com/send?phone=' + telNum)
}
