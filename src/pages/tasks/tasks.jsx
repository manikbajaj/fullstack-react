import { FilterBar } from "@/components/filteBar/filterBar.jsx";
import { Task } from "@/components/task/task.jsx";
import { TaskSidebar } from "@/components/taskSidebar/taskSidebar.jsx";
import { TasksCounter } from "@/components/tasksCounter/tasksCounter.jsx";

export default function Tasks() {
  return (
    <section className="flex flex-row w-full p-4 gap-8">
      <section className="flex basis-2/3 justify-center ">
        <div className="flex flex-col w-4/5 p-4 items-center">
          <h1 className="text-white font-bold text-2xl mb-8 w-full">
            Tasks as on: Wednesday, 1 Jan 2025
          </h1>
          <div className="w-11/12 flex flex-col">
            <div className="flex justify-between mb-16">
              <TasksCounter count={12} type="todo" />
              <TasksCounter count={4} type="inProgress" />
              <TasksCounter count={10} type="completed" />
            </div>

            <FilterBar />
            <Task dueDate={new Date("2025-01-01T12:00:00.000Z")} />
          </div>
        </div>
      </section>
      <TaskSidebar />
    </section>
  );
}
