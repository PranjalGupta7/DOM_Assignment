const cardArea = document.getElementById('cardArea');
const followBtn = document.getElementById('followBtn');
const url = 'https://jsonplaceholder.typicode.com/users/1'
var times = 0;

followBtn.onclick = () => {
    let red = Math.random()*253+1;
    let blue = Math.random()*253+1;
    let green = Math.random()*253+1;
    followBtn.style.backgroundColor = `rgba(${red},${blue},${green})`;
    followBtn.innerText = `Clicks: ${++times}`
    event.stopPropagation();
}

cardArea.onclick = async () => {
    const fetchedData = document.getElementById('fetchedData');
    fetchedData.innerHTML = "<B>Loading...</B>";

    fetch(url)
    .then((response) => response.json())
    .then((userObj) => fetchedData.innerHTML = renderData(userObj))
    .catch(() => {
        const error = new Error("Data can't be fetched right now");
        return fetchedData.innerHTML = `<b>Error Occured:\t</b>${error}`;
    })
}

const renderData = (user) => {
    return `
        <div id='fetchedUserCompany'>
            <p>${user.company.name}</p>
            <em>${user.company.catchPhrase}</em>
        </div>
        <div id = 'fetchedUserDetails'>
        Name: ${user.name}<br>
        User Name: ${user.username}<br>
        Email: ${user.email}<br>
        </div>
    `;
}