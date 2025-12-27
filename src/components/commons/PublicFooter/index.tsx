import { ActionIcon, Anchor, Container, Group, Text } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import { APP_DESCRIPTION } from '@/lib/constants';
import { Logo } from '../Logo';
import classes from './PublicFooter.module.css';

const data = [
  {
    title: 'Contato',
    links: [
      { label: 'E-mail comercial', link: 'mailto:agencia.foliveira@gmail.com' },
      { label: 'Agendar demonstração', link: 'https://cal.com/foliveira/nextjs-template' },
      { label: 'Formulário de contato', link: 'https://foliveiradev.netlify.app/' },
    ],
  },
  {
    title: 'Sobre',
    links: [
      { label: 'Portfólio', link: 'https://foliveiradev.netlify.app/' },
      {
        label: 'LinkedIn',
        link: 'https://www.linkedin.com/in/felipe-de-oliveira-souza-a558a814b/',
      },
      { label: 'GitHub', link: 'https://github.com/FelipeOliveiraDvP' },
    ],
  },
];

export function PublicFooter() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Logo size={80} />
          <Text size="xs" c="dimmed" className={classes.description}>
            {APP_DESCRIPTION}
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © {new Date().getFullYear()}{' '}
          <Anchor
            href="https://foliveiradev.netlify.app/"
            target="_blank"
            referrerPolicy="no-referrer"
          >
            foliveira.dev.br
          </Anchor>{' '}
          • Precisa de ajuda? Escreva para{' '}
          <Anchor href="mailto:agencia.foliveira@gmail.com">agencia.foliveira@gmail.com</Anchor>.
        </Text>

        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon
            component="a"
            href="https://github.com/FelipeOliveiraDvP"
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            color="gray"
            variant="subtle"
          >
            <IconBrandGithub size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            component="a"
            href="https://www.linkedin.com/in/felipe-de-oliveira-souza-a558a814b/"
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            color="gray"
            variant="subtle"
          >
            <IconBrandLinkedin size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
