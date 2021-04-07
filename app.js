var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      commits:[]
    },
    async created(){
        let data = await fetch('https://api.github.com/repos/davidsilvag/davidsilvag.github.io/commits')
        this.commits = await data.json()
        console.log(this.commits)
    }
  })