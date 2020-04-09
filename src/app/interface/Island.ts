export interface Island{
  name: string;
  fruit: string;
  turnipPrice: number;
  turnipCode: string;
  hemisphere: string;
  islandTime: Date;
  creationTime: Date;
  description: string;
  queued: number;
  visitorCount: number;
  visitorLimit: number;
  private: boolean;
  gateStatus: number;
  maxQueue: number;
  locked: number;
  commerce: string;

}

export interface TurnipExchangeResponse {
  success: boolean;
  message: string;
  islands: Island[];
}
