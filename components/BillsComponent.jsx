'use client'
import Section from "./shared/Section";
import SectionHeader from "./shared/SectionHeader";
import TotalAmount from "./TotalAmount";
import { BillsData } from "@/libs/Calculate";

const BillsComponent = () => {

    const bills = BillsData().data
    
    return (
        <Section className="main-content__bills">
          <div className="content-box bg-light-400">
            {/* Box Header */}
            <SectionHeader 
              titleText="Recurring Bills"
              linkUrl="/recurring-bills"
            />
            {/* Box Header */}
            {/* Box width rounded line at left side*/}
            <div className="content-box__header content-box--line-left--rounded text-second-green bg-light-300">
              <h4 className="text__sm text-dark-200 text__normal">
                Paid Bills
              </h4>
              <div className="data text-dark-100 text__bold">
                <span className="text">
                  <TotalAmount db={bills} category="Bills"  />
                </span>
              </div>
            </div>
            {/*  Box width rounded line at left side */}
            {/* Box width rounded line at left side*/}
            <div className="content-box__header content-box--line-left--rounded text-second-yellow bg-light-300">
              <h4 className="text__sm text-dark-200 text__normal">
                Total Upcomming
              </h4>
              <div className="data text-dark-100 text__bold">
                <span className="text">
                  194.98
                </span>
              </div>
            </div>
            {/*  Box width rounded line at left side */}
            {/* Box width rounded line at left side*/}
            <div className="content-box__header content-box--line-left--rounded text-second-cyan bg-light-300">
              <h4 className="text__sm text-dark-200 text__normal">
                Due Soon
              </h4>
              <div className="data text-dark-100 text__bold">
                <span className="sign">
                  $
                </span>
                <span className="text">
                  59.98
                </span>
              </div>
            </div>
            {/*  Box width rounded line at left side */}
          </div>
        </Section>
    );
};

export default BillsComponent;