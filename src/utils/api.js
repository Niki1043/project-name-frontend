//Check for server response with promise state
export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error ${res.status}`);
  }
};

async function fetchProfile(token) {
  const result = await fetch("https://api.spotify.com/v1/me", {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });

  return await result.json();
}

async function getTopTracks(token) {
  const result = await fetch(
    "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=10",
    {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  return await result.json();
}

//https://api.spotify.com/v1/recommendations?limit=10&market=PL&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA%2C2Q9nA56DKKJhj4cHMbHlAS",

async function getRecommendations(topTrackId, token) {
  const result = await fetch(
    `https://api.spotify.com/v1/recommendations?limit=10&market=US&seed_tracks=${topTrackId}
    `,
    {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  return await result.json();
}

export { fetchProfile, getTopTracks, getRecommendations };

// //Post Token request
// export const getToken = (CLIENT_ID, CLIENT_SECRET) => {
//   return fetch("https://accounts.spotify.com/api.token", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//     body: "grant_type=client_credentials&client_id=CLIENT_ID&cleint_secret=CLIENT_SECRET",
//   });
// };

// // Generate Code Verifier

// function generateRandomString(length) {
//   let text = "";
//   let possible =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

//   for (let i = 0; i < length; i++) {
//     text += possible.charAt(Math.floor(Math.random() * possible.length));
//   }
//   return text;
// }

// const digest = await window.crypto.subtle.digest("SHA-256", data);

// async function generateCodeChallenge(codeVerifier) {
//   function base64encode(string) {
//     return btoa(String.fromCharCode.apply(null, new Uint8Array(string)))
//       .replace(/\+/g, "-")
//       .replace(/\//g, "_")
//       .replace(/=+$/, "");
//   }

//   const encoder = new TextEncoder();
//   const data = encoder.encode(codeVerifier);
//   const digest = await window.crypto.subtle.digest("SHA-256", data);

//   return base64encode(digest);
// }

// const clientId = "ebaf5ea92e1a4c00a49e87c04ca73fec";
// const redirectUri = "http://localhost:3000/profile";

// let codeVerifier = generateRandomString(128);

// generateCodeChallenge(codeVerifier).then((codeChallenge) => {
//   let state = generateRandomString(16);
//   let scope = "user-read-private user-read-email";

//   localStorage.setItem("code_verifier", codeVerifier);

//   let args = new URLSearchParams({
//     response_type: "code",
//     client_id: clientId,
//     scope: scope,
//     redirect_uri: redirectUri,
//     state: state,
//     code_challenge_method: "S256",
//     code_challenge: codeChallenge,
//   });

//   window.location = "https://accounts.spotify.com/authorize?" + args;
// });

// const urlParams = new URLSearchParams(window.location.search);
// let code = urlParams.get("code");

// let codeVerifierGet = localStorage.getItem("code_verifier");

// let body = new URLSearchParams({
//   grant_type: "authorization_code",
//   code: code,
//   redirect_uri: redirectUri,
//   client_id: clientId,
//   code_verifier: codeVerifierGet,
// });

// const response = fetch("https://accounts.spotify.com/api/token", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/x-www-form-urlencoded",
//   },
//   body: body,
// })
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("HTTP status " + response.status);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     localStorage.setItem("access_token", data.access_token);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

// async function getProfile(accessToken) {
//   let accessToken = localStorage.getItem("access_token");

//   const response = await fetch("https://api.spotify.com/v1/me", {
//     headers: {
//       Authorization: "Bearer " + accessToken,
//     },
//   });

//   const data = await response.json();
//   console.log(data);
// }
