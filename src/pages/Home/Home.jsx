import {
  BenefitsContainer,
  BenefitsItem,
  BenefitsItemText,
  BenefitsItemTitle,
  BenefitsList,
  BenefitsSection,
  ContainerOwnBothBlocks,
  Description,
  GetStartLink,
  PicComputerContainer,
  PicContainer,
  PicWomanContainer,
  SectionOwnBothBlocks,
  TitleHomePage,
  TitleHomePageItem,
  TutorContainer,
} from "./Home.styled";

function Home() {
  return (
    <div>
      <SectionOwnBothBlocks>
        <ContainerOwnBothBlocks>
          <TutorContainer>
            <TitleHomePage>
              Unlock your potential with the best{" "}
              <TitleHomePageItem>language</TitleHomePageItem> tutors
            </TitleHomePage>
            <Description>
              Embark on an Exciting Language Journey with Expert Language
              Tutors: Elevate your language proficiency to new heights by
              connecting with highly qualified and experienced tutors.
            </Description>
            <GetStartLink to="/teachers">Get started</GetStartLink>
          </TutorContainer>
          <PicContainer>
            <PicWomanContainer>
              <img src="/images/woman.png" alt="woman" width="339px" />
            </PicWomanContainer>
            <PicComputerContainer>
              <img src="/images/mac.svg" alt="Laptop" />
            </PicComputerContainer>
          </PicContainer>
        </ContainerOwnBothBlocks>
      </SectionOwnBothBlocks>

      <BenefitsSection>
        <BenefitsContainer>
          <BenefitsList>
            <BenefitsItem>
              <BenefitsItemTitle>32,000 +</BenefitsItemTitle>
              <BenefitsItemText>Experienced tutors</BenefitsItemText>
            </BenefitsItem>
            <BenefitsItem>
              <BenefitsItemTitle>300,000 +</BenefitsItemTitle>
              <BenefitsItemText>5-star tutor reviews</BenefitsItemText>
            </BenefitsItem>
            <BenefitsItem>
              <BenefitsItemTitle> 120 +</BenefitsItemTitle>
              <BenefitsItemText>Subjects taught</BenefitsItemText>
            </BenefitsItem>
            <BenefitsItem>
              <BenefitsItemTitle>200 +</BenefitsItemTitle>
              <BenefitsItemText>Tutor nationalities</BenefitsItemText>
            </BenefitsItem>
          </BenefitsList>
        </BenefitsContainer>
      </BenefitsSection>
    </div>
  );
}

export default Home;
