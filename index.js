window.onload = function(){
  function removeImage(){
    var first_img = document.querySelector('img.comic')
    document.body.removeChild(first_img)
  }

  setInterval(removeImage,1000)
  // document.body.addEventListener('click',function(){console.log('ok')})
  // var img = document.querySelectorAll('img')
  // img.addEventListener('click',function(){
  //   this.style.display = 'none'
  // })
}
