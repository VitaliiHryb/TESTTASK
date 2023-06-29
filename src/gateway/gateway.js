export function fetchToken() {
  return fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
    .then(function (response) {
      if (!response.ok) {
        throw new Error('Failed to fetch token');
      }
      return response.json();
    })
    .catch(function (error) {
      console.error('Error:', error);
    });
}

export function fetchPositions() {
  return fetch(
    'https://frontend-test-assignment-api.abz.agency/api/v1/positions',
  )
    .then(function (response) {
      if (!response.ok) {
        throw new Error('Failed to fetch token');
      }
      return response.json();
    })
    .catch(function (error) {
      console.error('Error:', error);
    });
}

export function fetchUsers(page, count) {
  const url = `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=${count}`;
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error fetching users:', error);
    });
}

export function fetchUser(id) {
  return fetch(
    `https://frontend-test-assignment-api.abz.agency/api/v1/users/${id}`,
  )
    .then(function (response) {
      if (!response.ok) {
        throw new Error('Failed to fetch token');
      }
      return response.json();
    })
    .catch(function (error) {
      console.error('Error:', error);
    });
}

export const postUser = (positionId, name, email, phone, photo, token) => {
  const formData = new FormData();
  formData.append('position_id', positionId);
  formData.append('name', name);
  formData.append('email', email);
  formData.append('phone', phone);
  formData.append('photo', photo);

  return fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
    method: 'POST',
    body: formData,
    headers: {
      Token: token,
    },
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      if (!data.success) {
        throw new Error('Failed to submit user');
      }
      return data; // Return the data received from the API
    })
    .catch(error => {
      console.error('Error:', error);
      throw error; // Rethrow the error to be caught in the component
    });
};
