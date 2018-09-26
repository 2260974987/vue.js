new Vue({
    el: "#app",
    data: {
        message: "",
        title: "新建笔记",
        number: "0",
        set: [
            {txt:"你够资格吗？也许不够",title:"夜",n:"9",t:"09:00"},
        ],
        newset: "",
    },
    computed: {
        
    },
    mounted: function(){
//        console.log(localStorage.getItem("all"));
//        this.set.push(localStorage.getItem("all"));
//        localStorage.removeItem("all");
    },
    methods: {
        nu: function(event){
//            console.log(event.path[0].value.length);
            this.number = event.path[0].value.length ? event.path[0].value.length : 0;
        },
        nu1: function(i,event){
            this.set[i].n = event.path[0].value.length ? event.path[0].value.length : 0;
        },
        add: function(event){
            var now=new Date();
            var h=now.getHours();
            h=(h<10)?'0'+h:h;
            var mi=now.getMinutes();
            mi=(mi<10)?'0'+mi:mi;
            var time = h+':'+mi;
//            console.log(time);
            if(this.message && this.title){
                this.newset = {txt:this.message,title:this.title,n:this.number,t:time};
                this.set.unshift(this.newset);
            };
//            localStorage.setItem("all",this.set);
            var all = this.set;
            console.log(all);
        },
        del: function(i){
            this.set.splice(i,1);
        },
    }
})