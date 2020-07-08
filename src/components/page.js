import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Box from '@codeday/topo/Atom/Box';
import Header, { SiteLogo } from '@codeday/topo/Organism/Header';
import Footer from '@codeday/topo/Organism/Footer';
import { CodeDay } from '@codeday/topo/Atom/Logo';

export default function Page({ children, title, darkHeader }) {
  return (
    <>
      <Head>
        <title>{title ? `${title} - ` : ''}CodeDay</title>
      </Head>
      <Box position="relative">
        <Header
          darkBackground={darkHeader}
          gradAmount={darkHeader && 'lg'}
          underscore
          position="relative"
          zIndex={1000}
        >
          <SiteLogo>
            <a href="/">
              <CodeDay withText />
            </a>
          </SiteLogo>
        </Header>
        {children}
        <Footer />
      </Box>
    </>
  );
}
Page.propTypes = {
  children: PropTypes.oneOf([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]).isRequired,
  title: PropTypes.string,
  darkHeader: PropTypes.bool,
};
Page.defaultProps = {
  title: null,
  darkHeader: false,
};
