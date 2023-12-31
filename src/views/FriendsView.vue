<template>
  <div class="frieds">
    <h2 class="frieds__title">Список друзів</h2>
    <div class="frieds__list">
      <common-template
        :list-element="friendsList"
        field-name="новий друг"
        @delete-item="deleteFriends"
        @add-new-element="addNewFriend"
      />
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useFriendsStore } from '@/stores/friends'
// storeToRefs
import CommonTemplate from '@/components/CommonTemplate.vue'

const friendsStore = useFriendsStore()
const { friendsList } = storeToRefs(friendsStore)
const { deleteFriends, addNewFriend } = useFriendsStore()
</script>

<style lang="scss" scoped></style>
