import { Header } from "@/components/layout/header";
import { Main } from "@/components/layout/main";
import { ThemeToggle } from "@/components/theme-toggle";

export default function SettingsPage() {
  return (
    <>
      <Header fixed>
        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
        </div>
      </Header>
      <Main fixed>
        <div className="mb-2 flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
            <p className="text-muted-foreground">
              Manage your admin panel preferences.
            </p>
          </div>
        </div>
        <div className="-mx-4 flex-1 overflow-auto px-4 py-1">
          <div
            className={`
              text-muted-foreground flex h-[400px] items-center justify-center
              rounded-lg border border-dashed
            `}
          >
            Settings form placeholder
          </div>
        </div>
      </Main>
    </>
  );
}
