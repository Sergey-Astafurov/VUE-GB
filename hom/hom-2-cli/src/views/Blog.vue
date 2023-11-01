<template>
  <section class="banner">
    <img src="@/assets/img/bann.jpg" alt="">
  </section>
  <section class="blogs flex center">
    <div class="blogs__list">
      <div class="blogs__item flex" v-for="blog in filterBlogs" :key="blog.id">

        <h3 class="blogs__title"> {{ blog.title }} </h3>

        <div class="blogs__img">
          <img :src="blog.img" alt="">
        </div>
        <div class="blogs__set flex">
          <div class="blogs__date">{{ blog.date }} </div>
          <a class="blogs__link" href="">Interior / Home / Decore</a>
        </div>
        <p class="blogs__text">
          {{ blog.desc }}
        </p>
      </div>

    </div>
    <div class="blogs__tags">
      <div class="blogs__tags-title">
        Tags
      </div>
      <div class="blogs__tags-list">
        <div href="#" @click="filter('Kitchen')" class="blogs__tags-link">Kitchen</div>
        <div href="#" @click="filter('Bedroom')" class="blogs__tags-link">Bedroom</div>
        <div href="#" @click="filter('Building')" class="blogs__tags-link">Building</div>
        <div href="#" @click="filter('Arhiticture')" class="blogs__tags-link">Architecture</div>
        <div href="#" @click="filter('Kitchen Planning')" class="blogs__tags-link">Kitchen Planning</div>

      </div>


    </div>

  </section>
</template>
<script>

export default {
  data() {
    return {
      tags: ["Kitchen", "Bedroom", "Building", "All"],
      blogs: [
        {
          id: 1,
          title: "Let’s Get Solution for Building Construction Work",
          img: require("@/assets/img/bitem.png"),
          date: "26 December,2022",
          desc: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority havesuffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text.All the Lorem Ipsum generators on the Internet tend torepeat predefined chunks as necessary.",
          tag: "Kitchen",
        },
        {
          id: 2,
          title: "Get Solution for Buildi Work",
          img: require("@/assets/img/b2.png"),
          date: "26 December,2022",
          desc: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority havesuffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text.All the Lorem Ipsum generators on the Internet tend torepeat predefined chunks as necessary.",
          tag: "Bedroom",
        },
        {
          id: 3,
          title: " Get Solution for Building Construction Work",
          img: require("@/assets/img/b5.png"),
          date: "26 December,2022",
          desc: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority havesuffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text.All the Lorem Ipsum generators on the Internet tend torepeat predefined chunks as necessary.",
          tag: "Building",
        },
        {
          id: 4,
          title: "Let’s Get Solution for Building Construction Work",
          img: require("@/assets/img/b4.png"),
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
    filterBlogs() {
      if (this.sortedBlogs.length) {
        return this.sortedBlogs
      } else {
        return this.blogs
      }
    }
  },
  methods: {
    filter(tags) {
      this.sortedBlogs = []
      this.blogs.map((item) => {
        if (item.tag === tags) {
          this.sortedBlogs.push(item)
        }
      })


    }
  }
}
</script>

<style></style>