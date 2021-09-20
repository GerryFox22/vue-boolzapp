var app = new Vue({

    el: '#app',

    data: {

        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
        
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],

        segnaElemento : 0,
        
        messaggioInserito :"",

        ricercaChat : "",

     
    },  

    methods: {

        ritornaAvatar :function(contact, index){
            return "img/avatar"+contact.avatar+".jpg"
        },
        
        contattoSelezionato : function(index){
            this.segnaElemento = index;
        },

        aggiungiMessaggio : function(container){
            
            var today = new Date();
            var dd = String(today.getDate());
            var mm = String(today.getMonth() + 1); 
            var yyyy = today.getFullYear();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

            today = dd + '/' + mm + '/' + yyyy;

            let nuovoMessaggio = {
                date : today +" "+ time,
                text : "",
                status : "sent",
            };

            let messaggioRisposta = {
                date : today +" "+ time,
                text : "ok",
                status : "received",
            };

            if((this.messaggioInserito.trim().length > 0)){
                
                nuovoMessaggio.text = this.messaggioInserito,
                this.messaggioInserito= "",

                container.push(nuovoMessaggio)
                
                setTimeout(function(){
                    container.push(messaggioRisposta)
                },1000)
            }


        },


    },

  });


// Il Milestone 1 include esclusivamente: OK!

// 1. Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) 
//    e dall’interlocutore (bianco) assegnando due classi CSS diverse

// 2. Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto.


// Il Milestone 2 include esclusivamente: OK!

// Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti 
// i messaggi relativi al contatto attivo all’interno del pannello della conversazione
// Click sul contatto mostra la conversazione del contatto cliccato


// Il Milestone 3 include esclusivamente: OK!

// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” 
// il testo viene aggiunto al thread sopra, come messaggio verde OK!

// Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come 
// risposta, che apparirà dopo 1 secondo. OK!


// Il Milestone 4 include esclusivamente:

// Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo 
// i contatti il cui nome contiene le lettere inserite 
// (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)