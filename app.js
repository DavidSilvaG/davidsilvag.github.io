var app = new Vue({
    el: '#app',
    data: {
      loading: true,
      commits:[]
    },
    methods:{
        formatDate(date){
            const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
            let toFormat = new Date(date)
            return `${months[toFormat.getMonth()]} ${toFormat.getDate()} - ${toFormat.getHours()}:${String(toFormat.getMinutes()+100).substring(1,3)}`
        },
        async getCommits(){
            this.loading = true
            try {
                let data = await fetch('https://api.github.com/repos/davidsilvag/davidsilvag.github.io/commits')
                let unorderedCommits = await data.json()
                this.commits = unorderedCommits.sort((a,b)=> new Date(a.commit.author.date)-new Date(b.commit.author.date))
            } catch (error) {
                console.log(error)
            }
            this.loading = false
        },
    },
    created(){
        this.getCommits()
    }
  })