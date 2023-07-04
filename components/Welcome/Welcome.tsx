import { Title, Text, Anchor, SimpleGrid, Container } from '@mantine/core';
import useStyles from './Welcome.styles';
import { ApplicationCard } from '../ApplicationCard/ApplicationCard';

const mockdata = [
  {
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3870&q=80',
    title: '1. Touch Todo App',
    link: 'https://touch-todo.wooritech.com/?type=example',
    category: 'TOUCH',
    description: '할일 관리 터치 앱',
  },
  {
    image: 'https://images.unsplash.com/photo-1521989116480-519a01ffeb2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2736&q=80',
    title: '2. iTube 아이랩',
    link: 'https://taejong.vercel.app/',
    category: 'TOUCH',
    description: '유튜브 재생목록 뷰: 아이랩 도움말',
  },
  {
    image: 'https://images.unsplash.com/photo-1616469829526-7057a1427626?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80',
    title: '3. iTube RealGrid Help',
    link: 'https://taejong2.vercel.app/',
    category: 'TOUCH',
    description: '유튜브 재생목록 뷰: 리얼그리드 도움말',
  },
  {
    image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80',
    title: '4. 롤토체스 전적검색',
    link: 'https://sihwang.vercel.app/',
    category: 'TOUCH',
    description: '실제 데이터를 기반으로 제작한 TFT 전적 검색',
  },
  {
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3773&q=80',
    title: '5. 부동산 어플',
    link: 'https://tacrosst.vercel.app/',
    category: 'TOUCH',
    description: '부동산 시세, 현황등 조회',
  },
  {
    image: 'https://images.unsplash.com/photo-1615644256225-19c8af1b90d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80',
    title: '6. 우리포럼(Q&A 질문게시판)',
    link: 'https://woori-forum.vercel.app/',
    category: 'TOUCH',
    description: 'Q&A 게시판 서비스',
  },
  {
    image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2148&q=80',
    title: '7. 우리메일(이메일 App Service)',
    link: 'https://leesihyun.vercel.app/',
    category: 'TOUCH',
    description: '이메일 서비스',
  },
  {
    image: 'https://images.unsplash.com/photo-1614308459036-779d0dfe51ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3774&q=80',
    title: '8. 아이랩 모바일 뷰어',
    link: 'https://touch-jclee.vercel.app/',
    category: 'TOUCH',
    description: '아이랩 모바일 서비스',
  },
  {
    image: 'https://images.unsplash.com/photo-1508697014387-db70aad34f4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80',
    title: '9. 날씨어플',
    link: 'https://yesjean.vercel.app/',
    category: 'TOUCH',
    description: '현재 시간 날씨 정보와 3일뒤까지의 날씨 정보를 볼 수 있는 앱',
  },
  {
    image: 'https://images.unsplash.com/photo-1606242403142-5593a46b5f13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80',
    title: '10. RealReport Demo',
    link: 'https://wooripbg.vercel.app/',
    category: 'TOUCH',
    description: 'RealReport Demo',
  },
  {
    image: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2450&q=80',
    title: '11. iLab 모바일 대시보드',
    link: 'https://jonghak.vercel.app/',
    category: 'TOUCH',
    description: '아이랩 로그인시 메인 대시보드',
  },
  {
    image: 'https://images.unsplash.com/photo-1587393855524-087f83d95bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1360&q=80',
    title: '12. 딸기 경락가 조회',
    link: 'http://agro.stimbroca.com:3000/',
    category: 'TOUCH',
    description: '농수산물 데이터 api를 활용한 딸기 경락가 조회 앱',
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
        <SimpleGrid cols={1} breakpoints={[{ maxWidth: 'sm', cols: 1 }]} spacing={40}>
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
