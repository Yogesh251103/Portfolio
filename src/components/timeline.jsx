import React from "react"
import { Chrono } from "react-chrono";

const TimeLine = () => {
  const items = [{
    title: "May 1940",
    cardTitle: "CODEATHON BY VIRTUSA",
    url: "http://www.history.com",
    cardSubtitle:"DESIGNER AND DEVELOPER",
    cardDetailedText: "This codeathon marked the beginning of my journey in web development. I worked as a designer and developer for the first time and it was a great experience. I learned a lot and it was a great start to my career.",
    media: {
      type: "IMAGE",
      source: {
        url: "http://someurl/image.jpg"
      }
    }
  },{
    title: "May 1940",
    cardTitle: "CODEATHON BY CTS - CTS CAF`E",
    url: "http://www.history.com",
    cardSubtitle:"DEVELOPER",
    cardDetailedText: "I was a part of the team of 12 members and developed a react application for the first time for the given problem statement. The journey was amazing and helped me with my react basics.",
    media: {
      type: "IMAGE",
      source: {
        url: "http://someurl/image.jpg"
      }
    }
  },{
    title: "May 1940",
    cardTitle: "INTERNSHIP - MANICKAM ACADEMY",
    url: "http://www.history.com",
    cardSubtitle:"REACT AND REACT-NATIVE DEVELOPER",
    cardDetailedText: "I worked alongside with the experienced developers at the company in developing the application for the company. I got the opportunity to build the landing page for the company and work on building several modules in the mobile application. ",
    media: {
      type: "IMAGE",
      source: {
        url: "http://someurl/image.jpg"
      }
    }
  }];

  return (
    <div style={{ width: "full", height: "auto",alignSelf:"center" }}>
      <Chrono items={items} mode="VERTICAL_ALTERNATING"/>
    </div>
  )
}

export default TimeLine;