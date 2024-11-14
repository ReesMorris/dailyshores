import { Fragment } from 'react';
import { secondaryNavigation } from '@/data';
import { Dropdown } from '@/components/ui/dropdown';
import { NavigationItem } from '../navigation-item';
import { styles } from './secondary-navigation.styles';

export const SecondaryNavigation = () => {
  return (
    <ul className={styles.list} aria-label='Secondary Navigation'>
      <li className={styles.item}>
        <Dropdown.Root
          triggerAsChild
          sideOffset={-5}
          trigger={
            <NavigationItem
              showChevron
              item={{
                id: 'more-resources',
                title: 'More Resources',
                url: '#'
              }}
            />
          }
        >
          {secondaryNavigation.map((section, index) => {
            const isLastSection = index === secondaryNavigation.length - 1;

            return (
              <Fragment key={section.id}>
                <Dropdown.Label>{section.title}</Dropdown.Label>
                {section.items.map(item => (
                  <Dropdown.Item
                    key={item.id}
                    external
                    icon={item.icon}
                    href={item.url}
                  >
                    {item.title}
                  </Dropdown.Item>
                ))}
                {!isLastSection && <Dropdown.Separator />}
              </Fragment>
            );
          })}
        </Dropdown.Root>
      </li>
    </ul>
  );
};
