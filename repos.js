   
const listRepoElem = document.querySelector(".repo-list");

const cleanReposList = () => {
  listRepoElem.innerHTML = "";
};

const renderRepos = (reposList) => {
  const reposListElems = reposList.map(({ name }) => {
    const listElem = document.createElement("li");
    listElem.classList.add("repo-list__item");
    listElem.textContent = name;
    return listElem;
  });
  cleanReposList();
  listRepoElem.append(...reposListElems);
};

export { renderRepos, cleanReposList };