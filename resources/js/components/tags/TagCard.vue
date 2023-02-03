<template>
    <div>
        <h1>{{ tag.name }}</h1>
    </div>
</template>

<script>


export default {
name: 'TagCard',


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
        axios.get('http://127.0.0.1:8000/api/tags/' + this.$route.params.name)
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

