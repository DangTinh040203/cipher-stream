import { Header } from "@/components/layout/header";
import { Main } from "@/components/layout/main";

export default function AnalyticsPage() {
  return (
    <>
      <Header fixed>
        <div className="ml-auto flex items-center space-x-4" />
      </Header>
      <Main fixed>
        <div className="mb-2 flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Analytics</h2>
            <p className="text-muted-foreground">
              Platform performance and usage statistics.
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
            Analytics charts placeholder
          </div>
        </div>
      </Main>
    </>
  );
}
