<template>
    <div :key="blog.id" v-for="blog in blogs">
        <Blog @toggle-task="$emit('toggle-task',blog.id)" @delete-task="$emit('delete-task',blog.id)" :blog="blog"></Blog>
    </div>
</template>

<script>
import Blog from './Blog.vue';
export default {
    name: 'Blogs',
    props: {
        blogs: Array
    },
    components:{
        Blog
    },
    emits:['delete-task','toggle-task']
}
</script>