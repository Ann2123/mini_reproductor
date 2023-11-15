let track_list = document.querySelector ('#track_list')
console.log (track_list)

axios.get('https://leonardoapi.onrender.com/music')
 .then( (res) => {  // se reciben los datos del servidor


    res.data.map( (song) => {   //se mapean las canciones +

    //creo el componente     
        let div = document.createElement('div')
        div.classList.add('musica')


    //agrego el contenido al componente     
        track_list.innerHTML += `
    
        <div class="alinear">
            <img src="image/Frame (1).svg" alt="">
            <h3>${song.title}</h3>
            <p>${song.duration}</p>
            <img src="image/image 8.svg" alt="">
        </div>
        
        `
        div.addEventListener('click', () => {
            console.log(`el usuario hizo click en ${song.title}`)
        } )

     // agrego el componente al   
    track_list.appendChild(div)

    } )

} )
