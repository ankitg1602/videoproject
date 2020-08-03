import React, { Component } from "react"
import Header from "../../components/Header"
import "./Dashboard.css"
import videoList from "./videosList.json"

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <div style={{ margin: "4rem 2rem", display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
          {videoList.map((video) => (
            <div className="video-card">
              <div className="video-image" style={{ backgroundImage: `url('${video.url}')` }}></div>
              <div className="video-details">
                <div className="video-title">{video.title}</div>
                <div className="video-rating">IMDb {video.rating}</div>
                <p className="video-decription">{video.description}</p>
                <div className="video-info">Genre: {video.genre}</div>
                <div className="video-info">Director: {video.director}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Dashboard
