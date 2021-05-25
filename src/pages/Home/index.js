import { useEffect } from "react";
// import api from "../../services/api";

export default function Home() {
  useEffect(() => {
    const platform = "battlenet";
    const gamertag = "pierrebosch%231511";

    // api
    //   .get(`standard/matches/${platform}/${gamertag}?type=wz`)
    //   .then(({ data }) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    const testURL = `https://api.tracker.gg/api/v2/warzone/standard/matches/${platform}/${gamertag}?type=wz`;
    const myInit = {
      method: "HEAD",
      mode: "no-cors",
      origin: "https://cod.tracker.gg",
      "Access-Control-Allow-Origin": "https://cod.tracker.gg",
      referer: "https://cod.tracker.gg"
    };

    const myRequest = new Request(testURL, myInit);

    fetch(myRequest)
      .then(function (response) {
        return response;
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (e) {
        console.log(e);
      });
  }, []);
  return <h1>Ola</h1>;
}
