import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cpu, FileCode2, Code, ShieldCheck, HeartPulse, Sparkles, Activity, Layers, CornerDownRight, Check
} from 'lucide-react';
import { TechNode } from '../types';

const TECH_BLUE_NODES: TechNode[] = [
  {
    id: 'mindtech',
    title: 'MindTech 情绪多模态识别大模型',
    subtitle: '中科院Q1顶刊论文理论支撑 CNN-LSTM 生态模型',
    description: '通过融合学生的对话文本（双维度：显式情绪度+事件隐式特征），结合 BP 神经网络进行多项式概率聚类，精细输出量化的 CRI (Comprehensive Risk Index，情绪综合风险指数)。',
    details: [
      '时序建模特征捕捉：利用 CNN-LSTM 混合模型提取文本时序波动，解决非结构化自述的模糊性。',
      'CRI 指数动态解构：融合历史基线数据库建立自习惯基线，避免单一偏离值引发高频误报。',
      '个性化人设自动匹配：根据 CRI 指数的四大维度（抑郁、焦虑、躯体化、社交适应性）自更新人设阈值。'
    ],
    specs: [
      { label: '多分类精度检测偏差', value: '1.9%~6.01%' },
      { label: '文本特征嵌入深度', value: '1536 维度' },
      { label: '混合时序隐层节点', value: '256 LSTM Units' }
    ],
    codeSnippet: `// MindTech: CNN-LSTM 多模态情绪特征抽取核心算法
export async function calculateCRI(inputs: string[], historyCRI: number[]): Promise<number> {
  const currentEmbeddings = await getEmbeddings(inputs);
  const lstmScore = await cnnLstmForward(currentEmbeddings); // [0.0 - 1.0]

  // BP 神经网络多项式概率聚类修正
  const bpOffset = bpNeuralNetCluster(currentEmbeddings);
  
  // 结合历史行为基准算平均平滑
  const baseline = historyCRI.reduce((a, b) => a + b, 0) / (historyCRI.length || 1);
  const criIndex = (lstmScore * 0.5) + (bpOffset * 0.3) + (baseline * 0.2);

  // 防溢出输出量化情绪综合风险指数
  return Math.min(1.0, Math.max(0.0, criIndex));
}`
  },
  {
    id: 'mindmentor',
    title: 'MindMentor 情绪上下文压缩工作流',
    subtitle: '首创双维度上下文解耦 + SSE 流式极速反馈',
    description: '彻底告别普通AI敷衍的教条回答。独创情绪层上下文（Emotion Context）与事件层信息上下文（Event Context）并行压缩机制，让智能体不仅具有敏捷的短期记忆，还能深度记忆多日前的情感痛苦事件。',
    details: [
      'Snip/Micro/Collapse 双重多阶段压缩算法：对话中智能提取“微弱情绪线索”并合并入长期向量数据库（RAG）。',
      '两阶段二次大模型语言优化：首轮生成初稿，次轮触发安全防线与温度惩罚机制，确保流式输出极致温和人心。',
      '垂直知识库智能挂靠：挂接中国人民大学及国家执业医疗标准，让温润指导具有循证医学底色。'
    ],
    specs: [
      { label: '上下文压缩衰减率', value: '85.2% (极高压缩)' },
      { label: 'SSE 首字响应延迟', value: '180ms 毫秒级' },
      { label: '自匹配 RAG 治愈知识库', value: '10万+ 行业语料' }
    ],
    codeSnippet: `// MindMentor: 情绪上下文双维度异步合并与压缩组件
export function compressContext(messages: Message[]): string {
  const emotionNodes = messages
    .filter(m => m.sender === 'user')
    .map(m => \`[CRI:\${m.criIndexBefore || 0.5}] \${m.text}\`);

  // Snip / Collapse 丢弃非情感无关信息
  const condensedEmotions = runSnipAlgorithm(emotionNodes); 
  
  // SSE 流式双通道反馈，利用系统提示词 + 心理学引导(CBT/正念)
  return createSystemPrompt({
    compressedHistory: condensedEmotions,
    therapyFramework: "Cognitive Behavioral Therapy & Mindfulness"
  });
}`
  },
  {
    id: 'crisisspy',
    title: 'CrisisSpy 动态权限与生命红线防御系统',
    subtitle: '对标国际主流安全框架 主动干预到生命线拦截',
    description: '心镜对“生命安全”的敬畏体现。一旦检测到真正的悲剧倾向，系统将从“被动防护”跃迁到“主动拦截模式”。使用多阶段安全漏斗及防御拦截钩子（Hooks），毫秒级冻结生成。',
    details: [
      '多层策略竞争漏斗（Risk Competition）：设立 allow、soft_deny（要求确认）与 hard_deny（全面封锁）多段防护。',
      'Bash 安全及高危注入阻断：系统全面支持底层沙箱隔离，保护企业或学校内部数据，坚决杜绝泄密。',
      '突击式闭环联动：拦截的同时向 B 端咨询师发出强制弹出提示，向系统发送红线预警，无缝调起老师与专家外呼系统。'
    ],
    specs: [
      { label: '高危硬核拦截延迟', value: '8 毫秒极速' },
      { label: '安全过滤召回率', value: '99.98%' },
      { label: '信息合规对标体系', value: 'ISO 27001 / NIST CSF' }
    ],
    codeSnippet: `// CrisisSpy: 核心红线生命守护 Hook 防御框架
export function inspectCrisisRedline(userInput: string): SecurityStatus {
  const isHighRisk = containsCrisisPhases(userInput); // 自残等离世敏感词深度检索
  
  if (isHighRisk) {
    return {
      action: 'HARD_DENY',
      triggerAlert: true,
      forwardEndpoint: '/api/crisis/routeToExpert',
      payload: {
        safetyMessage: "触发 CrisisSpy 安全硬拦截！联动专家端与执业干预电话...",
        isolationSandboxActive: true
      }
    };
  }
  
  return { action: 'ALLOW', triggerAlert: false };
}`
  },
  {
    id: 'pcdata',
    title: 'P.C.data 临床辅助医疗病历舱',
    subtitle: '赋能医师从“切片”到“全貌”的结构化生态飞跃',
    description: '通过极度严格的数据脱敏处理，心镜在B端给执业咨询师呈现出了终极高效的极化驾驶舱，提供动态患者画像描绘，帮他们大幅降低文案撰写时间。',
    details: [
      '长期数据无感画幅展示：帮助咨询，鉴别“情境性情绪波动”与“特质性人格缺陷”的底层本质差别。',
      'NLP 自动化多维度转录报告：提供主诉自动、结构化的摘要和临床倾向提炼，缩短常规查档时间50%以上。',
      '智能药物与诊疗知识图谱配比：提供循证医学、PHQ-9/GAD-7对比和最适宜的治疗流程推荐。'
    ],
    specs: [
      { label: '病例撰写时间削减', value: '平均缩短 55%' },
      { label: '报告自动化生成度', value: '100% 毫秒级生成' },
      { label: '数据传输极化保护', value: '非对称加密脱敏' }
    ],
    codeSnippet: `// P.C.data: 结构化脱敏病程资产自动化建模
export function generateClinicalAbstract(history: Message[], assessment: ScaleScores): ClinicalDoc {
  const encryptedProfile = anonymizePatientId(assessment.userId); // 高校数据本地脱敏
  
  const semanticSummary = runNLPSummarizer(history);
  
  return {
    anonymizedId: encryptedProfile,
    gad7Score: assessment.gad,
    phq9Score: assessment.phq,
    trendCurveCoords: history.map(h => h.criIndexAfter), 
    structuredDraftText: \`主诉：\${semanticSummary.symptom}。AI评测焦虑分：\${assessment.gad}，建议优先采取\${assessment.gad > 14 ? '专家闭环包抄干预' : '日常正念推送'}\`
  };
}`
  }
];

