<template>
    <form @submit="onSubmit" class="add-form">
        <div class="form-control">
            <label>Author</label>
            <input type="text" v-model="author" name="author" placeholder="Add Author" />
        </div>
        <div class="form-control">
            <label>Title</label>
            <input type="text" v-model="title" name="title" placeholder="Add Title" />
        </div>
        <div class="form-control">
            <label>Text</label>
            <input type="text" v-model="text" name="text" placeholder="Add Text" />
        </div>

        <input type="submit" value="Add Blog" class="btn btn-block" />
    </form>
</template>

<script>
export default {
    name: 'AddBlog',
    data() {
        return {
            author: '',
            title: '',
            text: '',

        }
    },
    props: {
        type: String
    },
    
    methods: {
        onSubmit(e) {
            e.preventDefault()
            if (!this.text) {
                alert('Add Please')
            }
            const newBlog = {
                author: this.author,
                title: this.title,
                text: this.text
            }
            if (this.type == 'edit') {
                this.$emit('edit-blog', newBlog)

            }
            else {
                console.log(newBlog)
                this.$emit('add-blog', newBlog)

            }


        }
    }
}
</script>
<style scoped>
.add-form {
    margin-bottom: 40px;
}

.form-control {
    margin: 20px 0;
}

.form-control label {
    display: block;
}

.form-control input {
    width: 100%;
    height: 40px;
    margin: 5px;
    padding: 3px 7px;
    font-size: 17px;
}

.form-control-check {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.form-control-check label {
    flex: 1;
}

.form-control-check input {
    flex: 2;
    height: 20px;
}
</style>