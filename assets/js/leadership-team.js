const leaders = [
  {
    captains: [
      {
        name: "Yan-Yin Choy",
        image: "../img/leadership/captains/yan-yin.png",
        link: "http://linkedin.com/in/yanyinchoy",
      },
      {
        name: "Joey Richardson",
        image: "../img/leadership/captains/joey.png",
        link: "https://www.linkedin.com/in/joseph-richardson-97206953/",
      },
      {
        name: "Annie Steenson",
        image: "../img/leadership/captains/annie.png",
        link: "http://linkedin.com/in/anniesteenson",
      },
    ],
  },
  {
    leader: [
      {
        name: "Cesar Arellano",
        image: "../img/leadership/team/cesar.png",
        link: "https://www.linkedin.com/in/cesaarel",
      },
      {
        name: "Diane Labenz",
        image: "../img/leadership/team/diane.png",
        link: "https://www.linkedin.com/in/dianelabenz/",
      },
      // { name: "Sunny Mui", image: false, link: "#" },
      {
        name: "Minh Nguyễn",
        image: "../img/leadership/team/minh.jpg",
        link: "http://notes.1ec5.org/",
      },
      {
        name: "Dane Olsen",
        image: "../img/leadership/team/dane.png",
        link: "https://www.linkedin.com/in/danekolsen/",
      },
      {
        name: "Lena Tran",
        image: "../img/leadership/team/lena.png",
        link: "https://www.linkedin.com/in/lenatran4/",
      },
      {
        name: "Kate Valdes",
        image: "../img/leadership/team/kate.png",
        link: "https://katevaldes.com/portfolio/",
      },
    ],
  },
  {
    advisory: [
      { name: "Lorin Camargo", image: false, link: "#" },
      { name: "Namrata Challa", image: false, link: "#" },
      { name: "Erika Hudiono", image: false, link: "#" },
      { name: "Darren Pham", image: false, link: "#" },
      { name: "Emily Ramos", image: false, link: "#" },
      { name: "Michelle Thong", image: false, link: "#" },
    ],
  },
  {
    former: [
      { name: "Vivek Bansal", image: false, link: "#" },
      { name: "Kalen Gallagher", image: false, link: "#" },
      { name: "Michelle Thong", image: false, link: "#" },
    ],
  },
];

document.getElementById("captains").innerHTML = leaders[0].captains
  .map((captain) => {
    return `<div class="leader captain">
        <a href=${captain.link} target="_blank" rel="noopener noref">
          <img src=${
            captain.image ? captain.image : "../img/leadership/default.png"
          } alt=${captain.name} />
          <p>${captain.name}</p>
        </a>
      </div>`;
  })
  .join("");

for (var i = 1; i < leaders.length; i++) {
  let label = Object.keys(leaders[i]);
  document.getElementById(`${label}`).innerHTML = leaders[i][`${label}`]
    .map((leader) => {
      return `<div class="leader">
        <a href=${leader.link} target="_blank" rel="noopener noref">
          <img src=${
            leader.image ? leader.image : "../img/leadership/default.png"
          } alt=${leader.name} />
          <p>${leader.name}</p>
        </a>
      </div>`;
    })
    .join("");
}
