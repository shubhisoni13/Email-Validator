let result = {
  tag: "",
  free: false,
  role: false,
  user: "akshaykumar",
  email: "akshaykumar@shubhisoni.com",
  score: 0.64,
  state: "undeliverable",
  domain: "shubhisoni.com",
  reason: "invalid_mx",
  mx_found: false,
  catch_all: null,
  disposable: false,
  smtp_check: false,
  did_you_mean: "",
  format_valid: true,
};

submitBtn.addEventListener("click", async (e) => {
  e.preventDefault()
  console.log("Clicked!")
  key = "ema_live_GS5IYgzOwSAeUK4XnZLEnZ0S5yN7zzlyb5FOAS1s"
  let email = document.getElementById("username").value
  let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
  let res = await fetch(url)
  let result = await res.json()
  let str = ``
  for (key of Object.keys(result)) {
    str = str + `<div>${key}: ${result[key]}</div>`
  }
  console.log(str)
  resultContainer.innerHTML = str
});
