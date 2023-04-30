const btnElm = document.querySelector('button')
const modalElm= document.querySelector('.modal-parent')
const cancelElm=document.querySelector('.X')
const sectionElm=document.querySelector('section')
btnElm.addEventListener('click',function(){
    modalElm.style.display='block'
    sectionElm.style.filter='blur(6px)'
    btnElm.blur()
})

cancelElm.addEventListener('click',function(){
    modalElm.style.display='none' 
    sectionElm.style.filter='blur(0px)'
})

document.body.addEventListener('keydown',function(e){
    if(e.keyCode==27){
        modalElm.style.display='none' 
        sectionElm.style.filter='blur(0px)'
    }
})