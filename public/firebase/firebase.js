import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBu9IAokz1HrCsFPGUn5Qv8vNP1oIGdkYA",
  authDomain: "jobssoftware-422f2.firebaseapp.com",
  projectId: "jobssoftware-422f2",
  storageBucket: "jobssoftware-422f2.appspot.com",
  messagingSenderId: "331500450148",
  appId: "1:331500450148:web:00fa5c0a1ef6570c248a71",
  measurementId: "G-P6DTXG0V47"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log("Firebase y Firestore inicializados");

// Referencia a la colección de "usuarios"
const userCollection = collection(db, "usuarios");

// Función para crear o actualizar un usuario
async function saveUser(e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;

  try {
    // Añadir nuevo usuario
    const docRef = await addDoc(userCollection, {
      nombre: nombre,
      email: email
    });
    console.log("Usuario añadido con ID: ", docRef.id);
    alert("Usuario guardado con éxito");
    document.getElementById('userForm').reset();
  } catch (error) {
    console.error("Error añadiendo usuario: ", error);
  }
}

// Función para leer usuarios
async function readUsers() {
  const userList = document.getElementById('userList');
  userList.innerHTML = ''; // Limpiar la lista antes de mostrar nuevos datos

  try {
    const querySnapshot = await getDocs(userCollection);
    querySnapshot.forEach((doc) => {
      const userData = doc.data();
      const li = document.createElement('li');
      li.textContent = `Nombre: ${userData.nombre}, Email: ${userData.email}`;
      li.dataset.id = doc.id;

      // Botón para eliminar un usuario
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Eliminar';
      deleteButton.onclick = () => deleteUser(doc.id);

      // Botón para actualizar un usuario
      const updateButton = document.createElement('button');
      updateButton.textContent = 'Actualizar';
      updateButton.onclick = () => updateUser(doc.id, userData);

      li.appendChild(deleteButton);
      li.appendChild(updateButton);
      userList.appendChild(li);
    });
  } catch (error) {
    console.error("Error leyendo usuarios: ", error);
  }
}

// Función para eliminar un usuario
async function deleteUser(id) {
  try {
    await deleteDoc(doc(db, "usuarios", id));
    console.log("Usuario eliminado");
    readUsers(); // Actualizar la lista de usuarios
  } catch (error) {
    console.error("Error eliminando usuario: ", error);
  }
}

// Función para actualizar un usuario
function updateUser(id, userData) {
  document.getElementById('nombre').value = userData.nombre;
  document.getElementById('email').value = userData.email;

  const form = document.getElementById('userForm');
  form.onsubmit = async function (e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;

    try {
      const docRef = doc(db, "usuarios", id);
      await updateDoc(docRef, {
        nombre: nombre,
        email: email
      });
      console.log("Usuario actualizado");
      alert("Usuario actualizado con éxito");
      form.reset();
      form.onsubmit = saveUser; // Volver a la función de guardar nuevo usuario
      readUsers(); // Actualizar la lista de usuarios
    } catch (error) {
      console.error("Error actualizando usuario: ", error);
    }
  };
}

// Event Listeners
document.getElementById('userForm').addEventListener('submit', saveUser);
document.getElementById('readUsers').addEventListener('click', readUsers);

// Leer usuarios al cargar la página
readUsers();

