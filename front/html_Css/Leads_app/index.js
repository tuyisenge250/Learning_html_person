import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js"
import { getDatabase,ref } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js"

const firebaseConfig = {
    databaseURL:"https://leads-track-app-b3ef6-default-rtdb.firebaseio.com/"
}
const app = initializeApp(firebaseConfig)
const database = getDatabase(app)