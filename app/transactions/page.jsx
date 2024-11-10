'use client';
import Section from "@/components/shared/Section";
import Container from "@/components/shared/Container";
import Pagetitle from "@/components/shared/Pagetitle";
import Filter from "@/components/shared/Filter/Filter";
import ContentBoxHeader from "@/components/shared/ContentBoxHeader";
import { TransactionsData } from "@/libs/Calculate";
import { useState, useEffect } from "react";
import ContentboxAvtar from "@/components/shared/ContentboxAvtar";
import { Currency } from "@/libs/currency";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const theData = TransactionsData().data;
  const [getContent, setGetContent] = useState(theData);
  const [dataCategory, setDataCategory] = useState("All transactions");
  const [sortby, setSortby] = useState("Latest");
  const [multipage, setMultipage] = useState(false);
  const searchParams = useSearchParams()



  const handleCatValue = (e) => setDataCategory(e.target.innerText);
  const handleSortValue = (e) => setSortby(e.target.innerText);

  const handleInputValue = (e) => {
    const newData = [...TransactionsData().data].filter((item) => {
      const searchedText = e.target.value.toLowerCase().trim();
      const itemName = item.name.toLowerCase().trim();
      return itemName.includes(searchedText);
    });
    setTimeout(() => setGetContent(newData), 300);
  };

  const sortFunctions = {
    "A to Z": () => {
      setGetContent((items) => [...items].sort((a, b) => a.name.localeCompare(b.name)));
    },
    "Z to A": () => {
      setGetContent((items) => [...items].sort((a, b) => b.name.localeCompare(a.name)));
    },
    Latest: () => {
      setGetContent((items) => [...items].sort((a, b) => new Date(b.date) - new Date(a.date)));
    },
    Oldest: () => {
      setGetContent((items) => [...items].sort((a, b) => new Date(a.date) - new Date(b.date)));
    },
    Highest: () => {
      setGetContent((items) => [...items].sort((a, b) => b.amount - a.amount));
    },
    Lowest: () => {
      setGetContent((items) => [...items].sort((a, b) => a.amount - b.amount));
    },
  };

  // Data Filtering and Sorting
  useEffect(() => {
    
    const filteredData = dataCategory === "All transactions"
      ? theData
      : theData.filter((entry) => entry.category === dataCategory);

    setGetContent(filteredData);
    if (sortFunctions[sortby]) {
      sortFunctions[sortby]();
    }
  }, [dataCategory, sortby]);







  // Components rendering
  return (
    <>
      <Container className="main-content__container">
        <Pagetitle>Transactions</Pagetitle>
        <Section className="bg-light-400 rounded main-content__content">
          <Container className="padding">
            <ContentBoxHeader>
              <Filter
                sortValue={handleSortValue}
                catValue={handleCatValue}
                transactions={TransactionsData().data}
                inputValue={handleInputValue}
                catDefaultText={dataCategory}
                sortDefaultText={sortby}
              />
            </ContentBoxHeader>
            
              {
                getContent.map((item, i) => (
                    <ContentboxAvtar
                      key={i}
                      category={item.category}
                      date={item.date}
                      number={Currency(item.amount)}
                      title={item.name}
                      src={item.avatar}
                    />
                  )
                )
              }
             
           
          </Container>
        </Section>
      </Container>
    </>
  );
};

export default Page;
