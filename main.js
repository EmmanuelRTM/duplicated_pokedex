
(function(){
    'use strict'

    //var botonLogin=document.getElementById('login-btn');
console.log(pokemons.length);
var espacio_libre = document.querySelector('.contenedor'); 

//function create one card
function getPokeId(i){
    var id_poke= pokemons[i].id;//para buscar only
    return id_poke;
}
function getPokemonName(i){
    var name_poke= pokemons[i].name.english;
    return name_poke;
}

function getPokemonImgUrl(id_poke){
    try{
        var img_poke="https://pokeres.bastionbot.org/images/pokemon/"+id_poke+".png"
    }catch{
        var img_poke="https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/5937e90a5bafe882f5bc09e6/gatitos-cesta_0.jpg"
    }
    var img_poke="https://pokeres.bastionbot.org/images/pokemon/"+id_poke+".png"

    return img_poke;
}
function getPokemonType(i){
    var type_length=pokemons[i].type.length;
    if (type_length>1){
        var type_poke = [pokemons[i].type[0], pokemons[i].type[1]];
        var type_poke_show=`Type 1: ${type_poke[0]}, Type 2: ${type_poke[1]}`;
    } else{
        var type_poke= pokemons[i].type[0];
        var type_poke_show=`${type_poke}`;
    }
    return type_poke_show;
}

function getPokeHP(i){
    var hp_poke=pokemons[i].base.HP;
    return hp_poke;
}

function divsCartaGrande(pokemons){
    var infoDivs =''
    var infoDivs_i=''
    for (var i=0;i<pokemons.length;i++){
        infoDivs_i='<div class="card  col-4 mb-3 ">'
                //+'<div class="container">'
                    +`<img src= ${getPokemonImgUrl(getPokeId(i))} class="card-img-top" alt="...">`
                    +'<div class="card-body">'
                        +'<h5 class="card-title">'
                            +getPokemonName(i)
                        +'</h5>'
                        +'<p class="card-text">'
            //poner condicionante de length
                            +getPokemonType(i)
                        +'</p>'
                        +'<p class="card-text">'
                            +'HP: '+ getPokeHP(i)
                        +'</p>'
                    +'</div>'
                //+ '</div>'
            +'</div>'

        //console.log(infoDivs_i);
        infoDivs=infoDivs+infoDivs_i
        }
       //console.log(infoDivs)
    return infoDivs;
}

function divsCartaChica(pokemons){
    var infoDivs =''
    var infoDivs_i=''
    for (var i=0;i<pokemons.length;i++){
        infoDivs_i='<div class="card  col-7 mb-5">'
                +`<img src= ${getPokemonImgUrl(getPokeId(i))} class="card-img-top" alt="...">`
                +'<div class="card-body">'
                    +'<h5 class="card-title">'
                        +getPokemonName(i)
                    +'</h5>'
                    +'<p class="card-text">'
        //poner condicionante de length
                        +getPokemonType(i)
                    +'</p>'
                    +'<p class="card-text">'
                        +'HP: '+ getPokeHP(i)
                    +'</p>'
                +'</div>'
            + '</div>'

        
        infoDivs=infoDivs+infoDivs_i
        }
    //console.log(infoDivs)
    return infoDivs;
}

function createPokeBigCard(pokemons, espacio_libre){
    var addCardBig = document.createElement('div')
    addCardBig.setAttribute('class','d-none d-lg-block d-xl-block d-md-none d-xs-none')  
    addCardBig.setAttribute('id','cartaGrande')            
    addCardBig.innerHTML = '<div class="row justify-content-center">' + divsCartaGrande(pokemons)

    var addCardSmall = document.createElement('div')
    addCardSmall.setAttribute('class','d-xs-block d-sm-block d-md-block d-lg-none d-xl-none') 
    addCardSmall.setAttribute('id','cartaChica')        
    addCardSmall.innerHTML = '<div class="row justify-content-center">' + divsCartaChica(pokemons)

   // return addCard;
    console.log(addCardBig);
    console.log(addCardSmall);

    console.log(espacio_libre);

    espacio_libre.appendChild( addCardBig );
    espacio_libre.appendChild( addCardSmall );

    //return addCardBig,addCardSmall;
}


/*
function createPokeSmallCard(pokemons, espacio_libre){
    var addCard = document.createElement('div')
    addCard.setAttribute('class','d-xs-block d-sm-block d-md-block d-lg-none d-xl-none')            
    addCard.innerHTML = '<div class="row justify-content-center">' + divsCartaChica(pokemons)
    console.log(addCard);
    //console.log(addCard);
}
*/
/*
var cartasGeneradas=[];
cartasGeneradas.push(createPokeBigCard(pokemons, espacio_libre));
*/
createPokeBigCard(pokemons, espacio_libre)

//console.log(cartasGeneradas[0],cartasGeneradas[1]);

//var smallStuff=createPokeSmallCard(pokemons, espacio_libre);
//console.log(createPokeSmallCard);
/* only to search
            var attack_poke=pokemons[i].base.Attack;
            var defense_poke=pokemons[i].base.Defense;
            var sp_attack_poke=pokemons[i].base['Sp. Attack'];
            var sp_defense_poke=pokemons[i].base['Sp. Defense'];
            var speed_poke=pokemons[i].base.Speed;*/
})()
