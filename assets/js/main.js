
// $(document).ready(function() {
//    $('.modal').modal();
 

//   function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
//   }

//   for (let i = 0; i < 1; i++) {
//     let num = getRandomInt(0, 100);
//     fetch(`https://pokeapi.co/api/v2/pokemon/${num}/`)
//       .then(function(response) {
//         // Turns the the JSON into a JS object
//         return response.json();
//       })
//       .then(function(data) {

//   console.log(data);


//         let img = `https://pokeapi.co/media/img/${data.id}.png`;
     
//         // Let's make some HTML!
//         $('#myGif').append(
//           ` <a class="  modal-trigger" href="#modal${data.id}">
//            <div class="col s2">
//           <img src="${img}" alt="" class="circle responsive-img" >
//           <h5 class="black-text light">${data.name}</h5>
//           <span class="black-text">Tipo: ${data.types[0].type.name}</span>
//            </div>
//           </a>
//           <div id="modal${data.id}" class="modal bottom-sheet">
//           <div class="modal-content">
//           <img src="${img}" alt="" class="circle responsive-img" >
//           <h5 class="black-text light">${data.name}</h5>
//           <span class="black-text">Tipo: ${data.types[0].type.name}</span>
//           </div>
//           <div class="modal-footer">
//             <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
//           </div>
//         </div> ` 
//         );
//         $('.modal').modal();
//       });
//   };


//   const search = document.getElementById('search_btn');
//   search.addEventListener('click', function() {

//     const gif = document.getElementById('textarea1').value;
//     const myGif = document.getElementById('myGif');
//     fetch(`https://pokeapi.co/api/v2/pokemon/${gif}/`)
//       .then(function(response) {
//         // Turns the the JSON into a JS object
//         return response.json();
//       })
//       .then(function(data) {
//         console.log(data); 
//         // Let's make some HTML!
//         let html = ` 

//                   <div class="col s10">
//                   <div class="card-panel grey lighten-5 ">
//                   <div class="row valign-wrapper">
//                   <div class="col s2">
//                   <img src="${data.sprites.front_shiny}" alt="" class="circle responsive-img"> <!-- notice the "circle" class -->
//                   </div>
//                   <div class="col s10 left-align">
//                   <span class="black-text">
//                   <h5 class="black-text light">${data.name} </h5>
//                   <span class="black-text">Tipo: ${data.types[0].type.name} </span>
//                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum dicta veniam provident velit fugit eum sapiente</p>
//                   This is a square image. Add the "circle" class to it to make it appear circular.
//                   </span>
//                   </div>
//                   </div>
//                   </div>
//                   </div>
//                   <hr>
//                `;
//         myPoke.innerHTML = html;
//       });
//   });
// });
// también tendrás que configurar los dominios de referencia en tu portal de desarrolladores de marvel
var  PRIV_KEY  = 'eeb22c1a2062b4ba6e020ae5a512de23017be44b';
var  PUBLIC_KEY  =  '5ccfadab4f0507c2b03bd35b12b68813' ;



  // you need a new ts every request                                                                                    
  var ts = new Date().getTime();
  console.log(ts);
  var hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();
  console.log(hash)
  
  // the api deals a lot in ids rather than just the strings you want to use
  var characterId = '1009718'; // wolverine                                                                             


 const url = `http://gateway.marvel.com:80/v1/public/characters/comics/?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`;

  fetch(`https://gateway.marvel.com/v1/public/?apikey=${PUBLIC_KEY}&hash=${hash}&ts=${ts}`)  
  .then( ( response ) => { return response.json() } )
  .then( (data) => { console.log( data ) } );



//   console.log(url);
//   $.getJSON(url, {
//     ts: ts,
//     apikey: PUBLIC_KEY,
//     hash: hash,
//     characters: characterId
//     })
//     .done(function(data) {
//       // sort of a long dump you will need to sort through
//       console.log(data);
//     })
//     .fail(function(err) {
//       // the error codes are listed on the dev site
//       console.log(err);
//     });
// };

// getMarvelResponse();