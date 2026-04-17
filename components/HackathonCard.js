export default function HackathonUpdates({ hackathons }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      {hackathons.map((hack) => (
        <div key={hack.id} className="bg-white border border-slate-200 p-5 rounded-3xl hover:shadow-lg transition-all">
          <div className="flex justify-between items-start mb-4">
            <span className="text-[10px] font-bold bg-blue-100 text-blue-600 px-2 py-1 rounded-full uppercase">
              {hack.platform}
            </span>
            <span className="text-slate-400 text-xs font-medium">{hack.type}</span>
          </div>
          <h4 className="font-bold text-slate-800 text-lg mb-1">{hack.title}</h4>
          <p className="text-slate-500 text-sm mb-4">{hack.date}</p>
          <div className="flex gap-2 mb-6">
            {hack.tags.map(tag => (
              <span key={tag} className="text-[10px] border border-slate-100 px-2 py-1 rounded-md text-slate-500">
                #{tag}
              </span>
            ))}
          </div>
          <a 
            href={hack.link} 
            target="_blank" 
            className="block text-center py-2 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-blue-600 transition-all"
          >
            Register Now
          </a>
        </div>
      ))}
    </div>
  );
}