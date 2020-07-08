import React from 'react';
import Text, { Heading, Link } from '@codeday/topo/Atom/Text';
import Content from '@codeday/topo/Molecule/Content';
import Image from '@codeday/topo/Atom/Image';
import Box from '@codeday/topo/Atom/Box';
import Page from '../components/page';
import Status from '../components/status';

export default function Home() {
  return (
    <Page title="Forbidden">
      <Content>
        <Image
          alt=""
          src="https://img.codeday.org/w=1024;h=300;fit=crop;crop=faces,edges/v/c/vcra9i886chuothctokmqr965fkva9pzaik9wqfe2skemipbwb8n17qhgi81f2zbn8.jpg"
        />
        <Text as="h2" fontSize="5xl" bold mt={4}>403 Forbidden</Text>
        <Heading as="h2" fontSize="4xl" fontWeight="normal">We can&apos;t let you in..</Heading>
        <Box mt={4} mb={16}>
          <Text>
            If you think you should be able to access this, <Link href="mailto:team@codeday.org">contact us.</Link>
          </Text>
          <Status />
        </Box>
      </Content>
    </Page>
  );
}
