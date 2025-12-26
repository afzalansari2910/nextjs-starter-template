import { AdminLayout } from '@/components/layouts/AdminLayout';

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  return <AdminLayout>{children}</AdminLayout>;
}
