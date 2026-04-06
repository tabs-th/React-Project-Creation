export default function Home() {
  return (
    <main className="resume-container">
      
      <header className="main-header">
        <div className="header-content">
          <div>
            <h1 className="text-5xl font-black tracking-tighter">Tabitha Hung</h1>
            <p className="job-subtitle uppercase tracking-widest mt-2">
              Supply Chain & Business Analytics
            </p>
          </div>
          
          <div className="contact-box">
            <p className="flex justify-between gap-4"><span>Email:</span> <a href="mailto:hungt@usf.edu" className="text-blue-400 hover:underline">hungt@usf.edu</a></p>
            <p className="flex justify-between gap-4"><span>LinkedIn:</span> <a href="https://www.linkedin.com/in/tabitha-hung/" className="text-blue-400 hover:underline italic">/tabitha-hung</a></p>
          </div>
        </div>
      </header>

      <div className="content-grid">
        {/* Sidebar */}
        <aside className="space-y-10">
          <section>
            <h2 className="section-title">Education</h2>
            <div className="border-l-2 border-blue-200 pl-4">
              <h3 className="font-bold">University of South Florida</h3>
              <p className="text-sm">Dual Degree, B.S. Supply Chain Management, Business Analytics</p>
              <p className="text-xs text-slate-400 italic">Expected May 2026</p>
            </div>
          </section>

          <section>
            <h2 className="section-title">Technical Skills</h2>
            <div className="grid gap-2">
              <span className="skill-badge">SAP S/4HANA Certified</span>
              <span className="skill-badge">PowerBI & SQL</span>
              <span className="skill-badge">Tableau & Advanced Excel</span>
            </div>
          </section>
        </aside>

        {/* Main Content */}
        <div className="md:col-span-2">
          <section>
            <h2 className="section-title">Professional Experience</h2>
            
            <div className="experience-item">
              <div className="company-meta">
                <h3 className="job-title">Crown Holdings, Inc.</h3>
                <span className="text-xs font-mono text-slate-400">May 2025 – Present</span>
              </div>
              <p className="job-subtitle">Sourcing Intern</p>
              <ul className="bullet-list">
                <li>Implemented 75+ IOT devices across 13 facilities to track $20M+ in assets.</li>
                <li>Spearheaded RFQ process for 2 projects with 10+ vendors.</li>
                <li>Conducted variance analysis on 270+ days of historical sales data.</li>
              </ul>
            </div>

            <div className="experience-item">
              <div className="company-meta">
                <h3 className="job-title">WebstaurantStore</h3>
                <span className="text-xs font-mono text-slate-400">May 2024 – Aug 2024</span>
              </div>
              <p className="job-subtitle">Outbound Logistics Intern</p>
              <ul className="bullet-list">
                <li>Recovered $2M+ in revenue by correcting parcel fee discrepancies.</li>
                <li>Utilized PowerBI to engineer new interdepartmental vendor onboarding protocols.</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}