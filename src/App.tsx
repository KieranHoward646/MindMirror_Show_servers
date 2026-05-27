/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Shield, Cpu, Activity, Award, School, Building2, Landmark, 
  Users, CheckCircle2, AlertTriangle, ArrowRight, BookOpen, Clock, Heart, 
  Layers, Lock, Eye, Check, Play, RefreshCw, BarChart3, GraduationCap, ChevronRight, HelpCircle,
  Smile
} from 'lucide-react';
import ProductSimulator from './components/ProductSimulator';
import TechBlueprint from './components/TechBlueprint';
import BusinessModel from './components/BusinessModel';

interface TeamMember {
  name: string;
  role: string;
  tag: string;
  avatar: string;
  accomplishments: string[];
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: '罗浩男',
    role: '项目负责人 | 金融工程 + 人工智能',
    tag: '算法架构 & 商业策划',
    avatar: '🎯',
    accomplishments: [
      '中国人民大学求是学术品牌研究项目北京市级立项负责人',
      '第一届“百融杯”AI智能体创新应用大赛三等奖',
      '美国大学生数学建模竞赛 (MCM/ICM) 特等奖提名',
      '中国人民大学创新杯课外学术竞赛特等奖',
      '中国人民大学校级三好学生、优秀共青团员'
    ]
  },
  {
    name: '邱子昕',
    role: '运营负责人 | 校园自媒体核心博主',
    tag: '市场宣发 & 增长裂变',
    avatar: '⚡',
    accomplishments: [
      '高维度私域/公域流量操盘手，全网粉丝 1w+ 垂直博主',
      '运营商业模型打通：曾创下 3 个月变现 6 位数傲人成绩',
      '精细洞察年轻群体情绪爆点、痛点，主导产品宣传定制'
    ]
  },
  {
    name: '马鑫权',
    role: '战略分析师 | 经济学专业学霸',
    tag: '商业链路 & 投融资测算',
    avatar: '📈',
    accomplishments: [
      '多项数据建模、创新创业竞赛主要作者',
      '五四优秀共青团员，青年志愿者协会核心骨干',
      '“创新杯”特等奖核心成员，精细测算心镜 SaaS 全收支及 ROI 矩阵'
    ]
  },
  {
    name: '徐翔翔',
    role: '算法研究员 | 数学 + 经济学交叉背景',
    tag: '多模态拟合 & RAG 训练',
    avatar: '⚙️',
    accomplishments: [
      '2024 年“燕宝奖学金”得得主，专业级数字极客',
      '实战经验跨越券商、咨询、顶级IT等多个深度AI转型前沿项目',
      '负责 MindMentor 情绪上下文压缩算法及 RAG 知识图谱智能挂接'
    ]
  },
  {
    name: '朱泓桢',
    role: '内容架构顾问 | 临床心理学系精英',
    tag: '心理常态模型 & 介入安全',
    avatar: '🌱',
    accomplishments: [
      '中国人民大学“创新杯”二等奖拥有者',
      '长期深耕学术界“AI心理学辅助自助干预”专项课题研究',
      '主笔设计心镜 GAD-7/PHQ-9 自动化摘要与循证医学支持知识图谱'
    ]
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [isCrestModalOpen, setIsCrestModalOpen] = useState(false);

  const getPageColor = (index: number) => {
    switch (index) {
      case 1: return 'from-red-950 to-slate-950 border-red-500/20'; // Hook: Crisis and Dark
      case 2: return 'from-emerald-950 to-slate-950 border-emerald-500/20'; // Twist: Smartphone Demo
      case 3: return 'from-teal-950 to-slate-950 border-teal-500/20'; // Structure: Dual Portals
      case 4: return 'from-cyan-950 to-slate-950 border-cyan-500/20'; // Edge: Tech specs
      case 5: return 'from-slate-900 to-slate-950 border-emerald-500/20'; // Future: Team & ROI
      default: return 'from-slate-900 to-slate-950 border-slate-800';
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] font-sans text-slate-100 flex flex-col selection:bg-emerald-400 selection:text-slate-950 overflow-x-hidden">
      
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl -z-10 animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      {/* RUC Branding & Title Header */}
      <header className="border-b border-slate-900/60 bg-[#020617]/70 backdrop-blur-md sticky top-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Logo & Branding */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 p-[1px] shadow-lg shadow-emerald-500/10 flex items-center justify-center">
              <div className="w-full h-full bg-[#020617] rounded-[11px] flex items-center justify-center font-black text-sm text-emerald-400 font-display">
                M
              </div>
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-base font-black font-display tracking-tight text-slate-100">心镜 MIndMirror</h1>
                <span className="text-[10px] bg-emerald-950/80 text-emerald-400 border border-emerald-900 rounded font-bold px-2 py-0.5">
                  人大双百杯特等/一等星团队
                </span>
                <span className="text-[10px] text-slate-400 font-mono">2026 商业企划提案仪</span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                心理健康多模态个性定制化一站式解决方案 • 中国人民大学人工智能与心理跨界项目
              </p>
            </div>
          </div>

          {/* Quick status badge indicators */}
          <div className="flex items-center gap-3 shrink-0">
            <button
               onClick={() => setIsCrestModalOpen(true)}
               className="bg-slate-900/80 hover:bg-slate-800 hover:text-emerald-400 border border-slate-800/80 rounded-xl px-4 py-2 text-xs font-semibold flex items-center gap-1.5 transition-all text-slate-300 cursor-pointer"
            >
              <Award className="w-4 h-4 text-emerald-400 animate-bounce" />
              查看项目荣誉
            </button>
          </div>

        </div>
      </header>

      {/* Main Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-6 md:p-8 space-y-8">
        
        {/* Core Presentation Slogan & Explanation banner */}
        <div className="bg-slate-900/25 border border-slate-900 rounded-3xl p-6 relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1 md:max-w-3xl z-10">
            <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" />
              EMOTIONAL SECURITY & CLINICAL SOTA SYSTEM Presentation Console
            </span>
            <h2 className="text-lg md:text-xl font-black font-display text-slate-100 leading-tight">
              「心镜 MIndMirror」五幕式殿堂级展示面板
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed text-justify">
              本平台专门针对路演、大赛评委以及投资经理设计。用<strong>“极致克制的暗夜基调”</strong>隐喻当代高压人群面临的沉默海啸，
              当“心镜”的四维自主技术介入后，流光溢彩地映射出<strong>温暖的荧光绿与科技钛蓝</strong>。请点击下方的一至五页，体验令人震撼的项目魅力：
            </p>
          </div>
          
          <div className="bg-[#020617] border border-slate-800 p-3.5 rounded-2xl flex flex-col text-center justify-center shrink-0 min-w-36">
            <span className="font-mono text-base font-black text-emerald-400">13.5 亿+</span>
            <span className="text-[9px] text-slate-500 uppercase tracking-wider font-mono">内测算法消耗 token</span>
          </div>
        </div>

        {/* 5 Pages Horizontal Stepper Navigation Bar */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {[
            { id: 1, title: '01. 唤醒 (The Hook)', subtitle: '看不见的危险' },
            { id: 2, title: '02. 颠覆 (The Twist)', subtitle: '杀死枯燥问卷' },
            { id: 3, title: '03. 架构 (The Structure)', subtitle: '人机协同双端平台' },
            { id: 4, title: '04. 解密 (The Edge)', subtitle: '自研硬核算法群' },
            { id: 5, title: '05. 远景 (The Future)', subtitle: '重塑社会治理方案' }
          ].map(p => {
            const isActive = activeTab === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActiveTab(p.id)}
                className={`text-left p-3.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between h-20 relative overflow-hidden group ${
                  isActive 
                    ? 'bg-gradient-to-br from-slate-900 to-[#020617] border-emerald-500 shadow-xl shadow-emerald-500/10 scale-[1.02]' 
                    : 'bg-slate-950/60 border-slate-900 hover:border-slate-800 hover:bg-slate-900/20'
                }`}
              >
                <div className="z-10 space-y-1">
                  <span className={`text-[10px] font-bold font-mono tracking-wider ${isActive ? 'text-emerald-400' : 'text-slate-500'}`}>
                    {p.title}
                  </span>
                  <p className="text-xs font-sans font-black text-slate-100 group-hover:text-emerald-300 transition-colors truncate">
                    {p.subtitle}
                  </p>
                </div>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-500"></span>
                )}
              </button>
            );
          })}
        </div>

        {/* Outer Frame with Dynamic Ambient Background Color Transitions */}
        <div className={`p-1 rounded-[32px] bg-gradient-to-br ${getPageColor(activeTab)} transition-all duration-700`}>
          <div className="bg-[#020617]/95 rounded-[30px] p-6 md:p-8 space-y-8">
            
            <AnimatePresence mode="wait">
              
              {/* ================================== CH 1: 唤醒 (THE HOOK) ================================== */}
              {activeTab === 1 && (
                <motion.div
                  key="hook-tab"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8 animate-fade-in"
                >
                  {/* Top Intro Section */}
                  <div className="border-b border-slate-900 pb-5">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-1">01 / FIRST MIRROR: THE HOOK</span>
                    <h3 className="text-2xl font-black font-display text-slate-100 flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-500 animate-ping"></span>
                      冰面之下的沉默海啸：情感需求错配与传统防护失效
                    </h3>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      传统的心理评估和陪伴手段在<strong>高校学生、白领阶层</strong>两大高压力群体前，由于<strong>信息零碎化、被动性就医意愿极弱、病耻感沉重、
                      市售AI过于公式生硬</strong>四大软肋，正经历整体性失效。无数颗心在黑寂的冰层下绝望颤抖，无人倾听，传统心理门槛高不可攀。
                    </p>
                  </div>

                  {/* Impact Stats Grid (Page 2 OCR items in beautiful UI widgets) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-slate-900/30 border border-red-500/10 rounded-2xl p-5 text-center space-y-1.5 relative overflow-hidden group hover:border-red-500/20 transition-all">
                      <span className="text-[10px] text-slate-500 font-mono block">985 高校学子</span>
                      <strong className="text-3xl font-black text-red-400 font-mono block">58.2%</strong>
                      <span className="text-xs text-slate-300 block">存在普遍性焦虑风险</span>
                      <p className="text-[10px] text-slate-500">考研分流、学业保研双重压顶</p>
                    </div>

                    <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-5 text-center space-y-1.5 hover:border-slate-700 transition-all">
                      <span className="text-[10px] text-slate-500 font-mono block">985 高校学子</span>
                      <strong className="text-3xl font-black text-amber-500 font-mono block">45.28%</strong>
                      <span className="text-xs text-slate-300 block">评定为高度抑郁高风险</span>
                      <p className="text-[10px] text-slate-500">伴随躯体化焦虑 (失眠/心慌)</p>
                    </div>

                    <div className="bg-slate-900/30 border border-slate-800 rounded-2xl p-5 text-center space-y-1.5 hover:border-slate-700 transition-all">
                      <span className="text-[10px] text-slate-500 font-mono block">上市企业员工</span>
                      <strong className="text-3xl font-black text-slate-200 font-mono block">57.0%</strong>
                      <span className="text-xs text-slate-300 block">焦虑与职业倦怠 (Burnout)</span>
                      <p className="text-[10px] text-slate-500">情感剥离，生活钝化无意义感知</p>
                    </div>

                    <div className="bg-slate-900/30 border border-red-500/15 rounded-2xl p-5 text-center space-y-1.5 relative overflow-hidden group hover:border-red-500/30 transition-all">
                      <span className="text-[10px] text-slate-500 font-mono block">C端用户由于病耻感</span>
                      <strong className="text-3xl font-black text-red-500 font-mono block">80%+</strong>
                      <span className="text-xs text-slate-300 block">在重度恶化前拒看医生</span>
                      <p className="text-[10px] text-slate-500">因为羞耻感选择独自默默忍受</p>
                    </div>
                  </div>

                  {/* Contrast Column Cockpit (Page 3 Traditional vs. MindMirror) */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    
                    {/*傳統线下面對面 (Friction) */}
                    <div className="bg-slate-950/40 border border-slate-900 rounded-2xl p-6 space-y-4">
                      <div className="flex items-center gap-2 border-b border-slate-900 pb-3">
                        <span className="text-xl bg-slate-900 p-1.5 rounded-lg">🏥</span>
                        <div>
                          <h4 className="text-xs font-black text-slate-300">模式 01：传统线下心理咨询</h4>
                          <span className="text-[9px] bg-red-950 text-red-400 font-bold px-1 rounded">高壁垒极难下脚</span>
                        </div>
                      </div>
                      <ul className="text-xs text-slate-400 space-y-2.5">
                        <li className="flex gap-2">❌ <strong>病耻感沉重：</strong> 门诊排队可能遭遇熟人，内向人格本能阻碍。</li>
                        <li className="flex gap-2">❌ <strong>数据彻底断档：</strong> 咨询师只能记录“切片”，患者出了医院再无连续监控。</li>
                        <li className="flex gap-2">❌ <strong>无法做到早期发现：</strong> 等患者愿意主动来门诊时，往往已处于重度。</li>
                      </ul>
                    </div>

                    {/*市售生硬的 AI Chat (No empathy) */}
                    <div className="bg-slate-950/40 border border-slate-900 rounded-2xl p-6 space-y-4">
                      <div className="flex items-center gap-2 border-b border-slate-900 pb-3">
                        <span className="text-xl bg-slate-900 p-1.5 rounded-lg">🤖</span>
                        <div>
                          <h4 className="text-xs font-black text-slate-300">模式 02：普通 AI 聊天/陪伴软件</h4>
                          <span className="text-[9px] bg-amber-950 text-amber-500 font-bold px-1 rounded">教条灌输、留存极差</span>
                        </div>
                      </div>
                      <ul className="text-xs text-slate-400 space-y-2.5">
                        <li className="flex gap-2">❌ <strong>人机味极其浓重：</strong> 总是说“作为人工智能...”，公式回答教条。</li>
                        <li className="flex gap-2">❌ <strong>缺乏情绪特有长记忆：</strong> 前几天痛苦的要死，第二天就全忘了上下文。</li>
                        <li className="flex gap-2">❌ <strong>没有情绪小游戏介入：</strong> 只是死板的文字堆砌，缺乏短平快的治愈乐趣。</li>
                      </ul>
                    </div>

                    {/*心镜 MIndMirror (Revolution) */}
                    <div className="bg-emerald-950/10 border border-emerald-500/20 rounded-2xl p-6 space-y-4 shadow-lg shadow-emerald-500/5 relative overflow-hidden">
                      <span className="absolute top-0 right-0 bg-emerald-500 text-slate-950 text-[9px] font-black px-2 py-0.5 rounded-bl">核心突破</span>
                      <div className="flex items-center gap-2 border-b border-emerald-900/40 pb-3">
                        <span className="text-xl bg-emerald-900/30 p-1.5 rounded-lg text-emerald-400">✨</span>
                        <div>
                          <h4 className="text-xs font-black text-emerald-300">心镜：多模态量化温暖方案</h4>
                          <span className="text-[9px] bg-emerald-950 text-emerald-400 border border-emerald-800 font-bold px-1 rounded">评估干预一拳闭环</span>
                        </div>
                      </div>
                      <ul className="text-xs text-slate-300 space-y-2.5">
                        <li className="flex gap-2">✔ <strong>彻底免除病耻感：</strong> C端无感测评与暖心漫步，把评估融入日常闲聊。</li>
                        <li className="flex gap-2">✔ <strong>长链脱敏无缝追踪：</strong> 沉淀多维度情绪雷达曲线，辅助B端随时响应。</li>
                        <li className="flex gap-2">✔ <strong>CrisisSpy 生命保障：</strong> 当由于社会高压触发自残红线，毫秒级突击包抄干预。</li>
                      </ul>
                    </div>
                  </div>

                  {/* Dramatic Quote Bottom Line */}
                  <div className="bg-red-950/20 border-l-4 border-red-500 p-4 rounded-r-2xl text-xs space-y-1.5">
                    <span className="font-bold text-red-400 flex items-center gap-1">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      路演评委汇报心金句：
                    </span>
                    <p className="text-slate-300 text-justify italic">
                      “绝大多数人在情绪彻底滑向深渊前，根本不愿向任何人张口。我们今天对抗的不是传统软件，而是这个内卷时代下，千万颗在冰面之下面临灭顶之灾、却在病耻感下默默窒息的颤抖心灵！”
                    </p>
                  </div>

                  <div className="flex justify-end pt-2">
                    <button
                      onClick={() => setActiveTab(2)}
                      className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-5 py-2.5 rounded-2xl text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-emerald-500/15 cursor-pointer transition-all hover:scale-[1.02]"
                    >
                      进入第二部分：心镜的颠覆与突围
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* ================================== CH 2: 颠覆 (THE TWIST) ================================== */}
              {activeTab === 2 && (
                <motion.div
                  key="twist-tab"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="border-b border-slate-900 pb-5">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-1">02 / SECOND MIRROR: THE TWIST</span>
                    <h3 className="text-2xl font-black font-display text-slate-100 flex items-center gap-2">
                      <Smile className="w-6 h-6 text-emerald-400 animate-pulse" />
                      颠覆被动咨询，彻底杀死枯燥问卷
                    </h3>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      传统的量表测评（如 GAD-7、PHQ-9）长达几十道题，题目枯燥，做题者在高度焦虑下极易烦躁。
                      “心镜”采用 <strong>“无感对话式测评”</strong>，将繁重测评融入最生活化的日常倾诉。
                      利用极富温度的人设和大模型在对话中推导 Live CRI（情绪波动风险指数），并加入益智治愈的心情漫步，彻底重塑陪伴体验。
                    </p>
                  </div>

                  {/* Render the full interactive Simulator with high fidelity */}
                  <div className="border border-slate-900 rounded-2xl p-1 bg-[#020617]/50 shadow-inner">
                    <ProductSimulator />
                  </div>

                  <div className="flex justify-end pt-2">
                    <button
                      onClick={() => setActiveTab(3)}
                      className="bg-teal-500 hover:bg-[#14b8a6] text-slate-950 px-5 py-2.5 rounded-2xl text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-teal-500/15 cursor-pointer transition-all hover:scale-[1.02]"
                    >
                      进入第三部分：极智人机协同与三大核心架构
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* ================================== CH 3: 架构 (THE STRUCTURE) ================================== */}
              {activeTab === 3 && (
                <motion.div
                  key="structure-tab"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 animate-fade-in"
                >
                  <div className="border-b border-slate-900 pb-5">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-1">03 / THIRD MIRROR: THE STRUCTURE</span>
                    <h3 className="text-2xl font-black font-display text-slate-100 flex items-center gap-2">
                      <Layers className="w-6 h-6 text-teal-400" />
                      人机协同双端平台：高校辅导员与企业的“雷达与大脑”
                    </h3>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      评委或机构管理层最关心：“既然C端做到了高度温暖匿名的陪伴，那万一有学生或员工流露严重危机
                      ，平台怎么介入而不被指责侵犯隐私？” 答案就在我们的<strong>“三平台合璧双端闭环中”</strong>。
                      我们设计了<strong> 01 心理健康监测平台</strong> (C端)、<strong> 02 企业/高校安全决策平台</strong> (数据驾驶舱) 
                      和 <strong> 03 专家阻断式预警干预平台</strong>，完美平衡匿名性、合规以及危机时绝对迅速的人性安抚。
                    </p>
                  </div>

                  {/* 3 Platforms cards list - stunning responsive column list */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    <div className="bg-slate-950 border border-slate-900 rounded-2xl p-5 space-y-3 relative">
                      <div className="flex gap-2 items-center">
                        <span className="w-6 h-6 rounded-lg bg-teal-950 text-teal-400 font-bold flex items-center justify-center text-xs">A</span>
                        <h4 className="text-xs font-bold text-slate-100 uppercase tracking-widest">心理健康监测平台 (C端)</h4>
                      </div>
                      <p className="text-xs text-slate-405 text-slate-400">
                        利用温馨治愈人设进行长生命周期的连续、无感测评。通过每天在手机里轻轻倾诉几句，用户可掌握自己的情绪综合风险指数。
                      </p>
                      <span className="text-[10px] bg-teal-950/40 text-teal-400 border border-teal-900 px-1.5 py-0.5 rounded font-mono block w-fit">
                        客户端 · D1留存率超同类AI聊天一倍
                      </span>
                    </div>

                    <div className="bg-slate-950 border border-emerald-500/10 rounded-2xl p-5 space-y-3 relative shadow-lg shadow-emerald-500/5">
                      <span className="absolute top-0 right-4 bg-emerald-500 text-slate-950 text-[8px] font-black px-1.5 py-0.5 rounded-b">双百杯明星架构</span>
                      <div className="flex gap-2 items-center">
                        <span className="w-6 h-6 rounded-lg bg-emerald-950 text-emerald-400 font-bold flex items-center justify-center text-xs">B</span>
                        <h4 className="text-xs font-bold text-slate-100 uppercase tracking-widest">企业管理决策平台 (B端)</h4>
                      </div>
                      <p className="text-xs text-slate-405 text-slate-400">
                        管理层或高校辅导员在绝对严格脱敏前提下，一揽子获取大盘走势，知晓哪一专业或部门存在异常压力，极佳地富集或转移辅导编制。
                      </p>
                      <span className="text-[10px] bg-emerald-950/40 text-emerald-400 border border-emerald-900 px-1.5 py-0.5 rounded font-mono block w-fit">
                        管理端 · NLP智能摘要生成提速55%
                      </span>
                    </div>

                    <div className="bg-slate-950 border border-slate-900 rounded-2xl p-5 space-y-3 relative">
                      <div className="flex gap-2 items-center">
                        <span className="w-6 h-6 rounded-lg bg-red-950 text-red-450 text-red-400 font-bold flex items-center justify-center text-xs">C</span>
                        <h4 className="text-xs font-bold text-slate-100 uppercase tracking-widest">专家及医院紧急干预平台 (专家端)</h4>
                      </div>
                      <p className="text-xs text-slate-405 text-slate-400">
                        当 CrisisSpy 底层红线防御启动（硬拦截），闲聊机制一秒切断，在最快时间内，高校温和危机老师或签约心理医生会同步发出主动电话。
                      </p>
                      <span className="text-[10px] bg-red-950/40 text-red-400 border border-red-900 px-1.5 py-0.5 rounded font-mono block w-fit">
                        干预端 · CrisisSpy 拦截召回率 99.98%
                      </span>
                    </div>

                  </div>

                  {/* Flow chart visualization container with text annotation explaining the loop */}
                  <div className="bg-slate-900/40 border border-slate-850 p-6 rounded-2xl space-y-4">
                    <h4 className="text-xs font-bold text-slate-200 uppercase tracking-widest flex items-center gap-1.5">
                      <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
                      <span>人机协同闭环流程解析 (The Collaborative Loop)</span>
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-center text-xs">
                      
                      <div className="bg-slate-950 p-4 rounded-xl border border-slate-900 flex flex-col justify-between h-28">
                        <span className="text-[10px] text-slate-500 font-mono">STEP 01</span>
                        <strong className="text-slate-300 block">日常吐槽</strong>
                        <p className="text-[10px] text-slate-500">C端无感自然对话，零阻碍释压</p>
                      </div>

                      <div className="flex items-center justify-center text-slate-700">
                        <ArrowRight className="w-5 h-5 hidden md:block" />
                        <span className="block md:hidden text-xs py-1">⬇</span>
                      </div>

                      <div className="bg-slate-950 p-4 rounded-xl border border-teal-500/20 flex flex-col justify-between h-28 shadow-md">
                        <span className="text-[10px] text-teal-400 font-mono">STEP 02</span>
                        <strong className="text-slate-200 block">多维量化</strong>
                        <p className="text-[10px] text-slate-500">MindTech 大模型捕捉特有语义，更新CRI指数</p>
                      </div>

                      <div className="flex items-center justify-center text-slate-700">
                        <ArrowRight className="w-5 h-5 hidden md:block" />
                        <span className="block md:hidden text-xs py-1">⬇</span>
                      </div>

                      <div className="bg-slate-950 p-4 rounded-xl border border-emerald-500/20 flex flex-col justify-between h-28 shadow-md">
                        <span className="text-[10px] text-emerald-400 font-mono">STEP 03</span>
                        <strong className="text-slate-200 block">动态报警 & 闭环介入</strong>
                        <p className="text-[10px] text-slate-500">超标或警敏感词阻断，B端咨询师主动介入闭环</p>
                      </div>

                    </div>
                  </div>

                  <div className="flex justify-end pt-3">
                    <button
                      onClick={() => setActiveTab(4)}
                      className="bg-cyan-500 hover:bg-[#06b6d4] text-slate-950 px-5 py-2.5 rounded-2xl text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-cyan-500/15 cursor-pointer transition-all hover:scale-[1.02]"
                    >
                      进入第四部分：解密核心自研技术壁垒
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* ================================== CH 4: 解密 (THE EDGE) ================================== */}
              {activeTab === 4 && (
                <motion.div
                  key="edge-tab"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="border-b border-slate-900 pb-5">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-1">04 / FOURTH MIRROR: THE EDGE</span>
                    <h3 className="text-2xl font-black font-display text-slate-100 flex items-center gap-2">
                      <Cpu className="w-6 h-6 text-cyan-400 animate-spin" />
                      学术背书，专业建模与极精验证数据
                    </h3>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      心镜不仅仅是一张商业蓝图。为了证明其扎实的学术厚度和临床闭垒，人大团队参考了<strong>中科院一区、JCR Q1 国际心理大模型顶刊文献</strong>，
                      自主打磨出了<strong> 4 大心理大模型系统集群</strong>。您可以在下方切换查看具体系统的底层算法运行机制与测试极值。
                    </p>
                  </div>

                  {/* Tech Blueprint layout directly injected here */}
                  <div className="border border-slate-900 rounded-2xl p-1 bg-[#020617]/50 shadow-inner">
                    <TechBlueprint />
                  </div>

                  <div className="flex justify-end pt-3">
                    <button
                      onClick={() => setActiveTab(5)}
                      className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-5 py-2.5 rounded-2xl text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-emerald-500/15 cursor-pointer transition-all hover:scale-[1.02]"
                    >
                      进入第五部分：重塑未来社会治理远景
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* ================================== CH 5: 远景 (THE FUTURE) ================================== */}
              {activeTab === 5 && (
                <motion.div
                  key="future-tab"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8 animate-fade-in"
                >
                  
                  {/* Top Intro Section */}
                  <div className="border-b border-slate-900 pb-5">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-1">05 / FIFTH MIRROR: THE FUTURE</span>
                    <h3 className="text-2xl font-black font-display text-slate-100 flex items-center gap-2">
                      <Landmark className="w-6 h-6 text-emerald-400 animate-pulse" />
                      智心善治：重塑新时代社会保障治理方案与年轻团队力量
                    </h3>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      我们坚信，“心镜”能够从<strong>一所高校（RUC人大的温床）</strong>完美爆发，向全国高校、企业乃至社会心理健康防线扩散。
                      我们不仅建立了一套高精度的 SaaS 技术产品服务，更在计算社会学、计算心理学领域探索着最令人瞩目的远前沿。
                      下方搭载的是我们团队为学校或企业精准定制的<strong>“社会效能与管理回报核算引擎”</strong>，请拖动滑块测算您可获取的巨大收益：
                    </p>
                  </div>

                  {/* Injected Impact & ROI Calculator directly */}
                  <div className="border border-slate-900 rounded-2xl p-1 bg-[#020617]/50 shadow-inner">
                    <BusinessModel />
                  </div>

                  {/* Team Introduction Section */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-slate-100 flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-emerald-400" />
                      <span>群英荟萃：中国人民大学跨学科交叉创客团队</span>
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                      {TEAM_MEMBERS.map(member => (
                        <div
                          key={member.name}
                          className="bg-slate-950/85 border border-slate-900 p-5 rounded-2xl flex flex-col justify-between space-y-4 hover:border-emerald-500/20 transition-all relative overflow-hidden group"
                        >
                          <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/5 rounded-full blur-xl group-hover:bg-emerald-500/10 transition-all"></div>
                          
                          <div className="space-y-3 z-10">
                            <div className="flex items-center gap-3">
                              <span className="text-2xl bg-slate-900 p-2 rounded-xl shrink-0">{member.avatar}</span>
                              <div>
                                <span className="text-[9px] text-emerald-400 block font-mono font-bold tracking-widest uppercase mb-0.5">{member.tag}</span>
                                <h5 className="text-sm font-black text-slate-200">{member.name}</h5>
                                <p className="text-[11px] text-slate-500">{member.role}</p>
                              </div>
                            </div>

                            <div className="border-t border-slate-900 pb-1"></div>

                            <div className="space-y-1.5 text-xs text-slate-300">
                              {member.accomplishments.map((acc, i) => (
                                <div key={i} className="flex gap-1.5 items-start">
                                  <span className="h-1 w-1 bg-emerald-400 rounded-full mt-2 shrink-0"></span>
                                  <span>{acc}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Corporate/Social Future Development Path map (Page 18 Timeline) */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-slate-100 flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-emerald-400" />
                      <span>心镜多层次滚动扩张路线图 (MindMirror Expansion Roadmap)</span>
                    </h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-sans">
                      
                      <div className="bg-slate-900/20 border border-slate-900 p-4 rounded-xl space-y-1">
                        <span className="text-emerald-400 font-mono font-bold">2026 - 2027</span>
                        <strong className="text-slate-200 block text-xs">算法调优与模式探索</strong>
                        <p className="text-[11px] text-slate-500 leading-relaxed">
                          北京高校联盟（人大为起点）进行轻量Demo级试联。深入积累社群运营变现与首期脱敏真实病例知识库。
                        </p>
                      </div>

                      <div className="bg-slate-900/20 border border-slate-900 p-4 rounded-xl space-y-1">
                        <span className="text-emerald-400 font-mono font-bold">2027 - 2028</span>
                        <strong className="text-slate-200 block text-xs">多模态融合与多元溢价</strong>
                        <p className="text-[11px] text-slate-500 leading-relaxed">
                          进军高危高压企业HR常态化测评，测评标准化输出。扩容服务大厂及互联网密集型办公端。
                        </p>
                      </div>

                      <div className="bg-slate-900/20 border border-emerald-500/20 p-4 rounded-xl space-y-1 relative">
                        <span className="absolute top-0 right-4 bg-emerald-500 text-slate-950 text-[8px] font-bold px-1 rounded-b">全国性扩张</span>
                        <span className="text-emerald-400 font-mono font-bold">2028 - 2035</span>
                        <strong className="text-slate-200 block text-xs">自研大模型生态矩阵</strong>
                        <p className="text-[11px] text-slate-500 leading-relaxed">
                          建立心镜自主研发的心理底层专域大模型。树立业内高安全性标杆，签约全国核心数百家三甲医院绿通。
                        </p>
                      </div>

                      <div className="bg-slate-900/20 border border-slate-900 p-4 rounded-xl space-y-1">
                        <span className="text-emerald-400 font-mono font-bold">2035 年及以后</span>
                        <strong className="text-slate-200 block text-xs">社会智能安全共治方案</strong>
                        <p className="text-[11px] text-slate-500 leading-relaxed">
                          高阶人机协同、全平台开放。将社会各阶层、全生命周期数据反馈给社会心治决策端，支撑出海布局。
                        </p>
                      </div>

                    </div>
                  </div>

                  {/* Interactive pitch recommendation ending quote */}
                  <div className="bg-emerald-950/20 border-l-4 border-emerald-500 p-5 rounded-r-[20px] text-xs space-y-1.5 shadow-xl">
                    <span className="font-bold text-emerald-450 text-emerald-400 flex items-center gap-1">
                      👑 终篇·路演答辩终极金句：
                    </span>
                    <p className="text-slate-300 text-justify italic">
                      “在这座名为AI的冷酷大陆中间，心镜想做一所暖灯通明的防风避雨港。买下我们，不仅买下了一套能将诊疗撰写提效55%的高精度 CNN-LSTM 时序模型，更买下了一群脚下有泥、眼里有光、誓用心灵守护心灵的人大先锋科技青年。谢谢大家，心镜期待与您一同，守护沉默海啸下的那一盏温暖微光！”
                    </p>
                  </div>

                </motion.div>
              )}

            </AnimatePresence>

          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-6 text-center text-xs text-slate-500 space-y-2 shrink-0">
        <p className="font-mono">RUC MINDMIRROR • © 2026 ALL RIGHTS RESERVED • CHENMO TECH INC.</p>
        <p className="max-w-md mx-auto leading-relaxed px-4">
          以数字科技守护心理健康，以智慧治理赋能社会发展。
          我们深信：科技的最高境界不是高筑冷门的算力，而是俯身融化冰层下最细微的颤动。
        </p>
      </footer>

      {/* RUC awards popup modal */}
      <AnimatePresence>
        {isCrestModalOpen && (
          <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-slate-950 border border-emerald-500/30 max-w-lg w-full rounded-2xl p-6 shadow-2xl relative space-y-5"
            >
              <h3 className="text-base font-black text-slate-100 flex items-center gap-2 border-b border-slate-900 pb-3">
                <Award className="w-5 h-5 text-emerald-400" />
                “心镜 MIndMirror” 核心含金量记录
              </h3>

              <div className="space-y-3.5 text-xs text-slate-300">
                <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-850">
                  <strong className="text-emerald-300 block mb-1">🏅 第一届“百融杯” AI 智能体应用创新大赛</strong>
                  <p className="text-slate-455 font-sans leading-relaxed">
                    在全国众多高校及科研所竞争中脱颖而出，总决赛获得<strong>全国三等奖</strong>。
                  </p>
                </div>

                <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-850">
                  <strong className="text-emerald-300 block mb-1">🏅 2025 年“AI 火种”创新创业总决赛</strong>
                  <p className="text-slate-455 leading-relaxed">
                    斩获数据与人工智能领域<strong>最佳优胜大奖</strong>，获得社会心理学泰斗与计算大语言专家重点首推。
                  </p>
                </div>

                <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-850">
                  <strong className="text-emerald-300 block mb-1">📖 年度重磅：中国人工智能智能体白皮书（2025）</strong>
                  <p className="text-slate-455 leading-relaxed">
                    作为极少数<strong>完全高校自主开发、完美跑通人机诊疗协同</strong>的经典案例，被白皮书点名整章剖析，树立行业风标。
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center pt-3 border-t border-slate-900 text-xs">
                <span className="text-[10px] text-slate-500 font-mono">CHEMO TECHNOLOGY • RUC TEAM</span>
                <button
                  onClick={() => setIsCrestModalOpen(false)}
                  className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-4 py-1.5 rounded-xl text-xs font-bold cursor-pointer transition-colors"
                >
                  我知道了
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
