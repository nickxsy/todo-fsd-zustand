import { Link, LinkProps } from 'react-router';

type AppLinkProps = LinkProps;

export const AppLink = ({ ...props }: AppLinkProps) => <Link {...props} />;

AppLink.displayName = 'AppLink';
