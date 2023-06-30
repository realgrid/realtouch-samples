import { Container } from '@mantine/core';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';

export default function HomePage() {
  return (
    <Container mx={4}>
      <ColorSchemeToggle />
      <Welcome />
    </Container>
  );
}
