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


  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {


    this.questionsTest2 =
      [
        {
          "category": "Code Source",
          "questions": [
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
          ]
        },
        {
          "category": "Documentation",
          "questions": [
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
                  "idQuestion": "111",
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
                  "idQuestion": "112",
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
                  "idQuestion": "113",
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
            }

          ]
        },
        {
          "category": "User experience",
          "questions": [
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
          ]
        },
      ];
    let questions: Question[] = [];
    this.questionsTest2.forEach((list: any) => {
      let quiz = new Quiz();
      this.questions$ = list.questions
      this.questions$.forEach((q: any) => {
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
        question.subQuestion = subQuestions;
        questions.push(question)
      });
      quiz.questions = questions
      this.quizs.push(quiz);
    })

    console.log(this.questions$)
  }


  selectResponse(response: any, category: any) {
    console.log(response)
    this.questionsTest2.forEach((list: any) => {
      if (list.category === category) {
        list.questions.forEach((q: any) => {
          q.subQuestions.forEach((subQ: any) => {
            if (subQ.idQuestion == response.idResponse) {
              subQ.display = true;
            } else {
              subQ.display = false;
            }

          });
        });
      }
    })


  }

  // sub question
  selectSubResponse(event: any) {
    // console.log(event)
  }

  calcul() {
    console.log(this.quizs)
  }
}
