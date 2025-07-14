export function RegisterAdmin() {
  document.getElementById('main').innerHTML = `
    <h2 class="text-2xl font-bold mb-4">Registro de Administrador</h2>
    <form id="admin-register-form" class="space-y-4">
      <div>
        <label class="block font-medium" for="email">Email</label>
        <input type="email" id="admin-email" class="form-control" required>
      </div>
      <div>
        <label class="block font-medium" for="password">Contraseña</label>
        <input type="password" id="admin-password" class="form-control" required>
      </div>
      <button type="submit" class="btn btn-primary">Registrar Admin</button>
    </form>
  `;

  document.getElementById("admin-register-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("admin-email").value.trim();
    const password = document.getElementById("admin-password").value;

    const newAdmin = {
      email,
      password,
      role: "admin"
    };

    try {
      const res = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newAdmin)
      });

      if (!res.ok) throw new Error("No se pudo registrar el admin");

      alert("Administrador registrado correctamente");
    } catch (err) {
      console.error(err);
      alert("Hubo un error al registrar el administrador");
    }
  });
}
