export const projects = [
  {
    id: '1',
    name: 'Adaptive ML Honeypot & Threat Intelligence Engine',
    description:
      'A containerized, self-adapting honeypot powered by a Reinforcement Learning engine that classifies live attacker behavior in real time and dynamically shifts its responses to maximize deception — turning attackers\' own tactics against them. Contributions fed directly into SIEM use case development and advanced incident response strategies.',
    imageUrl: '',
    technologies: ['Python', 'Docker', 'Flask', 'Reinforcement Learning', 'Threat Modeling'],
    githubUrl: 'https://github.com/Carrtik/Dynamic-Honeypot-RL',
    badge: 'Published @ ICACCS 2026',
  },
  {
    id: '2',
    name: 'Cylock — Network Reconnaissance & Vulnerability Scanner',
    description:
      'A custom-built, multi-threaded network security engine engineered from raw sockets up. Executes high-speed port scanning and deep packet inspection to identify exploitable vulnerabilities, outdated services, and misconfigured protocols across subnets — with zero dependency on existing frameworks.',
    imageUrl: '',
    technologies: ['Python', 'TCP/IP', 'Raw Socket Programming'],
    githubUrl: 'https://github.com/Carrtik/Cylock',
  },
  {
    id: '3',
    name: 'Valkyrie — Security Compliance & Configuration Auditor',
    description:
      'An enterprise-grade automated auditing engine that performs deep-state compliance assessments across Linux environments — mapping privilege escalation vectors and misconfigurations directly to NIST guidelines and CIS Benchmarks, and transforming raw system logs into actionable diagnostic reports.',
    imageUrl: '',
    technologies: ['Python', 'Bash', 'OS-Level APIs'],
    githubUrl: 'https://github.com/Carrtik',
  },
  {
    id: '4',
    name: 'Automated SOAR & SIEM Triage Pipeline',
    description:
      'A Python-based Security Orchestration, Automation and Response pipeline that ingests, normalizes, and triages security events from simulated SIEM environments. Automated playbooks analyze threat feeds and route incidents based on severity matrices — with full API-integrated ticket management and weekly SIP reporting.',
    imageUrl: '',
    technologies: ['Python', 'QRadar', 'ITSM API', 'Regex'],
    githubUrl: 'https://github.com/Carrtik',
  },
  {
    id: '5',
    name: 'VulnSync — Enterprise VM Lifecycle Engine',
    description:
      'A centralized vulnerability management engine that automates the full lifecycle of infrastructure vulnerabilities from discovery to resolution. Integrates live threat intelligence feeds via API to autonomously detect zero-days, prioritize risk dynamically, and generate stakeholder-ready remediation reports.',
    imageUrl: '',
    technologies: ['Python', 'REST APIs', 'JSON', 'Data Analytics'],
    githubUrl: 'https://github.com/Carrtik',
  },
  {
    id: '6',
    name: 'Self-Healing Cloud Environment — Post-Quantum Cryptography',
    description:
      'A resilient cloud architecture that autonomously detects and neutralizes threats using CRYSTALS-Kyber and AES encryption — engineered to withstand attacks from quantum-capable adversaries. Designed for the era where conventional cryptography breaks.',
    imageUrl: '',
    technologies: ['Python', 'AWS', 'CRYSTALS-Kyber', 'AES', 'Post-Quantum Cryptography'],
    liveUrl: undefined as string | undefined,
    wip: true,
  },
]
