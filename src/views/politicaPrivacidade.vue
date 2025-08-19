<template>
    <div class="bg-color">
        <front-menu />

        <main class="container-fluid mt-5">
            <div class="col-md-10 bg-white p-4 rounded mt-5 m-auto">
                <h1 class="fw-bold text-center mb-5 fs-1">
                    {{ titulo }}
                </h1>

                <div class="form-control">{{ politica }}</div>
            </div>
        </main>

        <banner-footer />
    </div>
</template>

<script>
import FrontMenu from '@/components/GLOBALS/FrontMenu.vue'
import BannerFooter from '@/components/index/BannerFooter.vue'
import Api from '@/services/api'

export default {
    name: 'politicaPrivacidade',

    components: { FrontMenu, BannerFooter },

    data() {
        return {
            situacao: false,
            value: 0,
            politica: '',
            titulo: '',
        }
    },

    created() {
        window.scrollTo(0, 0)
    },

    mounted() {
        this.politica_privacidade()
    },

    methods: {
        politica_privacidade() {
            Api.get('/politica_privacidade/ZmlsYWRlYXRlbmRpbWVudG8=', {})
                .then(response => {
                    const data = response.data
                    this.politica = data.politica.descricao
                    this.titulo = data.politica.titulo
                })
                .catch(error => {
                    console.error(error)
                })
        },

        responsivo() {
            const botao = document.querySelector('[aria-expanded]')
            const valor = botao.getAttribute('aria-expanded')

            this.situacao = valor === 'true' ? true : false
        },
    },
}
</script>

<style scoped>
main {
    padding-top: 1rem;
}

.bg-color {
    background-image: linear-gradient(to right, #7ed0dd, #5ba3ca);
}
</style>
