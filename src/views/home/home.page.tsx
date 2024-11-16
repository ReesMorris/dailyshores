import { Header } from '@/components/global/header';
import { Wrapper } from '@/components/global/wrapper';
import { Tasks } from '@/features/tasks/components';
import { styles } from './home.styles';

export const Page: React.FC = () => {
  return (
    <>
      <Header />
      <Wrapper className={styles.wrapper}>
        <Tasks.Section
          id='dailies'
          title='Dailies'
          timeLeft='1h 30m'
          profit='1000'
        >
          <Tasks.Item title='Daily Task 1' reward='+500 Hunter XP' />
        </Tasks.Section>

        <Tasks.Section id='weeklies' title='Weeklies'>
          <Tasks.Item title='Weekly Task 1' reward='+500 Hunter XP' />
          <Tasks.Item
            title='Weekly Task 2'
            description='Description of the task'
            reward='+500 Hunter XP'
          />
        </Tasks.Section>
      </Wrapper>
    </>
  );
};
