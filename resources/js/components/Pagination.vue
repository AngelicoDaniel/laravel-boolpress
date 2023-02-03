<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li @click="$emit('on-page-change', pagination.currentPage -1)" v-if="pagination.currentPage > 1" class="page-item">
                <span role="button" class="page-link" href="#">Previous</span>
            </li>
            <li @click="$emit('on-page-change', n)" v-for="n in pagination.lastPage" :key="n" class="page-item" role="button">
                <span role="button" class="page-link" href="#">{{ n }}</span>
            </li>
            <li @click="$emit('on-page-change', pagination.currentPage +1)" v-if="pagination.currentPage != pagination.lastPage" class="page-item">
                <span role="button" class="page-link" href="#">Next</span>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Pagination',
    props: ['pagination']
}
</script>
