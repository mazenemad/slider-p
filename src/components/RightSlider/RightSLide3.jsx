import TypeIt from "typeit-react";
import { useState } from "react";
export default function RightSlide3(props) {
  const quote = props.type[2];
  const [instance, setInstance] = useState(null);
  console.log(props.start)
  if(props.start){
    instance.unfreeze();
  }
  return (
    <>
      <div style={{opacity:props.start?1:0}} className="content__main">
        {/* <p>
          A podcast transcript is turned in to a small publishing house in Los
          Angeles. It turns out to be a piece of missing evidence in a murder
          investigation that ran cold. Take Fountain is the reprinting of that
          transcript, and only by reading the entire conversation can the murder
          be solved.
        </p>
        <p>
          Take Fountain is a truly unique novel that slowly simmers to boil as
          an interview between two filmmakers gives hints to the anatomy of a
          brutal murder.
        </p> */}

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
        <div className="frame">
          <a href="https://a.co/d/a9RdKLg" target="_blank">
            <button className="custom-btn btn-12">
              <span>Hurry!</span>
              <span style={{fontSize:"17px"}}>Buy Now</span>
            </button>
          </a>
        </div>
      </div>
      <h3 style={{display:props.start?null:'none'}} className="content__index">03</h3>
    </>
  );
}
