'use client';

import { usePathname } from 'next/navigation';

import { UserButton } from '@/features/auth/components/user-button';

import { MobileSidebar } from './mobile-sidebar';
import { SourceCode } from './source-code';

const pathnameMap = {
  tasks: {
    title: 'My Process',
    description: 'View all of your Process here.',
  },
  projects: {
    title: 'My Stages',
    description: 'View Stages of your Stages here.',
  },
};

const defaultMap = {
  title: 'Home',
  description: 'Monitor all of your Stages and Process here.',
};

export const Navbar = () => {
  const pathname = usePathname();
  const pathnameParts = pathname.split('/');
  const pathnameKey = pathnameParts[3] as keyof typeof pathnameMap;

  const { title, description } = pathnameMap[pathnameKey] || defaultMap;

  return (
    <nav className="flex items-center justify-between px-6 pt-4">
      <div className="hidden flex-col lg:flex">
        <h1 className="text-2xl font-semibold">{title}</h1>

        <p className="text-muted-foreground">{description}</p>
      </div>

      <MobileSidebar />

      <div className="flex items-center gap-x-2.5">
        <UserButton />

        <SourceCode />
      </div>
    </nav>
  );
};
