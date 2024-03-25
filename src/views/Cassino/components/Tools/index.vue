
<script setup>
import Alarm from './Alarm.vue';
import Clock from './Clock.vue';
import GaleCalculator from './GaleCalculator.vue';
</script>
<template>
    <div style="display: flex; width: 500px;">
        <div >
            <div>
                <div style="display: flex; gap: 20px; flex-direction: row; ">
                <div style="display: flex; gap: 20px; flex-direction: column; ">
                    <Clock />
                    <GaleCalculator />
                <Alarm />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>