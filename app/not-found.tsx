import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
      <h1 className="text-4xl font-bold">404</h1>
      <h2 className="mb-4 text-xl">Page Not Found</h2>
      <p className="mb-8 text-muted-foreground">
        Could not find requested resource
      </p>
      <Link href="/dashboard">
        <Button variant="default">Return to Dashboard</Button>
      </Link>
    </div>
  )
}
