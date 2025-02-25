---
layout: doc
prev:
    text: "About us"
    link: "/about-us"
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPLink
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/natalia-sampaio.png',
    name: 'Natália Andrade',
    title: 'Frontend Developer',
    desc: 'Leads UI/UX modernization, component-driven design, and performance optimization. Experience with real-time messaging platforms, chatbot builders, and frontend scalability.',
    links: [
      { icon: 'github', link: 'https://github.com/natalia-sampaio' },
      { icon: 'x', link: 'https://x.com/nataliaSRSA' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/natalia-srs/?locale=en_US' },
      { icon: 'mailgun', link: 'mailto:natalia@nafi.dev' },
      { icon: 'calendly' , link: 'https://calendly.com/natalia-nafi'}
    ],
  },
  {
    avatar: 'https://www.github.com/filipedanielski.png',
    name: 'Filipe Danielski',
    title: 'Full-Stack Developer',
    desc: 'Specializes in backend architecture, API development, and cloud deployments. Has worked on ERP systems, fintech integrations, and large-scale governmental projects.',
    links: [
      { icon: 'github', link: 'https://github.com/filipedanielski' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/filipedanielski/?locale=en_US' },
      { icon: 'mailgun', link: 'mailto:filipe@nafi.dev' }  
    ]
  },
]
</script>

# Meet the founders

Nafi Dev is a technology company founded by Natália Andrade and Filipe Danielski, combining expertise in frontend and full-stack development. We believe in _custom software solutions that fit your needs like a glove_—**built for efficiency, maintainability, and scalability**.

<VPTeamMembers
    :members="members"
  />
