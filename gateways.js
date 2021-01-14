const fetchUserData = (userName) =>{
  const response = await fetch(`https://api.github.com/users/${userName}`)
    if (response.ok) {
       await response.json();
    }
    throw new Error("Failed to load data");
  };

const fetchRepositories = (url) => {
  const response = await fetch(url);
    if (response.ok) {
       await response.json();
    }
    throw alert(new Error("Failed to load data"));
 };

export { fetchUserData, fetchRepositories }
