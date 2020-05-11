const xhr = new XMLHttpRequest();
//require_once("pdo.php");
 //db = JSON.parse(json);
//son = json_encode(db);
//jsonP= JSON.parse();
//console.log(db);
xhr.open('GET', 'consulta.json', true);

xhr.onload = function(){
    if(this.status === 200){
        const poke = JSON.parse(this.responseText);
        const np = poke.pokemons.length;
        console.log(poke);
        let sprites = '';
        for (var i=0; i<np;i++){
            sprites += `
            <h2> ${poke.pokemons[i].cp}
            <a href="" id="pokemon-select">
                            <div class="contenedor overflow-hidden border text-center content-image img-contenedor" id"pokemon-image">
                            <h1>CP ${poke.pokemons[i].cp}</h1>
                            <img src="${poke.pokemons[i].sprite}" alt="" class="img img-gen"></img>
                            <h2>${poke.pokemons[i].name}</h2>
                            <div class="color m-2 "></div>
                            </div> </a>`;
         }
         document.getElementById('tasks').innerHTML = sprites;
    }
}
//
//enviar el request
xhr.send();

/*
function loadAll(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'pokedex.json', true);

    xhr.onload = function(){
        if(this.status === 200){
            const poke = JSON.parse(this.responseText);
            const np = poke.pokemons.length;

            let sprites = '';
            for (var i=0; i<np;i++){
                sprites += `
                <a href="" id="pokemon-select">
                            <div class="contenedor overflow-hidden border text-center content-image img-contenedor" id"pokemon-image">
                            <h1>CP ${poke.pokemons[i].cp}</h1>
                            <img src="${poke.pokemons[i].sprite}" alt="" class="img img-gen "></img>
                            <h2>${poke.pokemons[i].name}</h2>
                            <div class="color m-2 "></div>
                            </div> </a>`;
             }
             document.getElementById('container-all').innerHTML = sprites;
        }
    }
//
    //enviar el request
    xhr.send();
}




document.querySelector('#form').addEventListener('click', typeSelection);
function typeSelection(){
    const type = document.getElementById('type');
    const typeSelected = type.options[type.selectedIndex].value;
    console.log(typeSelected);
    

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'pokedex.json', true);
    
    xhr.onload = function(){
        if(this.status === 200){
            const poke = JSON.parse(this.responseText);
            const np = poke.pokemons.length;
            const nt = poke.types.length;
            let sprites = '';
           for(var i=0; i<np;i++) {
             for(var j=0;j<nt;j++){
                if(poke.pokemons[i].type.length === 2 || poke.pokemons[i].type.length === 1){
                    if((poke.pokemons[i].type[0] === poke.types[j].id) || (poke.pokemons[i].type[1] === poke.types[j].id)){
                        if(poke.types[j].name === typeSelected){
                            //console.log("si");
                            sprites += `
                            <a href="" id="pokemon-select">
                            <div class="contenedor overflow-hidden border text-center content-image "img-contenedor id"pokemon-image">
                            <h1>CP ${poke.pokemons[i].cp}</h1>
                            <img src="${poke.pokemons[i].sprite}" alt="" class="img img-gen"></img>
                            <h2>${poke.pokemons[i].name}</h2>
                            <div class="color m-2 "></div>
                            </div> </a>`;
                        }else if(typeSelected === 'TODOS'){
                           loadAll();
                        }
                        
                    }
                }
             }
            }
             document.getElementById('container-all').innerHTML = sprites;
        }
    }
    xhr.send();
}

document.querySelector('#container-all').addEventListener('click', pokeSelection);

function pokeSelection(e){
    e.preventDefault();
    if(e.target.classList.contains('img-gen')){
        const im = e.target.parentElement;
        //console.log(im);
        leerDatosPoke(im);
    }
    
}


function leerDatosPoke(im){
    const infoPoke = {
        imagen: im.querySelector('img').src,
        cp: im.querySelector('h1').textContent,
        nombre: im.querySelector('h2').textContent
    }

    insertarSingle(infoPoke);
}

const singleItem = document.querySelector('#container-single');
function insertarSingle(im){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'pokedex.json', true);



     const div = document.createElement('div');
     div.innerHTML = `
     <div class="contenedor overflow-hidden text-center content-image m-5 " id"pokemon-image">
     <h1>${im.cp}</h1>
     <img src="${im.imagen}" alt="" class="img img-gen"></img>
     <h2>${im.nombre}</h2>
     <div class="color m-2 h-sected pc"></div>
     </div>`;
     singleItem.appendChild(div);

     
     
}

*/