import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useContext, useEffect, useState } from "react";

import { TasksContext } from "@/context/tasks.context.jsx";

function extractQueryString(url) {
  const parsedUrl = new URL(url);
  const queryString = parsedUrl.search;
  return queryString;
}

export function TaskPagination() {
  const [links, setLinks] = useState();
  const [meta, setMeta] = useState();
  const { tasks, setTasks } = useContext(TasksContext);

  const previousPage = links ? extractQueryString(links.previous) : "#";
  const nextPage = links ? extractQueryString(links.next) : "#";

  useEffect(() => {
    if (tasks) {
      setLinks(tasks.pagination.links);
      setMeta(tasks.pagination.meta);
    }
  }, [tasks]);

  console.log(previousPage);
  console.log(meta);
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href={previousPage} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className="text-white" href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href={nextPage} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
