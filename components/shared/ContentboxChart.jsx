'use client'
import Contentbox from "./Contentbox";
import Circle from "../charts/circle";
import { Currency } from "@/libs/currency";
import { useEffect, useState } from "react";
import ContentboxGrid from "./ContentboxGrid";
import ContentboxLineLeft from "./ContentboxLineLeft";

const ContentboxChart = ({className, jsonData}) => {

const [budgetData, setBudgetData] = useState(null)
const [data, setData] = useState(null)
useEffect(() => {
  // Directly use the imported data
  const budget = jsonData.budgets;

  setData(budget)
  // Create the chartData structure from the 'budget' key
  const chartData = {
    labels: budget.map(item => item.category),
    datasets: [{
      label: "Budgets",
      data: budget.map(item => item.maximum),
      backgroundColor: budget.map(item => item.theme)
    }],
    tooltips: { enabled: false }
  };

  // Set the budget data
  setBudgetData(chartData);

}, []);



  return (
       <>
       
        <div className="grid-cols grid-cols--2">
            <Contentbox className={`content-box__chart ${className ? className : ''}`}>
                <div className="content-box__innercircle"></div>
                <div className="content-box__innercircle-daten">
                  <strong>
                    <span className="sign text__lg text__bold">$</span>
                    <span className="text text__lg text__bold">340</span> <br/>
                    <span className="text-dark-300 text__xs">of $975 limit</span>
                  </strong>
                </div>
                {budgetData ? (
                    <Circle 
                      options={{
                        cutoutPercentage: 400,
                        plugins: {
                          legend: { display: false }
                        }
                      }}
                      data={budgetData}
                    />
                  ) : (
                    <p>Loading...</p>
                  )}
            </Contentbox>
            <ContentboxGrid style={{heihgt:'fit-content', alignSelf:'center'}}>
                {
                  data ? data.map(item => (
                    <ContentboxLineLeft style={{color:`${item.theme}`}} key={item.category}>
                        <h5 className="text__sm  text-dark-200">{item.category}</h5>
                        <div className="content-box__data text-dark-100">
                          <p className="text__sm text__bold">
                            {
                              Currency(item.maximum)
                            }
                          </p>
                        </div>
                    </ContentboxLineLeft>
                  )):(
                    <p>Loading...</p>
                  )
                }
            </ContentboxGrid>
        </div>

       </>
    );
};

export default ContentboxChart;