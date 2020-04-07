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
}

export interface TurnipExchangeResponse {
  success: boolean;
  message: string;
  islands: Island[];
}
