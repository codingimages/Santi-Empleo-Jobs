function checkConnection() {
  let messageBox = document.querySelector(".connection-status");
  let textOutput = document.querySelector(".text-output");
  let refreshBrowser = document.querySelector(".sync-connection");
  let message;

  if (window.navigator.onLine) {
    refreshBrowser.classList.remove("d-block");
    refreshBrowser.classList.add("d-none");
    message = "Estás conectado al internet, puedes completar la aplicación.";
    textOutput.textContent = message;
    setTimeout(() => {
      messageBox.classList.remove("d-block");
      messageBox.classList.add("d-none");
    }, 4000);
  } else {
    refreshBrowser.classList.remove("d-none");
    refreshBrowser.classList.add("d-block");

    message =
      "La connección ha sido interrumpida, puedes navegar el sitio, pero no puedes enviar la aplicación, intenta conectar nuevamente oprimiendo el botón en la parte superior derecha si quieres enviar la aplicación";
    messageBox.classList.remove("d-none");
    messageBox.classList.remove("bg-success");
    messageBox.classList.add("d-block");
    messageBox.classList.add("bg-danger");
    textOutput.textContent = message;
    setTimeout(() => {
      messageBox.classList.remove("d-block");
      messageBox.classList.add("d-none");
    }, 8000);
  }

  refreshBrowser.addEventListener("click", attemptConnection);

  function attemptConnection() {
    window.location.reload();
  }
}

checkConnection();
