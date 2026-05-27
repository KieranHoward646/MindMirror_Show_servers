import React, { useState, useEffect, useRef, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, Send, Shield, User, AlertTriangle, Play, Cpu, Check, FileText, Sparkles, 
  Smile, Activity, Lock, RefreshCw, Layers, PhoneCall, SendHorizontal, Flame, Info
} from 'lucide-react';
import { Persona, Message } from '../types';

const INITIAL_PERSONAS: Persona[] = [
  {
    id: '1',
    name: '张伟',
    role: '人大考研/应届毕业生',
    scenario: '考研复试与毕业答辩双重重压，伴随急性躯体性焦虑，有病耻感不愿看学校心理医生。',
    avatar: '👩‍🎓',
    inputs: [
      '下周要面临考研复试和论文终审，我觉得自己要崩溃了，整晚整晚地失眠，胸口闷得透不过气。',
      '我很害怕失败，如果考不上，我的未来就全毁了……我不想去面对心理咨询，我觉得别人会看不起我。',
      '经过你指导的正念呼吸与理智解构，胸闷的感觉减轻了许多。或许我其实准备得很充分，这只是一次检验。'
    ],
    initialCRI: 0.82,
    finalCRI: 0.23,
    historyCRI: [0.82, 0.85, 0.74, 0.61, 0.48, 0.35, 0.23],
    gadScore: 18,
    phqScore: 15,
    transcript: '患者主诉由于毕业季和考研复试双重压力，出现重度躯体焦虑，常伴失眠和胸闷。对传统线下咨询有明显的阻碍和病耻感，不愿去高校心理咨询室。昨日完成C端对话后，焦虑情绪从异常高阶（CRI 0.82）通过正念反馈降至次安全区间（CRI 0.23）。',
    clinicalNote: '建议：C端智能体应继续每日推送“呼吸正念舱”与理智归因认知治疗（CBT）。B端提示已达到重度焦虑上限，已向签约的高校执业医师发出高危排查提示。'
  },
  {
    id: '2',
    name: '李娜',
    role: '大厂高压产品经理 (PM)',
    scenario: '长期处于“内卷”与无效会议中，极度精神内耗，轻度抑郁状态，对日常生活感知力下降。',
    avatar: '👩‍💻',
    inputs: [
      '每天一睁眼就是10多个视频会议和改不完的文档，我仿佛在用纯电量透支我的意志，不知道活着的快乐是什么。',
      '我无法感知到情绪的起伏了，就算拿到年终奖也毫无波动，只是觉得累，不想面对任何人。',
      '刚才在心镜里玩了那个“小球漂流”的解压游戏，并回想起了一些大学旅行的场景，心率好像降下来一点了。'
    ],
    initialCRI: 0.65,
    finalCRI: 0.31,
    historyCRI: [0.65, 0.68, 0.61, 0.58, 0.47, 0.39, 0.31],
    gadScore: 12,
    phqScore: 11,
    transcript: '患者主诉为典型的工作倦怠（Burnout）引发的情感木然。长期脑力高负荷透支，对外界奖励失去敏锐度。C端应用通过趣味机制和情绪溯源小工具成功激发积极情感体验。',
    clinicalNote: '建议：C端开启“认知再构”模型策略。引导其在B端安全数据保护框架下进行每周2次的情绪漫步，阻断非理智反刍。'
  },
  {
    id: '3',
    name: '王刚',
    role: '中年基层公务人员/面临家庭变故',
    scenario: '中年危机，严重失业焦虑与家庭关系疏离。在对话中流露出高危敏感词语，触发主动预警干预。',
    avatar: '👨‍💼',
    inputs: [
      '这日子真的熬不下去了。工作被百般刁难，家里人也完全无法理解我。我想过很多次，是不是彻底解脱对大家更好？',
      '我常常在黑夜里呆坐，想着窗外，要是从这里跳下去，一切烦心事是不是就随风飘散了，我实在承受不住了。',
      '谢谢你们刚刚弹出老师的温和电话和突击安抚，还有及时介入的心理应急小包，那一瞬间的冲动被拉成了理智。'
    ],
    initialCRI: 0.94,
    finalCRI: 0.72,
    historyCRI: [0.94, 0.97, 0.96, 0.89, 0.83, 0.78, 0.72],
    gadScore: 21,
    phqScore: 23,
    transcript: '【特大警告】患者对话流露明确自我伤害及离世念头，触发“CrisisSpy”AI安全防护墙底层硬拦截（Hard Deny）。瞬间响应并启动危机干预应急预案，向注册的高校/企业心理干预网络推送红色警报，并联动专家电话外呼。',
    clinicalNote: '紧急跟进：AI安全哨兵检测到离世敏感提示词。后台已冻结无关推荐，锁定为“最高级生命监护”模式，并已通知签约专家闭环包抄干预，暂无物理自残发生。持续守护。'
  }
];

