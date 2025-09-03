import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const connectWallet = () => {
    setIsWalletConnected(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-800/50 backdrop-blur-md bg-black/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-neon-blue to-neon-pink rounded-lg flex items-center justify-center">
                <Icon name="Zap" className="text-white" size={24} />
              </div>
              <h1 className="text-2xl font-bold text-white">Awesol</h1>
              <Badge variant="secondary" className="text-neon-blue border-neon-blue">
                Token Creator & Booster
              </Badge>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-slate-300 hover:text-neon-blue transition-colors">Home</a>
              <a href="#create" className="text-slate-300 hover:text-neon-blue transition-colors">Token Creation</a>
              <a href="#boost" className="text-slate-300 hover:text-neon-blue transition-colors">Boost & Promotion</a>
              <a href="#docs" className="text-slate-300 hover:text-neon-blue transition-colors">API Docs</a>
            </nav>

            <Button 
              onClick={connectWallet}
              className={`${isWalletConnected 
                ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700' 
                : 'bg-gradient-to-r from-neon-blue to-neon-pink hover:from-blue-600 hover:to-pink-600'
              } animate-glow`}
            >
              <Icon name="Wallet" className="mr-2" size={16} />
              {isWalletConnected ? 'Connected' : 'Connect Wallet'}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-neon-blue via-neon-pink to-neon-purple bg-clip-text text-transparent mb-6">
            Create & Boost
            <br />
            Your Tokens
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Advanced platform for token creation, smart contract auditing, and promotional boosting. 
            Build the future of DeFi with enterprise-grade security.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-neon-blue to-neon-purple hover:opacity-90 animate-glow">
              <Icon name="Rocket" className="mr-2" size={20} />
              Start Creating
            </Button>
            <Button size="lg" variant="outline" className="border-neon-pink text-neon-pink hover:bg-neon-pink/10">
              <Icon name="Play" className="mr-2" size={20} />
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: 'Tokens Created', value: '12.5K+', icon: 'Coins' },
            { label: 'Smart Contracts Audited', value: '8.2K+', icon: 'Shield' },
            { label: 'Total Value Locked', value: '$45M+', icon: 'TrendingUp' },
            { label: 'Success Rate', value: '99.9%', icon: 'Target' }
          ].map((stat, index) => (
            <Card key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 animate-float" style={{animationDelay: `${index * 0.1}s`}}>
              <CardContent className="p-6 text-center">
                <Icon name={stat.icon as any} className="mx-auto mb-2 text-neon-blue" size={32} />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">Control Panel</h3>
          <p className="text-slate-300">Advanced tools for token management and analytics</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <img 
            src="/img/b22a69b7-b045-4921-b5ab-57348dbae500.jpg" 
            alt="Awesol Dashboard" 
            className="w-full rounded-2xl border border-slate-700 shadow-2xl shadow-neon-blue/20"
          />
        </div>
      </section>

      {/* Features Tabs */}
      <section id="create" className="container mx-auto px-6 py-16">
        <Tabs defaultValue="creation" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 bg-slate-800/50 border border-slate-700">
            <TabsTrigger value="creation" className="data-[state=active]:bg-neon-blue/20 data-[state=active]:text-neon-blue">
              Token Creation
            </TabsTrigger>
            <TabsTrigger value="boost" className="data-[state=active]:bg-neon-pink/20 data-[state=active]:text-neon-pink">
              Boost & Promotion
            </TabsTrigger>
            <TabsTrigger value="audit" className="data-[state=active]:bg-neon-purple/20 data-[state=active]:text-neon-purple">
              Smart Contract Audit
            </TabsTrigger>
            <TabsTrigger value="api" className="data-[state=active]:bg-neon-green/20 data-[state=active]:text-neon-green">
              API Documentation
            </TabsTrigger>
          </TabsList>

          <TabsContent value="creation" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center text-neon-blue">
                    <Icon name="Coins" className="mr-2" size={24} />
                    Token Configuration
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm text-slate-300">Token Name</label>
                    <input className="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg text-white" placeholder="My Awesome Token" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-slate-300">Symbol</label>
                    <input className="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg text-white" placeholder="MAT" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-slate-300">Total Supply</label>
                    <input className="w-full p-3 bg-slate-800 border border-slate-600 rounded-lg text-white" placeholder="1,000,000" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center text-neon-pink">
                    <Icon name="Settings" className="mr-2" size={24} />
                    Advanced Features
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Mintable</span>
                    <div className="w-12 h-6 bg-neon-blue rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Burnable</span>
                    <div className="w-12 h-6 bg-slate-600 rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Pausable</span>
                    <div className="w-12 h-6 bg-neon-pink rounded-full"></div>
                  </div>
                  <Button className="w-full mt-4 bg-gradient-to-r from-neon-blue to-neon-pink">
                    Deploy Contract
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="boost" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Social Media Boost', desc: 'Automated promotion across platforms', progress: 85 },
                { title: 'Liquidity Mining', desc: 'Incentivize token holders', progress: 60 },
                { title: 'Community Building', desc: 'Discord & Telegram management', progress: 92 }
              ].map((item, index) => (
                <Card key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-neon-pink">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 text-sm mb-4">{item.desc}</p>
                    <Progress value={item.progress} className="mb-2" />
                    <div className="text-right text-xs text-slate-400">{item.progress}% Complete</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="audit" className="mt-8">
            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center text-neon-purple">
                  <Icon name="Shield" className="mr-2" size={24} />
                  Security Audit Results
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-white">Vulnerability Scan</h4>
                    {[
                      { check: 'Reentrancy Protection', status: 'passed' },
                      { check: 'Integer Overflow', status: 'passed' },
                      { check: 'Access Control', status: 'passed' },
                      { check: 'Gas Optimization', status: 'warning' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-slate-300">{item.check}</span>
                        <Badge variant={item.status === 'passed' ? 'default' : 'destructive'} className={
                          item.status === 'passed' ? 'bg-green-600' : 'bg-yellow-600'
                        }>
                          {item.status === 'passed' ? 'Passed' : 'Warning'}
                        </Badge>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-white">Security Score</h4>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-neon-green mb-2">95/100</div>
                      <Progress value={95} className="mb-2" />
                      <p className="text-sm text-slate-400">Excellent Security Rating</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="api" className="mt-8">
            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center text-neon-green">
                  <Icon name="Code" className="mr-2" size={24} />
                  API Documentation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-white mb-4">Endpoints</h4>
                    <div className="space-y-2">
                      {[
                        'POST /api/tokens/create',
                        'GET /api/tokens/{id}',
                        'POST /api/audit/contract',
                        'GET /api/boost/campaigns'
                      ].map((endpoint, index) => (
                        <div key={index} className="p-3 bg-slate-800 rounded-lg font-mono text-sm text-neon-green border border-slate-600">
                          {endpoint}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-4">Example Response</h4>
                    <div className="p-4 bg-slate-900 rounded-lg border border-slate-600">
                      <pre className="text-sm text-slate-300 overflow-x-auto">
{`{
  "token_id": "0x123...",
  "name": "MyToken",
  "symbol": "MTK",
  "supply": "1000000",
  "status": "deployed"
}`}
                      </pre>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 bg-black/20 backdrop-blur-md mt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-neon-blue to-neon-pink rounded-lg flex items-center justify-center">
                <Icon name="Zap" className="text-white" size={16} />
              </div>
              <h3 className="text-xl font-bold text-white">Awesol</h3>
            </div>
            <p className="text-slate-400 mb-4">The future of token creation and boosting</p>
            <div className="flex justify-center space-x-6">
              <Icon name="Twitter" className="text-slate-400 hover:text-neon-blue cursor-pointer transition-colors" size={20} />
              <Icon name="Github" className="text-slate-400 hover:text-neon-blue cursor-pointer transition-colors" size={20} />
              <Icon name="MessageCircle" className="text-slate-400 hover:text-neon-blue cursor-pointer transition-colors" size={20} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}