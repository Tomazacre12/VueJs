const app = Vue.createApp({
    data(){
        return {
           x: 0,
           y: 0,
        }
    },
    methods: {
        onLogEvent(event, newX, newY){
            console.log('running event...', event)
            this.y = newY
            this.x = newX
        },
        onMouseMoveEvent(event){
            console.log('running mouse move event...', event)
            this.x = event.offsetX
            this.y = event.offsetY
        }
    }
})
app.mount('#contact')