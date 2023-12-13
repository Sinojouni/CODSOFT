const button=document.querySelectorAll('.bute')
const pages=document.querySelectorAll('.pg')
const contact=document.querySelector('.contactme')

button.forEach((e,index)=>{
    e.addEventListener('click',()=>{

        let id=e.getAttribute('name')
        pages.forEach((e,index)=>{
            let div=document.getElementById(e.id)
            if(e.id!=id)
            {
                setTimeout(()=>{
                    div.style.zIndex=10-index;
                },500)
            }
            else{
                setTimeout(()=>{
                    div.style.zIndex=10+index;
                },500)
            }
        })
    })
})
contact.addEventListener('click',()=>{
    let id="page-4"
    pages.forEach((e,index)=>{
        if(e.id!=id)
        {
            document.getElementById(e.id).style.zIndex=10-index;
        }
        else{
            document.getElementById(id).style.zIndex=10+index;
        }
    })
})