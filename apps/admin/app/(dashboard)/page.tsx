import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@shared/ui/components/card";
import { BarChart3, Eye, TrendingUp, Users } from "lucide-react";

import { Header } from "@/components/layout/header";
import { Main } from "@/components/layout/main";
import { TopNav } from "@/components/layout/top-nav";
import { ThemeToggle } from "@/components/theme-toggle";

const topNavLinks = [
  { title: "Overview", href: "/", isActive: true },
  { title: "Customers", href: "/customers", isActive: false },
  { title: "Products", href: "/products", isActive: false },
  { title: "Settings", href: "/settings", isActive: false },
];

const stats = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1% from last month",
    icon: TrendingUp,
  },
  {
    title: "Subscriptions",
    value: "+2,350",
    change: "+180.1% from last month",
    icon: Users,
  },
  {
    title: "Active Now",
    value: "+573",
    change: "+201 since last hour",
    icon: Eye,
  },
  {
    title: "Total Views",
    value: "+12,234",
    change: "+19% from last month",
    icon: BarChart3,
  },
];

export default function DashboardPage() {
  return (
    <>
      <Header fixed>
        <TopNav links={topNavLinks} />
        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
        </div>
      </Header>

      <Main fixed>
        <div className="mb-2 flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
            <p className="text-muted-foreground">
              Overview of your CipherStream platform.
            </p>
          </div>
        </div>

        <div
          className={`
            -mx-4 flex-1 overflow-auto px-4 py-1
            lg:flex-row lg:space-y-0 lg:space-x-12
          `}
        >
          <div
            className={`
              grid gap-4
              sm:grid-cols-2
              lg:grid-cols-4
            `}
          >
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card key={stat.title}>
                  <CardHeader
                    className={`
                      flex flex-row items-center justify-between space-y-0 pb-2
                    `}
                  >
                    <CardTitle className="text-sm font-medium">
                      {stat.title}
                    </CardTitle>
                    <Icon className="text-muted-foreground size-4" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <p className="text-muted-foreground text-xs">
                      {stat.change}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div
            className={`
              mt-4 grid gap-4
              md:grid-cols-2
              lg:grid-cols-7
            `}
          >
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  className={`
                    text-muted-foreground flex h-[300px] items-center
                    justify-center rounded-md border border-dashed
                  `}
                >
                  Chart placeholder
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Recent Sales</CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  className={`
                    text-muted-foreground flex h-[300px] items-center
                    justify-center rounded-md border border-dashed
                  `}
                >
                  Recent sales placeholder
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Main>
    </>
  );
}
