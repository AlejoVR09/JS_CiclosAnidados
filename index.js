const c1=document.getElementById("c1")
const c2=document.getElementById("c2")
const c3=document.getElementById("c3")
const c4=document.getElementById("c4")
const c5=document.getElementById("c5")
const c6=document.getElementById("c6")
const c7=document.getElementById("c7")

c1.style.display="none"
c2.style.display="none"
c3.style.display="none"
c4.style.display="none"
c5.style.display="none"
c6.style.display="none"
c7.style.display="none"

const btnReset=document.getElementById("btnReset")
const btnSubmit=document.getElementById("btnSubmit")

btnSubmit.style.display="none"
btnReset.style.display="none"

let cont
let sum

let option=Number(prompt("1.Figura-Escaleras de asteriscos.\n2.Figura inversa-Escalera de asteriscos.\n3.Cantidad de numeros ingresados.\n4.Tabla de multiplicacion hasta 30.\n5.Tabla de multiplicacion de cualquier numero.\n6.Cuenta del 1 al 30 con un incremento dado.\n7.Cuenta del 1 al 30 con un incremento dado de manera regresiva.\n\nDigite el numero de la actividad que desea realizar:"))
    
switch (option) {
    case 1:
        //1.Hacer un programa que calcule la suma de los N primeros números naturales, dónde N es el número límite ingresado.
        c1.style.display="flex"
        btnSubmit.style.display="block"
        btnSubmit.addEventListener('click',()=>{
            let numberType=document.getElementById("numberType")
            let resultC1=document.getElementById("resultC1")

            
            if (!numberType.value || numberType.value<0) {
                alert("Escriba un numero")
            }
            else{
                let sum=0
                for (let i = 1; i <= numberType.value; i++) {
                    for (let j = 1; j <= i; j++) {
                        resultC1.innerHTML+="*"
                    }
                    resultC1.innerHTML+="<br>"
                }
                
                btnSubmit.style.display="none"
                btnReset.style.display="block"
            }
        })
        break;
    case 2:
        //2.Hacer un programa que pida el nombre de un estudiante y N notas, calcular el promedio de las notas y determinar si el estudiante aprueba o reprueba; (Aprueba con un promedio de 3).  
        c2.style.display="flex"
        sum=0
        cont=1
        let note=-1
        let name=prompt("Digite el nombre del estudiante")
        while (true) {
            note=Number(prompt("Digite la nota"))
            if(note==99){
                break
            }
            else if (note<0 || note>5) {
                alert("Escriba un numero positivo menor que 5 o 99 para salir")
            }
            else{
                cont++
                sum=sum+note
            }
        }
        let resultC2=document.getElementById("resultC2")
        if (cont>1) {
            resultC2.innerHTML=`El promedio final de ${name} es: ${sum/(cont-1)}`
            
        } else {
            resultC2.innerHTML=`El promedio final de ${name} es: ${sum/cont}`
        }
        btnReset.style.display="block"
        
        break;
    case 3:
        //3.Ingrese varios números enteros y muestre la cantidad de números ingresados y la suma de los mismos. Realice esta acción hasta que el usuario ingrese la palabra FIN.
        c3.style.display="flex"

            let resultC3=document.getElementById("resultC3")
            cont=0
            sum=0
            let validate
            
            while (true) {
                validate=prompt("Digite un numero entero: ")
                if (validate=='fin' || validate=='Fin') {
                    break
                }
                else if (isNaN(Number(validate))) {
                    alert("Escriba un numero o Fin para salir")
                }
                else{
                    cont++
                    sum=sum+Number(validate)
                }
            }
            resultC3.innerHTML="La suma es: "+sum+"\nSe ingresaron en total: "+cont+" numeros"
            btnReset.style.display="block"
            
        break;
    case 4:
        //4.realice una tabla de multiplicar con cualquier número ingresado hasta el 30.
        c4.style.display="flex"
        btnSubmit.style.display="block"
        btnSubmit.addEventListener('click',()=>{
            let numberMult=document.getElementById("numberMult")
            let resultC4=document.getElementById("resultC4")

            
            if (!numberMult.value || numberMult.value<0) {
                alert("Escriba un numero mayor de 0")
            }
            else{
                for (let i = 1; i <= 30; i++) {
                    resultC4.innerHTML+=`${numberMult.value} * ${i} = ${numberMult.value*i} <br>`
                }
                btnSubmit.style.display="none"
                btnReset.style.display="block"
            }
        })
        break;
    case 5:
        // 5.Cree la tabla de multiplicar de cualquier número ingresado de manera descendente.
        c5.style.display="flex"
        btnSubmit.style.display="block"
        btnSubmit.addEventListener('click',()=>{
            let numberMultDesc=document.getElementById("numberMultDesc")
            let resultC5=document.getElementById("resultC5")

            
            if (!numberMultDesc.value || numberMultDesc.value<0) {
                alert("Escriba un numero mayor de 0")
            }
            else{
                for (let i = 30; i >= 1; i--) {
                    resultC5.innerHTML+=`${numberMultDesc.value} * ${i} = ${numberMultDesc.value*i} <br>`
                }
                btnSubmit.style.display="none"
                btnReset.style.display="block"
            }
        })
        break;
    case 6:
        // 6.Cree un ciclo que cuente del 1 al 30 en intervalos el número ingresado.
        c6.style.display="flex"
        btnSubmit.style.display="block"
        btnSubmit.addEventListener('click',()=>{
            let numberInterval=document.getElementById("numberInterval")
            let resultC6=document.getElementById("resultC6")

            
            if (!numberInterval.value || numberInterval.value<0 || numberInterval.value>30) {
                alert("Escriba un numero mayor de 0 pero menor a 30")
            }
            else{
                for (let i = 0; i <= 30; i=i+Number(numberInterval.value)) {
                    if (i==0) {
                        resultC6.innerHTML+=`1<br>`
                    } else {
                        resultC6.innerHTML+=`${i}<br>`
                    }
                    
                }
                btnSubmit.style.display="none"
                btnReset.style.display="block"
            }
        })
        break;
    case 7:
        // 7.Cree un ciclo que cuente del 1 al 30 en intervalos el número ingresado, de manera regresiva.
        c7.style.display="flex"
        btnSubmit.style.display="block"
        btnSubmit.addEventListener('click',()=>{
            let numberIntervalDesc=document.getElementById("numberIntervalDesc")
            let resultC7=document.getElementById("resultC7")

            
            if (!numberIntervalDesc.value || numberIntervalDesc.value<0 || numberIntervalDesc.value>30) {
                alert("Escriba un numero mayor de 0 pero menor a 30")
            }
            else{
                for (let i = 30; i >= 0; i=i-Number(numberIntervalDesc.value)) {
                    if(i==0){
                        resultC7.innerHTML+=`1<br>`
                    }
                    else{
                        resultC7.innerHTML+=`${i}<br>`
                    }
                }
                btnSubmit.style.display="none"
                btnReset.style.display="block"
            }
        })
        break;   
    default:
        alert("No seleccionaste una opcion correcta!!")
        break;
}
btnReset.addEventListener('click',()=>{
    location.reload()
})