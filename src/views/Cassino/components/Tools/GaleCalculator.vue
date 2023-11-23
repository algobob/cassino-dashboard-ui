<script setup>
import { ref, watch } from 'vue';

const qtdGalho = ref(2)
const valorInicial = ref(0)
const valores = ref([])

const calcularValores = () => {
    valores.value = valorInicial.value ? [valorInicial.value] : []
    let v = valorInicial.value

    for (let i=0;i<qtdGalho.value;i++) {
        v *= 2
        if (v)
            valores.value.push(v)

    }

}

watch(() => valorInicial.value, async (newValorInicial, oldValorInicial) => {
    console.log('newValorInicial ', newValorInicial)
    if (newValorInicial.length) {
        calcularValores()
    } else {
        valores.value = []
    }
})



</script>
<template>
    <div class="card">
        <div class="card-body">
            <div style="display: flex; width: fit-content; height: fit-content; gap: 20px; flex-direction: column;">
                <h5>Calculadora - Galho</h5>
                <div>
                    <span style="margin-right: 12px; font-size: large; width: fit-content;">Qtd. Galho:</span>
                    <input name="qtdGalho" label="Quantidade de galho" type="number" v-model="qtdGalho"
                        style="width: 60px;" @blur="calcularValores"/>
                </div>
                <div>
                    <span style="margin-right: 12px; font-size: large; width: fit-content;">Valor Inicial:</span>
                    <input name="valorInicial" label="Entrada" type="number" v-model="valorInicial"
                        style="width: 60px;" @blur="calcularValores"/>
                </div>
                <p v-if="valores.length" style="font-size: 2rem;"> {{ valores }} => {{ valores.reduce(function (a, b) {return a + b;}, 0).toFixed(2) }}</p>
            </div>
        </div>
    </div>
</template>