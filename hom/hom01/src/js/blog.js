const App = {
    data() {
        return {
            tags: ["Kitchen", "Bedroom", "Building", "All"],
            blogs: [
                {
                    id: 1,
                    title: "Let’s Get Solution for Building Construction Work",
                    img: "./src/img/bitem.png",
                    date: "26 December,2022",
                    desc: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority havesuffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text.All the Lorem Ipsum generators on the Internet tend torepeat predefined chunks as necessary.",
                    tag: "Kitchen",
                },
                {
                    id: 2,
                    title: "Get Solution for Buildi Work",
                    img: "./src/img/b2.png",
                    date: "26 December,2022",
                    desc: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority havesuffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text.All the Lorem Ipsum generators on the Internet tend torepeat predefined chunks as necessary.",
                    tag: "Bedroom",
                },
                {
                    id: 3,
                    title: " Get Solution for Building Construction Work",
                    img: "./src/img/b5.png",
                    date: "26 December,2022",
                    desc: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority havesuffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text.All the Lorem Ipsum generators on the Internet tend torepeat predefined chunks as necessary.",
                    tag: "Building",
                },
                {
                    id: 4,
                    title: "Let’s Get Solution for Building Construction Work",
                    img: "./src/img/b4.png",
                    date: "26 December,2022",
                    desc: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority havesuffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text.All the Lorem Ipsum generators on the Internet tend torepeat predefined chunks as necessary.",
                    tag: "Kitchen",
                },
            ],
            sortedBlogs: [],
            selectTag: "All",

        }
    },
    computed: {
        filterBlogs(){
            if(this.sortedBlogs.length){
                return this.sortedBlogs
            }else{
                return this.blogs
            }
        }
    },
    methods: {
        filter(tags) {
            this.sortedBlogs=[]
            this.blogs.map((item)=>{
                if(item.tag === tags){
                    this.sortedBlogs.push(item)
                }
            })


        }
    }
}

const app = Vue.createApp(App)
const vm = app.mount('#app')