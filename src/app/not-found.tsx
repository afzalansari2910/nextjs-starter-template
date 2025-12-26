import { getServerSession } from 'next-auth';
import { AdminLayout } from '@/components/layouts/AdminLayout';
import { PublicLayout } from '@/components/layouts/PublicLayout';
import { NotFoundPage } from '@/components/pages/NotFound';
import { authOptions } from '@/lib/next-auth';

export default async function NotFound() {
  const session = await getServerSession(authOptions);

  if (!session)
    return (
      <PublicLayout>
        <NotFoundPage />
      </PublicLayout>
    );

  return (
    <AdminLayout>
      <NotFoundPage backHref="/dashboard" backLabel="Voltar para dashboard" />
    </AdminLayout>
  );
}
