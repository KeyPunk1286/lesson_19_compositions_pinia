import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useAssignmentsStore } from './assignment'

export const useFriendsStore = defineStore('friends', () => {
  const friendsList = ref([
    {
      id: 1,
      name: 'Дмитро'
    },
    {
      id: 2,
      name: 'Роман'
    },
    {
      id: 3,
      name: 'Світлана'
    },
    {
      id: 4,
      name: 'Володимир'
    },
    {
      id: 5,
      name: 'Єлізовета'
    }
  ])
  const getFriendsById = computed(
    () => (friemdId) => friendsList.value.find((friend) => friend.id == friemdId)
  )

  function deleteFriends(friendsId) {
    friendsList.value = friendsList.value.filter((friend) => friend.id !== friendsId)
    const assignmentDelete = useAssignmentsStore()
    assignmentDelete.deleteAssignmentByFriendId(friendsId)
  }
  function addNewFriend(newName) {
    friendsList.value.push({
      id: new Date().getTime(),
      name: newName
    })
  }

  return { friendsList, deleteFriends, addNewFriend, getFriendsById }
})
