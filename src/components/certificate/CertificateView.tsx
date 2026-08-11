import React from 'react';
import { Award, CheckCircle2, ShieldCheck, Download, Share2, QrCode, Code2 } from 'lucide-react';
import { useCourse } from '../../context/CourseContext';
import { mockCertificates } from '../../data/mockData';

export const CertificateView: React.FC = () => {
  const { selectedCertificateId } = useCourse();
  const cert = mockCertificates.find(c => c.id === selectedCertificateId) || mockCertificates[0];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Top Controls */}
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
        <div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">Certificate Verification Page</h1>
          <p className="text-xs text-slate-500 font-mono">Verification ID: {cert.certificateId}</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handlePrint}
            className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition flex items-center gap-1.5"
          >
            <Download className="w-4 h-4" />
            <span>Print / Save PDF</span>
          </button>
        </div>
      </div>

      {/* Certificate Frame */}
      <div className="p-8 lg:p-12 rounded-3xl bg-white dark:bg-slate-950 text-slate-900 dark:text-white border-8 border-slate-200 dark:border-slate-800 shadow-2xl relative space-y-8 font-sans text-center">
        
        {/* Certificate Header Badge */}
        <div className="flex items-center justify-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-0.5 flex items-center justify-center">
            <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
              <Code2 className="w-6 h-6 text-cyan-400" />
            </div>
          </div>
          <div className="text-left">
            <h2 className="font-black text-xl tracking-tight font-mono text-slate-900 dark:text-white">CODEVERSE ACADEMY</h2>
            <p className="text-[10px] text-cyan-600 dark:text-cyan-400 font-mono tracking-widest uppercase">Official Certification of Achievement</p>
          </div>
        </div>

        <div className="space-y-3 py-4">
          <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest font-mono">This Is To Certify That</p>
          <h2 className="text-3xl sm:text-4xl font-black text-cyan-600 dark:text-cyan-400 underline decoration-cyan-500/30 decoration-wavy">
            {cert.studentName}
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto pt-2">
            has successfully completed all requirements, practical projects, and assessments for the course:
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 max-w-xl mx-auto space-y-1">
          <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">{cert.courseTitle}</h3>
          <p className="text-xs text-slate-500 font-mono">Grade: {cert.grade} • {cert.hours} Hours Content</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 font-mono items-center">
          <div>
            <p className="font-bold text-slate-900 dark:text-white">{cert.issueDate}</p>
            <p className="text-[10px]">Date Issued</p>
          </div>
          <div>
            <p className="font-bold text-slate-900 dark:text-white">{cert.instructorName}</p>
            <p className="text-[10px]">Course Instructor</p>
          </div>
          <div className="col-span-2 md:col-span-1 flex flex-col items-center">
            <QrCode className="w-12 h-12 text-slate-800 dark:text-slate-200" />
            <p className="text-[10px] mt-1">Scan To Verify ID</p>
          </div>
        </div>

      </div>

    </div>
  );
};
