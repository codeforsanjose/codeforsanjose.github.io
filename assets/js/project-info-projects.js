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
  workDiv.innerHTML = results.data
    .map((project) => {
      console.log(project);
      return `<div class="project-card">
            <p class="badge ${project.status}">${project.status}</p>
            <img onerror='this.style.display = "none"' class="project-img" src="../${project.photo1}" alt="${project.photo1_alt}" />
            <h4>${project.title}</h4>
            <p>${project.project_summary}</p>
            <div id="project-links">
            <a href="${project.github_url}" target="_blank" rel="noref noopener">
            <img src="../img/social_logos/GitHub-Mark-Light-120px-plus.png" alt="Github" class="project-gh-logo"></a>
            <a href='${project.live_url}' target="_blank" rel="noref noopener"><i class="fas fa-2x fa-external-link-alt"></i></a>
            </div>
            <p class="tech">Tech: ${project.tech}</p>
            <button onclick="openModal('${project.title}')" class="learn-more">Learn More</button>
          </div>`;
    })
    .join("");
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
      <div class="modal-imgs">
        <img onerror='this.style.display = "none"' src='../${project.photo2}' alt="${project.photo2_alt}">
        <img onerror='this.style.display = "none"' src='../${project.photo3}' alt="${project.photo3_alt}">
      </div>
      <div class="modal-info">
        <h2>${project.title}</h2>
        <p>${project.project_description}</p>
        <p>Skills needed: ${project.skills}</p>
        <p>Partner(s): ${project.partner}<p>
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
