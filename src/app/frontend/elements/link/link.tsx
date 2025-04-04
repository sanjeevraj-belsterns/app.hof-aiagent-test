import { Typography } from '@mui/material';
import Link from 'next/link';

interface LinkProps {
  href: string;
  content: string;
}

export const ElLink: React.FC<LinkProps> = ({ href, content }) => {
  return (
    <Link href={href}>
      <Typography variant="caption">{content}</Typography>
    </Link>
  );
};
