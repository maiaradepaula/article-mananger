import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {
    iconPack: 'fontwesome',
    duration: 3000
})

Vue.toasted.register(
    'defaultSucess',
    payload => !payload.msg ? 'Operação realizada com sucesso !' : payload.msg,
    { type: 'sucess', icon: 'check'}
)

Vue.toasted.register(
    'defautError',
    payload => !payload.msg ? 'Ops.. Erro inesperado.' : payload.msg,
    { type: 'error', icon: 'times'}
)
