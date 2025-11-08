import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { orderData, OrderStatus } from "@/shared/lib/data";
import { Button } from "@/components/ui/button";

const statusTabs: { status: OrderStatus; label: string }[] = [
  { status: "New", label: "New" },
  { status: "In Progress", label: "In Progress" },
  { status: "Completed", label: "Completed" },
  { status: "Cancelled", label: "Cancelled" },
];

export default function OrdersPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-headline font-bold">Orders</h1>
          <p className="text-muted-foreground">
            View and manage customer orders.
          </p>
        </div>
      </div>
      <Tabs defaultValue="New">
        <TabsList>
          {statusTabs.map(({ status, label }) => (
            <TabsTrigger key={status} value={status}>
              {label}
            </TabsTrigger>
          ))}
        </TabsList>
        {statusTabs.map(({ status }) => (
          <TabsContent key={status} value={status}>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {orderData
                .filter((order) => order.status === status)
                .map((order) => (
                  <Card key={order.id}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="font-headline text-lg">
                            Order #{order.id}
                          </CardTitle>
                          <CardDescription>
                            {order.customerName}
                          </CardDescription>
                        </div>
                        <Badge variant="secondary">{order.status}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul>
                        {order.items.map((item) => (
                          <li key={item.id} className="flex justify-between">
                            <span>
                              {item.quantity}x {item.name}
                            </span>
                            <span>${item.price.toFixed(2)}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 pt-4 border-t font-semibold flex justify-between">
                        <span>Total</span>
                        <span>${order.total.toFixed(2)}</span>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-end gap-2">
                      {order.status === "New" && (
                        <Button size="sm" variant="secondary">
                          Accept
                        </Button>
                      )}
                      {order.status === "In Progress" && (
                        <Button size="sm">Mark as Completed</Button>
                      )}
                      {(order.status === "New" ||
                        order.status === "In Progress") && (
                        <Button size="sm" variant="destructive">
                          Cancel
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                ))}
            </div>
             {orderData.filter((order) => order.status === status).length === 0 && (
                <div className="text-center py-16 text-muted-foreground">
                    <p>No {status.toLowerCase()} orders found.</p>
                </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
