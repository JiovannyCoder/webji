<template>
    <section id="contact">
        <v-container>
            <h4 class="text-h4 text-primary mb-4 text-center">Contact</h4>
            <p class=" text-sm-center">Envoyez-moi un message.</p>
            
            <v-row class="my-5">
                <v-col cols="12" md="6">
                    <v-row>
                        <v-col cols="12" sm="6" v-for="contact in contacts" :key="contact.name">
                            <v-card flat>
                                <div class="pa-3">
                                    <v-icon size="68" color="indigo">{{ contact.icon }}</v-icon>
                                </div>
                                <v-card-title class="text-indigo font-weight-bold">{{ contact.name }}</v-card-title>
                                <v-card-text>
                                    <p v-for="(value, i) in contact.value" :key="i">{{ value }}</p>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" md="6">
                    <v-card flat>
                        <v-card-text>
                            <v-form ref="form">
                                <v-row dense class="pt-5">
                                    <v-col cols="12" sm="6" class="pe-sm-2">
                                        <v-text-field variant="outlined" v-model="nom"  :rules="[ rules.required, rules.length(5)]" label="Nom" color="indigo"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                        <v-text-field variant="outlined" v-model="email"  :rules="[ rules.required, rules.email ]" type="email" label="Email" color="indigo" ></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field variant="outlined" v-model="objet"  :rules="[ rules.required, rules.length(10)]" label="Objet" color="indigo" ></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-textarea variant="outlined" v-model="message"  :rules="[ rules.required, rules.length(10)]" label="Message" rows="4" color="indigo"></v-textarea>
                                    </v-col>
                                    <v-col cols="12" class="text-center">
                                        <v-btn :loading="loading" @click="submit" color="primary" prepend-icon="mdi-send" density="comfortable" size="large" class="text-capitalize">Envoyer le message</v-btn>
                                    </v-col>
                                    <v-col cols="12" class="text-center" v-if="error_message">
                                        <p v-if="error_message.email" class="text-subtitle-1 text-error">{{ error_message.email[0] }}</p>
                                        <p v-if="typeof(this.error_message) == 'string'" class="text-subtitle-1 text-error">{{ error_message }}</p>
                                    </v-col>
                                    <v-col cols="12" class="text-center" v-if="success_message">
                                        <p class="text-subtitle-1 text-info">{{ success_message }}</p>
                                    </v-col>
                                </v-row>
                            </v-form>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
import { sendMessage } from '../../services/messageService'

export default {
    name: '_contact',
    data() {
        return {
            contacts: [
                { name: 'Adresse', icon: 'mdi-map-marker-outline', value: ['Antananarivo ', 'Madagascar Itaosy'] },
                { name: 'Téléphone', icon: 'mdi-phone-outline', value: ['+261 34 73 862 80  ', '+261 32 72 825 79'] },
                { name: 'Email', icon: 'mdi-email-outline', value: ['Haritinamg@gmail.com  ', 'Web-jimg@gmail.com'] },
                { name: 'Disponibilité', icon: 'mdi-clock-outline', value: ['Lundi au vendredi  ', 'Freelance possible'] },
            ],
            nom: '',
            email: '',
            objet: '',
            message: '',
            rules: {
                email: v => !!(v || '').match(/@/) || 'Veuillez enter un email valide',
                length: len => v => (v || '').length >= len || `Nombre de caratères invalide, requise ${len}`,
                required: v => !!v || 'Ce champ est requise',
            },
            loading: false,
            success_message: '',
            error_message: ''
        }
    },
    methods: {
        async submit() {
             const valid = await this.$refs.form.validate()
            if (valid.valid) {
                this.loading = true
                this.success_message = ''
                this.error_message = ''
                
                let message = {
                    name: this.nom,
                    email: this.email,
                    object: this.objet,
                    message: this.message,
                }
                sendMessage(message).then(response => {
                    if(response.success) {
                        this.success_message = response.message
                    } else {
                        this.error_message = response.message
                    }
                    this.loading = false
                }).catch(e => {
                    this.error_message = 'Erreur durant l\'envoie de votre message... '
                    this.loading = false
                    console.error(e)
                })
            }
        }
    }
}
</script>

<style>

</style>