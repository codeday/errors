import React from 'react';
import Text, { Heading, Link } from '@codeday/topo/Atom/Text';
import Content from '@codeday/topo/Molecule/Content';
import Image from '@codeday/topo/Atom/Image';
import Box from '@codeday/topo/Atom/Box';
import Page from '../components/page';
import Status from '../components/status';

export default function Home() {
  return (
    <Page title="Application Error">
      <Content>
        <Image
          alt=""
          src="https://img.codeday.org/w=1024;h=300;fit=crop;crop=faces,edges/6/t/6ttx5an4wbxypvf324er646d48ri8py88fjwbdwp5cxay8tfwo9nnmdwq9vpbseffz.jpg"
        />
        <Text as="h2" fontSize="5xl" bold mt={4}>Oh no!</Text>
        <Heading as="h2" fontSize="4xl" fontWeight="normal">An application error occurred.</Heading>
        <Box mt={4} mb={16}>
          <Text>
            This most likely means something went wrong on our side. You can try refreshing in a few minutes and if that
            doesn&apos;t work, <Link href="mailto:team@codeday.org">contact us.</Link>
          </Text>
          <Status />
        </Box>
      </Content>
    </Page>
  );
}
