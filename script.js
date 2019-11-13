function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

const profileUrl = 'https://api.github.com/users/ahmdkla';
const followingUrl = 'https://api.github.com/users/ahmdkla/following';
const followerUrl = 'https://api.github.com/users/ahmdkla/followers';

const fetchProfile = () => {
    fetch(profileUrl).then(response => {
        return response.json();
    }).then(data => {
        let getProfile = document.getElementById('profile');
        let name = createNode('h1');
        name.innerHTML = data.login;
        name.classList.add('text-center')
        let profilePicture = createNode('img');
        profilePicture.src = data.avatar_url;
        profilePicture.classList.add('rounded-circle')
        profilePicture.classList.add('img-fluid')
        profilePicture.classList.add('img-profile')
        append(getProfile, profilePicture);
        append(getProfile, name);
    })
}

const fetchFollowing = () => {
    fetch(followingUrl).then(response => {
        return response.json();
    }).then(data => {
        let getFollowing = document.getElementById('following');
        data.map(item => {
            let division = document.createElement('div')
            let eachList = document.createElement('p');
            let eachImage = document.createElement('img');
            eachList.innerHTML = item.login;
            eachImage.src = item.avatar_url;
            eachList.classList.add('text-center');
            eachImage.classList.add('center')
            append(division, eachImage);
            append(division, eachList);
            append(getFollowing, division);
        })

    })
}


const fetchFollower = () => {
    fetch(followerUrl).then(response => {
        return response.json();
    }).then(data => {
        let getFollower = document.getElementById('follower');
        data.map(item => {
            let division = document.createElement('div')
            let eachList = document.createElement('p');
            let eachImage = document.createElement('img');
            eachList.innerHTML = item.login;
            eachImage.src = item.avatar_url;
            eachList.classList.add('text-center');
            eachImage.classList.add('center')
            append(division, eachImage);
            append(division, eachList);
            append(getFollower, division);
        })

    })
}

fetchFollowing();
fetchProfile();
fetchFollower()