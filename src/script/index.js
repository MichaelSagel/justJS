const {
  createApp,
  ref,
  onMounted,
} = Vue;

createApp({
  setup() {
    const list = ref(null);
    const issueDescription = ref(null);
    const issueButton = ref(null);

    onMounted(() => {
      const createIssueElement = (text) => {
        const issue = document.createElement('li');
        issue.className = 'issue';
        issue.innerText = text;

        const cancel = document.createElement('button');
        cancel.innerText = 'Delete';
        cancel.className = 'delete';
        cancel.addEventListener('click', e => e.target.parentElement.remove(), {once: true});
        issue.appendChild(cancel);

        list.value.appendChild(issue);
      };

      issueButton.value.onclick = () => {
        createIssueElement(issueDescription.value.value);
        issueDescription.value.value = '';
      };
    });

    return {
      list,
      issueDescription,
      issueButton,
    };
  },
}).mount('#app')
