/* TAREA 01 */

const img_btn = document.querySelector('.img-js')
img_btn.addEventListener('click', function() { 
   if (img_btn.style.border === '') {
    img_btn.style.border = '2px solid red'
  }else{ 
    img_btn.style.border = ''
}})

/* TAREA 02 */

const sticker01 = document.querySelector('#sticker-num-01')
const sticker02 = document.querySelector('#sticker-num-02')
const sticker03 = document.querySelector('#sticker-num-03')
const stickerVal = document.querySelector('.sticker-validation')

stickerVal.addEventListener('click', function() {
  let stickerTotal = Number(sticker01.value) + Number(sticker02.value) + Number(sticker03.value)
  let stickerMsg = document.querySelector('.sticker-msg')
  if (stickerTotal > 10){
    stickerMsg.innerHTML = 'Llevas demasiados sticker :('
  } else {
    stickerMsg.innerHTML = 'Llevas '+stickerTotal+' stickers'
  }
})

/* TAREA 03 */
const n1 = document.querySelector('#n-1')
const n2 = document.querySelector('#n-2')
const n3 = document.querySelector('#n-3')
const numVal = document.querySelector('.num-validation')


numVal.addEventListener('click', function() {
  let num1 = Number(n1.value)
  let num2 = Number(n2.value)
  let num3 = Number(n3.value)
  let passMsg = document.querySelector('.pass-msg')
  if (num1 == 9 && num2 == 1 && num3 == 1){
    passMsg.innerHTML = 'Password 1 es correcto'
  }
  else if (num1 == 7 && num2 == 1 && num3 == 4){
    passMsg.innerHTML = 'Password 2 es correcto'
  } else {
    passMsg.innerHTML = 'Password es incorrecto'
  }
})
