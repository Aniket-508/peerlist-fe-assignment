"use client";

import { Children, useEffect, useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import Image from "next/image";
import Link from "next/link";
import {
  AppliedIcon,
  ChevronDownIcon,
  EditIcon,
  RejectedIcon,
  SearchIcon,
  SettingsIcon,
  ShareIcon,
  ShortlistedIcon,
  VisitIcon,
} from "./Icons";
import IconButton from "./ui/IconButton";
import { Applicant, Status, applicantsMockData } from "@/lib/data";
import { cn } from "@/utils/helper";
import useDebounce from "@/hooks/useDebounce";

const actionItems = [
  { icon: <EditIcon /> },
  { icon: <ShareIcon /> },
  { icon: <VisitIcon /> },
  { icon: <SettingsIcon /> },
];

function JobHeader() {
  return (
    <div className="border-b border-primaryBorder lg:p-6 p-4 bg-gray-gray0">
      <div className="mb-4 flex justify-between">
        <div className="flex item-center gap-4">
          <Link
            className="inline-flex"
            rel="noreferrer"
            target="_blank"
            href="https://peerlist.io/?ref=peerlist"
          >
            <div className="border border-primaryBorder bg-white inline-block p-2 rounded-2xl">
              <div className="w-10 h-10 relative">
                <Image
                  className="rounded-full hover:opacity-90 transition-opacity bg-white"
                  src="https://logo.clearbit.com/peerlist.io"
                  alt="Peerlist"
                  fill
                />
              </div>
            </div>
          </Link>
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3">
              <h1 className="font-semibold text-lg">
                Software Engineer, Frontend
              </h1>
              <ChevronDownIcon />
            </div>
            <p className="text-primary font-normal text-sm">
              at Peerlist<span> • Full-time</span>
              <span> • Remote (United States, Canada)</span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-[10px]">
          {actionItems.map((item, index) => (
            <IconButton key={index}>{item.icon}</IconButton>
          ))}
        </div>
      </div>
      <div className="pl-[74px] flex py-4 justify-between">
        <div className="flex gap-6 flex-wrap">
          <p className="text-gray-gray7 font-normal text-xs mb-0.5">
            <span className="font-medium">78</span> Candidates
          </p>
          <p className="text-gray-gray7 font-normal text-xs mb-0.5">
            <span className="font-medium">68</span> Applied w/Peerlist
          </p>
          <p className="text-gray-gray7 font-normal text-xs mb-0.5">
            <span className="font-medium">2456</span> Views
          </p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-xxs">
            Posted <span className="font-semibold">1d ago</span>
          </p>
          <div className="flex items-center text-xxs">
            by
            <Image
              src="https://dqy38fnwh4fqs.cloudfront.net/UHDNK79BK6LA89DCMPRQGEGQOGGO/hdnk79bk6la89dcmprqgegqoggo-profile.webp"
              alt="Akash Bhadange"
              width={16}
              height={16}
              className="mx-1 rounded-full"
            />
            <p className="font-semibold cursor-pointer hover:underline underline-offset-1">
              Akash Bhadange
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ApplicantCardProps extends Applicant {
  headerHelper?: React.ReactNode;
  footerHelper?: React.ReactNode;
}

function ApplicantCard(props: ApplicantCardProps) {
  const {
    profileImg,
    headerHelper,
    footerHelper,
    isVerified,
    name,
    bio,
    yoe,
    isHoldingOffer,
    noticePeriod,
    email,
    mobile,
  } = props;

  return (
    <div className="group flex flex-col gap-2 p-4 rounded-lg border border-primaryBorder">
      <div className="flex justify-between">
        {profileImg && (
          <Image
            className="rounded-full"
            src={profileImg}
            alt={name}
            width={32}
            height={32}
          />
        )}
        {headerHelper}
      </div>
      <div>
        <div className="flex items-center gap-1">
          <p className="text-sm font-semibold group-hover:underline">{name}</p>
          {isVerified && (
            <Image src="/verified.svg" alt="Verified" width={16} height={16} />
          )}
        </div>
        {bio && <p className="text-xs">{bio}</p>}
      </div>
      <div className="flex items-center justify-between gap-4">
        {yoe && (
          <div>
            <p className="text-xxs text-gray-400">Experience</p>
            <p className="text-xs font-semibold">{yoe}</p>
          </div>
        )}
        <div>
          <p className="text-xxs text-gray-400">Holding offer?</p>
          <p className="text-xs font-semibold">
            {isHoldingOffer ? "Yes" : "No"}
          </p>
        </div>
        {noticePeriod && (
          <div>
            <p className="text-xxs text-gray-400">Notice period</p>
            <p className="text-xs font-semibold">{noticePeriod}</p>
          </div>
        )}
      </div>
      {email || mobile ? (
        <div>
          <p className="text-xxs text-gray-400">Contact</p>
          {email && <p className="text-xs font-semibold">{email}</p>}
          {mobile && <p className="text-xs font-semibold">{mobile}</p>}
        </div>
      ) : null}
      {footerHelper}
    </div>
  );
}

interface StatusContainerProps {
  status: Status;
  children: React.ReactNode;
}

const StatusIconsMap: Record<Status, React.ReactNode> = {
  SHORTLISTED: <ShortlistedIcon />,
  REJECTED: <RejectedIcon />,
  APPLIED: <AppliedIcon />,
};

function StatusContainer({ status, children }: StatusContainerProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-primaryBorder",
        status === "REJECTED" && "border-red-red1",
        status === "SHORTLISTED" && "border-green-green1"
      )}
    >
      <div
        className={cn(
          "flex items-center gap-2 p-2 rounded-tl-md rounded-tr-md",
          status === "REJECTED" && "bg-red-red1",
          status === "APPLIED" && "bg-gray-gray2",
          status === "SHORTLISTED" && "bg-green-green1"
        )}
      >
        {StatusIconsMap[status]}
        <p className="text-xs font-semibold">
          {status} • {Children.count(children)}
        </p>
      </div>
      <div className="flex flex-col p-2 gap-2">{children}</div>
    </div>
  );
}

