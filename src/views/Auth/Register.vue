<template>
    <div class="container">
        <div class="columns">
            <div class="column is-6 is-offset-3 mt-6">
                <h3 class="title is-3">
                    Crear una Cuenta
                </h3><hr>
                <form action="#" @submit.prevent="register">
                    <div class="field">
                        <label class="label">
                            Nombre
                        </label>
                        <div class="control">
                            <input class="input" type="name" placeholder="ej: Alex" v-model="nombre">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">
                            Email
                        </label>
                        <div class="control">
                            <input class="input" type="email" placeholder="ej: alexsmith@gmail.com" v-model="email">
                        </div>
                    <div class="field">
                        <label class="label">
                            Contraseña
                        </label>
                        <div class="control">
                            <input class="input" type="password" v-model="password">
                        </div>
                        <button type="submit" class="button is-primary mt-3">Registrarme</button>
                        </div>
                    </div>
                </form>
                <div class="notification is-danger mt-3" v-if="error">
                    {{error}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import firebase from 'firebase'
import '@/firebase/init.js'

export default {
    data(){
        return{
            nombre:'',
            email:'',
            password:'',
            error:'',
        }
    },
    name: 'Register',
    methods:{
        register() {
            this.error = ''
            if( this.nombre && this.email && this.password){
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                    .then(()=> {
                        this.nombre= ''
                        this.email= ''
                        this.password =''
                    }).catch(err =>{
                        this.error = err.message
                    })
            } else {
                this.error = 'Todos los campos son requeridos'
            }
            

        }
    }
}
</script>