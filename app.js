const EY='<circle cx="38" cy="50" r="9" fill="#fff"/><circle cx="62" cy="50" r="9" fill="#fff"/><circle cx="40" cy="52" r="5" fill="#15151f"/><circle cx="64" cy="52" r="5" fill="#15151f"/><circle cx="42" cy="50" r="1.8" fill="#fff"/><circle cx="66" cy="50" r="1.8" fill="#fff"/>';
const SM='<path d="M41,66 Q50,74 59,66" stroke="#15151f" stroke-width="3" fill="none" stroke-linecap="round"/>';

const CHARS={
spider:`<circle cx="50" cy="50" r="40" fill="#e63946" stroke="#15151f" stroke-width="3"/><g stroke="#a01f2b" stroke-width="1.3" fill="none" opacity=".85"><path d="M50 12 V88"/><path d="M12 50 H88"/><path d="M23 23 L77 77"/><path d="M77 23 L23 77"/><circle cx="50" cy="50" r="13"/><circle cx="50" cy="50" r="26"/></g><path d="M29 38 Q49 39 45 57 Q31 55 29 38Z" fill="#fff" stroke="#15151f" stroke-width="2.5"/><path d="M71 38 Q51 39 55 57 Q69 55 71 38Z" fill="#fff" stroke="#15151f" stroke-width="2.5"/>`,
bat:`<path d="M22 24 L30 4 L42 26Z" fill="#2c3047" stroke="#15151f" stroke-width="2.5"/><path d="M78 24 L70 4 L58 26Z" fill="#2c3047" stroke="#15151f" stroke-width="2.5"/><circle cx="50" cy="50" r="40" fill="#2c3047" stroke="#15151f" stroke-width="3"/><path d="M30 54 Q50 60 70 54 Q70 84 50 86 Q30 84 30 54Z" fill="#ffd9b3"/><path d="M30 44 q9 -6 16 0 q-3 7 -9 6 q-7 -1 -7 -6z" fill="#fff" stroke="#15151f" stroke-width="2"/><path d="M70 44 q-9 -6 -16 0 q3 7 9 6 q7 -1 7 -6z" fill="#fff" stroke="#15151f" stroke-width="2"/><path d="M43 70 Q50 75 57 70" stroke="#7a4a1e" stroke-width="2.5" fill="none" stroke-linecap="round"/>`,
iron:`<rect x="16" y="16" width="68" height="70" rx="22" fill="#e63946" stroke="#15151f" stroke-width="3"/><path d="M30 40 Q50 35 70 40 L65 68 Q50 76 35 68Z" fill="#ffd23f" stroke="#15151f" stroke-width="2.5"/><rect x="36" y="46" width="12" height="6" rx="3" fill="#cdf3ff" stroke="#15151f" stroke-width="1.5"/><rect x="52" y="46" width="12" height="6" rx="3" fill="#cdf3ff" stroke="#15151f" stroke-width="1.5"/><path d="M42 61 H58 M44 66 H56" stroke="#15151f" stroke-width="2" stroke-linecap="round"/>`,
ultra:`<ellipse cx="50" cy="52" rx="33" ry="40" fill="#dfe4ea" stroke="#15151f" stroke-width="3"/><path d="M50 8 L43 32 L57 32Z" fill="#e63946" stroke="#15151f" stroke-width="2.5"/><path d="M28 44 Q40 36 47 50 Q40 58 28 44Z" fill="#ffe14d" stroke="#15151f" stroke-width="2"/><path d="M72 44 Q60 36 53 50 Q60 58 72 44Z" fill="#ffe14d" stroke="#15151f" stroke-width="2"/><path d="M24 58 Q30 64 30 72" stroke="#e63946" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M76 58 Q70 64 70 72" stroke="#e63946" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M45 68 h10" stroke="#888" stroke-width="2.5" stroke-linecap="round"/>`,
captain:`<circle cx="50" cy="50" r="40" fill="#2563eb" stroke="#15151f" stroke-width="3"/><path d="M50 16 l3.2 7 7.8 .7-6 5.2 1.8 7.6L50 39.6l-6.6 3.9 1.8-7.6-6-5.2 7.8-.7z" fill="#fff" stroke="#15151f" stroke-width="1.5"/><path d="M20 32 q-7 7 0 14 M80 32 q7 7 0 14" stroke="#fff" stroke-width="3.5" fill="none" stroke-linecap="round"/>${EY}${SM}`,
hulk:`<path d="M36 16 q14 -8 28 0 q-7 5 -14 5 q-7 0 -14 -5z" fill="#1f2a37"/><circle cx="50" cy="53" r="38" fill="#5fa728" stroke="#15151f" stroke-width="3"/><path d="M30 40 L46 46 M70 40 L54 46" stroke="#3d6600" stroke-width="4.5" stroke-linecap="round"/><circle cx="40" cy="51" r="6" fill="#fff"/><circle cx="60" cy="51" r="6" fill="#fff"/><circle cx="41" cy="52" r="3" fill="#15151f"/><circle cx="61" cy="52" r="3" fill="#15151f"/><path d="M40 67 H60" stroke="#2f5500" stroke-width="3" stroke-linecap="round"/><path d="M45 64 v6 M50 64 v6 M55 64 v6" stroke="#2f5500" stroke-width="1.5"/>`,
flash:`<circle cx="50" cy="50" r="40" fill="#e63946" stroke="#15151f" stroke-width="3"/><path d="M10 42 l13 3 -9 4 11 3 -16 4z" fill="#ffe14d" stroke="#15151f" stroke-width="1.5"/><path d="M90 42 l-13 3 9 4 -11 3 16 4z" fill="#ffe14d" stroke="#15151f" stroke-width="1.5"/>${EY}<path d="M40 67 Q50 72 60 67" stroke="#a01f2b" stroke-width="3" fill="none" stroke-linecap="round"/>`
};

const AVS=[
 {id:'spider',l:'蜘蛛侠',g:['#ff5b6e','#c1121f']},
 {id:'bat',l:'蝙蝠侠',g:['#4a5070','#23283d']},
 {id:'iron',l:'钢铁侠',g:['#ff6b5b','#b81d24']},
 {id:'ultra',l:'奥特曼',g:['#9aa7b8','#5b6b80']},
 {id:'captain',l:'美队',g:['#5a9bff','#1d4ed8']},
 {id:'hulk',l:'绿巨人',g:['#7bd13c','#3d6600']},
 {id:'flash',l:'闪电侠',g:['#ff5b6e','#b3122a']},
];
function charSvg(id,sz){return CHARS[id]?`<svg width="${sz}" height="${sz}" viewBox="0 0 100 100">${CHARS[id]}</svg>`:'';}

