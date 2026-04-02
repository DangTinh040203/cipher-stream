import { Badge } from "@shared/ui/components/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@shared/ui/components/table";
import type { Metadata } from "next";

import { purchases } from "@/lib/mock-data";

export const metadata: Metadata = { title: "Purchase History" };

const statusColors = {
  completed: "bg-emerald-500/10 text-emerald-500",
  refunded: "bg-amber-500/10 text-amber-500",
  pending: "bg-blue-500/10 text-blue-500",
};

export default function PurchasesPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Purchase History</h1>
        <p className="text-muted-foreground mt-2">
          Your course purchase records
        </p>
      </div>

      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Course</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Payment</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {purchases.map((p) => (
              <TableRow key={p.id}>
                <TableCell className="max-w-[300px] font-medium">
                  <span className="line-clamp-1">{p.course.title}</span>
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {p.date}
                </TableCell>
                <TableCell>${p.amount}</TableCell>
                <TableCell className="text-muted-foreground">
                  {p.paymentMethod}
                </TableCell>
                <TableCell>
                  <Badge variant="secondary" className={statusColors[p.status]}>
                    {p.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
