export interface Profile {
  id: number;
  name: string;
  firstname: string;
  image?: string;
  dob?: Date;
  parameters: Parameter[];
  lastConnection: Date;
}

export interface Parameter {
  id: number;
  type: string;
  value: number;
  isEnabled: boolean;
}
