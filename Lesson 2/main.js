const app = Vue.createApp({
    template: `  <h1>
    Hello from {{ teamName }} and {{ isHello ? firstName + "" + lastName: ""}}
</h1>
<button @click="onChangeName">Change name</button>
<div class="modal" v-if="isShowModal">
    <h1>Modal Content</h1>
</div>`,
    data(){
        return {
            teamName: 'RHP team',
            firstName: 'Hieu',
            lastName: 'Vux',
            isHello: true,
            isShowModal: false,
        }
    },
    methods: {
        onChangeName(){
            this.firstName = 'Quang',
            this.isShowModal = !this.isShowModal
        }
    },
})
app.mount('#contact')