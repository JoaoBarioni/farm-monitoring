window.onload = function () {
  const fetchDataButton = document.getElementById('fetch-data-button');
  const dataContainer = document.getElementById('data-container');

  fetchDataButton.addEventListener('click', () => {
    fetch('https://5uexc8ukrd.execute-api.us-east-1.amazonaws.com/Stage1/requestAPI')
      .then(response => response.json())
      .then(data => {
        dataContainer.innerHTML = JSON.stringify(data);
      })
      .catch(error => {
        dataContainer.innerHTML = 'An error occurred: ' + error;
      });
  });

  // Add your JavaScript code here
  const heightValue = document.querySelector("#height-value");
  const temperatureValue = document.querySelector("#temperature-value");
  const waterFluxValue = document.querySelector("#water-flux-value");
  const waterLevelValue = document.querySelector("#water-level-value");

  // Replace the placeholder values with actual data
  heightValue.textContent = "1234 m";
  temperatureValue.textContent = "23°C";
  waterFluxValue.textContent = "456 L/s";
  waterLevelValue.textContent = "789 m";

};