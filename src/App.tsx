import './index.css'
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import AcademicFormation from './components/Formation';
import Skills from './components/Skills';
import Projeto from './components/Projetos';

import Perfil from '@assets/vitoria-user-img.jpeg';
import IconLinkedin from '@assets/linkedin.png';
import IconGithub from '@assets/github.png';
import CVEnglish from '@public/curriculos/Vitoria Dourado - Curriculo Englishh.pdf';
import CVPortugues from '@public/curriculos/VITÓRIA DOURADO DA SILVA -  Curriculo (1) (2) 1 (2).pdf';
import IconPTBR from '@assets/brasil.png';
import IconENUS from '@assets/reino-unido.png';
import Foto from '@assets/vitoria-foto.png';
import Experiencia1 from '@assets/prefeitura-grupo.jpeg';
import Experiencia2 from '@assets/red-district.jpeg';
import Experiencia3 from '@assets/unifor-lider.jpeg';
import Projeto1 from '@assets/pokemon-api.jpeg';
import Projeto2 from '@assets/projeto-aula-simples.jpeg'

const experiencesData = [
  {
    id: 1,
    image: Experiencia1,
    title: "Desenvolvedora de Jogos - Prefeitura de Fortaleza",
    description: "Atuei como desenvolvedora de jogos e web na prefeitura de Fortaleza durante 1 Ano e meio."
  },
  {
    id: 2,
    image: Experiencia2,
    title: "Desenvolvedora de Jogos - Red District Studio",
    description: "Auxiliei nas implementações do código junto com Seniors do projeto voluntário."
  },
  {
    id: 3,
    image: Experiencia3,
    title: "Unifor - Líder de projeto Full-Stack",
    description: "Atualmente, sou bolsista na Unifor e líder de um projeto que envolve a criação de um site, nele utilizo padrões de commits e ensino a minha equipe sobre conceitos de React e TypeScript, no geral guio esse trabalho tanto no front-end quanto no back-end."
  }
];

const formationsData = [
  {
    id: 1,
    institution: "Estácio de Sá",
    degree: "Bacharelado em Jogos Digitais",
    period: "Jan, 2020 - Jun, 2024",
    description: "Estudo de design e desenvolvimento de jogos, incluindo programação, arte 2D e 3D, e game engines como Unity."
  }
];

const projetos = [
  {
    title: "Pokemon Api",
    image: Projeto1,  
    githubLink: "https://github.com/VitoriaDourado/PokemonApi"
  },
  {
    title: "Projeto Curso Full-Stack",
    image: Projeto2,
    githubLink: "https://github.com/VitoriaDourado/Project_01_Aula"
  },
]

const skillsData = [
  {
    category: "📚 Technical Skills",
    skillList: [
      { name: "Unity & C#", level: 90 },
      { name: "JavaScript", level: 80 },
      { name: "TypeScript", level: 80 },
      { name: "React", level: 80 },
      { name: "Vue.js", level: 70 },
      { name: "Node.js", level: 70 },
      { name: "MySQL", level: 70 },
      { name: ".NET", level: 60 },
      { name: "HTML | CSS", level: 90 },
      { name: "API", level: 70 }
    ]
  },
  {
    category: "💻 Tools/Technologies",
    skillList: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "GitLab", level: 80 }
    ]
  }
];


function App() {

  return (
    <>
      <div>
      <Header perfilImg={Perfil}
        nome="Vitória Dourado da Silva"
        subtitulo="Desenvolvedora Front-End"
        linkedinUrl="https://www.linkedin.com/in/vitoriadourado/"
        githubUrl="https://github.com/VitoriaDourado"
        cvEnglishUrl={CVEnglish}
        cvPortugueseUrl={CVPortugues}
        iconLinkedin={IconLinkedin}
        iconGithub={IconGithub}
        iconPTBR={IconPTBR}
        iconENUS={IconENUS}
      />
        <About  name="Vitória Dourado da Silva" 
          description="uma desenvolvedora front-end que está sempre por dentro da tecnologia e inovação. Tenho sempre a vontade de aprender e aprimorar meu conhecimento em desenvolvimento de software. Gosto de desafios e estou sempre pronta para colaborar em equipe, buscando explorar novas ideias que possam impactar positivamente!"
          image={Foto}
      />
        <Experience experiences={experiencesData} />
        <AcademicFormation formations={formationsData}/>
        <Skills skills={skillsData} />
        <Projeto projetos={projetos}/>
      </div>
    </>
  )
}

export default App
