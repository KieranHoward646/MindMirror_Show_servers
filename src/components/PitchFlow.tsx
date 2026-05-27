import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, ChevronLeft, AlertCircle, Eye, ShieldCheck, HeartPulse, 
  TrendingUp, Users, Info, Award, CircleAlert, CheckCircle, ExternalLink, Activity
} from 'lucide-react';
import { PitchChapter } from '../types';

const OUTLINE_CHAPTERS: PitchChapter[] = [
  {
    id: 1,
    title: '第一镜：冰面之下的沉默海啸',
    subtitle: '深刻的情感需求错配与传统防护失效',
    concept: '据国家卫健委及人大团队2000+份真实问卷：985高校学生抑郁/焦虑风险高达45%~58%。然而，高达87%的学生因为传统线下心理咨询的病耻感、高昂费用和不连续性望而却步；现有的AI心理陪伴也普遍存在“人机味浓重、公式化且缺乏深度记忆”等硬伤。传统医学体系缺乏长效常态化追踪，高危预警难及时。',
    painPoints: [
      { issue: '线下咨询心理障碍 (病耻感)', consequence: '超80%的患者在重度恶化前选择独自忍受，错过黄金干预窗口', icon: '🧠' },
      { issue: 'AI陪伴严重同质化/缺乏人性化', consequence: '生硬教条式的“机器回复”缺乏情绪上下文记忆，用户极速流失', icon: '🤖' },
      { issue: '传统医疗系统数据断档、智障率高', consequence: '缺乏日常常态化无感监测，数据无法反馈追踪，导致危机干预往往滞后', icon: '🏥' }
    ],
    displayStats: [
      { label: '985高校生焦虑风险', value: '58.2%', desc: '重任重压，心理防线脆弱' },
      { label: '企业员工焦虑风险', value: '57.0%', desc: '内卷时代社会面情绪普降' },
      { label: '潜在心理咨询市场规模', value: '1041亿', desc: '复合增长率达到114%的朝阳刚需' }
    ],
    quote: '真正的展示逻辑，应以此开门见山：“我们今天要对抗的，不是无聊，而是这个内卷时代中千万颗正在冰层下剧烈颤抖、却无处发声的真实心灵。”'
  },
  {
    id: 2,
    title: '第二镜：心镜双面 —— RUC 多模态解法',
    subtitle: '重塑 C端温暖陪伴 & 赋能 B端专业诊疗的双面一体',
    concept: '“心镜”并不是一个普通的AI聊天软件。我们首创了“温暖陪伴（C端）与科学监控驾驶舱（B端）”相扣的闭环引擎。在C端，它是温暖、无感评估、支持个性定制化人设的情感伴侣；在B端，它沉淀脱敏数据流，为咨询师、高校、企业的职业干预体系提供最精准的“情绪雷达”和“诊断辅助驾驶舱”。',
    solutionBullets: [
      { title: 'C端 · 越伴越懂的数字伙伴', desc: '采用无感测评代替枯燥问卷，把评估巧妙融入日常对话，每日量化出情绪波动。设计趣味治愈游戏，提供温润的心灵安抚。' },
      { title: 'B端 · P.C.data 辅助医疗数据驾驶舱', desc: '在绝对保护隐私的前提下，为高校或企业咨询师实时绘制患者情绪趋势曲线，高危信号毫秒级红线警告，缩短转介链路。' },
      { title: '人机协同闭环', desc: '实现“评估-无感干预-高危自动触发红牌-专家介入-再评估”的数字化高能闭环。' }
    ],
    displayStats: [
      { label: 'C端用户 留存率表现', value: '47.65%', desc: 'D1留存，远超同类AI聊天竞品' },
      { label: '反馈准确率', value: '94.5%', desc: '35%恰当，40%认为有切实帮助' },
      { label: '心情趣味游戏 缓解率', value: '≥65%', desc: '通过短平快心动小游戏瞬间降压' }
    ]
  },
  {
    id: 3,
    title: '第三镜：独创硬核技术群 —— 科技铸造深度防护',
    subtitle: '四大自研心理AI模块构筑壁垒',
    concept: '技术不只是拿来罗列，而是心镜建立临床级壁垒的核心支柱。在展示技术时，我们推荐让评委看到这四个板块如何协同：首先由情绪感知大模型提炼核心指数，通过智慧流控动态压缩输出，由CrisisSpy进行最高级生命安全把关，并输出给P.C.data临床端：',
    solutionBullets: [
      { title: 'MindTech 情绪识别大模型', desc: '参考中科院1区顶刊，采用 CNN-LSTM 混合模型+BP网络聚类。首创多维数据整合，计算综合情绪指数 (CRI)，实现动态主动预警。' },
      { title: 'MindMentor 情绪压缩大模型流控', desc: '解决传统模型生硬公式化的痛点。自研情绪类上下文检索压缩系统，实现“系统提示词+方向引导代码”，完成情绪价值优先流式输出。' },
      { title: 'CrisisSpy 动态权限与生命红线防御系统', desc: '对标 ISO 27001、NIST。当监测到极限自残字眼时，以毫秒级响应实施硬拦截 (Hard Deny)，自动冻结AI闲聊并接入人工外呼介入。' },
      { title: 'P.C.data 脱敏动态病历舱', desc: '结构化摘要提效50%，将繁复的信息整理归还给线下专家，建立高安全性、动态追踪的数据驾驶舱资产。' }
    ],
    displayStats: [
      { label: 'CNN-LSTM 极佳精准性', value: '1.9%~6%', desc: '碰撞测试极限误差极低' },
      { label: '累计内测数据追踪', value: '32天', desc: '高黏性深度脱敏反馈记录' },
      { label: '大模型Token累计消耗', value: '13.5亿+', desc: '深厚的工程调用与打磨基础' }
    ]
  },
  {
    id: 4,
    title: '第四镜：商业破局 —— “智心善治”的生态宏图',
    subtitle: '多级市场渐进打法与扎实的SaaS闭环',
    concept: '我们的商业逻辑不追求空中楼阁，而是奉行“智心善治”理念：前期以高校为基石跑通验证（人大及北京高校生态圈）；中期进军密集型白领服务企业，开展职场心理常态化关怀；后期赋能政府学术主体，构建全生命周期、全国性的社会心理治体系。',
    solutionBullets: [
      { title: '前期：高校生态示范（0-1 破局）', desc: '直攻大学生病耻感与辅导员极速识别漏洞。目前已与国内名校开展Demo联测并写入年度AI智能体白皮书。' },
      { title: '中期：高压密集型企事业单位（1-10 规模）', desc: '针对大厂/服务型高压行业员工，提供标准化标准组网 SaaS。标准化心镜用户端+企业HR数据驾驶舱结合。' },
      { title: '后期：政务与社会治理（10-100 生态）', desc: '将脱敏后的极小颗粒数据资产反馈给社会心治体系，支撑决策，筑造新时代社会保障数字桥梁。' }
    ],
    displayStats: [
      { label: '首期学校/企业覆盖规划', value: '30+', desc: '已完成多家头部企业的深度访谈与共谋' },
      { label: 'SaaS 商业核心闭环', value: '3大平台', desc: '健康监测 + 企业决策 + 专家干预一体机' }
    ]
  },
  {
    id: 5,
    title: '总结镜：交叉群英 —— 人本关怀与科技极智的交汇',
    subtitle: '多学科交叉融合 人民大学双百杯特等奖/一等奖团队主力',
    concept: '再完美的宏图也需要最顶级的将领。“心镜”成员兼备技术硬度与人文厚度。罗浩男、马鑫权等领衔，交叉融合金工、人工智能、数学和心理学。团队荣获百融杯AI大赛、AI火种大赛特等/优胜等重磅奖项，入选高校智能体白皮书。我们不仅仅是在搭建一套系统，我们是在用科技在冰冷的数据世界中筑造一个让千万负重前行的人能随时靠一靠、温暖歇脚的数字港湾。',
    displayStats: [
      { label: '创新大赛含金量', value: '三等奖/优胜', desc: '百融杯、五四创新杯实力认证' },
      { label: '学科背景跨度', value: '4大专业', desc: '金工+AI+数学+临床心理学交叉' },
      { label: '内测总调用频次', value: '98,771次', desc: '极度扎实的C端高频小游戏与心情漫步' }
    ],
    quote: '当评委或投资人看到这里时，他们买下的不只是四驱技术的算法，还有这一群眼里有光、脚下有泥、用心灵温暖心灵的人大青年。'
  }
];

