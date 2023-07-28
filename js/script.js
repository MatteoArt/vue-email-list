

Vue.createApp({
    data() {
        return {
            emailList: [],
        }
    },
    methods: {
        getData() {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail"
            ) //funzione che verrà eseguita quando axios riceve una risposta
            .then(function(response) {
                console.log(response);
            })
        }
    }
}).mount("#app");