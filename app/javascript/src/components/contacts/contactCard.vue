<template lang="pug">
v-row#contactCard
  v-col(cols="3").px-0.py-0
    img.contact-avatar(
      :src="source.avatar"
      height="136px"
      width="134px"
      onerror="this.src = '../image-not-found.png';"
      :alt="source.name"
    )
  v-col.contact-card-data
    v-row.contact-card-body
      v-col.px-0.py-0
        v-row
          v-col.px-0.py-0
            .contact-name(v-html="getHighlightedTextName")
          v-col.px-0.py-0
            .contact-email(v-html="getHighlightedTextEmail")
        v-row
          .contact-title(v-html="getHighlightedTextTitle")
        v-row
          .contact-address(v-html="getHighlightedTextAddress + ', ' + getHighlightedTextCity") 
    v-row.actions
      v-btn.selection-button(text) Mark as Suitable
</template>

<script>
export default {
  name: 'Contacts',
  props: {
    index: {
      type: Number,
      default: 0
    },
    source: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data() {
    return {
      query: ''
    }
  },
  watch: {
    $route (to, from) {
      if (this.$route.params.search) {
        this.query = this.$route.params.search
      }
    }
  },
  created() {
    this.query = this.$route.params.search === undefined ? '' : this.$route.params.search
  },
  computed: {
    getHighlightedTextName() {
      return this.getHighlightedText(this.source.name)
    },
    getHighlightedTextEmail() {
      return this.getHighlightedText(this.source.email)
    },
    getHighlightedTextTitle() {
      return this.getHighlightedText(this.source.title)
    },
    getHighlightedTextAddress() {
      return this.getHighlightedText(this.source.address)
    },
    getHighlightedTextCity() {
      return this.getHighlightedText(this.source.city)
    }
  },
  methods: {
    getHighlightedText(text) {
      if (this.query === '') return text
      else {
        return text.replace(new RegExp(this.query, "gi"), (match) => {
          return (
            '<span style="background: #FFF73B;">' +
            match +
            "</span>"
          );
        });
      }
    }
  }
}
</script>

<style scoped lang="sass">
#contactCard
  background-color: #fafafa
  height: 136px
  max-height: 136px
  min-height: 136px
  max-width: 100%
  box-sizing: border-box
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24)
  margin: 20px 0

.contact-card-data
  overflow: hidden
  max-width: 100%
  margin: 10px 0px
  width: 100%
  margin-left: 6px
  padding-left: 10px

.contact-avatar
  background-color: #BBBBBB

.contact-name
  font-family: Roboto
  font-size: 24px
  line-height: 32px
  color: rgba(0, 0, 0, 0.87)
  white-space: nowrap
  text-overflow: ellipsis
  overflow: hidden
  max-width: 180px

.contact-email
  font-family: Roboto
  font-size: 14px
  line-height: 16px
  color: rgba(0, 0, 0, 0.54)
  float: right
  text-overflow: ellipsis
  white-space: nowrap
  overflow: hidden
  max-width: 150px

.contact-title
  font-family: Roboto
  font-weight: bold
  font-size: 14px
  line-height: 20px
  color: rgba(0, 0, 0, 0.543846)
  text-overflow: ellipsis
  white-space: nowrap
  overflow: hidden
  max-width: 350px

.contact-address
  font-family: Roboto
  font-size: 14px
  line-height: 20px
  color: rgba(0, 0, 0, 0.543846)
  text-overflow: ellipsis
  white-space: nowrap
  overflow: hidden
  max-width: 350px

.actions
  border-top: 1px solid rgba(0, 0, 0, 0.12)
  margin-top: 20px !important
  padding: 5px 20px

.contact-card-body
  margin: 0 20px

.selection-button
  font-family: Roboto !important
  font-size: 14px !important
  color: #009688 !important
</style>
