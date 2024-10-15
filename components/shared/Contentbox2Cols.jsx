import Contentbox from "./Contentbox";

const Contentbox2Cols = ({iconDTag, title, data, className}) => {
    return (
        <Contentbox className={`content-box--2cols ${className ? className : ''}`}>
           <div className="col content-box__header">
                <svg width="28" height="36" viewBox="0 0 28 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d={iconDTag} fill="#277C78"/>
                </svg>
            </div>
              <div className="col">
                <h4 className="content-box__title text_sm text__nomral">
                  {title}
                </h4>
                <p className="content-box__data text__lg text__bold">
                  {data}
                </p>
            </div>
        </Contentbox>
    );
};

export default Contentbox2Cols;