export default function PitchFlow() {
  const [currentChapter, setCurrentChapter] = useState(0);

  const handleNext = () => {
    if (currentChapter < OUTLINE_CHAPTERS.length - 1) {
      setCurrentChapter(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentChapter > 0) {
      setCurrentChapter(prev => prev - 1);
    }
  };

  const current = OUTLINE_CHAPTERS[currentChapter];

  return (
    <div id="pitch-flow-container" className="space-y-6">
      
      {/* Visual Navigation Progress bar */}
      <div id="pitch-progress-header" className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs mb-3">
          <span className="text-slate-400 font-mono">PITCH FLOW PATH / 汇报展示逻辑地图</span>
          <span className="bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded font-bold">
            步骤 {current.id} / {OUTLINE_CHAPTERS.length}
          </span>
        </div>
        <div className="grid grid-cols-5 gap-2">
          {OUTLINE_CHAPTERS.map((ch, idx) => (
            <button
              key={ch.id}
              onClick={() => setCurrentChapter(idx)}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                idx === currentChapter 
                  ? 'bg-gradient-to-r from-emerald-400 to-teal-500 shadow-lg shadow-emerald-500/20 scale-y-110' 
                  : idx < currentChapter 
                    ? 'bg-emerald-800' 
                    : 'bg-slate-800 hover:bg-slate-700'
              }`}
              title={ch.title}
            />
          ))}
        </div>
      </div>

      {/* Main Pitch Card Canvas with Motion transitions */}
      <div id="pitch-canvas-body" className="relative overflow-visible">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentChapter}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35 }}
            className="border border-emerald-500/10 bg-slate-950/80 rounded-3xl p-8 shadow-2xl relative"
          >
            {/* Top Chapter Identity and Slogan */}
            <div className="space-y-1 mb-6 border-b border-slate-900 pb-5">
              <h4 className="text-emerald-400 font-mono text-sm tracking-wider uppercase">
                {current.subtitle}
              </h4>
              <h2 className="text-2xl md:text-3xl font-black text-slate-100 flex items-center gap-3">
                <span className="flex h-3 w-3 rounded-full bg-emerald-500"></span>
                {current.title}
              </h2>
            </div>

            {/* Structured Pitch Context Core */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start mb-6">
              
              {/* Concept Text Summary & Quote (Takes 3 columns) */}
              <div className="lg:col-span-3 space-y-6">
                <div>
                  <h5 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-2">汇报核心导读 (The Narrative Focus)</h5>
                  <p className="text-slate-300 text-sm leading-relaxed text-justify">
                    {current.concept}
                  </p>
                </div>

                {/* Bullets (If present, e.g. Solutions and Tech specs) */}
                {current.solutionBullets && (
                  <div className="space-y-4">
                    <h5 className="text-xs font-mono text-slate-500 uppercase tracking-widest">关键破局点 (Pivot Elements)</h5>
                    <div className="grid grid-cols-1 gap-3.5">
                      {current.solutionBullets.map((bull, i) => (
                        <div key={i} className="bg-slate-900/40 border border-slate-900 p-3 rounded-xl flex gap-3 text-xs leading-relaxed">
                          <div className="w-5 h-5 rounded-full bg-emerald-950 text-emerald-400 font-black flex items-center justify-center shrink-0">
                            {i + 1}
                          </div>
                          <div>
                            <strong className="text-emerald-300 block mb-0.5">{bull.title}</strong>
                            <span className="text-slate-400">{bull.desc}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Pain points with subtle emoji icons (If present, e.g. Page 1 Pain) */}
                {current.painPoints && (
                  <div className="space-y-4">
                    <h5 className="text-xs font-mono text-slate-500 uppercase tracking-widest">三大难以回避的社会痛点 (Key Pains)</h5>
                    <div className="grid grid-cols-1 gap-3.5">
                      {current.painPoints.map((pain, i) => (
                        <div key={i} className="bg-slate-900/60 border border-red-500/10 p-3.5 rounded-xl flex gap-3 items-start text-xs">
                          <span className="text-xl shrink-0 p-1.5 bg-slate-950 rounded-lg">{pain.icon}</span>
                          <div>
                            <strong className="text-red-400 block mb-1 font-bold">{pain.issue}</strong>
                            <span className="text-slate-400 leading-relaxed">{pain.consequence}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {current.quote && (
                  <div className="bg-emerald-950/15 border-l-4 border-emerald-500 p-4 rounded-r-2xl">
                    <div className="flex gap-2">
                      <span className="text-2xl text-emerald-500 font-serif shrink-0">“</span>
                      <p className="text-xs text-emerald-300 italic leading-relaxed py-1">
                        {current.quote}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Data and Indicators Column (Takes 2 columns) */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-slate-900/40 border border-slate-900 p-6 rounded-2xl space-y-5">
                  <h5 className="text-xs font-mono text-slate-500 border-b border-slate-800 pb-2 flex items-center gap-1.5">
                    <Activity className="w-4 h-4 text-emerald-400" />
                    <span>震撼级支撑数据 (Supporting Data)</span>
                  </h5>
                  
                  <div className="divide-y divide-slate-850">
                    {current.displayStats?.map((stat, i) => (
                      <div key={i} className="py-4 first:pt-1 last:pb-1 group">
                        <div className="flex justify-between items-baseline mb-1">
                          <span className="text-xs text-slate-400 font-sans group-hover:text-slate-200 transition-colors">
                            {stat.label}
                          </span>
                          <span className="text-2xl font-black bg-gradient-to-r from-emerald-300 to-teal-400 bg-clip-text text-transparent">
                            {stat.value}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 font-sans">
                          {stat.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pitch recommendation tip */}
                <div className="bg-slate-900/20 border border-slate-800 p-4 rounded-2xl text-xs space-y-2">
                  <span className="font-bold text-slate-200 block flex items-center gap-1">
                    <Award className="w-4 h-4 text-emerald-400 animate-pulse" />
                    本章幻灯片表达逻辑 & 金句推荐
                  </span>
                  <p className="text-slate-400 leading-relaxed text-[11px]">
                    {current.id === 1 && '💡 摒弃传统数据堆砌，从人文同感切入。强调“病耻感”这一传统线下和竞品避而不谈的禁忌，衬托出“无感陪伴”方案的高贵。'}
                    {current.id === 2 && '💡 突出“双面闭环”。评委最喜欢逻辑严密。把高校最头疼的“老师日常不知道谁抑郁”与“学生害怕看医生导致病历延后”，用我们“评估-应急防线-专家包抄”一拳砸穿！'}
                    {current.id === 3 && '💡 避免枯燥地读大模型论文，而是说：“我们把顶级顶刊的 CNN-LSTM 模型和 BP 神经网络进行了临床级淬炼，并结合 CrisisSpy 的红线保护。我们用安全写成了本草纲目，用算法写成了救心丸。”'}
                    {current.id === 4 && '💡 商业打法重在稳健和生态共建。展示“智心善治”的愿景。我们要从人大一所学校入手取得高校白皮书推荐，再到白领企业服务，最后实现社会化数据回馈。'}
                    {current.id === 5 && '💡 极力呈现名校（人大）跨生医学AI学者的专业气场与初心。用一句极具共鸣的“让负重前行的人歇脚的数字港湾”引爆全场掌声，高屋建瓴。'}
                  </p>
                </div>
              </div>

            </div>

            {/* Slider Action navigations */}
            <div className="flex justify-between items-center border-t border-slate-900 pt-5 mt-4">
              <button
                onClick={handlePrev}
                disabled={currentChapter === 0}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium border transition-colors cursor-pointer ${
                  currentChapter === 0
                    ? 'border-slate-800/40 text-slate-600 cursor-not-allowed'
                    : 'border-slate-800 text-slate-300 hover:bg-slate-900 hover:text-white'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                上一镜
              </button>
              
              <div className="hidden sm:flex text-xs text-slate-500 font-mono">
                RUC MINDS • MINDMIRROR PITCH ENGINE
              </div>

              <button
                onClick={handleNext}
                disabled={currentChapter === OUTLINE_CHAPTERS.length - 1}
                className={`flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-bold bg-gradient-to-r transition-all cursor-pointer ${
                  currentChapter === OUTLINE_CHAPTERS.length - 1
                    ? 'from-slate-800 to-slate-800 text-slate-500 cursor-not-allowed border border-slate-900'
                    : 'from-emerald-500 to-teal-500 text-slate-950 hover:shadow-lg hover:shadow-emerald-500/20 hover:scale-[1.02]'
                }`}
              >
                下一镜
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
