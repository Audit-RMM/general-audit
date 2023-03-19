export class Quiz {
    public entreprise!:string;
    public realisateur!:string;
    public email!:string;
    public category!:string;
    public questions!:Question[]

  }
  export class Question{
    public id!: string;
    public body!: string;
    public coef!: number;
    public pourcentage!: number;
    public recomandation!: string;
    public score!: number;
    public response!: any;
    public responses!: [];
    public isCountable!: boolean;
    public subQuestions!:Question[]
  }
  export class Infos{
    public entreprise!:string;
    public realisateur!:string;
    public email!:string;
  }
