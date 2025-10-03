<template>
    <div class="bg-color">
        <header-menu />

        <section
            id="home"
            class="home"
            style="padding-top: 120px"
        >
            <div class="home-container">
                <div class="home-content">
                    <h1 class="fw-bold f-36 text-white mt-3 font-oswald text-center">
                        {{ bannerData?.titulo || 'Não definido' }}
                    </h1>

                    <p
                        style="
                            font-size: 18px;
                            font-family:
                                Fira Sans,
                                sans-serif;
                        "
                        class="text-white mt-3"
                    >
                        {{ bannerData?.resumo || 'Não definido' }}
                    </p>

                    <div class="btn-div mt-3">
                        <a
                            href="#planos"
                            class="bg-laranja text-white rounded mt-3 fs-4 fw-bold"
                        >
                            COMECE AGORA
                        </a>
                    </div>
                </div>

                <video
                    autoplay
                    muted
                    controls
                    controlslist="nodownload nofullscreen noremoteplayback"
                    disablepictureinpicture
                >
                    <source
                        src="https://inzupt.com/inzupt_video.mp4"
                        type="video/mp4"
                    />

                    Tipo de video nao suportado pelo seu navegador
                </video>
            </div>
        </section>
    </div>
</template>

<script>
import HeaderMenu from './HeaderMenu.vue'

export default {
    name: 'BannerHome',

    components: { HeaderMenu },

    props: {
        data: Array,
    },

    computed: {
        bannerData() {
            return this.data && this.data.length > 0 ? this.data[0] : null
        },
    },
}
</script>

<style scoped>
.home {
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}

@media (min-width: 1200px) {
    .home {
        height: 100vh;
    }
}

.home-container {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-between;
    width: 95%;
}

@media (min-width: 1200px) {
    .home-container {
        flex-direction: row;
    }
}

@media (min-width: 1500px) {
    .home-container {
        width: 1456px;
        flex-direction: row;
    }
}

.home-content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
}

@media (min-width: 1200px) {
    .home-content {
        width: 50%;
    }
}

video {
    width: 95%;
    border-radius: 12px;
}

@media (min-width: 1200px) {
    video {
        width: 500px;
    }
}

.f-36 {
    font-size: 50px;
}

.btn-div a {
    padding: 12px 20px;
}

.bg-laranja {
    background-color: #f58634;
}

.bg-color {
    background-image: linear-gradient(to right, #7ed0dd, #479fcf);
}

@media (max-width: 771px) {
    .btn-div a {
        width: 100%;
    }
}

@media (max-width: 350px) {
    .btn-div button {
        margin-bottom: 50px;
    }
    .f-36 {
        font-size: 40px;
    }
}
</style>
