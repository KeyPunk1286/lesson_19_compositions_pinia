<template>
  <div class="common-template">
    <div class="common-template__box">
      <div v-for="item in listElement" :key="item.id" class="box__item">
        <p class="item__name">{{ item.name }}</p>
        <div class="item__button"><button @click="onDelete(item.id)">видалити</button></div>
      </div>
    </div>
    <div class="common-template__add-box">
      <label for="inputField" class="add-box__label">{{ fieldName }}</label>
      <input id="inputField" v-model="newFriend" type="text" class="add-box__input" />
      <div class="add-box__button"><button @click="onAdd">додати</button></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

//==========props===========//
defineProps({
  listElement: {
    type: Object,
    default: () => ({})
  },
  fieldName: {
    type: String,
    default: 'поле для вводу'
  }
})
//==========data=============//
const newFriend = ref(null)

const emit = defineEmits(['deleteItem', 'addNewElement'])
function onDelete(itemId) {
  emit('deleteItem', itemId)
}
function onAdd() {
  emit('addNewElement', newFriend.value)
  newFriend.value = null
}
</script>

<style lang="scss" scoped></style>
