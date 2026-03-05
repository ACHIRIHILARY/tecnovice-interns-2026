const form = document.getElementById("registerForm");
const output = document.getElementById("output");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const fullName = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const gender = document.querySelector('input[name="gender"]:checked')?.value;

  output.innerHTML = `
      <h3>Submitted Information:</h3>
      <p><strong>Full Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Gender:</strong> ${gender}</p>
      <p><strong>Password:</strong> ${password}</p>
    `;
});
