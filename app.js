const EY='<circle cx="38" cy="50" r="9" fill="#fff"/><circle cx="62" cy="50" r="9" fill="#fff"/><circle cx="40" cy="52" r="5" fill="#15151f"/><circle cx="64" cy="52" r="5" fill="#15151f"/><circle cx="42" cy="50" r="1.8" fill="#fff"/><circle cx="66" cy="50" r="1.8" fill="#fff"/>';
const SM='<path d="M41,66 Q50,74 59,66" stroke="#15151f" stroke-width="3" fill="none" stroke-linecap="round"/>';
const CK='<circle cx="27" cy="63" r="5" fill="#ff8fa3" opacity=".55"/><circle cx="73" cy="63" r="5" fill="#ff8fa3" opacity=".55"/>';

const CHARS={
spider:`<circle cx="50" cy="50" r="40" fill="#e63946" stroke="#15151f" stroke-width="3"/><g stroke="#a01f2b" stroke-width="1.3" fill="none" opacity=".85"><path d="M50 12 V88"/><path d="M12 50 H88"/><path d="M23 23 L77 77"/><path d="M77 23 L23 77"/><circle cx="50" cy="50" r="13"/><circle cx="50" cy="50" r="26"/></g><path d="M29 38 Q49 39 45 57 Q31 55 29 38Z" fill="#fff" stroke="#15151f" stroke-width="2.5"/><path d="M71 38 Q51 39 55 57 Q69 55 71 38Z" fill="#fff" stroke="#15151f" stroke-width="2.5"/>`,
bat:`<path d="M22 24 L30 4 L42 26Z" fill="#2c3047" stroke="#15151f" stroke-width="2.5"/><path d="M78 24 L70 4 L58 26Z" fill="#2c3047" stroke="#15151f" stroke-width="2.5"/><circle cx="50" cy="50" r="40" fill="#2c3047" stroke="#15151f" stroke-width="3"/><path d="M30 54 Q50 60 70 54 Q70 84 50 86 Q30 84 30 54Z" fill="#ffd9b3"/><path d="M30 44 q9 -6 16 0 q-3 7 -9 6 q-7 -1 -7 -6z" fill="#fff" stroke="#15151f" stroke-width="2"/><path d="M70 44 q-9 -6 -16 0 q3 7 9 6 q7 -1 7 -6z" fill="#fff" stroke="#15151f" stroke-width="2"/><path d="M43 70 Q50 75 57 70" stroke="#7a4a1e" stroke-width="2.5" fill="none" stroke-linecap="round"/>`,
iron:`<rect x="16" y="16" width="68" height="70" rx="22" fill="#e63946" stroke="#15151f" stroke-width="3"/><path d="M30 40 Q50 35 70 40 L65 68 Q50 76 35 68Z" fill="#ffd23f" stroke="#15151f" stroke-width="2.5"/><rect x="36" y="46" width="12" height="6" rx="3" fill="#cdf3ff" stroke="#15151f" stroke-width="1.5"/><rect x="52" y="46" width="12" height="6" rx="3" fill="#cdf3ff" stroke="#15151f" stroke-width="1.5"/><path d="M42 61 H58 M44 66 H56" stroke="#15151f" stroke-width="2" stroke-linecap="round"/>`,
ultra:`<ellipse cx="50" cy="52" rx="33" ry="40" fill="#dfe4ea" stroke="#15151f" stroke-width="3"/><path d="M50 8 L43 32 L57 32Z" fill="#e63946" stroke="#15151f" stroke-width="2.5"/><path d="M28 44 Q40 36 47 50 Q40 58 28 44Z" fill="#ffe14d" stroke="#15151f" stroke-width="2"/><path d="M72 44 Q60 36 53 50 Q60 58 72 44Z" fill="#ffe14d" stroke="#15151f" stroke-width="2"/><path d="M24 58 Q30 64 30 72" stroke="#e63946" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M76 58 Q70 64 70 72" stroke="#e63946" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M45 68 h10" stroke="#888" stroke-width="2.5" stroke-linecap="round"/>`,
captain:`<circle cx="50" cy="50" r="40" fill="#2563eb" stroke="#15151f" stroke-width="3"/><path d="M50 16 l3.2 7 7.8 .7-6 5.2 1.8 7.6L50 39.6l-6.6 3.9 1.8-7.6-6-5.2 7.8-.7z" fill="#fff" stroke="#15151f" stroke-width="1.5"/><path d="M20 32 q-7 7 0 14 M80 32 q7 7 0 14" stroke="#fff" stroke-width="3.5" fill="none" stroke-linecap="round"/>${EY}${SM}`,
hulk:`<path d="M36 16 q14 -8 28 0 q-7 5 -14 5 q-7 0 -14 -5z" fill="#1f2a37"/><circle cx="50" cy="53" r="38" fill="#5fa728" stroke="#15151f" stroke-width="3"/><path d="M30 40 L46 46 M70 40 L54 46" stroke="#3d6600" stroke-width="4.5" stroke-linecap="round"/><circle cx="40" cy="51" r="6" fill="#fff"/><circle cx="60" cy="51" r="6" fill="#fff"/><circle cx="41" cy="52" r="3" fill="#15151f"/><circle cx="61" cy="52" r="3" fill="#15151f"/><path d="M40 67 H60" stroke="#2f5500" stroke-width="3" stroke-linecap="round"/><path d="M45 64 v6 M50 64 v6 M55 64 v6" stroke="#2f5500" stroke-width="1.5"/>`,
flash:`<circle cx="50" cy="50" r="40" fill="#e63946" stroke="#15151f" stroke-width="3"/><path d="M10 42 l13 3 -9 4 11 3 -16 4z" fill="#ffe14d" stroke="#15151f" stroke-width="1.5"/><path d="M90 42 l-13 3 9 4 -11 3 16 4z" fill="#ffe14d" stroke="#15151f" stroke-width="1.5"/>${EY}<path d="M40 67 Q50 72 60 67" stroke="#a01f2b" stroke-width="3" fill="none" stroke-linecap="round"/>`,
lion:`<circle cx="50" cy="52" r="40" fill="#e8871e"/><g fill="#d9760f"><circle cx="22" cy="30" r="10"/><circle cx="78" cy="30" r="10"/><circle cx="13" cy="56" r="10"/><circle cx="87" cy="56" r="10"/><circle cx="30" cy="84" r="10"/><circle cx="70" cy="84" r="10"/><circle cx="50" cy="90" r="10"/><circle cx="50" cy="14" r="10"/></g><circle cx="50" cy="54" r="29" fill="#ffcf8a"/>${EY}<ellipse cx="50" cy="66" rx="14" ry="10" fill="#fff7ec"/><path d="M45 62 h10 l-5 5z" fill="#7a4a1e"/><path d="M50 67 Q44 73 40 69 M50 67 Q56 73 60 69" stroke="#7a4a1e" stroke-width="2.5" fill="none" stroke-linecap="round"/>${CK}`,
dino:`<g fill="#5c8a00"><path d="M35 17 l6 11-13 0z"/><path d="M50 11 l7 13-15 0z"/><path d="M65 17 l6 11-13 0z"/></g><circle cx="50" cy="55" r="38" fill="#7cb518"/><ellipse cx="50" cy="65" rx="19" ry="15" fill="#c5e063"/>${EY}${SM}${CK}<circle cx="27" cy="47" r="3" fill="#5c8a00"/><circle cx="73" cy="49" r="3" fill="#5c8a00"/>`,
astro:`<circle cx="50" cy="50" r="40" fill="#e3eaf2" stroke="#15151f" stroke-width="3"/><circle cx="50" cy="52" r="31" fill="#1b2a4a"/><path d="M33 40 Q44 33 57 38" stroke="#5b7ba6" stroke-width="5" fill="none" stroke-linecap="round" opacity=".5"/><circle cx="42" cy="51" r="6.5" fill="#7ddfff"/><circle cx="58" cy="51" r="6.5" fill="#7ddfff"/><path d="M42 62 Q50 68 58 62" stroke="#7ddfff" stroke-width="3" fill="none" stroke-linecap="round"/><rect x="48" y="8" width="4" height="9" rx="2" fill="#c4cdd8"/><circle cx="50" cy="8" r="5" fill="#ff6b6b"/>`,
elsa:`<circle cx="50" cy="50" r="40" fill="#bfe4f5" stroke="#15151f" stroke-width="3"/><circle cx="50" cy="54" r="26" fill="#ffe8d8"/><path d="M27 46 Q32 26 50 26 Q68 26 73 46 Q60 34 50 37 Q40 34 27 46Z" fill="#f6e7b2" stroke="#15151f" stroke-width="2"/><path d="M50 8 v10 M45 10 l10 6 M55 10 l-10 6" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/>${EY}${SM}${CK}`,
snowman:`<circle cx="50" cy="50" r="40" fill="#ffffff" stroke="#15151f" stroke-width="3"/><path d="M42 8 l3 9 M50 6 v10 M58 8 l-3 9" stroke="#7a5a30" stroke-width="2.5" stroke-linecap="round"/>${EY}<path d="M50 54 l16 4 -16 5z" fill="#f28c28" stroke="#15151f" stroke-width="2"/><path d="M38 70 Q50 77 62 70" stroke="#15151f" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M28 80 Q50 92 72 80 L72 72 Q50 84 28 72Z" fill="#5aa6d6" stroke="#15151f" stroke-width="2.5"/>${CK}`,
fox:`<path d="M18 28 L28 4 L44 22Z" fill="#f3903f" stroke="#15151f" stroke-width="2.5"/><path d="M82 28 L72 4 L56 22Z" fill="#f3903f" stroke="#15151f" stroke-width="2.5"/><path d="M24 24 L29 12 L37 20Z" fill="#5a3413"/><path d="M76 24 L71 12 L63 20Z" fill="#5a3413"/><circle cx="50" cy="54" r="37" fill="#f3903f" stroke="#15151f" stroke-width="3"/><ellipse cx="50" cy="68" rx="18" ry="13" fill="#ffe9cf"/>${EY}<path d="M45 62 h10 l-5 6z" fill="#3a2b20"/><path d="M50 68 Q44 74 40 70 M50 68 Q56 74 60 70" stroke="#3a2b20" stroke-width="2.5" fill="none" stroke-linecap="round"/>`,
rabbit:`<ellipse cx="36" cy="18" rx="9" ry="17" fill="#b9c3d8" stroke="#15151f" stroke-width="2.5"/><ellipse cx="64" cy="18" rx="9" ry="17" fill="#b9c3d8" stroke="#15151f" stroke-width="2.5"/><ellipse cx="36" cy="19" rx="4" ry="11" fill="#f2c7d4"/><ellipse cx="64" cy="19" rx="4" ry="11" fill="#f2c7d4"/><circle cx="50" cy="58" r="34" fill="#b9c3d8" stroke="#15151f" stroke-width="3"/><ellipse cx="50" cy="70" rx="15" ry="10" fill="#f2f4f8"/>${EY}<path d="M46 64 h8 l-4 5z" fill="#e06e95"/><path d="M50 69 Q45 74 41 71 M50 69 Q55 74 59 71" stroke="#5a5a6e" stroke-width="2.2" fill="none" stroke-linecap="round"/>${CK}`,
whale:`<circle cx="50" cy="56" r="37" fill="#6db3e8" stroke="#15151f" stroke-width="3"/><path d="M22 72 Q50 86 78 72 Q64 90 50 90 Q36 90 22 72Z" fill="#d8ecfa"/><path d="M46 14 q-7 -9 -14 -6 M54 14 q7 -9 14 -6" stroke="#6db3e8" stroke-width="3.5" fill="none" stroke-linecap="round"/>${EY}${SM}${CK}`,
octopus:`<circle cx="50" cy="46" r="33" fill="#c48ad2" stroke="#15151f" stroke-width="3"/><g fill="#c48ad2" stroke="#15151f" stroke-width="2.5"><circle cx="26" cy="78" r="9"/><circle cx="50" cy="84" r="9"/><circle cx="74" cy="78" r="9"/></g>${EY}${SM}${CK}`,
bunny:`<ellipse cx="36" cy="16" rx="8" ry="16" fill="#fff" stroke="#15151f" stroke-width="2.5"/><ellipse cx="64" cy="16" rx="8" ry="16" fill="#fff" stroke="#15151f" stroke-width="2.5"/><ellipse cx="36" cy="17" rx="3.5" ry="10" fill="#f7b6c8"/><ellipse cx="64" cy="17" rx="3.5" ry="10" fill="#f7b6c8"/><circle cx="50" cy="56" r="34" fill="#fff" stroke="#15151f" stroke-width="3"/><g fill="#f28cab"><circle cx="72" cy="30" r="4"/><circle cx="79" cy="35" r="4"/><circle cx="72" cy="40" r="4"/><circle cx="66" cy="35" r="4"/><circle cx="72.5" cy="35" r="3" fill="#ffe14d"/></g>${EY}<path d="M46 62 h8 l-4 5z" fill="#e06e95"/>${SM}<circle cx="30" cy="64" r="6" fill="#f7b6c8" opacity=".8"/><circle cx="70" cy="64" r="6" fill="#f7b6c8" opacity=".8"/>`,
panda:`<circle cx="26" cy="20" r="11" fill="#2f2f2f"/><circle cx="74" cy="20" r="11" fill="#2f2f2f"/><circle cx="50" cy="54" r="37" fill="#fff" stroke="#15151f" stroke-width="3"/><ellipse cx="37" cy="49" rx="10" ry="12" fill="#2f2f2f"/><ellipse cx="63" cy="49" rx="10" ry="12" fill="#2f2f2f"/><circle cx="38" cy="49" r="4.5" fill="#fff"/><circle cx="62" cy="49" r="4.5" fill="#fff"/><circle cx="39" cy="50" r="2.2" fill="#15151f"/><circle cx="63" cy="50" r="2.2" fill="#15151f"/><ellipse cx="50" cy="64" rx="6" ry="4.5" fill="#2f2f2f"/><path d="M43 72 Q50 77 57 72" stroke="#2f2f2f" stroke-width="2.5" fill="none" stroke-linecap="round"/>`,
star:`<path d="M50 6 L61 36 L94 38 L68 58 L77 90 L50 71 L23 90 L32 58 L6 38 L39 36 Z" fill="#ffd23f" stroke="#15151f" stroke-width="3" stroke-linejoin="round"/><circle cx="42" cy="48" r="5" fill="#15151f"/><circle cx="58" cy="48" r="5" fill="#15151f"/><circle cx="43.5" cy="46.5" r="1.6" fill="#fff"/><circle cx="59.5" cy="46.5" r="1.6" fill="#fff"/><path d="M42 58 Q50 65 58 58" stroke="#15151f" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="33" cy="55" r="4.5" fill="#f2a854" opacity=".7"/><circle cx="67" cy="55" r="4.5" fill="#f2a854" opacity=".7"/>`
};
// 补充角色
Object.assign(CHARS,{
anna:`<circle cx="50" cy="50" r="40" fill="#c77ba8" stroke="#15151f" stroke-width="3"/><circle cx="50" cy="54" r="26" fill="#ffe8d8"/><path d="M27 46 Q32 26 50 26 Q68 26 73 46 Q60 34 50 37 Q40 34 27 46Z" fill="#b5651d" stroke="#15151f" stroke-width="2"/><ellipse cx="26" cy="58" rx="6" ry="14" fill="#b5651d" stroke="#15151f" stroke-width="2"/><ellipse cx="74" cy="58" rx="6" ry="14" fill="#b5651d" stroke="#15151f" stroke-width="2"/>${EY}<circle cx="41" cy="60" r="1.4" fill="#c9906a"/><circle cx="46" cy="62" r="1.4" fill="#c9906a"/><circle cx="59" cy="60" r="1.4" fill="#c9906a"/>${SM}${CK}`,
sven:`<path d="M22 20 q-12 -14 -4 -18 q3 6 10 6 q-2 -8 6 -6 q4 8 -2 18Z" fill="#8a6242" stroke="#15151f" stroke-width="2"/><path d="M78 20 q12 -14 4 -18 q-3 6 -10 6 q2 -8 -6 -6 q-4 8 2 18Z" fill="#8a6242" stroke="#15151f" stroke-width="2"/><circle cx="50" cy="55" r="37" fill="#a9744f" stroke="#15151f" stroke-width="3"/><ellipse cx="50" cy="68" rx="19" ry="14" fill="#c9a27c"/>${EY}<ellipse cx="50" cy="65" rx="8" ry="6" fill="#5a3a24"/><path d="M42 74 Q50 79 58 74" stroke="#5a3a24" stroke-width="2.5" fill="none" stroke-linecap="round"/>`,
penguin:`<circle cx="50" cy="52" r="39" fill="#2f3542" stroke="#15151f" stroke-width="3"/><ellipse cx="50" cy="58" rx="27" ry="28" fill="#fff"/>${EY}<path d="M44 58 L56 58 L50 67Z" fill="#f2a33c" stroke="#15151f" stroke-width="2"/>${CK}<path d="M8 60 q8 12 16 8 M92 60 q-8 12 -16 8" stroke="#15151f" stroke-width="2.5" fill="#2f3542"/>`,
sloth:`<circle cx="50" cy="52" r="39" fill="#cbb69b" stroke="#15151f" stroke-width="3"/><ellipse cx="50" cy="60" rx="24" ry="20" fill="#e8dcc8"/><ellipse cx="37" cy="48" rx="9" ry="13" fill="#8a6f52" transform="rotate(-18 37 48)"/><ellipse cx="63" cy="48" rx="9" ry="13" fill="#8a6f52" transform="rotate(18 63 48)"/><circle cx="38" cy="50" r="4.5" fill="#15151f"/><circle cx="62" cy="50" r="4.5" fill="#15151f"/><circle cx="39.5" cy="48.5" r="1.5" fill="#fff"/><circle cx="63.5" cy="48.5" r="1.5" fill="#fff"/><ellipse cx="50" cy="63" rx="4.5" ry="3.5" fill="#5a4a38"/><path d="M43 70 Q50 76 57 70" stroke="#5a4a38" stroke-width="2.5" fill="none" stroke-linecap="round"/>`,
tiger:`<path d="M22 32 L33 13 L41 35Z" fill="#f3722c" stroke="#15151f" stroke-width="2.5"/><path d="M78 32 L67 13 L59 35Z" fill="#f3722c" stroke="#15151f" stroke-width="2.5"/><circle cx="50" cy="55" r="37" fill="#f4a259" stroke="#15151f" stroke-width="3"/><g stroke="#7a4a1e" stroke-width="3.5" stroke-linecap="round"><path d="M50 22 v9"/><path d="M39 24 l-3 8"/><path d="M61 24 l3 8"/><path d="M19 52 h9"/><path d="M72 52 h9"/></g>${EY}<ellipse cx="50" cy="66" rx="15" ry="11" fill="#fff3e0"/><path d="M45 62 h10 l-5 5z" fill="#d1495b"/><path d="M50 67 Q44 73 40 69 M50 67 Q56 73 60 69" stroke="#7a4a1e" stroke-width="2.5" fill="none" stroke-linecap="round"/>${CK}`,
chase:`<ellipse cx="20" cy="50" rx="9" ry="17" fill="#7a5230" stroke="#15151f" stroke-width="2.5"/><ellipse cx="80" cy="50" rx="9" ry="17" fill="#7a5230" stroke="#15151f" stroke-width="2.5"/><circle cx="50" cy="54" r="36" fill="#b58a5c" stroke="#15151f" stroke-width="3"/><path d="M16 40 Q50 8 84 40 Q66 32 50 32 Q34 32 16 40Z" fill="#2f6bb0" stroke="#15151f" stroke-width="2.5"/><rect x="40" y="16" width="20" height="7" rx="3" fill="#ffd23f" stroke="#15151f" stroke-width="1.5"/>${EY}<ellipse cx="50" cy="68" rx="16" ry="12" fill="#e8d4b8"/><ellipse cx="50" cy="63" rx="5.5" ry="4.5" fill="#3a2b20"/><path d="M43 73 Q50 78 57 73" stroke="#3a2b20" stroke-width="2.5" fill="none" stroke-linecap="round"/>`,
marshall:`<ellipse cx="20" cy="50" rx="9" ry="17" fill="#2f2f2f" stroke="#15151f" stroke-width="2.5"/><ellipse cx="80" cy="50" rx="9" ry="17" fill="#fff" stroke="#15151f" stroke-width="2.5"/><circle cx="50" cy="54" r="36" fill="#fff" stroke="#15151f" stroke-width="3"/><circle cx="32" cy="44" r="4" fill="#2f2f2f"/><circle cx="68" cy="48" r="3.4" fill="#2f2f2f"/><circle cx="62" cy="38" r="2.6" fill="#2f2f2f"/><path d="M16 40 Q50 8 84 40 Q66 32 50 32 Q34 32 16 40Z" fill="#e0393f" stroke="#15151f" stroke-width="2.5"/><rect x="43" y="14" width="14" height="10" rx="3" fill="#ffe14d" stroke="#15151f" stroke-width="1.5"/>${EY}<ellipse cx="50" cy="68" rx="16" ry="12" fill="#f6ece0"/><ellipse cx="50" cy="63" rx="5.5" ry="4.5" fill="#3a2b20"/><path d="M43 73 Q50 78 57 73" stroke="#3a2b20" stroke-width="2.5" fill="none" stroke-linecap="round"/>${CK}`,
skye:`<ellipse cx="20" cy="52" rx="9" ry="16" fill="#d9a878" stroke="#15151f" stroke-width="2.5"/><ellipse cx="80" cy="52" rx="9" ry="16" fill="#d9a878" stroke="#15151f" stroke-width="2.5"/><circle cx="50" cy="54" r="36" fill="#e8c39a" stroke="#15151f" stroke-width="3"/><path d="M16 40 Q50 8 84 40 Q66 32 50 32 Q34 32 16 40Z" fill="#e56a9a" stroke="#15151f" stroke-width="2.5"/><circle cx="40" cy="24" r="6.5" fill="#cdeaff" stroke="#15151f" stroke-width="2"/><circle cx="60" cy="24" r="6.5" fill="#cdeaff" stroke="#15151f" stroke-width="2"/><path d="M46.5 24 h7" stroke="#15151f" stroke-width="2"/>${EY}<ellipse cx="50" cy="68" rx="15" ry="11" fill="#f8e8d4"/><ellipse cx="50" cy="63" rx="5" ry="4" fill="#3a2b20"/><path d="M43 72 Q50 77 57 72" stroke="#3a2b20" stroke-width="2.5" fill="none" stroke-linecap="round"/>${CK}`,
rubble:`<ellipse cx="22" cy="46" rx="9" ry="14" fill="#b07f42" stroke="#15151f" stroke-width="2.5"/><ellipse cx="78" cy="46" rx="9" ry="14" fill="#b07f42" stroke="#15151f" stroke-width="2.5"/><circle cx="50" cy="55" r="37" fill="#d9a05c" stroke="#15151f" stroke-width="3"/><path d="M15 41 Q50 6 85 41 Q66 32 50 32 Q34 32 15 41Z" fill="#ffd23f" stroke="#15151f" stroke-width="2.5"/><path d="M20 40 Q50 30 80 40 L80 45 Q50 36 20 45Z" fill="#e8b52e" stroke="#15151f" stroke-width="1.5"/>${EY}<ellipse cx="50" cy="69" rx="17" ry="12" fill="#f2dfc2"/><ellipse cx="50" cy="64" rx="6" ry="4.5" fill="#3a2b20"/><path d="M42 74 Q50 79 58 74" stroke="#3a2b20" stroke-width="2.5" fill="none" stroke-linecap="round"/>`,
zuma:`<ellipse cx="20" cy="50" rx="9" ry="17" fill="#5a3a24" stroke="#15151f" stroke-width="2.5"/><ellipse cx="80" cy="50" rx="9" ry="17" fill="#5a3a24" stroke="#15151f" stroke-width="2.5"/><circle cx="50" cy="54" r="36" fill="#8a5a3a" stroke="#15151f" stroke-width="3"/><path d="M16 40 Q50 8 84 40 Q66 32 50 32 Q34 32 16 40Z" fill="#f2913d" stroke="#15151f" stroke-width="2.5"/><path d="M40 18 a10 10 0 0 1 20 0" fill="none" stroke="#15151f" stroke-width="2"/>${EY}<ellipse cx="50" cy="68" rx="16" ry="12" fill="#c99c72"/><ellipse cx="50" cy="63" rx="5.5" ry="4.5" fill="#3a2b20"/><path d="M43 73 Q50 78 57 73" stroke="#3a2b20" stroke-width="2.5" fill="none" stroke-linecap="round"/>`
});
const AV_LABELS={spider:'蜘蛛侠',bat:'蝙蝠侠',iron:'钢铁侠',ultra:'奥特曼',captain:'美队',hulk:'绿巨人',flash:'闪电侠',lion:'狮子市长',dino:'小恐龙',astro:'小宇航员',elsa:'冰雪公主',anna:'阳光公主',snowman:'小雪人',sven:'小驯鹿',penguin:'小企鹅',fox:'狐狸尼克',rabbit:'兔子朱迪',sloth:'树懒闪电',tiger:'小老虎',whale:'小鲸鱼',octopus:'小章鱼',bunny:'樱花兔',panda:'小熊猫',star:'小星星',chase:'警犬阿奇',marshall:'消防毛毛',skye:'飞行天天',rubble:'工程小砾',zuma:'水上路马'};
const THEME_AVS={
 frozen:['elsa','anna','snowman','sven','penguin'],
 zootopia:['fox','rabbit','sloth','lion','tiger'],
 pawpatrol:['chase','marshall','skye','rubble','zuma'],
 hero:['spider','bat','iron','ultra','captain','hulk','flash'],
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
function avList(){const th=(typeof S!=='undefined'&&S.cfg&&S.cfg.profile&&S.cfg.profile.theme)||'hero';const main=(THEME_AVS[th]||THEME_AVS.hero).map(id=>({id,l:AV_LABELS[id]||id,themed:true}));const used=new Set(main.map(x=>x.id));const rest=Object.keys(CHARS).filter(id=>!used.has(id)).map(id=>({id,l:AV_LABELS[id]||id}));return main.concat(rest);}

const RANKS=[
 {lv:1,name:'见习英雄',need:0},
 {lv:2,name:'小小英雄',need:30},
 {lv:3,name:'城市卫士',need:80},
 {lv:4,name:'超级英雄',need:150},
 {lv:5,name:'传奇英雄',need:300},
 {lv:6,name:'宇宙之光',need:500},
];

// 能力（养成点）——四个成长维度，颜色固定，名称/图标家长可自定义
const ATTRS={
 courage:{c:'#3fb3a6'},
 wisdom:{c:'#77a8cf'},
 fitness:{c:'#d0ac54'},
 social:{c:'#d98aa0'},
};
const ATTR_ORDER=['courage','wisdom','fitness','social'];
const DEFAULT_ATTRS_META={
 courage:{name:'勇气',i:'⚡'},
 wisdom:{name:'智慧',i:'🧠'},
 fitness:{name:'体能',i:'🏃'},
 social:{name:'社交',i:'🤝'},
};
function attrMeta(k){return (S.cfg&&S.cfg.attrs&&S.cfg.attrs[k])||DEFAULT_ATTRS_META[k];}
function attrName(k){return attrMeta(k).name;}
function attrIcon(k){return attrMeta(k).i;}

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
 {i:'🏃',label:'户外运动',p:4,attr:'fitness'},
 {i:'🤝',label:'和小朋友合作',p:3,attr:'social'},
 {i:'🙋',label:'勇敢举手',p:3,attr:'courage'},
];
const DEFAULT_QADD=[
 {i:'🍚',label:'乖乖吃饭',p:3,attr:'fitness'},
 {i:'😴',label:'早睡早起',p:4,attr:'fitness'},
 {i:'🧹',label:'帮做家务',p:5,attr:'social'},
 {i:'🧸',label:'分享玩具',p:4,attr:'social'},
 {i:'💪',label:'勇敢尝试',p:4,attr:'courage'},
 {i:'📖',label:'主动阅读',p:4,attr:'wisdom'},
];
const DEFAULT_QSUB=[
 {i:'🥊',label:'打架斗殴',p:5},
 {i:'🤥',label:'撒谎骗人',p:4},
];
// 不同教育阶段的快捷加分预设（覆盖四个维度）
const QADD_PRESETS={
 '幼儿·生活自理':[
  {i:'🍚',label:'乖乖吃饭',p:3,attr:'fitness'},{i:'😴',label:'早睡早起',p:4,attr:'fitness'},
  {i:'🦷',label:'认真刷牙',p:2,attr:'fitness'},{i:'👕',label:'自己穿衣',p:3,attr:'courage'},
  {i:'🧸',label:'收拾玩具',p:3,attr:'social'},{i:'🚽',label:'自己如厕',p:2,attr:'courage'},
 ],
 '幼儿·勇敢社交':[
  {i:'🙋',label:'主动打招呼',p:3,attr:'courage'},{i:'🤝',label:'和小朋友合作',p:3,attr:'social'},
  {i:'🧸',label:'分享玩具',p:4,attr:'social'},{i:'🫂',label:'安慰他人',p:4,attr:'social'},
  {i:'💪',label:'勇敢尝试',p:4,attr:'courage'},{i:'🗣️',label:'大胆表达',p:3,attr:'courage'},
 ],
 '学龄·学习探索':[
  {i:'📚',label:'认真听课',p:3,attr:'wisdom'},{i:'✏️',label:'完成作业',p:5,attr:'wisdom'},
  {i:'📖',label:'主动阅读',p:4,attr:'wisdom'},{i:'🎨',label:'认真画画',p:3,attr:'wisdom'},
  {i:'🏃',label:'户外运动',p:4,attr:'fitness'},{i:'🧹',label:'帮做家务',p:5,attr:'social'},
 ],
};
const QSUB_PRESETS={
 '严重行为':[{i:'🥊',label:'打架斗殴',p:5},{i:'🤥',label:'撒谎骗人',p:4}],
 '安全红线':[{i:'🥊',label:'打人',p:5},{i:'⚠️',label:'做危险的事',p:5},{i:'🤥',label:'撒谎骗人',p:4}],
};
const API='/api/family';
const THEMES={
 frozen:{name:'❄️ 冰雪世界',hero:'linear-gradient(160deg,#8ed3f0 0%,#a7c2ee 55%,#c7b6e6 100%)',teal:'#5aa6d6',tealD:'#3f83b8',acc:'linear-gradient(180deg,#79bce8,#5497cc)',go:'linear-gradient(180deg,#8fc6e8,#5f9fd0)',bg:'#eef3f8',gold:'#8fa8cc'},
 zootopia:{name:'🦊 动物城',hero:'linear-gradient(160deg,#ffb45e 0%,#ff9f72 52%,#ffd670 100%)',teal:'#e08a3c',tealD:'#bd6c1f',acc:'linear-gradient(180deg,#f2a854,#dd8830)',go:'linear-gradient(180deg,#f2b866,#e09640)',bg:'#f8f1e2',gold:'#d99a3e'},
 pawpatrol:{name:'🐾 汪汪队',hero:'linear-gradient(160deg,#5aa9e6 0%,#7fc8f8 52%,#ffd166 100%)',teal:'#4a9ede',tealD:'#3480c0',acc:'linear-gradient(180deg,#5cb0e8,#3a8fd0)',go:'linear-gradient(180deg,#f2c94c,#e0a92e)',bg:'#eef4f9',gold:'#e0a92e'},
 hero:{name:'🦸 超级英雄',hero:'linear-gradient(160deg,#ff8a70 0%,#e6607a 55%,#b45ac0 100%)',teal:'#e05a6a',tealD:'#c04252',acc:'linear-gradient(180deg,#ef7080,#d84f60)',go:'linear-gradient(180deg,#f2a854,#dd8830)',bg:'#f9efec',gold:'#d0854e'},
};

