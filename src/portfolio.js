import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};  

const illustration = {
  animated: true
};

const greeting = {
  username: "Zine eddine louati",
  title: "Hi all, I'm Zine",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / Flutter and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", 
  displayGreeting: true
};

const socialMediaLinks = {
  github: "github.com/louatizine",
  linkedin: "linkedin.com/in/zine-louati/",
  gmail: "zineeddinelouati.2000@gmail.com",
  display: true
};

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Data Structures and Algorithms:"),
    emoji(
      "⚡ Mobile Development:"
    )
  ],
  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
   
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },

    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
  
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Iteam University",
      logo: require("./assets/images/iteam.jpg"),
      subHeader: "Engineering Student in Computer Science",
      duration: "Iteam - Sept. 2023 - Present",
      desc: "Pursuing a degree in Computer Science..",
      descBullets: []
    },
    {
      schoolName: "ISIMS",
      logo: require("./assets/images/isims-logo.jpg"),
      subHeader: "Bachelor's degree in Computer Science and Multimedia",
      duration: "ISIMSF - Sept. 2020 - June 2023",
      desc: "Skills: JEE, Hadoop, Cloud Computing, Big data, C, unity, Adobe Illustrator, Scrum, AI, ...",
      descBullets: []
    },
    {
      schoolName: "El Alia High School",
      logo: require("./assets/images/aliaa.png"),
      subHeader: "High School Diploma in Computer Science",
      duration: "Sept. 2015 - July 2019",
      desc: "Completed high school education with a focus on Computer Science.",
      descBullets: []
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend/Design",
      progressPercentage: "75%"
    },
    {
      Stack: "Backend",
      progressPercentage: "50%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Web Developer Intern",
      company: "Tunisian oil activities company(ETAP)",
      companylogo: require("./assets/images/etap.png"),
      date: "Jul. 2022 - Aug. 2022 · 2 mos",
      desc: "Design and develop a website that allows you to manage employee information within the company..",
      descBullets: [
        "React.js Node.js MongoDB Front-end Development Redux.js Git",
        "API Web Services Bootstrap HTML WebDevelopment CSS JavaScript Express.js"
      ]
    },

    {
      role: "Mobile Developer Intern",
      company: "Digit Kakushin Soft",
      companylogo: require("./assets/images/dk.jpg"),
      date: "Feb. 2023 - Jul. 2023 · 6 mos",
      desc: "Design and develop a mobile application that allows you tomanage leave requests from employees within a company.",
      descBullets: [
        "Flutter MySQL Spring boot GitHub GitBash JWT",
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: "true",
  display: true
};

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/logo1.png"),
      projectName: "DayOff",
      projectDesc: "",
     
    },
    {
      image: require("./assets/images/dk.jpg"),
      projectName: "Digit Kakushin Soft",
      projectDesc: "",
      
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Social Life 🏆 "),
  subtitle:
    "Some of my Social Life Activity 😊",

  achievementsCards: [
    {
      title: "Sports",
      subtitle:
        "Member Of El Alia Sports Team.",
      image: require("./assets/images/alia.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "2010-2019",
        },
        
      ]
    },

    {
      title: "Academic",
      subtitle: "Membre de Microsoft ISIMS club",
      image: require("./assets/images/microsoft_tech_club_isims_cover.jpg"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "2010-2019",
  
        }
      ]
    }
  ],
  display: true
};

const blogSection = {
  title: "Portfolio  ",
  subtitle:
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE🤗, HERE ARE SOME SIMPLE PROJECTS, PLEASE NOTE THAT I HAVE MORE WITH BACKENDS BUT I CAN'T HOST THEM.",
  displayMediumBlogs: "true",
  blogs: [
    {
      url: "https://github.com/louatizine/TrafficS.git",
      title: "TraficS",
      description:
        "Creation of a Road Sign Detection Application."
    },
    {
      url: "https://github.com/louatizine/ToDoList1.git",
      title: "ToDo List",
      description:
        "Simple Javascript ToDo app."
    },
    {
      url: "https://github.com/louatizine/ZineTravelApp.git",
      title: "Zine TravelApp",
      description:"Create a mobile application for travel reservations.."
    },
    {
      url: "https://github.com/louatizine/MERN_APP.git",
      title: "MERN App",
      description:
        "To be familiar with MERN."
    },
    {
      url: "https://github.com/louatizine/E-ITEAM.git",
      title: "Iteam E-learning",
      description:
        "Web application to manage educational resources within the university."
    },
  {
    url: "https://github.com/louatizine/project.git",
    title: "Mobile App",
    description:
      "A mobile application that allows you to meet the demands of employees at the enterprise."
  },
    {
      url: "https://github.com/louatizine/phpIntroduction.git",
      title: "PHP Introduction",
      description:
        "To be familiar with PHP."
    },
    
    
  ],
  display: true
};



const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true
};

  const contactInfo = {
    title: "Contact Me ☎️",
    subtitle: "DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.",
    number: "Tunisia",
    location: "Open for opportunities: Yes",
    attribute1: "Open for freelance: Yes",
  };
  





const isHireable = false;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  podcastSection,
  contactInfo,
  isHireable
};
