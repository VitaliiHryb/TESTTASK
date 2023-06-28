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
  fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users')
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
