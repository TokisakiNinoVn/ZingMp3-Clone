// Get the favorite song list element from the HTML
// const favoriteSongList = document.getElementById("favorite-song-list");

// // Add a click event listener to all the heart icons
// const heartIcons = document.querySelectorAll(".heart-icon");
// heartIcons.forEach((heartIcon) => {
//     heartIcon.addEventListener("click", () => {
//         // Get the song information from the clicked heart icon
//         const songTitle = heartIcon.dataset.title;
//         const songArtist = heartIcon.dataset.artist;
//         const songUrl = heartIcon.dataset.url;

//         // Create a new list item element for the favorite song list
//         const newSongItem = document.createElement("li");
//         newSongItem.innerHTML = `
//             <a href="${songUrl}">
//                 <h3>${songTitle}</h3>
//                 <p>${songArtist}</p>
//             </a>
//         `;

//         // Add the new song item to the favorite song list
//         favoriteSongList.appendChild(newSongItem);
//     });
// });

const favoriteSongMenu = document.querySelector(".favorite_song_menu");
const closeFavoriteSongMenuIcon = document.querySelector(".close_menu_favorite_song");

const openFavoriteSongMenu = document.querySelector(".open_menu_favorite_list_song").addEventListener("click", () => {
    favoriteSongMenu.style.display = "flex";
})

closeFavoriteSongMenuIcon.addEventListener("click", () => {
    favoriteSongMenu.style.display = "none";
})
