      var link = document.querySelector(".contact-link");
      
      var popup = document.querySelector(".modal");
      var close = popup.querySelector(".modal-close");
      
      var form = popup.querySelector("form");
      var name = popup.querySelector("[name=name]");
      var email = popup.querySelector("[name=email]");
      var comment = popup.querySelector("[name=comment]")
      
      link.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.add("modal-show");
      });
      
      close.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      });
      
      form.addEventListener("submit", function (evt) {
        evt.preventDefault();
      });
      
      form.addEventListener("submit", function (evt) {
        if (!name.value || !email.value || !comment.value) {
        evt.preventDefault();
        popup.classList.add("modal-error"); 
        console.log("Нужно заполнить все поля формы");
        }
      }); 
      window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
          popup.classList.remove("modal-show");
          popup.classList.remove("modal-error");
        }
      }
    });