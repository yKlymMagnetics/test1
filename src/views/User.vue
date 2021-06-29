<template>
  <div>
    <h1 v-if="user">{{ user.name }}</h1>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import { LOAD_USER_ACTION, USER_BY_ID_GETTER } from "../store/types";

export default {
  data: () => ({
    user: null,
  }),
  mounted() {
    if (!this.users) {
      return this.loadUsers();
    }
    this.user = this.getUser(this.$route.params.id);
  },
  computed: {
    ...mapState({
      users: (state) => state.users,
    }),
    ...mapGetters({
      getUser: USER_BY_ID_GETTER,
    }),
  },
  watch: {
    users: function (newUsers) {
      if (newUsers && newUsers.length) {
        this.user = this.getUser(this.$route.params.id);
      }
    },
  },
  methods: {
    ...mapActions({
      loadUsers: LOAD_USER_ACTION,
    }),
  },
};
</script>