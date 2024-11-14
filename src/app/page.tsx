import { Header } from '@/components/global/header';
import { Wrapper } from '@/components/global/wrapper';

export default function Home() {
  return (
    <>
      <Header />
      <Wrapper>
        <p>
          Wow, you&apos;re here early! This site is still being developed.
          Please come back in like.. a day or two. The game barely even has
          dailies yet! I&apos;ll be open-sourcing this project soon, so you can
          ask me questions or contribute to the project on GitHub.
        </p>
      </Wrapper>
    </>
  );
}
