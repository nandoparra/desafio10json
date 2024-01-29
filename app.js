let datosBici = require ("./datosBici");
let dhBici= { 
    bicicletas : datosBici,
    buscarBici: function (id){ 
        let biciBuscada = this.bicicletas.filter(function(bicicleta){
            return bicicleta.id == id;
        });
        if(biciBuscada.length == 0){
            return null
        }
        else{
            return biciBuscada
        }
    }, 
    venderBici: function(id){
        let biciAVender = this.buscarBici(id);
        if(biciAVender == null){
            return "Bicicleta no encontrada";
        }
        else{
            biciAVender[0].vendida = "si";
            return biciAVender;
        }
    },
    biciParaLaVenta: function(){let biciParaVender=
        this.bicicletas.filter(function(bicicletas){
            return bicicletas.vendida === "no";
        })
        return biciParaVender;
    },
    totalDeVentas: function (){
        let bicisVendidas= this.bicicletas.filter(function(bicicleta){
            return bicicleta.vendida=== "si";
        })
        let precioBici= bicisVendidas.precio;
            
       // let totalVentas= precioBici.reduce(function(inicio , numero){
         //   return inicio + numero;
        //})
        return precioBici;
    }
}
console.log(dhBici.bicis);
console.log("hola mundo")