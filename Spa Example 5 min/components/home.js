
export function Home() {
  document.getElementById('main').innerHTML = `
    <form id="register-form">
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input type="email" class="form-control" id="email" required>
        <div id="emailHelp" class="form-text">We'll never share your email.</div>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" required>
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="terms">
        <label class="form-check-label" for="terms">Accept terms</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  `;

  // Agrega el evento una vez que el formulario ya existe en el DOM
  const form = document.getElementById("register-form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // Evita recargar la página

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    const data = {
      email,
      password
    };

    try {
      const response = await fetch("http://localhost:3004/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (!response.ok) throw new Error("Error al registrar");

      alert("Usuario registrado con éxito");
      form.reset(); // limpia el formulario
    } catch (error) {
      console.error("Error al enviar los datos:", error);
      alert("Error al enviar el formulario.");
    }
  });
}
