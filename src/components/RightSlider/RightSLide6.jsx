export default function RightSlide6(props) {
  return (
    <>
      <div style={{opacity:props.start?1:0,marginTop:'2px'}} className="content__main slide-of-buttons">
        <h2>Excerpts</h2>
        <h3>Rat Park</h3>
        <a href="https://theartifactuals.com/rat-park/ " target="_blank">
          <button className="custom-btn btn-12">
            <span>Read</span>
            <span>Excerpt 1</span>
          </button>
        </a>
        <a
          href="https://theartifactuals.com/excerpt-2-from-rat-park/ "
          target="_blank"
        >
          <button className="custom-btn btn-12">
            <span>Read</span>
            <span>Excerpt 2</span>
          </button>
        </a>
        <a
          href="https://rue-morgue.com/exclusive-interview-navigate-the-streets-of-rat-park-with-wme-head-of-story-adam-novak/ "
          target="_blank"
        >
          <button className="custom-btn btn-12">
            <span>Read</span>
            <span style={{fontSize:'15px'}}>Rue Morgue</span>
          </button>
        </a>
        <a
          href="https://residence11.com/short-stories/fiction/fiction-excerpt-rat-park-by-adam-novak "
          target="_blank"
        >
          <button className="custom-btn btn-12">
            <span>Read</span>
            <span style={{fontSize:"18px"}}>Residence11</span>
          </button>
        </a>
        <a href="https://www.youtube.com/watch?v=DKIgmHT6lZ4 " target="_blank">
          <button className="custom-btn btn-12">
            <span>Watch Now</span>
            <span>Book Soup</span>
          </button>
        </a>
        <h3>Freaks of the Industry</h3>
        <a
          href="https://theartifactuals.com/in-honor-of-the-oscars-2022-from-freaks-of-the-industry/ "
          target="_blank"
        >
          <button className="custom-btn btn-12">
            <span>Read</span>
            <span>Excerpt 1</span>
          </button>
        </a>
        <a
          href="https://www.hollywoodreporter.com/news/general-news/wme-img-vet-adam-novak-dishes-new-novel-rules-fight-club-1026322/amp/ "
          target="_blank"
        >
          <button className="custom-btn btn-12">
            <span>Read</span>
            <span style={{fontSize:"17px"}}>WME News</span>
          </button>
        </a>
        <h3>Take Fountain</h3>
        <a
          href="https://www.forewordreviews.com/reviews/take-fountain/ "
          target="_blank"
        >
          <button className="custom-btn btn-12">
            <span>Read</span>
            <span>Foreward</span>
          </button>
        </a>
        <a
          href="https://variety.com/2015/voices/columns/take-foundation-adam-novak-wme-1201552772/amp/?fbclid=PAAaZn-W5PyNVVdEPL7WKKZUpOl7nej-24PjkvxZzaMT30T6JexIsWqT5tvtk_aem_Aezi9ir8SBr0YhOjQsWp0vpbAPWS_5kud_Me0Icz0_m7hUzkUgvnQ6LPr1Hg7eQsmRE "
          target="_blank"
        >
          <button className="custom-btn btn-12">
            <span>Read</span>
            <span>Variety</span>
          </button>
        </a>
      </div>
      <h3 style={{display:props.start?null:'none'}} className="content__index">06</h3>
    </>
  );
}
