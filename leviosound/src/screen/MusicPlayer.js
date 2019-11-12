import React, { Component } from 'react';
import MusicPlayer from 'react-responsive-music-player';
import './burroak1.png'
import './burroakrevenge.mp3'


const playlist = [
    {
      url: 'https://audio.jukehost.co.uk/b9f1ebff74ddef689977dcb6013c27339f6244b6/7c923005dff',
      cover: './burroak1.png',
      title: 'Burroak - Revenge',
      artist: [
        'Burr Oak',
      ]
    },
    {
      url: 'path/to/mp3',
      cover: 'path/to/jpg',
      title: 'Bedtime Stories',
      artist: [
        'Jay Chou'
      ]
    }
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