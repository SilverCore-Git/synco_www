export interface SyncoModel {
  id: string;
  name: string;
  type: "orchestrator" | "agent" | "connector";
  description: string;
  latencyMs: number;
  accuracy: number;
  maxTokens: number;
  contextWindow: string;
  useCase: string;
}

export interface SyncLog {
  id: string;
  time: string;
  source: "slack" | "notion" | "github" | "gmail" | "jira" | "db";
  status: "synced" | "syncing" | "pending";
  details: string;
  recordsCount: number;
}

export interface PlaygroundQuery {
  id: string;
  prompt: string;
  response: string;
  sourcesUsed: ("slack" | "notion" | "github" | "gmail" | "jira" | "db")[];
  timeTakenMs: number;
  tokensSynced: number;
}
