// template_ywzomfc
// service_e3qqtcf
// 6G_F_yg7CUVy-kc9W

function submitForm(event) {
  console.log('this worked')

  emailjs
  .sendForm(
    "service_e3qqtcf",
    "template_ywzomfc",
    event.target
  )
  .then(() => {
    success.classList += " visible";
    console.log("submitted")
  })
  .catch(() => {
    alert("The email service is temporarily unavailable.")
  });
}