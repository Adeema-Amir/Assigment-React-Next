import Heading from './Heading';
import Section from './Section';

export default function Seven() {
  return (
    <Section>
      <Heading level={1}>Title</Heading>
      <Section>
        <Heading level={2}>Heading</Heading>
        <Section>
          <Heading level={3}>Sub-heading</Heading>
          <Section>
            <Heading level={4}>Sub-sub-heading</Heading>
              <Section>
                <Heading level={5}>Sub-sub-heading</Heading>
                  <Section>
                    <Heading level={6}>Sub-sub-heading</Heading>
                      <Section>
                        <Heading level={7}>Sub-sub-heading</Heading>
                          <Section>
                            <Heading level={8}>Sub-sub-heading</Heading>
                              <Section>
                                <Heading level={9}>Sub-sub-heading</Heading>
                                  <Section>
                                    <Heading level={10}>Sub-sub-heading</Heading>
                                      <Section>
                                        <Heading level={11}>Sub-sub-heading</Heading>
                                      </Section>
                                  </Section>
                              </Section>
                          </Section>
                      </Section>
                  </Section>
              </Section>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}
