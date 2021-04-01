function getImages(json) {
  return { type: 'GET_IMAGE', payload: json.message };
}

function requestImage() {
  return { type: 'REQUEST_IMAGE' };
}

function failedRequest(error) {
  return { type: 'FAILED_REQUEST', payload: error };
}

export default function fetchDog() {
  return async (dispatch) => {
    try {
      dispatch(requestImage());
      const dogResponse = await fetch('https://dog.ceo/api/breeds/image/random');
      const dogJson = await dogResponse.json();
      dispatch(getImages(dogJson));
    } catch (e) {
      failedRequest(e);
    }
  };
}
