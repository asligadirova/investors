let form =document.getElementsByClassName('form');
let inputs=document.querySelectorAll('.form .form_inp')
let subbtn=document.getElementById('submit_btn')
subbtn.addEventListener('click',(e)=>{
    e.preventDefault()
    inputs.forEach(item=>{
        if (item.value.trim()==''){
            item.classList.add('err_input')
        }
    })
})