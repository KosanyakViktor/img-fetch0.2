import { fetchUserData, fetchRepositories } from './gateways.js'
import { renderRepos } from './repos.js';
import { renderUserData } from './user.js'
import { showSpinner, hideSpinner } from './spinner.js'


const defaultUser = {
    avatar_url: 'https://avatars3.githubusercontent.com/ul10001',
    name: '',
    location: '',
};

renderUserData(defaultUser);

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');

const onSearchUser = () => {
    showSpinner();
    const userName = userNameInputElem.value;
    fetchUserData(userName)
         .then(userData => {
             renderUserData(userData);
             return userData.repos_url;
         })
         .then(url => fetchRepositories(url))
         .then(reposList => { 
             renderRepos(reposList);
             hideSpinner();
         })
         .catch(() => {
            hideSpinner();
             alert(err.message);
         })
};

showUserBtnElem.addEventListener('click', onSearchUser)