
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
            <p>3:18</p>
        
            `
            tracklist.appendChild(div)
        })
    })