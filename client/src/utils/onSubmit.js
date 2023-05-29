import { createMarker } from "../api";

function onSubmit(event) {
  const title = inputName.value;
  const description = inputDescription.value;
  const latitude = inputLatitude.value;
  const longitude = inputLongitude.value;

  createMarker(title, description, latitude, longitude);

  window.location.reload();
  event.preventDefault();
}

const form = document.getElementById("form");
const inputName = document.getElementById("name");
const inputDescription = document.getElementById("description");
const inputLatitude = document.getElementById("latitude");
const inputLongitude = document.getElementById("longitude");

form.addEventListener("submit", onSubmit);
