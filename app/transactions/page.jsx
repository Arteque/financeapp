'use client'
import Section from "@/components/shared/Section"
import Container from "@/components/shared/Container"
import Pagetitle from "@/components/shared/Pagetitle"
import Filter from "@/components/shared/Filter/Filter"
import ContentBoxHeader from "@/components/shared/ContentBoxHeader"
import { TransactionsData } from "@/libs/Calculate"
import { useState, useEffect } from "react"
import ContentboxAvtar from "@/components/shared/ContentboxAvtar"
const page = () => {

const [filter, setFilter] = useState({
  sortby: "Latest",
  category: "All transactions",
  start:0,
  end:10
})

const [getData, setGetData] = useState("");
const [pagesLength, setPagesLength] = useState(0);

const transactions = TransactionsData().data;

useEffect(() => {
  setPagesLength(transactions.lenfth / 10)
  if (filter.sortby == "Latest" && filter.category == "All transactions") {
    setGetData(transactions); // Set getData to the transactions data directly.
    console.log(transactions); // Log transactions directly, if needed.
  }
}, [getData]);


  return (
    <>
      <Container className="main-content__container"> 
        <Pagetitle>
          Transactions
        </Pagetitle>
        <Section className="bg-light-400 rounded main-content__content">
            <Container className="padding">
                <ContentBoxHeader>
                    <Filter />
                </ContentBoxHeader>
                <div className="page" datapage="1">
                  {
                    getData && getData.map((item, index) => (
                      index < filter.end && (
                          <ContentboxAvtar title={item.name} key={index}/>
                      )
                    ))
                  }
                </div>
                <div className="pagination">
                  <button className="pagination__left">
                    <span className="icon"></span>
                    <span className="text">Prev</span>
                  </button>
                  <ul className="pagination__pages">
                  {Array.from({ length: pagesLength }, (_, i) => (
                    <li key={i} className="pagination__page">{i + 1}</li>
                  ))}
                  </ul>
                  <button className="pagination__left">
                    <span className="text">Next</span>
                    <span className="icon"></span>
                  </button>
                </div>
            </Container>
        </Section>
      </Container>
    </>
  )
}

export default page
