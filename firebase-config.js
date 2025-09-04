// Import Firebase modules (using the modular SDK)
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";



// Your Firebase config (replace with your actual config)
const firebaseConfig = {
  apiKey: "AIzaSyDovPlaRawdKoUZ1JrlfRRpidD1gUFLFlk",
  authDomain: "ficio-demo.firebaseapp.com",
  projectId: "ficio-demo",
  storageBucket: "ficio-demo.firebasestorage.app",
  messagingSenderId: "1072650545510",
  appId: "1:1072650545510:web:f994ecc5b84345315400a7",
  measurementId: "G-3RM43M6L4V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to upload data
window.uploadData = async function() {
    try {
        // Sample data to upload
        const data = {
            message: "Button was clicked!",
            timestamp: serverTimestamp(),
            userAgent: navigator.userAgent,
            url: window.location.href
        };

        // Add document to Firestore
        const docRef = await addDoc(collection(db, "button-clicks"), data);
        console.log("Document written with ID: ", docRef.id);
        alert("Data uploaded successfully!");
        
    } catch (error) {
        console.error("Error adding document: ", error);
        alert("Upload failed: " + error.message);
    }
}rt("Upload failed: " + error.message);
    }
}
