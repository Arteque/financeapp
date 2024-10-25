import Section from "@/components/shared/Section"
import Container from "@/components/shared/Container"
import Pagetitle from "@/components/shared/Pagetitle"
import Filter from "@/components/shared/Filter/Filter"
import ContentBoxHeader from "@/components/shared/ContentBoxHeader"
import TransactionsComponent from "@/components/TransactionsComponent"

const page = () => {

  return (
    <>
      <Container> 
        <Pagetitle>
          Transactions
        </Pagetitle>
        <Section className="bg-light-400 rounded">
            <Container className="padding">
                <ContentBoxHeader>
                  <Filter />
                </ContentBoxHeader>
            <TransactionsComponent limit="100" showHeader={false}/>
            </Container>
        </Section>
      </Container>
    </>
  )
}

export default page
