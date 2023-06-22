<style scoped>
#clock {
    font-family: 'Share Tech Mono', monospace;
    color: #ffffff;
    text-align: center;
    /* position: absolute; */
    /* left: 50%;
    top: 50%; */
    transform: translate(140%, -30%);
    color: #daf6ff;
    text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0);
    background-color: red;
    width: fit-content;
    height: fit-content;
    background: #0f3854;
    background: radial-gradient(ellipse at center,  #0a2e38  0%, #000000 70%);
    background-size: 100%;
}

.time {
    letter-spacing: 0.05em;
    font-size: 50px;
    padding: 2px 0;
}

.date {
    letter-spacing: 0.1em;
    font-size: 24px;
}
</style>

<script setup>
import { ref, onMounted, inject } from "vue";

const date = ref('')
const time = ref('')

const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const updateTime = () => {
    const cd = new Date();
    time.value = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
    date.value = zeroPadding(cd.getFullYear(), 4) + '-' + zeroPadding(cd.getMonth()+1, 2) + '-' + zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()];
};
setInterval(updateTime, 1000);


const zeroPadding = (num, digit) => {
    let zero = '';
    for(var i = 0; i < digit; i++) {
        zero += '0';
    }
    return (zero + num).slice(-digit);
}

onMounted(() => {
    updateTime();
})
</script>
<template>
    <div id="clock">
        <p class="date">{{ date }}</p>
        <p class="time">{{ time }}</p>
    </div>
</template>
