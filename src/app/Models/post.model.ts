export interface Post {
  team: string;
  name: string;
  height: number;
  weight: number;
  id?: string;
}

export class Player {
  team: string;
  name: string;
  height: number;
  weight: number;
  id: string;

  constructor(team: string, name: string, height: number, weight: number, id: string){
    this.team = team;
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.id = id;
  }
}