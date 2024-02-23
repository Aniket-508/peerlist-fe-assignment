export type Status = "SHORTLISTED" | "REJECTED" | "APPLIED";

export type Applicant = {
  id: number;
  name: string;
  profileImg?: string;
  bio?: string;
  isVerified?: boolean;
  yoe?: string;
  isHoldingOffer?: boolean;
  noticePeriod?: string;
  email?: string;
  mobile?: string;
  status: Status;
};

export const applicantsMockData: Applicant[] = [
  {
    id: 1,
    profileImg:
      "https://dqy38fnwh4fqs.cloudfront.net/UH6A8ANEEGOQKGDCGNGMD7JGJ6DD/0bfca408-f5e7-47b3-8acc-1181222dbb71.jpg",
    isVerified: true,
    name: "Esther Howard",
    bio: "Cloud Consultant at Rapid Circle",
    yoe: "11y 6m",
    isHoldingOffer: true,
    noticePeriod: "Immediate",
    email: "darrell.stewards@emaildomain.com",
    mobile: "+1 12345 67490",
    status: "REJECTED",
  },
  {
    id: 2,
    profileImg:
      "https://dqy38fnwh4fqs.cloudfront.net/UHMQL6DBQ67ARRGIDBG9KNO89G8A/hmql6dbq67arrgidbg9kno89g8a-profile.webp",
    isVerified: true,
    name: "Ralph Edwards",
    bio: "Cloud Consultant at Rapid Circle",
    yoe: "11y 6m",
    isHoldingOffer: true,
    noticePeriod: "Immediate",
    email: "raplh.edwards@emaildomain.com",
    mobile: "+1 12345 67490",
    status: "APPLIED",
  },
  {
    id: 3,
    profileImg:
      "https://dqy38fnwh4fqs.cloudfront.net/UH9O68DQPMEPLN8FDJKDJRK8EKL8/h9o68dqpmepln8fdjkdjrk8ekl8-profile.webp",
    isVerified: true,
    name: "Wade Warren",
    bio: "Cloud Consultant at Rapid Circle",
    yoe: "11y 6m",
    isHoldingOffer: true,
    noticePeriod: "Immediate",
    email: "wade.warren@emaildomain.com",
    mobile: "+1 12345 67490",
    status: "APPLIED",
  },
  {
    id: 4,
    profileImg:
      "https://dqy38fnwh4fqs.cloudfront.net/UHDNEDOKNJQBGLACLEGO79OODE7E/hdnedoknjqbglaclego79oode7e-profile.webp",
    isVerified: true,
    name: "Marvin McKinney",
    bio: "Cloud Consultant at Rapid Circle",
    yoe: "11y 6m",
    isHoldingOffer: true,
    noticePeriod: "Immediate",
    email: "marvin.mckinney@emaildomain.com",
    mobile: "+1 12345 67490",
    status: "SHORTLISTED",
  },
  {
    id: 5,
    profileImg:
      "https://dqy38fnwh4fqs.cloudfront.net/UHJKRQ6LN9BDK7GIKNBEBL6JLDD9/hjkrq6ln9bdk7giknbebl6jldd9-profile.webp",
    isVerified: true,
    name: "Aldene Koel",
    bio: "Cloud Consultant at Rapid Circle",
    yoe: "11y 6m",
    isHoldingOffer: true,
    noticePeriod: "Immediate",
    email: "aldene.koel@emaildomain.com",
    mobile: "+1 12345 67490",
    status: "SHORTLISTED",
  },
];
