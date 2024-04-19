    <style scoped>
    </style>
    <script setup>
  import { ref } from 'vue';
  import Roll from "@/components/Roll.vue";

    const props = defineProps({
      actionButtonName: String,
      onClickAction: Function,
      color: String,
      roll: Number,
      isClickable: Boolean,
      blink: Boolean
    })

  const padrao = ref([])
  const onClickRoll = (roll) => {
    console.log('onClickRoll ', roll)
    padrao.value.push(roll)
  }

  const onClickActionButton = () => {
    props.onClickAction(padrao)
  }

    </script>
    <template>
            <div style="display: flex; flex-direction: column;">
              <h5>Padrao:</h5>
              <div
                style="display: flex; gap: 5px; align-items: center; width: 500px; height: 70px; border: groove; border-radius: 10px; margin-top: 5px; margin-bottom: 10px;">
                <Roll v-for="item in padrao" :color="item?.color" :roll="item?.roll" />
              </div>
              <div style="display: flex; gap: 5px;">
                <button style="width: 100px; margin-bottom: 30px;" @click="onClickActionButton">{{ actionButtonName }}</button>
                <button style="width: 100px; margin-bottom: 30px;" @click="padrao = []">Limpar</button>
              </div>
              <h5>Por cores:</h5>
              <div style="display: flex; gap: 5px;">
                <Roll color="red" @clicked="onClickRoll" :is-clickable=true />
                <Roll color="black" @clicked="onClickRoll" :is-clickable=true />
                <Roll color="white" @clicked="onClickRoll" :is-clickable=true />
              </div>
              <div style="display: flex;flex-direction: column;">
                <h5>Por numeros:</h5>
                <div style="display: flex; gap: 5px; flex-direction: column;">
                  <div style="display: flex; gap: 5px;">
                    <Roll :roll=1 @clicked="onClickRoll" :is-clickable=true />
                    <Roll :roll=2 @clicked="onClickRoll" :is-clickable=true />
                    <Roll :roll=3 @clicked="onClickRoll" :is-clickable=true />
                    <Roll :roll=4 @clicked="onClickRoll" :is-clickable=true />
                    <Roll :roll=5 @clicked="onClickRoll" :is-clickable=true />
                    <Roll :roll=6 @clicked="onClickRoll" :is-clickable=true />
                    <Roll :roll=7 @clicked="onClickRoll" :is-clickable=true />
                  </div>
                  <div style="display: flex; gap: 5px;">
                    <Roll :roll=8 @clicked="onClickRoll" :is-clickable=true />
                    <Roll :roll=9 @clicked="onClickRoll" :is-clickable=true />
                    <Roll :roll=10 @clicked="onClickRoll" :is-clickable=true />
                    <Roll :roll=11 @clicked="onClickRoll" :is-clickable=true />
                    <Roll :roll=12 @clicked="onClickRoll" :is-clickable=true />
                    <Roll :roll=13 @clicked="onClickRoll" :is-clickable=true />
                    <Roll :roll=14 @clicked="onClickRoll" :is-clickable=true />
                  </div>
                </div>
              </div>
            </div>
    </template>
