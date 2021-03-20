import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const allActivities = [
  {
    id: 1,
    title: "discovering talents",
    activity:
      "Uganda is the most youthful nation and has a lot of talents but a big percentage of them die on the grassroots without fully expressing to the world. Perhaps, the boy you do not know somewhere deep in the village could be the next Majidu Musisi or replicate the success of Cristiano Ronaldo but he will never be because his talent lacked exposure. FAIR PLAY OFF-PITCH tasks it's self with the beautiful work of searching and searching of these talents and expose them to the world so that they do not go unnoticed.",
  },
  {
    id: 2,
    title: "Preparing athletes for life after retirement",
    activity:
      "The time for active sports is short, usually from 20 years to 30 or 35 implying that athletes have a limited time to pocket something for themselves which will aid them when they are no longer playing sport. Unfortunately, for most of them, the moment they stop playing stop is the when their lives start moving backwards. They live poor life standards yet at some point they had big chunks of money. We at FAIRPLAY are here to solve this so that by the time athletes go for retirement from active sport, they have some savings or investments enough for them to live a better life standard.",
  },
  {
    id: 3,
    title:
      "Promoting humanity in this sports sector, both on and off the pitch and the community at large",
    activity:
      "Our society has degraded that almost everything is done selfishly in the name of money plucking out humanity in the hearts of people but this can only benefit us only in a negative way. We at FAIR PLAY OFF-PITCH teach how people can co-operate only in win-win situations. Only this way can we boost our sports sector and the whole society. We promote playing fairly in all circumstances.",
  },
  {
    id: 4,
    title: "Nurturing and developing the young talents",
    activity:
      "Lacking the right guidance, a lot of talented people go off the right track and end up not realizing their full potential. These people need spiritual, mental, social and physical guidance so as to turn their talents into diamonds. FAIR PLAY OFF-PITCH provides this guidance and mentorship to them",
  },
  {
    id: 5,
    title: "Bridging the gap between talent and public",
    activity:
      "This is especially true in areas where sports is just in it's infancy. People don't take sports seriously and consider it only for leisure yet sports is so powerful as it unites people but more importantly it has lots of money. Sports have made a lot of people successful and nations great. And so there is a need to put a light on what sports can do so that the public and the government give it it's rightful position in improving standards of living and the development of the country.",
  },
  {
    id: 6,
    title: "fighting vices in athletes",
    activity:
      "Indiscipline, drugs and immorality are some of the factors that causes careers of athletes to stall and fall in Uganda and internationally. Knowing the impact of this to sports and the society, FAIR PLAY OFF-PITCH tasks itself to fighting against such vices and more.",
  },
  {
    id: 7,
    title: "Reaching out to needy communities",
    activity:
      "Even though we cannot fulfil all of the needs of everyone, we reach out to vulnerable people with whatever is available for their assistance.",
  },
]

const Activity = ({ id, title, activity }) => {
  const [readMore, setReadMore] = useState(false)
  return (
    <div key={id} className="singleActivity">
      <h3>{title}</h3>
      <p>
        {readMore ? activity : activity && `${activity.substring(0, 150)}`}
        <button onClick={() => setReadMore(!readMore)} className="read-more">
          {readMore ? "...show less" : "read more..."}
        </button>
      </p>
    </div>
  )
}

const Activities = () => {
  const [activities, setActivities] = useState(allActivities)
  return (
    <Layout>
      <section className="activities">
        <div className="page-title">
          <h2>our causes</h2>
        </div>
        <div className="activitiesList">
          {activities.map(cause => {
            return <Activity {...cause} />
          })}
        </div>
        <Link to="/about">Learn more about FAIR PLAY OFF-PITCH</Link>
      </section>
    </Layout>
  )
}

export default Activities
