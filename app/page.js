const features = [
  {
    title: '推送即部署',
    desc: '代码合并到主分支后自动构建、发布，并保留可回滚的历史版本。',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19V5" />
        <path d="m6 11 6-6 6 6" />
        <path d="M4 21h16" />
      </svg>
    ),
  },
  {
    title: '环境始终一致',
    desc: '开发、预发、生产共用同一套运行时，不再为环境差异反复排查。',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4" width="18" height="7" rx="2" />
        <rect x="3" y="14" width="18" height="6" rx="2" />
        <path d="M7 7.5h.01M7 17h.01" />
      </svg>
    ),
  },
  {
    title: '问题一眼可见',
    desc: '日志、指标与链路追踪开箱可用，故障出现时就能定位到具体请求。',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 17l5-6 4 4 3-4 6 8" />
        <path d="M3 21h18" />
      </svg>
    ),
  },
];

const steps = [
  { num: 'STEP 01', title: '连接仓库', desc: '授权后选择分支，无需改动现有代码结构。' },
  { num: 'STEP 02', title: '配置环境', desc: '填写环境变量与构建命令，配置随项目一起版本化。' },
  { num: 'STEP 03', title: '推送即上线', desc: '每次提交生成独立预览，合并后自动发布到生产。' },
];

export default function Home() {
  return (
    <>
      <header className="nav">
        <div className="wrap nav-inner">
          <a className="brand" href="#">
            <span className="brand-mark" aria-hidden="true" />
            Nimbus
          </a>
          <nav className="nav-links">
            <a href="#features">能力</a>
            <a href="#how">工作方式</a>
            <a href="#start">开始使用</a>
          </nav>
          <a className="btn btn-dark" href="#start">
            免费试用
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="wrap hero-inner">
            <span className="pill">
              <span className="pill-dot" aria-hidden="true" />
              Nimbus 1.0 已发布
            </span>
            <h1>把想法，做成能上线的产品</h1>
            <p className="lede">
              从第一行代码到正式环境，构建、部署与观测都在一处完成。不用维护服务器，也不必为环境差异反复折腾。
            </p>
            <div className="hero-actions">
              <a className="btn btn-dark" href="#start">
                免费开始
              </a>
              <a className="btn btn-ghost" href="#features">
                看看能做什么
              </a>
            </div>

            <div className="stats">
              <div className="stat">
                <b>5 分钟</b>
                <span>从仓库到首个线上版本</span>
              </div>
              <div className="stat">
                <b>99.9%</b>
                <span>近 12 个月构建成功率</span>
              </div>
              <div className="stat">
                <b>20+</b>
                <span>开箱支持的框架与运行时</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="features">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">核心能力</div>
              <h2>少一些流程，多一些交付</h2>
              <p>把重复的工程动作交给平台，团队专注在真正影响用户的事情上。</p>
            </div>
            <div className="grid-3">
              {features.map((item) => (
                <article className="card" key={item.title}>
                  <div className="card-icon" aria-hidden="true">
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft" id="how">
          <div className="wrap">
            <div className="section-head">
              <div className="eyebrow">使用方式</div>
              <h2>三步完成第一次发布</h2>
              <p>不需要学习新的配置文件语法，也不用改动现有的构建脚本。</p>
            </div>
            <div className="steps">
              {steps.map((step) => (
                <div className="step" key={step.num}>
                  <div className="step-num">{step.num}</div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="wrap">
          <section className="cta" id="start">
            <h2>准备好把项目上线了吗？</h2>
            <p>创建一个项目，五分钟内看到它跑在公网上。</p>
            <a className="btn" href="#">
              创建第一个项目
            </a>
          </section>
        </div>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <div>© 2026 Nimbus. 保留所有权利。</div>
          <div className="footer-links">
            <a href="#">文档</a>
            <a href="#">服务状态</a>
            <a href="#">隐私政策</a>
          </div>
        </div>
      </footer>
    </>
  );
}
