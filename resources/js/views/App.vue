<template>
    <div>
        <Header/>

       <!-- <PostList :posts="posts" :isLoading="isLoading" :pagination="pagination"/> -->


        <router-view></router-view>
    </div>
</template>

<script>

import Header from "../components/Header.vue"


export default {
    name: 'App',
    components: {
        Header

    }

}
</script>
