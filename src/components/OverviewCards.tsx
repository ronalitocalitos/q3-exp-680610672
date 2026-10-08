import { useItemStore } from "@/store/dataStore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Summary, TextAlignJustify } from "lucide-react";
import {CategoryCards} from "@/components/CategoryCards";
export function OverviewCards() {
  const expenses = useItemStore((state) => state.expenses);
  const totalItems = expenses.length;
  const totalSpent = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  
  return (
    <Tabs defaultValue="overview">
      <TabsList className=" rounded-md bg-muted p-1 w-full">
        <TabsTrigger value="overview">
          <Summary className="mr-2 h-4 w-4" />
          Overview
        </TabsTrigger>
        <TabsTrigger value="By Category">
          <TextAlignJustify  />
          By Category
        </TabsTrigger>
      </TabsList> 
      <TabsContent value="overview">  
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl text-red-500 font-bold">฿{totalSpent.toFixed(2)}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Total Transactions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl text-blue-500 font-bold">{totalItems}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Average Expense</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl text-green-700 font-bold">฿{totalItems > 0 ? (totalSpent / totalItems).toFixed(2) : 0}</div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
      <TabsContent value="By Category">
        <CategoryCards />
      </TabsContent>
      
    </Tabs>
    
    
    
  );
}
