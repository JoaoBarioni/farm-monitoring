window.onload = function() {
  const fetchDataButton = document.getElementById('fetch-data-button');
  const dataContainer = document.getElementById('data-container');

  fetchDataButton.addEventListener('click', () => {
    fetch('https://5uexc8ukrd.execute-api.us-east-1.amazonaws.com/default')
      .then(response => response.json())
      .then(data => {
        dataContainer.innerHTML = JSON.stringify(data);
      })
      .catch(error => {
        dataContainer.innerHTML = 'An error occurred: ' + error;
      });
  });
};