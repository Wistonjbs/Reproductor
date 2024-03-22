
// const handlerclick = () =>{
//     const cadena= "esto es una cadena de texto";
//     console.log(cadena)
// }

// const button = document.getElementById("handler-button")

// if (button !== null){
//     button.addEventListener("click", handlerclick)
// }


const tracklist = document.getElementById("track-list")


axios.get("https://leonardoapi.onrender.com/songs")
    .then((res) => {

        res.data.songs.map((song) => {

            const div = document.createElement("div")
            div.classList.add("cover-info")

            div.innerHTML = `
            <img class="covers" src="${song.path.front}" alt="">
            
            <div class="info-songs"> 
                <h2>${song.title}</h2>
                <p>${song.author}</p>
            </div>
            <p>${song.duration}</p>
            <div class="donwload">
                <p>donwload </p>
                <img src="/assets/img/icon_donwload.png" alt="">
            </div>
        
            `


            div.addEventListener('click', ()=> {

                document.getElementById("current-song-img").setAttribute('src', song.path.front)
                document.getElementById("audio").setAttribute('src', song.path.audio)
                
                document.getElementById("song-title").innerHTML = song.title
                document.getElementById("song-author").innerHTML = song.author
            })


            tracklist.appendChild(div)
        })
    })