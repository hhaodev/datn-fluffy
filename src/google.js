import { gapi } from "gapi-script";

export const addEvent = (event) => {
  const DISCOVERY_DOC =
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest";

  function start() {
    gapi.client.init({
      clientId:
        "163100897361-4lefckdv5lp34gj63t0lrc583v8uoqcs.apps.googleusercontent.com",
      scope: "https://www.googleapis.com/auth/calendar.events",
      apiKey: "AIzaSyAeS-szN1rGLnnwWIW_ZT1AvH7z0xbGkBs",
      discoveryDocs: DISCOVERY_DOC,
    });
  }
  gapi.load("client:auth2", start);
};

//   gapi.client
//     .request({
//       path: `https://www.googleapis.com/auth/calendar.events`,
//       method: "POST",
//       body: event,
//       headers: {
//         "Content-type": "application/json",
//       },
//     })
//     .then(
//       (response) => {
//         return [true, response];
//       },
//       function (err) {
//         console.log(err);
//         return [false, err];
//       }
//     );
