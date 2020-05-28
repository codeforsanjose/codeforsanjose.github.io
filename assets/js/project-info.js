var public_spreadsheet_url =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR3vCQ3cY0xP5oEIc6-B3N23q8hhbKEzDyfvRH_neOMZA3hBS_zU2RkjRCTYrpTjcliINqUuY_G0dsE/pub?gid=684908702&single=true&output=csv";

let projects = [];

function init() {
  Papa.parse(public_spreadsheet_url, {
    download: true,
    header: true,
    complete: showInfo,
  });
}

window.addEventListener("DOMContentLoaded", init);

function showInfo(results) {
  projects = results.data;
  let workDiv = document.getElementById("modal-attach");
  workDiv.innerHTML = results.data.map((project) => {
    console.log(project);
    return `<div class="project-card">
            <p class="badge ${project.status}">${project.status}</p>
            <img class="project-img" src="../assets${project.photo1}" alt="">
            <h4>${project.title}</h4>
            <p>${project.project_summary}</p>
            <a href="${project.github_url}" target="_blank" rel="noref noopener">
            <img src="./assets/img/social_logos/GitHub-Mark-Light-120px-plus.png" alt="Github" class="project-gh-logo"></a>
            <a href='${project.live_url}' target="_blank" rel="noref noopener"><i class="fas fa-external-link-alt"></i></a>
            <p class="tech">Tech: ${project.tech}</p>
            <button onclick="openModal('${project.title}')" class="learn-more">Learn More</button>
          </div>`;
  });
}

function openModal(title) {
  document.addEventListener("keydown", accessibleModalClose);
  const pagePos = window.scrollY;
  document.body.style.position = "fixed";
  document.body.style.top = `-${pagePos}px`;
  var modalProject = projects.filter((item) => item.title.includes(title));
  let project = modalProject[0];
  console.log(project);
  let projectModal = document.createElement("div");
  projectModal.setAttribute("class", "projectModalStyle");
  projectModal.setAttribute("id", "openModal");
  projectModal.innerHTML = `
      <i onclick="closeModal()" class="fas fa-2x fa-times"></i>
      <h2>${project.title}</h2>
      <img src='../assets${project.photo2}'>
      <img src='../assets${project.photo3}'>
      <p>${project.project_description}</p>
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
