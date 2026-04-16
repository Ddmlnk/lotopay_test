const form = document.querySelector(".contacts-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  const searchParams = new URLSearchParams(formData).toString();

  fetch(`https://api.test.com/send?${searchParams}`, {
    method: "GET",
  })
    .then((response) => {
      if (response.ok) {
        alert("Дані успішно відправлено!");
        form.reset();
      } else {
        alert("Помилка сервера");
      }
    })
    .catch((error) => {
      console.error("Помилка:", error);
      alert("Не вдалося з’єднатися з сервером");
    });
});

// ====================================
const overlay = document.getElementById("popupOverlay");
const ticketForm = document.getElementById("ticketForm");
const popupClose = document.getElementById("popupClose");

function openPopup() {
  overlay.classList.remove("is-hidden");
  ticketForm.classList.remove("is-hidden");
  document.body.style.overflow = "hidden";
}

function closePopup() {
  overlay.classList.add("is-hidden");
  document.body.style.overflow = "auto";
}

document.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("ticket-btn") ||
    e.target.classList.contains("hero-button")
  ) {
    console.log("click");
    openPopup();
  }
});

ticketForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(ticketForm);
  const userParams = new URLSearchParams(formData).toString();

  fetch(`https://api.test.com/send?${userParams}`, {
    method: "GET",
  })
    .then((response) => {
      if (response.ok) {
        alert("Дані успішно відправлено!");
        ticketForm.reset();
        closePopup();
      } else {
        alert("Помилка сервера");
      }
    })
    .catch((error) => {
      console.error("Помилка:", error);
      alert("Не вдалося з’єднатися з сервером");
    });
});

popupClose.addEventListener("click", closePopup);

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closePopup();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closePopup();
});
