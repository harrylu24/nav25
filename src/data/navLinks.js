/**
统一分类opensource
网站：
github
baidu.com
谷歌
具体按照以下样式生成，使用“JavaScript风格格式+单引号”，不要添加"icon字段"和"[]""      
      {
      id: 'github',
      title: 'GitHub',
      description: '全球最大的开源代码托管平台，支持 Git 版本控制，适用于协作开发、项目管理和自动化工作流，是开发者共享与协作的核心工具。'
      shortDesc: '代码托管平台。',
      url: 'https://github.com/',
      category: 'opensource',
      },
描述根据网站实际内容,专业,准确,介绍背景独特优势等等,不要太刻板,臃肿,重复
自动下载图标脚本执行:
npx tsx icon-system/0icon.ts
*/
/**
 * 网站分类列表
 * @type {Array<{id: string, name: string, icon: string}>}
 */
export const categories = [
  {
    id: 'pages',
    name: '自托管平台', icon: '/icons/category/pages.svg',
  },
  {
    id: 'tools',
    name: '工具站点', icon: '/icons/category/studying.svg',
  },
  {
    id: 'news',
    name: '新闻', icon: '/icons/category/news.svg',
  },
  {
    id: 'ai',
    name: 'AI', icon: '/icons/category/opensource.svg',
  },
  {
    id: 'opensource',
    name: '开源平台', icon: '/icons/category/opensource.svg',
  },
  {
    id: 'cloud',
    name: 'Cloud', icon: '/icons/category/vps.svg',
  },
];
/**
 * 网站列表
 * @type {Array<{id: string, title: string, description: string, shortDesc: string, url: string, icon: string, category: string}>}
 */
