import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Question} from './question.model';
import {groupBy} from "rxjs";

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
  public isSubQuestion!: boolean;
  public questions: any = [];
  public questionsTest2: any = [];
  public test: any;

  question = new Question();


  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    /* this.questionsTest =
       [
         {
       "body": "Votre application utilise-t-elle un système de versionning [ exp : Git, SVN ect… ]",
       "coef": "4",
       "responses": [
         {
           "body": "Oui",
           "pourcentage": "50",
           "recomandation": "",
           "questionIsCountableIfchecked": "true",
           "subQuestions": [
             {
               "body": "Quel système utilise-t-elle ?",
               "responses": [
                 {
                   "body": "GIT",
                   "pourcentage": "50",
                   "recomandation": ""
                 },
                 {
                   "body": "SVN",
                   "pourcentage": "20",
                   "recomandation": ""
                 },
                 {
                   "body": "Autre",
                   "pourcentage": "10",
                   "recomandation": ""
                 }
               ]
             }
           ]
         },
         {
           "body": "Non",
           "pourcentage": "-30",
           "questionIsCountableIfchecked": "true"
         }
       ]
     },
     {
       "body": "La partie technique de votre application est-elle documentée ?",
       "coef": "2",
       "responses": [
         {
           "body": "Oui",
           "pourcentage": "40",
           "recomandation": "",
           "questionIsCountableIfchecked": "true",
           "subQuestions": [
             {
               "body": "Les prérequis de mise en place de l'application sont-ils mentionnés ?",
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
               ]
             },
             {
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
               ]
             },
             {
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
               ]
             }
           ]
         },
         {
           "body": "Non",
           "pourcentage": "-10",
           "questionIsCountableIfchecked": "true"
         }
       ]
     },
     {
       "body": "Si votre application s'interface-t-elle avec d'autres services Les flux sont-ils documentés?  ",
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
       ]
     },
     {
       "body": "Votre application est-elle configurée sur différents environnements",
       "coef": "3",
       "responses": [
         {
           "body": "Oui",
           "pourcentage": "100",
           "recomandation": "",
           "questionIsCountableIfchecked": "true"
         },
         {
           "body": "Non",
           "pourcentage": "-5",
           "questionIsCountableIfchecked": "true"
         }
       ]
     },
     {
       "body": " Votre application est-elle compatible sur différentes plateformes ( navigateurs web / terminaux mobiles) ?",
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
           "pourcentage": "5",
           "questionIsCountableIfchecked": "true"
         }
       ]
     },
     {
       "body": " Votre application respecte-t-elle le responsive design ?",
       "coef": "3",
       "responses": [
         {
           "body": "Oui",
           "pourcentage": "100",
           "recomandation": "",
           "questionIsCountableIfchecked": "true"
         },
         {
           "body": "Non",
           "pourcentage": "0",
           "questionIsCountableIfchecked": "true"
         }
       ]
     },
     {
       "body": "Votre application est-t-elle accessible ( accessibilité = c'est le fait de rendre utilisable son application par des personnes en situation de handicap ) ?",
       "coef": "1",
       "responses": [
         {
           "body": "Oui",
           "pourcentage": "100",
           "recomandation": "",
           "questionIsCountableIfchecked": "true"
         },
         {
           "body": "Non",
           "pourcentage": "0",
           "questionIsCountableIfchecked": "true"
         }
       ]
     },
     {
       "body": " Votre application utilise-t-elle un framework?",
       "coef": "1",
       "responses": [
         {
           "body": "OUI",
           "pourcentage": "10",
           "questionIsCountableIfchecked": "true",
           "subQuestions": [
             {
               "body": "Est-ce qu'il est dans sa dernière version stable?",
               "responses": [
                 {
                   "body": "Oui",
                   "pourcentage": "60",
                   "recomandation": ""
                 },
                 {
                   "body": "Non",
                   "pourcentage": "-5",
                   "recomandation": "",
                   "subQuestions": [
                     {
                       "body": "Une migration vers la dernière version est-t-elle planifiée?",
                       "responses": [
                         {
                           "body": "OUI",
                           "pourcentage": "40",
                           "recomandation": ""
                         },
                         {
                           "body": "Non",
                           "pourcentage": "0",
                           "recomandation": ""
                         }
                       ]
                     }
                   ]
                 }
               ]
             },
             {
               "body": "Non",
               "pourcentage": "10",
               "recomandation": "",
               "questionIsCountableIfchecked": "true"
             }
           ]
         }
       ]
     },
     {
       "body": "Votre application gère-t-elle les erreurs et les exceptions?",
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
           "pourcentage": "-5",
           "questionIsCountableIfchecked": "true"
         }
       ]
     },
     {
       "body": "Votre application dispose-t-elle d'un système de journalisation des activités (logs)?",
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
         }
       ]
     },
     {
       "body": "Votre application utilise-t-elle un système d'authentification?",
       "coef": "3",
       "responses": [
         {
           "body": "OUI",
           "pourcentage": "40",
           "questionIsCountableIfchecked": "true",
           "subQuestions": [
             {
               "body": "Est-ce qu'il est dans sa dernière version stable?",
               "responses": [
                 {
                   "body": "Oui",
                   "pourcentage": "60",
                   "recomandation": ""
                 },
                 {
                   "body": "Non",
                   "pourcentage": "-5",
                   "recomandation": "",
                   "subQuestions": [
                     {
                       "body": "Une migration vers la dernière version est-t-elle planifiée?",
                       "responses": [
                         {
                           "body": "OUI",
                           "pourcentage": "40",
                           "recomandation": ""
                         },
                         {
                           "body": "Non",
                           "pourcentage": "0",
                           "recomandation": ""
                         }
                       ]
                     }
                   ]
                 }
               ]
             },
             {
               "body": "Non",
               "pourcentage": "10",
               "recomandation": "",
               "questionIsCountableIfchecked": "true"
             }
           ]
         }
       ]
     }
   ];*/
    this.questionsTest2 = [
      {
        "body": "Votre application utilise-t-elle un système de versionning [ exp : Git, SVN ect… ]",
        "description": "test description",
        "category": " Méthodologie & process",
        "coef": "4",
        "responses": [
          {
            "body": "Oui",
            "pourcentage": "50",
            "recomandation": "",
            "questionIsCountableIfchecked": "true"
          },
          {
            "body": "Non",
            "pourcentage": "-30",
            "questionIsCountableIfchecked": "true"
          }
        ],
        "subQuestions": [
          {
            "responseIndex": "0",
            "body": "Quel système utilise-t-elle ?",
            "responses": [
              {
                "body": "GIT",
                "pourcentage": "50",
                "recomandation": ""
              },
              {
                "body": "SVN",
                "pourcentage": "20",
                "recomandation": ""
              },
              {
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
        "body": "La partie technique de votre application est-elle documentée ?",
        "description": " documenattaion",
        "category": "Documentation",
        "coef": "2",
        "responses": [
          {
            "body": "Oui",
            "pourcentage": "40",
            "recomandation": "",
            "questionIsCountableIfchecked": "true"
          },
          {
            "body": "Non",
            "pourcentage": "-10",
            "questionIsCountableIfchecked": "true"
          }
        ],
        "subQuestions": [
          {
            "responseIndex": "0",
            "body": "Les prérequis de mise en place de l'application sont-ils mentionnés ?",
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
    this.questions = this.questionsTest2
    /*.reduce((group:any, elt:any) => {
    const { category } = elt;
    console.log(elt)
    group[category] = group[category] ?? [];
    console.log(elt)
    group[category].push(elt);
    return group;
  }, {})*/
    console.log(this.questions)
  }

  calcul() {

  }
  selectResponse(event:any){
    console.log(event.target.value)

  }
  selectSubResponse(event:any){
    console.log(event.target.value)
  }

}
