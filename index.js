// template_ywzomfc
// service_e3qqtcf
// 6G_F_yg7CUVy-kc9W

function submitForm(event) {
  event.preventDefault();
  console.log('this worked')

  emailjs
  .sendForm(
    "service_e3qqtcf",
    "template_ywzomfc",
    event.target
  )
  .then(() => {
    success.classList += " visible";
    console.log("submitted");
    window.location.reload();
  })
  .catch(() => {
    alert("Thank you for your submission")
  });
}