export default function ManageApplicants() {
  const [searchInput, setSearchInput] = useState("");
  const [applicants, setApplicants] = useState(applicantsMockData);

  const debouncedSearchInput = useDebounce(searchInput, 300);

  useEffect(() => {
    const newApplicants = applicantsMockData.filter((applicant) => {
      const { name, bio, mobile, email } = applicant;
      const searchString = `${name} ${bio} ${mobile} ${email}`.toLowerCase();
      return searchString.includes(debouncedSearchInput.toLowerCase());
    });
    setApplicants(newApplicants);
  }, [debouncedSearchInput]);

  const onSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newInputValue = e.target.value;
    setSearchInput(newInputValue);
  };

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = source.droppableId;
    const finish = destination.droppableId;

    if (start === finish) {
      return;
    }

    const newApplicants = Array.from(applicants);
    const applicant = newApplicants.find(
      ({ id }) => id.toString() === draggableId
    );
    if (applicant) {
      applicant.status = finish as Status;
    }
    setApplicants(newApplicants);
  };

  return (
    <div className="w-full lg:pl-[212px] border-r border-primaryBorder">
      <JobHeader />
      <div className="border-b border-primaryBorder">
        <div className="px-4 pt-4 sm:pt-6 sm:px-6">
          <label className="relative block">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-white font-bold">
              <SearchIcon width={16} height={16} strokeWidth={2.5} />
            </span>
            <input
              type="text"
              className="block w-full py-2 pl-8 pr-3 placeholder:text-gray-400 text-sm"
              placeholder="Search candidates"
              value={searchInput}
              onChange={onSearchInputChange}
            />
          </label>
        </div>
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 sm:p-6">
            {["REJECTED", "APPLIED", "SHORTLISTED"].map((status, index) => (
              <Droppable key={index} droppableId={status}>
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    <StatusContainer status={status as Status}>
                      {applicants
                        .filter((applicant) => applicant.status === status)
                        .map((applicant, index) => (
                          <Draggable
                            key={applicant.id}
                            draggableId={applicant.id.toString()}
                            index={index}
                          >
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                <ApplicantCard {...applicant} />
                              </div>
                            )}
                          </Draggable>
                        ))}
                    </StatusContainer>
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            ))}
          </div>
        </DragDropContext>
      </div>
    </div>
  );
}
