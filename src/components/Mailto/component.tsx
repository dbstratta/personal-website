import React from 'react';

import OutboundLink from '../OutboundLink';

export type MailtoProps = Readonly<{
  email: string;
  eventLabel?: string;
  className?: string;
}>;

export const Mailto: React.SFC<MailtoProps> = ({
  email,
  eventLabel = addMailto(email),
  className,
  children = email,
}) => {
  const to = addMailto(email);

  return (
    <OutboundLink to={to} eventLabel={eventLabel} className={className}>
      {children}
    </OutboundLink>
  );
};

const addMailto = (email: string) => `mailto:${email}`;

export default Mailto;
