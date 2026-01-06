'use client';
import Button from '@/components/Button/Button.tsx';
import { useRouter } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found | NexOps',
  description: 'The page you are looking for does not exist in the NexOps Enterprise Cloud Observability Platform.'
};

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-4 text-center'>
      <h1 className='text-4xl font-bold mb-4'>Page not found</h1>
      <p className='text-lg mb-8 max-w-md'>We couldn't find the page you're looking for. It may have been moved or deleted.</p>
      <Button onClick={() => router.push('/dashboard')} className='px-6 py-2'>
        Go Back to Dashboard
      </Button>
    </div>
  );
}