const RANKS=[
 {lv:1,name:'见习英雄',need:0},
 {lv:2,name:'小小英雄',need:30},
 {lv:3,name:'城市卫士',need:80},
 {lv:4,name:'超级英雄',need:150},
 {lv:5,name:'传奇英雄',need:300},
 {lv:6,name:'宇宙之光',need:500},
];

// 能力（养成点）——每个正向加分项对应一种能力
const ATTRS={
 courage:{name:'勇气',i:'⚡',c:'#3fb3a6'},
 wisdom:{name:'智慧',i:'🧠',c:'#77a8cf'},
 body:{name:'体魄',i:'💪',c:'#d0ac54'},
 heart:{name:'爱心',i:'❤️',c:'#d98aa0'},
};
const ATTR_ORDER=['courage','wisdom','body','heart'];

const DEFAULT_RWS=[
 {id:'sk',i:'🍦',n:'选一个零食',c:15,lv:1,h:'#f3ece0'},
 {id:'mv',i:'🎬',n:'看一部动画片',c:20,lv:1,h:'#e8eee6'},
 {id:'g30',i:'🎮',n:'玩游戏30分钟',c:25,lv:2,h:'#e4edf1'},
 {id:'ds',i:'🍰',n:'选蛋糕口味',c:25,lv:2,h:'#f2ebe1'},
 {id:'pk',i:'🛝',n:'去公园玩',c:35,lv:3,h:'#e6efe2'},
 {id:'fr',i:'👫',n:'邀请朋友来玩',c:40,lv:3,h:'#e5eef2'},
 {id:'ty',i:'🧸',n:'选一个小玩具',c:60,lv:4,h:'#f2ece0'},
 {id:'wk',i:'🗓️',n:'周末活动自选',c:50,lv:4,h:'#f3efe0'},
 {id:'bg',i:'🎢',n:'去游乐场大冒险',c:100,lv:5,h:'#efe8ee'},
 {id:'sp',i:'🎁',n:'超级大惊喜',c:150,lv:6,h:'#e6efec'},
];
const DEFAULT_TASKS=[
 {i:'📚',label:'认真听课',p:3,attr:'wisdom'},
 {i:'🖍️',label:'完成手工',p:5,attr:'wisdom'},
 {i:'🤝',label:'友好相处',p:3,attr:'heart'},
 {i:'🎨',label:'认真画画',p:3,attr:'wisdom'},
];
const DEFAULT_QADD=[
 {i:'🍚',label:'乖乖吃饭',p:3,attr:'body'},
 {i:'😴',label:'早睡早起',p:5,attr:'body'},
 {i:'🧹',label:'帮做家务',p:5,attr:'heart'},
 {i:'🧸',label:'分享玩具',p:4,attr:'heart'},
 {i:'🦷',label:'认真刷牙',p:2,attr:'body'},
 {i:'💪',label:'勇敢尝试',p:4,attr:'courage'},
];
const DEFAULT_QSUB=[
 {i:'🥊',label:'打架斗殴',p:5},
 {i:'🤥',label:'撒谎骗人',p:4},
];
// 不同教育阶段的快捷加分预设
const QADD_PRESETS={
 '幼儿·生活习惯':[
  {i:'🍚',label:'乖乖吃饭',p:3,attr:'body'},{i:'😴',label:'早睡早起',p:4,attr:'body'},
  {i:'🦷',label:'认真刷牙',p:2,attr:'body'},{i:'👕',label:'自己穿衣',p:3,attr:'body'},
  {i:'🧸',label:'收拾玩具',p:3,attr:'heart'},{i:'🚽',label:'自己如厕',p:2,attr:'body'},
 ],
 '幼儿·情感社交':[
  {i:'🤝',label:'友好相处',p:3,attr:'heart'},{i:'🧸',label:'分享玩具',p:4,attr:'heart'},
  {i:'😊',label:'好好说话',p:3,attr:'heart'},{i:'🫂',label:'安慰他人',p:4,attr:'heart'},
  {i:'💪',label:'勇敢尝试',p:4,attr:'courage'},{i:'🙋',label:'主动打招呼',p:2,attr:'courage'},
 ],
 '学龄·学习成长':[
  {i:'📚',label:'认真听课',p:3,attr:'wisdom'},{i:'✏️',label:'完成作业',p:5,attr:'wisdom'},
  {i:'📖',label:'主动阅读',p:4,attr:'wisdom'},{i:'🎨',label:'认真画画',p:3,attr:'wisdom'},
  {i:'🏃',label:'坚持运动',p:4,attr:'body'},{i:'🧹',label:'帮做家务',p:5,attr:'heart'},
 ],
};
const QSUB_PRESETS={
 '严重行为':[{i:'🥊',label:'打架斗殴',p:5},{i:'🤥',label:'撒谎骗人',p:4}],
 '安全红线':[{i:'🥊',label:'打人',p:5},{i:'⚠️',label:'做危险的事',p:5},{i:'🤥',label:'撒谎骗人',p:4}],
};
const BLOB='https://jsonblob.com/api/jsonBlob';

