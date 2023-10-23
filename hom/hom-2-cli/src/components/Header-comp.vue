<template >
    <div class=" container center ">
        <header class="header flex">
            <div class="logo">
                <img src="../assets/img/logo.png" alt="">

            </div>
            <div class="menubar">
                <ul class="menubar-list">
                    <li class="menubar-item"><a href="#" class="menubar-item__link">Home</a></li>
                    <li class="menubar-item"><a href="#" class="menubar-item__link">Project</a></li>
                    <li class="menubar-item"><a href="Blog-comp.vue" class="menubar-item__link">Blog</a></li>
                </ul>
            </div>
        </header>

    </div>
</template>
<script>


export default {

    data() {
        return {
        }
    },
    components : {
    }

}
</script>
<style lang="scss">
@import "@/assets/scss/abstracts/vars";
    html{
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
}

</style>