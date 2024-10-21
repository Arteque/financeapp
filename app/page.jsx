import Section from "@/components/shared/Section";
import Contentbox from "@/components/shared/Contentbox";
import Pagetitle from "@/components/shared/Pagetitle";
import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import ContentboxAvtar from "@/components/shared/ContentboxAvtar";
import data from "@/app/Api/data.json"
import { Currency } from "@/libs/currency";
import { GetDate } from "@/libs/getDate";
import TotalAmount from "@/components/TotalAmount";
import PotsComponent from "@/components/PotsComponent";
import Budgets from "@/components/Budgets";
import Overview from "@/components/Overview";
import TransactionsComponent from "@/components/TransactionsComponent";
import BillsComponent from "@/components/BillsComponent";
const Home = ()  => {


  const dataTransactions = data.transactions

  
  return (
    <>
      <Container className="main-content main-content--start-page">
        <Pagetitle>
          Overview
        </Pagetitle>
        {/* Content Box Default */}
        <div className="main-content__content">
        {/* Overview */}
        <Overview />
        {/* Overview */}
        {/* Pots */}
        <PotsComponent limit={'4'} />
        {/* Pots */}
        {/* Transactions */}
        <TransactionsComponent />
        {/* Transactions */}
        {/* Budgets */}
        <Budgets />
        {/* Budgets */}
        {/* Bills */}
        <BillsComponent />
        {/* Bills */}
        </div>

      </Container>
      {/* container end */}
    </>
  );
}


export default Home