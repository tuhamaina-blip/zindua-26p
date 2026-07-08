
// Check if data exists when the page loads
window.onload = () => {
    const saveUser = localStorage.getItem('userName');

    if (saverUser) {
        document.getElementById('displayArea').textContent = `Hello ${userName}!`
    }
};

function saveData() {
    const inputValue = document.getElementById('nameInput').value;

    if(inputValue.trim() !== "") {
        localStorage.setItem('userName', inputValue);
        document.getElementById('displayArea').textContent = `Hello ${inputValue}!`
        alert("Data has been saved successfully!")
    } else{
        alert("Please enter a name to save!")
    }
};

function clearData() {
    localStorage.removeItem('userName');
    document.getElementById('displayArea').textContent = 'No saved data yet.';
    document.getElementById("nameInput").value = "";
    alert("Data cleared!")
}

const Button = document.getElementById('btn').addEventListener('click', () => {
    alert("Data submitted!")
    saveData();
})
const clear = document.getElementById('btn').addEventListener('click', () => {
    clearData();
})