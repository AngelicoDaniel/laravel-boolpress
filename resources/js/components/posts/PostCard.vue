<template>
    <div>
        <h1>{{ post.title }}</h1>

        <p>
            {{ post.body }}
        </p>
    </div>
</template>

<script>


export default {
name: 'PostCard',


data(){
    return{
        post: null,
    }
},
mounted(){
    this.getPost();
},
methods: {
    getPost(){
        axios.get('http://127.0.0.1:8000/api/posts/' + this.$route.params.id)
            .then(res => {
                console.log(res.data);
                this.post = res.data;

            }).catch(err =>{
                console.log(err)
            })
    }
}
}
</script>

<style scoped lang="scss">

</style>

