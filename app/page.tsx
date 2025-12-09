export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-950">
      <div className="max-w-2xl w-full">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <img 
            src="/avatar.png" 
            alt="pfp" 
            className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-blue-500 shadow-xl shadow-blue-500/50 hover:scale-110 hover:rotate-6 transition-transform duration-300"
          />

          <h1 className="text-5xl font-bold mb-4 bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-fade-in-up">
            Hi! I'm byteptr
          </h1>

          <p className="text-xl text-gray-300 mb-8 animate-fade-in-up animation-delay-200">
            I'm a software developer from Poland.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-4 animate-fade-in-up animation-delay-300">
            <a 
              href="https://github.com/0xbyteptr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-gray-700/50 hover:scale-110 transition-all duration-200 shadow-lg hover:shadow-blue-500/50 border border-gray-700"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>

            <a 
              href="https://twitter.com/0xbyteptr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-gray-700/50 hover:scale-110 transition-all duration-200 shadow-lg hover:shadow-blue-500/50 border border-gray-700"
              aria-label="Twitter"
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            <a 
              href="https://discord.com/users/1447884887485972532" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-gray-700/50 hover:scale-110 transition-all duration-200 shadow-lg hover:shadow-blue-500/50 border border-gray-700"
              aria-label="Discord"
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Interests Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 shadow-xl hover:shadow-blue-500/20 transition-all duration-300 animate-fade-in-up animation-delay-400">
            <h2 className="text-2xl font-semibold mb-4 text-white flex items-center gap-2">
              <span className="text-2xl">💻</span>
              What I like to do
            </h2>
            <ul className="text-gray-300 space-y-3">
              <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700/50 hover:text-blue-400 transition-all duration-200">
                <span className="text-blue-400">▸</span>
                Programming
              </li>
              <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700/50 hover:text-blue-400 transition-all duration-200">
                <span className="text-blue-400">▸</span>
                Gaming
              </li>
              <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700/50 hover:text-blue-400 transition-all duration-200">
                <span className="text-blue-400">▸</span>
                Shooting guns
              </li>
            </ul>
          </div>

          {/* Contact Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 shadow-xl hover:shadow-blue-500/20 transition-all duration-300 animate-fade-in-up animation-delay-500">
            <h2 className="text-2xl font-semibold mb-4 text-white flex items-center gap-2">
              <span className="text-2xl">📧</span>
              Get in touch
            </h2>
            <div className="space-y-4">
              <a 
                href="mailto:me@byteptr.xyz"
                className="block p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-all duration-200 group"
              >
                <p className="text-sm text-gray-400 mb-1">Email</p>
                <p className="text-blue-400 group-hover:text-purple-400 transition-colors duration-200 font-medium">
                  me@byteptr.xyz
                </p>
              </a>
            </div>
          </div>
        </div>

        {/* Discord Card */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 shadow-xl hover:shadow-blue-500/20 transition-all duration-300 animate-fade-in-up animation-delay-600">
          <a href="https://discord.com/users/1447884887485972532" target="_blank" className="block">
            <img 
              width="100%" 
              className="rounded-lg hover:scale-[1.02] transition-transform duration-300" 
              src="https://disi-api.bennynguyen.dev/smallcard/1447884887485972532?&bg1=101829&bg2=162647&activity=true&mood=true&angle=76&discordLabel=true&displayUsername=true"
              alt="Discord Profile"
            />
          </a>
        </div>
      </div>
    </main>
  );
}
