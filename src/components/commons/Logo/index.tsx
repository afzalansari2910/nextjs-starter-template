import Image from 'next/image';
import { APP_NAME } from '@/lib/constants';

interface LogoProps {
  size?: number;
}

export function Logo({ size = 60 }: LogoProps) {
  return <Image src="/img/logo.png" alt={APP_NAME} width={size} height={size} priority />;
}
