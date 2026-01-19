import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";
import { FiverUrl, ResumeUrl, UpworkUrl } from "../../constants/constants";
import LinkButton from "../../styles/GlobalComponents/LinkButton";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello! <br />
          I'm Praveen Karthik
        </SectionTitle>
        <SectionText>
          An aspiring AWS Engineer and Data Scientist passionate about cloud
          computing and machine learning. Dedicated to building scalable
          infrastructure and deriving insights from data to drive business
          growth.
        </SectionText>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            margin: "0 0 80px",
          }}
        >
          <LinkButton alt="upwork" href={UpworkUrl} target="_blank">
            Upwork
          </LinkButton>
          <LinkButton alt="fiverr" href={FiverUrl} target="_blank">
            Fiverr
          </LinkButton>
          <LinkButton alt="resume" href={ResumeUrl} target="_blank">
            Resume
          </LinkButton>
        </div>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
