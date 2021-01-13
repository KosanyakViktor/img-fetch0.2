const fetchUserData = (userName) =>
  fetch(`https://api.github.com/users/${userName}`).then((response) => {
    if (response.ok) {
      return response.json();
    }
     alert("Failed to load data");
  });

const fetchRepositories = (url) =>
  fetch(url).then((response) => {
    if (response.ok) {
      return response.json();
    }
    alert("Failed to load data");
  });

export { fetchUserData, fetchRepositories };
