import React from "react"

const team = [
  {
    id: 1,
    names: "ali mukiibi",
    position: "board of directors",
    image: "/NA.png",
  },
  {
    id: 2,
    names: "nkunda felix",
    position: "board of directors",
    image: "/NA.png",
  },
  {
    id: 3,
    names: "mayeku henry",
    position: "board of directors",
    image: "/NA.png",
  },
  {
    id: 4,
    names: "tendo nicholas",
    position: "board of directors",
    image: "/NA.png",
  },
  {
    id: 5,
    names: "musoke",
    position: "board of directors",
    image: "/NA.png",
  },
  {
    id: 6,
    names: "willis muwanguzi",
    position: "board of directors",
    image: "/NA.png",
  },
  {
    id: 7,
    names: "muhammad kiwuuwa",
    position: "ceo",
    image: "/NA.png",
  },
  {
    id: 8,
    names: "sarah nabuuma",
    position: "secreatary general",
    image: "/NA.png",
  },
  {
    id: 9,
    names: "milley namyenya",
    position: "assistant secreatary general",
    image: "/NA.png",
  },
  {
    id: 10,
    names: "ssennono muzafaru",
    position: "pro",
    image: "/NA.png",
  },
  {
    id: 11,
    names: "shalom lekuru",
    position: "assistant pro",
    image: "/NA.png",
  },
  {
    id: 12,
    names: "ronald kimbugwe",
    position: "legal department",
    image: "/NA.png",
  },
  {
    id: 13,
    names: "derrick tekkwo",
    position: "legal department",
    image: "/NA.png",
  },
  {
    id: 14,
    names: "willis muwanguzi",
    position: "finance department",
    image: "/NA.png",
  },
  {
    id: 15,
    names: "joweria nakabugo",
    position: "finance department",
    image: "/NA.png",
  },
  {
    id: 16,
    names: "margret nabukeera",
    position: "finance department",
    image: "/NA.png",
  },
  {
    id: 17,
    names: "ali mukiibi",
    position: "finance department",
    image: "/NA.png",
  },
  {
    id: 18,
    names: "kyalisiima immy",
    position: "marketing department",
    image: "/NA.png",
  },
  {
    id: 19,
    names: "okiror denis",
    position: "marketing department",
    image: "/NA.png",
  },
  {
    id: 20,
    names: "immaculate mutoni",
    position: "marketing department",
    image: "/NA.png",
  },
  {
    id: 21,
    names: "elvis ochumu",
    position: "media department",
    image: "/NA.png",
  },
  {
    id: 22,
    names: "maxi francis",
    position: "media department",
    image: "/NA.png",
  },
  {
    id: 23,
    names: "ssekyanzi richard",
    position: "media department",
    image: "/NA.png",
  },
  {
    id: 24,
    names: "brazilian kigozi",
    position: "media department",
    image: "/NA.png",
  },
  {
    id: 25,
    names: "sarah muhammed",
    position: "media department",
    image: "/NA.png",
  },
  {
    id: 26,
    names: "huzaifah n",
    position: "media department",
    image: "/NA.png",
  },
  {
    id: 27,
    names: "mutesasira mubarak",
    position: "media department",
    image: "/NA.png",
  },
  {
    id: 28,
    names: "muwonge tom",
    position: "programme department",
    image: "/NA.png",
  },
  {
    id: 29,
    names: "tekkwo derrick",
    position: "programme department",
    image: "/NA.png",
  },
  {
    id: 30,
    names: "dr. paul ssendiwala",
    position: "health department",
    image: "/NA.png",
  },
  {
    id: 31,
    names: "dr. norma stephen",
    position: "health department",
    image: "/NA.png",
  },
  {
    id: 32,
    names: "dr. martin festus",
    position: "health department",
    image: "/NA.png",
  },
  {
    id: 33,
    names: "ganzi mugula",
    position: "education department",
    image: "/NA.png",
  },
  {
    id: 34,
    names: "ivan kiyiti",
    position: "education department",
    image: "/NA.png",
  },
  {
    id: 35,
    names: "faith lwanga",
    position: "events department",
    image: "/NA.png",
  },
  {
    id: 36,
    names: "ssalim mutebi",
    position: "events department",
    image: "/NA.png",
  },
  {
    id: 37,
    names: "temaligwe derrick",
    position: "events department",
    image: "/NA.png",
  },
  {
    id: 38,
    names: "esther norah",
    position: "events department",
    image: "/NA.png",
  },
  {
    id: 39,
    names: "doreen n",
    position: "events department",
    image: "/NA.png",
  },
  {
    id: 40,
    names: "margret nabukeera",
    position: "project department",
    image: "/NA.png",
  },
  {
    id: 41,
    names: "kabanda umar",
    position: "project department",
    image: "/NA.png",
  },
]

const Team = () => {
  return (
    <div className="team">
      <h3>Our management team</h3>
      <p>
        <strong>FAIR PLAY OFF-PITCH</strong> is filled with people of passion,
        committment, intelligence, energy and the will to take action to improve
        standards of living of sports people and the communities and create a
        difference at home and across the globe.
      </p>
      {team.map(member => {
        const { id, names, position, image } = member
        return (
          <div key={id} className="member">
            <img src={image} alt="image not availabe" />
            <h3>{names}</h3>
            <h4>{position}</h4>
          </div>
        )
      })}
    </div>
  )
}

export default Team
