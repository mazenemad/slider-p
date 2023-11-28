export default function RightSlide8(props) {
  return (
    <>
      <div style={{opacity:props.start?1:0}} className="content__main slide8">
        {/* <div className="slide8content"> */}
        <h2>Show your support and nab some swag!</h2>
        <a
          href="https://www.funnyshirts.org/design/4142349/Rat+Park+w%2F+back
                            "
          target="_blank"
        >
          <button className="custom-btn btn-12">
            <span style={{width:'180px'}}>Hurry!</span>
            <span style={{width:'180px'}}>Buy Swag</span>
          </button>
        </a>
        {/* </div> */}
      </div>
      <h3 style={{display:props.start?null:'none'}} className="content__index">08</h3>
    </>
  );
}
