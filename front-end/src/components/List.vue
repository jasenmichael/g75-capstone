<template>
  <div class="">
    <EditForm></EditForm>

  </div>
</template>

<script>
// build nice layout view with edit button
// edit button will remove from list and add to queue, and the

  import EditForm from '@/components/EditForm'
  export default {
    components: {
      EditForm
    },
    data () {
      return {
        valid: false,
        select: []
      }
    }
  }
</script>

<style scoped></style>
