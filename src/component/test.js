export default {
  template: `
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
  `,

  props: ['issue'],
  emits: ['remove-issue'],

  setup(props, { emit }) {
    const deleteIssue = () => {
      emit('remove-issue', props.issue);
    }

    return {
      deleteIssue,
    };
  },
}