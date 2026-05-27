import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Building2, School, Landmark, ShieldCheck, HelpCircle, 
  ArrowRightLeft, Sparkles, TrendingUp, Users, Heart
} from 'lucide-react';

export default function BusinessModel() {
  // Config interactive multiplier sliders
  const [numStudents, setNumStudents] = useState(15000); // 15K default (roughly student size of a standard college)
  const [efficiencyIncrease, setEfficiencyIncrease] = useState(55); // 55% average saved counselor time from P.C.data
  const [anxietyRate, setAnxietyRate] = useState(45); // 45% default检出率 from our RUC polls

  // Dynamic formula calculations
  const totalAnxiousCovered = Math.floor(numStudents * (anxietyRate / 100));
  
  // Traditional counselors needed vs with MindMirror
  // Assumes a traditional counselor can track 150 student files/year
  const normalCounselorsNeeded = Math.ceil(totalAnxiousCovered / 120);
  // With 55% efficiency increase, they can manage 120 * (1 + 0.55) = 186 files
  const efficientCounselorsNeeded = Math.ceil(totalAnxiousCovered / (120 * (1 + efficiencyIncrease / 100)));
  const savedStaffCount = Math.max(0, normalCounselorsNeeded - efficientCounselorsNeeded);

  // Saved clinical hours per month (P.C.data auto-generated report saves 4 hours/patient profile)
  const savedReportHours = Math.floor(numStudents * 0.12 * 4 * (efficiencyIncrease / 100)); // assumes 12% of student base visits/month

  // Prevented crisis cases per year (national stats show 0.5% of high risk trigger suicide alarm, CrisisSpy is 99% accurate)
  const highRiskCases = Math.floor(totalAnxiousCovered * 0.04); // 4% of anxious become extreme crisis
  const savedCrises = Math.floor(highRiskCases * 0.99);

  return (
    <div id="business-and-impact" className="space-y-6">
      
      {/* Intro descriptive text */}
      <div id="biz-intro" className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 text-xs text-slate-300">
        <p className="leading-relaxed">
          💡 <strong>商业可行性与社会效益测算：</strong> 评委非常关注高校和企业的真实预算逻辑。
          我们提供极致精简的 <strong>B2B2C / SaaS 订阅闭环</strong>，
          并在此处配备了 <strong>“实利与民恩多向核算器”</strong>。在下方输入您学校或企业的真实人数，可一键跑出心镜能为您节省的诊疗工时和挽回的心理危机极值。
        </p>
      </div>

      {/* 3 Columns SaaS Products Overview */}
      <div id="saas-tiers-grid" className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Tier 1: School */}
        <div className="bg-slate-950 border border-emerald-500/10 rounded-2xl p-5.5 space-y-4 relative flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="p-2 rounded-xl bg-emerald-950 text-emerald-400">
                <School className="w-5 h-5" />
              </span>
              <span className="text-[10px] bg-emerald-950/30 text-emerald-400 border border-emerald-900 px-2 py-0.5 rounded-full font-bold">
                高校普惠专属版
              </span>
            </div>
            <h4 className="text-sm font-black text-slate-100">学校“心理免疫力”标准化 SaaS</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              解决辅导员日常“心理风险不知晓
              、病耻感阻断沟通、危机发现不及时”的痛点。
            </p>
            <ul className="text-[11px] text-slate-400 space-y-2 pt-2 border-t border-slate-900">
              <li className="flex gap-2">✔ 心镜 C端手机专属轻量皮肤集成</li>
              <li className="flex gap-2">✔ B端高校心理教师数据驾驶舱极度优化</li>
              <li className="flex gap-2">✔ 融入本地“辅导员联动-危机绿通专线”</li>
            </ul>
          </div>
          <div className="pt-4 border-t border-slate-900 text-right">
            <span className="text-xs text-slate-500">商业定价：</span>
            <span className="text-sm font-bold text-emerald-400">按年学生规模核算订制</span>
          </div>
        </div>

        {/* Tier 2: Enterprise */}
        <div className="bg-slate-950 border border-emerald-500/20 rounded-2xl p-5.5 space-y-4 relative flex flex-col justify-between shadow-xl shadow-emerald-500/5">
          <div className="absolute top-0 right-5 transform -translate-y-1/2 bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded-full shadow">
            热门推荐 (High Return)
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="p-2 rounded-xl bg-emerald-950 text-emerald-400">
                <Building2 className="w-5 h-5" />
              </span>
              <span className="text-[10px] bg-emerald-950/30 text-emerald-400 border border-emerald-900 px-2 py-0.5 rounded-full font-bold">
                高压密集型企业版
              </span>
            </div>
            <h4 className="text-sm font-black text-slate-100">企业级“常态情绪管理”系统</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              针对大厂、大型银行、密集客服等高压力人群，主动解构工作倦怠，提升团队向心力。
            </p>
            <ul className="text-[11px] text-slate-400 space-y-2 pt-2 border-t border-slate-900">
              <li className="flex gap-2">✔ 情绪小游戏与正念日课无感嵌入办公客户端</li>
              <li className="flex gap-2">✔ 员工匿名压力全貌综合汇总指标 (EAP护航)</li>
              <li className="flex gap-2">✔ CrisisSpy 私密化内部保障部署</li>
            </ul>
          </div>
          <div className="pt-4 border-t border-slate-900 text-right">
            <span className="text-xs text-slate-500">商业定价：</span>
            <span className="text-sm font-bold text-emerald-400">按工位/人头 EAP 专业订阅</span>
          </div>
        </div>

        {/* Tier 3: Social/Gov */}
        <div className="bg-slate-950 border border-emerald-500/10 rounded-2xl p-5.5 space-y-4 relative flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="p-2 rounded-xl bg-emerald-950 text-emerald-400">
                <Landmark className="w-5 h-5" />
              </span>
              <span className="text-[10px] bg-emerald-950/30 text-emerald-400 border border-emerald-900 px-2 py-0.5 rounded-full font-bold">
                政务学术共建端
              </span>
            </div>
            <h4 className="text-sm font-black text-slate-100">社会治理与数智治理融合引擎</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              联合地方组织或卫健部门，多源数据在确保合规无偏敏下
              ，实现社会心理防线精准前移。
            </p>
            <ul className="text-[11px] text-slate-400 space-y-2 pt-2 border-t border-slate-900">
              <li className="flex gap-2">✔ 大区域无偏合规脱敏群体波动热图支撑</li>
              <li className="flex gap-2">✔ 社区家庭纠纷/青少年创伤危机流向分拨</li>
              <li className="flex gap-2">✔ 国家级学术大模型心理课题支撑与数据共建</li>
            </ul>
          </div>
          <div className="pt-4 border-t border-slate-900 text-right">
            <span className="text-xs text-slate-500">商业定价：</span>
            <span className="text-sm font-bold text-emerald-400">项目式科研与系统运维常态托运</span>
          </div>
        </div>

      </div>

      {/* Interactive Value & Impact calculator */}
      <div id="interactive-impact-calculator" className="border border-emerald-500/10 bg-slate-950 rounded-3xl p-6 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Sliders Control Panel (Takes 6 cols) */}
        <div className="lg:col-span-6 space-y-5.5">
          <h4 className="text-sm font-bold text-slate-200 flex items-center gap-2 border-b border-slate-900 pb-3">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            演示调优：心镜 0-1 核心效能测算滑块
          </h4>

          {/* Slider 1: User size */}
          <div className="space-y-1">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-400">组织覆盖人员规模 (Students/Employees)</span>
              <strong className="text-emerald-400 font-mono">{numStudents.toLocaleString()} 人</strong>
            </div>
            <input
              type="range"
              min="2000"
              max="50000"
              step="1000"
              value={numStudents}
              onChange={(e) => setNumStudents(parseInt(e.target.value))}
              className="w-full accent-emerald-500 bg-slate-900 h-1 rounded-full border-none cursor-pointer"
            />
          </div>

          {/* Slider 2: Efficiency level */}
          <div className="space-y-1">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-400">P.C.data 临床辅助报告提功率</span>
              <strong className="text-emerald-400 font-mono">{efficiencyIncrease}% 提速</strong>
            </div>
            <input
              type="range"
              min="30"
              max="90"
              step="5"
              value={efficiencyIncrease}
              onChange={(e) => setEfficiencyIncrease(parseInt(e.target.value))}
              className="w-full accent-emerald-500 bg-slate-900 h-1 rounded-full border-none cursor-pointer"
            />
          </div>

          {/* Slider 3:检出率 */}
          <div className="space-y-1">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-400">日常中/高情绪波动覆盖率 (Anxiety detect rate)</span>
              <strong className="text-emerald-400 font-mono">{anxietyRate}% 检出</strong>
            </div>
            <input
              type="range"
              min="20"
              max="70"
              step="5"
              value={anxietyRate}
              onChange={(e) => setAnxietyRate(parseInt(e.target.value))}
              className="w-full accent-emerald-500 bg-slate-900 h-1 rounded-full border-none cursor-pointer"
            />
          </div>
        </div>

        {/* Render Results Display (Takes 6 cols) */}
        <div className="lg:col-span-6 bg-slate-900/45 border border-slate-900 p-6 rounded-2xl grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-900 text-center space-y-1">
            <span className="text-[10px] text-slate-500 block">有情绪压力待陪伴人数</span>
            <span className="text-xl font-black text-slate-200">{totalAnxiousCovered.toLocaleString()} 人</span>
            <span className="text-[9px] text-emerald-400 block bg-emerald-950/50 py-0.5 rounded">C端对话可全免病耻感</span>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-900 text-center space-y-1">
            <span className="text-[10px] text-slate-500 block">每月节省诊断/撰写文案时间</span>
            <span className="text-xl font-black text-emerald-400">~{savedReportHours.toLocaleString()} 小时</span>
            <span className="text-[9px] text-slate-500 block">将时间归还给真正的物理临床</span>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-900 text-center space-y-1">
            <span className="text-[10px] text-slate-500 block">减负增效可精简/富集编制</span>
            <span className="text-xl font-black text-amber-500">{savedStaffCount} 位咨询师</span>
            <span className="text-[9px] text-slate-500 block">极度提升执业医生响应频幅</span>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-red-500/10 text-center space-y-1 relative overflow-hidden">
            <span className="text-[10px] text-red-400 font-bold block flex items-center justify-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-red-400 animate-ping"></span>
              CrisisSpy 极度守护生命
            </span>
            <span className="text-2xl font-black text-red-500">{savedCrises} 起 / 年</span>
            <span className="text-[9px] text-slate-500 block">拦截自残意图，拯救垂危灵魂</span>
          </div>

        </div>

      </div>
    </div>
  );
}
