<template>
    <div>
    <div class="card m-4 p-1 w-75 float-right" v-for="item in blog">
  <div class="card-header">
    {{ item.title  }}
  </div>
  <div class="card-body">
    <h5 class="card-title">{{ item.description  }}</h5>
    <nuxt-content class="card-text" :document="item"/>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
</template>

<script>
const parseMarkdown = require('front-matter-markdown')

export default {
    head() {
        return {
            script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
        }
    },
    data: function () {
       return {}
    },
    async asyncData({ $content }) {
        const gallery = await $content('gallery').fetch()
        const blog = await $content('blog').fetch()
        return {
        gallery,
        blog
        }
    },
    computed: {
        test(){
            let list = []
            for(let i = 0; i < 15; i++){
                list.push('test')        
            }
            return list
        }
    },
    methods: {
    }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
