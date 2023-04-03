<template>
    <div @dblclick="$emit('toggle-task',blog.id)" class="reminder">
        <h3>{{ blog.author }}
            <router-link :to="{path:'/edit/'+blog.id}"><i  class="fas fa-pencil"> </i></router-link>
            
            <i @click="$emit('delete-task',blog.id)" class="fas fa-times"></i>
        </h3>
        <p>{{ blog.title }}</p>
        <p>{{blog.text}}</p>

    </div>
</template>
<script>


export default {
    name: 'Blog',
    props: {
        blog: Object
    },
    methods:{
    }

}
</script>

<style scope>

i{
    cursor: pointer;
}
.fas {
    color: red;

}

.task {
    background: white;
    margin: 5px;
    padding: 10px 20px;
    cursor: pointer;
}

.reminder{
    border-left: solid;
    border-color: green;
}
</style>