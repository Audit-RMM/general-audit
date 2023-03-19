import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Infos, Question, Quiz} from './question.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'general-audit';
  displayRapport : boolean = false;
  public level!: string;
  public score!: number;
  public questions: any = [];
  public quiz: Quiz;
  public recomandations: string[] = [];
  public infos:Infos = new Infos();
  public finalScore : number = 0;
  public totalPercent : number[] = [];

  constructor(private http: HttpClient) {
    this.quiz = new Quiz();
  }

  ngOnInit(): void {


    this.questions =this.questions = [
      {
        "idQuestion": "1",
        "body": "Votre application utilise-t-elle un système de versionning [ exp : Git, SVN,Microsoft Azure Backup ect… ] ?",
        "coef": 4,
        "description": "Un logiciel de gestion de versions, parfois appelé VCS pour Version Control System, est un outil qui enregistre, suit et gère plusieurs versions d’un fichier ou d’un code source.  ",
        "responses": [
          {
            "idResponse": "10",
            "body": "OUI",
            "pourcentage": 50,
            "recomandation": "",
            "isCountable": true
          },
          {
            "idResponse": "11",
            "body": "NON",
            "pourcentage": -30,
            "recomandation": "Un Outil de versionning est indispensable pour stocker vos fichiers tout en conservant la chronologie des modifications effectuées",
            "isCountable": true
          }
        ],
        "subQuestions": [
          {
            "idQuestion": "10",
            "body": "Quel système utilise-t-elle ? ",
            "responses": [
              {
                "idResponse": 0,
                "body": "SVN",
                "pourcentage": 20,
                "recomandation": "Tu dois migrer vers un autre système distribué comme Git ou autre système ",
                "isCountable": true
              },
              {
                "idResponse": 1,
                "body": "GIT",
                "pourcentage": 50,
                "recomandation": "",
                "isCountable": true
              },
              {
                "idResponse": 2,
                "body": "Mercurial",
                "pourcentage": 50,
                "recomandation": "",
                "isCountable": true
              },              {
                "idResponse": 2,
                "body": "Microsoft Azure Backup",
                "pourcentage": 50,
                "recomandation": "",
                "isCountable": true
              },
              {
                "idResponse": 2,
                "body": "Autre",
                "pourcentage": 40,
                "recomandation": "",
                "isCountable": true
              }
            ]
          }
        ]
      },
      {
        "idQuestion": "2",
        "body": "La partie technique de votre application est-elle documentée ?",
        "coef": 2,
        "description": "",
        "responses": [
          {
            "idResponse": "20",
            "body": "OUI",
            "pourcentage": 40,
            "recomandation": "",
            "isCountable": true
          },
          {
            "idResponse": "21",
            "body": "NON",
            "pourcentage": -10,
            "recomandation": "La documentation est utile pour faciliter la continuté de travail ",
            "isCountable": true
          }
        ],
        "subQuestions": [
          {
            "idQuestion": "20",
            "body": " Les prérequis de mise en place de l'application sont-ils mentionnés ?",
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
                "pourcentage": 0,
                "recomandation": "Il est préférable de mentionner les prérequis",
                "isCountable": true
              }
            ]
          },
          {
            "idQuestion": "20",
            "body": "Les étapes de mise en place de l'application (installation & configuration .. )  sont-ils mentionnés ?",
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
                "pourcentage": 0,
                "recomandation": "Il est préférable de decrire les étapes de mise en place de l'application pour faciliter le travail",
                "isCountable": true
              }
            ]
          },
          {
            "idQuestion": "20",
            "body": "Un guide d'utilisation de l'application est-il présent ?",
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
                "pourcentage": 0,
                "recomandation": "Il est préférable de mettre un guide d'utilisation de l'application",
                "isCountable": true
              }
            ]
          }
        ]
      },
      {
        "idQuestion": "3",
        "body": " Votre application est-elle configurée sur différents environnements( un env de tests, env de production) ",
        "coef": 2,
        "description": " Par exemple un environement de qualification, de recette , iso production",
        "responses": [
          {
            "idResponse": "30",
            "body": "OUI",
            "pourcentage": 100,
            "recomandation": "",
            "isCountable": true
          },
          {
            "idResponse": "31",
            "body": "NON",
            "pourcentage": 0,
            "recomandation": "Tu dois avoir au moins un autre enviromment autre que l'environnement de production ",
            "isCountable": true
          }
        ],
      "subQuestions": []
  },
    {
      "idQuestion": "4",
      "body": "Votre application est-elle compatible sur différentes plateformes ( navigateurs web / terminaux mobiles)",
      "coef": 2,
      "description": "",
      "responses": [
      {
        "idResponse": "40",
        "body": "OUI",
        "pourcentage": 100,
        "recomandation": "",
        "isCountable": true
      },
      {
        "idResponse": "41",
        "body": "NON",
        "pourcentage": 0,
        "recomandation": "Il est préférable d'assurer que votre application sur différentes plateformes( chrome, firefox .., android,ios pour les applications mobiles)  ",
        "isCountable": true
      }
    ],
      "subQuestions": []
    },
    {
      "idQuestion": "5",
      "body": "  Votre application est-t-elle accessible ( accessibilité = c'est le fait de rendre utilisable son application par des personnes en situation de handicap )",
      "coef": 1,
      "description": "",
      "responses": [
      {
        "idResponse": "50",
        "body": "OUI",
        "pourcentage": 100,
        "recomandation": "",
        "isCountable": true
      },
      {
        "idResponse": "51",
        "body": "NON",
        "pourcentage": 0,
        "recomandation": "",
        "isCountable": true
      }
    ],
      "subQuestions": []
    },
    {
      "idQuestion": "6",
      "body": "Votre application utilise-t-elle un framework? ",
      "coef": 1,
      "description": "",
      "responses": [
      {
        "idResponse": "60",
        "body": "OUI",
        "pourcentage": 40,
        "recomandation": "",
        "isCountable": true
      },
      {
        "idResponse": "61",
        "body": "NON",
        "pourcentage": 10,
        "recomandation": "",
        "isCountable": true
      }
    ],
      "subQuestions": [
      {
        "idQuestion": "60",
        "body": " est-ce qu'il est dans sa dernière version stable?",
        "responses": [
          {
            "idResponse": 0,
            "body": "OUI",
            "pourcentage": 60,
            "recomandation": "",
            "isCountable": true
          },
          {
            "idResponse": 1,
            "body": "NON",
            "pourcentage": -5,
            "recomandation": "",
            "isCountable": true
          }
        ]
      },
      {
        "idQuestion": "60",
        "body": "Si Non, Une migration vers la dernière version est-t-elle planifiée?",
        "responses": [
          {
            "idResponse": 0,
            "body": "OUI",
            "pourcentage": 40,
            "recomandation": "",
            "isCountable": true
          },
          {
            "idResponse": 1,
            "body": "NON",
            "pourcentage": 0,
            "recomandation": "",
            "isCountable": true
          }
        ]
      }
    ]
    },
    {
      "idQuestion": "7",
      "body": "Votre application gère-t-elle les erreurs et les exceptions?",
      "coef": 2,
      "description": "",
      "responses": [
      {
        "idResponse": "70",
        "body": "OUI",
        "pourcentage": 100,
        "recomandation": "",
        "isCountable": true
      },
      {
        "idResponse": "71",
        "body": "NON",
        "pourcentage": -5,
        "recomandation": "",
        "isCountable": true
      }
    ],
      "subQuestions": []
    },
    {
      "idQuestion": "8",
      "body": "Votre application dispose-t-elle d'un système de journalisation des activités (logs)?",
      "coef": 2,
      "description": "",
      "responses": [
      {
        "idResponse": "80",
        "body": "OUI",
        "pourcentage": 100,
        "recomandation": "",
        "isCountable": true
      },
      {
        "idResponse": "81",
        "body": "NON",
        "pourcentage": -10,
        "recomandation": "",
        "isCountable": true
      }
    ],
      "subQuestions": []
    },
    {
      "idQuestion": "9",
      "body": "Toutes les références / documents  de la StartUp sont-elles centralisées et bien accessibles aux personnes concernées ?",
      "coef": 1,
      "description": "",
      "responses": [
      {
        "idResponse": "90",
        "body": "OUI",
        "pourcentage": 51,
        "recomandation": "",
        "isCountable": true
      },
      {
        "idResponse": "91",
        "body": "NON",
        "pourcentage": 59,
        "recomandation": "La documentation est utile pour faciliter la continuté de travail ",
        "isCountable": true
      }
    ],
      "subQuestions": []
    },
    {
      "idQuestion": "10",
      "body": "Votre application respecte-t-elle le responsive design ?",
      "coef": 1,
      "description": "Le responsive design est une approche de conception web visant à modifier l'apparence d'un site selon la taille de l'écran et le support utilisé par l'internaute",
      "responses": [
      {
        "idResponse": "100",
        "body": "OUI",
        "pourcentage": 51,
        "recomandation": "Bravo, Il important pour les utilisateurs d'avoir des IHMs responsive",
        "isCountable": true
      },
      {
        "idResponse": "101",
        "body": "NON",
        "pourcentage": 3,
        "recomandation": "Le responsive design est l'un des facteurs le plus important pour les utilisateurs",
        "isCountable": true
      }
    ],
      "subQuestions": []
    },
    {
        "idQuestion": "11",
        "body": "L'application propose-t-elle un service de contact/canal de communication?",
        "coef": 1,
        "description": " formulaire de contact, adresse mail ou numéro de téléphone",
        "responses": [
          {
            "idResponse": "110",
            "body": "OUI",
            "pourcentage": 100,
            "recomandation": "",
            "isCountable": true
          },
          {
            "idResponse": "111",
            "body": "NON",
            "pourcentage": 0,
            "recomandation": "",
            "isCountable": true
          }
        ],
        "subQuestions": []
      },
    {
        "idQuestion": "12",
        "body": "Votre application utilise-t-elle un système d'authentification?",
        "coef": 3,
        "description": "Un système d'authentification par formulaire, SSO ...",
        "responses": [
          {
            "idResponse": "120",
            "body": "OUI",
            "pourcentage": 40,
            "recomandation": "",
            "isCountable": true
          },
          {
            "idResponse": "121",
            "body": "NON",
            "pourcentage": -20,
            "recomandation": "",
            "isCountable": true
          }
        ],
        "subQuestions": [
          {
            "idQuestion": "120",
            "body": "L'authentification est-elle assurée par login/mdp ",
            "responses": [
              {
                "idResponse": 0,
                "body": "OUI",
                "pourcentage": 0,
                "recomandation": "",
                "isCountable": true
              },
              {
                "idResponse": 1,
                "body": "NON",
                "pourcentage": 0,
                "recomandation": "",
                "isCountable": true
              }
            ]
          },
          {
            "idQuestion": "120",
            "body": "Un système à deux facteurs est-il présent? ",
            "responses": [
              {
                "idResponse": 0,
                "body": "OUI",
                "pourcentage": 40,
                "recomandation": "",
                "isCountable": true
              },
              {
                "idResponse": 1,
                "body": "NON",
                "pourcentage": 0,
                "recomandation": "",
                "isCountable": true
              }
            ]
          }
        ]
      },
    {
        "idQuestion": "13",
        "body": "Si votre application fournie des api, l'accès à ces api est-il sécurisé par un token d'authentification ou login/mdp ? ",
        "coef": 3,
        "description": "API est l'acronyme d'Application Programming Interface (interface de programmation d'application), une solution logicielle qui permet à deux applications de commun ",
        "responses": [
          {
            "idResponse": "130",
            "body": "OUI",
            "pourcentage": 100,
            "recomandation": "",
            "isCountable": true
          },
          {
            "idResponse": "131",
            "body": "NON",
            "pourcentage": -30,
            "recomandation": "Il faut sécurisé la consommation de vos APIs",
            "isCountable": true
          },
          {
            "idResponse": "132",
            "body": "Non concerné",
            "pourcentage": 0,
            "recomandation": "",
            "isCountable": true
          }
        ],
        "subQuestions": []
      },
    {
        "idQuestion": "14",
        "body": "Si votre application contient des données sensibles, sont-elles chiffrées?  ",
        "coef": 5,
        "description": "Les données sensibles sont des données dont le traitement peut entrainer un risque important pour les personnes concernées: Les données biométriques, comptes bancaires ..",
        "responses": [
          {
            "idResponse": "140",
            "body": "OUI",
            "pourcentage": 100,
            "recomandation": "",
            "isCountable": true
          },
          {
            "idResponse": "141",
            "body": "NON",
            "pourcentage": -25,
            "recomandation": "Il est obligatoire de chiffrer toute donnée sensible qui concerne les utilisateurs de votre application",
            "isCountable": true
          },
          {
            "idResponse": "132",
            "body": "Non concerné",
            "pourcentage": 0,
            "recomandation": "",
            "isCountable": true
          }
        ],
        "subQuestions": []
      },
    {
        "idQuestion": "15",
        "body": "L'accès à l'application est-il sécurisé avec des protocoles de transmission des données sécurisés  à savoir https? ",
        "coef": 3,
        "description": "",
        "responses": [
          {
            "idResponse": "150",
            "body": "OUI",
            "pourcentage": 100,
            "recomandation": "",
            "isCountable": true
          },
          {
            "idResponse": "151",
            "body": "NON",
            "pourcentage": -10,
            "recomandation": "",
            "isCountable": true
          }
        ],
        "subQuestions": []
      },
    {
        "idQuestion": "16",
        "body": "L'accès aux différents fonctionnalités de l'application est géré en fonction des rôles ? ",
        "coef": 2,
        "description": "",
        "responses": [
          {
            "idResponse": "160",
            "body": "OUI",
            "pourcentage": 100,
            "recomandation": "",
            "isCountable": true
          },
          {
            "idResponse": "161",
            "body": "NON",
            "pourcentage": -5,
            "recomandation": "",
            "isCountable": true
          }
        ],
        "subQuestions": []
      },
    {
        "idQuestion": "17",
        "body": "Effectuez-vous régulièrement des audits de sécurité?",
        "coef": 2,
        "description": "",
        "responses": [
          {
            "idResponse": "170",
            "body": "OUI",
            "pourcentage": 50,
            "recomandation": "",
            "isCountable": true
          },
          {
            "idResponse": "171",
            "body": "NON",
            "pourcentage": -30,
            "recomandation": "Il est préférable de faire des audits de sécurité de temps en temps ",
            "isCountable": true
          }
        ],
        "subQuestions": [
          {
            "idQuestion": "170",
            "body": "Les corrections nécessaires sont-elles effectuées?",
            "responses": [
              {
                "idResponse": 0,
                "body": "OUI",
                "pourcentage": 50,
                "recomandation": "Bravo, c'est important de corriger les bugs de sécurité de l'application ",
                "isCountable": true
              },
              {
                "idResponse": 1,
                "body": "Non",
                "pourcentage": 0,
                "recomandation": " Il est péférable de corriger les bugs de sécurité",
                "isCountable": true
              }
            ]
          }
        ]
      },
    {
        "idQuestion": "18",
        "body": "La partie fonctionnelle de votre application est-elle documentée (son contexte, son fonctionnement..) ?",
        "coef": 2,
        "description": " Que fait l'application , les règles métiers, cible ...",
        "responses": [
          {
            "idResponse": "180",
            "body": "OUI",
            "pourcentage": 100,
            "recomandation": "",
            "isCountable": true
          },
          {
            "idResponse": "181",
            "body": "NON",
            "pourcentage": -10,
            "recomandation": "",
            "isCountable": true
          }
        ],
        "subQuestions": []
      },
    {
        "idQuestion": "19",
        "body": "Un process ( étapes : études, conception, dev , tests …  ) est-il suivi pendant la réalisation ?",
        "coef": 2,
        "description": "",
        "responses": [
          {
            "idResponse": "190",
            "body": "OUI",
            "pourcentage": 100,
            "recomandation": "",
            "isCountable": true
          },
          {
            "idResponse": "191",
            "body": "NON",
            "pourcentage": -10,
            "recomandation": "",
            "isCountable": true
          }
        ],
        "subQuestions": []
      },
    {
        "idQuestion": "20",
        "body": "Effectuez-vous une décomposition par lot / version ?",
        "coef": 2,
        "description": " Lot par feature par exemple",
        "responses": [
          {
            "idResponse": "200",
            "body": "OUI",
            "pourcentage": 100,
            "recomandation": "",
            "isCountable": true
          },
          {
            "idResponse": "201",
            "body": "NON",
            "pourcentage": -10,
            "recomandation": "",
            "isCountable": true
          }
        ],
        "subQuestions": []
      },
    {
        "idQuestion": "21",
        "body": " L'expression de besoin est-elle centralisée ( La liste des demandes est centralisé dans un endroit partagé )? ",
        "coef": 1,
        "description": "",
        "responses": [
          {
            "idResponse": "210",
            "body": "OUI",
            "pourcentage": 100,
            "recomandation": "",
            "isCountable": true
          },
          {
            "idResponse": "211",
            "body": "NON",
            "pourcentage": -10,
            "recomandation": "",
            "isCountable": true
          }
        ],
        "subQuestions": []
      },
    {
        "idQuestion": "22",
        "body": "Effectuez-vous des tests (unitaire, intégration, fonctionnel .. )de code  ?",
        "coef": 2,
        "description": "",
        "responses": [
          {
            "idResponse": "220",
            "body": "OUI",
            "pourcentage": 40,
            "recomandation": "",
            "isCountable": true
          },
          {
            "idResponse": "221",
            "body": "NON",
            "pourcentage": -25,
            "recomandation": " Il faut effectuer des tests de non regression pour assurer la scalabilité de votre application",
            "isCountable": true
          }
        ],
        "subQuestions": [
          {
            "idQuestion": "220",
            "body": "Quel est votre couverture de code par ces tests ?",
            "responses": [
              {
                "idResponse": 0,
                "body": "Inférieur à 30 % ",
                "pourcentage": 10,
                "recomandation": "",
                "isCountable": true
              },
              {
                "idResponse": 1,
                "body": "Entre  30% et 60 %",
                "pourcentage": 2,
                "recomandation": " Il est péférable de corriger les bugs de sécurité",
                "isCountable": true
              },
              {
                "idResponse": 3,
                "body": "Supérieur à 60%",
                "pourcentage": 40,
                "recomandation": " Bravo, la couverture de vos tests est élevée , c'est une bonne signe",
                "isCountable": true
              }
            ]
          }
        ]
      },
    {
        "idQuestion": "23",
        "body": "Effectuez-vous des tests automatisés (Selenium, Robot Framework , Cypress.. ) ? ",
        "coef": 1,
        "description": "",
        "responses": [
          {
            "idResponse": "230",
            "body": "OUI",
            "pourcentage": 100,
            "recomandation": "",
            "isCountable": true
          },
          {
            "idResponse": "231",
            "body": "NON",
            "pourcentage": 50,
            "recomandation": "",
            "isCountable": true
          }
        ],
        "subQuestions": []
      },
    {
        "idQuestion": "24",
        "body": "Utilisiez-vous un système de Lint de code ( intégré dans l'IDE /  job  ) ? ",
        "coef": 1,
        "description": "Par exemple sonarLint,tslint,phplint ou autre ",
        "responses": [
          {
            "idResponse": "240",
            "body": "OUI",
            "pourcentage": 100,
            "recomandation": "",
            "isCountable": true
          },
          {
            "idResponse": "241",
            "body": "NON",
            "pourcentage": 30,
            "recomandation": "",
            "isCountable": true
          }
        ],
        "subQuestions": []
      },
    {
        "idQuestion": "25",
        "body": "-Effectuez-vous des analyses de code (Sonar … )? ",
        "coef": 1,
        "description": "Par exemple SonarQube.. ",
        "responses": [
          {
            "idResponse": "250",
            "body": "OUI",
            "pourcentage": 100,
            "recomandation": "",
            "isCountable": true
          },
          {
            "idResponse": "251",
            "body": "NON",
            "pourcentage": 10,
            "recomandation": "L'analyse statique de code aide bien à améliorer la qualité de votre code",
            "isCountable": true
          }
        ],
        "subQuestions": []
      },
    {
        "idQuestion": "27",
        "body": "Une mise en place de l'intégration continue et le déploiement automatique (CI/ CD) est-elle effectuée  ?",
        "coef": 2,
        "description": "",
        "responses": [
          {
            "idResponse": "270",
            "body": "OUI",
            "pourcentage": 100,
            "recomandation": "",
            "isCountable": true
          },
          {
            "idResponse": "271",
            "body": "NON",
            "pourcentage": 0,
            "recomandation": "",
            "isCountable": true
          }
        ],
        "subQuestions": []
      },
    {
        "idQuestion": "28",
        "body": "Méthodologie:  suivez-vous une méthode de travail (scrum, cycle en V, kanban…) ?",
        "coef": 1,
        "description": "",
        "responses": [
          {
            "idResponse": "280",
            "body": "OUI",
            "pourcentage": 100,
            "recomandation": "",
            "isCountable": true
          },
          {
            "idResponse": "281",
            "body": "NON",
            "pourcentage": 20,
            "recomandation": "",
            "isCountable": true
          }
        ],
        "subQuestions": []
      },
    {
        "idQuestion": "29",
        "body": "Définissez-vous un roadmap (feuille de route) à suivre lors de la réalisation ?",
        "coef": 1,
        "description": "",
        "responses": [
          {
            "idResponse": "290",
            "body": "OUI",
            "pourcentage": 100,
            "recomandation": "",
            "isCountable": true
          },
          {
            "idResponse": "291",
            "body": "NON",
            "pourcentage": 20,
            "recomandation": "",
            "isCountable": true
          }
        ],
        "subQuestions": []
      },
    {
        "idQuestion": "30",
        "body": "Votre équipe de réalisation est-elle:",
        "coef": 1,
        "description": "",
        "responses": [
          {
            "idResponse": "300",
            "body": "Interne ",
            "pourcentage": 100,
            "recomandation": "",
            "isCountable": true
          },
          {
            "idResponse": "301",
            "body": " Externe (Freelance..)",
            "pourcentage": 80,
            "recomandation": "",
            "isCountable": true
          }
        ],
        "subQuestions": []
      },

    ];
    let questions: Question[] = [];
    this.questions.forEach((q: any) => {
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
    this.questions[i].subQuestions.forEach((subQ: any) => {
      if (subQ.idQuestion == response.idResponse) {
        subQ.display = true;
      } else {
        subQ.display = false;
      }
    });


  }

  calcul() {
    // remplissage infos
    this.infosAudit();
    console.log(this.quiz);
    console.log(this.recomandations);
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
    let coef = this.totalCoef();
    this.finalScore = tot / coef;
    this.displayRapport = true;
    console.log(this.finalScore)

  }
  totalCoef(){
    var sumCoef = 0;
    this.questions.forEach((question:Question)=>{
      sumCoef += question.coef;
    })
    return sumCoef;
  }
  infosAudit(){
    this.infos.entreprise = this.quiz.entreprise
    this.infos.realisateur = this.quiz.realisateur
    this.infos.email = this.quiz.email
  }

  isEmpty(str: string) {
    return (!str || str.length === 0 || str === "" || !/[^\s]/.test(str) || /^\s*$/.test(str) || str.replace(/\s/g, "") === "");
  }
}
