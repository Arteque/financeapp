import Section from "./shared/Section";
import Contentbox from "./shared/Contentbox";
import SectionHeader from "./shared/SectionHeader";
import ContentboxAvtar from "./shared/ContentboxAvtar";
import { Currency } from "@/libs/currency";
import { TransactionsData } from "@/libs/Calculate";
import { PosOrNegNumb } from "@/libs/Calculate";

const TransactionsComponent = ({limit, showHeader, start}) => {

    const dataTransactions = TransactionsData().data

   
    

    return (
        <Section className="main-content__transactions">
            <Contentbox className="bg-light-400">

               {
                showHeader && (
                    <SectionHeader 
                    titleText="Transaction" 
                    linkUrl="transaction"
                  />
                )
               }


              {
              dataTransactions && dataTransactions.map((item,index) => (
                  start ? (
                      index < limit && (
                        <ContentboxAvtar                   
                                key={index}
                                src={item.avatar}
                                title={item.name}
                                date={item.date}
                                number={Currency(item.amount)}
                                className={PosOrNegNumb(item.amount) == "-1" ? "out-amount":"in-amount"}
                              />
                    )
                  ):(
                        index < limit && (
                          <ContentboxAvtar                   
                                key={index}
                                src={item.avatar}
                                title={item.name}
                                date={item.date}
                                number={Currency(item.amount)}
                                category={item.category}
                                className={PosOrNegNumb(item.amount) == "-1" ? "out-amount":"in-amount"}
                            />
                        )
                  )
                )
              )
            }
            </Contentbox>
        </Section> 
    );
};

export default TransactionsComponent;