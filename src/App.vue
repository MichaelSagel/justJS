<template>
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
    <issueElement
      id="issue"
      v-for="(issueElement, issueElementId) in issueArray"
      :key="issueElement"
      :issue="issueElement"
      @remove-issue="remove(issueElementId)"
    />
  </div>
</template>

<script setup>
import {
  ref,
} from 'vue'

import issueElement from './script/issue-element.vue'

const issue = ref();
const issueDescription = ref(null);
const issueButton = ref(null);

const issueArray = ref([]);

const createIssue = () => {
  issueArray.value.push(issue.value);
  issue.value = null;
}

const remove = (issue) => {
  issueArray.value.splice(issue, 1);
}
</script>

<style lang="scss">
@use 'ress';
</style>

<style lang="scss" scoped>
@use "./style/ress.css";
@use './style/space.scss';
@use './style/color.scss';

$header-height: 300px;
$header-form-height: 40px;
$header-form-width: 900px;
$issue-height: 45px;

body {
  height: 100vh;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: $header-height;
  background-color: color.$red;
}

.header__headline {
  color: color.$white;
}

.header__form {
  display: grid;
  grid-template-columns: 3fr 1fr;
  height: $header-form-height;
  width: $header-form-width;
}

.header__input-input {
  height: 100%;
  width: 100%;
  padding-left: space.$space-200;
  background-color: color.$white;
}

.header__input-button {
  height: 100%;
  background-color: color.$gray;
}

.list :nth-child(2n) {
  background: color.$mousey;
}

.issueElement {
  padding-left: space.$space-500;
  padding-right: space.$space-500;
  height: $issue-height;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: color.$silver;
}
</style>
