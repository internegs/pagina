<template>
    <header>
        <nav
            class="navbar navbar-expand-lg fixed-top"
            data-js="header"
        >
            <div class="nav-container">
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

                <!-- Ícone hamburguer com evento de clique -->
                <div
                    id="nav-icon"
                    :class="{ open: isMenuOpen }"
                    @click="toggleMenu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <!-- Menu controlado por ambas as condições -->
                <ul
                    v-if="shouldShowNav"
                    class="d-flex align-items-center flex-column flex-lg-row gap-4 shadow-xl"
                >
                    <li>
                        <a
                            class="nav-link text-white fs-3 links"
                            href="#home"
                        >
                            Home
                        </a>
                    </li>

                    <li>
                        <a
                            class="nav-link text-white fs-3 links"
                            href="#home"
                        >
                            A plataforma
                        </a>
                    </li>

                    <li>
                        <a
                            class="nav-link text-white fs-3 links"
                            href="#planos"
                        >
                            Planos
                        </a>
                    </li>

                    <li>
                        <a
                            class="nav-link text-white fs-3 links"
                            href="#faq"
                        >
                            FAQ
                        </a>
                    </li>

                    <li>
                        <button
                            type="button"
                            class="btn-login"
                            @click="handleLogin"
                        >
                            <span class="fs-3 text color-cinza text-white fw-bold text-uppercase">
                                Login
                            </span>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
import LINKS from '@/utils/links.js'

export default {
    name: 'HeaderMenu',

    data() {
        return {
            windowWidth: window.innerWidth,
            isMenuOpen: false,
        }
    },

    computed: {
        shouldShowNav() {
            if (this.windowWidth > 1200) {
                return true
            }
            return this.isMenuOpen
        },
    },

    watch: {
        windowWidth(newVal) {
            if (newVal > 1200) {
                this.isMenuOpen = false
            }
        },
    },

    mounted() {
        window.addEventListener('scroll', this.scrollHeader)
        window.addEventListener('resize', this.updateWindowWidth)
    },

    beforeUnmount() {
        window.removeEventListener('scroll', this.scrollHeader)
        window.removeEventListener('resize', this.updateWindowWidth)
    },

    methods: {
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
            window.open(LINKS.login, '_blank', 'noopener,noreferrer')
        },

        updateWindowWidth() {
            this.windowWidth = window.innerWidth
        },

        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen
        },
    },
}
</script>

<style scoped>
li {
    list-style: none;
}

.navbar {
    justify-content: center;
    background-image: linear-gradient(to right, #7ed0dd, #479fcf);
}

.nav-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 95%;
}

@media (min-width: 1500px) {
    .nav-container {
        width: 1456px;
    }
}

/* Estilos do ícone hamburguer */
#nav-icon {
    width: 40px;
    height: 35px;
    position: relative;
    margin: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    cursor: pointer;
    display: none; /* Esconde em desktop */
}

#nav-icon span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: #ffffff;
    border-radius: 4px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
}

#nav-icon span:nth-child(1) {
    top: 0px;
}

#nav-icon span:nth-child(2),
#nav-icon span:nth-child(3) {
    top: 12px;
}

#nav-icon span:nth-child(4) {
    top: 24px;
}

#nav-icon.open span:nth-child(1) {
    top: 12px;
    width: 0%;
    left: 50%;
}

#nav-icon.open span:nth-child(2) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
}

#nav-icon.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
}

#nav-icon.open span:nth-child(4) {
    top: 12px;
    width: 0%;
    left: 50%;
}

/* Menu mobile */
ul {
    margin: 0;
    padding: 0;
}

/* Mostra hamburguer apenas em mobile */
@media (max-width: 1200px) {
    #nav-icon {
        display: block;
    }

    ul {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: linear-gradient(to right, #7ed0dd, #479fcf);
        border-radius: 10px;
        padding: 20px;
        flex-direction: column;
        z-index: 1000;
        box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.25);
    }
}

.btn-login {
    background-color: #f58634 !important;
    padding: 0.8rem 1.2rem;
    border-radius: 12px;
    transition: all 0.3s ease;
    will-change: transform;
    backface-visibility: hidden;
    border: none;
    cursor: pointer;
}

.btn-login:active {
    transform: scale(0.98) translateY(1px);
}

.navbar {
    box-shadow: none !important;
    font-family: 'Fira Sans', sans-serif;
}
</style>
