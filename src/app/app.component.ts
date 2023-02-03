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
  public test: any;

  quiz = new Quiz();

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {


    this.questionsTest2 = [
      {
        "idQuestion": "0",
        "body": "Votre application utilise-t-elle un système de versionning [ exp : Git, SVN ect… ]",
        "description": "test description",
        "category": "Méthodologie & process",
        "coef": "4",
        "responses": [
          {
            "idResponse": "01",
            "body": "Oui",
            "pourcentage": "50",
            "recomandation": "",
            "questionIsCountableIfchecked": "true"
          },
          {
            "idResponse": "02",
            "body": "Non",
            "pourcentage": "-30",
            "questionIsCountableIfchecked": "true"
          }
        ],
        "subQuestions": [
          {
            "responseIndex": "01",
            "body": "Quel système utilise-t-elle ?",
            "responses": [
              {
                "idResponse": "011",
                "body": "GIT",
                "pourcentage": "50",
                "recomandation": ""
              },
              {
                "idResponse": "012",
                "body": "SVN",
                "pourcentage": "20",
                "recomandation": ""
              },
              {
                "idResponse": "013",
                "body": "Autre",
                "pourcentage": "10",
                "recomandation": ""
              }
            ],
            "subQuestions": []
          }
        ]
      },
      {
        "idQuestion": "1",
        "body": "La partie technique de votre application est-elle documentée ?",
        "description": " documenattaion",
        "category": "Documentation",
        "coef": "2",
        "responses": [
          {
            "idResponse": "11",
            "body": "Oui",
            "pourcentage": "40",
            "recomandation": "",
            "questionIsCountableIfchecked": "true"
          },
          {
            "idResponse": "12",
            "body": "Non",
            "pourcentage": "-10",
            "questionIsCountableIfchecked": "true"
          }
        ],
        "subQuestions": [
          {
            "responseIndex": "11",
            "body": "Les prérequis de mise en place de l'application sont-ils mentionnés ?",
            "responses": [
              {
                "idResponse": "111",
                "body": "OUI",
                "pourcentage": "20",
                "recomandation": ""
              },
              {
                "body": "NON",
                "pourcentage": "0",
                "recomandation": ""
              }
            ],
            "subQuestions": []

          },
          {
            "responseIndex": "11",
            "body": "Les étapes de mise en place de l'application (installation & configuration .. )  sont-ils mentionnés ?",
            "responses": [
              {
                "body": "OUI",
                "pourcentage": "20",
                "recomandation": ""
              },
              {
                "body": "NON",
                "pourcentage": "0",
                "recomandation": ""
              }
            ],
            "subQuestions": []
          },
          {
            "responseIndex": "0",
            "body": "Un guide d'utilisation de l'application est-il présent ?",
            "responses": [
              {
                "body": "OUI",
                "pourcentage": "20",
                "recomandation": ""
              },
              {
                "body": "NON",
                "pourcentage": "0",
                "recomandation": ""
              }
            ],
            "subQuestions": []
          }
        ]
      },
      {
        "idQuestion": "2",
        "body": "Si votre application s'interface-t-elle avec d'autres services Les flux sont-ils documentés?  ",
        "description": " communication avec d'autres application/api ..",
        "category": "Documentation",
        "coef": "2",
        "responses": [
          {
            "body": "Oui",
            "pourcentage": "100",
            "recomandation": "",
            "questionIsCountableIfchecked": "true"
          },
          {
            "body": "Non",
            "pourcentage": "-10",
            "questionIsCountableIfchecked": "true"
          },
          {
            "body": "Non concerné",
            "pourcentage": "NA",
            "questionIsCountableIfchecked": "false"
          }
        ],
        "subQuestions": []
      }
    ];
    let questions: Question[] = [];
    this.questions$ = this.questionsTest2
    this.questions$.forEach((q: any) => {
      let question = new Question()
      question.id = q.idQuestion
      question.body = q.body
      question.coef = q.coef
      let subQuestions: Question[] = [];
      q.subQuestions.forEach((subQ: any) => {
        subQ.display = false;
        let subQuestion = new Question();
        subQuestion.id = subQ.idQuestion
        subQuestion.body = subQ.body
        subQuestions.push(subQ);
      });
      question.subQuestion = subQuestions;
      questions.push(question)
    });
    this.quiz.questions = questions
    console.log(this.questions$)
  }

  calcul() {
    console.log(this.quiz)
  }

  selectResponse(response: any) {
    console.log(response)
    this.questions$.forEach((q: any) => {
      q.subQuestions.forEach((subQ: any) => {
        if (subQ.responseIndex == response.idResponse) {
          subQ.display = true;
        } else {
          subQ.display = false;
        }

      });
    });

  }

  // sub question
  selectSubResponse(event: any) {
    console.log(event.target.value)
  }

}
