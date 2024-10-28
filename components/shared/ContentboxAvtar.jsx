// 'use client'
import { GetDate } from "@/libs/getDate";
import Contentbox from "./Contentbox";
import Image from "next/image";
const ContentboxAvtar = ({className, title, number, date, src,category, ...props}) => {
    return (
        <Contentbox className={`content-box__avatar  ${className ? className : ''}`} {...props}>
           {
            src &&  <Image alt={title} width={32} height={32} style={{borderRadius:"50%"}} src={src} />
           }
              <h4 className="avatar__name">
                <span className="title">
                  {title && title}
                </span>
                
              </h4>
              <p className="content-box__category">
                {category && category}
              </p>
              <p className="content-box__amount" style={{textAlign:'right'}}>
                <span className="text-second-green text__bold">
                  {number && number}
                </span>
              </p>
              <p className="content-box__date text__xs text__light-300">
                {date && GetDate(date)}
              </p>
        </Contentbox>
    );
};

export default ContentboxAvtar;