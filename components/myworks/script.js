import Point from "../../assets/Point.jpeg"

import CUSCCode from "../../assets/projects/cusc/CUSCCode.png"
import CUSCFigma from "../../assets/projects/cusc/CUSCFigma.png"
import CUSCScreenshot from "../../assets/projects/cusc/CUSCScreenshot.png"
import CUSCCover from "../../assets/projects/cusc/CUSCCover.png"

import Miracal_logo from "../../assets/projects/Miracal/Miracal_logo.png"
import MiraCal1 from "../../assets/projects/Miracal/1.jpg"
import MiraCal2 from "../../assets/projects/Miracal/2.jpg"
import MiraCal3 from "../../assets/projects/Miracal/3.jpg"
import MiraCal4 from "../../assets/projects/Miracal/4.jpg"
import MiraCal5 from "../../assets/projects/Miracal/5.jpg"
import MiraCal6 from "../../assets/projects/Miracal/6.jpg"
import MiraCal7 from "../../assets/projects/Miracal/7.jpg"
import MiraCalDesign from "../../assets/projects/Miracal/MiraCalDesign.png"

import SaveMeCover from "../../assets/projects/SaveMe/SaveMeCover.png"
import SaveMe1 from "../../assets/projects/SaveMe/SaveMe1.png"
import SaveMe2 from "../../assets/projects/SaveMe/SaveMe2.png"
import SaveMe3 from "../../assets/projects/SaveMe/SaveMe3.png"
import SaveMe4 from "../../assets/projects/SaveMe/SaveMe4.png"
import SaveMe5 from "../../assets/projects/SaveMe/SaveMe5.png"

import InstagramCloneCover from "../../assets/projects/InstagramClone/Logo.png"
import InstagramClone1 from "../../assets/projects/InstagramClone/InstagramClone1.png"
import InstagramClone3 from "../../assets/projects/InstagramClone/InstagramClone3.png"
import InstagramClone4 from "../../assets/projects/InstagramClone/InstagramClone4.png"

import SelfManager1 from "../../assets/projects/SelfManager/SelfManager1.png"
import SelfManager2 from "../../assets/projects/SelfManager/SelfManager2.png"

import StatifyCover from "../../assets/projects/Statify/StatifyCover.png"
import Statify1 from "../../assets/projects/Statify/Statify1.png"

import EventCover from "../../assets/projects/Event/EventCover.jpg"
import Event1 from "../../assets/projects/Event/Event1.jpg"
import Event2 from "../../assets/projects/Event/Event2.png"
import Event3 from "../../assets/projects/Event/Event3.png"
import Event4 from "../../assets/projects/Event/Event4.png"
import Event5 from "../../assets/projects/Event/Event5.png"
import Event6 from "../../assets/projects/Event/Event6.png"

import Rookie from "../../assets/projects/LineRookie/Rookie.png"
import Vue2Vue3 from "../../assets/projects/LineRookie/vue2-vue3.jpeg"

import TodoistCover from "../../assets/projects/Todoist/TodoistCover.png"
import Todoist1 from "../../assets/projects/Todoist/Todoist1.png"

import GoldCover from "../../assets/projects/Gold/GoldCover.jpg"
import Gold1 from "../../assets/projects/Gold/Gold1.jpg"
import GoldQR from "../../assets/projects/Gold/GoldQR.png"

import Covid1 from "../../assets/projects/Covid/Covid1.jpg"
import Covid2 from "../../assets/projects/Covid/Covid2.jpg"

import Walltopia1 from "../../assets/projects/Walltopia/Walltopia1.jpg"
import Walltopia2 from "../../assets/projects/Walltopia/Walltopia2.jpg"
import Walltopia3 from "../../assets/projects/Walltopia/Walltopia3.jpg"

import WhatsEat1 from "../../assets/projects/WhatsEat/WhatsEat1.jpg"
import WhatsEat2 from "../../assets/projects/WhatsEat/WhatsEat2.jpg"
import WhatsEat3 from "../../assets/projects/WhatsEat/WhatsEat3.jpg"

import EEE from "../../assets/projects/EEE/EEE.png"

import Sportini from "../../assets/projects/Sportini/Sportini.png"

import PageRank from "../../assets/projects/PageRank/PageRank.png"

