import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'sign in | Revenue Assurance Platform',
  description: 'sign in page of Revenue Assurance Platform '
};

export default function Layout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return <section>{children}</section>;
}
