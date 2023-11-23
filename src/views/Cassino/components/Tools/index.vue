
<script setup>
import Clock from './Clock.vue';
import GaleCalculator from './GaleCalculator.vue';
</script>
<template>
    <div style="display: flex; width: 500px;">
        <div >
            <div>
                <div style="display: flex; gap: 20px; flex-direction: column; ">
                    <Clock />
                    <GaleCalculator />
                </div>
            </div>
        </div>
    </div>
</template>