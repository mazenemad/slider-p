import TypeIt from "typeit-react";
import { useState } from "react";
export default function RightSlide5(props) {
  const quote = props.type[4]
  const [instance, setInstance] = useState(null);
  console.log(props.start)
  if(props.start){
    instance.unfreeze();
  }
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
        <div className="frame">
          <a href="https://a.co/d/a6r7baw " target="_blank">
            <button className="custom-btn btn-12">
              <span>Hurry!</span>
              <span style={{fontSize:"17px"}}>Listen Now</span>
            </button>
          </a>
        </div>
        <br />
        <div className="quotes">
          <div className="quotes">
          <TypeIt
               className="quote"
                  getBeforeInit={(instance) => {
                    instance.freeze()
                  instance.type(quote.quote);
                  setInstance(instance)
                    return instance;
              }}></TypeIt>
            <p className="author">{quote.author}</p>
            <p className="affiliation">{quote.affiliation}</p>
          </div>
        </div>
      </div>
      <h3 style={{display:props.start?null:'none'}} className="content__index">05</h3>
    </>
  );
}
