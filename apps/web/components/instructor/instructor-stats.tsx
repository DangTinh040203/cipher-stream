import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@shared/ui/components/card";
import { BookOpen, DollarSign, Star, Users } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ElementType;
}

function StatCard({ title, value, description, icon: Icon }: StatCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="text-muted-foreground size-4" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-muted-foreground text-xs">{description}</p>
      </CardContent>
    </Card>
  );
}

export function InstructorStats() {
  return (
    <div
      className={`
        grid gap-4
        sm:grid-cols-2
        lg:grid-cols-4
      `}
    >
      <StatCard
        title="Total Revenue"
        value="$12,450"
        description="+20.1% from last month"
        icon={DollarSign}
      />
      <StatCard
        title="Total Students"
        value="2,350"
        description="+180 new this month"
        icon={Users}
      />
      <StatCard
        title="Active Courses"
        value="8"
        description="2 pending review"
        icon={BookOpen}
      />
      <StatCard
        title="Average Rating"
        value="4.7"
        description="Based on 1,234 reviews"
        icon={Star}
      />
    </div>
  );
}
