import React from 'react';
import useSwr from 'swr';
import Box from '@codeday/topo/Atom/Box';

const statusColors = {
  none: 'green',
  minor: 'orange',
  major: 'red',
  critical: 'red',
};

export default function Status() {
  const { data } = useSwr(
    'https://ggkb1z3yz5h1.statuspage.io/api/v2/status.json',
    // eslint-disable-next-line no-undef
    (u) => fetch(u).then((r) => r.json())
  );
  const color = data && data.status ? (statusColors[data.status.indicator] || null) : null;

  return (
    <Box as="a" href="http://status.codeday.org/" target="_blank" fontSize="sm" mt={8} d="inline-block">
      <Box
        d="inline-block"
        p={1}
        pl={2}
        pr={2}
        color="gray.800"
        borderColor="gray.500"
        bg="gray.50"
        borderWidth={1}
        borderBottomLeftRadius={4}
        borderTopLeftRadius={4}
        borderRightWidth={0}
      >
        Service Status
      </Box>
      <Box
        d="inline-block"
        fontWeight="bold"
        p={1}
        pl={2}
        pr={2}
        bg={`${color}.100`}
        color={`${color}.800`}
        borderColor={`${color}.500`}
        borderWidth={1}
        borderTopRightRadius={2}
        borderBottomRightRadius={2}
      >
        {data && data.status ? data.status.description : '...'}
      </Box>
    </Box>
  );
}
