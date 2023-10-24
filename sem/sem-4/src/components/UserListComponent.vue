<template >
    <div class="container">

        <UserComponent v-for="(user) in users" :key="users.id" :user="user"/>
    </div>
</template>
<script>
import UserComponent from './UserComponent.vue';

export default {
    data() {
        return {
            users: [
                {
                    id: 1,
                    name: 'Bob',
                    lastName: 'Marly',
                    email: 'bm@gmail.com'
                },
                {
                    id: 2,
                    name: 'Mark',
                    lastName: 'Mar',
                    email: 'bms@gmail.com'
                },
                {
                    id: 3,
                    name: 'Bobby',
                    lastName: 'Marlyss',
                    email: 'zz@gmail.com'
                },
            ]
        };
    },
    components: { UserComponent }
}
</script>
<style lang="scss" scoped>
 .container{
    display: flex;
    width: 100%;
    border: 2px solid black;
    justify-content: center;
    gap: 50px;

 }
</style>