'use client'
import { Currency } from "@/libs/currency";
import Section from "./shared/Section";
import SectionHeader from "./shared/SectionHeader";
import { BillsData } from "@/libs/Calculate";

const RecurringBillsComponent = () => {

   BillsData()
    
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
                  {Currency(Number(BillsData().paidBills))}
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
                  {Currency(BillsData().upcommingBills)}
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
                <span className="text">
                  {Currency(BillsData().dueSoon)}
                </span>
              </div>
            </div>
            {/*  Box width rounded line at left side */}
          </div>
        </Section>
    );
};

export default RecurringBillsComponent;