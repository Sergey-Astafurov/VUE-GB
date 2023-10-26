<template >
    <div>
        <HeaderComp />
        <div class="banner">
            <img src="@/assets/img/banproj.jpg" alt="">
        </div>
        <div class="center projects">
            <div class="projects__tags-list">
                <div class="projects__tags" @click="filter(tag)" v-for="tag in tags">
                    {{ tag }}
                </div>
            </div>
            <div class="projects__list-list">
                <ProjectsItem v-for="project in filterProj" :key="project.id" :project="project">
                </ProjectsItem>
            </div>
        </div>
        <div class="projects__pagination center flex">
            <div  class="projects__pag">01</div>
            <div  class="projects__pag">02</div>
            <div  class="projects__pag">03</div>
            <div  class="projects__pag"><svg width="9" height="16" viewBox="0 0 9 16" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.55714 15L7.5 8.31429L1.55714 1.62857" stroke="#292F36" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>


        </div>

        <FooterComp />
    </div>
</template>
<script>
import FooterComp from './Footer-comp.vue';
import HeaderComp from './Header-comp.vue';
import ProjectsItem from './ProjectsItem.vue';


export default {
    components: { HeaderComp, FooterComp, ProjectsItem },
    data() {
        return {
            tags: ['Bathroom', 'Bed room', 'Kitchan', 'Living area'],
            projects:
                [
                    {
                        id: 1,
                        title: 'Minimal Bedroom',
                        subtitle: 'Decor / Artchitecture',
                        img: require('@/assets/img/pr1.png'),
                        tag: 'Bathroom',
                    },
                    {
                        id: 2,
                        title: 'Minimal Bedroom',
                        subtitle: 'Decor / Artchitecture',
                        img: require('@/assets/img/pr2.png'),
                        tag: 'Bed room'
                    },
                    {
                        id: 3,
                        title: 'Minimal Bedroom',
                        subtitle: 'Decor / Artchitecture',
                        img: require('@/assets/img/pr3.png'),
                        tag: 'Kitchan'
                    },
                    {
                        id: 4,
                        title: 'Classic Minimal Bedroom',
                        subtitle: 'Decor / Artchitecture',
                        img: require('@/assets/img/pr4.png'),
                        tag: 'Kitchan'
                    },
                    {
                        id: 5,
                        title: 'Modern Bedroom',
                        subtitle: 'Decor / Artchitecture',
                        img: require('@/assets/img/pr5.png'),
                        tag: 'Bed room'
                    },
                    {
                        id: 6,
                        title: 'Minimal Bedroom table',
                        subtitle: 'Decor / Artchitecture',
                        img: require('@/assets/img/pr6.png'),
                        tag: 'Bathroom',
                    },
                    {
                        id: 7,
                        title: 'System Table',
                        subtitle: 'Decor / Artchitecture',
                        img: require('@/assets/img/pr7.png'),
                        tag: 'Bathroom',
                    },
                    {
                        id: 8,
                        title: 'Modern Medroom',
                        subtitle: 'Decor / Artchitecture',
                        img: require('@/assets/img/pr8.png'),
                        tag: 'Kitchan'
                    },
                ],

            sortedProj : [],
        }
    },
    computed:{
        filterProj(){
            if(this.sortedProj.length){
                return this.sortedProj
            }else{
                return this.projects
            }
        }
    },
    methods : {
        filter(tags) {
            this.sortedProj=[]
            this.projects.map((item)=>{
                if(item.tag === tags){
                    this.sortedProj.push(item)
                }
            })


        }
    }
}
</script>
<style lang="scss">
@import "@/assets/scss/abstracts/vars";

.projects__tags-list {
    box-sizing: border-box;
    width: 880px;
    display: flex;
    margin: 0 auto;
    border-radius: 18px;
    border: 1px solid #CDA274;
    justify-content: space-between;
    gap: 22px;
    margin-bottom: 61px;
}

.projects__tags {
    padding: 26px 66px;
    transition: all .3s ease;

    &:hover {
        background: #CDA274;
        color: #fff;
        border-radius: 18px;
    }

    &:hover:last-child {
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
    }

}

.projects__list-list {
    display: grid;
    gap: 25px;
    grid-template-columns: 1fr 1fr;

    &:first-child {
        grid-row: 2 span;
        grid-column: 3 span;
    }

}

.projects {
    margin-bottom: 96px;

    &__pagination {
        gap: 20px;
        width: max-content;
        margin: 0 auto;
        margin-bottom: 96px;


    }

    &__pag {
        width: 52px;
        height: 52px;
        margin: 0;
        border-radius: 30px;
        border: #CDA274 1px solid;
        color: #292F36;
        font-family: $fontText;
        font-weight: 600;
        font-size: 16px;
        text-align: center;
        padding: 16px;
        transition: all .3s ease;
        cursor: pointer;

        &:hover {
            background: #F4F0EC;
        }

        &:last-child {
            width: 52px;
            height: 52px;
            padding-bottom: 2px;
            text-align: center;
        }

    }
}
</style>