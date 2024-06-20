let toggleBtn = document.querySelector("#toggleBtn");

      let bodyEl = document.querySelector("body");

      let darkMode = false;

      toggleBtn.addEventListener('change', (event) => {
        darkMode = event.target.checked;
        if(darkMode) {
          bodyEl.classList.add("dark");
        } else {
          bodyEl.classList.remove("dark");
        }
      })