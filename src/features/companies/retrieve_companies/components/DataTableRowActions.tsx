"use client"
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Row } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

interface DataTableRowActionsProps<TData> {
    row: Row<TData>
    onEdit: (value: TData) => void
    onDelete: (value: TData) => void
    }

const DataTableRowActions = <TData,>({row,onEdit,onDelete}:DataTableRowActionsProps<TData>) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem onClick={()=> onEdit(row.original) }>Actualizar</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={()=> onDelete(row.original)} >Eliminar</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
    )
}

export default DataTableRowActions;