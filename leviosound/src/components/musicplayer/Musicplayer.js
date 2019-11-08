import React from "react"
import { PlayButton, Progress, Icons } from 'react-soundplayer/components';
import { withSoundCloudAudio } from 'react-soundplayer/addons';





class Musicplayer extends React.Component {
    
    render() {
        const { SoundCloudLogoSVG } = Icons;
        const EnhancedPlayer = withSoundCloudAudio(Player);

            
            return (
                <div className='Musicplayer'>
                    <PlayButton
                    className={String}
                    playing={Boolean}
                    seeking={Boolean}
                    seekingIcon={ReactElement}
                    onTogglePlay={Function}
                    soundCloudAudio={instanceof SoundCloudAudio}
                    />
                    <NextButton
                    className={String}
                    onNextClick={Function}
                    soundCloudAudio={instanceof SoundCloudAudio} 
                    />
                    <PrevButton
                    className={String}
                    onPrevClick={Function}
                    soundCloudAudio={instanceof SoundCloudAudio} 
                    />
                    <VolumeControl
                    className={String}
                    buttonClassName={String}
                    rangeClassName={String}
                    volume={Number} // in range 0-1
                    onVolumeChange={Function}
                    onToggleMute={Function}
                    soundCloudAudio={instanceof SoundCloudAudio} 
                    />
                    <Progress
                    className={String}
                    innerClassName={String}
                    value={Number} // in range 0-100
                    onSeekTrack={Function}
                    soundCloudAudio={instanceof SoundCloudAudio} 
                    />
                    <Timer
                    className={String}
                    duration={Number} // in seconds
                    currentTime={Number} 
                    /> 
                    <Cover
                    className={String}
                    trackName={String}
                    artistName={String}
                    backgroundUrl={String} 
                    />
                    <EnhancedPlayer
                    clientId={String}
                    resolveUrl={String}
                    streamUrl={String}
                    onStartTrack={Function}
                    onStopTrack={Function}
                    onReady={Function} 
                    />


                </div>
                )

        } 

        
    }
}

export default Musicplayer;