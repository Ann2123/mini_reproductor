let track_list = document.querySelector ('#track_list')
console.log (track_list)

axios.get('https://leonardoapi.onrender.com/music')
 .then( (res) => {  // se reciben los datos del servidor


    res.data.map( (song) => {   //se mapean las canciones +

    //creo el componente     
        let div = document.createElement('div')
        div.classList.add('alinear') //cñase para estilos

     div.addEventListener ('click', () => {

        console.log ('Hizo click')

        document.querySelector('#current_song_title').
        innerHTML =song.title


        document.querySelector('#current_song_author').
        innerHTML =song.author

        document.querySelector('#current_song_img').setAttribute('src', song.path.front)

        document.querySelector('#imagen_principal').setAttribute('src', song.path.front)

        document.querySelector('#current_song_audio').setAttribute('src', song.path.audio)

    })


    //agrego el contenido al componente     
        div.innerHTML += `
    
            <img src="image/Frame (1).svg" alt="">
            <h3>${song.title}</h3>
            <p>${song.duration}</p>
            <img src="image/image 8.svg" alt="">
        
        
        `
        

     // agrego el componente al   
    track_list.appendChild(div)

    } )

} )
