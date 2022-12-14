(function () {
  let hash = window.location.hash.substring(1);
  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);

  const projects = [
    {
      name: "Bezier Visualizer",
      description:
        "A site to visualize manipulable, animated Cubic Bezier curves.",
      img: "bezier-visualizer/img/thumb",
      link: "/bezier-visualizer",
      type: "site",
    },
    {
      name: "Radium",
      description:
        'A fresh-looking theme for VSCode. Almost radioactive.</p><p class="small">Made with a friend',
      img: "https://radium-theme.github.io/example",
      link: "https://radium-theme.github.io",
      type: "theme",
    },
    {
      name: "Seaweed",
      description: "Single",
      img: "/music/seaweed/seaweed.thumb",
      link: "/music/seaweed",
      type: "music",
      class: "new",
      tracks: 1,
      date: "2022.10.29",
      time: 4,
    },
    {
      name: "Berries",
      description: "EP",
      img: "/music/berries/berries.thumb",
      type: "music",
      link: "/music/berries",
      tracks: 5,
      date: "2022.08.02",
      time: 17,
    },
    {
      name: "Polyhedra",
      description: "Single",
      img: "/music/polyhedra/polyhedra.thumb",
      type: "music",
      link: "/music/polyhedra",
      tracks: 1,
      date: "2022.07.18",
      time: 3,
    },
    {
      name: "Colours",
      description: "Album",
      img: "/music/colours/colours.thumb",
      link: "https://artists.landr.com/pr",
      type: "music",
      tracks: 6,
      date: "2022.01.24",
      time: 31,
    },
    {
      name: "Social Credit Quiz",
      description:
        "Inspired by the Internet meme, this quiz tests your loyalty to the CCP",
      link: "/social-credit",
      type: "site",
      img: "./social-credit/eye-pop",
    },
    {
      name: "Wiggle Text",
      description:
        "Make a string of text that appears to be in the shape of a wiggle",
      link: "/wiggle",
      type: "site",
      img: "./imgs/wiggle",
    },
    {
      name: "TimeUtils",
      description:
        "Create Discord timestamps and get your IANA timezone",
      link: "/timeutils",
      type: "site",
      img: "./timeutils/thumb",
    },
  ];

  // Warning ??? messy code...
  function loadProjects(projectType) {
    var projectsHTML = "";
    for (const project of projects) {
      let { name, img, type, link, description } = project;
      let imgHTML = getImage(name,img);
      let display = isType(type, projectType) ? "none" : "flex";
      let descriptionHTML =
        type === "music"
          ? `<p>${description}</p><p class="music-sub tracks">${
              project.tracks === 1 ? "Single" : `${project.tracks} tracks`
            }</p><p class="music-sub duration">${
              project.time
            } minutes</p><p class="music-sub date">${project.date}</p>`
          : "<p>" + description + "</p>";

      projectsHTML += `<a class="project project-type-${type} ${
        project.class || ''
      }" style="display: ${display}" href="${
        link ? `${link}" target="_blank` : "#"
      }">${imgHTML}<div><h1 data-type="${type}"> ${name}</h1>${descriptionHTML}</div></a>`;
    }
    return projectsHTML;
  }

  function getImage(name, src) {
    if (src) {
      return `<picture>
  <source srcset="${src}.webp" type="image/webp"/>
  <img alt="${name} image" src="${src}.png">
</picture>`
    } else return ""
  }

  function isType(type, projectType) {
    let indices = ["site", "music", "other"];
    if (projectType === "other" && indices.indexOf(type) === -1) return false;
    return type !== projectType;
  }

  var pType = {
    string: hash ? hash : "site",
    element: hash
      ? $(".select-project-type." + hash)
      : $(".select-project-type.site"),
  };
  if (hash) pType.element.classList.add("active");
  $(".projects").innerHTML += loadProjects(pType.string);
  function sortProjects(type) {
    let projects = $(".projects");
    if (pType.string === type) return;
    let dir = getdir(pType.string, type);
    projects.classList.add("going-" + (dir === "right" ? "left" : "right"));
    pType.string = type;
    var npDummy = document.createElement("div");
    npDummy.innerHTML = loadProjects(pType.string);
    npDummy.classList.add("projects", "coming-" + dir);
    projects.parentElement.insertAdjacentElement("afterbegin", npDummy);
    setTimeout(function () {
      npDummy.classList.remove("coming-" + dir);
    });
    setTimeout(function () {
      projects.remove();
    }, 600);
  }
  function getdir(from, to) {
    let indices = ["site", "music", "other"];
    if (indices.indexOf(from) < indices.indexOf(to)) return "right";
    return "left";
  }
  let projectTypes = $$(".select-project-type");

  let indicator = $(".select-project-type-wrap .indicator");
  for (const select of projectTypes) {
    let rect = {
      parent: select.parentElement.getBoundingClientRect(),
      cur: select.getBoundingClientRect(),
    };
    select.addEventListener("click", function () {
      sortProjects(this.getAttribute("data-type"));
      removeActive(projectTypes);
      pType.element = this;
      this.classList.add("selected");

      uindicator(rect);
    });
    if (hash)
      if (select.getAttribute("data-type").includes(hash)) {
        removeActive(select.parentElement.children);
        uindicator(rect);
        select.classList.add("selected");
        break;
      }
  }
  function uindicator(rect) {
    indicator.style.width = rect.cur.width + "px";
    indicator.style.left = rect.cur.left - rect.parent.left - 5 + "px";
  }
  function removeActive(d) {
    for (const p of d) p.classList.remove("selected");
  }
})();
