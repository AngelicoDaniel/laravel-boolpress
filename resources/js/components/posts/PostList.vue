<template>
        <div>
            <Loader v-if="isLoading"/>

            <ul v-else-if="posts.length">
                <li v-for="elem in posts" :key="elem.id">
                    <router-link :to="`/posts/${elem.id}`">
                        {{ elem.title }}
                    </router-link>
                    <span v-if="elem.category">
                        {{ elem.category.name }}
                    </span>
                    <ol>
                        <li v-for="tag in elem.tags" :key="tag">
                            {{ tag.name }}
                        </li>
                    </ol>
                </li>


            </ul>
            <p v-else>Non ci sono post nel DB</p>

            <!-- Paginate -->
            <Pagination @on-page-change="getPosts" :pagination="pagination"/>
        </div>
</template>

<script>
import Loader from '../Loader.vue'
import Pagination from '../Pagination.vue'

export default {
    name: 'PostList',
    // props: ['posts', 'isLoading', 'pagination'],
    components: {
        Loader,
        Pagination
    },
    data(){
        return{
            posts: [],
            isLoading: false,
            pagination: {}
        }
    },
    mounted(){
        this.getPosts();
    },
    methods: {
        getPosts(page = 1){
            this.isLoading = true
            axios.get('http://127.0.0.1:8000/api/posts?page=' + page)
                .then(res => {
                    console.log(res.data);
                    // this.posts = res.data.data

                    //destrutturizzazione
                    const { data, current_page, last_page} = res.data;

                    this.posts = data;
                    this.pagination = {
                        lastPage: last_page,
                        currentPage: current_page
                    }


                }).catch(err =>{
                    console.log(err)
                }).then(() =>{
                    this.isLoading = false
                })
        }
    }
}
</script>

<style scoped lang="scss">

</style>

