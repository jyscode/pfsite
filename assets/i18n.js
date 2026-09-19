const translations = {
  ko: {
    nav_career: 'Career',
    nav_experience: 'Experience',
    nav_education: 'Education',
    name: '김지용',
    hero_intro: 'Cloud MSP 엔지니어로 고객사의 서버·네트워크·보안 인프라 운영과 Kubernetes 환경 구축, ISMS 대응 등의 업무를 수행해왔습니다. 반복되는 점검과 운영 업무를 줄이기 위해 Ansible 기반 서버 설정 자동화를 도입했으며, 효율적이고 일관된 운영 환경을 만드는 데 관심이 있습니다.',
    view_career: '경력 보기',
    career_title: '경력',
    career_desc: '고객 환경의 운영과 장애 대응부터 보안 심사, 자동화까지 실제 MSP 업무를 중심으로 경험했습니다.',
    company: '클라우드스퀘어',
    main_work: '주요 업무',
    work_1: 'NAVER Cloud 기반 고객 인프라 구축 및 운영',
    work_2: 'Server / VPC / Load Balancer / NAT Gateway / VPN 등 Cloud Resource 관리',
    work_3: 'Linux / Windows Server 운영 및 Migration',
    work_4: 'WAF / Firewall / ACL 등 보안 정책 운영',
    work_5: 'Kubernetes 환경 구축 및 Network Troubleshooting',
    work_6: 'ISMS·CSAP 대응 및 Cloud 운영 자동화',
    client_exp: '주요 고객사 수행 경험',
    client_1_title: '국내 식품 제조사',
    client_1_desc: 'ISMS 대응 · Ansible 자동화 · OS Migration · Jenkins 백업',
    client_2_title: '대형 교육기관',
    client_2_desc: 'Live Streaming · ISMS · DRM/CDN 테스트 · Traffic Monitoring',
    client_3_title: '국내 대학교',
    client_3_desc: '정보시스템/홈페이지 인프라 · LB/NAS · DR/Backup 운영',
    client_4_title: '국내 펫보험사',
    client_4_desc: '금융 인프라 · 전용선/VPN · Routing · Kubernetes DR',
    exp_title: '대표 기술 경험',
    exp_desc: '업무에서 직접 적용하거나 구축한 경험 중, 문제 해결 방식과 자동화 역량을 잘 보여주는 사례만 추렸습니다.',
    p1_title: 'ISMS 대응 업무 자동화',
    p1_desc: '반복되는 Linux 보안 점검과 설정 작업을 Ansible Playbook으로 구성해 다수 서버에 동일한 기준으로 적용했습니다.',
    p1_1: 'Linux 보안 설정 및 계정·권한 점검',
    p1_2: 'SSH 및 주요 서비스 설정 자동화',
    p1_3: '다수 서버 대상 일괄 적용 및 결과 확인',
    p2_title: 'Kubernetes 기반 DR 환경 구축',
    p2_desc: '금융 서비스의 연속성을 위해 서로 다른 Zone에 Kubernetes Cluster를 구성하고 Istio 기반 Multi-Cluster DR 구조를 구축했습니다.',
    p2_1: '전용선 / VPN / Routing 연계 구성',
    p2_2: '서비스 Network Flow 및 전환 시나리오 검토',
    p2_3: 'DR 전환을 고려한 Network Architecture 구성',
    p3_title: 'Cloud Billing 업무 자동화',
    p3_desc: 'NAVER Cloud Billing API 데이터를 Python으로 수집하고 MySQL에 저장해 Flask 화면에서 고객사별 비용을 조회하도록 구성했습니다.',
    p3_1: 'API 요청·응답 테스트 및 문서화',
    p3_2: 'Account별 비용 데이터 자동 수집',
    p3_3: 'Cron 기반 정기 실행 및 Web 조회',
    background_title: '학력 · 자격',
    edu_1: '동양미래대학교',
    edu_major: '컴퓨터소프트웨어공학',
    edu_2: '선린인터넷고등학교',
    cert_network: '네트워크관리사 2급',
    footer_text: 'MSP 운영의 자동화와 표준화에 관심이 있습니다.'
  },

  ja: {
    nav_career: '経歴',
    nav_experience: '技術経験',
    nav_education: '学歴・資格',
    name: 'キム・ジヨン',
    hero_intro: 'Cloud MSPエンジニアとして、顧客のサーバー・ネットワーク・セキュリティ基盤の運用、Kubernetes環境の構築、ISMS対応などを担当してきました。繰り返し発生する点検・運用作業を削減するため、Ansibleによるサーバー設定自動化を業務に導入し、効率的で標準化された運用環境づくりに取り組んでいます。',
    view_career: '経歴を見る',
    career_title: '経歴',
    career_desc: '顧客環境の運用・障害対応からセキュリティ審査、運用自動化まで、実際のMSP業務を中心に経験してきました。',
    company: 'Cloud Square',
    main_work: '主な業務',
    work_1: 'NAVER Cloudを基盤とした顧客インフラの構築・運用',
    work_2: 'Server / VPC / Load Balancer / NAT Gateway / VPNなどのCloud Resource管理',
    work_3: 'Linux / Windows Serverの運用およびMigration',
    work_4: 'WAF / Firewall / ACLなどのセキュリティポリシー運用',
    work_5: 'Kubernetes環境の構築およびNetwork Troubleshooting',
    work_6: 'ISMS・CSAP対応およびCloud運用の自動化',
    client_exp: '主な顧客案件',
    client_1_title: '国内食品メーカー',
    client_1_desc: 'ISMS対応 · Ansible自動化 · OS Migration · Jenkins Backup',
    client_2_title: '大手教育機関',
    client_2_desc: 'Live Streaming · ISMS · DRM/CDN Test · Traffic Monitoring',
    client_3_title: '国内大学',
    client_3_desc: '情報システム/ホームページ基盤 · LB/NAS · DR/Backup運用',
    client_4_title: '国内ペット保険会社',
    client_4_desc: '金融インフラ · 専用線/VPN · Routing · Kubernetes DR',
    exp_title: '主な技術経験',
    exp_desc: '業務で実際に導入・構築した経験の中から、問題解決力と自動化への取り組みを示す事例を紹介します。',
    p1_title: 'ISMS対応業務の自動化',
    p1_desc: '繰り返し発生するLinuxのセキュリティ点検と設定作業をAnsible Playbook化し、複数サーバーへ同一基準で適用しました。',
    p1_1: 'Linuxのセキュリティ設定、アカウント・権限の点検',
    p1_2: 'SSHおよび主要サービス設定の自動化',
    p1_3: '複数サーバーへの一括適用と結果確認',
    p2_title: 'Kubernetesを用いたDR環境構築',
    p2_desc: '金融サービスの継続性確保を目的に、異なるZoneへKubernetes Clusterを構成し、Istioを活用したMulti-Cluster DR構成を構築しました。',
    p2_1: '専用線 / VPN / Routing連携の構成',
    p2_2: 'Service Network Flowと切替シナリオの検討',
    p2_3: 'DR切替を考慮したNetwork Architectureの構成',
    p3_title: 'Cloud Billing業務の自動化',
    p3_desc: 'NAVER Cloud Billing APIのデータをPythonで収集し、MySQLへ保存して、Flask画面から顧客別コストを確認できるように構成しました。',
    p3_1: 'API Request / Responseのテストおよびドキュメント化',
    p3_2: 'Account別コストデータの自動収集',
    p3_3: 'Cronによる定期実行とWeb画面での確認',
    background_title: '学歴 · 資格',
    edu_1: '東洋未来大学',
    edu_major: 'コンピュータソフトウェア工学',
    edu_2: '善隣インターネット高等学校',
    cert_network: 'ネットワーク管理士 2級',
    footer_text: 'MSP運用の自動化と標準化に関心があります。'
  }
};

function setLanguage(lang) {
  const dict = translations[lang] || translations.ko;

  document.documentElement.lang = lang === 'ja' ? 'ja' : 'ko';

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
  });

  document.title =
    lang === 'ja'
      ? 'キム・ジヨン | Cloud / MSP Engineer'
      : '김지용 | Cloud / MSP Engineer';

  localStorage.setItem('portfolio-lang', lang);
}

document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    setLanguage(btn.dataset.lang);
  });
});

const savedLang = localStorage.getItem('portfolio-lang');
const browserLang =
  navigator.language?.toLowerCase().startsWith('ja') ? 'ja' : 'ko';

setLanguage(savedLang || browserLang);