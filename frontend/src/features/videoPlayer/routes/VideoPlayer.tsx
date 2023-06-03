import 'vidstack/styles/defaults.css';

import {
  MediaOutlet,
  MediaPlayButton,
  MediaPlayer,
  MediaSliderValue,
  MediaTimeSlider,
} from '@vidstack/react';

export const VideoPlayer = ({
  src,
  title = 'test',
  poster = 'https://media-files.vidstack.io/poster.png',
  vttfile = '/sample.vtt',
}: {
  src: string;
  title?: string;
  poster?: string;
  vttfile?: string;
}) => {
  return (
    <MediaPlayer title={title} src={src} poster={poster}>
      <MediaOutlet>
        <track src={vttfile} srcLang="en-US" kind="chapters" default />
        <MediaPlayButton />
        <MediaTimeSlider>
          <div slot="preview">
            <span part="chapter-title">Capter Title</span>
            <MediaSliderValue type="pointer" format="time" />
          </div>
        </MediaTimeSlider>
      </MediaOutlet>
    </MediaPlayer>
  );
};
