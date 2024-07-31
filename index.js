 // Acceder al formulario
 
 const form = document.getElementById('contact-form');
 const errorMessage = document.getElementById('error-message');

 form.addEventListener('submit', (event) => {
     event.preventDefault(); // Evita el envío por defecto del formulario

     // Obtén los valores del formulario
     const name = document.getElementById('name').value;
     const email = document.getElementById('email').value;
     const message = document.getElementById('message').value;

     // Realiza las validaciones necesarias
     if (!name || !email || !message) {
         errorMessage.textContent = "Por favor, complete todos los campos.";
         return;
     }

     // Valida el correo electrónico
     if (!validateEmail(email)) {
         errorMessage.textContent = "Por favor, ingrese una dirección de correo electrónico válida.";
         return;
     }

     // Envía los datos del formulario al servidor (usando AJAX o Fetch API)
     // ... (código para enviar los datos al servidor)

     // Si el envío es exitoso, muestra un mensaje de éxito
     errorMessage.textContent = "Mensaje enviado correctamente!";

     // Limpia el formulario
     form.reset();
 });

 function validateEmail(email) {
     // Regular expression para validar el correo electrónico
     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     return re.test(String(email).toLowerCase());
 }