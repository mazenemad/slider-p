export default function RightSlide7(props) {
  return (
    <>
      <div style={{opacity:props.start?1:0,marginTop:'2px'}} className="content__main">
        {/* <div style={{width:'100%'}}> */}
        <h2>Podcasts</h2>
        <h3>Rare Bird Radio - Conversation with Tyler Knight</h3>
        <a
          href="
            https://soundcloud.com/rarebirdlit/adam-novak-in-conversation-with-tyler-knight" 
          target="_blank"
        >
          <button className="custom-btn btn-12 sounds">
            <span>Listen</span>
            <span style={{fontSize:"17px"}}>SoundCloud</span>
          </button>
        </a>
        <a
          href="https://podyssey.fm/podcast/itunes1024191458/episode17505388-Novak-conversation-Tyler-Knight-Rare-Bird-Radio"
          target="_blank"
        >
          <button className="custom-btn btn-12">
            <span>Listen</span>
            <span>iTunes</span>
          </button>
        </a>
        <h3>Final Draft - Freaks of the Industry</h3>
        <a
          href="https://blog.finaldraft.com/write-on-with-wmes-head-of-story-adam-novak?hs_amp=true "
          target="_blank"
        >
          <button className="custom-btn btn-12">
            <span>Listen</span>
            <span style={{fontSize:"17px"}}>Final Draft</span>
          </button>
        </a>
        <h3>What Bubbles Up - Rat Park</h3>
        <a
          href="https://open.spotify.com/episode/4V7tHEKMPM53G213WHPDSr "
          target="_blank"
        >
          <button className="custom-btn btn-12">
            <span>Listen</span>
            <span>Spotify</span>
          </button>
        </a>
        {/* </div> */}
      </div>
      <h3 style={{display:props.start?null:'none'}} className="content__index">07</h3>
    </>
  );
}
