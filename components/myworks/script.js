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




export default {
  name: "MyWorks",
  mounted() {
    this.reorderList(0)
  },
  data() {
    return {
      renderComponent: true,
      screenWidth: null,
      items: ['All', 'Web Development', 'Mobile Development', 'UI/UX Design', 'Photo & Video', 'Graphics Design'],
      sortby: 0,
      category: 0,
      sortedList: [],
      webDevelopment: {
        categoryTitle: "Web Development (Front-end & Back-end)",
        projects: [
          {
            title: "CUSC Booking Web Application",
            skill: ["Front-end Team Leader", "UI/UX Design Team Leader", "Front-end Development", "UI/UX Designing"],
            description: "Chulalongkorn University's Official website for reserving sports courts.",
            fullDescription: "In this cooperative project, the team of 12 employs the Agile methodology to develop the official sports center booking site for Chulalongkorn University, as the front-end and UI/UX team leader, I created the website wireframe, low-fidelity, and high-fidelity designs using Figma. Afterwards, I lead the team of 5 in developing the two sites using React and Bootstrap. The process involves strict code-reviewing through Github. After 7 months of development, the project will be deployed as soon as Chulalongkorn University Sports Center resumes its operation.",
            img: CUSCCover,
            imgs: [
              {id: 'CUSCCode', img: CUSCCode},
              {id: 'CUSCFigma', img: CUSCFigma},
              {id: 'CUSCScreenshot', img: CUSCScreenshot}
            ],
            date: new Date(2021, 1, 1),
            significance: 100,
            category: 1,
            show: false,
            showOverlay: false,
            links: [
              {title: "CUSC Booking", url: "https://book.cusc.chula.ac.th"}
            ]
          },
          
        ]
      },
      mobileDevelopment: {
        categoryTitle: "Web Development (Front-end & Back-end)",
        projects: [
          {
            title: "MiraCal Fitness Application",
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
              {title: "Downlaod .APK File", url: "https://drive.google.com/drive/folders/1WZQYS_RK6cEZstkUMlWIAe5kgh0_WLcO"}
            ]
          },
        ]
      },
      UIUXDesign: {
        categoryTitle: "Web Development (Front-end & Back-end)",
        projects: [
          {
            title: "98",
            skill: ["skill"],
            description: "description",
            fullDescription: "fullDescription",
            img: Point,
            imgs: [
              {id: 'Point', img: Point}
            ],
            date: new Date(2021, 1, 5),
            significance: 98,
            category: 3,
            show: false,
            showOverlay: false,
            links: [
              
            ]
          },
        ]
      },
      photoAndVideo: {
        categoryTitle: "Web Development (Front-end & Back-end)",
        projects: [
          {
            title: "97",
            skill: ["skill"],
            description: "description",
            fullDescription: "fullDescription",
            img: Point,
            imgs: [
              {id: 'Point', img: Point}
            ],
            date: new Date(2023, 11, 3),
            significance: 97,
            category: 4,
            show: false,
            showOverlay: false,
            links: [
              
            ]
          },
        ]
      },
      graphicsDesigning: {
        categoryTitle: "Web Development (Front-end & Back-end)",
        projects: [
          {
            title: "96",
            skill: ["skill"],
            description: "description",
            fullDescription: "fullDescription",
            img: Point,
            imgs: [
              {id: 'Point', src: Point}
            ],
            date: new Date(2021, 1, 2),
            significance: 96,
            category: 5,
            show: false,
            showOverlay: false,
            links: [
              
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