(() => {
  const list = document.querySelector('.list');
  const issueDescription = document.querySelector('.header__input-input');
  const issueButton = document.querySelector('.header__input-button');

  const createIssueElement = (text) => {
    const issue = document.createElement('li');
    issue.className = 'issue';
    issue.innerText = text;

    const cancel = document.createElement('button');
    cancel.innerText = 'Delete';
    cancel.className = 'delete';
    cancel.addEventListener('click', e => e.target.parentElement.remove(), {once: true});
    issue.appendChild(cancel);

    list.appendChild(issue);
  };


  issueButton.onclick = () => {
    createIssueElement(issueDescription.value);
    issueDescription.value = '';
  };
})();
