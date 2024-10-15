import Contentbox from "./Contentbox";
import Circle from "../charts/circle";
import { Currency } from "@/libs/currency";
const ContentboxChart = ({className, amount, amoutlimit, chartLabels, chartLabel,chartData, chartBackgroundColors}) => {
    return (
        <Contentbox className={`content-box__chart ${className ? className : ''}`}>
            <div className="content-box__innercircle"></div>
            <div className="content-box__innercircle-daten">
            <strong>
                <span className="text text__lg text__bold">{Currency(amount)}</span> <br/>
                <span className="text-dark-300 text__xs">of {Currency(amoutlimit)} limit</span>
            </strong>
            </div>
            <Circle 
                      options={{
                        cutoutPercentage: 400,
                        plugins:{
                          legend:{
                            display:false
                          }
                        }
                      }}
                      data={
                        {
                        //   tooltips: {enabled: false},
                          labels:[{chartLabels}],
                          datasets:[{
                            label:{chartLabel},
                            data:[{chartData}],
                            backgroundColor:[
                             {chartBackgroundColors}
                            ]
                          }]
                        }
                      }
                    />
        </Contentbox>
    );
};

export default ContentboxChart;