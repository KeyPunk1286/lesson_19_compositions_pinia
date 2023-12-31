<template>
  <div class="Gifts">
    <h2 class="Gifts__title">Список подарунків</h2>
    <div class="Gifts__list">
      <common-template
        :list-element="giftsList"
        field-name="новий подарунок"
        @delete-item="deleteGift"
        @add-new-element="addNewGift"
      />
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useGiftsStore } from '@/stores/gifts'
// storeToRefs
import CommonTemplate from '@/components/CommonTemplate.vue'

const giftStore = useGiftsStore()
const { giftsList } = storeToRefs(giftStore)
const { deleteGift, addNewGift } = useGiftsStore()
</script>

<style lang="scss" scoped></style>
