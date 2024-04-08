const inp = document.querySelectorAll('input')
const h = document.querySelector('h1')

const bt = document.querySelector('button')
const capitals = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      numbers = '1234567890', 
      symbols = '#_-.* '

let s = 'abcdefghijklmnopqrstuvwxyz'
let password = ''

const Check = () => {
    if(inp[0].checked) s += capitals
    if(inp[1].checked) s += numbers
    if(inp[2].checked) s += symbols
    Create()
}

const Create = () => {
    for(let i = 0; i < inp[3].value; i++){
        const rand = Math.floor( Math.random() * s.length )
        password += s[rand]
    }
    h.textContent = `your password is: ${password}`
}
bt.addEventListener('click', () => {
    Check()
    s = 'abcdefghijklmnopqrstuvwxyz'
    password = ''
})