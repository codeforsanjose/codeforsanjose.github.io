const leaders = [
  {
    captains: [
      {
        name: "Yan-Yin Choy",
        image: "./assets/img/leadership/captains/yan-yin.png",
        link: "http://linkedin.com/in/yanyinchoy",
      },
      {
        name: "Joey Richardson",
        image: "./assets/img/leadership/captains/joey.png",
        link: "https://www.linkedin.com/in/joseph-richardson-97206953/",
      },
      {
        name: "Annie Steenson",
        image: "./assets/img/leadership/captains/annie.png",
        link: "http://linkedin.com/in/anniesteenson",
      },
    ],
  },
  {
    leader: [
      {
        name: "Cesar Arellano",
        image: "./assets/img/leadership/team/cesar.png",
        link: "https://www.linkedin.com/in/cesaarel",
      },
      {
        name: "Diane Labenz",
        image: "./assets/img/leadership/team/diane.png",
        link: "https://www.linkedin.com/in/dianelabenz/",
      },
      {
        name: "Minh Nguyễn",
        image: "./assets/img/leadership/team/minh.jpg",
        link: "http://notes.1ec5.org/",
      },
      {
        name: "Dane Olsen",
        image: "./assets/img/leadership/team/dane.png",
        link: "https://www.linkedin.com/in/danekolsen/",
      },
      {
        name: "Lena Tran",
        image: "./assets/img/leadership/team/lena.png",
        link: "https://www.linkedin.com/in/lenatran4/",
      },
      {
        name: "Kate Valdes",
        image: "./assets/img/leadership/team/kate.png",
        link: "https://katevaldes.com/portfolio/",
      },
    ],
  },
  {
    advisory: [
      {
        name: "Lorin Camargo",
        image: "./assets/img/leadership/advisory/lorin.jpg",
        link: "https://www.linkedin.com/in/lorincamargo/",
      },
      {
        name: "Namrata Challa",
        image: "./assets/img/leadership/advisory/namrata.jpg",
        link: "https://www.linkedin.com/in/namratachalla/",
      },
      {
        name: "Erika Hudiono",
        image: "./assets/img/leadership/advisory/erika.jpg",
        link: "https://www.linkedin.com/in/erika-hudiono/",
      },
      {
        name: "Sunny Mui",
        image: "./assets/img/leadership/advisory/sunny.jpg",
        link: "https://www.linkedin.com/in/sunnymui/",
      },
      {
        name: "Darren Pham",
        image: "./assets/img/leadership/advisory/darren.jpg",
        link: "https://www.linkedin.com/in/darep-h20/",
      },
      {
        name: "Emily Ramos",
        image: "./assets/img/leadership/advisory/emily.jpg",
        link: "https://www.linkedin.com/in/emilyannramos/",
      },
      {
        name: "Michelle Thong",
        image: "./assets/img/leadership/advisory/michelle.jpg",
        link: "https://www.linkedin.com/in/mthong/",
      },
    ],
  },
  {
    former: [
      {
        name: "Vivek Bansal",
        image: "./assets/img/leadership/former_captains/vivek.jpg",
        link: "https://www.linkedin.com/in/3vivekb/",
      },
      {
        name: "Kalen Gallagher",
        image: "./assets/img/leadership/former_captains/kalen.jpg",
        link: "https://www.linkedin.com/in/kalengallagher/",
      },
      {
        name: "Michelle Thong",
        image: "./assets/img/leadership/advisory/michelle.jpg",
        link: "https://www.linkedin.com/in/mthong/",
      },
    ],
  },
];

document.getElementById("captains").innerHTML = leaders[0].captains
  .map((captain) => {
    return `<div class="leader captain">
        <a href=${captain.link} target="_blank" rel="noopener noref">
          <img src=${
            captain.image
              ? captain.image
              : "./assets/img/leadership/default.png"
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
            leader.image ? leader.image : "./assets/img/leadership/default.png"
          } alt=${leader.name} />
          <p>${leader.name}</p>
        </a>
      </div>`;
    })
    .join("");
}