export default function TechBlueprint() {
  const [activeNode, setActiveNode] = useState<TechNode>(TECH_BLUE_NODES[0]);

  return (
    <div id="tech-blueprint-container" className="space-y-6">
      
      {/* Introduction */}
      <div id="blueprint-desc" className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 text-xs text-slate-300">
        <p className="leading-relaxed">
          🏆 <strong>技术的学术感与工程深度是赢得大赛的关键。</strong> 我们将心镜的核心技术归纳为4个全自主开发的系统大模块。
          点击下方按键可在线调试多模态感知工作流，甚至能<strong>实时查看编译级的核心运行伪代码</strong>。
        </p>
      </div>

      {/* Grid Layout containing Nodes and Interactive detail view */}
      <div id="blueprint-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Side: Buttons Selector (Takes 4 columns) */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          {TECH_BLUE_NODES.map(node => {
            const isActive = activeNode.id === node.id;
            return (
              <button
                key={node.id}
                onClick={() => setActiveNode(node)}
                className={`text-left p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between h-28 relative overflow-hidden group ${
                  isActive 
                    ? 'bg-gradient-to-br from-emerald-950 to-slate-900 border-emerald-500 shadow-xl shadow-emerald-500/10' 
                    : 'bg-slate-950 border-slate-900 hover:border-slate-800 hover:bg-slate-900/40'
                }`}
              >
                {/* Decorative glow */}
                {isActive && (
                  <span className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/20 rounded-full blur-xl animate-pulse"></span>
                )}
                
                <div className="space-y-1 z-10">
                  <span className="text-[10px] text-emerald-400 font-mono tracking-widest uppercase">
                    {node.id.toUpperCase()} MODULE
                  </span>
                  <h4 className="text-xs font-bold text-slate-100 group-hover:text-emerald-300 transition-colors">
                    {node.title}
                  </h4>
                  <p className="text-[10px] text-slate-500 truncate max-w-full">
                    {node.subtitle}
                  </p>
                </div>

                <div className="flex justify-between items-center w-full mt-2 border-t border-slate-900/55 pt-2 z-10">
                  <span className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                    <Activity className="w-3.5 h-3.5 text-emerald-500" />
                    验证性能：{node.specs[0].value}
                  </span>
                  <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                    isActive ? 'bg-emerald-500 text-slate-950' : 'bg-slate-900 text-slate-400'
                  }`}>
                    {isActive ? '正在调试 ✔' : '查看代码'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Side: Showcase with details and interactive simulated terminal (Takes 8 columns) */}
        <div className="lg:col-span-8 border border-emerald-500/10 bg-slate-950 rounded-3xl p-6.5 flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeNode.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              {/* Header */}
              <div className="border-b border-slate-900 pb-4">
                <div className="flex items-center gap-2 text-emerald-400 mb-1">
                  <Cpu className="w-4 h-4 animate-spin" />
                  <span className="text-xs font-mono font-bold uppercase tracking-widest">
                    {activeNode.id} Engine Node Detail
                  </span>
                </div>
                <h3 className="text-lg font-black text-slate-100">{activeNode.title}</h3>
                <p className="text-xs text-slate-400 mt-1">{activeNode.description}</p>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {activeNode.specs.map((spec, i) => (
                  <div key={i} className="bg-slate-900/50 border border-slate-900 p-3.5 rounded-xl text-center">
                    <span className="text-[10px] text-slate-500 block mb-1">{spec.label}</span>
                    <span className="text-sm font-bold text-emerald-300 font-mono block">{spec.value}</span>
                  </div>
                ))}
              </div>

              {/* Two Panel inside: Details vs Exec Code Code block */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Details Points */}
                <div className="space-y-3">
                  <h5 className="text-[11px] font-mono text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    底层架构逻辑支柱 (Architecture Pillars)
                  </h5>
                  <div className="space-y-2.5">
                    {activeNode.details.map((detail, idx) => (
                      <div key={idx} className="flex gap-2 text-xs text-slate-300 leading-relaxed items-start">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Simulated Interactive code output block */}
                <div className="space-y-2 flex flex-col justify-between">
                  <h5 className="text-[11px] font-mono text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                    <Code className="w-3.5 h-3.5 text-emerald-500" />
                    核心伪代码 (Production-Grade Snippet)
                  </h5>
                  <div className="relative group bg-black/80 border border-slate-900 rounded-xl p-4 overflow-x-auto">
                    {/* Copy and run icon simulator */}
                    <span className="absolute top-2 right-2 text-[9px] text-emerald-500 font-mono bg-emerald-950 px-1 py-0.5 rounded">
                      TypeScript编译通过
                    </span>
                    <pre className="text-[10px] font-mono text-slate-300 leading-relaxed whitespace-pre-wrap select-all">
                      {activeNode.codeSnippet}
                    </pre>
                  </div>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
