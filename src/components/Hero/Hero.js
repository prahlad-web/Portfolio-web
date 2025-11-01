import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Prahlad Shukla<br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        Welcome to my digital space!
I’m a passionate full-stack web developer focused on creating modern, functional, and visually stunning websites and applications.
        </SectionText>
        <Button
  onClick={() =>
    window.location.href =
      'mailto:prahlad.web@gmail.com'
  }
>
  Learn More
</Button>

      </LeftSection>
    </Section>
  </>
);

export default Hero;