export interface ContactRequest {
  id: string;
  name: string;
  email: string;
  company: string;
  teamSize: number;
  hostingPreference: 'sovereign_cloud' | 'on_premise';
  submittedAt: string;
}

export interface FeedbackVote {
  questionId: string;
  questionText: string;
  votedAnswer: string;
  comment?: string;
  votedAt: string;
}

export interface ChannelMessage {
  id: string;
  senderName: string;
  senderAvatar: string;
  senderRole: string;
  contentPlain: string;
  contentEncrypted: string;
  timestamp: string;
  isBot?: boolean;
}

export interface SinkoChannel {
  id: string;
  name: string;
  category: string;
  iconType: 'hash' | 'volume' | 'shield' | 'lock';
  unread?: boolean;
  messages: ChannelMessage[];
}
