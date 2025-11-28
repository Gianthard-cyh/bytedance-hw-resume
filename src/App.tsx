import './App.css'

import { 
  Printer
} from 'lucide-react';

export default function App() {
  const handlePrint = () => {
    window.print();
  };

  const data = {
    basics: {
      name: "陈昱衡",
      phone: "159-1169-5662",
      email: "chenyuheng@seu.edu.cn",
      location: "东南大学",
      github: "github.com/Gianthard-cyh",
      githubUrl: "https://github.com/Gianthard-cyh",
    },
    education: {
      school: "东南大学",
      degree: "软件工程专业本科",
      date: "2023.09 - 至今",
      stats: [
        { label: "学年 GPA", value: "4.0664 / 4.8" },
        { label: "平均 GPA", value: "3.8695 / 4.8" },
        { label: "专业排名", value: "17 / 124 (Top 13.7%)" }
      ],
      courses: "概率论(99)、Java(99)、C++(96/97)、计组(92)、高级数据结构(93)、数据结构(91)"
    },
    research: [
      {
        title: "Reasoning-Preserved Safety Alignment for Large Reasoning Models",
        venue: "ICLR 2026 (在投)",
        role: "独立第一作者",
        points: [
          "独立完成从研究构思、算法设计、实验验证到论文撰写的全流程工作。",
          "提出基于 Fisher 信息矩阵的参数重要性评估方法，设计参数冻结式安全微调框架。",
          "实验表明相比全参数微调，所提方法将安全税降低最多 90.96%，显著缓解推理性能退化。"
        ]
      }
    ],
    openSource: [
      {
        project: "Vue3",
        stars: "49k Stars",
        contributions: [
          "为 Vue3 Vapor 编译器添加静态导入支持 (#13630 @vuejs/core)",
          "解决 Pinia 全局注入行为不一致问题并促成文档修正 (#11602 @vuejs/core)",
          "为 Playground 添加 Custom Element 支持 (#354 @vuejs/repl)"
        ]
      },
      {
        project: "VueUse",
        stars: "20.7k Stars",
        contributions: [
          "修复 until API 的内存泄漏问题 (#4039 @vueuse/vueuse)"
        ]
      }
    ],
    projects: [
      {
        name: "“一生一芯”计划",
        role: "学员",
        date: "2023.10 - 至今",
        points: [
          "基于框架代码实现了支持 RISCV-32E 指令集的模拟器。",
          "独立设计并实现支持 RISCV-32E 指令集的多周期处理器。",
          "成功向自研处理器上移植 RT-Thread 实时操作系统。"
        ]
      },
      {
        name: "端侧 LORA 大模型推理优化",
        role: "负责人 | 校级重点大创 (优秀)",
        date: "2024.11 - 2025.9",
        points: [
          "调研 PowerInfer, SGLang 等框架，分析异构调度策略与 KV 缓存管理机制。",
          "探索 KV Cache 差分压缩、面向 LORA 的 RadixTree 等方案。",
          "深入阅读并修改 mllm 源码，添加 LORA 支持。"
        ]
      },
      {
        name: "VR 赋能：数字化野生动物保护",
        role: "主程序 (国家级优秀)",
        date: "2023.11 - 2024.5",
        points: [
          "基于 Unreal Engine 5 开发，负责核心游戏交互逻辑。",
          "实现 VR 环境中游泳动作的物理模拟与性能优化。"
        ]
      }
    ],
    experience: [
      {
        company: "华为南京研究所 | 园区数字平台产品部",
        role: "实习生",
        date: "2025.7 - 2025.8",
        desc: "参与企业级数字园区平台开发与维护"
      }
    ],
    leadership: [
      {
        org: "东南大学人工智能协会",
        role: "会长",
        date: "2025.9 - 至今",
        desc: "主持社团“计算机通识扫盲”主题课程，组织技术分享会。"
      },
      {
        org: "电子学院科协技术部",
        role: "干事",
        date: "2023.9 - 2024.6",
        desc: "主讲焊接、嵌入式、PCB设计培训；负责网站维护。"
      }
    ],
    skills: {
      languages: ["Python", "C++", "Java", "Go", "TypeScript", "Verilog"],
      frameworks: ["PyTorch", "Vue3", "React", "Transformers"],
      tools: ["Git", "Linux", "Docker", "UE5", "WandB"]
    }
  };

  return (
    <div className="min-h-screen bg-[#e5e5e5] py-8 px-4 sm:px-6 md:px-8 font-serif text-[#1a1a1a] print:bg-white print:p-0 print:m-0">
      
      {/* 打印按钮 */}
      <button 
        onClick={handlePrint}
        className="fixed bottom-8 right-8 bg-[#2c2c2c] text-[#fdfbf7] p-4 rounded-none shadow-xl hover:bg-black transition-all print:hidden z-50 flex items-center gap-2 group border border-gray-400"
        title="打印"
      >
        <Printer size={20} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap font-sans text-sm">
          Print Resume
        </span>
      </button>

      {/* 纸张容器 */}
      <div className="max-w-[210mm] mx-auto bg-[#fdfbf7] shadow-2xl print:shadow-none print:w-full print:max-w-none min-h-[297mm] relative flex flex-col">
        
        {/* 顶部装饰线 */}
        <div className="h-2 bg-[#2c2c2c] w-full print:h-1"></div>

        <div className="p-10 print:p-8 flex-grow">
          
          {/* Masthead (报头) */}
          <header className="border-b-4 border-double border-[#2c2c2c] pb-6 mb-8 text-center">
            <h1 className="text-5xl font-bold tracking-tight mb-3 text-black">{data.basics.name}</h1>
            <p className="text-lg text-gray-700 mb-4 font-sans">{data.basics.title}</p>
            
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm font-medium text-gray-800 font-sans tracking-wider">
              <span className="flex items-center gap-1">
                {data.basics.phone}
              </span>
              <span className="text-gray-400">•</span>
              <a href={`mailto:${data.basics.email}`} className="hover:underline hover:text-black">
                {data.basics.email}
              </a>
              <span className="text-gray-400">•</span>
              <a href={data.basics.githubUrl} target="_blank" rel="noreferrer" className="hover:underline hover:text-black">
                {data.basics.github}
              </a>
            </div>
          </header>

          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-8 flex flex-col gap-8 border-r-0 md:border-r border-dashed border-gray-300 md:pr-8">
              <section>
                <SectionTitle title="科研成果" sub="Research Experience" />
                {data.research.map((item, idx) => (
                  <div key={idx} className="mb-4 group">
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="text-lg font-bold leading-tight group-hover:underline decoration-1 underline-offset-4">
                        {item.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                       <span className="inline-block bg-[#1a1a1a] text-white text-xs px-2 py-0.5 font-sans font-bold uppercase tracking-wide">
                        {item.venue}
                      </span>
                      <span className="text-sm italic font-medium text-gray-700">{item.role}</span>
                    </div>
                    <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-gray-800 leading-relaxed marker:text-gray-400">
                      {item.points.map((pt, i) => (
                        <li key={i}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>
              <section>
                <SectionTitle title="开源贡献" sub="Open Source" />
                <div className="space-y-4">
                  {data.openSource.map((item, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-baseline border-b border-gray-200 pb-1 mb-2">
                        <span className="font-bold text-base">{item.project}</span>
                        <span className="text-xs font-sans text-gray-500">{item.stars}</span>
                      </div>
                      <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-gray-800 leading-relaxed marker:text-gray-400">
                        {item.contributions.map((pt, i) => (
                          <li key={i}>{pt}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
              <section>
                <SectionTitle title="项目经历" sub="Projects" />
                <div className="space-y-5">
                  {data.projects.map((proj, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-baseline mb-1">
                        <h3 className="font-bold text-base">{proj.name}</h3>
                        <span className="text-sm font-sans text-gray-500 tabular-nums">{proj.date}</span>
                      </div>
                      <div className="text-sm text-gray-600 mb-2 font-sans">
                        {proj.role}
                      </div>
                      <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-gray-800 leading-relaxed marker:text-gray-400">
                        {proj.points.map((pt, i) => (
                          <li key={i}>{pt}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
              <section>
                <SectionTitle title="实习经历" sub="Professional Experience" />
                {data.experience.map((exp, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="font-bold text-base">{exp.company}</h3>
                      <span className="text-sm font-sans text-gray-500 tabular-nums">{exp.date}</span>
                    </div>
                    <div className="text-sm italic text-gray-600 mb-1 font-sans">{exp.role}</div>
                    {exp.desc && <p className="text-sm text-gray-800">{exp.desc}</p>}
                  </div>
                ))}
              </section>
            </div>
            <div className="col-span-12 md:col-span-4 flex flex-col gap-8">
              
              {/* 教育背景 */}
              <section className="md:mx-0 md:p-0">
                <SectionTitle title="教育背景" sub="Education" />
                <div className="mb-4">
                  <div className="font-bold text-lg">{data.education.school}</div>
                  <div className="text-sm italic mb-2">{data.education.degree}</div>
                  <div className="font-sans text-xs text-gray-600 mb-3 tabular-nums">{data.education.date}</div>
                  
                  <div className="space-y-1.5 font-sans text-sm border-t border-b border-gray-300 py-3 my-3">
                    {data.education.stats.map((stat, i) => (
                      <div key={i} className="flex justify-between">
                        <span className="text-gray-600">{stat.label}</span>
                        <span className="font-semibold">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-xs leading-relaxed text-gray-600">
                    <span className="font-bold text-black">Core Courses: </span>
                    {data.education.courses}
                  </div>
                </div>
              </section>

              {/* 技术栈 */}
              <section>
                <SectionTitle title="技术能力" sub="Technical Skills" />
                <div className="space-y-4">
                   <div>
                     <h4 className="font-bold text-sm mb-1 uppercase tracking-wide text-gray-500 font-sans">Languages</h4>
                     <p className="text-sm leading-relaxed border-l-2 border-black pl-3">
                       {data.skills.languages.join(", ")}
                     </p>
                   </div>
                   <div>
                     <h4 className="font-bold text-sm mb-1 uppercase tracking-wide text-gray-500 font-sans">Frameworks</h4>
                     <p className="text-sm leading-relaxed border-l-2 border-black pl-3">
                       {data.skills.frameworks.join(", ")}
                     </p>
                   </div>
                   <div>
                     <h4 className="font-bold text-sm mb-1 uppercase tracking-wide text-gray-500 font-sans">Tools</h4>
                     <p className="text-sm leading-relaxed border-l-2 border-black pl-3">
                       {data.skills.tools.join(", ")}
                     </p>
                   </div>
                </div>
              </section>

               {/* 学生工作 */}
              <section>
                <SectionTitle title="社团/学生工作" sub="Leadership" />
                <div className="space-y-4">
                  {data.leadership.map((item, idx) => (
                    <div key={idx} className="relative">
                      <div className="font-bold text-sm">{item.org}</div>
                      <div className="flex justify-between text-xs font-sans text-gray-500 mb-1">
                        <span className="italic">{item.role}</span>
                        <span className="tabular-nums">{item.date}</span>
                      </div>
                      <p className="text-xs text-gray-700 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

            </div>
          </div>
        </div>
        
        {/* 底部装饰 */}
        <div className="h-4 border-t-2 border-[#2c2c2c] bg-[#f2f0eb] mt-auto flex items-center justify-center text-[10px] uppercase tracking-[0.2em] text-gray-500 font-sans">
        </div>
      </div>
    </div>
  );
}

// 辅助组件：经典标题样式
const SectionTitle = ({ title, sub }: { title: string; sub?: string }) => (
  <div className="mb-4 pb-2 border-b-2 border-black flex items-baseline justify-between">
    <h2 className="text-lg font-bold uppercase tracking-widest text-black font-sans">{title}</h2>
    {sub && (
      <span className="text-xs font-serif italic text-gray-500 hidden sm:inline-block">{sub}</span>
    )}
  </div>
);
