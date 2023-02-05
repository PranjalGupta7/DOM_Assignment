const inputBtn = document.getElementById('inputBtn');
const listArea = document.getElementById('listArea');

console.log(inputBtn);
console.log("in js");
inputBtn.onclick = function () {
    var inputString = String(document.getElementById('inputTxt').value).trim();
    var obj = {id: "ele".concat(Date.now()), data: inputString};
    updateList(obj);
};

function updateList(item){
    let ele = document.createElement('li');
    ele.id = item.id;
    ele.innerText = item.data;
    ele.onclick = function deleteFromList() {
         ele.parentNode.removeChild(ele);
    };
    listArea.appendChild(ele);
}
