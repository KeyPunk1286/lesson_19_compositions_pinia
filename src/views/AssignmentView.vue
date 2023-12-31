<template>
  <div class="assignment-gift">
    <div class="assignment-gift__title">Розподіл подарунків</div>
    <div class="assignment-gift__box">
      <div class="box__friends">
        <div class="friends__title">Друг</div>
        <div class="friends__list">
          <select v-model="assignmentObj.friendId">
            <option v-for="friend in friendsList" :key="friend.id" :value="friend.id">
              {{ friend.name }}
            </option>
          </select>
        </div>
      </div>

      <div class="box__gifts">
        <div class="gifts__title">Подарунок</div>
        <div class="gifts__list">
          <select v-model="assignmentObj.giftId">
            <option v-for="gift in giftsList" :key="gift.id" :value="gift.id">
              {{ gift.name }}
            </option>
          </select>
        </div>
      </div>

      <div class="box__button"><button @click="addAssignment">додати</button></div>
    </div>
    <div class="assignment-gift__list">
      <div v-for="assignment in getAssignmentsList" :key="assignment.id" class="list__item">
        <span>{{ assignment.nameFriend }}</span> - <span>{{ assignment.nameGift }}</span>
        <button @click="deleteAssignment(assignment.id)">видалити</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { storeToRefs } from 'pinia'
import { useFriendsStore } from '@/stores/friends'
import { useGiftsStore } from '@/stores/gifts'
import { useAssignmentsStore } from '@/stores/assignment'
// storeToRefs

//============================================================//
const friendsStore = useFriendsStore()
const giftStore = useGiftsStore()
const assignmentStore = useAssignmentsStore()
//===============================================================//
const { friendsList } = storeToRefs(friendsStore)
const { giftsList } = storeToRefs(giftStore)
//===============================================//
const { getAssignmentsList } = storeToRefs(assignmentStore)
const { deleteAssignment, addNewAssignment } = useAssignmentsStore()
//=====================================================================//

const assignmentObj = reactive({
  friendId: null,
  giftId: null
})
function addAssignment() {
  console.log(assignmentObj)
  if (assignmentObj.friendId && assignmentObj.giftId) {
    addNewAssignment(assignmentObj)
    for (const key in assignmentObj) {
      assignmentObj[key] = null
    }
  } else alert('треба обрати і друга і подарунок для додавання у список')
}
</script>

<style lang="scss" scoped></style>
