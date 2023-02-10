const fetchDataButton = document.getElementById('fetch-data-button');
const dataContainer = document.getElementById('data-container');

fetchDataButton.addEventListener('click', () => {
  fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
      dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => {
      dataContainer.innerHTML = 'An error occurred: ' + error;
    });
});