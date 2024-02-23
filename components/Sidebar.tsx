import Image from "next/image";
import {
  HomeIcon,
  InboxIcon,
  JobsIcon,
  MyNetworkIcon,
  ProjectsIcon,
  SearchIcon,
} from "./Icons";
import { cn } from "@/utils/helper";

const sidebarItems = [
  { label: "Scroll", icon: <HomeIcon /> },
  { label: "Projects", icon: <ProjectsIcon /> },
  { label: "Inbox", icon: <InboxIcon /> },
  { label: "Jobs", icon: <JobsIcon /> },
  { label: "Search", icon: <SearchIcon /> },
  { label: "My Network", icon: <MyNetworkIcon /> },
  {
    label: "Aniket",
    className: "mt-6",
    icon: (
      <div className="w-6 h-6 relative rounded-full overflow-hidden">
        <Image
          className="hover:opacity-90 transition-opacity border-1 border-white"
          src="https://dqy38fnwh4fqs.cloudfront.net/UH8OJJJNAD7NOEA2PQMRJLKGGBEE/516dc68c-5569-4aae-9166-f103be1d5d44.jpg"
          alt="Aniket Pawar"
          fill={true}
        />
      </div>
    ),
  },
  {
    label: "Loom",
    icon: (
      <div className="w-6 h-6 relative rounded-full overflow-hidden">
        <Image
          className="hover:opacity-90 transition-opacity border-1 border-white"
          src="https://logo.clearbit.com/loom.com"
          alt=""
          fill={true}
        />
      </div>
    ),
    text: "Manage jobs, teams, & more →",
  },
];

interface SidebarItemProps {
  label: string;
  text?: string;
  className?: string;
  icon: React.ReactNode;
}

function SidebarItem({ label, text, className, icon }: SidebarItemProps) {
  return (
    <div
      className={cn(
        "flex lg:flex-row flex-col cursor-pointer items-center group lg:py-2.5",
        className
      )}
    >
      <span className="relative text-white group-hover:text-gray-gray3">
        {icon}
      </span>
      <span className="flex flex-col lg:ml-2 mt-2 lg:mt-0 transition-all lg:group-hover:translate-x-1">
        <span className="line-clamp-1 lg:text-base text-xxs font-normal">
          {label}
        </span>
        {text && <span className="text-xxs font-light">{text}</span>}
      </span>
    </div>
  );
}

function MobileSidebar() {
  return (
    <div className="lg:hidden block">
      <div className="w-full fixed bottom-0 z-50 bg-white">
        <div className="grid grid-cols-5 w-full px-3 py-2 border-t border-primaryBorder">
          {sidebarItems.slice(0, 5).map((item, index) => (
            <SidebarItem
              key={index}
              label={item.label}
              icon={item.icon}
              className={item.className}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Sidebar() {
  return (
    <>
      <div className="w-[212px] border-r border-primaryBorder flex-col flex-shrink-0 fixed h-screen lg:flex justify-between hidden">
        <div className="relative my-3">
          <Image
            src="https://dqy38fnwh4fqs.cloudfront.net/website/peerlist-logo-full.svg"
            alt="Peerlist"
            loading="lazy"
            width={124}
            height={32}
          />
        </div>
        <div className="pr-6 flex flex-col h-full overflow-y-auto mt-6">
          {sidebarItems.map((item, index) => (
            <SidebarItem
              key={index}
              label={item.label}
              icon={item.icon}
              className={item.className}
              text={item.text}
            />
          ))}
        </div>
        <div className="py-2 flex flex-col justify-start">
          <div className="text-gray-gray5 text-xxs lg:mb-1 mb-6 font-semibold text-left mr-4">
            <a href="/blog" className="">
              <span className="text-light focus:outline-none hover:text-primary hover:underline ">
                Blog
              </span>
            </a>
            &nbsp;•&nbsp;
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:support@peerlist.io"
            >
              <span className="text-light focus:outline-none hover:text-primary hover:underline ">
                Support
              </span>
            </a>
            &nbsp;•&nbsp;
            <a
              target="_blank"
              rel="noreferrer"
              href="https://peerlist.notion.site/Help-Center-c27eb4165a1b4d7a98422123e782a50d?pvs=4"
            >
              <span className="text-light focus:outline-none hover:text-primary hover:underline ">
                Help
              </span>
            </a>
            &nbsp;•&nbsp;
            <a
              target="_blank"
              rel="noreferrer"
              href="https://peerlist.notion.site/Peerlist-Terms-Conditions-29dfa233548048ffa097b5e5784dac57"
            >
              <span className="text-light focus:outline-none hover:text-primary hover:underline ">
                T&amp;C
              </span>
            </a>
            <br />
            <a
              target="_blank"
              rel="noreferrer"
              href="https://peerlist.notion.site/Peerlist-Code-of-Conduct-3322d049c1284d0a8735c451e1b4efdb"
            >
              <span className="text-light focus:outline-none hover:text-primary hover:underline ">
                Code of Conduct
              </span>
            </a>
            &nbsp;•&nbsp;
            <a
              target="_blank"
              rel="noreferrer"
              href="https://peerlist.notion.site/Peerlist-Privacy-Policy-15ecedf717e742288cb640b6ec157ac5"
            >
              <span className="text-light focus:outline-none hover:text-primary hover:underline ">
                Privacy
              </span>
            </a>
          </div>
          <p className="text-gray-gray5 text-xxs text-left">
            © 2024 Peerlist, Inc. • v1.0.0
          </p>
        </div>
      </div>
      <MobileSidebar />
    </>
  );
}
