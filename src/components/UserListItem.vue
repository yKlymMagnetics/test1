<template>
  <li>
    <router-link :to='"/users/" + user.id'>{{ user.name }}</router-link>
  </li>
</template>

<script>
export default {
  props: ["user"],
};
</script>
