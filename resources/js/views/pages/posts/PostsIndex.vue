<template>
    <div>
        <h1>pagina dei post</h1>
        <PostList/>
    </div>
</template>

<script>
    import PostList from "../../../components/posts/PostList.vue"

    export default {
    name: 'Posts',
    components: {
        PostList
    }

}
</script>
