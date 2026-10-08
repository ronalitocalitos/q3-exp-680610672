import { useItemStore } from "@/store/dataStore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash } from "lucide-react";

export function ItemList() {
  
  const { expenses } = useItemStore();
  const deleteExpense = useItemStore((state) => state.deleteExpense);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Expenses</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="text-right"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {expenses.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="text-center text-muted-foreground py-6"
                >
                  No expenses recorded yet.
                </TableCell>
              </TableRow>
            ) : (
              // replace the following hardcoded row with the dynamic mapping of data items
              expenses.map((expense) => (
                <TableRow key={expense.id}>
                  <TableCell>{new Date(expense.date).toLocaleDateString()}</TableCell>
                  <TableCell>{expense.title}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{expense.category}</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    ฿{expense.amount.toFixed(2)}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => deleteExpense(expense.id)}

                    >
                      <Trash/>
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
