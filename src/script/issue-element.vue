<template>
  <div
    class="issueElement"
  >
    {{ issue }}
    <button
      class="delete"
      @click="deleteIssue"
    >
      Delete
    </button>
  </div>
</template>

<script setup>
const props = defineProps(['issue'])
const emit = defineEmits(['remove-issue'])

const deleteIssue = () => {
  emit('remove-issue', props.issue);
}
</script>

<style lang="scss" scoped>
@use '../style/space.scss';
@use '../style/color.scss';

$delete-height: 45px;


.delete:hover {
  height: $delete-height;
  padding: space.$space-200;
  background-color: color.$red;
}
</style>
