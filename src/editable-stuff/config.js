const navBar = {
  show: true,
};

const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Eric",
  middleName: "",
  lastName: "Johnson",
  message: "",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/EricHayesJohnson",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/eric-h-johnson",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/headshot.png"),
  imageSize: 375,
  message:
    "My name is Eric Johnson. I’m a web developer with a passion for front-end development, data visualization, and automated testing. As a UX Developer at Indeed.com, I’m part of a team dedicated to driving monetization for small and medium employers. My diverse background, which includes roles as a Sound Engineer, Fraud Analyst, Test Automation Engineer, and Cook in Tokyo, Japan, brings a wealth of unique experience and perspective to my current work.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: false,
  heading: "Recent Projects",
  gitHubUsername: "hashirshoaeb", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
  "I'm always open to exploring new and interesting opportunities. If you'd like to get in touch, please feel free to reach out to",
  email: "contact@erichayesjohnson.com",
};

export { navBar, mainBody, about, repos, getInTouch };
