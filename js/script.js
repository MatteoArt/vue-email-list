

Vue.createApp({
    data() {
        return {
            emailList: []
        }
    },
    methods: {
        genMailList() {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail"
            ).then((responseDate) => {
                if (this.emailList.length >= 10) {
                    return;
                } else {
                    const mail = responseDate.data.response;
                    this.emailList.push(mail); //per via della reattività di vue viene aggiornato automaticamente il dom
                }
            });

        }
    }
}).mount("#app");