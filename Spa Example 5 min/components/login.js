export function Login() {
  document.getElementById('main').innerHTML = `
    <h2 class="text-2xl font-bold mb-4">Iniciar Sesión</h2>
    <form id="login-form" class="space-y-4">
      <div>
        <label class="block font-medium" for="email">Email</label>
        <input type="email" id="login-email" class="form-control" required>
      </div>
      <div>
        <label class="block font-medium" for="password">Contraseña</label>
        <input type="password" id="login-password" class="form-control" required>
      </div>
      <button type="submit" class="btn btn-primary">Ingresar</button>
    </form>
  `;

  document.getElementById("login-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value;

    try {
      const res = await fetch(`http://localhost:3000/users?email=${email}&password=${password}`);
      const data = await res.json();

      if (data.length === 0) {
        alert("Credenciales incorrectas");
        return;
      }

      const user = data[0];
      sessionStorage.setItem("authUser", JSON.stringify(user));

      if (user.role === "admin") {
        alert("Bienvenido, Admin");
        navigateTo("/admin"); // ruta SPA al panel admin
      } else {
        alert("Bienvenido");
        navigateTo("/home"); // ruta SPA al home de usuario
      }
    } catch (err) {
      console.error(err);
      alert("Error en el inicio de sesión");
    }
  });
}
