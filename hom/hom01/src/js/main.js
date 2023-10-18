const App = {
    data() {
        return {

            posts: [
                {
                    id: 1,
                    img: "./src/img/b1.png",
                    desc: "Kitchan Design",
                    title: "Let’s Get Solution For Building Construction Work",
                    date: "26 December,2022 ",
                },
                {
                    id: 2,
                    img: "./src/img/b2.png",
                    desc: "Living Design",
                    title: "Low Cost Latest Invented Interior Designing Ideas",
                    date: "22 December,2022 ",
                },
                {
                    id: 3,
                    img: "./src/img/b3.png",
                    desc: "Interiev Design",
                    title: "LBest For Any Office & Business Interior Solution",
                    date: "25 December,2022 ",
                },
                {
                    id: 4,
                    img: "./src/img/b4.png",
                    desc: "Kitchan Design",
                    title: "Let’s Get Solution For Building Construction Work",
                    date: "26 December,2022 ",
                },
                {
                    id: 5,
                    img: "./src/img/b5.png",
                    desc: "Living Design",
                    title: "Low Cost Latest Invented Interior Designing Ideas",
                    date: "22 December,2022 ",
                },
                {
                    id: 6,
                    img: "./src/img/b6.png",
                    desc: "Interiev Design",
                    title: "LBest For Any Office & Business Interior Solution",
                    date: "25 December,2022 ",
                },

            ]
        }
    },
}
const app = Vue.createApp(App)
const vm = app.mount('#app')