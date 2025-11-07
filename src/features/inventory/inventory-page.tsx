'use client';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { PlusCircle, Loader } from "lucide-react";
import { AppDispatch, RootState } from '@/lib/redux/store';
import { fetchInventory, selectInventoryItems, selectInventoryStatus } from './inventory-slice';

export default function InventoryPage() {
  const dispatch = useDispatch<AppDispatch>();
  const inventoryItems = useSelector(selectInventoryItems);
  const status = useSelector(selectInventoryStatus);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchInventory());
    }
  }, [status, dispatch]);


  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="font-headline">Inventory</CardTitle>
            <CardDescription>
              Track and manage your stock levels.
            </CardDescription>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" className="gap-1">
                <PlusCircle className="h-4 w-4" />
                Add Item
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Item</DialogTitle>
                <DialogDescription>
                  Add a new item to your inventory. Click save when you're done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input id="name" defaultValue="Espresso Beans" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="category" className="text-right">
                    Category
                  </Label>
                  <Input id="category" defaultValue="Coffee Beans" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="stock" className="text-right">
                    Stock
                  </Label>
                  <Input id="stock" type="number" defaultValue="10" className="col-span-3" />
                </div>
                 <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="unit" className="text-right">
                    Unit
                  </Label>
                  <Input id="unit" defaultValue="kg" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent>
        {status === 'loading' && (
            <div className="flex items-center justify-center p-8">
                <Loader className="h-6 w-6 animate-spin text-muted-foreground" />
                <p className="ml-2">Loading inventory...</p>
            </div>
        )}
        {status === 'succeeded' && (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Item Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Stock</TableHead>
              <TableHead>Unit</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inventoryItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell className="text-right">{item.stock}</TableCell>
                <TableCell>{item.unit}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      item.stock > item.lowStockThreshold
                        ? "outline"
                        : "destructive"
                    }
                    className={item.stock > item.lowStockThreshold ? "text-green-600 border-green-600" : ""}
                  >
                    {item.stock > item.lowStockThreshold
                      ? "In Stock"
                      : "Low Stock"}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        )}
        {status === 'failed' && <p className="text-destructive text-center">Failed to load inventory.</p>}
      </CardContent>
    </Card>
  );
}
