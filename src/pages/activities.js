import React from 'react'
import {Link} from 'gatsby'
import Layout from "../components/layout"
import ActivitiesImage from '../components/activitiesImage'

const allActivities = [
    {
        id: 1,
        title: 'DISCOVERING TALENTS',
        activity: 'A lot of talents die on the grassroots due to lack of exposure all over the country. If those talents are discovered and put into the limelight, there would be so much difference.'
    },
    {
        id: 2,
        title: 'REACHING OUT TO THE NEEDY COMMUNITIES',
        activity: 'Providing a helping hand to the community and solutions to problems.'
    },
    {
        id: 3,
        title: 'NURTURING TALENTS',
        activity: 'Like a plant that lack watering and die, a lot of talented people go off without realizing their full potential. FAIRPLAY OFF THE PITCH is here to help sports men and women. We inspire, develop, guide and drive talented people in sports to step up and realize their full potential'
    },
    {
        id: 4,
        title: 'CREATING AWARENESS ABOUT THE POWER OF TALENTS',
        activity: "Sports have made a lot of people successful and nations great. And so there is a need to put a light on what sports can do so that the government include it the country's priorities and the public also put more emphasis on its promotion"
    },
    {
        id: 5,
        title: 'PROMOTING FAIRNESS IN SPORTS',
        activity: 'People are ignorant of their rights and they get violated but it is worse in the sports. FAIRPLAY OFF THE PITCH is here to fight for the rights of sports men and women and also make them aware of their rights.'
    },
    {
        id: 6,
        title: 'CREATING A LINK BETWEEN TALENTS AND THE STAKEHOLDERS',
        activity: 'There is a big barrier between talents and the people who can push them ie, authorities in the government and the sports fraternity, agents, trainees, sponsors and well wishers.'
    },
    {
        id: 7,
        title: 'CONNECTING PEOPLE',
        activity: 'We connect people of diverse cultures, gender, ethnicity, ages, religions, socioeconomic status, colors and perspectives to exchange ideas and craete lifelong friendships with a purpose of taking action to create an impact '
    },
    {
        id: 8,
        title: 'ADVOCATING FOR THE WELFARE OF SPORTS PEOPLE',
        activity: 'There is a lot of wealth in sports but the largest number of talented people do not benefit in their talents. Sports people can live better lives.'
    }
]

const activities = () => {
    return (
        <>
        <Layout>
            <section className="activities">
                <ActivitiesImage/>
                <div className="activitiesList">
                    {
                        allActivities.map((anActivity)=>{
                            return (
                                <div key={anActivity.id} className="singleActivity">
                                    <h3>{anActivity.title}</h3>
                                    <p>{anActivity.activity}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <Link to='/about'>Learn more about FAIR PLAY OFF-PITCH</Link>
            </section>
        </Layout>
        </>
    )
}


export default activities