export default {
  name: "MyWorks",
  mounted() {
    this.reorderList(0)
  },
  data() {
    return {
      renderComponent: true,
      screenWidth: null,
      items: ['All', 'Web Development', 'Mobile Development', 'UI/UX Design', 'Photo & Video', 'Graphics Design', 'Internship'],
      sortby: 0,
      category: 0,
      sortedList: [],
      webDevelopment: {
        categoryTitle: "Web Development (Front-end & Back-end)",
        projects: [
          {
            title: "⭐ CUSC Booking Web Application",
            skill: ["Front-end Team Leader", "UI/UX Design Team Leader", "Front-end Development", "UI/UX Designing"],
            description: "Chulalongkorn University's Official website for reserving sports courts.",
            fullDescription: "In this cooperative project, the team of 12 employs the Agile methodology to develop the official sports center booking site for Chulalongkorn University, as the front-end and UI/UX team leader, I created the website wireframe, low-fidelity, and high-fidelity designs using Figma. Afterwards, I lead the team of 5 in developing the two sites using React and Bootstrap. The process involves strict code-reviewing through Github. After 7 months of development, the project will be deployed as soon as Chulalongkorn University Sports Center resumes its operation.",
            img: CUSCCover,
            imgs: [
              {id: 'CUSCCode', img: CUSCCode},
              {id: 'CUSCFigma', img: CUSCFigma},
              {id: 'CUSCScreenshot', img: CUSCScreenshot}
            ],
            date: new Date(2021, 4, 1),
            significance: 99,
            category: 1,
            show: false,
            showOverlay: false,
            links: [
              {title: "CUSC Booking", url: "https://book.cusc.chula.ac.th"}
            ]
          },
          {
            title: "Instagram Clone",
            skill: ["Vue", "Quasar", "Progressive Web App", "Firebase", "Express"],
            description: "A social media processive web app similar to instagram built using Vue and Quasar.",
            fullDescription: "InstagramClone is a social media site the encorporates the qualities of a progressive web app where users can install the webpage on their devices, works offline, and has content caching enabled. Users can post and access images from anywhere and tag it with neat caption and device location. The web application is developed using Vue and Quasar Frameworks for the front-end, Express and Firebase for the backend, and WorkBox for caching.",
            img: InstagramCloneCover,
            imgs: [
              {id: 'InstagramClone1', img: InstagramClone1},
              {id: 'InstagramClone3', img: InstagramClone3},
              {id: 'InstagramClone4', img: InstagramClone4}
            ],
            date: new Date(2021, 2, 1),
            significance: 96,
            category: 1,
            show: false,
            showOverlay: false,
            links: [
              {title: "Instagram Clone", url: "https://instagram-clone-cad39.web.app/#/"}
            ]
          },
          {
            title: "Self-manager",
            skill: ["Vue", "Vuetify", "LINE Authentication"],
            description: "A todo list developed in Vue and Vuetify with LINE Login!",
            fullDescription: "The project is developed using Vue.js and Vuetify framework. The web applicationi is featured with Line login for authentication. User generated data are then recorded in the database using Firebase Realtime Database.",
            img: SelfManager1,
            imgs: [
              {id: 'SelfManager1', img: SelfManager1},
              {id: 'SelfManager2', img: SelfManager2},
            ],
            date: new Date(2021, 2, 1),
            significance: 86,
            category: 1,
            show: false,
            showOverlay: false,
            links: [
              {title: "Self-Manager", url: "https://self-manager.netlify.app/"},
              {title: "Github", url: "https://github.com/pointmekin/self-manager"}
            ]
          },
          {
            title: "Statify",
            skill: ["Ionic", "Angular", "Flask", "Chart.js"],
            description: "Web Application that displays user's musical preference and visualized statistics.",
            fullDescription: "Statify is an Angular Ionic web application that takes the Spotify dataset and ranks them based on user input. The user has the ability to search, view musicality stats, and save them to a playlist. The back-end for this site is built using Python Flask and the front-end is built using Ionic and Angular.",
            img: StatifyCover,
            imgs: [
              {id: 'StatifyCover', img: StatifyCover},
              {id: 'Statify1', img: Statify1},
            ],
            date: new Date(2021, 2, 1),
            significance: 91,
            category: 1,
            show: false,
            showOverlay: false,
            links: [
              {title: "Github", url: "https://github.com/pointmekin/statify-frontend"}
            ]
          },
          {
            title: "LIFF Event App",
            skill: ["Vue", "Vuetify", "LINE LIFF"],
            description: "LIFF Application for signing up for events, checking in, and seeing event details.",
            fullDescription: "This project is a mini application that allows users to register for events and see the event details. The application comes with the membership card functionality where users can scan QR code to check in. The application is developed using Vue and Vuetify, and is integrated with LINE Front-end Framework to allow for LINE authentication and access from a chat bot.",
            img: EventCover,
            imgs: [
              {id: 'Event1', img: Event1},
              {id: 'Event2', img: Event2},
              {id: 'Event3', img: Event3},
              {id: 'Event4', img: Event4},
              {id: 'Event5', img: Event5},
              {id: 'Event6', img: Event6},
            ],
            date: new Date(2020, 11, 1),
            significance: 95,
            category: 1,
            show: false,
            showOverlay: false,
            links: [
              {title: "Event LIFF", url: "https://event-liff-app.netlify.app/register"},
              {title: "Github", url: "https://github.com/pointmekin/EventApp-LIFF"},
            ]
          },
          {
            title: "Todoist Clone",
            skill: ["React", "Jest"],
            description: "A Todoist clone tested with Jest!",
            fullDescription: "This project is a clone of the popular application/website Todoist. This clone version was developed in react using modern functional components and React hooks. The project is the tested using React-testing-library and Jest with more than 80% coverage.",
            img: TodoistCover,
            imgs: [
              {id: 'TodoistCover', img: TodoistCover},
              {id: 'Todoist1', img: Todoist1},
            ],
            date: new Date(2021, 0, 1),
            significance: 94,
            category: 1,
            show: false,
            showOverlay: false,
            links: [
              {title: "Todoist Clone", url: "https://todoist-application-clone.netlify.app/"},
              {title: "Github", url: "https://github.com/pointmekin/Todoist-app-clone"},
            ]
          },
          {
            title: "Gold Reporter Chatbot",
            skill: ["HTML", "CSS", "JavaScript", "LINE Messaging API"],
            description: "A chatbot that reports the current gold price everyday!",
            fullDescription: "This project is a chat bot developed in plain HTML, CSS, and JavaScript. Firebase pubsub function runs each midnight to scrape the gold price information and forms a flex message that's broadcast to all the users who added the chatbot as a friend.",
            img: GoldCover,
            imgs: [
              {id: 'GoldCover', img: GoldCover},
              {id: 'Gold1', img: Gold1},
              {id: 'GoldQR', img: GoldQR},
            ],
            date: new Date(2021, 2, 1),
            significance: 94,
            category: 1,
            show: false,
            showOverlay: false,
            links: [
              {title: "Add the chatbot", url: "https://line.me/R/ti/p/%40245sdugm"},
            ]
          },
          
        ]
      },
      mobileDevelopment: {
        categoryTitle: "Web Development (Front-end & Back-end)",
        projects: [
          {
            title: "⭐ MiraCal Fitness Application",
            skill: ["Flutter", "UI/UX Designing"],
            description: "Exercise and Calorie tracking application developed with Flutter.",
            fullDescription: "MiraCal is a fitness application for exercise and food calorie intake record keeping. Users can select a weight goal and follow Miracal's generated calorie plan. In addition users can record the food they eat and the exercises they completed from our list for easy access. The team consisted of a Project Manager, Back-end Developer, and me, the Front-end developer. Firebase Authentication is also enabled in this application. The application havn't been published on the Apple AppStore or Google PlayStore, but the stable .APK version is available for download.",
            img: Miracal_logo,
            imgs: [
              {id: 'MiraCalDesign', img: MiraCalDesign},
              {id: 'MiraCal1', img: MiraCal1},
              {id: 'MiraCal2', img: MiraCal2},
              {id: 'MiraCal3', img: MiraCal3},
              {id: 'MiraCal4', img: MiraCal4},
              {id: 'MiraCal5', img: MiraCal5},
              {id: 'MiraCal6', img: MiraCal6},
              {id: 'MiraCal7', img: MiraCal7},
              
            ],
            date: new Date(2020, 8, 1),
            significance: 98,
            category: 2,
            show: false,
            showOverlay: false,
            links: [
              {title: "Downlaod .APK File", url: "https://drive.google.com/drive/folders/1WZQYS_RK6cEZstkUMlWIAe5kgh0_WLcO?usp=sharing"}
            ]
          },
          {
            title: "COVID-19 Statistics",
            skill: ["Flutter"],
            description: "Track the up-to-date COVID-19 statistics.",
            fullDescription: "This project uses flutter to create an application that displays the current statistics of COVID-19 virus from a third party API. The application comes with dark mode.",
            img: Covid1,
            imgs: [
              {id: 'Covid1', img: Covid1},
              {id: 'Covid2', img: Covid2},
              
            ],
            date: new Date(2020, 8, 1),
            significance: 82,
            category: 2,
            show: false,
            showOverlay: false,
            links: [
              {title: "Downlaod .APK File", url: "https://drive.google.com/drive/folders/1LXRSVBL2Yp3z2KH_iFkLm5ScVQ2XcRqb?usp=sharing"}
            ]
          },
          {
            title: "Walltopia",
            skill: ["Flutter"],
            description: "Wallpaper downloading application",
            fullDescription: "This project uses flutter to create an application that presents popular images from the Pexel API that users can save to their device and use as wallpaper.",
            img: Walltopia1,
            imgs: [
              {id: 'Walltopia1', img: Walltopia1},
              {id: 'Walltopia2', img: Walltopia2},
              {id: 'Walltopia3', img: Walltopia3},
              
            ],
            date: new Date(2020, 8, 1),
            significance: 83,
            category: 2,
            show: false,
            showOverlay: false,
            links: [
              {title: "Downlaod .APK File", url: "https://drive.google.com/drive/folders/12dZdhmDKr1OIWp4N4ifjQFi8rZe9FobV?usp=sharing"}
            ]
          },
          {
            title: "WhatsEat",
            skill: ["Flutter"],
            description: "Restaurant randomizer for when you don't know what to eat!",
            fullDescription: "This project uses flutter to create an application that allows the user to randomize from a list of user-input restaurants when they're too indecisive to decide where to eat. The app is capable of filterring the restaurants by price, category, and search.",
            img: WhatsEat1,
            imgs: [
              {id: 'WhatsEat1', img: WhatsEat1},
              {id: 'WhatsEat2', img: WhatsEat2},
              {id: 'WhatsEat3', img: WhatsEat3},
              
            ],
            date: new Date(2020, 8, 1),
            significance: 84,
            category: 2,
            show: false,
            showOverlay: false,
            links: [
              {title: "Downlaod .APK File", url: "https://drive.google.com/drive/folders/1WZQYS_RK6cEZstkUMlWIAe5kgh0_WLcO"}
            ]
          },
        ]
      },
      UIUXDesign: {
        categoryTitle: "Web Development (Front-end & Back-end)",
        projects: [
          {
            title: "⭐ SaveMe Project",
            skill: ["UI/UX Design", "Figma", "Zakki"],
            description: "Conducted UI/UX research and created high-fidelity prototype for SaveMe web application.",
            fullDescription: `Zakki is a non-profit organization based in Indonesia. Zakki initiated the SaveMe project to help people from suffer from sexual misconduct through this social platform. In this saveMe project, I am responsible for the interaction designer and project manager associate role. Throughout the course of the project, I conducted a competitive analysis on mobile application and websites for victims of sexual misconduct. As a team, we conduct user researches, and interviews with real victims of sexual misconduct and organize insights into Empathy Maps and User Flows. I received the chance to conduct interviews with potential clients to generate an empathy map, and determine product features based on insights collected. As the interaction designer, I created user flows, designed the SaveMe web application wireframe created the high and low fidelity designs for the SaveMe web application and assisted the project managerial tasks.`,
            img: SaveMeCover,
            imgs: [
              {id: 'SaveMe1', img: SaveMe1},
              {id: 'SaveMe2', img: SaveMe2},
              {id: 'SaveMe3', img: SaveMe3},
              {id: 'SaveMe4', img: SaveMe4},
              {id: 'SaveMe5', img: SaveMe5},
            ],
            date: new Date(2021, 4, 5),
            significance: 99,
            category: 3,
            show: false,
            showOverlay: false,
            links: [
              {title: "Certificate", url: "https://drive.google.com/file/d/1ZR_lC5-g8oyLcT5ZjzusSJLxBvnQw0Gy/view?usp=sharing"},
              {title: "Letter of Recommendation", url: "https://drive.google.com/file/d/1fQAMFuxi51hQyx-HSnpAgUsjZknarz2e/view?usp=sharing"},
            ]
          },
        ]
      },
      photoAndVideo: {
        categoryTitle: "Web Development (Front-end & Back-end)",
        projects: [
          {
            title: "Exploring Engineer World: COVID-19 Data Science",
            skill: ["Premiere Pro", "Tableau"],
            description: "Data science project analyzing the situation of COVID-19 when it first broke out in 2020.",
            fullDescription: "This video is a part of Chulalongkorn University's Exploring Engineer World course project. The information covered in the video is as of February of 2020. Tableau software is used for data visualization and Adobe Premiere Pro is used for video editting.",
            img: EEE,
            imgs: [
              {id: 'EEE', img: EEE}
            ],
            date: new Date(2020, 5, 3),
            significance: 95,
            category: 4,
            show: false,
            showOverlay: false,
            links: [
              {title: "Watch the video", url: "https://www.youtube.com/watch?v=k-pfhRBmmFc"},
            ]
          },
          {
            title: "TEM: Sportini",
            skill: ["Premiere Pro", "Engineering"],
            description: "Technology and Engineering Management final project video.",
            fullDescription: "This video is a part of Chulalongkorn University's Technology and Engineering Management course. The video presents 'Sportini', a web platform that will provide an easier way to discover and reserve sports courts and helps the court owners in record keeping and data analysis. The video shows the Sportini engineering plan that encorporates the TEM concepts. Adobe Premiere Pro is used for video editting.",
            img: Sportini,
            imgs: [
              {id: 'Sportini', img: Sportini}
            ],
            date: new Date(2021, 5, 3),
            significance: 95,
            category: 4,
            show: false,
            showOverlay: false,
            links: [
              {title: "Watch the video", url: "https://www.youtube.com/watch?v=SPHUAMeFZwk"},
            ]
          },
          {
            title: "Calculus and Google's Search Algorithm",
            skill: ["Premiere Pro", "Calculus"],
            description: "Calculus Final Project",
            fullDescription: "This video is a part of Ekamai International School's Calculus course final project. In the video, I take a look at Google's search algorithm from a calculus stand point and make a hypothetical model for measuring the page's rank based on their page rank score and reliability score. Adobe Premiere Pro is used for video editting.",
            img: PageRank,
            imgs: [
              {id: 'PageRank', img: PageRank}
            ],
            date: new Date(2019, 2, 3),
            significance: 85,
            category: 4,
            show: false,
            showOverlay: false,
            links: [
              {title: "Watch the video", url: "https://www.youtube.com/watch?v=hUnsyyjk-dI"},
            ]
          },
        ]
      },
      graphicsDesigning: {
        categoryTitle: "My Graphics Design Portfolio",
        projects: [
          {
            title: "My Graphics Design Portfolio",
            skill: ["Photoshop", "Illustrator", "Adobe XD"],
            description: "description",
            fullDescription: "fullDescription",
            img: Point,
            imgs: [
              {id: 'Point', src: Point}
            ],
            date: new Date(2020, 1, 2),
            significance: 70,
            category: 5,
            show: false,
            showOverlay: false,
            links: [
              {title: "Design Portfolio", url: "https://drive.google.com/drive/folders/1boeOZL4rDmVxI9__VBxzBmRXet60PxVL?usp=sharing"},
            ]
          },
        ]
      },
      internship: {
        categoryTitle: "Internship",
        projects: [
          {
            title: "[LINE ROOKIE] Front-end Developer Intern",
            skill: ["LINE Thailand", "Front-end Development", "Back-end Development", "Web Development", "Vue", "Go", "Typescript"],
            description: "Front-end developer intern at LINE Company Thailand from June 2021 to August 2021",
            fullDescription: "As a front-end developer in the social commerce team (Team Unicorn), I received the chance to work on multiple aspects of the LINE SHOPPING web application, including front-end and back-end tasks. Together with my co-worker intern, we have re-written the LINE SHOPPING site in Vue3 with Vite (originally Vue2) and Typescript. A published the new searchbar UI and search tabs functionality while maintaining the LING SHOPPING home repository. I delivered enhancements to the backend infrastructures built using Go and RabbitMQ, and sure the quality and correctness with unit test (Ginkgo) and integration tests (Cypress).",
            img: Rookie,
            imgs: [
              {id: 'LINE Thailand Office', src: Rookie}
            ],
            date: new Date(2021, 5, 31),
            significance: 100,
            category: 6,
            show: false,
            showOverlay: false,
            links: [
              {title: "LINE ROOKIE Certificate (TBA)", url: "https://www.youtube.com/watch?v=3G3NffIrSu4"},
            ]
          },
          {
            title: "[LINE ROOKIE] Day in a life",
            skill: ["LINE Thailand", "Day in a life"],
            description: "Join me as I go through my day as a LINE ROOKIE from the Work-from-home and Work-from-office perspective.",
            fullDescription: "This video is a part of the LINE ROOKIE Story-teller project. In this vlog, I will bring you along my day as a LINE ROOKIE working from home and at the office, and my thoughts on the experience.",
            img: Rookie,
            imgs: [
              {id: 'LINE Thailand Office', src: Rookie}
            ],
            date: new Date(2021, 5, 31),
            significance: 100,
            category: 6,
            show: false,
            showOverlay: false,
            links: [
              {title: "View on YouTube", url: "https://www.youtube.com/watch?v=3G3NffIrSu4"},
            ]
          },
          {
            title: "[LINE ROOKIE] That time LINE ROOKIES migrated LINE SHOPPING to Vue 3",
            skill: ["LINE Thailand", "Day in a life"],
            description: "A Medium article detailing my journey as I and my co-worker migrates LINE SHOPPING home from Vue2 to Vue 3.",
            fullDescription: "A Medium article detailing my journey as I and my co-worker migrates LINE SHOPPING home from Vue2 to Vue 3",
            img: Vue2Vue3,
            imgs: [
              {id: 'VUE2 -> VUE3', src: Vue2Vue3}
            ],
            date: new Date(2021, 8, 2),
            significance: 100,
            category: 6,
            show: false,
            showOverlay: false,
            links: [
              {title: "View on Medium", url: "https://medium.com/linedevth/that-time-line-rookies-migrated-line-shopping-to-vue-3-e4a3f592ecb5"},
            ]
          },
        ]
      }
    }
  },
  mounted() {
    this.screenWidth = window.innerWidth
    window.addEventListener('resize', () => {
      this.screenWidth = window.innerWidth
    })
  },
  computed: {
    filterred: function() {
      if (this.category !== 0) {
        this.sortedList = this.sortedList.filter((item) => item.category === this.category)
        return [...this.sortedList]
      } else {
        return [...this.sortedList]
      }
    }
  },
  methods: {
    changeTab(number) {
      this.reorderList(number)
      this.sortby = number
    },
    changeCategory(number) {
      const index = this.items.indexOf(number)
      this.category = index 
      this.reorderList(this.sortby)
    },
    reorderList(number) {
      let theList = []
      theList.push(...this.mobileDevelopment.projects)
      theList.push(...this.webDevelopment.projects)
      theList.push(...this.UIUXDesign.projects)
      theList.push(...this.photoAndVideo.projects)
      theList.push(...this.graphicsDesigning.projects)
      theList.push(...this.internship.projects)
      if (this.category !== 0) {
        this.sortedList = theList.filter((item) => item.category === this.category)
        console.log(...this.sortedList)
      }
      switch(number) {
        case 0: {
          this.sortedList = theList.sort((a, b) => (a.significance) > b.significance ? -1: 1)
          break;
        }
        case 1: {
          this.sortedList = theList.sort((a, b) => a.title.localeCompare(b.title))
          break
        }
        case 2: {
          this.sortedList = theList.sort((a, b) => (a.date) > b.date ? -1: 1)
          break
        }
      }
      this.forceRerender()
    },
    forceRerender() {
      this.renderComponent = false;
      this.$nextTick(() => {
        this.renderComponent = true;
      });
    },
  }
}