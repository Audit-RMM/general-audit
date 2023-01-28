export class Question {
    public id!: string;
    public title!: string;
    public level!: string;
    public score!: number;
    public responses!: [];
    public isSubQuestion!: boolean;
  }