interface SvgProps extends React.SVGAttributes<HTMLOrSVGElement> {}

const HomeIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 20.9998H7C5.93913 20.9998 4.92172 20.5784 4.17157 19.8282C3.42143 19.0781 3 18.0607 3 16.9998V10.7078C2.99999 10.02 3.17732 9.34386 3.51487 8.74461C3.85242 8.14536 4.33879 7.64326 4.927 7.28682L9.927 4.25682C10.5521 3.87801 11.2691 3.67773 12 3.67773C12.7309 3.67773 13.4479 3.87801 14.073 4.25682L19.073 7.28682C19.6611 7.64317 20.1473 8.14511 20.4849 8.74417C20.8224 9.34324 20.9998 10.0192 21 10.7068V16.9998C21 18.0607 20.5786 19.0781 19.8284 19.8282C19.0783 20.5784 18.0609 20.9998 17 20.9998H15M9 20.9998V16.9998C9 16.2042 9.31607 15.4411 9.87868 14.8785C10.4413 14.3159 11.2044 13.9998 12 13.9998V13.9998C12.7956 13.9998 13.5587 14.3159 14.1213 14.8785C14.6839 15.4411 15 16.2042 15 16.9998V20.9998M9 20.9998H15"
        fill="currentColor"
        stroke="#212121"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9 21V17C9 16.2044 9.31607 15.4413 9.87868 14.8787C10.4413 14.3161 11.2044 14 12 14C12.7956 14 13.5587 14.3161 14.1213 14.8787C14.6839 15.4413 15 16.2044 15 17V21M9 21H15Z"
        stroke="#212121"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const ProjectsIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 25"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 7.76629V17.0603C21.0001 17.1674 20.9714 17.2726 20.9171 17.3649C20.8627 17.4572 20.7847 17.5333 20.691 17.5853L12.291 22.2513C12.202 22.3007 12.1018 22.3266 12 22.3266C11.8982 22.3266 11.798 22.3007 11.709 22.2513L3.309 17.5853C3.21532 17.5333 3.13725 17.4572 3.08292 17.3649C3.02858 17.2726 2.99995 17.1674 3 17.0603V7.76629C3.00013 7.65934 3.02884 7.55436 3.08317 7.46223C3.1375 7.3701 3.21547 7.29416 3.309 7.24229L11.709 2.57529C11.798 2.52591 11.8982 2.5 12 2.5C12.1018 2.5 12.202 2.52591 12.291 2.57529L20.691 7.24229C20.7845 7.29416 20.8625 7.3701 20.9168 7.46223C20.9712 7.55436 20.9999 7.65934 21 7.76629Z"
        stroke="#212121"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.52832 7.70728L11.7083 12.2513C11.7975 12.3008 11.8978 12.3269 11.9998 12.3269C12.1018 12.3269 12.2022 12.3008 12.2913 12.2513L20.5003 7.69128M12.0003 21.4133V12.4133"
        stroke="#212121"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.691 12.2423L3.891 7.9083C3.79964 7.85763 3.69663 7.8317 3.59217 7.83306C3.48771 7.83442 3.38541 7.86304 3.29541 7.91607C3.2054 7.96911 3.1308 8.04472 3.07899 8.13544C3.02718 8.22616 2.99995 8.32883 3 8.4333V17.0603C2.99995 17.1674 3.02858 17.2726 3.08292 17.3649C3.13725 17.4573 3.21532 17.5333 3.309 17.5853L11.109 21.9183C11.2004 21.969 11.3034 21.9949 11.4078 21.9935C11.5123 21.9922 11.6146 21.9636 11.7046 21.9105C11.7946 21.8575 11.8692 21.7819 11.921 21.6912C11.9728 21.6004 12.0001 21.4978 12 21.3933V12.7663C11.9999 12.6593 11.9712 12.5544 11.9168 12.4622C11.8625 12.3701 11.7845 12.2942 11.691 12.2423Z"
        stroke="#212121"
        stroke-width="1.5"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const InboxIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.4 10.2H15.6M8.4 13.8H12M12 21C16.9707 21 21 16.9707 21 12C21 7.0293 16.9707 3 12 3C7.0293 3 3 7.0293 3 12C3 13.6389 3.4383 15.177 4.2042 16.5L3.45 20.55L7.5 19.7958C8.86758 20.5869 10.4201 21.0024 12 21V21Z"
        fill="currentColor"
        stroke="#212121"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const JobsIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 7.5V5.5C8 4.39543 8.89543 3.5 10 3.5H14C15.1046 3.5 16 4.39543 16 5.5V7.5"
        fill="currentColor"
        stroke="#212121"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <rect
        x="3"
        y="7.5"
        width="18"
        height="13"
        rx="2"
        fill="currentColor"
        stroke="#212121"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3 13.5C8.66095 16.3526 15.339 16.3526 21 13.5"
        stroke="#212121"
        stroke-width="1.5"
        fill="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const SearchIcon = ({
  width = 24,
  height = 24,
  strokeWidth = 1.5,
  ...attr
}: SvgProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attr}
    >
      <path
        d="M16.5 16.5L21 21M3 10.7143C3 11.7273 3.19954 12.7305 3.58721 13.6664C3.97489 14.6024 4.54312 15.4528 5.25946 16.1691C5.9758 16.8854 6.82622 17.4537 7.76216 17.8414C8.6981 18.229 9.70123 18.4286 10.7143 18.4286C11.7273 18.4286 12.7305 18.229 13.6664 17.8414C14.6024 17.4537 15.4528 16.8854 16.1691 16.1691C16.8854 15.4528 17.4537 14.6024 17.8414 13.6664C18.229 12.7305 18.4286 11.7273 18.4286 10.7143C18.4286 8.66833 17.6158 6.70617 16.1691 5.25946C14.7224 3.81275 12.7602 3 10.7143 3C8.66833 3 6.70617 3.81275 5.25946 5.25946C3.81275 6.70617 3 8.66833 3 10.7143V10.7143Z"
        fill="currentColor"
        stroke="#212121"
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const MyNetworkIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 11C11.5609 11 12.5783 10.5786 13.3284 9.82843C14.0786 9.07828 14.5 8.06087 14.5 7C14.5 5.93913 14.0786 4.92172 13.3284 4.17157C12.5783 3.42143 11.5609 3 10.5 3C9.43913 3 8.42172 3.42143 7.67157 4.17157C6.92143 4.92172 6.5 5.93913 6.5 7C6.5 8.06087 6.92143 9.07828 7.67157 9.82843C8.42172 10.5786 9.43913 11 10.5 11Z"
        stroke="#212121"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="currentColor"
      />
      <path
        d="M3.5 19V18C3.49976 16.819 3.79833 15.6571 4.36794 14.6225C4.93754 13.5879 5.75965 12.7142 6.75773 12.0828C7.75582 11.4515 8.89743 11.0829 10.0763 11.0114C11.2551 10.9399 12.4329 11.1678 13.5 11.674"
        stroke="#212121"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="currentColor"
      />
      <path
        d="M15.1351 15.415L16.1741 13.212C16.2023 13.149 16.248 13.0955 16.3059 13.058C16.3637 13.0205 16.4312 13.0005 16.5001 13.0005C16.5691 13.0005 16.6366 13.0205 16.6944 13.058C16.7523 13.0955 16.798 13.149 16.8261 13.212L17.8661 15.415L20.1891 15.771C20.4871 15.816 20.6051 16.2 20.3891 16.42L18.7091 18.133L19.1051 20.554C19.1561 20.865 18.8451 21.102 18.5781 20.955L16.5001 19.812L14.4221 20.955C14.1551 21.102 13.8441 20.865 13.8951 20.555L14.2911 18.133L12.6111 16.42C12.3951 16.2 12.5131 15.816 12.8111 15.77L15.1351 15.415Z"
        stroke="#212121"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="currentColor"
      />
    </svg>
  );
};

