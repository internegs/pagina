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
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'HeaderMenu',

    props: {
        change: { type: Function },
    },

    data() {
        return {
            situacao: false,
            value: 0,
        }
    },
    mouted() {
        window.addEventListener('scroll', this.scrollHeader)
    },

    beforeUnmount() {
        window.removeEventListener('scroll', this.scrollHeader)
    },

    methods: {
        responsivo() {
            const botao = document.querySelector('[aria-expanded]')
            const valor = botao.getAttribute('aria-expanded')

            this.situacao = valor === 'true' ? true : false
        },
        scrollHeader() {
            const header = document.querySelector('[data-js]')

            // Get the offset position of the navbar

            const sticky = header.offsetTop
            if (window.pageYOffset > sticky) {
                header.classList.add('bg-nav')
            } else {
                header.classList.remove('bg-nav')
            }
        },
    },
}
</script>

<style scoped>
.bg-nav {
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

@media (max-width: 400px) {
    .logo {
        width: 140px;
    }
}
</style>
