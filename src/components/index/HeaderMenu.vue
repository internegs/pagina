<template>
    <header>
        <nav
            class="navbar navbar-expand-lg p-4 navbar-transparent fixed-top"
            data-js="header"
        >
            <div class="container">
                <router-link
                    to="/"
                    class="navbar-brand"
                >
                    <img
                        src="../../assets/img/inzupt.png"
                        alt="inzupt"
                        width="140"
                        class="logo"
                    />
                </router-link>

                <div
                    :class="situacao ? 'active' : ''"
                    class="menu_hamburguer navbar-toggler"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    @click="responsivo()"
                >
                    <div class="one"></div>
                    <div class="two"></div>
                    <div class="three"></div>
                </div>

                <div
                    id="navbarSupportedContent"
                    class="collapse navbar-collapse mgt-2"
                >
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>

                    <div class="d-flex align-items-center flex-column flex-lg-row gap-4">
                        <a
                            class="nav-link text-white fs-3 links"
                            href="#home"
                        >
                            Home
                        </a>

                        <a
                            class="nav-link text-white fs-3 links"
                            href="#home"
                        >
                            A plataforma
                        </a>

                        <a
                            class="nav-link text-white fs-3 links"
                            href="#faq"
                        >
                            FAQ
                        </a>

                        <a
                            class="nav-link text-white fs-3 links"
                            href="#planos"
                        >
                            Planos
                        </a>

                        <button
                            type="button"
                            class="w-100 text-center rounded-4"
                            @click="handleLogin()"
                        >
                            <span class="fs-3 text color-cinza text-white fw-bold text-uppercase">
                                Login
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
import LINKS from '@/utils/links'

export default {
    name: 'HeaderMenu',

    data() {
        return {
            situacao: false,
            value: 0,
        }
    },

    async mounted() {
        window.addEventListener('scroll', this.scrollHeader)
    },

    methods: {
        responsivo() {
            const botao = document.querySelector('[aria-expanded]')
            const valor = botao.getAttribute('aria-expanded')

            this.situacao = valor === 'true' ? true : false
        },

        scrollHeader() {
            const header = document.querySelector('[data-js]')

            if (header) {
                const sticky = header.offsetTop
                if (window.pageYOffset > sticky) {
                    header.classList.add('bg-nav')
                } else {
                    header.classList.remove('bg-nav')
                }
            }
        },

        handleLogin() {
            window.location.replace(LINKS.login)
        },
    },
}
</script>

<style scoped>
.link {
    text-decoration: none;
}

.bg-nav {
    /* background-color: #0774ae !important; */
    background-image: linear-gradient(to right, #7ed0dd, #479fcf);
}

.navbar {
    font-family: 'Fira Sans', sans-serif;
    padding: 0.5rem 0 !important;
    box-shadow: none !important;
}

.navbar-transparent {
    background-color: transparent;
}

.nav-link {
    position: relative;
    white-space: nowrap;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: 8px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: white;
    transition: width 0.3s ease-out;
}

.nav-link:hover::after {
    width: 100%;
}

button {
    padding: 12px 30px;

    outline: 0;
    background-color: #f58634;
    transition: transform 0.2s ease;
    will-change: transform;
}

button:hover {
    transform: scale(1.02);
}

.navbar {
    box-shadow: none !important;
}

.navbar-toggler {
    border: 0 !important;
}

.menu_hamburguer {
    width: 40px;
    height: 30px;
    margin-right: 20px;
}
.menu_hamburguer div {
    background-color: #fff;
    height: 4px;
    width: 40px;
    margin: 5px auto;
    opacity: 1;
    transition-duration: 0.3s;
}

.menu_hamburguer.active .one {
    transform: rotate(45deg) translate(7px, 7px);
}

.menu_hamburguer.active .two {
    opacity: 0;
}

.menu_hamburguer.active .three {
    transform: rotate(-45deg) translate(5px, -7px);
}

.navbar {
    font-family: 'Fira Sans', sans-serif;
}

.bold {
    font-weight: bold;
}

.navbar-nav button {
    width: 100%;
}
.full {
    width: 100%;
}

@media (max-width: 995px) {
    .link {
        width: 100%;
    }
    .mgt-2 {
        padding-top: 30px;
    }
}

@media (max-width: 997px) {
    nav.navbar {
        background-image: linear-gradient(to right, #7ed0dd, #479fcf);
    }
}

@media (max-width: 400px) {
    .logo {
        width: 140px;
    }
}
</style>