const clone=o=>JSON.parse(JSON.stringify(o));
const cloneArr=a=>a.map(x=>({...x}));
function clampInt(v,a,b){let n=parseInt(v);if(isNaN(n))n=a;return Math.max(a,Math.min(b,n));}
function esc(s){return (s==null?'':''+s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;');}

let P=JSON.parse(localStorage.getItem('kp4_P')||'null');
let S=JSON.parse(localStorage.getItem('kp4_S')||'null')||{points:0,lifetime:0,streak:0,lastCI:null,hist:[]};
if(S.lifetime===undefined)S.lifetime=S.points||0;
function ensureCfg(){
 if(typeof S.points!=='number')S.points=0;
 if(typeof S.lifetime!=='number')S.lifetime=S.points||0;
 if(typeof S.streak!=='number')S.streak=0;
 if(!Array.isArray(S.hist))S.hist=[];
 if(!S.cfg)S.cfg={};
 if(S.cfg.checkin===undefined)S.cfg.checkin=10;
 if(!Array.isArray(S.cfg.rewards)||!S.cfg.rewards.length)S.cfg.rewards=cloneArr(DEFAULT_RWS);
 if(!Array.isArray(S.cfg.tasks)||!S.cfg.tasks.length)S.cfg.tasks=cloneArr(DEFAULT_TASKS);
 if(!Array.isArray(S.cfg.qadd)||!S.cfg.qadd.length)S.cfg.qadd=cloneArr(DEFAULT_QADD);
 if(!Array.isArray(S.cfg.qsub))S.cfg.qsub=cloneArr(DEFAULT_QSUB);
 DEFAULT_RWS.forEach(d=>{if(!S.cfg.rewards.find(r=>r.id===d.id))S.cfg.rewards.push({...d});});
 S.cfg.rewards.forEach(r=>{const d=DEFAULT_RWS.find(x=>x.id===r.id);if(d){r.i=d.i;r.h=d.h;}});
 // 成长维度名称/图标（家长可自定义）
 if(!S.cfg.attrs||typeof S.cfg.attrs!=='object')S.cfg.attrs=clone(DEFAULT_ATTRS_META);
 ATTR_ORDER.forEach(k=>{if(!S.cfg.attrs[k])S.cfg.attrs[k]={...DEFAULT_ATTRS_META[k]};});
 // 旧维度键迁移：体魄body→体能fitness，爱心heart→社交social
 if(!S.abilities||typeof S.abilities!=='object')S.abilities={};
 if(S.abilities.body!==undefined){S.abilities.fitness=(S.abilities.fitness||0)+S.abilities.body;delete S.abilities.body;}
 if(S.abilities.heart!==undefined){S.abilities.social=(S.abilities.social||0)+S.abilities.heart;delete S.abilities.heart;}
 ATTR_ORDER.forEach(k=>{if(typeof S.abilities[k]!=='number')S.abilities[k]=0;});
 // 旧版把名字/头像存在 P 里，迁移到共享档案 S.cfg.profile，方便家人加入后自动同步
 if(!S.cfg.profile && typeof P==='object' && P && (P.name||P.avId))S.cfg.profile={name:P.name||'小英雄',avId:P.avId||'',e:P.e||'',theme:'hero'};
 if(S.cfg.profile && (!S.cfg.profile.theme || !THEMES[S.cfg.profile.theme]))S.cfg.profile.theme='hero';
 (S.hist||[]).forEach(h=>{if(h.attr==='body')h.attr='fitness';else if(h.attr==='heart')h.attr='social';});
 [S.cfg.tasks,S.cfg.qadd].forEach(arr=>arr&&arr.forEach(x=>{if(x.attr==='body')x.attr='fitness';else if(x.attr==='heart')x.attr='social';}));
}
ensureCfg();
function getRewards(){return S.cfg.rewards;}
let sStep=1,sAv='spider',sCust='',sName='',pendFn=null,pendRwd=null,autoT=null,deferredPrompt=null;
let draft=null,dirty=false,editingIdx=-1;

function save(){localStorage.setItem('kp4_P',JSON.stringify(P));localStorage.setItem('kp4_S',JSON.stringify(S));}
function grad(g){return `linear-gradient(150deg,${g[0]},${g[1]})`;}
function rankOf(lt){let r=RANKS[0];for(const x of RANKS)if(lt>=x.need)r=x;return r;}
function nextRank(lv){return RANKS.find(x=>x.lv===lv+1)||null;}

async function pushCloud(){if(!P||!P.fid)return;setSS('loading');try{const r=await fetch(`${API}/${P.fid}`,{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify({S,v:1})});setSS(r.ok?'ok':'err');}catch(e){setSS('err');}}
async function pullCloud(){if(!P||!P.fid)return;
 // 家长正在编辑设置/记录时不覆盖，避免打断输入
 if(dirty||editingIdx>=0){return;}
 setSS('loading');try{const r=await fetch(`${API}/${P.fid}`);if(!r.ok)throw 0;const d=await r.json();
 if(d&&d.S){const incoming=JSON.stringify(d.S);if(incoming!==JSON.stringify(S)){S=d.S;if(S.lifetime===undefined)S.lifetime=S.points||0;ensureCfg();draft=null;save();applyTheme();renderAll();}}
 setSS('ok');}catch(e){setSS('err');}}
// 静默拉取最新数据（写入前调用，防止两个家长互相覆盖）
async function pullQuiet(){if(!P||!P.fid)return;try{const r=await fetch(`${API}/${P.fid}`);if(r.ok){const d=await r.json();if(d&&d.S){S=d.S;if(S.lifetime===undefined)S.lifetime=S.points||0;ensureCfg();}}}catch(e){}}
async function createBlob(){try{const r=await fetch(API,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({S,v:1})});if(!r.ok)return null;const d=await r.json();return d.id||null;}catch(e){return null;}}
async function joinBlob(id){try{const r=await fetch(`${API}/${id}`);if(!r.ok)return false;const d=await r.json();if(d&&d.S){S=d.S;if(S.lifetime===undefined)S.lifetime=S.points||0;ensureCfg();draft=null;save();applyTheme();}return true;}catch(e){return false;}}
function applyTheme(){const key=(S.cfg&&S.cfg.profile&&S.cfg.profile.theme)||'hero';const t=THEMES[key]||THEMES.hero;const r=document.documentElement.style;r.setProperty('--hero-grad',t.hero);r.setProperty('--teal',t.teal);r.setProperty('--teal-d',t.tealD);r.setProperty('--accent-grad',t.acc);r.setProperty('--go-grad',t.go);r.setProperty('--bg',t.bg);r.setProperty('--gold',t.gold);}
function setSS(s){const dot=document.getElementById('sdi'),txt=document.getElementById('stxt');if(!dot)return;dot.className='sdi'+(s==='ok'?' ok':s==='err'?' err':s==='loading'?' spin':'');txt.textContent=s==='ok'?'已同步':s==='err'?'同步失败':s==='loading'?'同步中':'';}
function startAuto(){if(autoT)clearInterval(autoT);if(P&&P.fid)autoT=setInterval(pullCloud,8000);}

// ===== 设置向导 =====
function initSetup(){document.getElementById('SW').style.display='';document.getElementById('MW').style.display='none';renderStep();}
function renderStep(){document.getElementById('sdots').innerHTML=[1,2,3].map(i=>`<div class="sd${sStep===i?' on':''}"></div>`).join('');if(sStep===1)rS1();else if(sStep===2)rS2();else rS3();}
function rS1(){document.getElementById('scard').innerHTML=`<div class="st">选择你的英雄形象</div><div class="ss">你最喜欢哪个超级英雄？</div><div class="av-grid" id="s1Grid"></div><div class="cust-row"><div class="cust-prev" id="s1Prev">${sCust||charSvg(sAv,40)}</div><input class="ai" style="flex:1;font-size:18px" placeholder="或输入喜欢的表情 🦸" id="s1CI" maxlength="2" value="${sCust}" oninput="onCI(this.value)"/></div><button class="nxt" onclick="sStep=2;renderStep()">下一步 →</button>`;bindGrid('s1Grid',sAv,av=>{sAv=av.id;sCust='';const p=document.getElementById('s1Prev');if(p)p.innerHTML=charSvg(av.id,40);const i=document.getElementById('s1CI');if(i)i.value='';});}
function onCI(v){sCust=v;sAv='';const p=document.getElementById('s1Prev');if(p)p.innerHTML=`<span style="font-size:28px">${esc(v)||'?'}</span>`;document.querySelectorAll('#s1Grid .av-opt').forEach(e=>e.classList.remove('sel'));}
function rS2(){document.getElementById('scard').innerHTML=`<div class="st">你叫什么名字？</div><div class="ss">爸爸妈妈是怎么叫你的？</div><input class="big-in" id="nmIn" placeholder="输入名字" maxlength="10" value="${esc(sName)}" oninput="sName=this.value;document.getElementById('nmBtn').disabled=!this.value.trim()"/><button class="nxt" id="nmBtn" onclick="sStep=3;renderStep()" ${sName.trim()?'':'disabled'}>下一步 →</button><span class="skip" onclick="sStep=1;renderStep()">← 上一步</span>`;}
function rS3(){document.getElementById('scard').innerHTML=`<div class="st">家庭共享设置</div><div class="ss">爸爸妈妈爷爷奶奶都能看到积分，大家都能帮忙加分！</div><div class="fam-opts"><div class="fam-opt" onclick="doCreate()"><span style="font-size:24px">🆕</span><div><strong>创建家庭积分本</strong><span>获得家庭码，分享给家人</span></div></div><div class="fam-opt" onclick="toggleJoin()"><span style="font-size:24px">🔗</span><div><strong>加入已有积分本</strong><span>输入家人分享的家庭码</span></div></div></div><div id="jArea" style="display:none"><input class="ji" id="jIn" placeholder="粘贴家庭码"/><button class="nxt" onclick="doJoin()">加入家庭 →</button></div><span class="skip" onclick="finish()">跳过，先单独使用</span><span class="skip" onclick="sStep=2;renderStep()">← 上一步</span>`;}
function toggleJoin(){const a=document.getElementById('jArea');if(a)a.style.display=a.style.display==='none'?'':'none';}
async function doCreate(){buildP();save();showToast('正在创建...');const id=await createBlob();if(id){P.fid=id;save();showMain();showToast('🎉 创建成功！家庭码在家长里');}else{showMain();showToast('❌ '+apiUnavailableMsg()+'（已先用本地模式）');}}
async function doJoin(){const inp=document.getElementById('jIn');if(!inp||!inp.value.trim()){showToast('请输入家庭码');return;}buildP();const ok=await joinBlob(inp.value.trim());if(ok){P.fid=inp.value.trim();save();showMain();}else showToast('加入失败，请检查家庭码');}
function finish(){buildP();save();showMain();}
function buildP(){ensureCfg();const keepTheme=(S.cfg.profile&&S.cfg.profile.theme)||'hero';S.cfg.profile={name:sName.trim()||'小英雄',avId:(sCust||!CHARS[sAv])?'':sAv,e:sCust,theme:keepTheme};if(!P)P={fid:null};if(P.fid===undefined)P.fid=null;save();}
function bindGrid(id,sel,cb){const g=document.getElementById(id);if(!g)return;const LIST=avList();g.innerHTML=LIST.map((av,i)=>`<div class="av-opt${av.id===sel?' sel':''}${av.themed?' themed':''}" data-i="${i}">${charSvg(av.id,46)}<span class="av-lbl">${av.themed?'⭐':''}${av.l}</span></div>`).join('');g.querySelectorAll('.av-opt').forEach(el=>el.addEventListener('click',()=>{g.querySelectorAll('.av-opt').forEach(e=>e.classList.remove('sel'));el.classList.add('sel');cb(LIST[el.dataset.i]);}));}

function showMain(){applyTheme();document.getElementById('SW').style.display='none';document.getElementById('MW').style.display='';renderAll();startAuto();setupObserver();if(P&&P.fid)pullCloud();}
let obsBound=false;
function updateMiniBar(){const hdr=document.getElementById('hdr'),mb=document.getElementById('miniBar');if(!hdr||!mb)return;const b=hdr.getBoundingClientRect().bottom;mb.classList.toggle('show',b<40);}
function setupObserver(){updateMiniBar();if(obsBound)return;obsBound=true;window.addEventListener('scroll',updateMiniBar,{passive:true});window.addEventListener('resize',updateMiniBar,{passive:true});}

// ===== 渲染 =====
function prof(){return (S.cfg&&S.cfg.profile)||{name:'小英雄',avId:'spider',e:'',theme:'hero'};}
function avInner(sz){const pr=prof();return (pr.avId&&CHARS[pr.avId])?charSvg(pr.avId,sz):`<span style="font-size:${Math.round(sz*0.55)}px">${esc(pr.e)||'🦸'}</span>`;}
function renderAll(){renderHdr();renderCi();renderTasks();renderAbilities();renderRw();renderHist();renderQuick();renderSync();renderInstall();renderSettings();}
function renderHdr(){const hdr=document.getElementById('hdr');if(!hdr)return;const rk=rankOf(S.lifetime);const av=document.getElementById('hav');av.innerHTML=avInner(80);av.style.boxShadow=`0 6px 16px rgba(0,0,0,.15),0 0 ${6+rk.lv*4}px rgba(255,240,190,${.15+rk.lv*.06})`;document.getElementById('hnm').textContent=(prof().name||'小英雄');document.getElementById('hpts').textContent=S.points;
 const nx=nextRank(rk.lv);let pct=100;
 document.getElementById('rchip').textContent='LV.'+rk.lv+' '+rk.name;
 if(nx){const span=nx.need-rk.need,done=S.lifetime-rk.need;pct=Math.max(0,Math.min(100,Math.round(done/span*100)));document.getElementById('pfill').style.width=pct+'%';document.getElementById('ptxt').textContent=`再得 ${nx.need-S.lifetime} 颗 ⭐ 升到 LV.${nx.lv} ${nx.name}`;}
 else{document.getElementById('pfill').style.width='100%';document.getElementById('ptxt').textContent='🏆 已是最高等级！宇宙之光！';}
 const mbAv=document.getElementById('mbAv');if(mbAv){mbAv.innerHTML=avInner(30);document.getElementById('mbLv').textContent='LV.'+rk.lv;document.getElementById('mpts').textContent=S.points;document.getElementById('mfill').style.width=pct+'%';}
}
function renderCi(){const btn=document.getElementById('ciBtn');if(!btn)return;const done=S.lastCI===td();const card=btn.closest('.ci-card');if(card)card.classList.toggle('done',done);btn.disabled=done;btn.textContent=done?'今天已经打卡了！':'我今天上学啦！';document.getElementById('ciM').innerHTML=done?'':avInner(58);document.getElementById('ciT').textContent=done?'✅ 今天已打卡！明天继续加油':'今天去上学了吗？';document.getElementById('ciS').innerHTML=done?'':`按下按钮，获得 <strong>${S.cfg.checkin} 颗能量星</strong>！`;}
function renderTasks(){const el=document.getElementById('tGrid');if(!el)return;const arr=S.cfg.tasks;el.innerHTML=arr.map((t,i)=>`<button class="taskbtn" data-i="${i}"><span class="tb-emo">${t.i}</span><span class="tb-tx"><span class="tb-nm">${esc(t.label)}</span><span class="tb-pt">+${t.p} ⭐</span></span></button>`).join('');el.querySelectorAll('.taskbtn').forEach(b=>b.addEventListener('click',()=>{const t=arr[b.dataset.i];commit(t.label,t.p,'⭐',t.attr,b);showToast('⭐ +'+t.p+' '+t.label);}));}
function renderAbilities(){const el=document.getElementById('abilBody');if(!el)return;const max=Math.max(10,...ATTR_ORDER.map(k=>S.abilities[k]||0));el.innerHTML=ATTR_ORDER.map(k=>{const a=ATTRS[k];const v=S.abilities[k]||0;const pct=Math.round(v/max*100);return `<div class="abil" data-a="${k}"><div class="abil-i" style="background:${a.c}22;border-color:${a.c}66">${attrIcon(k)}</div><div class="abil-m"><div class="abil-nm">${esc(attrName(k))} <b>${v}</b></div><div class="abil-bar"><div class="abil-fill" style="width:${pct}%;background:${a.c}"></div></div></div></div>`;}).join('');}
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
function renderSync(){const el=document.getElementById('syncBody');if(!el||!P)return;if(!P.fid){el.innerHTML=`<p style="font-size:13px;color:var(--ink-soft);margin-bottom:12px">创建家庭码后发给家人，所有人都能看到和调整积分。</p><button class="nxt" onclick="adminCreate()">🆕 创建家庭积分本</button><div style="margin-top:10px;display:flex;gap:8px"><input class="ai" id="aJIn" placeholder="或粘贴家庭码加入" style="font-family:var(--font-mono)"/><button class="ab ab-a" onclick="adminJoin()">加入</button></div>`;}else{el.innerHTML=`<div style="display:flex;align-items:center;gap:7px;margin-bottom:10px"><div class="sdi ok"></div><span style="font-size:14px">已连接家庭积分本</span></div><p style="font-size:12px;color:var(--ink-soft);margin-bottom:4px">家庭码（点击复制）</p><div class="sc-box" style="font-size:22px;letter-spacing:4px;text-align:center;font-weight:700;font-family:var(--font-num)" onclick="copyCode()">${P.fid}</div><div id="qrBox" style="text-align:center;margin:12px 0 4px"></div><p style="font-size:12px;color:var(--ink-soft);text-align:center;margin-bottom:10px">让家人用<b>微信扫一扫</b>这个二维码，即可自动加入</p><button class="nxt" onclick="shareLink()">📲 或复制链接发到微信</button><p style="font-size:12px;color:var(--ink-soft);margin:10px 0 8px;line-height:1.7">家人扫码或点开链接后会自动加入这个积分本；也可以在「家长」里手动输入家庭码。之后谁给宝贝加分/兑换，全家实时同步。</p><div class="s-row"><button class="s-btn" onclick="pullCloud().then(()=>showToast('已同步最新积分 ✨'))">🔄 立即同步</button><button class="s-btn" style="color:var(--danger)" onclick="disconn()">断开连接</button></div>`;renderQR();}}
function renderQR(){const box=document.getElementById('qrBox');if(!box||!P||!P.fid||typeof qrcode==='undefined')return;try{const link=location.origin+'/?f='+P.fid;const qr=qrcode(0,'M');qr.addData(link);qr.make();box.innerHTML=`<div style="display:inline-block;background:#fff;padding:10px;border-radius:14px;border:1px solid var(--line2)">${qr.createSvgTag({cellSize:4,margin:0})}</div>`;}catch(e){box.innerHTML='';}}
function shareLink(){if(!P||!P.fid)return;const link=location.origin+'/?f='+P.fid;const msg=`【${prof().name||'小英雄'}的上学积分】点开链接就能一起给宝贝加分啦～\n${link}\n（家庭码：${P.fid}）`;const done=()=>showToast('已复制！去微信粘贴发给家人 📋');if(navigator.share){navigator.share({title:'小英雄上学积分',text:msg,url:link}).then(()=>{}).catch(()=>copyText(msg,done));}else copyText(msg,done);}
function copyText(t,cb){if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(t).then(cb).catch(()=>fallbackCopy(t,cb));else fallbackCopy(t,cb);}
function fallbackCopy(t,cb){const ta=document.createElement('textarea');ta.value=t;ta.style.position='fixed';ta.style.opacity='0';document.body.appendChild(ta);ta.select();try{document.execCommand('copy');cb();}catch(e){showToast('请手动复制链接');}document.body.removeChild(ta);}
function renderInstall(){const el=document.getElementById('installBody');if(!el)return;const standalone=window.matchMedia('(display-mode: standalone)').matches||window.navigator.standalone;if(standalone){el.innerHTML='<div style="font-size:13px;color:var(--sage-d)">✅ 已安装到桌面，正以 app 模式运行！</div>';return;}const isIOS=/iphone|ipad|ipod/i.test(navigator.userAgent);let h='';if(deferredPrompt){h+=`<button class="nxt" onclick="doInstall()">📲 一键安装到桌面</button>`;}if(isIOS){h+=`<div class="installtip">📱 iPhone/iPad：点底部 <b>分享按钮 ⬆️</b> → 选「<b>添加到主屏幕</b>」，桌面就会出现英雄图标。</div>`;}else if(!deferredPrompt){h+=`<div class="installtip">📱 安卓：点浏览器 <b>菜单 ⋮</b> → 选「<b>添加到主屏幕 / 安装应用</b>」。</div>`;}el.innerHTML=h;}
function doInstall(){if(!deferredPrompt)return;deferredPrompt.prompt();deferredPrompt.userChoice.then(()=>{deferredPrompt=null;renderInstall();});}

// ===== 家长设置（草稿 + 保存确认） =====
function openDraft(){draft=clone(S.cfg);dirty=false;}
function markDirty(){dirty=true;const b=document.getElementById('saveBtn');if(b){b.className='savebtn dirty';b.textContent='✓ 保存并同步给全家';}const h=document.getElementById('saveHint');if(h)h.textContent='有修改还没保存';}
function saveSettings(){if(!dirty){showToast('没有需要保存的修改');return;}const lp=S.cfg.profile;S.cfg=clone(draft);S.cfg.profile=lp;save();pushCloud();openDraft();renderAll();showToast('✅ 设置已保存并同步给全家');}
function setTheme(k){if(!THEMES[k])return;if(!S.cfg.profile)S.cfg.profile={name:'小英雄',avId:'spider',e:'',theme:k};S.cfg.profile.theme=k;applyTheme();save();pushCloud();renderSettings();const ap=document.getElementById('avPanel');if(ap&&ap.style.display!=='none')showAvPanel();showToast('主题已切换 '+THEMES[k].name+'，头像里有新角色哦');}
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
function dMeta(k){return (draft&&draft.attrs&&draft.attrs[k])||attrMeta(k);}
function attrOpts(cur){return ATTR_ORDER.map(k=>`<option value="${k}"${k===cur?' selected':''}>${dMeta(k).i}${dMeta(k).name}</option>`).join('');}
function sAttr(k,f,v){if(!draft.attrs)draft.attrs=clone(DEFAULT_ATTRS_META);const m=draft.attrs[k]||(draft.attrs[k]={...DEFAULT_ATTRS_META[k]});if(f==='i')m.i=(v||m.i).slice(0,2);else if(f==='name')m.name=v.slice(0,6)||m.name;markDirty();}
function renderSettings(){const el=document.getElementById('settingsBody');if(!el)return;if(!draft)openDraft();
 const lvOpts=n=>RANKS.map(r=>`<option value="${r.lv}"${r.lv===n?' selected':''}>LV.${r.lv}</option>`).join('');
 el.innerHTML=
  `<div class="subhd" style="margin-top:0">🎨 主题风格</div>
  <div class="subtip">选一个喜欢的主题，会同步给全家。</div>
  <div class="preset-row">${Object.keys(THEMES).map(k=>`<span class="preset-chip${(((S.cfg.profile&&S.cfg.profile.theme)||'hero')===k)?' sel':''}" onclick="setTheme('${k}')">${THEMES[k].name}</span>`).join('')}</div>
  <div class="set-row"><div class="set-ic">🏫</div><div style="flex:1;font-size:14px;color:var(--ink)">每天上学打卡奖励</div><input class="set-cost" type="number" min="0" max="999" value="${draft.checkin}" oninput="sCheckin(this.value)"></div>
  <div class="subhd">🎁 奖励兑换设置</div>
  <div class="set-hd"><span style="width:32px"></span><span style="flex:1">名称</span><span style="width:58px;text-align:center">花费⭐</span><span>解锁</span></div>
  ${draft.rewards.map((r,i)=>`<div class="set-row"><div class="set-ic" style="background:${r.h}">${r.i}</div><input class="set-name" value="${esc(r.n)}" oninput="sRw(${i},'n',this.value)"><input class="set-cost" type="number" min="0" max="999" value="${r.c}" oninput="sRw(${i},'c',this.value)"><select class="set-lv" onchange="sRw(${i},'lv',this.value)">${lvOpts(r.lv)}</select></div>`).join('')}
  <div class="subhd">🎯 成长维度（养育目标）</div>
  <div class="subtip">四个维度代表你最看重的养育目标，加分项会累积到对应维度。可自定义名称和图标。</div>
  <div class="editlist">${ATTR_ORDER.map(k=>`<div class="editrow"><input class="er-emo" value="${esc(dMeta(k).i)}" maxlength="2" oninput="sAttr('${k}','i',this.value)"><input class="er-nm" value="${esc(dMeta(k).name)}" oninput="sAttr('${k}','name',this.value)"><span style="width:14px;height:14px;border-radius:50%;background:${ATTRS[k].c};flex-shrink:0"></span></div>`).join('')}</div>
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
function resetCfg(){showCC('<span style="font-size:40px">↩️</span>','恢复默认设置？','把打卡奖励、奖励列表、快捷加分/扣分都恢复成初始（不影响已有积分、能力和记录）。',()=>{const lp=S.cfg.profile;S.cfg={checkin:10,rewards:cloneArr(DEFAULT_RWS),tasks:cloneArr(DEFAULT_TASKS),qadd:cloneArr(DEFAULT_QADD),qsub:cloneArr(DEFAULT_QSUB),attrs:clone(DEFAULT_ATTRS_META),profile:lp};save();pushCloud();openDraft();renderAll();showToast('已恢复默认设置');});}

// ===== 头像面板 =====
function showAvPanel(){const p=document.getElementById('avPanel');p.style.display='';bindGrid('avPGrid',prof().avId||'',av=>{const pr=prof();pr.avId=av.id;pr.e='';save();pushCloud();renderHdr();});const prev=document.getElementById('avPPrev');if(prev)prev.innerHTML=avInner(44);}
function closeAvPanel(){document.getElementById('avPanel').style.display='none';}
function applyCustomAv(){const v=document.getElementById('avCIn').value.trim();if(!v){showToast('请输入一个表情符号');return;}const pr=prof();pr.e=v;pr.avId='';save();pushCloud();renderHdr();closeAvPanel();showToast('形象已更新！✨');}

// ===== 核心动作 =====
function td(){const d=new Date();return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();}
function fmt(iso){const d=new Date(iso);return (d.getMonth()+1)+'月'+d.getDate()+'日 '+d.getHours()+':'+String(d.getMinutes()).padStart(2,'0');}
function addH(r,p,ic,attr){S.hist.push({r,p,ic:ic||null,attr:attr||null,t:new Date().toISOString()});if(S.hist.length>200)S.hist=S.hist.slice(-200);}
async function commit(r,p,ic,attr,srcEl){await pullQuiet();const oldLv=rankOf(S.lifetime).lv;S.points=Math.max(0,S.points+p);if(p>0){S.lifetime+=p;if(attr&&S.abilities[attr]!==undefined)S.abilities[attr]+=p;}addH(r,p,ic,attr);save();pushCloud();renderAll();if(p>0){flyGains(srcEl,p);if(attr)pulseAbil(attr);}checkLvUp(oldLv);}
async function doCI(){await pullQuiet();const t=td();const y=(()=>{const d=new Date();d.setDate(d.getDate()-1);return d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();})();if(S.lastCI===t){renderAll();showToast('今天已经打卡过啦！');return;}const oldLv=rankOf(S.lifetime).lv;const amt=S.cfg.checkin;S.streak=S.lastCI===y?S.streak+1:1;S.lastCI=t;S.points+=amt;S.lifetime+=amt;if(S.abilities.courage!==undefined)S.abilities.courage+=amt;addH('上学打卡',amt,'🏫','courage');save();pushCloud();renderAll();flyGains(document.getElementById('ciBtn'),amt);pulseAbil('courage');showToast('🎉 太棒了！获得 '+amt+' 颗能量星！');checkLvUp(oldLv);}
function adj(s,el){const r=document.getElementById('adjR').value.trim()||'家长调整';const a=parseInt(document.getElementById('adjA').value)||5;commit(r,s*a,s>0?'⭐':'💫',null,el);showToast((s>0?'⭐ +':'💫 -')+a+' '+r);document.getElementById('adjR').value='';}
function askRw(rwd){pendRwd=rwd;showCC(`<div class="rw-ic" style="background:${rwd.h};margin:0 auto">${rwd.i}</div>`,'确定要换吗？',`用 ${rwd.c} 颗能量星换「${rwd.n}」`,async()=>{if(!pendRwd)return;await pullQuiet();if(S.points<pendRwd.c){renderAll();showToast('能量星不够哦！');return;}S.points=Math.max(0,S.points-pendRwd.c);addH('兑换：'+pendRwd.n,-pendRwd.c,pendRwd.i);save();pushCloud();renderAll();showToast(pendRwd.i+' 兑换成功！享受奖励吧！');pendRwd=null;});}
function askReset(){showCC('<span style="font-size:40px">⚠️</span>','确定要重置吗？','所有能量、等级、能力和记录都会清空，不能撤回！（家长的设置会保留）',()=>{const keepCfg=S.cfg;S={points:0,lifetime:0,streak:0,lastCI:null,hist:[],cfg:keepCfg,abilities:{courage:0,wisdom:0,body:0,heart:0}};save();pushCloud();renderAll();showToast('已重置所有数据');},'linear-gradient(180deg,#cc8168,#b3634a)');}

// ===== 记录编辑/撤销 =====
function applyRevert(h){S.points=Math.max(0,S.points-h.p);if(h.p>0){S.lifetime=Math.max(0,S.lifetime-h.p);if(h.attr&&S.abilities[h.attr]!==undefined)S.abilities[h.attr]=Math.max(0,S.abilities[h.attr]-h.p);}}
function delHist(i){const h=S.hist[i];if(!h)return;showCC('<span style="font-size:38px">🗑️</span>','删除这条记录？',`「${h.r} ${h.p>0?'+':''}${h.p}」会被撤销，积分和能力值一起还原。`,()=>{applyRevert(h);S.hist.splice(i,1);save();pushCloud();renderAll();showToast('已撤销并删除');});}
function editHist(i){editingIdx=i;renderHist();}
function cancelEdit(){editingIdx=-1;renderHist();}
function saveEdit(i){const rIn=document.getElementById('ehR'),pIn=document.getElementById('ehP');const h=S.hist[i];if(!h){editingIdx=-1;renderHist();return;}const nr=(rIn.value||h.r).slice(0,30);let np=parseInt(pIn.value);if(isNaN(np))np=h.p;np=Math.max(-999,Math.min(999,np));applyRevert(h);h.r=nr;h.p=np;S.points=Math.max(0,S.points+np);if(np>0){S.lifetime+=np;if(h.attr&&S.abilities[h.attr]!==undefined)S.abilities[h.attr]+=np;}editingIdx=-1;save();pushCloud();renderAll();showToast('已修改记录');}

// ===== 动画 =====
function flyGains(srcEl,pts){const mb=document.getElementById('miniBar');const useMini=mb&&mb.classList.contains('show');const numEl=useMini?document.getElementById('mpts'):document.getElementById('hpts');const barEl=useMini?document.getElementById('mfill'):document.getElementById('pfill');if(!numEl)return;const t=numEl.getBoundingClientRect();const tx=t.left+t.width/2,ty=t.top+t.height/2;let sx=tx,sy=ty+90;if(srcEl&&srcEl.getBoundingClientRect){const s=srcEl.getBoundingClientRect();sx=s.left+s.width/2;sy=s.top+s.height/2;}
 const n=Math.min(Math.max(pts,1),8);
 for(let i=0;i<n;i++){const s=document.createElement('div');s.className='flystar';s.textContent='⭐';s.style.fontSize=(17+Math.random()*9)+'px';s.style.left='0';s.style.top='0';s.style.opacity='0';s.style.transform=`translate(${sx-10}px,${sy-10}px) scale(.5)`;document.body.appendChild(s);
  const jx=(Math.random()-.5)*40;
  requestAnimationFrame(()=>{s.style.opacity='1';s.style.transform=`translate(${sx-10+jx}px,${sy-30}px) scale(1)`;setTimeout(()=>{s.style.transform=`translate(${tx-10}px,${ty-10}px) scale(.55)`;s.style.opacity='.15';},70+i*70);});
  setTimeout(()=>s.remove(),70+i*70+820);}
 const g=document.createElement('div');g.className='gainpop';g.textContent='+'+pts;g.style.color='#e0a90f';g.style.left=(sx-16)+'px';g.style.top=(sy-34)+'px';document.body.appendChild(g);setTimeout(()=>g.remove(),1250);
 setTimeout(()=>{numEl.classList.add('bump');setTimeout(()=>numEl.classList.remove('bump'),500);if(barEl){barEl.classList.add('flash');setTimeout(()=>barEl.classList.remove('flash'),700);}},70+n*70+240);}
function pulseAbil(attr){const el=document.querySelector('.abil[data-a="'+attr+'"]');if(el){el.classList.remove('pulse');void el.offsetWidth;el.classList.add('pulse');setTimeout(()=>el.classList.remove('pulse'),700);}}
function checkLvUp(oldLv){const nl=rankOf(S.lifetime);if(nl.lv>oldLv)setTimeout(()=>showLevelUp(nl.lv),720);}
function growLine(k){return {courage:'变得更勇敢了！⚡',wisdom:'变得更聪明了！🧠',fitness:'体能更强壮了！🏃',social:'更会和大家相处了！🤝'}[k]||'变得更棒了！';}
function showLevelUp(newLv){const rk=RANKS.find(r=>r.lv===newLv);if(!rk)return;
 const hero=document.getElementById('lvHero'),ghost=document.getElementById('lvGhost'),rays=document.getElementById('lvRays'),shock=document.getElementById('lvShock'),tag=document.getElementById('lvLvlTag');
 const heroSvg=avInner(96);hero.innerHTML=heroSvg;ghost.innerHTML=heroSvg;
 tag.textContent='LV.'+newLv;
 document.getElementById('lvBadge').textContent='✦ LEVEL UP · 升级啦 ✦';
 document.getElementById('lvTitle').textContent='LV.'+newLv+' '+rk.name;
 let top=ATTR_ORDER[0];ATTR_ORDER.forEach(k=>{if((S.abilities[k]||0)>(S.abilities[top]||0))top=k;});
 document.getElementById('lvSub').textContent='你的小英雄长大了，'+growLine(top);
 const max=Math.max(10,...ATTR_ORDER.map(k=>S.abilities[k]||0));
 document.getElementById('lvAttrs').innerHTML=ATTR_ORDER.map(k=>{const a=ATTRS[k];const v=S.abilities[k]||0;const pct=Math.round(v/max*100);return `<div class="abil" data-a="${k}"><div class="abil-i" style="background:${a.c}22;border-color:${a.c}66">${attrIcon(k)}</div><div class="abil-m"><div class="abil-nm">${esc(attrName(k))} <b>${v}</b></div><div class="abil-bar"><div class="abil-fill" data-pct="${pct}" style="width:0%;background:${a.c}"></div></div></div></div>`;}).join('');
 document.getElementById('lvOverlay').classList.add('show');
 // 多阶段：重置 → 光芒展开 + 英雄从小长大 + 冲击波 + 等级牌弹出
 [hero,ghost,rays,shock,tag].forEach(e=>e.classList.remove('grow','flex','on'));
 void hero.offsetWidth;
 rays.classList.add('on');ghost.classList.add('on');hero.classList.add('grow');shock.classList.add('on');tag.classList.add('on');
 setTimeout(()=>hero.classList.add('flex'),1500);
 setTimeout(()=>sparkle(),650);
 setTimeout(()=>sparkle(),1150);
 setTimeout(()=>{document.querySelectorAll('#lvAttrs .abil-fill').forEach(f=>{f.style.width=(f.dataset.pct||0)+'%';});},1300);}
function closeLevelUp(){document.getElementById('lvOverlay').classList.remove('show');}
function sparkle(){const box=document.querySelector('.lvbox');if(!box)return;const r=box.getBoundingClientRect();const es=['✨','⭐','🌟','💫'];for(let i=0;i<16;i++){const s=document.createElement('div');s.className='spark';s.textContent=es[i%4];s.style.left=(r.left+Math.random()*r.width)+'px';s.style.top=(r.top+r.height*0.28+Math.random()*r.height*0.5)+'px';s.style.fontSize=(16+Math.random()*13)+'px';s.style.animationDelay=(Math.random()*0.45)+'s';document.body.appendChild(s);setTimeout(()=>s.remove(),1750);}}

// ===== 家庭共享（家长页按钮） =====
function apiUnavailableMsg(){if(location.hostname.endsWith('github.io'))return '这个网址不支持家庭共享，请用你自己服务器的网址打开';if(location.protocol==='file:')return '请通过服务器网址打开，而不是直接打开文件';return '连接服务器失败，请检查网络后再试';}
async function adminCreate(){showToast('正在创建...');const id=await createBlob();if(id){P.fid=id;save();startAuto();renderSync();showToast('🎉 家庭码创建成功！');}else showToast('❌ '+apiUnavailableMsg());}
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
document.addEventListener('visibilitychange',()=>{if(!document.hidden&&P&&P.fid)pullCloud();});

const pendingJoin=((new URLSearchParams(location.search)).get('f')||'').toUpperCase()||null;
(async function boot(){
 if(pendingJoin){
   // 通过分享链接进入：直接加入该家庭积分本
   if(!P)P={fid:null};
   if(P.fid!==pendingJoin){
     P.fid=pendingJoin;save();
     const ok=await joinBlob(pendingJoin);
     if(ok && S.cfg && S.cfg.profile){showMain();return;}
     if(!ok){P.fid=null;save();}
   }
 }
 if(S.cfg && S.cfg.profile)showMain();else initSetup();
})();