const clone=o=>JSON.parse(JSON.stringify(o));
const cloneArr=a=>a.map(x=>({...x}));
function clampInt(v,a,b){let n=parseInt(v);if(isNaN(n))n=a;return Math.max(a,Math.min(b,n));}
function esc(s){return (s==null?'':''+s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;');}

let P=JSON.parse(localStorage.getItem('kp4_P')||'null');
let S=JSON.parse(localStorage.getItem('kp4_S')||'null')||{points:0,lifetime:0,streak:0,lastCI:null,hist:[]};
if(S.lifetime===undefined)S.lifetime=S.points||0;
function ensureCfg(){
 if(!S.cfg)S.cfg={};
 if(S.cfg.checkin===undefined)S.cfg.checkin=10;
 if(!Array.isArray(S.cfg.rewards)||!S.cfg.rewards.length)S.cfg.rewards=cloneArr(DEFAULT_RWS);
 if(!Array.isArray(S.cfg.tasks)||!S.cfg.tasks.length)S.cfg.tasks=cloneArr(DEFAULT_TASKS);
 if(!Array.isArray(S.cfg.qadd)||!S.cfg.qadd.length)S.cfg.qadd=cloneArr(DEFAULT_QADD);
 if(!Array.isArray(S.cfg.qsub))S.cfg.qsub=cloneArr(DEFAULT_QSUB);
 DEFAULT_RWS.forEach(d=>{if(!S.cfg.rewards.find(r=>r.id===d.id))S.cfg.rewards.push({...d});});
 S.cfg.rewards.forEach(r=>{const d=DEFAULT_RWS.find(x=>x.id===r.id);if(d){r.i=d.i;r.h=d.h;}});
 if(!S.abilities||typeof S.abilities!=='object')S.abilities={};
 ATTR_ORDER.forEach(k=>{if(typeof S.abilities[k]!=='number')S.abilities[k]=0;});
}
ensureCfg();
function getRewards(){return S.cfg.rewards;}
let sStep=1,sAv='spider',sCust='',sName='',pendFn=null,pendRwd=null,autoT=null,deferredPrompt=null;
let draft=null,dirty=false,editingIdx=-1;

function save(){localStorage.setItem('kp4_P',JSON.stringify(P));localStorage.setItem('kp4_S',JSON.stringify(S));}
function grad(g){return `linear-gradient(150deg,${g[0]},${g[1]})`;}
function rankOf(lt){let r=RANKS[0];for(const x of RANKS)if(lt>=x.need)r=x;return r;}
function nextRank(lv){return RANKS.find(x=>x.lv===lv+1)||null;}

async function pushCloud(){if(!P||!P.fid)return;setSS('loading');try{const r=await fetch(`${BLOB}/${P.fid}`,{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify({S,v:1})});setSS(r.ok?'ok':'err');}catch(e){setSS('err');}}
async function pullCloud(){if(!P||!P.fid)return;setSS('loading');try{const r=await fetch(`${BLOB}/${P.fid}`);if(!r.ok)throw 0;const d=await r.json();if(d&&d.S){S=d.S;if(S.lifetime===undefined)S.lifetime=S.points||0;ensureCfg();draft=null;save();renderAll();}setSS('ok');}catch(e){setSS('err');}}
async function createBlob(){try{const r=await fetch(BLOB,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify({S,v:1})});if(!r.ok)return null;const loc=r.headers.get('Location');return loc?loc.split('/').pop():null;}catch(e){return null;}}
async function joinBlob(id){try{const r=await fetch(`${BLOB}/${id}`);if(!r.ok)return false;const d=await r.json();if(d&&d.S){S=d.S;if(S.lifetime===undefined)S.lifetime=S.points||0;ensureCfg();draft=null;save();}return true;}catch(e){return false;}}
function setSS(s){const dot=document.getElementById('sdi'),txt=document.getElementById('stxt');if(!dot)return;dot.className='sdi'+(s==='ok'?' ok':s==='err'?' err':s==='loading'?' spin':'');txt.textContent=s==='ok'?'已同步':s==='err'?'同步失败':s==='loading'?'同步中':'';}
function startAuto(){if(autoT)clearInterval(autoT);if(P&&P.fid)autoT=setInterval(pullCloud,30000);}

// ===== 设置向导 =====
function initSetup(){document.getElementById('SW').style.display='';document.getElementById('MW').style.display='none';renderStep();}
function renderStep(){document.getElementById('sdots').innerHTML=[1,2,3].map(i=>`<div class="sd${sStep===i?' on':''}"></div>`).join('');if(sStep===1)rS1();else if(sStep===2)rS2();else rS3();}
function rS1(){document.getElementById('scard').innerHTML=`<div class="st">选择你的英雄形象</div><div class="ss">你最喜欢哪个超级英雄？</div><div class="av-grid" id="s1Grid"></div><div class="cust-row"><div class="cust-prev" id="s1Prev">${sCust||charSvg(sAv,40)}</div><input class="ai" style="flex:1;font-size:18px" placeholder="或输入喜欢的表情 🦸" id="s1CI" maxlength="2" value="${sCust}" oninput="onCI(this.value)"/></div><button class="nxt" onclick="sStep=2;renderStep()">下一步 →</button>`;bindGrid('s1Grid',sAv,av=>{sAv=av.id;sCust='';const p=document.getElementById('s1Prev');if(p)p.innerHTML=charSvg(av.id,40);const i=document.getElementById('s1CI');if(i)i.value='';});}
function onCI(v){sCust=v;sAv='';const p=document.getElementById('s1Prev');if(p)p.innerHTML=`<span style="font-size:28px">${esc(v)||'?'}</span>`;document.querySelectorAll('#s1Grid .av-opt').forEach(e=>e.classList.remove('sel'));}
function rS2(){document.getElementById('scard').innerHTML=`<div class="st">你叫什么名字？</div><div class="ss">爸爸妈妈是怎么叫你的？</div><input class="big-in" id="nmIn" placeholder="输入名字" maxlength="10" value="${esc(sName)}" oninput="sName=this.value;document.getElementById('nmBtn').disabled=!this.value.trim()"/><button class="nxt" id="nmBtn" onclick="sStep=3;renderStep()" ${sName.trim()?'':'disabled'}>下一步 →</button><span class="skip" onclick="sStep=1;renderStep()">← 上一步</span>`;}
function rS3(){document.getElementById('scard').innerHTML=`<div class="st">家庭共享设置</div><div class="ss">爸爸妈妈爷爷奶奶都能看到积分，大家都能帮忙加分！</div><div class="fam-opts"><div class="fam-opt" onclick="doCreate()"><span style="font-size:24px">🆕</span><div><strong>创建家庭积分本</strong><span>获得家庭码，分享给家人</span></div></div><div class="fam-opt" onclick="toggleJoin()"><span style="font-size:24px">🔗</span><div><strong>加入已有积分本</strong><span>输入家人分享的家庭码</span></div></div></div><div id="jArea" style="display:none"><input class="ji" id="jIn" placeholder="粘贴家庭码"/><button class="nxt" onclick="doJoin()">加入家庭 →</button></div><span class="skip" onclick="finish()">跳过，先单独使用</span><span class="skip" onclick="sStep=2;renderStep()">← 上一步</span>`;}
function toggleJoin(){const a=document.getElementById('jArea');if(a)a.style.display=a.style.display==='none'?'':'none';}
async function doCreate(){buildP();save();showToast('正在创建...');const id=await createBlob();if(id){P.fid=id;save();showMain();showToast('🎉 创建成功！家庭码在家长里');}else{showMain();showToast('网络问题，已用本地模式');}}
async function doJoin(){const inp=document.getElementById('jIn');if(!inp||!inp.value.trim()){showToast('请输入家庭码');return;}buildP();const ok=await joinBlob(inp.value.trim());if(ok){P.fid=inp.value.trim();save();showMain();}else showToast('加入失败，请检查家庭码');}
function finish(){buildP();save();showMain();}
function buildP(){const av=AVS.find(a=>a.id===sAv)||AVS[0];P={name:sName.trim()||'小英雄',avId:sCust?'':sAv,e:sCust,g:av.g,fid:null};}
function bindGrid(id,sel,cb){const g=document.getElementById(id);if(!g)return;g.innerHTML=AVS.map((av,i)=>`<div class="av-opt${av.id===sel?' sel':''}" data-i="${i}">${charSvg(av.id,46)}<span class="av-lbl">${av.l}</span></div>`).join('');g.querySelectorAll('.av-opt').forEach(el=>el.addEventListener('click',()=>{g.querySelectorAll('.av-opt').forEach(e=>e.classList.remove('sel'));el.classList.add('sel');cb(AVS[el.dataset.i]);}));}

function showMain(){document.getElementById('SW').style.display='none';document.getElementById('MW').style.display='';renderAll();startAuto();if(P&&P.fid)pullCloud();}

// ===== 渲染 =====
function avInner(sz){return (P.avId&&CHARS[P.avId])?charSvg(P.avId,sz):`<span style="font-size:${Math.round(sz*0.55)}px">${esc(P.e)||'🦸'}</span>`;}
function renderAll(){renderHdr();renderCi();renderTasks();renderAbilities();renderRw();renderHist();renderQuick();renderSync();renderInstall();renderSettings();}
function renderHdr(){const hdr=document.getElementById('hdr');if(!hdr||!P)return;const rk=rankOf(S.lifetime);const av=document.getElementById('hav');av.innerHTML=avInner(80);av.style.boxShadow=`0 6px 16px rgba(0,0,0,.15),0 0 ${6+rk.lv*4}px rgba(255,240,190,${.15+rk.lv*.06})`;document.getElementById('hnm').textContent=(P.name||'小英雄');document.getElementById('hpts').textContent=S.points;
 const nx=nextRank(rk.lv);
 document.getElementById('rchip').textContent='LV.'+rk.lv+' '+rk.name;
 if(nx){const span=nx.need-rk.need,done=S.lifetime-rk.need,pct=Math.max(0,Math.min(100,Math.round(done/span*100)));document.getElementById('pfill').style.width=pct+'%';document.getElementById('ptxt').textContent=`再得 ${nx.need-S.lifetime} 颗 ⭐ 升到 LV.${nx.lv} ${nx.name}`;}
 else{document.getElementById('pfill').style.width='100%';document.getElementById('ptxt').textContent='🏆 已是最高等级！宇宙之光！';}
}
function renderCi(){const btn=document.getElementById('ciBtn');if(!btn)return;const done=S.lastCI===td();btn.disabled=done;btn.textContent=done?'今天已经打卡了！':'我今天上学啦！';document.getElementById('ciM').innerHTML=done?'<span style="font-size:46px">🎉</span>':avInner(58);document.getElementById('ciT').textContent=done?'太棒了！今天已打卡！':'今天去上学了吗？';document.getElementById('ciS').innerHTML=done?'明天继续加油，赚更多能量星！':`按下按钮，获得 <strong>${S.cfg.checkin} 颗能量星</strong>！`;}
function renderTasks(){const el=document.getElementById('tGrid');if(!el)return;const arr=S.cfg.tasks;el.innerHTML=arr.map((t,i)=>`<button class="taskbtn" data-i="${i}"><span class="tb-emo">${t.i}</span><span class="tb-tx"><span class="tb-nm">${esc(t.label)}</span><span class="tb-pt">+${t.p} ⭐</span></span></button>`).join('');el.querySelectorAll('.taskbtn').forEach(b=>b.addEventListener('click',()=>{const t=arr[b.dataset.i];commit(t.label,t.p,'⭐',t.attr,b);showToast('⭐ +'+t.p+' '+t.label);}));}
function renderAbilities(){const el=document.getElementById('abilBody');if(!el)return;const max=Math.max(10,...ATTR_ORDER.map(k=>S.abilities[k]||0));el.innerHTML=ATTR_ORDER.map(k=>{const a=ATTRS[k];const v=S.abilities[k]||0;const pct=Math.round(v/max*100);return `<div class="abil" data-a="${k}"><div class="abil-i" style="background:${a.c}22;border-color:${a.c}66">${a.i}</div><div class="abil-m"><div class="abil-nm">${a.name} <b>${v}</b></div><div class="abil-bar"><div class="abil-fill" style="width:${pct}%;background:${a.c}"></div></div></div></div>`;}).join('');}
function renderQuick(){const a=document.getElementById('qaChips');if(a){a.innerHTML=S.cfg.qadd.map((x,i)=>`<button class="chip" data-i="${i}">${x.i} ${esc(x.label)} +${x.p}</button>`).join('');a.querySelectorAll('.chip').forEach(c=>c.addEventListener('click',()=>{const x=S.cfg.qadd[c.dataset.i];commit(x.label,x.p,'⭐',x.attr,c);showToast('⭐ +'+x.p+' '+x.label);}));}
 const s=document.getElementById('qsChips');if(s){if(!S.cfg.qsub.length){s.innerHTML='<div style="font-size:12px;color:var(--ink-soft)">（暂无扣分项，扣分只用于严重行为）</div>';}else{s.innerHTML=S.cfg.qsub.map((x,i)=>`<button class="chip minus" data-i="${i}">${x.i} ${esc(x.label)} -${x.p}</button>`).join('');s.querySelectorAll('.chip').forEach(c=>c.addEventListener('click',()=>{const x=S.cfg.qsub[c.dataset.i];commit(x.label,-x.p,'💫',null,c);showToast('💫 -'+x.p+' '+x.label);}));}}}
function renderRw(){
 const bn=document.getElementById('lvlBanner');const rk=rankOf(S.lifetime),nx=nextRank(rk.lv);
 if(bn){bn.innerHTML=`<div class="lv-now">当前 <b>LV.${rk.lv} ${rk.name}</b>　能量星 ${S.points} ⭐</div><div class="pbar"><div class="pbar-fill" style="width:${nx?Math.max(0,Math.min(100,Math.round((S.lifetime-rk.need)/(nx.need-rk.need)*100))):100}%"></div></div><div class="pbar-txt" style="opacity:.9;margin-top:6px">${nx?`再得 ${nx.need-S.lifetime} 颗星升级，解锁更多奖励！`:'🏆 满级啦！全部奖励已解锁！'}</div>`;}
 const g=document.getElementById('rwGrid');if(!g)return;const curLv=rk.lv;const RW=getRewards();
 g.innerHTML=RW.map(r=>{const lockL=curLv<r.lv,lockE=!lockL&&S.points<r.c;const cls=lockL?' lockL':lockE?' lockE':'';
  return `<div class="rw-card${cls}" data-id="${r.id}">${lockL?`<span class="lockbadge">🔒 LV.${r.lv} 解锁</span>`:''}<div class="rw-ic" style="background:${lockL?'#e2ddd0':r.h}">${lockL?'🔒':r.i}</div><div class="rw-n">${esc(r.n)}</div><div class="rw-c">⭐ ${r.c}</div></div>`;}).join('');
 g.querySelectorAll('.rw-card:not(.lockL):not(.lockE)').forEach(el=>{const r=RW.find(x=>x.id===el.dataset.id);el.addEventListener('click',()=>askRw(r));});
 g.querySelectorAll('.rw-card.lockE').forEach(el=>el.addEventListener('click',()=>showToast('能量星不够哦，再攒攒！')));
 g.querySelectorAll('.rw-card.lockL').forEach(el=>{const r=RW.find(x=>x.id===el.dataset.id);el.addEventListener('click',()=>showToast(`升到 LV.${r.lv} 才能解锁这个奖励！`));});
}
function renderHist(){const el=document.getElementById('hList');if(!el)return;if(!S.hist.length){el.innerHTML='<div class="empty"><div class="ei">📭</div><p>还没有记录哦，快去打卡吧！</p></div>';return;}
 const rows=S.hist.map((h,idx)=>({h,idx})).reverse();
 el.innerHTML=rows.map(({h,idx})=>{const pl=h.p>0;
  if(idx===editingIdx){return `<div class="hi"><div class="hi-edit"><input class="ai" id="ehR" value="${esc(h.r)}"><input class="ai an" id="ehP" type="number" value="${h.p}" style="max-width:66px"><button class="hi-btn" onclick="saveEdit(${idx})">✔️</button><button class="hi-btn" onclick="cancelEdit()">✖️</button></div></div>`;}
  return `<div class="hi"><div class="hi-ic" style="background:${pl?'#e6f2e2':'#f6e9e3'}">${h.ic||(pl?'⭐':'💫')}</div><div class="hi-inf"><div class="hi-t">${esc(h.r)}</div><div class="hi-d">${fmt(h.t)}</div></div><div class="hi-p ${pl?'pl':'mn'}">${pl?'+':''}${h.p}</div><div class="hi-act"><button class="hi-btn" onclick="editHist(${idx})">✏️</button><button class="hi-btn" onclick="delHist(${idx})">🗑️</button></div></div>`;}).join('');}
function renderSync(){const el=document.getElementById('syncBody');if(!el||!P)return;if(!P.fid){el.innerHTML=`<p style="font-size:13px;color:var(--ink-soft);margin-bottom:12px">创建家庭码后发给家人，所有人都能看到和调整积分。</p><button class="nxt" onclick="adminCreate()">🆕 创建家庭积分本</button><div style="margin-top:10px;display:flex;gap:8px"><input class="ai" id="aJIn" placeholder="或粘贴家庭码加入" style="font-family:var(--font-mono)"/><button class="ab ab-a" onclick="adminJoin()">加入</button></div>`;}else{el.innerHTML=`<div style="display:flex;align-items:center;gap:7px;margin-bottom:8px"><div class="sdi ok"></div><span style="font-size:14px">已连接家庭积分本</span></div><p style="font-size:12px;color:var(--ink-soft);margin-bottom:5px">家庭码（点击复制发给家人）：</p><div class="sc-box" onclick="copyCode()">${P.fid}</div><p style="font-size:12px;color:var(--ink-soft);margin-bottom:8px">家人打开同一个网址 → 家长 → 粘贴家庭码 → 加入，即可共享。</p><div class="s-row"><button class="s-btn" onclick="pullCloud().then(()=>showToast('已同步最新积分 ✨'))">🔄 立即同步</button><button class="s-btn" style="color:var(--danger)" onclick="disconn()">断开连接</button></div>`;}}
function renderInstall(){const el=document.getElementById('installBody');if(!el)return;const standalone=window.matchMedia('(display-mode: standalone)').matches||window.navigator.standalone;if(standalone){el.innerHTML='<div style="font-size:13px;color:var(--sage-d)">✅ 已安装到桌面，正以 app 模式运行！</div>';return;}const isIOS=/iphone|ipad|ipod/i.test(navigator.userAgent);let h='';if(deferredPrompt){h+=`<button class="nxt" onclick="doInstall()">📲 一键安装到桌面</button>`;}if(isIOS){h+=`<div class="installtip">📱 iPhone/iPad：点底部 <b>分享按钮 ⬆️</b> → 选「<b>添加到主屏幕</b>」，桌面就会出现英雄图标。</div>`;}else if(!deferredPrompt){h+=`<div class="installtip">📱 安卓：点浏览器 <b>菜单 ⋮</b> → 选「<b>添加到主屏幕 / 安装应用</b>」。</div>`;}el.innerHTML=h;}
function doInstall(){if(!deferredPrompt)return;deferredPrompt.prompt();deferredPrompt.userChoice.then(()=>{deferredPrompt=null;renderInstall();});}

// ===== 家长设置（草稿 + 保存确认） =====
function openDraft(){draft=clone(S.cfg);dirty=false;}
function markDirty(){dirty=true;const b=document.getElementById('saveBtn');if(b){b.className='savebtn dirty';b.textContent='✓ 保存并同步给全家';}const h=document.getElementById('saveHint');if(h)h.textContent='有修改还没保存';}
function saveSettings(){if(!dirty){showToast('没有需要保存的修改');return;}S.cfg=clone(draft);save();pushCloud();openDraft();renderAll();showToast('✅ 设置已保存并同步给全家');}
function sCheckin(v){draft.checkin=clampInt(v,0,999);markDirty();}
function sRw(i,f,v){const r=draft.rewards[i];if(!r)return;if(f==='n')r.n=v.slice(0,20);else if(f==='c')r.c=clampInt(v,0,999);else if(f==='lv')r.lv=parseInt(v)||1;markDirty();}
function sQa(i,f,v){const r=draft.qadd[i];if(!r)return;if(f==='i')r.i=(v||r.i).slice(0,2);else if(f==='label')r.label=v.slice(0,10);else if(f==='p')r.p=clampInt(v,1,99);else if(f==='attr')r.attr=v;markDirty();}
function sQaDel(i){draft.qadd.splice(i,1);markDirty();renderSettings();}
function sQaAdd(){draft.qadd.push({i:'⭐',label:'新加分项',p:3,attr:'wisdom'});markDirty();renderSettings();}
function loadQaPreset(k){draft.qadd=clone(QADD_PRESETS[k]);markDirty();renderSettings();}
function sQs(i,f,v){const r=draft.qsub[i];if(!r)return;if(f==='i')r.i=(v||r.i).slice(0,2);else if(f==='label')r.label=v.slice(0,10);else if(f==='p')r.p=clampInt(v,1,99);markDirty();}
function sQsDel(i){draft.qsub.splice(i,1);markDirty();renderSettings();}
function sQsAdd(){draft.qsub.push({i:'⚠️',label:'严重行为',p:5});markDirty();renderSettings();}
function loadQsPreset(k){draft.qsub=clone(QSUB_PRESETS[k]);markDirty();renderSettings();}
function attrOpts(cur){return ATTR_ORDER.map(k=>`<option value="${k}"${k===cur?' selected':''}>${ATTRS[k].i}${ATTRS[k].name}</option>`).join('');}
function renderSettings(){const el=document.getElementById('settingsBody');if(!el)return;if(!draft)openDraft();
 const lvOpts=n=>RANKS.map(r=>`<option value="${r.lv}"${r.lv===n?' selected':''}>LV.${r.lv}</option>`).join('');
 el.innerHTML=
  `<div class="set-row"><div class="set-ic">🏫</div><div style="flex:1;font-size:14px;color:var(--ink)">每天上学打卡奖励</div><input class="set-cost" type="number" min="0" max="999" value="${draft.checkin}" oninput="sCheckin(this.value)"></div>
  <div class="subhd">🎁 奖励兑换设置</div>
  <div class="set-hd"><span style="width:32px"></span><span style="flex:1">名称</span><span style="width:58px;text-align:center">花费⭐</span><span>解锁</span></div>
  ${draft.rewards.map((r,i)=>`<div class="set-row"><div class="set-ic" style="background:${r.h}">${r.i}</div><input class="set-name" value="${esc(r.n)}" oninput="sRw(${i},'n',this.value)"><input class="set-cost" type="number" min="0" max="999" value="${r.c}" oninput="sRw(${i},'c',this.value)"><select class="set-lv" onchange="sRw(${i},'lv',this.value)">${lvOpts(r.lv)}</select></div>`).join('')}
  <div class="subhd">⭐ 快捷加分（正向鼓励）</div>
  <div class="subtip">按孩子当前的教育目标挑一套预设，或自由增删。加分会累积到对应的能力值。</div>
  <div class="preset-row">${Object.keys(QADD_PRESETS).map(k=>`<span class="preset-chip" onclick="loadQaPreset('${k}')">${k}</span>`).join('')}</div>
  <div class="editlist">${draft.qadd.map((x,i)=>`<div class="editrow"><input class="er-emo" value="${esc(x.i)}" maxlength="2" oninput="sQa(${i},'i',this.value)"><input class="er-nm" value="${esc(x.label)}" oninput="sQa(${i},'label',this.value)"><input class="er-pt" type="number" min="1" max="99" value="${x.p}" oninput="sQa(${i},'p',this.value)"><select class="er-at" onchange="sQa(${i},'attr',this.value)">${attrOpts(x.attr)}</select><button class="er-del" onclick="sQaDel(${i})">✕</button></div>`).join('')}</div>
  <button class="addbtn" onclick="sQaAdd()">+ 添加一个加分项</button>
  <div class="subhd">💫 快捷扣分（仅限严重行为）</div>
  <div class="subtip">扣分只用于需要严厉制止的行为（打架、撒谎等）。日常多用正向鼓励，不建议用扣分教育孩子。</div>
  <div class="preset-row">${Object.keys(QSUB_PRESETS).map(k=>`<span class="preset-chip" onclick="loadQsPreset('${k}')">${k}</span>`).join('')}</div>
  <div class="editlist">${draft.qsub.map((x,i)=>`<div class="editrow"><input class="er-emo" value="${esc(x.i)}" maxlength="2" oninput="sQs(${i},'i',this.value)"><input class="er-nm" value="${esc(x.label)}" oninput="sQs(${i},'label',this.value)"><input class="er-pt" type="number" min="1" max="99" value="${x.p}" oninput="sQs(${i},'p',this.value)"><button class="er-del" onclick="sQsDel(${i})">✕</button></div>`).join('')}</div>
  <button class="addbtn" onclick="sQsAdd()">+ 添加一个扣分项</button>
  <div class="savebar"><button class="savebtn ${dirty?'dirty':'clean'}" id="saveBtn" onclick="saveSettings()">${dirty?'✓ 保存并同步给全家':'设置已保存 ✓'}</button><div class="savehint" id="saveHint">${dirty?'有修改还没保存':''}</div></div>
  <button class="s-btn" style="width:100%;margin-top:10px" onclick="resetCfg()">恢复默认设置</button>`;
}
function resetCfg(){showCC('<span style="font-size:40px">↩️</span>','恢复默认设置？','把打卡奖励、奖励列表、快捷加分/扣分都恢复成初始（不影响已有积分、能力和记录）。',()=>{S.cfg={checkin:10,rewards:cloneArr(DEFAULT_RWS),tasks:cloneArr(DEFAULT_TASKS),qadd:cloneArr(DEFAULT_QADD),qsub:cloneArr(DEFAULT_QSUB)};save();pushCloud();openDraft();renderAll();showToast('已恢复默认设置');});}

// ===== 头像面板 =====
function showAvPanel(){const p=document.getElementById('avPanel');p.style.display='';bindGrid('avPGrid',P.avId||'',av=>{P.avId=av.id;P.e='';P.g=av.g;save();renderHdr();});const prev=document.getElementById('avPPrev');if(prev)prev.innerHTML=avInner(44);}
function closeAvPanel(){document.getElementById('avPanel').style.display='none';}
function applyCustomAv(){const v=document.getElementById('avCIn').value.trim();if(!v){showToast('请输入一个表情符号');return;}P.e=v;P.avId='';save();renderHdr();closeAvPanel();showToast('形象已更新！✨');}

// ===== 核心动作 =====
function td(){const d=new Date();return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();}
function fmt(iso){const d=new Date(iso);return (d.getMonth()+1)+'月'+d.getDate()+'日 '+d.getHours()+':'+String(d.getMinutes()).padStart(2,'0');}
function addH(r,p,ic,attr){S.hist.push({r,p,ic:ic||null,attr:attr||null,t:new Date().toISOString()});if(S.hist.length>200)S.hist=S.hist.slice(-200);}
function commit(r,p,ic,attr,srcEl){const oldLv=rankOf(S.lifetime).lv;S.points=Math.max(0,S.points+p);if(p>0){S.lifetime+=p;if(attr&&S.abilities[attr]!==undefined)S.abilities[attr]+=p;}addH(r,p,ic,attr);save();pushCloud();renderAll();if(p>0){flyGains(srcEl,p);if(attr)pulseAbil(attr);}checkLvUp(oldLv);}
function doCI(){const t=td();const y=(()=>{const d=new Date();d.setDate(d.getDate()-1);return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();})();if(S.lastCI===t){showToast('今天已经打卡过啦！');return;}const oldLv=rankOf(S.lifetime).lv;const amt=S.cfg.checkin;S.streak=S.lastCI===y?S.streak+1:1;S.lastCI=t;S.points+=amt;S.lifetime+=amt;if(S.abilities.courage!==undefined)S.abilities.courage+=amt;addH('上学打卡',amt,'🏫','courage');save();pushCloud();renderAll();flyGains(document.getElementById('ciBtn'),amt);pulseAbil('courage');showToast('🎉 太棒了！获得 '+amt+' 颗能量星！');checkLvUp(oldLv);}
function adj(s,el){const r=document.getElementById('adjR').value.trim()||'家长调整';const a=parseInt(document.getElementById('adjA').value)||5;commit(r,s*a,s>0?'⭐':'💫',null,el);showToast((s>0?'⭐ +':'💫 -')+a+' '+r);document.getElementById('adjR').value='';}
function askRw(rwd){pendRwd=rwd;showCC(`<div class="rw-ic" style="background:${rwd.h};margin:0 auto">${rwd.i}</div>`,'确定要换吗？',`用 ${rwd.c} 颗能量星换「${rwd.n}」`,()=>{if(!pendRwd)return;if(S.points<pendRwd.c){showToast('能量星不够哦！');return;}S.points=Math.max(0,S.points-pendRwd.c);addH('兑换：'+pendRwd.n,-pendRwd.c,pendRwd.i);save();pushCloud();renderAll();showToast(pendRwd.i+' 兑换成功！享受奖励吧！');pendRwd=null;});}
function askReset(){showCC('<span style="font-size:40px">⚠️</span>','确定要重置吗？','所有能量、等级、能力和记录都会清空，不能撤回！（家长的设置会保留）',()=>{const keepCfg=S.cfg;S={points:0,lifetime:0,streak:0,lastCI:null,hist:[],cfg:keepCfg,abilities:{courage:0,wisdom:0,body:0,heart:0}};save();pushCloud();renderAll();showToast('已重置所有数据');},'linear-gradient(180deg,#cc8168,#b3634a)');}

// ===== 记录编辑/撤销 =====
function applyRevert(h){S.points=Math.max(0,S.points-h.p);if(h.p>0){S.lifetime=Math.max(0,S.lifetime-h.p);if(h.attr&&S.abilities[h.attr]!==undefined)S.abilities[h.attr]=Math.max(0,S.abilities[h.attr]-h.p);}}
function delHist(i){const h=S.hist[i];if(!h)return;showCC('<span style="font-size:38px">🗑️</span>','删除这条记录？',`「${h.r} ${h.p>0?'+':''}${h.p}」会被撤销，积分和能力值一起还原。`,()=>{applyRevert(h);S.hist.splice(i,1);save();pushCloud();renderAll();showToast('已撤销并删除');});}
function editHist(i){editingIdx=i;renderHist();}
function cancelEdit(){editingIdx=-1;renderHist();}
function saveEdit(i){const rIn=document.getElementById('ehR'),pIn=document.getElementById('ehP');const h=S.hist[i];if(!h){editingIdx=-1;renderHist();return;}const nr=(rIn.value||h.r).slice(0,30);let np=parseInt(pIn.value);if(isNaN(np))np=h.p;np=Math.max(-999,Math.min(999,np));applyRevert(h);h.r=nr;h.p=np;S.points=Math.max(0,S.points+np);if(np>0){S.lifetime+=np;if(h.attr&&S.abilities[h.attr]!==undefined)S.abilities[h.attr]+=np;}editingIdx=-1;save();pushCloud();renderAll();showToast('已修改记录');}

// ===== 动画 =====
function flyGains(srcEl,pts){const hp=document.getElementById('hpts');if(!hp)return;const t=hp.getBoundingClientRect();const tx=t.left+t.width/2,ty=t.top+t.height/2;let sx=tx,sy=ty+90;if(srcEl&&srcEl.getBoundingClientRect){const s=srcEl.getBoundingClientRect();sx=s.left+s.width/2;sy=s.top+s.height/2;}
 const n=Math.min(Math.max(pts,1),8);
 for(let i=0;i<n;i++){const s=document.createElement('div');s.className='flystar';s.textContent='⭐';s.style.fontSize=(17+Math.random()*9)+'px';s.style.left='0';s.style.top='0';s.style.opacity='0';s.style.transform=`translate(${sx-10}px,${sy-10}px) scale(.5)`;document.body.appendChild(s);
  const jx=(Math.random()-.5)*40;
  requestAnimationFrame(()=>{s.style.opacity='1';s.style.transform=`translate(${sx-10+jx}px,${sy-30}px) scale(1)`;setTimeout(()=>{s.style.transform=`translate(${tx-10}px,${ty-10}px) scale(.55)`;s.style.opacity='.15';},70+i*70);});
  setTimeout(()=>s.remove(),70+i*70+820);}
 const g=document.createElement('div');g.className='gainpop';g.textContent='+'+pts;g.style.color='#e0a90f';g.style.left=(sx-16)+'px';g.style.top=(sy-34)+'px';document.body.appendChild(g);setTimeout(()=>g.remove(),1250);
 setTimeout(()=>{hp.classList.add('bump');setTimeout(()=>hp.classList.remove('bump'),500);const pf=document.getElementById('pfill');if(pf){pf.classList.add('flash');setTimeout(()=>pf.classList.remove('flash'),700);}},70+n*70+240);}
function pulseAbil(attr){const el=document.querySelector('.abil[data-a="'+attr+'"]');if(el){el.classList.remove('pulse');void el.offsetWidth;el.classList.add('pulse');setTimeout(()=>el.classList.remove('pulse'),700);}}
function checkLvUp(oldLv){const nl=rankOf(S.lifetime);if(nl.lv>oldLv)setTimeout(()=>showLevelUp(nl.lv),720);}
function showLevelUp(newLv){const rk=RANKS.find(r=>r.lv===newLv);if(!rk)return;document.getElementById('lvHero').innerHTML=avInner(96);document.getElementById('lvBadge').textContent='✦ LEVEL UP · 升级啦 ✦';document.getElementById('lvTitle').textContent='LV.'+newLv+' '+rk.name;
 let top=ATTR_ORDER[0];ATTR_ORDER.forEach(k=>{if((S.abilities[k]||0)>(S.abilities[top]||0))top=k;});
 const lines={wisdom:'变得更聪明了！🧠',body:'变得更强壮了！💪',heart:'变得更有爱心了！❤️',courage:'变得更勇敢了！⚡'};
 document.getElementById('lvSub').textContent='你的小英雄'+lines[top];
 const max=Math.max(10,...ATTR_ORDER.map(k=>S.abilities[k]||0));
 document.getElementById('lvAttrs').innerHTML=ATTR_ORDER.map(k=>{const a=ATTRS[k];const v=S.abilities[k]||0;const pct=Math.round(v/max*100);return `<div class="abil" data-a="${k}"><div class="abil-i" style="background:${a.c}22;border-color:${a.c}66">${a.i}</div><div class="abil-m"><div class="abil-nm">${a.name} <b>${v}</b></div><div class="abil-bar"><div class="abil-fill" style="width:${pct}%;background:${a.c}"></div></div></div></div>`;}).join('');
 document.getElementById('lvOverlay').classList.add('show');sparkle();}
function closeLevelUp(){document.getElementById('lvOverlay').classList.remove('show');}
function sparkle(){const box=document.querySelector('.lvbox');if(!box)return;const r=box.getBoundingClientRect();const es=['✨','⭐','🌟','💫'];for(let i=0;i<16;i++){const s=document.createElement('div');s.className='spark';s.textContent=es[i%4];s.style.left=(r.left+Math.random()*r.width)+'px';s.style.top=(r.top+r.height*0.28+Math.random()*r.height*0.5)+'px';s.style.fontSize=(16+Math.random()*13)+'px';s.style.animationDelay=(Math.random()*0.45)+'s';document.body.appendChild(s);setTimeout(()=>s.remove(),1750);}}

// ===== 家庭共享（家长页按钮） =====
async function adminCreate(){showToast('正在创建...');const id=await createBlob();if(id){P.fid=id;save();startAuto();renderSync();showToast('🎉 家庭码创建成功！');}else showToast('网络问题，请稍后再试');}
async function adminJoin(){const inp=document.getElementById('aJIn');if(!inp||!inp.value.trim()){showToast('请输入家庭码');return;}showToast('正在加入...');const ok=await joinBlob(inp.value.trim());if(ok){P.fid=inp.value.trim();save();startAuto();renderAll();showToast('已加入家庭！积分已同步 ✨');}else showToast('加入失败，请检查家庭码');}
function copyCode(){if(!P||!P.fid)return;navigator.clipboard.writeText(P.fid).then(()=>showToast('家庭码已复制！发给家人吧 📋')).catch(()=>showToast('家庭码：'+P.fid));}
function disconn(){P.fid=null;save();if(autoT){clearInterval(autoT);autoT=null;}renderSync();setSS('');showToast('已断开家庭同步');}

// ===== 通用 =====
function showCC(icon,t,d,fn,color){pendFn=fn;document.getElementById('ccIcon').innerHTML=icon;document.getElementById('ccT').textContent=t;document.getElementById('ccD').textContent=d;const y=document.getElementById('ccY');y.style.background=color||'linear-gradient(180deg,#57aba3,#469389)';document.getElementById('ccCard').style.display='';document.getElementById('ccCard').scrollIntoView({behavior:'smooth',block:'nearest'});}
function hideCC(){document.getElementById('ccCard').style.display='none';pendFn=null;pendRwd=null;}
function doCC(){if(pendFn)pendFn();hideCC();}
let tT;function showToast(m){const e=document.getElementById('toast');e.textContent=m;e.classList.add('show');clearTimeout(tT);tT=setTimeout(()=>e.classList.remove('show'),2600);}
function goTab(n,btn){document.querySelectorAll('.sec').forEach(s=>s.classList.remove('on'));document.querySelectorAll('.tb').forEach(b=>b.classList.remove('on'));document.getElementById('sec-'+n).classList.add('on');btn.classList.add('on');if(n==='rw')renderRw();if(n==='hi'){editingIdx=-1;renderHist();}if(n==='ad'){openDraft();renderQuick();renderSettings();renderSync();renderInstall();}}

window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;renderInstall();});
window.addEventListener('focus',()=>{if(P&&P.fid)pullCloud();});

if(P)showMain();else initSetup();
