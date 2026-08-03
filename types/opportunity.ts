export type OpportunityCategory =
  | "Job"
  | "Internship"
  | "Scholarship"
  | "Course";


export type OpportunityType =
  | "Remote"
  | "On-site";



export type Opportunity = {
  id: string;

  title: string;

  organization: string;

  category: OpportunityCategory;

  location: string;

  type: OpportunityType;

  deadline: string;

  description: string;

  requirements: string[];

  applyLink: string;

  tags: string[];
};