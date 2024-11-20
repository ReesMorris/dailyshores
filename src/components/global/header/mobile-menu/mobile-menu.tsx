'use client';

import { createRef, useState } from 'react';
import { MenuIcon } from 'lucide-react';
import * as Portal from '@radix-ui/react-portal';
import { primaryNavigation, secondaryNavigation } from '@/data';
import { IconButton } from '@/components/ui/buttons';
import { Wrapper } from '../../wrapper';
import { styles } from './mobile-menu.styles';
import { Item } from './item';
import { SubList } from './sub-list';

export const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = createRef<HTMLDivElement>();

  return (
    <div className={styles.container}>
      <IconButton
        icon={<MenuIcon />}
        aria-label='Toggle navigation'
        onClick={() => setIsOpen(!isOpen)}
      />

      {isOpen && (
        <Portal.Root>
          <nav ref={navRef} className={styles.navigation}>
            <Wrapper>
              <ul className={styles.list}>
                {primaryNavigation.map(item => (
                  <li key={item.id}>
                    <Item
                      href={item.url}
                      icon={item.icon}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Item>
                  </li>
                ))}
              </ul>

              {secondaryNavigation.map(item => (
                <SubList
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  items={item.items}
                  onClick={() => setIsOpen(false)}
                />
              ))}
            </Wrapper>
          </nav>
        </Portal.Root>
      )}
    </div>
  );
};
