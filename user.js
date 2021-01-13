const userAvatarElem = document.querySelector(".user__avatar");
const userNameElem = document.querySelector(".user__name");
const userLocationElem = document.querySelector(".user__location");

const renderUserData = (userData) => {
  const { avatar_url, name, location } = userData;
  userAvatarElem.src = avatar_url;
  userNameElem.textContent = name;
  console.log('Start');
  userLocationElem.textContent = location ? `from ${location}` : "";
};

export {renderUserData};