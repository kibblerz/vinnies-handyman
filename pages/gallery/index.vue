<template>
    <div>
        <div class="card m-2 p-1 d-inline-block float-right" style="width: 18rem;" v-for="item in gallery">
            <img class="card-img-top" :src="item.thumbnail[0]" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{item.Title}}</h5>
                <div class="card-text"><nuxt-content :document="item"/></div>
                <NuxtLink :to="'/gallery/' + item.slug" class="btn btn-primary">Go somewhere</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
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
