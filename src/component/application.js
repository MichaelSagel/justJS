import {
  ref,
} from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

import test from './test.js'

export default {
  components: {
    test,
  },

  template: `
    <header class="header">
      <h2 class="header__headline">My To Do List</h2>
      <form class="header__form">
        <label>
          <input
            class="header__input-input"
            ref="issueDescription"
            type="text"
            placeholder="Title..."
            v-model="issue"
          />
        </label>
        <button
          class="header__input-button"
          ref="issueButton"
          type="button"
          @click="createIssue"
        >
          Add
        </button>
      </form>
    </header>

    <div class="list">
      <test
        id="test"
        v-for="(issueElement, issueElementId) in issueArray"
        :key="issueElement"
        :issue="issueElement"
        @remove-issue="remove(issueElementId)"
      ></test>
    </div>
  `,

  setup() {
    const issue = ref();
    const issueArray = ref([
    ]);
    const list = ref(null);
    const issueDescription = ref(null);
    const issueButton = ref(null);
    const createIssue = () => {
      issueArray.value.push(issue.value);
      issue.value = null;
    }
    const remove = (issue) => {
      issueArray.value.splice(issue, 1);
    }

    return {
      list,
      issueDescription,
      issueButton,
      issueArray,
      createIssue,
      issue,
      remove,
    };
  },
}
