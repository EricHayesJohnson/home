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
    // {
    //   image: "fa-github",
    //   url: "https://github.com/EricHayesJohnson",
    // },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/eric-h-johnson",
    },
  ],
};

const about = {
  show: true,
  heading: "About",
  imageLink: require("../editable-stuff/headshot.png"),
  imageSize: 375,
  message:
    "I'm a software engineer passionate about front-end development, data visualization, and automated testing. As a UX Developer at Indeed.com, I contribute to monetization efforts across diverse product surfaces while upholding UI best practices and design system standards. With a background spanning Sound Engineering, Fraud Analysis, Test Automation, and even cooking in Tokyo, Japan, my work benefits from a wealth of unique experiences and perspectives.",
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
  heading: "Contact",
  message:
  "If you'd like to get in touch, please feel free to email me at",
  email: "contact@erichayesjohnson.com",
};

export { navBar, mainBody, about, repos, getInTouch };
