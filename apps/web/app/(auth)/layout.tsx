import { GraduationCap } from "lucide-react";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Left panel - branding */}
      <div
        className={`
          bg-primary relative hidden w-1/2 flex-col justify-between p-10
          lg:flex
        `}
      >
        <div
          className={`
            from-primary via-primary to-primary/80 absolute inset-0
            bg-gradient-to-br
          `}
        />
        <div
          className={`
            absolute -right-40 -bottom-40 size-[500px] rounded-full bg-white/5
            blur-3xl
          `}
        />
        <div
          className={`
            absolute -top-20 -left-20 size-[300px] rounded-full bg-white/5
            blur-3xl
          `}
        />

        <div className="relative">
          <Link href="/" className="flex items-center gap-2">
            <div
              className={`
                flex size-10 items-center justify-center rounded-xl bg-white/10
              `}
            >
              <GraduationCap className="text-primary-foreground size-6" />
            </div>
            <span className="text-primary-foreground text-xl font-bold">
              CipherStream
            </span>
          </Link>
        </div>

        <div className="relative space-y-4">
          <h1
            className={`
              text-primary-foreground text-4xl leading-tight font-bold
            `}
          >
            Learn Without
            <br />
            Limits
          </h1>
          <p className="text-primary-foreground/70 max-w-md text-lg">
            Join over 500,000 students and unlock access to thousands of
            world-class courses from industry experts.
          </p>
        </div>

        <p className="text-primary-foreground/50 relative text-sm">
          © {new Date().getFullYear()} CipherStream. All rights reserved.
        </p>
      </div>

      {/* Right panel - form */}
      <div
        className={`
          flex w-full flex-col justify-center px-4 py-10
          lg:w-1/2 lg:px-16
        `}
      >
        <div className="mx-auto w-full max-w-[400px]">
          {/* Mobile logo */}
          <div
            className={`
              mb-8 flex items-center gap-2
              lg:hidden
            `}
          >
            <div
              className={`
                bg-primary flex size-8 items-center justify-center rounded-lg
              `}
            >
              <GraduationCap className="text-primary-foreground size-5" />
            </div>
            <span className="text-lg font-bold">CipherStream</span>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}
