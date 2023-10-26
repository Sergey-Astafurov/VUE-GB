<template >
    <div>
        <div class="projects__item">
            <div class="projects__img pimg">
                <img :src="project.img" alt="">
            </div>
            <div class="projects__body pbd">
                <div class="projects__desc ds">
                    <div class="projects__title tt">{{ project.title }}</div>
                    <div class="projects__subtitle stt">{{ project.subtitle }}</div>
                </div>
                <div class="projects__btn pbtn"><svg xmlns="http://www.w3.org/2000/svg" width="70" height="70"
                        viewBox="0 0 70 70" fill="none">
                        <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['project']
}
</script>
<style lang="scss" scoped>


.pimg{
    margin-bottom: 24px;
}
.ds {
    .tt {
        color: #292F36;
        font-family: DM Serif Display;
        font-size: 25px;
        font-style: normal;
        font-weight: 700;
        line-height: 125%;
        /* 31.25px */
        letter-spacing: 0.5px;
    }

    .stt {
        color: #4D5053;
        font-family: Jost;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        /* 33px */
        letter-spacing: 0.22px;
        margin-bottom: 0;
    }
}
.pbd{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>