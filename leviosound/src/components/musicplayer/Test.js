import React from 'react';
import { withSoundCloudAudio } from 'react-soundplayer/addons';

const clientId = 'YOUR CLIENT ID';
const resolveUrl = 'https://soundcloud.com/ksmtk/chronemics';

// you can even use functional components!
const CustomPlayer = withSoundCloudAudio(props => {
  const { soundCloudAudio, playing, track } = props;
  const play = () => {
    if (playing) {
      soundCloudAudio.pause();
    } else {
      soundCloudAudio.play();
    }
  };

  if (!track) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{track.title}</h2>
      <h3>{track.user.username}</h3>
      <button onClick={() => play()}>
        {playing ? 'Pause' : 'Play'}
      </button>
    </div>
  );
});

class App extends React.Component {
  render() {
    return (
      <CustomPlayer
        resolveUrl={resolveUrl}
        clientId={clientId}
        onReady={() => {
          console.log('player url ready!');
        }} />
    );
  }
}

React.render(<App />, document.getElementById('app'));