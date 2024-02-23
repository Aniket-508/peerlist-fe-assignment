import Sidebar from "@/components/Sidebar";
import ManageApplicants from "@/components/ManageApplicants";

export default function Home() {
  return (
    <div className="lg:w-[1200px] w-full min-h-screen mx-auto flex font-body">
      <Sidebar />
      <ManageApplicants />
    </div>
  );
}
