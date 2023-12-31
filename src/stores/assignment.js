import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useFriendsStore } from './friends'
import { useGiftsStore } from './gifts'

export const useAssignmentsStore = defineStore('assignments', () => {
  const assignmentsList = ref([])
  const getAssignmentsList = computed(() => {
    const friends = useFriendsStore()
    const gift = useGiftsStore()
    if (assignmentsList.value.length) {
      return assignmentsList.value.map((assignment) => {
        const friendName = friends.getFriendsById(assignment.friendId).name
        const giftName = gift.getGiftById(assignment.giftId).name
        return {
          id: assignment.id,
          nameFriend: friendName,
          nameGift: giftName
        }
      })
    }
  })

  function deleteAssignment(assignmentId) {
    assignmentsList.value = assignmentsList.value.filter(
      (assignment) => assignment.id !== assignmentId
    )
  }
  function deleteAssignmentByFriendId(friendId) {
    assignmentsList.value = assignmentsList.value.filter(
      (assignment) => assignment.friendId !== friendId
    )
  }
  function deletAssignmentByGiftId(giftId) {
    assignmentsList.value = assignmentsList.value.filter(
      (assignment) => assignment.giftId !== giftId
    )
  }
  function addNewAssignment(assignmentObj) {
    assignmentsList.value.push({
      id: new Date().getTime(),
      ...assignmentObj
    })
  }

  return {
    getAssignmentsList,
    deleteAssignment,
    deleteAssignmentByFriendId,
    deletAssignmentByGiftId,
    addNewAssignment
  }
})
