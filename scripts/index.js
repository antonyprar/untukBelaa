// login page scripts
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  validateForm();
});

function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  //validasi username dan password, username dan password bisa diganti sesuai keinginan
  if (username === "09-05-2004" && password === "05-02-2024") {
    Swal.fire({
      icon: "success",
      title: "Login berhasil!",
      text: "Selamat datang ayanggg",
      showConfirmButton: false,
      timer: 1500,
    }).then(function () {
      window.location.href = "birthday.html";
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Login gagal!",
      text: "Coba cek lagi username sama passwordnya ya:)",
      confirmButtonText: "Coba lagi",
      confirmButtonColor: "#ff7675",
    });
  }
}