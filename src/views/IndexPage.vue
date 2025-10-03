<template>
    <div class="caixa">
        <div
            v-if="loadingPage"
            class="loading-container"
        >
            <div
                class="spinner-grow text-info"
                role="status"
            >
                <span class="visually-hidden">Carregando...</span>
            </div>
        </div>

        <template v-else>
            <banner-home :data="data" />
            <banner-solucoes />
            <banner-apresentacao :data="data" />
            <banner-planos class="mt-4" />
            <banner-perguntas />
            <banner-footer :data="data" />
        </template>

        <a
            href="https://api.whatsapp.com/send?phone=5565920011640&text=Acessei%20o%20site%20inzupt.com.br%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%A3o"
            class="link-flutuante"
        >
            <img
                src="../assets/whatsapp.png"
                alt=""
            />
        </a>
    </div>
</template>

<script>
import BannerHome from '@/components/index/BannerHome.vue'
import BannerSolucoes from '@/components/index/BannerSolucoes.vue'
import BannerApresentacao from '@/components/index/BannerApresentacao.vue'
import BannerPlanos from '@/components/index/BannerPlanos.vue'
import BannerFooter from '@/components/index/BannerFooter.vue'
import BannerPerguntas from '@/components/index/BannerPerguntas.vue'
import Api from '@/services/api'
import Swal from 'sweetalert2'

export default {
    name: 'IndexPage',

    components: {
        BannerHome,
        BannerSolucoes,
        BannerApresentacao,
        BannerPlanos,
        BannerFooter,
        BannerPerguntas,
    },

    data() {
        return {
            data: [],
            loadingPage: false,
            locationData: {
                ip: '',
                city: '',
                region: '',
                pais: '',
                country_code: '',
                network: '',
                version: '',
                cidade: '',
                estado: '',
                region_code: '',
                continente: '',
                cep: '',
                latitude: 0,
                longitude: 0,
                timezone: '',
                utc_offset: '',
                country_calling_code: '',
            },
        }
    },

    created() {
        localStorage.clear()
        //  this.getLocation();

        this.front()
    },
    mounted() {
        this.User_site()
    },

    methods: {
        async getLocation() {
            const response = await fetch('https://ipapi.co/json/')

            const data = await response.json()

            this.locationData = {
                ip: data.ip,
                cidade: data.city,
                estado: data.region,
                pais: data.country_name,
                network: data.network,
                version: data.version,
                country_code: data.country_code,
                region_code: data.region_code,
                cep: data.postal,
                latitude: data.latitude,
                longitude: data.longitude,
                timezone: data.timezone,
                utc_offset: data.utc_offset,
                country_calling_code: data.country_calling_code,
                continente: data.continent_code,
                operadora: data.org,
            }
        },

        async User_site() {
            await this.getLocation()
            await Api.post(
                '/user_site/ZmlsYWRlYXRlbmRpbWVudG8=',
                btoa(JSON.stringify(this.locationData))
            )
                .then(response => {
                    console.log(response.data.data)
                })
                .catch(error => {
                    console.error(error)
                })
        },

        async front() {
            this.loadingPage = true

            await Api.get('/front')
                .then(response => {
                    this.data = response?.data
                })
                .catch(err => {
                    this.loadingPage = false

                    console.log(err)

                    Swal.fire({
                        position: 'center',
                        title: 'Processando...',
                        showConfirmButton: true,
                        confirmButtonText: `<div class="spinner-border text-light" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>`,
                        timer: 6000,
                    })

                    setTimeout(() => {
                        this.front()
                    }, 6000)
                })
                .finally(() => (this.loadingPage = false))
        },
    },
}
</script>

<style>
.caixa {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: 100vh;
}

button {
    outline: 0;
    border: 0;
}

.link-flutuante {
    position: fixed;
    bottom: 15px;
    right: 20px;
    z-index: 1000;

    transition: all 0.2s ease;
    will-change: transform;
}

.link-flutuante:hover {
    transform: scale(1.04);
}

.loading-container {
    width: 100%;
    height: 100dvh;
    display: flex;
    justify-content: center;
    align-items: center;

    overflow-y: hidden;
}
</style>
