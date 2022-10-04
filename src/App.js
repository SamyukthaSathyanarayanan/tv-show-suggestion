import "./styles.css";
import { useState } from "react";

export default function App() {
  var tvshowDictionary = {
    Netflix: [
      {
        name: "Money Heist",
        rating: "8.2/10",
        src:
          "https://m.media-amazon.com/images/M/MV5BODI0ZTljYTMtODQ1NC00NmI0LTk1YWUtN2FlNDM1MDExMDlhXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_FMjpg_UX1000_.jpg",
        description:
          "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain"
      },
      {
        name: "Stranger Things",
        rating: "8.7/10",
        src:
          "https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
        description:
          "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back."
      },
      {
        name: "Dark",
        rating: "8.7/10",
        src:
          "https://m.media-amazon.com/images/M/MV5BOTk2NzUyOTctZDdlMS00MDJlLTgzNTEtNzQzYjFhNjA0YjBjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_.jpg",
        description:
          "A family saga with a supernatural twist, set in a German town where the disappearance of two young children exposes the relationships among four families."
      },
      {
        name: "Peaky Blinders",
        rating: "8.8/10",
        src:
          "https://m.media-amazon.com/images/M/MV5BZjYzZDgzMmYtYjY5Zi00YTk1LThhMDYtNjFlNzM4MTZhYzgyXkEyXkFqcGdeQXVyMTE5NDQ1MzQ3._V1_.jpg",
        description:
          "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby."
      },
      {
        name: "Sacred Games",
        rating: "8.2/10",
        src:
          "https://m.media-amazon.com/images/M/MV5BYTMzYTQ1NzAtOGY4OC00ZGM5LThiMmUtMzgzZjgzNzNjZjJmXkEyXkFqcGdeQXVyODk2ODI3MTU@._V1_.jpg",
        description:
          "A link in their pasts leads an honest cop to a fugitive gang boss, whose cryptic warning spurs the officer on a quest to save Mumbai from cataclysm."
      }
    ],
    "Amazon Prime": [
      {
        name: "The Mentalist",
        rating: "8.1/10",
        src:
          "https://m.media-amazon.com/images/M/MV5BMTQ5OTgzOTczM15BMl5BanBnXkFtZTcwMDM2OTY4MQ@@._V1_.jpg",
        description:
          "A famous psychic outs himself as a fake, and starts working as a consultant for the California Bureau of Investigation so he can find Red John, the madman who killed his wife and daughter."
      },
      {
        name: "Suits",
        rating: "8.5/10",
        src:
          "https://m.media-amazon.com/images/M/MV5BNmVmMmM5ZmItZDg0OC00NTFiLWIxNzctZjNmYTY5OTU3ZWU3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
        description:
          "On the run from a drug deal gone bad, brilliant college dropout Mike Ross finds himself working with Harvey Specter, one of New York City's best lawyers."
      },
      {
        name: " Seinfeld",
        rating: "8.9/10",
        src:
          "https://m.media-amazon.com/images/M/MV5BZjZjMzQ2ZmUtZWEyZC00NWJiLWFjM2UtMzhmYzZmZDcxMzllXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg",
        description:
          "The continuing misadventures of neurotic New York City stand-up comedian Jerry Seinfeld and his equally neurotic New York City friends."
      },
      {
        name: "The Office",
        rating: "9/10",
        src:
          "https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_FMjpg_UX1000_.jpg",
        description:
          "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium."
      },
      {
        name: "This Is Us",
        rating: "8.7/10",
        src:
          "https://m.media-amazon.com/images/M/MV5BNzYxYWY3YzctZjRiNS00MTViLTk5OTYtZDEyNzAwNGE5ODY0XkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_FMjpg_UX1000_.jpg",
        description:
          "A heartwarming and emotional story about a unique set of triplets, their struggles and their wonderful parents."
      }
    ],
    Hotstar: [
      {
        name: "Chernobyl",
        rating: "9.4/10",
        src:
          "https://m.media-amazon.com/images/M/MV5BMmI2OTMxZTUtMTM5OS00MGNiLWFhNGMtYzJiODUwYjRmODA5XkEyXkFqcGdeQXVyMTM0NTc2NDgw._V1_.jpg",
        description:
          "In April 1986, an explosion at the Chernobyl nuclear power plant in the Union of Soviet Socialist Republics becomes one of the world's worst man-made catastrophes."
      },
      {
        name: "Game of Thrones",
        rating: "9.1/10",
        src:
          "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
        description:
          "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia."
      },
      {
        name: "Modern Family",
        rating: "8.5/10",
        src:
          "https://m.media-amazon.com/images/M/MV5BNTU1NTFmOTEtN2ExZC00NDA1LTgwZWItMzAxMGI0MWEzM2QzXkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg",
        description:
          "Three different but related families face trials and tribulations in their own uniquely comedic ways."
      },
      {
        name: "Homeland",
        rating: "8.3/10",
        src:
          "https://m.media-amazon.com/images/M/MV5BM2Q1YzUxYTYtOTkwZC00Mjk3LTllZWQtNThjYjllZjE2OTQwXkEyXkFqcGdeQXVyOTA3MTMyOTk@._V1_FMjpg_UX1000_.jpg",
        description:
          "A bipolar CIA operative becomes convinced a prisoner of war has been turned by al-Qaeda and is planning to carry out a terrorist attack on American soil."
      },
      {
        name: "House of Cards",
        rating: "8.7/10",
        src:
          "https://m.media-amazon.com/images/M/MV5BODM1MDU2NjY5NF5BMl5BanBnXkFtZTgwMDkxNTcwNjM@._V1_.jpg",
        description:
          "A Congressman works with his equally conniving wife to exact revenge on the people who betrayed him."
      }
    ]
  };

  var tvshows = Object.keys(tvshowDictionary);
  var [show, setShow] = useState("Netflix");

  function tvshowClickHandler(show) {
    setShow(show);
  }
  return (
    <div className="App">
      <h1>
        <strong>Top Tv Series Suggestions</strong>
      </h1>
      <p>
        <i>This web page displays top 5 Tv Shows in different OTT platform.</i>
      </p>
      {tvshows.map((show) => {
        return (
          <button
            key={show}
            onClick={() => tvshowClickHandler(show)}
            className="btn-shows"
            style={{ cursor: "pointer" }}
          >
            {show}
          </button>
        );
      })}
      <div>
        {tvshowDictionary[show].map((tvList) => {
          return (
            <div className="container">
              <div className="box">
                <h3 key={tvList.name}>{tvList.name}</h3>
                <li style={{ fontSize: "90%" }}>{tvList.rating}</li>
                <h5>
                  <i>A little about it:</i>
                </h5>
                <li style={{ maxWidth: "85%" }}>{tvList.description}</li>
              </div>
              <div className="image">
                <img className="img" alt="{tvList.name}" src={tvList.src}></img>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
