import Point from "../../assets/Point.jpeg"

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
            title: "100",
            skill: ["skill"],
            description: "description",
            fullDescription: "fullDescription",
            img: Point,
            date: new Date(2021, 1, 1),
            significance: 100,
            category: 1,
            show: false,
            showOverlay: false
          },
        ]
      },
      mobileDevelopment: {
        categoryTitle: "Web Development (Front-end & Back-end)",
        projects: [
          {
            title: "99",
            skill: ["skill"],
            description: "description",
            img: Point,
            date: new Date(2021, 1, 6),
            significance: 99,
            category: 2,
            show: false,
            showOverlay: false
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
            img: Point,
            date: new Date(2021, 1, 5),
            significance: 98,
            category: 3,
            show: false,
            showOverlay: false
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
            img: Point,
            date: new Date(2023, 11, 3),
            significance: 97,
            category: 4,
            show: false,
            showOverlay: false
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
            img: Point,
            date: new Date(2021, 1, 2),
            significance: 96,
            category: 5,
            show: false,
            showOverlay: false
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