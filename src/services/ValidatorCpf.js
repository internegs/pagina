import Axios from 'axios'

const validatorCpf = Axios.create({
    baseURL: 'https://inzupt.com/api/validaCPF',
    timeout: 15000,
})

export default validatorCpf
