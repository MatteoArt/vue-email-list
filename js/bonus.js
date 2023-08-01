

Vue.createApp({
    data() {
        return {
            emailList: [],
        }
    },
    methods: {
    },
    mounted() {
        for (let i = 1; i <= 10; i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail"
            ) //funzione che verrà eseguita quando axios riceve una risposta
                .then((responseDate) => {
                    const dateObj = responseDate.data; //l'oggetto contenente i dati
                    const mail = dateObj.response; //il dato che mi interessa
                    this.emailList.push(mail);
                })
        }

    }
}).mount("#app");