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

const Page = () => {
  const theData = TransactionsData().data;
  const [getContent, setGetContent] = useState(theData);
  const [dataCategory, setDataCategory] = useState("All transactions");
  const [sortby, setSortby] = useState("Latest");
  const [multipage, setMultipage] = useState(false);

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

  // Pagination Check
  useEffect(() => {
    const shouldPaginate = getContent.length > 10;
    setMultipage(shouldPaginate);

    if (shouldPaginate) {
      setGetContent(renderPages(getContent));
    }
  }, [getContent]);


  
  const renderPages = (items) => {
    const itemsPerPage = 10;
    const pages = [];

    for (let i = 0; i < items.length; i += itemsPerPage) {
      pages.push(items.slice(i, i + itemsPerPage));
    }
    return pages;
  };

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
            {multipage ? (
              <div className="multipage-container">
                {getContent.map((element, index) => (
                  <div
                    className={`multipage-container__page ${index === 0 ? "current" : ""}`}
                    data-page={index}
                    key={index}
                  >
                    {element.map((item, i) => (
                      <ContentboxAvtar
                        className={`multipage-container__page-${index}--item-${i}`}
                        key={i}
                        category={item.category}
                        date={item.date}
                        number={Currency(item.amount)}
                        title={item.name}
                        src={item.avatar}
                      />
                    ))}
                  </div>
                ))}
              </div>
            ) : (
              getContent.map((item, i) => (
                <ContentboxAvtar
                  key={i}
                  category={item.category}
                  date={item.date}
                  number={Currency(item.amount)}
                  title={item.name}
                  src={item.avatar}
                />
              ))
            )}
          </Container>
        </Section>
      </Container>
    </>
  );
};

export default Page;
