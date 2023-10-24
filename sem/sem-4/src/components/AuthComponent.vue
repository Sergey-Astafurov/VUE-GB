<template >
    <div class="cont" >
    <h2 v-if="isAuth">Успешная регистрация</h2>
    <div v-else class="">
        <h2>Необходимо зарегистрироваться</h2>
        <form action="" @submit.prevent="add">
            <label for="name"><input v-model="name" id="name" type="text">name</label>
            <label for="lname"><input v-model="lastName" id="lname" type="text">last name</label>
            <label for="email"><input  v-model="email" id="email" type="email">email</label>
            <button>Submit</button>
        </form>
    </div>
    </div>

</template>
<script>
export default {
    props : {
        isAuth : Boolean,
    },
    data() {
        return {
            name: '',
            lastName : '',
            email: '',
        }
    },
    methods: {
        add(){
            console.log(this.email, this.name , this.lastName);
        },

    },


}
</script>
<style lang="scss">
.cont{
    margin-bottom: 100px;
}
</style>