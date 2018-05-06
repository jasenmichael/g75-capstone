<template>
      <EditForm></EditForm>
</template>

<script>
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
