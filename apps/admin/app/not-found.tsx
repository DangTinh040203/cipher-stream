import { Button } from "@shared/ui/components/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className={`
        bg-background flex min-h-screen flex-col items-center justify-center
        px-4
      `}
    >
      <div className="text-center">
        <h1
          className={`
            text-foreground text-[8rem] leading-none font-bold tracking-tighter
          `}
        >
          404
        </h1>
        <p className="text-muted-foreground mt-2 text-xl font-medium">
          Oops! Page not found
        </p>
        <p className="text-muted-foreground mt-2 max-w-md text-sm">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Button asChild>
            <Link href="/">Back to Dashboard</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">Go Home</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
