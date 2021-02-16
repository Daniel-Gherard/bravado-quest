<template lang="pug">
#searchPage
  v-container.py-0
    v-row
      v-card.bravado-card-wrapper(
        elevation="0"
        :max-width="574"
        :min-width="574"
      )
        .bravado-card
          .search-field
            v-text-field(
              solo
              v-model="query"
              prepend-inner-icon="mdi-magnify"
              hide-details
              tile
              v-debounce:500ms="updateSearchValue"
            )

          contact-list
</template>

<script>
import contactList from "../components/list/contactList";

export default {
  name: 'Contacts',
  components: {
    contactList
  },
  data() {
    return {
      query: ''
    }
  },
  created() {   
    this.query = this.$route.params.search === undefined ? '' : this.$route.params.search
    this.updateSearchValue(this.query)
  },
  methods: {
    updateSearchValue(value) {
      if (value.length > 0) {
        this.$router.push({
          name: "search",
          path: "/search/",
          params: { search: value },
          addToHistory: false
        });
      } else {
        this.$router.push({
          name: "root",
          path: "/",
          params: {},
          addToHistory: false
        });
      }

      this.filterContacts(value);
    },
    filterContacts(value = '') {
      this.$store.dispatch('contacts/getContacts', value)
    }
  }
}
</script>

<style scoped lang="sass">
.bravado-card-wrapper
  padding: 18px 5px 3px
  width: 100%
  margin: 65px auto

.search-field
  padding: 0 10px
  margin-right: 20px

.bravado-card
  height: 100%
  max-height: calc(100vh - 155px)
</style>