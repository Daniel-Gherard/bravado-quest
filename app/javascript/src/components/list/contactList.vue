<template lang="pug">
#contactList
  virtual-list.list(
    :data-key="'email'"
    :data-sources="contacts"
    :data-component="itemComponent"
  )
</template>

<script>
import { mapGetters } from 'vuex';
import VirtualList from 'vue-virtual-scroll-list';
import contactCard from "../contacts/contactCard";

export default {
  name: 'Contacts',
  components: {
    contactCard,
    VirtualList
  },
  data() {
    return {
      itemComponent: contactCard
    }
  },
  computed: {
    ...mapGetters('contacts', ['contacts'])
  }
}
</script>

<style scoped lang="sass">
.recycle
  overflow-y: auto
  padding-right: 20px

.list
  padding: 0 12px
  max-height: calc(100vh - 200px)
  overflow-y: auto
</style>