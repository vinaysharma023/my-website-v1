import blogApp from "./images/blogApp.png";
import chatApp from "./images/chatApp.png";
import ecommerce from "./images/ecommerce.png";
import portfolio from "./images/portfolio.png";
import yelpcamp from "./images/yelpcamp.png";


// const placeHolderImgUrl = "https://picsum.photos/288/162";

const projectData = [
   {
      title: "E-Commerce App",
      image: ecommerce,
      liveLink: "https://myclothingline-live.herokuapp.com",
      repoLink: "https://github.com/vinaysharma023/Crown-Clothing",
      techUsed: ["React JS", "Redux", "Hooks", "Javascript", "Firebase"],
      features: [
         "A e-commerce platform with full functionality for online shopping",
         "Registration and Login using Firebase",
         "Payment method integration using Stripe",
         "A full end to end application with all features of e-commerce application.",
         "Hosted on Heroku",
      ],
   },
   {
      title: "Web Chat App",
      image: chatApp,
      liveLink: "https://react-slack-app-7d6d5.web.app",
      repoLink: "https://github.com/vinaysharma023/ChatApp",
      techUsed: ["React JS", "Redux", "Javascript", "semantic-ui-react", "Firebase"],
      features: [
         "App to chat with people in channels as well as through Direct messages",
         "Registration and Login using firebase",
         "Chatting features like upload media files, message search in chats",
         "Metadata about channels displayed in the side.",
      ],
   },
   {
      title: "Portfolio",
      image: portfolio,
      liveLink: "https://webdevpat.com",
      repoLink: "https://github.com/Drasek-25/Portfolio",
      techUsed: ["React", "Material UI", "Canvas", "Apache"],
      features: [
         "Fully Responsive UI",
         "Canvas integrated into React",
         "Email service workaround via Google Forms",
         "Other projects displayed with necessary links provided.",
         "JQuery used for making app responsive",
         "Hosted on AWS",
      ],
   },
   {
      title: "BlogApp",
      image: blogApp,
      //liveLink: "https://breakout.webdevpat.com",
      repoLink: "https://github.com/vinaysharma023/BlogApp",
      techUsed: ["JS", "Bootstrap", "JQuery"],
      features: [
         "Fully functioning Blog application",
         "RESTful routing implemented",
         "CRUD functionality is implemented",
      ],
   },
   // {
   //    title: "Plaid Login Utility",
   //    image: plaid,
   //    liveLink: "https://comingsoon.com",
   //    repoLink: "https://github.com/Drasek-25/Plaid-Project",
   //    techUsed: ["React", "Redux", "Axios"],
   //    features: [
   //       "Simple single page application to deal with plaid login",
   //       "User Registration/Login",
   //       "Real banking software",
   //    ],
   // },
   {
      title: "YelpCamp",
      image: yelpcamp,
      //liveLink: "handled via function in project card",
      repoLink: "https://github.com/vinaysharma023/YelpCamp",
      techUsed: ["JavaScript", "Bootstrap", "JQuery", "MongoDB"],
      features: [
         "User registration and login",
         "User upload and comment",
         "Animation is interactable with mouse click",
      ],
   },
   /* {
      title: "Hacker News App",
      image: hackernews,
      liveLink: "https://hackernews.webdevpat.com",
      repoLink: "https://github.com/Drasek-25/REACT-ROUTER-Hacker-News",
      techUsed: ["React", "Axios"],
      features: [
         "Frontend for Hacker News API",
         "Follow links to posts, users, comments all delivering their own data",
      ],
   }, */
   // {
   //    title: "Github Social App",
   //    image: github,
   //    liveLink: "https://github.webdevpat.com",
   //    repoLink: "https://github.com/Drasek-25/REACT-Github-API",
   //    techUsed: ["React", "Axios"],
   //    features: [
   //       "A full functioning for Github API social network",
   //       "Follow links to users, friends, and repos, all delivering their own data",
   //    ],
   // },
   // {
   //    title: "Weather App",
   //    image: weather,
   //    liveLink: "https://weather.webdevpat.com",
   //    repoLink: "https://github.com/Drasek-25/REACT-Weather-API",
   //    techUsed: ["React", "Axios"],
   //    features: [
   //       "A Fully functioning frontend for the Weather API",
   //       "Search for your location via zipcode",
   //       "Todays weather and 5 day forcast",
   //    ],
   // },
   /* {
      title: "Time Tracker",
      image: timetracker,
      liveLink: "https://timetracker.webdevpat.com",
      repoLink: "https://github.com/Drasek-25/timeTracker",
      techUsed: ["JS", "HTML", "CSS"],
      features: [
         "Add and remove project cards",
         "Time tracking for each card",
         "Checkbox for tracking timesheet workflow",
         "Export as .xml file",
      ],
   }, */
];
export default projectData;