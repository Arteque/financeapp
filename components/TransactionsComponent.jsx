import Section from "./shared/Section";
import Contentbox from "./shared/Contentbox";
import SectionHeader from "./shared/SectionHeader";
import ContentboxAvtar from "./shared/ContentboxAvtar";
import { GetDate } from "@/libs/getDate";
import { Currency } from "@/libs/currency";
import { TransactionsData } from "@/libs/Calculate";

const TransactionsComponent = ({limit, showHeader}) => {

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
              dataTransactions && dataTransactions.map((item,index) => {
                if(index < limit) 
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
    );
};

export default TransactionsComponent;