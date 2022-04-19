
let edad = parseInt(prompt("Ingrese su edad actual"))
let cumple = true






while (cumple ){
    let condicion = prompt("A la fecha de hoy ya cumplio años? si o  no ").toLowerCase()

    if (condicion == "no"){
        cumple = false
        let año = 2021
        let nacimiento = (año-edad)
        console.log("su año de nacimiento es:" +  nacimiento)
        for( let i = edad; i <= 100; i++) {
            if( i % 10 ==0){
                console.log("Cumpliras " + i + " años en el " + (i+nacimiento))
            }
        }   
    }
    if(condicion =="si") {
        cumple = false
        let año = 2022
        let nacimiento = (año-edad)
        console.log("su año de nacimiento es:" +  nacimiento)
        for( let i = edad; i <= 100; i++) {
            if( i % 10 ==0){
                console.log("Cumpliras " + i + " años en el " + (i+nacimiento))
              }
        }
    }
}

