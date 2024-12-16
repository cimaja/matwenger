export interface TimelineItemProps {
  date: string;
  title: string;
  company: string;
  description: string;
}

export interface TimelineProps {
  items: TimelineItemProps[];
}