export const sites = [
  //开源      
      {
      id: 'github',
      title: 'GitHub',
      description: '全球最大的开源代码托管平台，支持 Git 版本控制，适用于协作开发、项目管理和自动化工作流，是开发者共享与协作的核心工具。',
      shortDesc: '全球最大代码托管平台。',
      url: 'https://github.com/',
      category: 'opensource',
      icon: '/icons/github.webp',
      },
  //个人其他站点      
      // {
      // id: 'zywede',
      // title: 'zywe.de',
      // description: '个人主页与知识集散地。作为技术爱好者，展示自己的全部项目、实践与分享的中心',
      // shortDesc: 'zywe个人官网',
      // url: 'https://zywe.de/',
      // category: 'Studying',
      // icon: '/icons/zywede.png',
      // },
      // {
      // id: 'dh_zywede',
      // title: 'nav.zywe.de',
      // description: '专属导航页,这里汇聚了日常学习、开发与管理服务器所需的所有高效工具与资源链接，快速触达各项在线服务的便捷入口，确保学习与实践的流畅性。',
      // shortDesc: '让每个人都有自己的网站式收藏夹',
      // url: 'https://dh.zywe.de/',
      // category: 'Studying',
      // icon: '/icons/dh-zywede.png',
      // },
      // pages      
      {
      id: 'github-pages',
      title: 'GitHub Pages',
      description: 'GitHub 提供的静态网站托管服务，支持自定义域名与 HTTPS，可直接从仓库部署，适合个人主页、项目文档与开源展示，集成 Git 工作流，极简且可靠。',
      shortDesc: 'Git 驱动的静态网站托管。',
      url: 'https://pages.github.com/',
      category: 'opensource',
      icon: '/icons/github-pages.webp',
      },
      {
      id: 'cloudflare-pages',
      title: 'Cloudflare Pages',
      description: '由全球领先的 CDN 提供商 Cloudflare 推出的前端部署平台，支持 Jamstack 架构，内置构建优化、边缘函数与自动缓存更新，适合高性能 Web 应用与博客。',
      shortDesc: 'CDN 优化的前端部署平台。',
      url: 'https://pages.cloudflare.com/',
      category: 'pages',
      icon: '/icons/cloudflare-pages.webp',
      },
      {
      id: 'vercel',
      title: 'Vercel',
      description: '专为前端开发打造的现代部署平台，由 Next.js 背后团队开发，支持 Serverless 架构、实时预览与多分支部署，适合敏捷开发、商业级应用与个性化项目。',
      shortDesc: 'Next.js 团队出品的部署平台。',
      url: 'https://vercel.com/',
      category: 'pages',
      icon: '/icons/vercel.webp',
      },      
      {
      id: 'claude',
      title: 'Claude',
      description: 'Anthropic开发的先进AI助手，以安全性和有用性为核心设计理念，擅长复杂推理、创作写作和深度对话，注重AI安全和人类价值对齐。',
      shortDesc: 'AI对话助手',
      url: 'https://claude.ai/',
      category: 'ai',
      icon: '/icons/claude.webp',
      },
      // 网站统一分类数据 - opensource 分类      
      {
      id: 'ghubstar',
      title: 'GHubStar',
      description: '专为办公空间管理而设计的智能预订平台，提供会议室预订、桌位管理和实时空间使用分析，通过与Outlook集成实现无缝办公协作体验。',
      shortDesc: '智能办公空间管理平台。',
      url: 'https://ghubstar.com/',
      category: 'opensource',
      icon: '/icons/ghubstar.webp',
      },
      {
      id: 'perplexity',
      title: 'Perplexity',
      description: 'AI驱动的搜索引擎和问答平台，结合实时网络搜索与大语言模型，为用户提供准确、有来源引用的答案，重新定义信息获取方式。',
      shortDesc: 'AI搜索问答引擎。',
      url: 'https://www.perplexity.ai/',
      category: 'ai',
      icon: '/icons/perplexity.webp',
      },
      {
      id: 'chatgpt',
      title: 'ChatGPT',
      description: 'OpenAI开发的革命性对话AI助手，基于GPT架构提供自然语言理解、创作辅助、代码编程和问题解答等全方位智能服务，引领AI应用新时代。',
      shortDesc: 'OpenAI对话AI助手。',
      url: 'https://chat.openai.com/',
      category: 'ai',
      icon: '/icons/chatgpt.webp',
      },
      {
      id: 'grok',
      title: 'Grok',
      description: 'xAI公司开发的AI聊天机器人，以其独特的幽默风格和实时信息获取能力著称，通过X平台集成提供个性化的AI交互体验。',
      shortDesc: 'xAI幽默风格聊天机器人。',
      url: 'https://grok.x.ai/',
      category: 'ai',
      icon: '/icons/grok.webp',
      },
      {
      id: 'gemini',
      title: 'Gemini',
      description: 'Google最新一代多模态AI模型，支持文本、图像、音频和视频理解，提供强大的推理能力和创意生成功能，是Google AI技术的集大成者。',
      shortDesc: 'Google多模态AI助手。',
      url: 'https://gemini.google.com/',
      category: 'ai',
      icon: '/icons/gemini.webp',
      },
      {
      id: 'ai-google-dev',
      title: 'Google AI Studio',
      description: 'Google面向开发者的AI实验平台，提供Gemini模型API访问、提示工程工具和AI应用开发环境，助力开发者快速构建AI驱动的应用程序。',
      shortDesc: 'Google AI开发者平台。',
      url: 'https://ai.google.dev/',
      category: 'ai',
      icon: '/icons/ai-google-dev.webp',
      },
      {
      id: 'siliconcloud',
      title: 'SiliconCloud',
      description: '硅基流动推出的模型即服务(MaaS)平台，提供开源大模型的云端推理加速服务，支持Qwen、DeepSeek、GLM4等模型，为开发者提供高性价比的AI服务。',
      shortDesc: '开源模型云服务平台。',
      url: 'https://siliconflow.cn/',
      category: 'ai',
      icon: '/icons/siliconcloud.webp',
      },
      {
      id: 'openrouter',
      title: 'OpenRouter',
      description: '统一的AI模型API网关，通过单一接口提供400+个来自主流厂商的AI模型访问，支持自动故障转移和成本优化，兼容OpenAI API标准。',
      shortDesc: '统一AI模型API网关。',
      url: 'https://openrouter.ai/',
      category: 'ai',
      icon: '/icons/openrouter.webp',
      },
      {
      id: 'roundcube',
      title: 'Roundcube Webmail',
      description: '开源的Web邮件客户端，提供现代化的用户界面和完整的邮件管理功能，支持IMAP协议，可部署在私有服务器上实现邮件系统自主控制。',
      shortDesc: '开源Web邮件系统。',
      url: 'https://roundcube.net/',
      category: 'opensource',
      icon: '/icons/roundcube.webp',
      },
      {
      id: 'airflow',
      title: 'Apache Airflow',
      description: '开源的工作流编排平台，通过Python代码定义、调度和监控复杂的数据管道，广泛应用于ETL任务、机器学习流水线和批处理作业管理。',
      shortDesc: '开源工作流编排工具。',
      // url: 'https://airflow.apache.org/',
      url: 'https://air41.gll01.top:2056/home',
      category: 'pages',
      icon: '/icons/airflow.webp',
      },
      {
      id: 'pgadmin',
      title: 'pgAdmin',
      description: 'PostgreSQL数据库的开源Web管理工具，提供直观的图形界面用于数据库设计、查询执行、性能监控和用户管理，是DBA和开发者的必备工具。',
      shortDesc: 'PostgreSQL管理工具。',
      url: 'https://www.pgadmin.org/',
      category: 'opensource',
      icon: '/icons/pgadmin.webp',
      },
      {
      id: 'claudeflare',
      title: 'Cloudflare',
      description: '全球领先的CDN和网络安全服务提供商，通过分布式网络提供网站加速、DDoS防护、SSL证书和边缘计算服务，保障网站性能与安全。',
      shortDesc: 'CDN和网络安全服务。',
      url: 'https://www.cloudflare.com/',
      category: 'cloud',
      icon: '/icons/claudeflare.webp',
      },
      {
      id: 'obsidian',
      title: 'Obsidian',
      description: '基于本地文件的知识管理工具，采用双向链接构建个人知识图谱，支持Markdown格式、插件扩展和图谱可视化，助力构建第二大脑。',
      shortDesc: '本地知识管理工具。',
      url: 'https://obsidian.md/',
      category: 'tools',
      icon: '/icons/obsidian.webp',
      },
      {
      id: 'tencent-cloud',
      title: '腾讯云',
      description: '腾讯旗下的云计算服务平台，提供云服务器、数据库、AI服务、CDN和物联网等全栈云服务，依托腾讯生态为企业数字化转型提供强力支撑。',
      shortDesc: '腾讯云计算服务平台。',
      url: 'https://cloud.tencent.com/',
      category: 'cloud',
      icon: '/icons/tencent-cloud.webp',
      },
      {
      id: 'aws',
      title: 'Amazon Web Services',
      description: 'Amazon提供的全球领先云计算平台，拥有最完整的基础设施和平台服务组合，从计算存储到机器学习，为各规模企业提供可靠的云解决方案。',
      shortDesc: 'Amazon云计算平台。',
      url: 'https://aws.amazon.com/',
      category: 'cloud',
      icon: '/icons/aws.webp',
      },
      {
      id: 'pojie',
      title: '吾爱破解',
      description: '专注于软件安全研究的中文技术论坛，汇聚逆向工程、软件破解、安全分析等领域专家，为安全研究者提供技术交流和学习平台。',
      shortDesc: '软件安全研究论坛。',
      url: 'https://www.52pojie.cn/',
      category: 'tools',
      icon: '/icons/pojie.webp',
      },
      {
      id: 'linux-do',
      title: 'Linux.do',
      description: 'Linux技术爱好者的中文交流社区，提供系统管理、开源软件、服务器运维等技术讨论，致力于推广Linux文化和开源理念。',
      shortDesc: 'Linux技术交流社区。',
      url: 'https://linux.do/',
      category: 'tools',
      icon: '/icons/linux-do.webp',
      },
      {
      id: 'discord',
      title: 'Discord',
      description: '面向游戏玩家和社区的语音聊天平台，提供文字、语音、视频通信和屏幕共享功能，支持服务器创建和机器人集成，是现代团队协作的新选择。',
      shortDesc: '游戏社区聊天平台。',
      url: 'https://discord.com/',
      category: 'opensource',
      icon: '/icons/discord.webp',
      },
      {
      id: 'ypt',
      title: 'YPT',
      description: ' 私人种子站点和资源分享平台，专注于高质量内容的分发与保存，通过邀请制维护社区质量，为资源爱好者提供稳定的下载环境。',
      shortDesc: '私人资源分享平台。',
      url: 'https://ypt.org/',
      category: 'tools',
      icon: '/icons/ypt.webp',
      },
      {
      id: 'cursor',
      title: 'Cursor',
      description: 'AI驱动的代码编辑器，基于VSCode构建并集成GPT-4等先进AI模型，提供智能代码补全、自然语言编程和AI结对编程体验，重塑开发者工作流。',
      shortDesc: 'AI代码编辑器。',
      url: 'https://cursor.sh/',
      category: 'ai',
      icon: '/icons/cursor.webp',
      },
      {
      id: 'augment',
      title: 'Augment Code',
      description: '企业级AI软件开发平台，拥有业界领先的上下文引擎，提供代码补全、智能编辑建议和团队协作功能，专为大型代码库和团队开发优化。',
      shortDesc: '企业AI开发平台。',
      url: 'https://www.augmentcode.com/',
      category: 'ai',
      icon: '/icons/augment.webp',
      },
      // {
      // id: 'gmail',
      // title: 'Gmail',
      // description: 'Google推出的免费电子邮件服务，提供大容量存储、强大搜索功能、垃圾邮件过滤和多设备同步，与Google生态系统深度集成，是全球最受欢迎的邮件服务。',
      // shortDesc: 'Google邮件服务。',
      // url: 'https://mail.google.com/',
      // category: 'opensource',
      // icon: '/icons/gmail.webp',
      // },
      {
      id: 'proton',
      title: 'Proton Mail',
      description: '注重隐私保护的加密邮件服务，采用端到端加密技术保护用户通信，总部位于瑞士，提供安全的邮件、日历和云存储服务。',
      shortDesc: '加密邮件服务。',
      url: 'https://proton.me/',
      category: 'tools',
      icon: '/icons/proton.webp',
      },
      {
      id: 'whatismyip',
      title: 'WhatIsMyIPAddress',
      description: 'IP地址查询和网络诊断工具网站，提供IP地址定位、网速测试、代理检测和网络安全检查等服务，帮助用户了解网络连接状态。',
      shortDesc: 'IP地址查询工具。',
      url: 'https://whatismyipaddress.com/',
      category: 'cloud',
      icon: '/icons/whatismyip.webp',
      },
      {
      id: 'ip-cn',
      title: 'IP.cn',
      description: '简洁的中文IP地址查询服务，快速显示用户当前IP地址、地理位置和网络运营商信息，提供便捷的网络身份识别工具。',
      shortDesc: '中文IP查询服务。',
      url: 'https://ip.cn/',
      category: 'cloud',
      icon: '/icons/ip-cn.webp',
      },
      // {
      // id: 'outlook',
      // title: 'Outlook',
      // description: 'Microsoft的企业级邮件和日历服务，集成邮件管理、日程安排、联系人管理和任务规划，与Office 365生态紧密结合，是商务办公的核心工具。',
      // shortDesc: 'Microsoft邮件日历服务。',
      // url: 'https://outlook.live.com/',
      // category: 'opensource',
      // icon: '/icons/outlook.webp',
      // },
      {
      id: 'racknerd',
      title: 'RackNerd',
      description: '美国知名VPS主机服务商，以高性价比著称，提供KVM虚拟化技术的云服务器，多数据中心覆盖，为个人开发者和小企业提供可靠的托管服务。',
      shortDesc: '美国VPS主机服务商。',
      url: 'https://www.racknerd.com/',
      category: 'cloud',
      icon: '/icons/racknerd.webp',
      },
      {
      id: 'spaceship',
      title: 'Spaceship',
      description: '现代化的域名注册和管理平台，提供简洁直观的界面和具有竞争力的价格，支持多种顶级域名注册，为个人和企业提供专业的域名服务。',
      shortDesc: '域名注册管理平台。',
      url: 'https://www.spaceship.com/',
      category: 'cloud',
      icon: '/icons/spaceship.webp',
      },
      // {
      // id: 'databasemart',
      // title: 'DatabaseMart',
      // description: '数据库资源和教程平台，提供各种数据库系统的学习资料、最佳实践和技术文档，为数据库管理员和开发者提供专业的知识支持。',
      // shortDesc: '数据库资源平台。',
      // url: 'https://databasemart.com/',
      // category: 'vps',
      // icon: '/icons/databasemart.webp',
      // },
      {
      id: 'bloomberg',
      title: 'Bloomberg',
      description: '全球领先的商业和金融信息服务提供商，实时提供市场数据、财经新闻、分析报告和交易工具，是金融专业人士的权威信息来源。',
      shortDesc: '金融信息服务平台。',
      url: 'https://www.bloomberg.com/',
      category: 'news',
      icon: '/icons/bloomberg.webp',
      },
      {
      id: 'bbc',
      title: 'BBC',
      description: '英国广播公司，世界知名的公共媒体机构，提供全球新闻、深度报道、教育内容和娱乐节目，以客观公正的报道风格享誉全球。',
      shortDesc: '英国广播公司。',
      url: 'https://www.bbc.com/',
      category: 'news',
      icon: '/icons/bbc.webp',
      },
      {
      id: 'cnn',
      title: 'CNN',
      description: '美国有线电视新闻网，24小时提供全球突发新闻、政治分析和深度报道，通过多媒体平台为全球观众提供及时准确的新闻信息。',
      shortDesc: '美国有线新闻网。',
      url: 'https://www.cnn.com/',
      category: 'news', 
      icon: '/icons/cnn.webp',
      },      
      {
      id: 'ippure',
      title: 'IPPure',
      description: '提供 IP 纯度与风险评分的一站式检测平台，集成 IP 位置、数据中心归属、代理识别、WebRTC 泄露与浏览器指纹等多种检测工具，适合风控校验与隐私检查使用。',
      shortDesc: 'IP 风险与纯度检测平台。',
      url: 'https://ippure.com/',
      category: 'tools',
      icon: '/icons/ippure.webp',
      },
      {
      id: 'vmrack',
      title: 'VMRack',
      description: '面向全球业务的云基础设施服务商，提供 CN2 GIA 等优质线路的 VPS、裸金属服务器、CDN、对象存储与媒体转码等产品，重点优化中国大陆方向的网络时延与稳定性。',
      shortDesc: '支持优质回国线路的云服务平台。',
      url: 'https://www.vmrack.net/',
      category: 'cloud',
      icon: '/icons/vmrack.webp',
      },
      {
      id: 'termius',
      title: 'Termius',
      description: '跨平台的现代化 SSH 客户端，支持 SSH、Mosh、Telnet、端口转发和 SFTP，提供多标签、命令片段同步和加密云端配置等特性，便于在桌面与移动端统一管理服务器连接。',
      shortDesc: '跨平台现代化 SSH 客户端。',
      url: 'https://termius.com/',
      category: 'tools',
      icon: '/icons/termius.webp',
      },
      {
      id: 'whoer',
      title: 'Whoer VPN',
      description: '专注在线隐私和匿名性的 VPN 与检测服务，通过加密隧道隐藏真实 IP、保护公共 Wi-Fi 下的流量安全，并提供 IP 与浏览器环境检测工具，帮助绕过地域限制与审查。',
      shortDesc: '注重匿名性的 VPN 与检测服务。',
      url: 'https://whoer.net/',
      category: 'tools',
      icon: '/icons/whoer.webp',
      },
      {
      id: 'zaobao-realtime',
      title: '联合早报·即时新闻',
      description: '新加坡《联合早报》的即时新闻频道，聚合新加坡、中国、国际、财经等各板块的最新资讯，适合关注华文世界时事与新加坡本地动态的读者。', // [web:24]
      shortDesc: '华文即时新闻与深度报道平台。', // [web:24]
      url: 'https://www.zaobao.com.sg/realtime',
      category: 'news',
      icon: '/icons/zaobao-realtime.webp',
      },
      {
      id: 'laeb-dmitea',
      title: 'LAEB DMITEA',
      description: '基于 laeb.dmitea.com 的在线服务站点（具体功能可按你实际用途修改描述，例如教学实验平台、内部工具或演示环境）。',
      shortDesc: '自定义在线服务/实验平台站点。',
      url: 'https://laeb.dmitea.com/',
      category: 'tools',
      icon: '/icons/category/Studying.svg',
      },
      {
      id: 'speedtest',
      title: 'Speedtest by Ookla',
      description: '全球广泛使用的网络测速服务，提供下载速度、上传速度与延迟一键测试，并依托全球服务器网络评估家庭宽带或移动网络的实际表现。', // [web:31][web:37]
      shortDesc: '测网速与延迟的权威测速工具。', // [web:31][web:37]
      url: 'https://www.speedtest.net/',
      category: 'tools',
      icon: '/icons/speedtest.webp',
      },      
      {
      id: 'wawo-wiki',
      title: '哇沃主機',
      description: '提供基于 KVM 与 LXC 虚拟化的香港、美國等地云服务器与 VPS 产品，优化中国大陆方向回程网络，并支持多线路 BGP 与高带宽峰值，适合建站与跨境业务。', // [web:41][web:43][web:48][web:51]
      shortDesc: '面向跨境业务的多线路 VPS 与云服务器。', // [web:41][web:43]
      url: 'https://wawo.wiki/',
      category: 'cloud',
      icon: '/icons/wawo-wiki.webp',
      },
      {
      id: 'zorocloud',
      title: 'ZoroCloud 控制台',
      description: '专注 CN2 GIA、9929 等优质回国链路的云服务商，提供美国、香港、新加坡等地的云服务器与高防 VPS，支持原生与住宅 IP，适合跨境电商、内容出海与远程办公。', // [web:46][web:49][web:55]
      shortDesc: '支持优质回国线路与原生 IP 的云服务器平台。', // [web:46][web:49]
      url: 'https://my.zorocloud.com/',
      category: 'cloud',
      icon: '/icons/zorocloud.webp',
      },
      {
      id: 'upstash',
      title: 'Upstash',
      description: '面向无服务器与边缘计算场景的 Serverless 数据平台，提供兼容 Redis API 的数据库、向量库、QStash 消息队列与工作流服务，按请求计费并支持全球复制与低延迟访问。', // [web:47][web:50][web:53][web:56][web:58][web:60]
      shortDesc: '支持 Redis、向量库与消息队列的 Serverless 数据平台。', // [web:50][web:53][web:56]
      url: 'https://upstash.com/',
      category: 'pages',
      icon: '/icons/upstash.webp',
      },
];
/**
 * 搜索网站功能
 * @param {string} query - 搜索关键词
 * @returns {Array} - 符合条件的网站列表
 */
