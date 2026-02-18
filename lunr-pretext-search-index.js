var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "syllabus",
  "level": "1",
  "url": "syllabus.html",
  "type": "Seção",
  "number": "",
  "title": "Ementa",
  "body": " Ementa   Bem vindos ao curso de Cálculo Integral, oferecido para os alunos do Bacharelado em Matemática do IME-USP.     Informações da disciplina  Este é o conjunto de informações para o Cálculo Integral (MAT0321) no primeiro semestre de 2026, que consiste de 4 créditos-aula, ou seja 4 horas-aula semanais, totalizando 60 horas-aula.    Ministrante  Prof. Alexandre Lymberopoulos, Sala 151-A, lymber@ime.usp.br .    Aulas  Terças: 08:00 - 09:40 (Sala B-xx)  Quintas: 10:00 - 11:40 (Sala B-xx)    Horários de Atendimento:  A definir    Monitoria  A definir    Descrição e Ementa  Objetivos: Estudo da integral de Riemann em , integração de formas diferenciais, Teorema de Stokes.  Conteúdo Programático:  Integral de Riemann em . Integrabilidade de funções contínuas. Critérios de integrabilidade.Demonstração do teorema de mudança de variáveis e de Fubini.  Formas diferenciais em . Campos vetoriais. Relação entre formas e operadores vetoriais.  Teorema de Stokes (em linguagem de formas diferenciais). Aplicações à análise vetorial clássica.  Formas exatas e formas fechadas.  Tópicos adicionais se o tempo permitir.      Pré-requisitos  MAT0311 - Cálculo Diferencial e Integral V    Bibliografia   Calculus on Manifolds: A Modern Approach to Classical Theorems of Advanced Calculus de Michael Spivak.   Analisys on Manifolds de James R. Munkres.   Um curso de Análise, volume 2 de Elon Lages Lina.       Descrição do Curso  Neste curso vamos generalizar, na verdade unificar, os teoremas do cálculo vetorial vistos para curvas e superfícies em e , a saber os teoremas de Green, Gauss e Stokes. Para isso começamos retomando os principais resultados sobre funções diferenciáveis de em : os teoremas da função inversa, da função implícita, do posto e as formas locais das imersões e submersões.  Passamos em seguida para a teoria de integração para funções examinando os teoremas de Fubini e mudança de variáveis nesse contexto. Tudo isso é bastante análogo ao que já foi visto em cursos anteriores.  A novidade começa com a teoria de formas diferenciais, para as quais começamos estudando aplicações multilineares do ponto de vista algébrico para só então \"temperar\" isso com derivadas e campos vetoriais. Em seguida estudamos as subvariedades do e condições para orientabilidade das mesmas.  Com isso podemos definir a integral de uma forma diferencial sobre uma variedade, que é uma maneira de estudar objetos geométricos e analíticos de maneira global. Finalmente enunciamos o teorema de Stokes e vai ser muito legal que ele é nada mais do que uma generalização do Teorema Fundamental do Cálculo, visto no primeiro semestre da graduação.  Se o tempo permitir, vamos estudar a relação entre condições sobre formas diferenciais e a topologia do espaço onde elas estão definidas, através dos grupos de cohomologia de de Rham.      Avaliação e Notas  A avaliação do curso consistirá de três provas e a entrega periódica de exercícios.    Provas:   P 1 : data   P 2 : data   P 3 : data    Exercícios:  Veja em Entregas .      Notas na disciplina:  Veja aqui .     "
},
{
  "id": "sec-course-info-2",
  "level": "2",
  "url": "syllabus.html#sec-course-info-2",
  "type": "Parágrafo (with a defined term)",
  "number": "",
  "title": "",
  "body": "Cálculo Integral (MAT0321) "
},
{
  "id": "notes-week-01",
  "level": "1",
  "url": "notes-week-01.html",
  "type": "Seção",
  "number": "",
  "title": "Week 1",
  "body": " Week 1   This is an outline of the topics we covered in the first week of class.     Monday 8\/22      Wednesday 8\/24      Friday 8\/26     "
},
{
  "id": "notes-week-02",
  "level": "1",
  "url": "notes-week-02.html",
  "type": "Seção",
  "number": "",
  "title": "Week 2",
  "body": " Week 2   Monday      Wednesday      Friday     "
},
{
  "id": "activity-01-intro-activity",
  "level": "1",
  "url": "activity-01-intro-activity.html",
  "type": "Lista de Exercícios",
  "number": "",
  "title": "Introduction Activity",
  "body": " Introduction Activity    This is the introduction to the activity.      This is the first exercise.    "
},
{
  "id": "activity-01-intro-activity-3",
  "level": "2",
  "url": "activity-01-intro-activity.html#activity-01-intro-activity-3",
  "type": "Exercício da Lista",
  "number": "1",
  "title": "",
  "body": "  This is the first exercise.   "
},
{
  "id": "handouts-3",
  "level": "1",
  "url": "handouts-3.html",
  "type": "Material de apoio",
  "number": "",
  "title": "Integração em <span class=\"process-math\">\\(\\R^n\\)<\/span> – Definições e Primeiros Resultados",
  "body": " Integração em  Definições e Primeiros Resultados   A first paragraph with some space for notes below it.   "
},
{
  "id": "homework-2",
  "level": "1",
  "url": "homework-2.html",
  "type": "Lista de Exercícios",
  "number": "",
  "title": "Homework 01",
  "body": " Homework 01    Instructions: Complete all the exercises below and submit your work by the due date.      This is the first homework exercise.     "
},
{
  "id": "homework-2-3-1",
  "level": "2",
  "url": "homework-2.html#homework-2-3-1",
  "type": "Exercício da Lista",
  "number": "1",
  "title": "",
  "body": "  This is the first homework exercise.   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
