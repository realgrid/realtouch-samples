import { Title, Text, Anchor, SimpleGrid, Container } from '@mantine/core';
import useStyles from './Welcome.styles';
import { BadgeCard } from '../ApplicationCard/ApplicationCard';

const mockdata = [
  {
    image: 'https://i.imgur.com/Cij5vdL.png',
    link: 'https://taejong-git-main-wooritech.vercel.app/',
    title: '태종\'스 아이튜브 아이랩',
    rating: 'outstanding',
    description: 'Resident Evil Village is a direct sequel to 2017’s Resident Evil 7, but takes a very different direction to its predecessor, namely the fact that this time round instead of fighting against various mutated zombies, you’re now dealing with more occult enemies like werewolves and vampires.',
    author: {
      name: 'Bill Wormeater',
      image: 'https://images.unsplash.com/photo-1593229874334-90d965f27c42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    },
  },
];

export function Welcome() {
  const { classes } = useStyles();

  return (
    <>
      <Title className={classes.title} align="center" mt={10}>
        <Text inherit variant="gradient" component="span">
          RealGrid-Touch
        </Text>
        {' '}Samples
      </Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        RealGrid-Touch는 모바일 웹 개발 생산성을 획기적으로 높여줄 수 있는 라이브러리 입니다.
        모바일 전용 앱 개발을 위해 시간과 비용을 낭비하지 마세요. 개발자라면 누구나 쉽게 배울 수 있습니다.
      </Text>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        <Anchor href="https://touch.realgrid.com/" size="lg">
          홈페이지
        </Anchor>
        를 방문하면 더 자세한 정보를 얻을 수 있습니다.
      </Text>
      <Container mt={30}>
        <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
          {mockdata.map((obj, index) => <BadgeCard
            key={index}
            image={obj.image}
            title={obj.title}
            country={obj.link}
            description={obj.description}
          />
          )}
        </SimpleGrid>
      </Container>
    </>
  );
}
