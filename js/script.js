// Descrizione:
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.


const app = new Vue(
  {
    name: 'Vue Email List',
    el: '#root',
    data: {
      generatedEmails: [],
    },

    methods: {
     
    },
    
    created() {
      for (let i = 0; i < 10; i++) {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((res) => {
          const email = res.data.response;
          this.generatedEmails.push(email);
        })
      
      }

  }


  });