const GreenTickIcon = () => {
  return (
    <svg
      width="10"
      height="8"
      viewBox="0 0 10 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.25 4.28571L3.5 6.375L8.75 1.5"
        stroke="#00AA45"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const RedTickIcon = () => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1_36677)">
        <path
          d="M6 11C8.7614 11 11 8.7614 11 6C11 3.23857 8.7614 1 6 1C3.23857 1 1 3.23857 1 6C1 8.7614 3.23857 11 6 11Z"
          stroke="#EB5757"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4 6H8"
          stroke="#EB5757"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_36677">
          <rect width="12" height="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const ShortlistedIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1_33021)">
        <path
          d="M8 14.6667C11.682 14.6667 14.6667 11.682 14.6667 8.00001C14.6667 4.31801 11.682 1.33334 8 1.33334C4.318 1.33334 1.33333 4.31801 1.33333 8.00001C1.33333 11.682 4.318 14.6667 8 14.6667Z"
          fill="#00AA45"
          stroke="#00AA45"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4.66667 8.33332L6.66667 10.3333L11.3333 5.66666"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_33021">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const AppliedIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1_33006)">
        <path
          d="M7.99998 14.6667C11.682 14.6667 14.6666 11.682 14.6666 8.00001C14.6666 4.31801 11.682 1.33334 7.99998 1.33334C4.31798 1.33334 1.33331 4.31801 1.33331 8.00001C1.33331 11.682 4.31798 14.6667 7.99998 14.6667Z"
          stroke="#0D0D0D"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_33006">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const RejectedIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1_36591)">
        <path
          d="M7.99998 14.6667C11.6818 14.6667 14.6666 11.6819 14.6666 8.00001C14.6666 4.31811 11.6818 1.33334 7.99998 1.33334C4.31808 1.33334 1.33331 4.31811 1.33331 8.00001C1.33331 11.6819 4.31808 14.6667 7.99998 14.6667Z"
          fill="#EB5757"
          stroke="#EB5757"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5.33331 8H10.6666"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_36591">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const EditIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 13H5.5L12.0625 6.43751C12.7529 5.74715 12.7529 4.62786 12.0625 3.93751C11.3721 3.24715 10.2529 3.24715 9.5625 3.93751L3 10.5V13"
        stroke="#24292E"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.9375 4.5625L11.4375 7.0625"
        stroke="#24292E"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const ShareIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="4.25"
        cy="8"
        r="1.875"
        stroke="#24292E"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle
        cx="11.75"
        cy="4.25"
        r="1.875"
        stroke="#24292E"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle
        cx="11.75"
        cy="11.75"
        r="1.875"
        stroke="#24292E"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.9375 7.1875L10.0625 5.0625"
        stroke="#24292E"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.9375 8.8125L10.0625 10.9375"
        stroke="#24292E"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const VisitIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.625 2.375H9.875M13.625 2.375L8 8M13.625 2.375V6.125"
        stroke="#0D0D0D"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.625 8.625V12.375C13.625 12.7065 13.4933 13.0245 13.2589 13.2589C13.0245 13.4933 12.7065 13.625 12.375 13.625H3.625C3.29348 13.625 2.97554 13.4933 2.74112 13.2589C2.5067 13.0245 2.375 12.7065 2.375 12.375V3.625C2.375 3.29348 2.5067 2.97554 2.74112 2.74112C2.97554 2.5067 3.29348 2.375 3.625 2.375H7.375"
        stroke="#0D0D0D"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};

const SettingsIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="8"
        cy="8"
        r="0.625"
        stroke="#24292E"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle
        cx="8"
        cy="12.375"
        r="0.625"
        stroke="#24292E"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle
        cx="8"
        cy="3.625"
        r="0.625"
        stroke="#24292E"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const ChevronDownIcon = () => {
  return (
    <svg
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L5 5L9 1"
        stroke="#0D0D0D"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export {
  HomeIcon,
  ProjectsIcon,
  InboxIcon,
  JobsIcon,
  SearchIcon,
  MyNetworkIcon,
  GreenTickIcon,
  RedTickIcon,
  ShortlistedIcon,
  RejectedIcon,
  AppliedIcon,
  EditIcon,
  ShareIcon,
  VisitIcon,
  SettingsIcon,
  ChevronDownIcon,
};
