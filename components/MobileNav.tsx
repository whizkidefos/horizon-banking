"use client";

import { sidebarLinks } from '@/constants';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();

  return (
    <aside className='w-full max-w-[264px]'>
      <Sheet>
        <SheetTrigger>
          <Image
            src={'/icons/hamburger.svg'}
            alt='Menu'
            width={30}
            height={30}
            className='cursor-pointer'
          />
        </SheetTrigger>

        <SheetContent side={'left'} className='border-none bg-white'>
          <Link href='/' className='cursor-pointer items-center gap-1 flex px-4'>
            <Image src='/icons/logo.svg' alt='Logo' width={34} height={34} className='' />
            <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>Horizon</h1>
          </Link>

          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 text-white mt-10">
                {sidebarLinks.map((link) => {
                  const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`);
                  return (
                    <SheetClose key={link.label} asChild>
                      <Link
                        href={link.route}
                        key={link.label}
                        className={cn('mobilenav-sheet_close w-full', {'bg-bankGradient' : isActive})}>
                          <Image
                              src={link.imgURL}
                              alt={link.label}
                              width={24}
                              height={24}
                              className={cn({'brightness-[3] invert-0': isActive})}
                            />
                          <p className={cn('text-16 font-semibold text-black-2', {'text-white': isActive})}>
                            {link.label}
                          </p>
                      </Link>
                    </SheetClose>
                  )
                })}
                USER
              </nav>
            </SheetClose>
            FOOTER
          </div>

        </SheetContent>

      </Sheet>
    </aside>
  )
}

export default MobileNav;