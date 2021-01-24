import React from 'react';
import config from './config';
import './App.css';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      videos: [],
    }
  }

  setVideos(videos) {
    this.setState({
      videos
    })
  }


  componentDidMount() {
    let query = 'dogs';
    const maxResults = 10; // default 5
    const endpoint = 'https://www.googleapis.com/youtube/v3/search?part=snippet';

    const url = `${endpoint}
      &key=${config.API_KEY}
      &type=video
      &q=${query}
      &maxResults=${maxResults}
      `;

    const options = {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      }
    };

    // console.log(config.API_KEY);
    // console.log(url);

    fetch(url, options)
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => Promise.reject(error))
        }
        return res.json();
      })
      .then(data => {
        // console.log(data)
        this.setVideos(data.items);
      })
      .catch(error => {
        console.error(error);
      })
  }


  render() {
    console.log(this.state)
    return (
      <main className="App">
        init boilerplate
      </main>
    );
  }

}

