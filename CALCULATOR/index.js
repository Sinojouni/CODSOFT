const buts=document.querySelectorAll('.but')
const result=document.querySelector('.down')
const up=document.querySelector('.up')
let input=""
let checkpoint=false
let action=""
let num1=0
let num2=0

buts.forEach((e,index)=>{
    value=e.id
    e.addEventListener('click',()=>{
        if(e.id=='ac')
        {
            num1=0
            num2=0
            input=""
            res=""
            result.innerHTML=""
            up.innerHTML=""
            checkpoint=false
        }
        else if(e.id=='de')
        {
            input=input.slice(0,-1)
            result.innerHTML=input
        }
        else if(e.id=='+'||e.id=='*'|| e.id=='-' ||e.id=='/')
        {
            if(input=="" && action=="" && res=="")
            {
                alert('invalid')
            }
            else if(input=="" && action=="" && res!=""){
                input=res
                num1=Number(input)
                checkpoint=false
                action=e.id
                up.innerHTML=num1+action
                input=""
                result.innerHTML=input
            }
            else if(input=="" && action!=""){
                action=e.id
                up.innerHTML=num1+action
            }
            else{
                num1=Number(input)
                checkpoint=false
                action=e.id
                up.innerHTML=num1+action
                input=""
                result.innerHTML=input
            }
        }
        else if(e.id=='=')
        {
            num2=Number(input)
            checkpoint=false
            if(action=='+')
            {
                input=num1+num2
            }
            else if(action=='-')
            {
                input=num1-num2
            }
            else if(action=='*')
            {
                input=num1*num2
            }
            else if(action=='/')
            {
                input=num1/num2
            }
            result.innerHTML=input
            if(action!="")
            {
                up.innerHTML=num1+action+num2+'='
                res=input
                input=""
                action=""
            }else{
                up.innerHTML=res
            }
        }
        else if(e.id=='.')
        {
            if(checkpoint==false)
            {
                input=input+e.id
                result.innerHTML=input
                checkpoint=true
            }
        }
        else{
            input=input+e.id
            result.innerHTML=input
        }
    })
})

