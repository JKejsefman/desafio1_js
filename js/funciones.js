let d1 = 1;
let d2 = 1;
let m1 = 1;
let m2 = 1;


let pasajero = prompt("Bievenido a CasaZoola. ¿Cual es tu Nombre?").toUpperCase();

while (pasajero === ""){
    pasajero = prompt ("¡Hola! ¿Estás allí? Por favor, ingresa tu nombre").toUpperCase();
} 


let actividad = prompt("¿Que deseas hacer hoy ?\n\nAlqAuto \n \nExcursiones \n \nAlojamiento \n \nSalir \n").toUpperCase();


while(actividad != "SALIR"){

    switch (actividad.toUpperCase()){
        case "ALQAUTO":
            let dia1 = prompt("Que dia quisieras tomar el Auto : ");
            let dia2 = prompt("Que dia devolverlo : ");
            let pasajeros = prompt("Cuantos Pasajeros son : ");
            let dia = 1
            do{
            
                if (dia1 <= 1 || dia1 > 31 || dia2 < 1 || dia2 > 31 || pasajeros <= 0){
                    alert("Los dias no estan bien Ingresados o no hay pasajeros");
                    break;
                } else if (dia1 >  dia2){
                    alert("¡Ingrese incorrectamente las Fechas!");
                    break;
                } else if   ( pasajeros <=4){
                                dia = dia2 - dia1
                                alert("Uds necesita un auto pequeno por "+ str(dia) + "dias");
                } else if ( pasajeros > 4){ 
                            dia = dia2 - dia1
                            alert("Uds necesita un auto Grande por "+ String(dia) + "dias");
                }               
            
            }while(dia1 > 0 || dia2 <32 || pasajeros > 0)
            
            
            break;
        case "EXCURSIONES":

            alert("la vamos a psar bomba!!!!!");
            break;
        case "ALOJAMIENTO":
            alert("Algo vamos a encontrar");
            break;
        case "":
            alert("No ingresaste ningún valor, escribe una opción por favor.");
       
    }
}

