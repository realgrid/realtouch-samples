import { Title, Text, Anchor, SimpleGrid, Container } from '@mantine/core';
import useStyles from './Welcome.styles';
import { ApplicationCard } from '../ApplicationCard/ApplicationCard';

const mockdata = [
  {
    image: 'https://i.imgur.com/Cij5vdL.png',
    title: 'Touch Todo App',
    link: 'https://touch-todo.wooritech.com/?type=example',
    category: 'TOUCH',
    description: '',
  },
  {
    image: 'https://i.imgur.com/Cij5vdL.png',
    title: 'iTube',
    link: 'https://taejong.vercel.app/',
    category: 'TOUCH',
    description: '',
  },
  {
    image: 'https://i.imgur.com/Cij5vdL.png',
    title: '롤토체스 전적검색',
    link: 'https://sihwang.vercel.app/',
    category: 'TOUCH',
    description: '',
  },
  {
    image: 'https://i.imgur.com/Cij5vdL.png',
    title: '부동산 어플',
    link: 'https://tacrosst.vercel.app/',
    category: 'TOUCH',
    description: '',
  },
  {
    image: 'https://i.imgur.com/Cij5vdL.png',
    title: '우리포럼(Q&A 질문게시판)',
    link: 'https://woori-forum.vercel.app/',
    category: 'TOUCH',
    description: '',
  },
  {
    image: 'https://i.imgur.com/Cij5vdL.png',
    title: '우리메일(이메일 App Service)',
    link: 'https://leesihyun.vercel.app/',
    category: 'TOUCH',
    description: '',
  },
  {
    image: 'https://i.imgur.com/Cij5vdL.png',
    title: '아이랩 모바일 뷰어',
    link: 'https://touch-jclee.vercel.app/',
    category: 'TOUCH',
    description: '',
  },
  {
    image: 'https://i.imgur.com/Cij5vdL.png',
    title: '날씨어플',
    link: 'https://yesjean.vercel.app/',
    category: 'TOUCH',
    description: '',
  },
  {
    image: 'https://i.imgur.com/Cij5vdL.png',
    title: 'RealReport Demo',
    link: 'https://wooripbg.vercel.app/',
    category: 'TOUCH',
    description: '',
  },
  {
    image: 'https://i.imgur.com/Cij5vdL.png',
    title: '딸기 경락가 조회',
    link: 'http://agro.stimbroca.com:3000/',
    category: 'TOUCH',
    description: '',
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
      <Container mt={30} mb={10}>
        <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
          {mockdata.map((obj, index) => <ApplicationCard
            key={index}
            image={obj.image}
            title={obj.title}
            link={obj.link}
            description={obj.description}
            category={obj.category}
          />
          )}
        </SimpleGrid>
      </Container>
    </>
  );
}
