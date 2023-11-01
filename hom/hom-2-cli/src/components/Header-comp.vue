<template >
    <div class=" container center ">
        <header class="header flex">
            <div class="logo">
                <img src="../assets/img/logo.png" alt="">

            </div>
            <div class="menubar">
                    <nav class="menubar-list">
                        <router-link v-for="link in linkarr" :key="link.id" :to="link.url" class="menubar-item__link">{{ link.name
                        }}</router-link>
                    </nav>
            </div>
        </header>

    </div>
</template>
<script>


export default {

    data() {
        return {
            linkarr: [
                {
                    id: 0,
                    name: 'Home',
                    url: '/'
                },
                {
                    id: 1,
                    name: 'Project',
                    url: '/project'
                },
                {
                    id: 2,
                    name: 'Blog',
                    url: '/blog'
                },


            ]
        }
    },
    components: {
    }

}
</script>
<style lang="scss">
@import "@/assets/scss/abstracts/vars";

html {
    background: url('@/assets/img/Line.png');
    background-repeat: no-repeat;
    background-size: 1200px;
    background-position: 50% 0;

}

.header {
    padding-top: 50px;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 60px;
}



.logo {
    max-width: 177px;
}

.menubar {
    display: flex;
}

.menubar-list {
    display: flex;
    gap: 50px;

}

.menubar-item {
    &__link {
        color: $colorTitle;
        font-size: 20px;
    }
}</style>