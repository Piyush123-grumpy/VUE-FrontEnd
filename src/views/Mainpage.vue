<template>
    <div class="container">
        <Header></Header>


        <Addblog @add-blog="addBlog"></Addblog>

        <Blogs @delete-task="deletea" :blogs="blogs"></Blogs>

    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Addblog from '../components/Addblog.vue'
import Blogs from '../components/Blogs.vue';
import axios from 'axios';
export default {
    name: 'Mainpage',
    components: {
        Header,
        Addblog,
        Blogs
    },
    data() {
        return {
            blogs: [],
            showAddbutton: true
        }
    },
    methods: {
        async getData() {
            try {
                const response = await axios.get(`http://localhost:8000/all`);
                console.log(response.data)
                return response.data
            } catch (error) {
                console.log(error);
            }
        },
        async addBlog(newBlog) {
            console.log(newBlog)
            console.log('Hit')

            try {
                const response = await axios.post('http://localhost:8000/add', newBlog)

                console.log(response.data, 'ss')

                this.blogs = [...this.blogs, response.data[0]]

            } catch (error) {
                console.log(error)

            }
        },
        async deletea(id) {
            try {
                console.log('ss')
                const response = await axios.delete(`http://localhost:8000/delete/${id}`)
                this.blogs = this.blogs.filter((task) => task.id != id)
            }
            catch (error) {
                console.log(error)
            }

        },
    },
    async created() {
        this.blogs = await this.getData()
    },


}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Poppins', sans-serif;
}

.container {
    max-width: 500px;
    margin: 30px auto;
    overflow: auto;
    min-height: 300px;
    border: 1px solid steelblue;
    padding: 30px;
    border-radius: 5px;
}

.btn {
    display: inline-block;
    background: #000;
    color: #fff;
    border: none;
    padding: 10px 20px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    font-size: 15px;
    font-family: inherit;
}

.btn:focus {
    outline: none;
}

.btn:active {
    transform: scale(0.98);
}

.btn-block {
    display: block;
    width: 100%;
}
</style>