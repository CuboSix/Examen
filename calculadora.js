function HacerCalculos(){

var Salario = document.getElementById("TxtSalario").value

document.getElementById("Respuesta1").value="C$ "+Salario + " Cordobas"

var inss = Salario*0.07
document.getElementById("Respuesta2").value="C$ "+inss + " Cordobas"


var SalarioNeto=Salario-inss

document.getElementById("Respuesta3").value="C$ "+SalarioNeto + " Cordobas"

var SalarioAnual=SalarioNeto*12

var calculo
var SalarioResultante

if (SalarioAnual<=100000) {
        calculo=0
        SalarioResultante=SalarioNeto-calculo
        document.getElementById("Respuesta4").value="C$ "+calculo + " Cordobas"
        document.getElementById("Respuesta5").value="C$ "+SalarioResultante + " Cordobas"

}else if(SalarioAnual>100000 && SalarioAnual<=200000){
    calculo=((SalarioAnual-100000)*0.15)/12
    SalarioResultante=SalarioNeto-calculo
    document.getElementById("Respuesta4").value="C$ "+calculo + " Cordobas"
    document.getElementById("Respuesta5").value="C$ "+SalarioResultante + " Cordobas"

}else if(SalarioAnual>200000 && SalarioAnual<=350000){
    calculo=(((SalarioAnual-200000)*0.2)+15000)/12
    SalarioResultante=SalarioNeto-calculo
    document.getElementById("Respuesta4").value="C$ "+calculo + " Cordobas"
    document.getElementById("Respuesta5").value="C$ "+SalarioResultante + " Cordobas"

}else if(SalarioAnual>350000 && SalarioAnual<=500000){
    calculo=(((SalarioAnual-350000)*0.25)+45000)/12
    SalarioResultante=SalarioNeto-calculo
    document.getElementById("Respuesta4").value="C$ "+calculo + " Cordobas"
    document.getElementById("Respuesta5").value="C$ "+SalarioResultante + " Cordobas"

}else if(SalarioAnual>500000){
    calculo=(((SalarioAnual-500000)*0.30)+82500)/12
    SalarioResultante=SalarioNeto-calculo
    
    document.getElementById("Respuesta4").value="C$ "+calculo + " Cordobas"
    document.getElementById("Respuesta5").value="C$ "+SalarioResultante + " Cordobas"
}




}