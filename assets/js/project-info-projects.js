function openModal(card) {
  document.addEventListener("keydown", accessibleModalClose);
  const pagePos = window.scrollY;
  document.body.style.position = "fixed";
  document.body.style.top = `-${pagePos}px`;
  let projectModal = document.createElement("div");
  projectModal.setAttribute("class", "projectModalStyle");
  projectModal.setAttribute("id", "openModal");
  projectModal.innerHTML = `
      <i onclick="closeModal()" class="fas fa-2x fa-times"></i>
      <div class="modal-imgs">
        <img onerror='this.style.display = "none"' src='../assets${card.dataset.photo2}' alt="${card.dataset.photo2Alt}">
        <img onerror='this.style.display = "none"' src='../assets${card.dataset.photo3}' alt="${card.dataset.photo3Alt}">
      </div>
      <div class="modal-info">
        <h2>${card.dataset.title}</h2>
        <p>${card.dataset.description}</p>
        <p>Skills needed: ${card.dataset.skills}</p>
        <p>Partner(s): ${card.dataset.partner}<p>
      </div>
    `;
  document.getElementById("modal-attach").appendChild(projectModal);
}

function accessibleModalClose(e) {
  if (e.keyCode == 27) {
    closeModal();
  }
}

function closeModal() {
  document.removeEventListener("keydown", accessibleModalClose);
  const scrollY = document.body.style.top;
  document.body.style.position = "";
  document.body.style.top = "";
  window.scrollTo(0, parseInt(scrollY || "0") * -1);
  modal = document.getElementById("openModal");
  document.getElementById("modal-attach").removeChild(modal);
}
