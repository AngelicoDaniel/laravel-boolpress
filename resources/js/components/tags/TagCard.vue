<template>
    <div>
        <h1>tag</h1>
    </div>
</template>

<script>


export default {
name: 'TagCard',


data(){
    return{
        tag: null,
    }
},
mounted(){
    this.getTag();
},
methods: {
    getTag(){
        axios.get('http://127.0.0.1:8000/api/tags/' + this.$route.params.name)
            .then(res => {
                console.log(res.data);
                this.tag = res.data;

            }).catch(err =>{
                console.log(err)
            })
    }
}
}
</script>

<style scoped lang="scss">

</style>

