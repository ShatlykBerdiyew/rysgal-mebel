import React, { useEffect, useState } from "react";
import Header from "../components/header";
import { BASE_URL } from "../store/urls";
import s from "../styles/media.module.css";

const Media = () => {
  const [loading, setLoading] = useState(false);
  const [mediaList, setMediaList] = useState([]);

  useEffect(() => {
    if (mediaList && mediaList.length === 0) {
      console.log("media listi almaga bashlady!");
      setLoading(true);
      fetch(BASE_URL + "/api/products/media-list/")
        .then((res) => res.json())
        .then((json) => setMediaList(json.data.results))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, []);

  console.log("media Listin ozi: ", mediaList);

  return (
    <div className={s.media}>
      <Header />
      <div className={s.container}>
        <h1>Karhanamyzyn durmushyndan pursatlar</h1>
        {loading ? (
          <h2>loading ...</h2>
        ) : (
          mediaList?.map((item) => (
            <div key={item.id} className={s.media__item}>
              <h2>{item.title_tm}</h2>
              <video controls={true} src={BASE_URL + item.video} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Media;
