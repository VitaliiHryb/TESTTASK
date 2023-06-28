export function fetchToken() {
  fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
    .then(function (response) {
      if (!response.ok) {
        throw new Error('Failed to fetch token');
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.error('Error:', error);
    });
}

export function fetchPositions() {
  fetch('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
    .then(function (response) {
      if (!response.ok) {
        throw new Error('Failed to fetch token');
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.error('Error:', error);
    });
}

export function fetchUsers() {
  return fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users')
    .then(function (response) {
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      return response.json();
    })
    .then(function (data) {
      return data; // Return the data received from the API
    })
    .catch(function (error) {
      console.error('Error:', error);
      throw error; // Rethrow the error to be caught in the component
    });
}

export function fetchUser(id) {
  fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users/${id}`)
    .then(function (response) {
      if (!response.ok) {
        throw new Error('Failed to fetch token');
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      console.error('Error:', error);
    });
}
