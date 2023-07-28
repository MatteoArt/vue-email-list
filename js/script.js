

Vue.createApp({
    data() {
        return {
            mail: '',
            emailList: [],
        }
    },
    methods: {
        getData() {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail"
            ) //funzione che verrà eseguita quando axios riceve una risposta
            .then((responseDate) => {
                const dateObj = responseDate.data; //l'oggetto contenente i dati
                const mail = dateObj.response; //il dato che mi interessa
                this.mail = mail;
            })
        }
    },
    mounted() {
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail"
            ) //funzione che verrà eseguita quando axios riceve una risposta
            .then((responseDate) => {
                const dateObj = responseDate.data; //l'oggetto contenente i dati
                const mail = dateObj.response; //il dato che mi interessa
                this.mail = mail;
            })
    }
}).mount("#app");