import React from 'react';

const currentYear = new Date().getFullYear();

export const Copyright: React.SFC = () => (
  <>Copyright © {currentYear} Diego Stratta</>
);

export default Copyright;
