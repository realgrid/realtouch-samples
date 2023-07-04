import { createStyles, Paper, Text, Title, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(440),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'box-shadow 150ms ease, transform 100ms ease',

    '&:hover': {
      boxShadow: theme.shadows.md,
      transform: 'scale(1.05)',
    },
  },

  title: {
    fontFamily: `Greycliff CF ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
    textShadow: '1px 1px 8px gray',
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },

  description: {
    opacity: 0.9,
    textShadow: '1px 1px 6px black',
    color: 'white',
  },
}));

interface ApplicationCardProps {
  image: string;
  title: string;
  category: string;
  link: string;
  description: string;
}

export function ApplicationCard({
  image, title, category, link, description,
}: ApplicationCardProps) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
      component="a"
      href={link}
      target="_blank"
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      {/* <Button component="a" radius="md" href={link} target="_blank">
        Show me. {title}
      </Button> */}
      <Text fz="sm" lineClamp={4} className={classes.description}>
        {description}
      </Text>
    </Paper>
  );
}
