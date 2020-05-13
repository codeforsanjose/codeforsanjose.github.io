function openModal(id) {
  console.log(id);
  let projectModal = document.createElement("div");
  projectModal.setAttribute("class", "projectModalStyle");
  projectModal.setAttribute("id", "openModal");
  projectModal.innerHTML = `
    <button onclick="closeModal()">X</button>
    <h1>Project Title: ${id}</h1>
  `;
  document.getElementById("modal-attach").appendChild(projectModal);
}

function closeModal() {
  modal = document.getElementById("openModal");
  document.getElementById("modal-attach").removeChild(modal);
}
