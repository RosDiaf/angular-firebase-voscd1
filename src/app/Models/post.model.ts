export interface Post {
  team: string;
  name: string;
  height: number;
  weight: number;
  id?: number;
}

export class Player {
  team: string;
  name: string;
  height: number;
  weight: number;
  id: number;

  constructor(team: string, name: string, height: number, weight: number, id: number){
    this.team = team;
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.id = id;
  }
}