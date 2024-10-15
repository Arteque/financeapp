// 'use client'
import Contentbox from "./Contentbox";
import Image from "next/image";
const ContentboxAvtar = ({className, title, number, date, src}) => {
    return (
        <Contentbox className={`content-box__avatar content-box__limit ${className ? className : ''}`}>
            <img alt={title} width={32} height={32} style={{borderRadius:"50%"}} src={src} />
              <h4 className="avatar__name">
                {title}
              </h4>
              <div className="data">
                  <p style={{textAlign:'right'}}>
                    <span className="text-second-green text__bold">
                      {number}
                    </span> <br />
                    <small className="text__xs text_light_300">
                      {date}
                    </small>
                  </p>
                  
              </div>
        </Contentbox>
    );
};

export default ContentboxAvtar;