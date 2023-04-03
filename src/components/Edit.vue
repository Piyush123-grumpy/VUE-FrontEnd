<template>
    <AddBlog type="edit" @edit-blog="editBlog"></AddBlog>
</template>

<script>
import AddBlog from '../components/Addblog.vue'
import axios from 'axios'
export default {
    name: 'Edit',
    components: {
        AddBlog
    },
    
    methods: {
        async editBlog(newTask) {
            console.log(newTask)
            try {

                const response2 = await axios.put(`http://localhost:8000/put/${this.id}/`, newTask)
                console.log(response2.data)

            }
            catch (error) {
                console.log(error)
            }

        },


    },
    data() {
        return {
            id: ''
        }
    },
    mounted() {
        this.id = this.$route.params.id

    },
}
</script>