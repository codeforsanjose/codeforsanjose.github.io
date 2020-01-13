$( document ).ready(function() {
  let projects = [
    {
      title: "OSM South Bay Mapping",
      description: "Import building data to Open Street Map, an open source map that anyone can edit. There are many applications, such as emergency disaster response and mapping navigation",
      lead: "Minh Nguyen",
      status: "Active", 
      skills: ["People who want to learn mapping", "data entry", "mappers", "community organizers", "project leaders", "government GIS personnel"],
      techStack: ["OpenStreetMap"],
      githubUrl: "https://github.com/codeforsanjose/OSM-SouthBay",
      slackChannel: "https://codeforsanjose.slack.com/messages/osm/"  
    },
    {
      title: "Open Disclosure San José",
      description: "Build a web application to inform San Jose residents about local campaign finance through data visualization",
      lead: "Helen Skinner",
      status: "Active", 
      skills: ["Data analyst", "Front end developer", "Back end developer", "Communication", "Policy analysis", "Web accessibility", "UI designers", "UX researchers"],
      techStack: ["Python", "JavaScript", "CSS"],
      githubUrl: "https://github.com/codeforsanjose/open-disclosure",
      slackChannel: "https://codeforsanjose.slack.com/messages/open-disclosure/"  
    },
    {
      title: "Heart of the Valley",
      description: "Map of public art and murals in the south bay of Bay Area, California",
      lead: "John Lau",
      status: "Active", 
      skills: ["Mappers", "Front end developer", "Backend developer", "Web accessibility", "UI designers", "UX researchers"],
      techStack: ["JavaScript", "Mapbox GL JS", "Bootstrap", "HTML", "CSS"],
      liveUrl: "https://www.codeforsanjose.com/heartofthevalley/",
      githubUrl: "https://github.com/codeforsanjose/heartofthevalley",
      slackChannel: "https://codeforsanjose.slack.com/messages/heart-of-the-valley/"  
    },
    {
      title: "San Jose Public Library Meal Tally App",
      description: "Web app to help San Jose public libraries coordinate free community meals. The web app is live in production and used by 6+ libraries. Current goal is to refactor the website and improve security.",
      lead: "Joseph Richardson",
      status: "Active", 
      skills: ["DevOps", "Cybersecurity", "Front end developer", "Back end developer", "UI Designer", "UX research", "Communication", "Government/policy staff"],
      techStack: ["MongoDB", "React", "JavaScript", "CSS"],
      githubUrl: "https://github.com/codeforsanjose/SJPL-MealTally/",
      slackChannel: "https://codeforsanjose.slack.com/messages/sj-public-library/"  
    },
    {
      title: "Census 2020",
      description: "Create an informational website for the City of San José to inform San José residents why the Census 2020 matters and encourage residents to participate in the Census.",
      lead: "Anathea Lolen",
      status: "Active", 
      skills: ["Web accessibility", "Language translation", "Web performance", "Front end developer", "UX researcher"],
      techStack: ["OpenStreetMap"],
      liveUrl: "https://census-2020.herokuapp.com/",
      githubUrl: "https://github.com/codeforsanjose/census2020",
      slackChannel: "https://codeforsanjose.slack.com/messages/census2020/"  
    },
    {
      title: "Santa Clara County Probation Department Website",
      description: "Redesign probation department website to help inform youth and families about resources and improve user experience.",
      lead: "Cesar Arellano",
      status: "Active", 
      skills: ["Front end developers", "CMS", "UI designer", "Web accessibility", "UX research", "Government/policy staff", "Content writer/editor", "Marketing"],
      techStack: ["Wix"],
      slackChannel: "https://codeforsanjose.slack.com/messages/scc-probation/"  
    },
    {
      title: "Disaster Response",
      description: "Disaster Response SJ is a React based web application that notifies people of active disaster information for San Jose and includes disaster planning resources, plus an administrative interface for disaster response managers to create/maintain active disaster updates.",
      lead: "Joseph Richardson",
      status: "Active", 
      skills: ["Subject matter experts", "Web Developers", "GIS analysts", "mappers", "data analysts", "UI designers", "UX researchers", "database managers"],
      techStack: ["React Native", "JavaScript"],
      githubUrl: "https://github.com/codeforsanjose/disaster-response-sj",
      slackChannel: "https://codeforsanjose.slack.com/messages/disaster-response-sj/"  
    },
    {
      title: "Code for San Jose website",
      description: "Design and build website, identify bugs, fix issues, and maintain content on website",
      lead: "Dane Olsen",
      status: "Active",
      skills: ["Front end developer", "Marketing", "Designer", "Content writer", "UX Researcher"],
      techStack: ["HTML", "CSS", "jQuery", "JavaScript", "Bootstrap"],
      githubUrl: "https://github.com/codeforsanjose/codeforsanjose.github.io",
      slackChannel: "https://codeforsanjose.slack.com/messages/website/",  
      liveUrl: "https://www.codeforsanjose.com/"  
    },
    {
      title: "Razing the Bar",
      description: "Redesign website for nonprofit Razing the Bar. The project was completed by September 2019.",
      lead: "Sunny Mui",
      status: "Complete",
      skills: ["UX research", "UI design", "CMS", "Wordpress"],
      techStack: ["Wordpress"],
      liveUrl: "https://www.razingthebar.org/", 
    },
    {
      title: "Map of Silicon Valley development projects with Catalyze SV",
      description: "An interactive map highlighting development projects for a local non-profit, Catalyze SV.",
      lead: "Lena Tran",
      status: "Complete",
      skills: ["Front end developer", "UI design", "CMS", "User researcher"],
      techStack: ["Leaflet.js", "Wix", "JavaScript"],
      liveUrl: "https://www.catalyzesv.org/map",
      githubUrl: "https://github.com/codeforsanjose/Map-of-Silicon-Valley-development-projects", 
      slackChannel: "https://codeforsanjose.slack.com/messages/catalyze-sv-map"
    }
  ]

  let project = '';

  for (let i = 0; i < projects.length; i++) {
    const item = projects[i];

    const getSkills = () => {
      let list = [];
      for (let j = 0; j < item.skills.length; j++) {
        list.push(`<span class="badge badge-light">${item.skills[j]}</span>`);
      }
      return list.join(" ");
    }
    
    const getTools = () => {
      let list = [];
      for (let j = 0; j < item.techStack.length; j++) {
        list.push(`<span class="badge badge-light">${item.techStack[j]}</span>`);
      }
      return list.join(" ");
    }

    const getProjectStatus = () => {
      if (item.status === "Active") {
        return `<span class="badge badge-success">${projects[i].status}</span>`
      } else if (item.status === "Complete") {
        return `<span class="badge badge-dark">${projects[i].status}</span>`
      }
    }

    project += `
      <div class="card">
        <div class="card-body">
          ${getProjectStatus(projects)}<h3 class="card-title">${projects[i].title}</h3>
          <p class="card-text">${projects[i].description}</p> 
          ${(projects[i].skills) ? `<p class="card-text">Skills: ${getSkills(projects)}</p>`: ``}
          ${(projects[i].techStack) ? `<p class="card-text">Tech Stack: ${getTools(projects)}</p>`: ``}
          ${(projects[i].githubUrl) ? `<a href="${projects[i].githubUrl}" class="btn btn-sm btn-primary" target="_blank">GitHub</a>`: ``}
          ${(projects[i].liveUrl) ? `<a href="${projects[i].liveUrl}" class="btn btn-sm btn-secondary" target="_blank">Live URL</a>`: ``}
          ${(projects[i].slackChannel) ? `<a href="${projects[i].slackChannel}" class="btn btn-sm btn-info" target="_blank">Slack Channel</a>`: ``}
        </div>
      </div>
    `
  }

  $(".projects #projects").append(project);
});

