import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useAssignmentsStore } from './assignment'

export const useGiftsStore = defineStore('gifts', () => {
  const giftsList = ref([
    {
      id: 1,
      name: 'Ровер'
    },
    {
      id: 2,
      name: 'Дім'
    },
    {
      id: 3,
      name: 'Авто'
    },
    {
      id: 4,
      name: 'Квартира'
    },
    {
      id: 5,
      name: 'Ноутбук'
    }
  ])
  const getGiftById = computed(() => (giftId) => giftsList.value.find((gift) => gift.id == giftId))

  function deleteGift(giftId) {
    giftsList.value = giftsList.value.filter((gift) => gift.id !== giftId)
    const assignmentDelete = useAssignmentsStore()
    assignmentDelete.deletAssignmentByGiftId(giftId)
  }
  function addNewGift(newGift) {
    giftsList.value.push({
      id: new Date().getTime(),
      name: newGift
    })
  }

  return { giftsList, deleteGift, addNewGift, getGiftById }
})
