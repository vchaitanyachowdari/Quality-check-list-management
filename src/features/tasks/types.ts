import { Models } from 'node-appwrite';

export enum TaskStatus {
  BACKLOG = 'Pending_Inspection',
  TODO = 'Ready_for_Inspection',
  IN_PROGRESS = 'Inspection_in_Progress',
  IN_REVIEW = 'Under_Review',
  DONE = 'Approved',
}

export type Task = Models.Document & {
  name: string;
  status: TaskStatus;
  assigneeId: string;
  projectId: string;
  workspaceId: string;
  position: number;
  dueDate: string;
  description?: string;
};
