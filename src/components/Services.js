import React, { Component } from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';
import Title from './Title';
export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"free cocktail",
                info:'Lorem kbdkjSF kdf kjbsd  kgfa kasgd fgi sdig fugsd fiug dg f bs dfjgs gjgsjhf hsd '
            },
            {
                icon:<FaHiking/>,
                title:"Endless hicking",
                info:'Lorem kbdkjSF kdf kjbsd  kgfa kasgd fgi sdig fugsd fiug dg f bs dfjgs gjgsjhf hsd '
            },
            {
                icon:<FaShuttleVan/>,
                title:"free shuttle",
                info:'Lorem kbdkjSF kdf kjbsd  kgfa kasgd fgi sdig fugsd fiug dg f bs dfjgs gjgsjhf hsd '
            },
            {
                icon:<FaBeer/>,
                title:"Strongest beer",
                info:'Lorem kbdkjSF kdf kjbsd  kgfa kasgd fgi sdig fugsd fiug dg f bs dfjgs gjgsjhf hsd '
            }
        ]
    }
  render() {
    return (
      <section className="services">
        <Title title="services"/>
            <div className="services-center">
                {this.state.services.map((item,index) => {
                    return <article key={index} className="service">
                        <span>{item.icon}</span>
                        <h1>{item.title}</h1>
                        <p>{item.info}</p>
                    </article>
                })}
            </div>
      </section>
    )
  }
}
