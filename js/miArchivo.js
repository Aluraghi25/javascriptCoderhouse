// INGRESO DE DATOS PERSONALES
const datosPersonales = [];
let ingreseNombre = prompt("Ingrese su Primer Nombre");
let ingreseApellido = prompt("Ingrese su Apellido");
let miEdad = prompt("Ingrese su Edad");
let fechaIngreso = prompt("Ingrese su Fecha de Ingreso (mm/dd/yyyy)")
let esBaja = prompt("Ha Dejado la Compañía? (si/no)")
function validadorBaja (esBaja){
    if(esBaja == "si") {
        fechaBaja = prompt("Ingrese su Fecha de Egreso (mm/dd/yyyy)");
        return fechaBaja;
    } else {
        return "Empleado Activo";
    }
}
console.log(validadorBaja(esBaja));

let auxIngreso = new Date (fechaIngreso)
console.log(auxIngreso);
console.log(typeof auxIngreso);

datosPersonales.push(ingreseNombre.toUpperCase(), ingreseApellido.toUpperCase(), miEdad, fechaIngreso, validadorBaja(esBaja));
console.log(datosPersonales)

// DEFINIR EL DIA, MES y AÑO DE LA LIQUIDACION
const fechaActual = new Date();
const hoy = fechaActual.getDate();
const mesActual = fechaActual.getMonth() + 1;
const anioActual = fechaActual.getFullYear();

// DEFINIR LA CANTIDAD DE DIAS DEL MES ACTUAL
function cantidadDiasMes (mesActual, anioActual) {
    return new Date (anioActual, mesActual, 0).getDate()
}
console.log(cantidadDiasMes(mesActual, anioActual))

// INDICAR SUELDO BASICO DEL EMPLEADO
let sueldo = parseInt(prompt("Ingrese su Sueldo Basico"));
console.log (sueldo);

// ESTABLECER SI EL EMPLEADO TRABAJO MES COMPLETO O NO
const diasMesCompleto = cantidadDiasMes(mesActual, anioActual);
let validadorDiasTrabajados = prompt("Trabajó el Mes Completo (si/no)").toLowerCase();
let diasTrabajados;
let diasProporcionales;
function validador (validadorDiasTrabajados) {
    if (validadorDiasTrabajados == "si") {
        diasTrabajados = diasMesCompleto;
        return diasTrabajados;
    } else if (validadorDiasTrabajados == "no") {
        diasProporcionales = parseInt(prompt("Ingrese Dias Trabajados en el Mes"));
        return diasProporcionales;
    }
}

// CALCULO DE SUELDO BASICO POR DIA
let sueldoPorDia = sueldo / cantidadDiasMes(mesActual, anioActual) 
console.log(sueldoPorDia)

// CALCULO SUELDO BASICO MENSUAL
let sueldoMensual = sueldoPorDia * validador(validadorDiasTrabajados)
console.log(sueldoMensual)

// VALIDADOR HORAS EXTRAS TRABAJADAS
const baseHsExtras = 200;
let trabajoHsExtras = prompt("Trabajó Horas Extras? (si/no)").toLowerCase();
let definicionHsExtras;
function confirmacionHsExtras (trabajoHsExtras) {
    if (trabajoHsExtras == "si") {
        definicionHsExtras = prompt("Fueron Hs Extras al 50%? (si/no)").toLowerCase();
        return definicionHsExtras;
    } else if (trabajoHsExtras == "no") {
        return "No calcular Horas Extras"
    }
}

console.log(confirmacionHsExtras(trabajoHsExtras))

let validadorHsExtras50;
let validadorHsExtras100;
function confirmarHsExtras50 (trabajoHsExtras, definicionHsExtras) {
    if (trabajoHsExtras == "si" && definicionHsExtras == "si") {
        validadorHsExtras50 = prompt("Ingrese la Cantidad de Hs Extras");
        return validadorHsExtras50;
    } else {
        return 0;
    }
}
function confirmarHsExtras100 (trabajoHsExtras, definicionHsExtras) {
    if (trabajoHsExtras == "si" && definicionHsExtras == "no") {
        validadorHsExtras100 = prompt("Ingrese la Cantidad de Hs Extras");
        return validadorHsExtras100;
    } else {
        return 0;
    }
}

// CALCULO DE HS EXTRAS AL 50% Y 100%
let hsExtrasAl50 = ((sueldoMensual / baseHsExtras) * 1.5) * confirmarHsExtras50(trabajoHsExtras, definicionHsExtras)
console.log(hsExtrasAl50)

let hsExtrasAl100 = ((sueldoMensual / baseHsExtras) * 2) * confirmarHsExtras100(trabajoHsExtras, definicionHsExtras)
console.log(hsExtrasAl100)

// CALCULO CONCEPTOS INDEMNIZATORIOS POR BAJA DE CONTRATO

function esRenuncia (esBaja) {
    if(esBaja == "si") {
        renuncio = prompt("Renunció? (si/no)");
        return renuncio;
    } else {
        return "El empleado no renunció"
    }
}
 
/* ESTABLECER PORCENTAJE RETENCIONES
const retencionesLey = 0.17;
let totalRetenciones = sueldoBruto * retencionesLey;
console.log(totalRetenciones);

 ESTABLECER SUELDO NETO
let sueldoNeto = sueldoBruto - totalRetenciones;
console.log(sueldoNeto);*/


const boton = document.getElementById('boton');
boton.addEventListener("click", () => {
    console.log("Los Datos Se Han Guardado Exitosamente!")
})




















