import TypeIt from "typeit-react";
import { useState } from "react";
export default function RightSlide1(props) {
  const quote = props.type[0];
  return (
    <>
      <div style={{opacity:props.start?1:0}} className="content__main">
        {/* <p>
          Enter Rat Park at your own risk. Lose the cage. Find yourself. An L.A.
          power couple orders an A.I. sex droid to escape their marital prison.
          What happens to them could happen to you. With his fourth novel, Adam
          Novak shows us how it takes a village of automatons to augment your
          humanity, feed your deceptive compulsive sexual addiction, and forget
          why you ever got married in the first place.
        </p> */}

        <br />
        <div className="quotes">
          <div className="quotes">
              {/* <TypeIt 
                  options={{
                    loop: true,
                    waitUntilVisible: true,
                  }}z
                >
                  <p className="quote">{quote.quote}</p>
                </TypeIt> */}
              <TypeIt
                  getBeforeInit={(instance) => {
                  // instance.type(quote.quote);
                    return instance;
                  }}
                >
                  <p className="quote">{quote.quote}</p>              
              </TypeIt>
            <p className="author">{quote.author}</p>
            <p className="affiliation">{quote.affiliation}</p>
          </div>
          <div className="frame">
          <a href="https://a.co/d/0p21mCR" target="_blank">
            <button className="custom-btn btn-12">
              <span>Hurry!</span>
              <span style={{fontSize:"17px"}}>Buy Now</span>
            </button>
          </a>
        </div>
        </div>
      </div>
      <h3 style={{display:props.start?null:'none'}} class="content__index">01</h3>
    </>
  );
}