export function searchSites(query) {
  if (!query) return sites;
  const lowerQuery = query.toLowerCase();
  return sites.filter(site => {
    return (
      site.title.toLowerCase().includes(lowerQuery) ||
      site.url.toLowerCase().includes(lowerQuery) ||
      site.category.toLowerCase().includes(lowerQuery)
    );
  });
}
/**
 * 将网站数据转换为HTML标记
 * 允许直接在页面中嵌入HTML内容
 * @param {Array} sitesList - 要呈现的网站列表
 * @returns {string} - HTML标记字符串
 */
export function sitesToHtml(sitesList) {
  if (!sitesList || !sitesList.length) return '<p>没有找到符合条件的网站</p>';
  const html = sitesList.map(site => {
    // 转义HTML特殊字符以防止XSS攻击
    const safeTitle = escapeHtml(site.title);
    const safeDesc = escapeHtml(site.shortDesc || site.description);
    const safeUrl = escapeHtml(site.url);
    const safeIcon = escapeHtml(site.icon || '/images/default.svg');
    return `
      <div class="site-card" data-category="${site.category}">
        <a href="${safeUrl}" target="_blank" rel="noopener noreferrer">
          <div class="site-icon">
            <img src="${safeIcon}" alt="${safeTitle}" loading="lazy" onerror="this.src='/images/default.svg'">
          </div>
          <div class="site-info">
            <h3>${safeTitle}</h3>
            <p>${safeDesc}</p>
          </div>
        </a>
      </div>
    `;
  }).join('');
  return `<div class="sites-grid">${html}</div>`;
}
/**
 * 安全转义HTML特殊字符
 * 防止XSS攻击
 * @param {string} str - 需要转义的字符串
 * @returns {string} - 安全的HTML字符串
 */
function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
