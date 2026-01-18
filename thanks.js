const params = new URLSearchParams(window.location.search);
const name = params.get("fullname");

document.getElementById("msg").innerText =
  "Thanks " + ( name || "friend") + "!";