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

//INDICAR SUELDO BASICO DEL EMPLEADO
let sueldo = parseInt(prompt("Ingrese su Sueldo Basico"));
console.log (sueldo);

// ESTABLECER SI EL EMPLEADO TRABAJO MES COMPLETO O NO
const diasMesCompleto = 30;
//let validadorDiasTrabajados = prompt("Trabajó el mes completo (si/no)").toLowerCase();
let diasTrabajados = parseInt(prompt("Ingrese dias trabajados en el mes"));

let sueldoBruto = sueldo / diasMesCompleto * diasTrabajados
console.log(parseInt(sueldoBruto))

// ESTABLECER PORCENTAJE RETENCIONES
const retencionesLey = 0.17
let totalRetenciones = sueldoBruto * retencionesLey
console.log(parseInt(totalRetenciones))

//ESTABLECER SUELDO NETO
let sueldoNeto = sueldoBruto - totalRetenciones
console.log(parseInt(sueldoNeto))























