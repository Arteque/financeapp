import Pagetitle from "@/components/shared/Pagetitle";
import Container from "@/components/shared/Container";
import data from "@/app/Api/data.json"
import PotsComponent from "@/components/PotsComponent";
import Budgets from "@/components/Budgets";
import Overview from "@/components/Overview";
import TransactionsComponent from "@/components/TransactionsComponent";
import RecurringBillsComponent from "@/components/RecurringBillsComponent";
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
          {/* RecurringBills */}
          <RecurringBillsComponent />
          {/* RecurringBills */}
        </div>

      </Container>
      {/* container end */}
    </>
  );
}


export default Home