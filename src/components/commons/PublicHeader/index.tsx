import { Burger, Button, Divider, Drawer, Group, ScrollArea } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { PUBLIC_ROUTES } from '@/lib/routes';
import { Logo } from '../Logo';
import classes from './PublicHeader.module.css';

export function PublicHeader() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

  return (
    <>
      <Group justify="space-between" align="center" h="100%">
        <Logo size={40} />

        <Group h="100%" gap={0} visibleFrom="sm">
          {Object.entries(PUBLIC_ROUTES).map(([key, route]) => (
            <Link key={key} href={route.path} className={classes.link}>
              {route.label}
            </Link>
          ))}
          {/* <Link href="/" className={classes.link}>
            Home
          </Link>
          <Link href="/privacy" className={classes.link}>
            Política de Privacidade
          </Link> */}
        </Group>

        <Group visibleFrom="sm">
          <Button component={Link} href="/login" variant="default">
            Entrar
          </Button>
          <Button component={Link} href="/cadastre-se" variant="outline">
            Criar Conta
          </Button>
        </Group>

        <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
      </Group>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px" mx="-md">
          <Divider my="sm" />

          <Link href="/" className={classes.link} onClick={closeDrawer}>
            Home
          </Link>
          <Link href="/privacy" className={classes.link} onClick={closeDrawer}>
            Política de Privacidade
          </Link>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button component={Link} href="/login" variant="default">
              Entrar
            </Button>
            <Button component={Link} href="/cadastre-se" variant="outline">
              Criar Conta
            </Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </>
  );
}
