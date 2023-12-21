function myadd(){
    let x =Number(document.getElementById('num1').value)
    let y =Number(document.getElementById('num2').value)
    let z = x+y
    z = z.toFixed(2)
    console.log(x)
    console.log(y)
    console.log(z)
    document.getElementById('result').innerHTML = `<h3>Result : ${z} </h3>`
}
function mysub(){
    let x =Number(document.getElementById('num1').value)
    let y =Number(document.getElementById('num2').value)
    let z = x-y
    z = z.toFixed(2)
    console.log(x)
    console.log(y)
    console.log(z)
    document.getElementById('result').innerHTML = `<h3>Result : ${z} </h3>`
}
function mymul(){
    let x =Number(document.getElementById('num1').value)
    let y =Number(document.getElementById('num2').value)
    let z = x*y
    z = z.toFixed(2)
    console.log(x)
    console.log(y)
    console.log(z)
    document.getElementById('result').innerHTML = `<h3>Result : ${z} </h3>`
}
function mydiv(){
    let x =Number(document.getElementById('num1').value)
    let y =Number(document.getElementById('num2').value)
    let z = x/y
    z = z.toFixed(2)
    console.log(x)
    console.log(y)
    console.log(z)
    document.getElementById('result').innerHTML = `<h3>Result : ${z} </h3>`
}