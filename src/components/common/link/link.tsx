import NextLink from 'next/link';

interface LinkProps {
  href: string;
  className?: string;
  children?: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({
  href,
  className,
  children,
  ...rest
}) => {
  const isInternal = /^[/#?]/.test(href);

  return (
    <NextLink
      href={href}
      className={className}
      rel={isInternal ? '' : 'noopener noreferrer'}
      target={isInternal ? '' : '_blank'}
      {...rest}
    >
      {children}
    </NextLink>
  );
};
