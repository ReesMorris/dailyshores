import PlausibleProvider from 'next-plausible';

export const Plausible: React.FC = () => {
  const domain = process.env.NEXT_PUBLIC_FRONTEND_DOMAIN;

  if (!domain) {
    return null;
  }

  return <PlausibleProvider selfHosted enabled domain={domain} />;
};
