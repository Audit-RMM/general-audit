import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Question, Quiz} from './question.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'general-audit';
  public level!: string;
  public score!: number;
  public responses!: [];
  public questions$: any = [];
  public questionsTest2: any = [];
  public quizs: any = [];
  public quiz: Quiz;
  public recomandations: string[] = [];
  public finalScore : number = 0;
  public totalPercent : number[] = [];

  constructor(private http: HttpClient) {
    this.quiz = new Quiz();
  }

  ngOnInit(): void {


    this.questionsTest2 = [
      {
        "idQuestion": "01",
        "body": "Votre application utilise-t-elle un système de versionning [ exp : Git, SVN ect… ] ?",
        "coef": 2,
        "description": "et exercitation do sint laborum tempor deserunt amet pariatur labore",
        "responses": [
          {
            "idResponse": "01",
            "body": "OUI",
            "pourcentage": 51,
            "recomandation": "Bravo",
            "isCountable": true
          },
          {
            "idResponse": "02",
            "body": "NON",
            "pourcentage": 3,
            "recomandation": "Un systhème de versionning est obligatoire",
            "isCountable": true
          }
        ],
        "subQuestions": [
          {
            "idQuestion": "01",
            "body": "Quel système utilise-t-elle ? ",
            "responses": [
              {
                "idResponse": 0,
                "body": "SVN",
                "pourcentage": 15,
                "recomandation": "Tu dois migrer vers Git ou autre système ",
                "isCountable": true
              },
              {
                "idResponse": 1,
                "body": "GIT",
                "pourcentage": 21,
                "recomandation": "occaecat ad quis exercitation non laborum consectetur cupidatat laborum quis labore esse Lorem irure mollit",
                "isCountable": true
              },
              {
                "idResponse": 2,
                "body": "Mercurial",
                "pourcentage": 97,
                "recomandation": "",
                "isCountable": true
              },
              {
                "idResponse": 2,
                "body": "Autre",
                "pourcentage": 97,
                "recomandation": "",
                "isCountable": true
              }
            ]
          }
        ]
      },
      {
        "idQuestion": "10",
        "body": "La partie technique de votre application est-elle documentée ?",
        "coef": 1,
        "description": "",
        "responses": [
          {
            "idResponse": "11",
            "body": "OUI",
            "pourcentage": 51,
            "recomandation": "",
            "isCountable": true
          },
          {
            "idResponse": "12",
            "body": "NON",
            "pourcentage": 59,
            "recomandation": "La documentation est utile pour faciliter la continuté de travail ",
            "isCountable": true
          }
        ],
        "subQuestions": [
          {
            "idQuestion": "11",
            "body": " Les prérequis de mise en place de l'application sont-ils mentionnés ?",
            "responses": [
              {
                "idResponse": 0,
                "body": "OUI",
                "pourcentage": 45,
                "recomandation": "",
                "isCountable": true
              },
              {
                "idResponse": 1,
                "body": "NON",
                "pourcentage": 81,
                "recomandation": "Il est préférable de mentionner les prérequis",
                "isCountable": true
              }
            ]
          },
          {
            "idQuestion": "11",
            "body": "La partie fonctionnelle de votre application est-elle documentée (son contexte, son fonctionnement..) ?",
            "responses": [
              {
                "idResponse": 0,
                "body": "OUI",
                "pourcentage": 20,
                "recomandation": "",
                "isCountable": true
              },
              {
                "idResponse": 1,
                "body": "NON",
                "pourcentage": 49,
                "recomandation": "",
                "isCountable": true
              }
            ]
          },
          {
            "idQuestion": "11",
            "body": "Si votre application s'interface-t-elle avec d'autres services Les flux sont-ils documentés?",
            "responses": [
              {
                "idResponse": 0,
                "body": "OUI",
                "pourcentage": 20,
                "recomandation": "",
                "isCountable": true
              },
              {
                "idResponse": 1,
                "body": "NON",
                "pourcentage": 49,
                "recomandation": "",
                "isCountable": true
              },
              {
                "idResponse": 2,
                "body": "Non concerné",
                "pourcentage": 49,
                "recomandation": "",
                "isCountable": false
              }
            ]
          }
        ]
      },
      {
        "idQuestion": "11",
        "body": "Toutes les références / documents  de la StartUp sont-elles centralisées et bien accessibles aux personnes concernées ?",
        "coef": 1,
        "description": "Lorem ex velit eiusmod et esse mollit do sint sit",
        "responses": [
          {
            "idResponse": "11",
            "body": "OUI",
            "pourcentage": 51,
            "recomandation": "",
            "isCountable": true
          },
          {
            "idResponse": "12",
            "body": "NON",
            "pourcentage": 59,
            "recomandation": "La documentation est utile pour faciliter la continuté de travail ",
            "isCountable": true
          }
        ],
        "subQuestions": []
      },
      {
        "idQuestion": "20",
        "body": "Votre application est-elle compatible sur différentes plateformes ( navigateurs web / terminaux mobiles)  ?",
        "coef": 1,
        "description": "et exercitation do sint laborum tempor deserunt amet pariatur labore",
        "responses": [
          {
            "idResponse": "20",
            "body": "OUI",
            "pourcentage": 51,
            "recomandation": "Bravo",
            "isCountable": true
          },
          {
            "idResponse": "21",
            "body": "NON",
            "pourcentage": 3,
            "recomandation": "",
            "isCountable": true
          }
        ],
        "subQuestions": []
      },
      {
        "idQuestion": "21",
        "body": "Votre application respecte-t-elle le responsive design ?",
        "coef": 1,
        "description": "et exercitation do sint laborum tempor deserunt amet pariatur labore",
        "responses": [
          {
            "idResponse": "01",
            "body": "OUI",
            "pourcentage": 51,
            "recomandation": "Bravo",
            "isCountable": true
          },
          {
            "idResponse": "02",
            "body": "NON",
            "pourcentage": 3,
            "recomandation": "Le responsive design est l'un des facteurs le plus important pour les utilisateurs",
            "isCountable": true
          }
        ],
        "subQuestions": []
      },
    ];
    let questions: Question[] = [];
    this.questionsTest2.forEach((q: any) => {
      let question = new Question()
      question.id = q.idQuestion
      question.body = q.body
      question.coef = q.coef
      let subQuestions: Question[] = [];
      q.subQuestions.forEach((subQ: any) => {
        subQ.display = false;
        let subQuestion = new Question();
        subQuestion.body = subQ.body
        subQuestions.push(subQuestion);
      });
      question.subQuestions = subQuestions;
      questions.push(question)
    });
    this.quiz.questions = questions
    console.log(questions)
  }


  selectResponse(response: any, i: number, category: any) {
    this.questionsTest2[i].subQuestions.forEach((subQ: any) => {
      if (subQ.idQuestion == response.idResponse) {
        subQ.display = true;
      } else {
        subQ.display = false;
      }
    });


  }

  calcul() {
    console.log(this.quiz);
    console.log(this.recomandations);
    // pourcentage
    let pourcentage = [];
    // purge
    this.recomandations = [];
    // nb question
    let nbQuestion = this.quiz.questions.length;
    this.quiz.questions.forEach((question: Question) => {

      let questionFinalPercent = 0;
      questionFinalPercent += question.response.pourcentage
      let subRec: string[] = [];
      if (!this.isEmpty(question.response?.recomandation)) {

        this.recomandations.push(question.response?.recomandation)
      }
      question.subQuestions.forEach((subQuestion: Question) => {
        if(subQuestion.isCountable){
          questionFinalPercent += subQuestion.pourcentage
        }else{
          nbQuestion--;
        }
        if (!this.isEmpty(subQuestion?.recomandation)) {
          subRec.push(subQuestion?.recomandation)
        }
      })
      let totalPerQuest = questionFinalPercent * question.coef;
      this.totalPercent.push(totalPerQuest)
      this.recomandations.push(subRec.toString());
    })
    console.log(this.totalPercent);
    let tot = this.totalPercent.reduce((a, b) => a + b, 0)
    console.log(tot / nbQuestion);

  }

  isEmpty(str: string) {
    return (!str || str.length === 0 || str === "" || !/[^\s]/.test(str) || /^\s*$/.test(str) || str.replace(/\s/g, "") === "");
  }
}
