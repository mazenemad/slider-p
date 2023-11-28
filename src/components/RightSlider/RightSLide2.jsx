import TypeIt from "typeit-react";
import { useState } from "react";
export default function RightSlide2(props) {
  const quote = props.type[1];
  const [instance, setInstance] = useState(null);
  if(props.start){
    instance.unfreeze();
  }
  return (
    <>
      <div style={{opacity:props.start?1:0}} className="content__main">
        {/* <p>
          In the spirit of Elmore Leonard's Get Shorty and the HBO series
          Entourage, Adam Novak's crime novel, The Non-Pro, skewers the
          Hollywood scene like a picador to a bull. When movie industry insider
          Jerry Makos dies under mysterious circumstances, his brother Josh
          seeks the killer while trying not to get sucked into the abyss of the
          movie industry. Who would want his brother dead? That was the problem.
          . .the list of social climbers and celebrity parasites seemed to be
          endless. Just when it seems like Josh will never find the killer, the
          planets align for a perfect third act.
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
          <a
            href="https://www.simonandschuster.com/books/The-Non-Pro/Adam-Novak/9781627934473"
            target="_blank"
          >
            <button className="custom-btn btn-12">
              <span>Hurry!</span>
              <span style={{fontSize:"17px"}}>Buy Now</span>
            </button>
          </a>
        </div>
      </div>
      <h3 style={{display:props.start?null:'none'}} className="content__index">02</h3>
    </>
  );
}
