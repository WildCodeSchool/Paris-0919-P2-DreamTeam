import React, { Component } from 'react';
import MusicPlayer from 'react-responsive-music-player';
import Image1 from './burroak1.png'
import './burroakrevenge.mp3'


const playlist = [
    {
      url: 'https://audio.jukehost.co.uk/b9f1ebff74ddef689977dcb6013c27339f6244b6/7c923005dff',
      cover: `${Image1}`,
      title: 'Revenge',
      artist: [
        'Burr Oak',
      ]
    },
    {
      url: 'https://audio.jukehost.co.uk/b9f1ebff74ddef689977dcb6013c27339f6244b6/06250cacd91',
      cover: 'https://i.ytimg.com/vi/X7atCxOnoMg/maxresdefault.jpg',
      title: 'Intergalactic',
      artist: [
        'I Hate Models'
      ]
    }
    // {
    //   url: 'https://audio.jukehost.co.uk/b9f1ebff74ddef689977dcb6013c27339f6244b6/06250cacd91',
    //   cover: 'https://i.ytimg.com/vi/X7atCxOnoMg/maxresdefault.jpg',
    //   title: 'Intergalactic',
    //   artist: [
    //     'I Hate Models'
    //   ]
    // }{
    //   url: 'https://audio.jukehost.co.uk/b9f1ebff74ddef689977dcb6013c27339f6244b6/06250cacd91',
    //   cover: 'https://i.ytimg.com/vi/X7atCxOnoMg/maxresdefault.jpg',
    //   title: 'Intergalactic',
    //   artist: [
    //     'I Hate Models'
    //   ]
    // }{
    //   url: 'https://audio.jukehost.co.uk/b9f1ebff74ddef689977dcb6013c27339f6244b6/06250cacd91',
    //   cover: 'https://i.ytimg.com/vi/X7atCxOnoMg/maxresdefault.jpg',
    //   title: 'Intergalactic',
    //   artist: [
    //     'I Hate Models'
    //   ]
    // }
  ]



class MusicPlay extends Component {
    
  render() {
    return (
      <div>
        <MusicPlayer playlist={playlist} />
      </div>
    );
  }
}

export default MusicPlay;