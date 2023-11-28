export default function RightSlide9(props) {
  return (
    <>
      <div style={{opacity:props.start?1:0}} className="content__main slide9">
          {/* <div className="slide9content"> */}
              <p>
              Adam Novak is the author of the novels Rat Park, The Non-Pro, Freaks
              of the Industry, and Take Fountain. He divides his time between
              Beachwood Canyon and Fort Washington, Maryland.
            </p>
            <a href="mailto:anovak99@icloud.com" target="_blank">
              <button className="custom-btn btn-12">
                <span>Coffee?</span>
                <span>Email Me</span>
              </button>
            </a>
          </div>
      {/* </div> */}
      <h3 style={{display:props.start?null:'none'}} className="content__index">09</h3>
    </>
  );
}