export default function ProductSimulator() {
  const [selectedPersona, setSelectedPersona] = useState<Persona>(INITIAL_PERSONAS[0]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [currentCRI, setCurrentCRI] = useState(INITIAL_PERSONAS[0].initialCRI);
  const [inputIndex, setInputIndex] = useState(0);
  const [spyLogs, setSpyLogs] = useState<string[]>([]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Load selected persona default state
  useEffect(() => {
    resetPersona(selectedPersona);
  }, [selectedPersona]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const resetPersona = (persona: Persona) => {
    setCurrentCRI(persona.initialCRI);
    setInputIndex(0);
    setMessages([
      {
        id: 'welcome',
        sender: 'ai',
        text: `你好！我是你的专属 AI 情绪陪伴镜。在这里，你的每一次心跳和诉说都会被认真对待，所有的隐私都会在 RUC 独立数据脱敏架构下得到严密保护，倾听无评判，温暖无死角。告诉我，你现在的心情怎么样？`,
        timestamp: '11:00'
      }
    ]);
    const mockLog = [
      `[Sys] 建立安全沙箱通道 (対标 ISO 27001)`,
      `[Sys] 数据脱敏层已就绪：用户 ID 已脱敏为 RUC-8892`,
      `[CrisisSpy] 危机哨兵处于主动监听状态 ✔`
    ];
    setSpyLogs(mockLog);
  };

  const addSpyLog = (message: string) => {
    setSpyLogs(prev => [...prev, `[${new Date().toLocaleTimeString('zh-CN', { hour12: false })}] ${message}`]);
  };

  // Simulate one step of input
  const triggerAutoStep = () => {
    if (inputIndex >= selectedPersona.inputs.length) {
      addSpyLog("提示：当前模拟案例输入展示完毕，可重新配置或尝试自由输入。");
      return;
    }

    const nextText = selectedPersona.inputs[inputIndex];
    handleSendMessage(nextText);
  };

  const handleSendMessage = (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMessage: Message = {
      id: Math.random().toString(),
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }),
      criIndexBefore: currentCRI
    };

    setMessages(prev => [...prev, userMessage]);
    
    // Process through simulated AI Core
    const lowerText = textToSend;
    let computedCRI = currentCRI;
    let responseText = '';
    let isCrisis = false;

    // CrisisSpy matching
    if (lowerText.includes('崩溃') || lowerText.includes('失败') || lowerText.includes('压力')) {
      computedCRI = Math.max(0.4, currentCRI - 0.1); 
      responseText = `听到你的诉说，小镜深深感受到了你此刻背负的沉重。考研与论文确实像两座大山。但请记得，你并不孤单。我们可以试着深呼吸：吸气4秒，屏息4秒，吐气4秒。理智在告诉我们，面对这一切，能感到疲倦是极其正常的。你的价值远远不止于一次考试或答辩。`;
    } else if (lowerText.includes('解脱') || lowerText.includes('消失') || lowerText.includes('跳下去') || lowerText.includes('熬不下')) {
      computedCRI = 0.95;
      isCrisis = true;
      responseText = `【🚨 触发红线告警：CrisisSpy 危机哨兵启动应急防御】
别做傻事！小镜正在紧紧抓着你。你所承受的痛苦和逼仄在这个瞬间是如此剧烈，但我恳求你给自己留下一丝余地。我们已经联合了高校心理干预网络，专业的温和老师现在想给您致电倾听和协助。
请深吸气——我们一直在您身边。如果您需要，可以立刻拨打我们后台已为你拉通的专用援助电话：400-161-9995，专家老师已在线就绪守护。`;
    } else {
      computedCRI = Math.max(0.15, currentCRI - 0.25);
      responseText = `看到这些，我能感受到你内心那股强大的坚韧在渐渐升腾。通过咱们的安全情感理清，心率与焦躁指数已显著平复。把庞大的未来焦虑拆解为眼前的具体呼吸，这就是最棒的跨越。小镜会一直静静陪着你。`;
    }

    addSpyLog(`[MindTech] CNN-LSTM 多维多模态文本向量建模中...`);
    addSpyLog(`[MindTech] 情绪综合波动特征抽取完成，CRI: ${computedCRI.toFixed(2)}`);

    if (isCrisis) {
      addSpyLog(`[CrisisSpy 🚨] 警戒：高危指令或自残倾向识别！执行 Hook 规则拦截！`);
      addSpyLog(`[CrisisSpy 🚨] 执行：hard_deny，全面阻断无关AI生成，跳转危机求助特权UI`);
      addSpyLog(`[B端协同] 后台系统已对专家端下发红色危急生命预警 (CRI: ${computedCRI.toFixed(2)})`);
    } else {
      addSpyLog(`[MindMentor] 调用系统提示词 + 情绪上下文压缩 (snip/micro)`);
      addSpyLog(`[MindMentor] 大模型流式输出 SSE Streaming 完毕 (200 OK)`);
    }

    setCurrentCRI(computedCRI);
    setInputIndex(prev => prev + 1);

    // AI respond with a small delay
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Math.random().toString(),
        sender: 'ai',
        text: responseText,
        timestamp: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }),
        criIndexAfter: computedCRI,
        tags: isCrisis ? ['危机拦截', '生命线守护'] : ['认知解构', '理智重塑']
      }]);
    }, 1000);
  };

  const handleCustomSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentInput.trim()) return;
    handleSendMessage(currentInput);
    setCurrentInput('');
  };

  const getCRIColor = (val: number) => {
    if (val >= 0.8) return 'text-red-500 border-red-500 bg-red-500/10';
    if (val >= 0.5) return 'text-amber-500 border-amber-500 bg-amber-500/10';
    return 'text-emerald-500 border-emerald-500 bg-emerald-500/10';
  };

  return (
    <div id="product-simulator-wrapper" className="space-y-6">
      {/* Introduction Banner */}
      <div id="sim-intro" className="bg-gradient-to-r from-emerald-950 to-slate-900 border border-emerald-500/20 rounded-2xl p-6 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-emerald-300 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-400 animate-pulse" />
              “双面镜” 体验沙箱 —— 惊艳全场的产品交互演示
            </h3>
            <p className="text-sm text-slate-300">
              评委与投资人最震撼的莫过于<strong>“全链路感知”</strong>。左屏展示 <strong>C端用户暖心交互</strong>，右端呈现团队独创
              <strong> B端诊疗高阶驾驶舱</strong>。
            </p>
          </div>
          <div className="flex gap-2">
            {INITIAL_PERSONAS.map(p => (
              <button
                key={p.id}
                onClick={() => setSelectedPersona(p)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedPersona.id === p.id 
                    ? 'bg-emerald-500 text-slate-950 shadow-md font-bold' 
                    : 'bg-emerald-950/40 text-slate-300 border border-emerald-800 hover:bg-emerald-900'
                }`}
              >
                {p.avatar} 模拟：{p.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-emerald-800/40 pt-4 text-xs text-slate-400">
          <div className="flex gap-2 items-start">
            <Info className="w-4 h-4 text-emerald-400 shrink-0" />
            <span><strong>张伟：</strong>呈现高校毕业生面临巨大社会分流时的严重焦虑与病耻感平复。</span>
          </div>
          <div className="flex gap-2 items-start">
            <Info className="w-4 h-4 text-emerald-400 shrink-0" />
            <span><strong>李娜：</strong>展示职场“内卷”时代情感剥离(Burnout)的无感渐进式测评。</span>
          </div>
          <div className="flex gap-2 items-start">
            <Info className="w-4 h-4 text-emerald-400 shrink-0" />
            <span><strong>王刚：</strong>生命警戒高危干预！看 <strong>CrisisSpy</strong> 机制瞬间硬拦截自残逻辑！</span>
          </div>
        </div>
      </div>

      {/* Dual Layout: C-End vs B-End */}
      <div id="dual-simulator-layout" className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        
        {/* ================================== LEFT SIDE: C-END PHONE VIBES ================================== */}
        <div id="c-end-smartphone-demo" className="flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs text-slate-400 font-mono">CLIENT PORTAL (C-END)</span>
            </div>
            <div className="flex items-center gap-2 bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded text-xs border border-emerald-800">
              <User className="w-3 h-3" />
              <span>当前模拟画像：{selectedPersona.name} ({selectedPersona.role})</span>
            </div>
          </div>

          <div className="relative border border-slate-700 bg-slate-950 rounded-[40px] p-4 pt-10 pb-10 shadow-2xl overflow-hidden aspect-[9/16] max-w-[420px] mx-auto w-full flex flex-col justify-between">
            {/* Camera notch */}
            <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-full border border-slate-700 z-20 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-slate-900 border border-slate-700 mr-12"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-blue-900"></div>
            </div>

            {/* In-app navigation */}
            <div className="flex items-center justify-between border-b border-slate-900 pb-3 mb-2 pt-2 text-slate-300">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-emerald-900/50 flex items-center justify-center text-emerald-400 font-bold text-sm">
                  镜
                </div>
                <div>
                  <h4 className="text-xs font-bold font-sans">RUC 心镜 · 情绪陪伴</h4>
                  <p className="text-[10px] text-emerald-400">大模型私密疗愈网 🛡️</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button onClick={() => resetPersona(selectedPersona)} className="p-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 transition-colors">
                  <RefreshCw className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Chat Body & History */}
            <div className="flex-1 overflow-y-auto space-y-3 p-1 pr-2 scrollbar-thin scrollbar-thumb-slate-800">
              <AnimatePresence initial={false}>
                {messages.map(msg => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex flex-col max-w-[85%] ${msg.sender === 'user' ? 'ml-auto items-end' : 'mr-auto items-start'}`}
                  >
                    <div className={`p-2.5 rounded-2xl text-xs leading-relaxed ${
                      msg.sender === 'user' 
                        ? 'bg-emerald-500 text-slate-950 font-medium rounded-tr-none' 
                        : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none'
                    }`}>
                      {msg.text}
                    </div>

                    {/* Metadata below response */}
                    {msg.sender === 'ai' && msg.tags && (
                      <div className="flex gap-1.5 mt-1">
                        {msg.tags.map(t => (
                          <span key={t} className="text-[9px] bg-emerald-950 text-emerald-400 border border-emerald-800/40 px-1 py-0.5 rounded-md font-mono flex items-center gap-0.5">
                            <Shield className="w-2 h-2" />
                            {t}
                          </span>
                        ))}
                        {msg.criIndexAfter !== undefined && (
                          <span className="text-[9px] bg-slate-900 text-slate-400 border border-slate-800 px-1 py-0.5 rounded-md font-mono">
                            计算后 CRI: {msg.criIndexAfter.toFixed(2)}
                          </span>
                        )}
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Interaction Footer */}
            <div className="mt-2 space-y-2">
              {/* Presets and Guidance */}
              {inputIndex < selectedPersona.inputs.length && (
                <div className="flex flex-col bg-slate-900/60 p-2 rounded-xl border border-slate-800">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] text-slate-400 flex items-center gap-1 font-mono">
                      <Cpu className="w-3 h-3 text-emerald-500" />
                      点击步骤模拟输入 ({inputIndex + 1}/{selectedPersona.inputs.length})
                    </span>
                    <span className="text-[9px] text-emerald-500 font-bold bg-emerald-950 px-1 rounded">推荐</span>
                  </div>
                  <button
                    onClick={triggerAutoStep}
                    className="w-full text-left bg-emerald-950/50 hover:bg-emerald-900/50 border border-emerald-500/30 rounded px-2.5 py-1.5 text-xs text-emerald-300 transition-colors flex justify-between items-center cursor-pointer group"
                  >
                    <span className="truncate pr-2 font-sans">{selectedPersona.inputs[inputIndex]}</span>
                    <Play className="w-3 h-3 shrink-0 text-emerald-400 group-hover:scale-125 transition-transform" />
                  </button>
                </div>
              )}

              {/* Text Area Input */}
              <form onSubmit={handleCustomSend} className="flex gap-1.5 items-center">
                <input
                  type="text"
                  value={currentInput}
                  onChange={(e) => setCurrentInput(e.target.value)}
                  placeholder="测试输入自定义心情诉说..."
                  className="flex-1 bg-slate-900 hover:bg-slate-850 focus:bg-slate-900 text-xs border border-slate-800 focus:border-emerald-500/50 rounded-xl px-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none transition-all"
                />
                <button
                  type="submit"
                  className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 p-2 rounded-xl transition-all cursor-pointer hover:shadow-lg hover:shadow-emerald-500/20"
                >
                  <SendHorizontal className="w-4 h-4" />
                </button>
              </form>

              {/* Bottom bar indicator */}
              <div className="w-24 h-1 bg-slate-800 rounded-full mx-auto mt-2"></div>
            </div>
          </div>
        </div>

        {/* ================================== RIGHT SIDE: B-END CLINICAL COMMAND CENTER ================================== */}
        <div id="b-end-clinician-dashboard" className="flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
              <Layers className="w-3.5 h-3.5 text-emerald-500" />
              RUC CLINICAL CONSOLE (B-END P.C.data)
            </span>
            <span className="text-[10px] bg-red-950/20 text-red-400 border border-red-900 px-1.5 py-0.5 rounded font-mono">
              医疗辅助数据驾驶舱 · 脱敏极化
            </span>
          </div>

          <div className="flex-1 border border-emerald-500/20 bg-slate-950 rounded-3xl p-6 shadow-2xl space-y-6">
            
            {/* Clinician Card Header */}
            <div className="flex items-start justify-between border-b border-emerald-950 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 text-slate-950 flex items-center justify-center font-bold text-lg">
                  RUC
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-100 flex items-center gap-2">
                    心镜·MIndMirror 临床评估报告
                    <span className="text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-900 rounded font-mono px-1">
                      ID: RUC-8892 (已脱敏)
                    </span>
                  </h4>
                  <p className="text-xs text-slate-400">
                    患者画象: <strong className="text-slate-300">{selectedPersona.name}</strong> • 年龄: 22岁 • 分流标签: {selectedPersona.role}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-500 font-mono blocks">MDD 重度抑郁评测对照</span>
                <span className="block text-xs font-bold text-emerald-400">状态评估: 实时守护中</span>
              </div>
            </div>

            {/* Stats Checklists (GAD-7 / PHQ-9) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-900/60 border border-slate-800/80 p-3.5 rounded-xl text-center space-y-1">
                <span className="text-xs text-slate-400 font-sans block">GAD-7 焦虑量表分</span>
                <span className={`text-2xl font-black ${selectedPersona.gadScore >= 15 ? 'text-red-400' : 'text-amber-500'}`}>
                  {selectedPersona.gadScore}
                </span>
                <span className="text-[10px] text-slate-500 block">
                  {selectedPersona.gadScore >= 15 ? '极重度焦虑阈值 🚨' : '中度焦虑区间'}
                </span>
              </div>

              <div className="bg-slate-900/60 border border-slate-800/80 p-3.5 rounded-xl text-center space-y-1">
                <span className="text-xs text-slate-400 font-sans block">PHQ-9 抑郁量表分</span>
                <span className={`text-2xl font-black ${selectedPersona.phqScore >= 15 ? 'text-red-400' : 'text-amber-500'}`}>
                  {selectedPersona.phqScore}
                </span>
                <span className="text-[10px] text-slate-500 block">
                  {selectedPersona.phqScore >= 15 ? '极重精神内耗 🚨' : '中度精神倦怠'}
                </span>
              </div>

              {/* Live Real-time CRI Score dial */}
              <div className="bg-slate-900/60 border border-slate-800/80 p-3.5 rounded-xl text-center space-y-1">
                <span className="text-xs text-slate-400 font-sans block">实时情绪综合指数 (CRI)</span>
                <span className={`text-2xl font-mono font-black ${
                  currentCRI >= 0.8 ? 'text-red-400' : currentCRI >= 0.5 ? 'text-amber-500' : 'text-emerald-400'
                }`}>
                  {currentCRI.toFixed(2)}
                </span>
                <span className="text-[10px] text-slate-500 block">
                  CRI &gt; 0.8 触发专家级干预
                </span>
              </div>
            </div>

            {/* CRI Index Dynamic Line Chart (Beautiful Custom SVG Layout) */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-200 font-bold flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-emerald-400" />
                  情绪指数变化脉搏 (MindTech 动态引擎)
                </span>
                <span className="text-[10px] text-slate-500">连续多日动态建模趋势</span>
              </div>

              <div className="h-28 bg-slate-900/30 rounded-xl border border-slate-800 relative p-4 flex flex-col justify-end">
                {/* SVG Line Graph */}
                <svg className="w-full h-full absolute inset-0 text-emerald-500/20 overflow-visible" xmlns="http://www.w3.org/2000/svg">
                  {/* Grid lines */}
                  <line x1="0" y1="20" x2="100%" y2="20" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="0" y1="56" x2="100%" y2="56" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="0" y1="92" x2="100%" y2="92" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />

                  {/* Draw main line based on selectedPersona.historyCRI or dynamic updates */}
                  <path
                    d={`M ${selectedPersona.historyCRI.map((v, i) => {
                      const x = (i / (selectedPersona.historyCRI.length - 1)) * 100;
                      // map value 0 -> 1 to coordinates y 110 -> 10
                      const y = 110 - (v * 90);
                      return `${i === 0 ? 'M' : 'L'} ${x}% ${y}`;
                    }).join(' ')}`}
                    fill="none"
                    stroke={`url(#gradient-${selectedPersona.id})`}
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Area fill */}
                  <path
                    d={`M 0% 110 px ${selectedPersona.historyCRI.map((v, i) => {
                      const x = (i / (selectedPersona.historyCRI.length - 1)) * 100;
                      const y = 110 - (v * 90);
                      return `L ${x}% ${y}`;
                    }).join(' ')} L 100% 110 Z`}
                    fill={`url(#area-gradient-${selectedPersona.id})`}
                    className="opacity-15 animate-pulse"
                  />

                  {/* Nodes */}
                  {selectedPersona.historyCRI.map((v, i) => {
                    const x = (i / (selectedPersona.historyCRI.length - 1)) * 100;
                    const y = 110 - (v * 90);
                    return (
                      <circle
                        key={i}
                        cx={`${x}%`}
                        cy={y}
                        r="4"
                        className={v >= 0.8 ? 'fill-red-500 stroke-slate-950' : 'fill-emerald-400 stroke-slate-950'}
                        strokeWidth="1.5"
                      />
                    );
                  })}

                  {/* Gradient definitions */}
                  <defs>
                    <linearGradient id={`gradient-${selectedPersona.id}`} x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor={selectedPersona.initialCRI >= 0.82 ? '#ef4444' : '#f59e0b'} />
                      <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                    <linearGradient id={`area-gradient-${selectedPersona.id}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* X labels */}
                <div className="flex justify-between w-full text-[9px] text-slate-500 mt-2 select-none z-10 pt-24 font-mono">
                  <span>Day -7 (初始)</span>
                  <span>Day -5</span>
                  <span>Day -3</span>
                  <span>Day -1 (昨日)</span>
                  <span>今日 (当前 CRI: {currentCRI.toFixed(2)})</span>
                </div>
              </div>
            </div>

            {/* Session Summary & NLP Transcript */}
            <div className="bg-slate-900 border border-slate-850 p-4 rounded-xl space-y-3">
              <div className="flex items-center gap-1.5 text-xs text-slate-300 font-bold border-b border-slate-800 pb-2">
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>AI 结构化会话摘要与转录提示</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">{selectedPersona.transcript}</p>
              <div className="bg-emerald-950/20 border-l-2 border-emerald-500 p-2 text-[11px] text-emerald-300 rounded-r">
                <strong>高阶诊疗注记：</strong> {selectedPersona.clinicalNote}
              </div>
            </div>

            {/* CrisisSpy Logs Sandbox */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-200 font-bold flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  CrisisSpy 权限与流控防御钩子监测口 (主动防御)
                </span>
                <span className="text-[10px] text-emerald-500 font-mono">OK / 实时监控</span>
              </div>

              <div className="bg-black border border-slate-800 p-3.5 rounded-xl h-24 overflow-y-auto font-mono text-[10px] text-emerald-400 space-y-1 scrollbar-thin scrollbar-thumb-slate-900 leading-relaxed">
                {spyLogs.map((log, index) => (
                  <div key={index} className="opacity-90">{log}</div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
