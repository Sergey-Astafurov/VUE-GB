<template >
        <div class="user">
            <h2>{{ user.name }}</h2>
            <h2> {{ user.lastName }}</h2>
            <h3> {{ user.email }}</h3>


    </div>
</template>
<script>
export default {
    props : {
        user : Object,
    }

}
</script>
<style lang="scss" scoped>

.user{
    width: 200px;
    height: 200px;
    border: 3px solid blueviolet;
    border-radius: 10px;
}

</style>