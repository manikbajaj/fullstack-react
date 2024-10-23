import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useContext, useEffect, useState } from "react";

import { TasksContext } from "@/context/tasks.context.jsx";
import { extractQueryString } from "@/lib/extractQueryString.js";
import { useNavigate } from "react-router-dom";

export function OrderSelect() {
  const { tasks, setTasks } = useContext(TasksContext);
  const [currentOrder, setCurrentOrder] = useState();
  const [query, setQuery] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (tasks) {
      let order = extractQueryString(tasks.pagination.links.next).get("order");
      let currentPage = extractQueryString(tasks.pagination.links.current);
      let query = currentPage
        ? `/tasks?limit=${currentPage.get("limit")}&page=${currentPage.get(
            "page"
          )}`
        : "/tasks";
      setQuery(query);
      setCurrentOrder(order);
    }
  }, [tasks]);

  useEffect(() => {
    if (currentOrder && query) {
      navigate(`${query}&order=${currentOrder}`);
    }
    if (currentOrder && !query) {
      navigate(`/tasks?order=${currentOrder}`);
    }
  }, [currentOrder]);

  return (
    <Select
      value={currentOrder}
      onValueChange={(value) => setCurrentOrder(value)}
    >
      <SelectTrigger className="w-[140px]">
        <SelectValue placeholder="Select Order" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="asc">Asc</SelectItem>
          <SelectItem value="dsc">Dsc</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
