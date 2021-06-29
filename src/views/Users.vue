<template>
  <div>
    <div>Users page</div>
    <ul v-if="users && users.length">
      <UserListItem v-for="(user, idx) in users" :key="idx" :user="user" />
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { LOAD_USER_ACTION } from "../store/types";
import UserListItem from "../components/UserListItem.vue";

export default {
  mounted: function () {
    if (!this.users) {
      this.loadUsers();
    }
  },

  components: {
    UserListItem,
  },
  computed: {
    ...mapState({
      users: (state) => {
        return state.users;
      },
    }),
  },
  methods: {
    ...mapActions({
      loadUsers: LOAD_USER_ACTION,
    }),
  },
};
</script>


<style scoped>
ul {
  list-style-type: none;
}
</style>