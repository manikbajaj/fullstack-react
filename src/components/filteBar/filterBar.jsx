import { TaskPagination } from "../taskPagination/taskPagination.jsx";

export function FilterBar() {
  return (
    <>
      <nav className="">
        <TaskPagination />
      </nav>
    </>
  );
}
