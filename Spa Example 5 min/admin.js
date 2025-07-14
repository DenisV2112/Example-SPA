 /*   import { Contact } from "./components/contact.js";
    import {Home} from "./components/home.js"

    let routes ={
        "Home": Home,
        "Contact": Contact
    }
    

document.querySelectorAll("nav a").forEach(button => {
    
    const url = button.dataset.view;
    button.addEventListener("click", function(event) {
        event.preventDefault()
         routes[url]()
        
})
});*/

import { Contact } from "./components/contact.js";
import { Home } from "./components/home.js";
import { Login } from "./components/login.js";
import { RegisterAdmin } from "./components/register.js";

// Define tus rutas como un diccionario
const routes = {
  "Home": Home,
  "Contact": Contact,
  "Login": Login,
  "RegisterAdmin": RegisterAdmin
};

// Función central para navegar
export function navigateTo(viewName) {
  const viewFunction = routes[viewName];

  if (!viewFunction) {
    console.error(`La vista "${viewName}" no existe.`);
    return;
  }

  // Si es ruta protegida de admin
  if (viewName === "Admin") {
    const user = JSON.parse(sessionStorage.getItem("authUser"));
    if (!user || user.role !== "admin") {
      alert("Acceso denegado: Solo administradores");
      return routes["Login"]();
    }
  }

  // Renderiza la vista
  viewFunction();
  history.pushState({}, "", `/${viewName.toLowerCase()}`);
}

// Escucha clics en enlaces SPA
document.querySelectorAll("nav a[data-view]").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const view = link.dataset.view;
    navigateTo(view);
  });
});

// Escucha los botones fuera de <nav> también (opcional)
document.body.addEventListener("click", (e) => {
  const view = e.target.closest("[data-view]")?.dataset.view;
  if (view && routes[view]) {
    e.preventDefault();
    navigateTo(view);
  }
});

// Manejo del botón atrás/adelante del navegador
window.addEventListener("popstate", () => {
  const path = location.pathname.slice(1); // quita la barra
  const viewKey = Object.keys(routes).find(key => key.toLowerCase() === path);
  if (viewKey) {
    routes[viewKey]();
  } else {
    routes["Home"](); // fallback
  }
});


