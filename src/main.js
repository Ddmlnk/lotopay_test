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
const closeSuccess = document.getElementById("closeSuccess");

// Функція відкриття
function openPopup() {
  overlay.classList.remove("is-hidden");
  ticketForm.classList.remove("is-hidden"); // Показуємо форму
  document.body.style.overflow = "hidden";
}

// Функція закриття
function closePopup() {
  overlay.classList.add("is-hidden");
  document.body.style.overflow = "auto";
}

// 1. Відкриття по кліку на кнопки (делегація подій)
document.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("ticket-btn") ||
    e.target.classList.contains("hero-button")
  ) {
    console.log("click");
    openPopup();
  }
});

// 2. Обробка відправки форми (GET-запит)
ticketForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Збираємо дані для GET запиту
  const formData = new FormData(ticketForm);
  const userParams = new URLSearchParams(formData).toString();

  fetch(`https://api.test.com/send?${userParams}`, {
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

  ticketForm.reset();
});

// 3. Усі варіанти закриття
popupClose.addEventListener("click", closePopup);

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closePopup();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closePopup();
});
