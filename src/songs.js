import { signUp, logout, login, onAuthStateChange, fetchUserData } from "./auth";
import { db } from "./config";


async function getSongs(){
    try{
        const songCollections = collection(db, "Songs")
        const snapshot = await getDocs(songCollections)
        const songs = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}))

        console.log(songs)

    }catch(error){
        console.error("Error getting songs", error)
    }
}

async function addSong() {
    const Title = document.getElementById("Title").value.trim();
    const Artist = document.getElementById("Artist").value.trim();
    const Year = document.getElementById("Year").value.trim();
    const Rating = parseInt(document.getElementById("Rating").value);

    try {
        await addDoc(collection(db, "Songs"),{ Title, Artist, Year, Rating });
        alert("Song added!");
    } catch (error) {
        console.log("Error adding song:", error);
    }
};
document.getElementById("song").addEventListener("submit", async function(event) {
    event.preventDefault();
    await addSong();
});

async function deleteSong() {
    const songId = document.getElementById("songId").value.trim();

    try {
        const songDocRef = doc(db, "Songs", songId);
        await deleteDoc(songDocRef);
        alert("Song Deleted!");
    } catch (error) {
        console.log("Error Deleting song:", error);
    }
};
document.getElementById("deleteSong").addEventListener("submit", async function(event) {
    event.preventDefault();
    await deleteSong();
});


async function updateSong() {
    //const Title = document.getElementById("updateTitle").value.trim();
    const songID = document.getElementById("updateId").value.trim();
    const updateRating = parseInt(document.getElementById("updateRating").value);

    try {
        const songDocRef = doc(db, "Songs", songID);
        await updateDoc(songDocRef, {Rating: updateRating});
        alert("Song Updated!");
    } catch (error) {
        console.log("Error Updating song:", error);
    }
};
document.getElementById("updateSong").addEventListener("submit", async function(event) {
    event.preventDefault();
    await updateSong();
});

getSongs()
