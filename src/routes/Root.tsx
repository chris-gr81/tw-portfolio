import { Outlet } from "react-router-dom";

function Root() {
  return (
    <main className=" bg-zinc-900">
      <Outlet />
    </main>
  );
}

export default Root;
