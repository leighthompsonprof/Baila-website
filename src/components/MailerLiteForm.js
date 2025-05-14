'use client';

import { useEffect, useState } from 'react';

export default function MailerLiteForm() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div dangerouslySetInnerHTML={{
      __html: `<div class="ml-embedded" data-form="ezpDLF"></div>`
    }} />
  );
} 