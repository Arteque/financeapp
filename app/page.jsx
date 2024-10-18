import Section from "@/components/shared/Section";
import Contentbox from "@/components/shared/Contentbox";
import Pagetitle from "@/components/shared/Pagetitle";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import ContentboxAvtar from "@/components/shared/ContentboxAvtar";
import data from "@/app/Api/data.json"
import { Currency } from "@/libs/currency";
import { GetDate } from "@/libs/getDate";
import ContentboxChart from "@/components/shared/ContentboxChart";
import TotalAmount from "@/components/TotalAmount";
import PotsComponent from "@/components/PotsComponent";


const Home = ()  => {


  const dataTransactions = data.transactions
  const dataBalance = data.balance
  


  
  return (
    <>
     
      <Container className="container">
        <Pagetitle>
          Overview
        </Pagetitle>
        {/* Content Box Default */}
        <Section className="grid-cols grid-cols--3 ">
            {
              dataBalance && (
                  <>
                      <Contentbox className="bg-dark-100 text-light-400">
                        <h3 className="content-box__title text__sm">
                          Current Balance
                        </h3>
                        <div className="content-box__data text__lg text__bold">
                          <p>
                            {Currency(dataBalance.current)}
                          </p>
                        </div>
                      </Contentbox>
                      <Contentbox className="bg-light-400">
                          <h3 className="content-box__title text__sm">
                            Income
                          </h3>
                          <div className="content-box__data text__lg text__bold">
                            <p>
                              {Currency(dataBalance.income)}
                            </p>
                          </div>
                      </Contentbox>
                      <Contentbox className="bg-light-400">
                          <h3 className="content-box__title text__sm">
                            Expenses
                          </h3>
                          <div className="content-box__data text__lg text__bold">
                            <p>
                              {Currency(dataBalance.expenses)}
                            </p>
                          </div>
                      </Contentbox>
                  </>
              )
            }
        </Section>
        
        <PotsComponent limit={4} />
         

        <Section>
            <Contentbox className="bg-light-400">
                <SectionHeader 
                  titleText="Transaction" 
                  linkUrl="transaction"
                />
              {
              dataTransactions && dataTransactions.map((item,index) => {
                if(index < 5) 
                    {
                      return <ContentboxAvtar                   
                              key={index}
                              src={item.avatar}
                              title={item.name}
                              date={GetDate(item.date)}
                              number={Currency(item.amount)} 
                            />
                    }
                })
            }
            </Contentbox>
        </Section> 

  
        <Section className="chart-section">
          <div className="content-box bg-light-400">
            {/* Box Header */}
            <SectionHeader 
              titleText="Budgets"
              linkUrl="budgets"
            />
            
            {/* Box Header */}
            <ContentboxChart jsonData={data}/>
            
          </div>
        </Section>

        <Section>
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
                  <TotalAmount db={dataTransactions} category="Bills"  />
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

      </Container>
      {/* container end */}
    </>
  );
}


export default Home