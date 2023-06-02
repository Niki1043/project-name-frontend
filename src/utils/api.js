//Check for server response with promise state
export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error ${res.status}`);
  }
};

async function fetchProfile(token) {
  return await fetch("https://api.spotify.com/v1/me", {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  }).then((res) => checkResponse(res));
}

async function getTopTracks(token) {
  return await fetch(
    "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=10",
    {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    }
  ).then((res) => checkResponse(res));
}

async function getRecommendations(topTrackId, token) {
  return await fetch(
    `https://api.spotify.com/v1/recommendations?limit=10&market=US&seed_tracks=${topTrackId}
    `,
    {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    }
  ).then((res) => checkResponse(res));
}

export { fetchProfile, getTopTracks, getRecommendations };
