import Section from "@/components/shared/Section"
import Container from "@/components/shared/Container"
import Pagetitle from "@/components/shared/Pagetitle"
import Filter from "@/components/shared/Filter/Filter"
import ContentBoxHeader from "@/components/shared/ContentBoxHeader"
import TransactionsComponent from "@/components/TransactionsComponent"

const page = () => {

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
            <TransactionsComponent showHeader={false} start={false}/>
            </Container>
        </Section>
      </Container>
    </>
  )
}

export default page
