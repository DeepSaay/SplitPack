<!DOCTYPE html>  
  
<html lang="en">  
<head>  
<meta charset="UTF-8"/>  
<meta name="viewport" content="width=device-width,initial-scale=1"/>  
<title>SplitPack 🎒</title>  
<meta name="theme-color" content="#0b0f14"/>  
<link rel="manifest" href="manifest.json"/>  
<link rel="apple-touch-icon" href="icon.png"/>  
<style>  
  @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;600;700;800;900&display=swap');  
  *{box-sizing:border-box;margin:0;padding:0}  
  body{background:#0b0f14;color:#dce6f0;font-family:'Nunito',sans-serif;min-height:100vh;padding-bottom:64px}  
  .btn{border:none;border-radius:10px;cursor:pointer;font-family:'Nunito',sans-serif;font-weight:800;transition:all .15s;display:inline-flex;align-items:center;justify-content:center;gap:5px}  
  .btn:hover{filter:brightness(1.15);transform:translateY(-1px)}  
  .btn:active{transform:scale(.97)}  
  .inp{background:#0b0f14;border:1.5px solid #1e2a38;border-radius:10px;color:#dce6f0;font-family:'Nunito',sans-serif;font-size:14px;padding:10px 13px;width:100%;transition:border .2s;outline:none}  
  .inp:focus{border-color:#4a9eff}  
  .inp::placeholder{color:#2e3f52}  
  select.inp{appearance:none}  
  .chip{border-radius:20px;font-size:12px;font-weight:700;padding:5px 11px;cursor:pointer;transition:all .15s;border:1.5px solid #1e2a38;background:#0b0f14;color:#4a6a88;font-family:'Nunito',sans-serif;display:inline-flex;align-items:center;gap:5px}  
  .chip:hover{border-color:#4a9eff;color:#dce6f0}  
  .chip.on{background:#4a9eff18;color:#4a9eff;border-color:#4a9eff}  
  .card{background:#131920;border:1px solid #1e2a38;border-radius:16px;padding:16px}  
  .label{color:#3a5a78;font-size:11px;font-weight:800;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px;display:block}  
  .trip-card{background:#131920;border:1px solid #1e2a38;border-radius:18px;padding:18px 16px;cursor:pointer;transition:all .22s;margin-bottom:12px}  
  .trip-card:hover{border-color:#4a9eff55;transform:translateY(-3px);box-shadow:0 10px 36px #4a9eff12}  
  @keyframes slideUp{from{transform:translateY(16px);opacity:0}to{transform:translateY(0);opacity:1}}  
  @keyframes pop{from{transform:scale(.92);opacity:0}to{transform:scale(1);opacity:1}}  
  .anim-up{animation:slideUp .25s ease}  
  .anim-pop{animation:pop .2s ease}  
  .pencil-btn{background:#1e2a38;border:none;border-radius:8px;color:#6b8aa8;cursor:pointer;padding:5px 9px;font-size:13px;transition:all .15s;font-family:'Nunito',sans-serif;font-weight:800}  
  .pencil-btn:hover{background:#4a9eff22;color:#4a9eff;transform:scale(1.1)}  
  ::-webkit-scrollbar{width:4px}::-webkit-scrollbar-thumb{background:#1e2a38;border-radius:4px}  
  /* PDF */  
  #pdf-receipt{display:none}  
  @media print{  
    body>*:not(#pdf-receipt){display:none!important}  
    #pdf-receipt{display:block!important;font-family:'Courier New',monospace;background:#fff;color:#111;width:320px;margin:0 auto;padding:24px 20px;font-size:13px;line-height:1.6}  
    .r-title{text-align:center;font-size:22px;font-weight:900;letter-spacing:2px;margin-bottom:2px}  
    .r-sub{text-align:center;font-size:11px;color:#555;margin-bottom:16px}  
    .r-divider{border:none;border-top:1px dashed #aaa;margin:10px 0}  
    .r-row{display:flex;justify-content:space-between;margin-bottom:2px}  
    .r-section{font-weight:900;text-transform:uppercase;font-size:11px;letter-spacing:1px;margin:12px 0 4px;color:#333}  
    .r-settle{background:#f5f5f5;border-radius:6px;padding:8px 10px;margin-bottom:6px}  
    .r-total{font-size:16px;font-weight:900;text-align:center;margin:12px 0 4px}  
    .r-footer{text-align:center;font-size:10px;color:#888;margin-top:16px}  
    .r-barcode{text-align:center;font-size:28px;letter-spacing:4px;margin:10px 0 4px}  
  }  
</style>  
</head>  
<body>  
<div id="pdf-receipt"></div>  
<div id="app">  
  <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:16px">  
    <div style="font-size:48px">🎒</div>  
    <div style="font-family:'Fredoka One',cursive;font-size:20px;color:#4a9eff">Loading SplitPack…</div>  
  </div>  
</div>  
  
<script type="module">  
import{initializeApp}from"https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";  
import{getFirestore,doc,setDoc,onSnapshot,collection,getDocs,getDoc}from"https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";  
  
// ── Firebase ──────────────────────────────────────────────────────────────  
const app = initializeApp({  
  apiKey:            "AIzaSyDMN8q8zQm76B68wJShpc1BafU7rCWLpuE",  
  authDomain:        "splitpack-7c1a4.firebaseapp.com",  
  projectId:         "splitpack-7c1a4",  
  storageBucket:     "splitpack-7c1a4.firebasestorage.app",  
  messagingSenderId: "189484190941",  
  appId:             "1:189484190941:web:704c5cac39e91052ec9f34"  
});  
const db = getFirestore(app);  
  
// ── Constants ─────────────────────────────────────────────────────────────  
const COVERS  = ['🏝','🏔','🌴','🎡','🚢','✈️','🏕','🎠','🗺','🌊','🏜','🏙','🌋','🎆','🚂','🛕'];  
const AVATARS = ['🧑','👩','🧔','👱','🙋','🧕','👦','👧','🧒','🧑‍🦱','👩‍🦰','🧑‍🦳','👨‍🦲','🥷','🧑‍🎤'];  
const EMOJIS  = ['🍦','🍕','🍔','⛽','🏨','🎢','🛶','☕','🎟','🛒','🍺','🚕','🎡','🏖','🍣','🥗','🎠','🚢','🧴','🎑'];  
  
const uid       = () => Math.random().toString(36).slice(2,9);  
const fmt       = n  => '₹'+Number(n).toFixed(2);  
const esc       = s  => String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');  
const cover     = n  => COVERS[(n?.charCodeAt(0)||65)%COVERS.length];  
const avatar    = n  => AVATARS[(n?.charCodeAt(0)||0)%AVATARS.length];  
const expEmoji  = d  => EMOJIS[(d?.charCodeAt(0)||0)%EMOJIS.length];  
const shareCode = id => id.slice(0,6).toUpperCase();  
  
// ── Device identity ───────────────────────────────────────────────────────  
let ME = localStorage.getItem('sp_me') || ('User-'+Math.random().toString(36).slice(2,5).toUpperCase());  
localStorage.setItem('sp_me', ME);  
  
// ── My trip IDs (local) ───────────────────────────────────────────────────  
const getMyIds  = ()    => { try{return JSON.parse(localStorage.getItem('sp_ids'))||[];}catch{return[];} };  
const saveMyIds = ids   => localStorage.setItem('sp_ids', JSON.stringify(ids));  
const addMyId   = id    => { const ids=getMyIds(); if(!ids.includes(id)){ids.unshift(id);saveMyIds(ids);} };  
const removeMyId= id    => saveMyIds(getMyIds().filter(x=>x!==id));  
  
// ── Firestore ─────────────────────────────────────────────────────────────  
const tripRef  = id => doc(db,'trips',id);  
const codeRef  = c  => doc(db,'codes',c.toLowerCase());  
  
async function dbSaveTrip(trip){  
  await setDoc(tripRef(trip.id), trip);  
  await setDoc(codeRef(shareCode(trip.id)), {tripId:trip.id});  
}  
  
async function dbJoin(code){  
  const snap = await getDoc(codeRef(code.trim().toLowerCase()));  
  if(!snap.exists()) return null;  
  const {tripId} = snap.data();  
  const tSnap = await getDoc(tripRef(tripId));  
  if(!tSnap.exists()) return null;  
  return tSnap.data();  
}  
  
// ── Settle-up ─────────────────────────────────────────────────────────────  
function settle(adults, expenses){  
  const bal={};  
  adults.forEach(p=>bal[p.id]=0);  
  expenses.forEach(e=>{  
    if(e.splitMode==='custom'){  
      // Custom: each participant has their own share stored  
      Object.entries(e.customShares||{}).forEach(([pid,amt])=>{  
        bal[pid]=(bal[pid]||0)-amt;  
      });  
      bal[e.payerId]=(bal[e.payerId]||0)+e.amount;  
    } else {  
      // Equal split  
      if(!e.participants?.length) return;  
      const share=e.amount/e.participants.length;  
      bal[e.payerId]=(bal[e.payerId]||0)+e.amount;  
      e.participants.forEach(pid=>bal[pid]=(bal[pid]||0)-share);  
    }  
  });  
  const pos=[],neg=[];  
  Object.entries(bal).forEach(([id,a])=>{  
    if(a>0.005)pos.push({id,a});  
    else if(a<-0.005)neg.push({id,a:-a});  
  });  
  const txns=[]; let i=0,j=0;  
  while(i<pos.length&&j<neg.length){  
    const s=Math.min(pos[i].a,neg[j].a);  
    txns.push({from:neg[j].id,to:pos[i].id,amount:s});  
    pos[i].a-=s; neg[j].a-=s;  
    if(pos[i].a<0.005)i++; if(neg[j].a<0.005)j++;  
  }  
  return{bal,txns};  
}  
  
// ── PDF ───────────────────────────────────────────────────────────────────  
function printPDF(trip){  
  const adults=trip.people.filter(p=>!p.isDependent);  
  const {bal,txns}=settle(adults,trip.expenses||[]);  
  const total=(trip.expenses||[]).reduce((s,e)=>s+e.amount,0);  
  const pName=id=>(trip.people.find(p=>p.id===id)||{}).name||'?';  
  const date=new Date(trip.createdAt).toLocaleDateString('en-IN',{day:'numeric',month:'long',year:'numeric'});  
  const now=new Date().toLocaleString('en-IN',{day:'numeric',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'});  
  
  let h=`<div class="r-title">🎒 SPLITPACK</div>  
  <div class="r-sub">Official Trip Receipt</div>  
  <hr class="r-divider"/>  
  <div class="r-row"><span>Trip</span><span><b>${esc(trip.name)}</b></span></div>  
  <div class="r-row"><span>Date</span><span>${date}</span></div>  
  <div class="r-row"><span>Code</span><span><b>${shareCode(trip.id)}</b></span></div>  
  <div class="r-row"><span>Members</span><span>${trip.people.length} (${adults.length} paying)</span></div>  
  <hr class="r-divider"/>  
  <div class="r-section">💸 Expenses</div>`;  
  
  (trip.expenses||[]).forEach(e=>{  
    h+=`<div class="r-row"><span>${expEmoji(e.desc)} ${esc(e.desc)}</span><span>${fmt(e.amount)}</span></div>`;  
    h+=`<div class="r-row" style="font-size:11px;color:#555"><span>&nbsp;&nbsp;Paid by ${esc(pName(e.payerId))} · ${e.splitMode==='custom'?'Custom split':'Equal split'} · ${e.reviewed?'✅ Reviewed':'⏳ Pending'}</span></div>`;  
    if(e.splitMode==='custom'){  
      Object.entries(e.customShares||{}).forEach(([pid,amt])=>{  
        h+=`<div class="r-row" style="font-size:11px;color:#555"><span>&nbsp;&nbsp;&nbsp;&nbsp;${esc(pName(pid))}</span><span>${fmt(amt)}</span></div>`;  
      });  
    }  
  });  
  
  h+=`<hr class="r-divider"/><div class="r-total">TOTAL: ${fmt(total)}</div><hr class="r-divider"/>  
  <div class="r-section">👥 Balances</div>`;  
  
  adults.forEach(p=>{  
    const b=bal[p.id]||0;  
    const deps=trip.people.filter(x=>x.isDependent&&x.guardianId===p.id);  
    h+=`<div class="r-row"><span>${esc(p.name)}${deps.length?' (+'+deps.map(d=>esc(d.name)).join(', ')+')':''}</span>  
      <span>${b===0?'✅ Settled':fmt(Math.abs(b))+' '+(b>0?'gets back':'owes')}</span></div>`;  
    if(p.upi)h+=`<div style="font-size:11px;color:#555;padding-left:8px">💳 ${esc(p.upi)}</div>`;  
  });  
  
  if(txns.length){  
    h+=`<hr class="r-divider"/><div class="r-section">🧮 Settle Up</div>`;  
    txns.forEach(t=>{  
      const toP=trip.people.find(p=>p.id===t.to);  
      h+=`<div class="r-settle"><b>${esc(pName(t.from))}</b> pays <b>${esc(pName(t.to))}</b> → <b>${fmt(t.amount)}</b>${toP?.upi?`<div style="font-size:11px;color:#555">💳 ${esc(toP.upi)}</div>`:''}</div>`;  
    });  
  }else{  
    h+=`<hr class="r-divider"/><div style="text-align:center;font-size:18px;margin:10px 0">🎉 All settled!</div>`;  
  }  
  
  h+=`<hr class="r-divider"/><div class="r-barcode">||| |||| ||| ||||</div>  
  <div class="r-footer">SplitPack · ${now}<br/>Fair splits · Happy trips · Zero drama</div>`;  
  
  document.getElementById('pdf-receipt').innerHTML=h;  
  setTimeout(()=>window.print(),100);  
}  
  
// ── Image compress ────────────────────────────────────────────────────────  
async function compress(file){  
  return new Promise(res=>{  
    const r=new FileReader();  
    r.onload=e=>{  
      const img=new Image();  
      img.onload=()=>{  
        const S=80,c=document.createElement('canvas');  
        c.width=S;c.height=S;  
        const cx=c.getContext('2d'),s=Math.min(img.width,img.height);  
        cx.drawImage(img,(img.width-s)/2,(img.height-s)/2,s,s,0,0,S,S);  
        res(c.toDataURL('image/jpeg',.7));  
      };  
      img.src=e.target.result;  
    };  
    r.readAsDataURL(file);  
  });  
}  
  
// ── Avatar HTML ───────────────────────────────────────────────────────────  
function avHtml(p,size){  
  if(!p)return`<div style="width:${size}px;height:${size}px;border-radius:50%;background:#1e2a38;flex-shrink:0"></div>`;  
  return`<div style="width:${size}px;height:${size}px;border-radius:50%;border:2px solid #1e2a38;overflow:hidden;background:#1a2434;display:flex;align-items:center;justify-content:center;font-size:${size*.5}px;flex-shrink:0">  
    ${p.photo?`<img src="${p.photo}" style="width:100%;height:100%;object-fit:cover"/>`:(p.isDependent?'👶':avatar(p.name))}  
  </div>`;  
}  
  
// ── State ─────────────────────────────────────────────────────────────────  
let S={  
  trips:{}, myIds:[], loading:true,  
  activeTripId:null, tab:'people',  
  showNewTrip:false, newTripName:'',  
  showJoin:false, joinCode:'', joinError:'', joining:false,  
  editTripName:false, tempTripName:'',  
  newName:'', isDependent:false, guardianId:'',  
  showExpForm:false,  
  expDesc:'', expAmount:'', expPayer:'', expParticipants:[],  
  splitMode:'equal',         // 'equal' | 'custom'  
  customShares:{},           // pid → amount string  
  editingPerson:null,  
  editingMe:false, tempMe:'',  
};  
const uns={};  
  
function set(patch){ S={...S,...patch}; render(); }  
function trip(){ return S.trips[S.activeTripId]||null; }  
  
function subTrip(id){  
  if(uns[id])return;  
  uns[id]=onSnapshot(tripRef(id),snap=>{  
    if(snap.exists()){ S.trips={...S.trips,[id]:snap.data()}; render(); }  
  });  
}  
  
function boot(){  
  const ids=getMyIds();  
  S.myIds=ids; ids.forEach(id=>subTrip(id));  
  S.loading=false; render();  
}  
  
// ── Resolve participants (dependents → guardian) ──────────────────────────  
function resolveP(ids,people){  
  const out=new Set();  
  ids.forEach(id=>{  
    const p=people.find(x=>x.id===id);  
    if(p) out.add(p.isDependent?p.guardianId:p.id);  
  });  
  return[...out];  
}  
  
// ══════════════════════════════════════════════════════════════════════════  
// RENDER  
// ══════════════════════════════════════════════════════════════════════════  
function render(){  
  const el=document.getElementById('app');  
  if(S.loading){el.innerHTML=`<div style="min-height:100vh;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:16px"><div style="font-size:48px">🎒</div><div style="font-family:'Fredoka One',cursive;font-size:20px;color:#4a9eff">Loading…</div></div>`;return;}  
  if(!S.activeTripId){el.innerHTML=home();bindHome();return;}  
  const t=trip();  
  if(!t){set({activeTripId:null});return;}  
  el.innerHTML=tripScreen(t);  
  bindTrip(t);  
}  
  
// ── HOME ──────────────────────────────────────────────────────────────────  
function home(){  
  const trips=S.myIds.map(id=>S.trips[id]).filter(Boolean);  
  const grandTotal=trips.reduce((s,t)=>(t.expenses||[]).reduce((a,e)=>a+e.amount,s),0);  
  return`  
  <div style="max-width:600px;margin:0 auto;padding:20px 16px 80px">  
    <div style="text-align:center;padding:32px 0 20px">  
      <div style="font-family:'Fredoka One',cursive;font-size:42px;color:#4a9eff">🎒 SplitPack</div>  
      <div style="color:#2e4a64;font-size:14px;margin-top:6px;font-weight:600">Fair splits · Happy trips · Zero drama</div>  
    </div>  
  
    <!-- Me card -->  
    <div class="card" style="margin-bottom:16px;display:flex;align-items:center;justify-content:space-between;gap:12px">  
      <div style="flex:1;min-width:0">  
        <div class="label" style="margin-bottom:4px">Your name on this device</div>  
        ${S.editingMe  
          ?`<input class="inp" id="me-inp" value="${esc(S.tempMe)}" style="font-size:14px"/>`  
          :`<div style="font-weight:800;font-size:16px">${esc(ME)}</div>`}  
      </div>  
      ${S.editingMe  
        ?`<button class="btn" id="btn-save-me" style="padding:8px 14px;background:#238636;color:#fff;font-size:13px;flex-shrink:0">Save</button>`  
        :`<button class="pencil-btn" id="btn-edit-me" style="flex-shrink:0">✏️ Edit</button>`}  
    </div>  
  
    <!-- New trip / Join -->  
    <div style="display:flex;gap:8px;margin-bottom:20px">  
      ${S.showNewTrip?`  
      <div class="card anim-pop" style="flex:1">  
        <div style="font-family:'Fredoka One',cursive;font-size:16px;color:#dce6f0;margin-bottom:10px">🗺 Name your adventure</div>  
        <input class="inp" id="new-trip-name" placeholder="e.g. Goa 2025…" value="${esc(S.newTripName)}" style="margin-bottom:10px" autofocus/>  
        <div style="display:flex;gap:8px">  
          <button class="btn" id="btn-create" style="flex:1;padding:10px;background:linear-gradient(135deg,#1254cc,#4a9eff);color:#fff;font-size:13px">🚀 Create</button>  
          <button class="btn" id="btn-cancel-new" style="padding:10px 12px;background:#1e2a38;color:#6b8aa8;font-size:13px">✕</button>  
        </div>  
      </div>`  
      :`<button class="btn" id="btn-new" style="flex:1;padding:13px;background:linear-gradient(135deg,#1254cc,#4a9eff);color:#fff;font-size:14px;border-radius:12px">✈️ New Trip</button>`}  
  
      ${S.showJoin?`  
      <div class="card anim-pop" style="flex:1">  
        <div style="font-family:'Fredoka One',cursive;font-size:16px;color:#dce6f0;margin-bottom:10px">🔑 Enter code</div>  
        <input class="inp" id="join-inp" placeholder="e.g. GOA25X" maxlength="6" value="${esc(S.joinCode)}" style="margin-bottom:6px;text-transform:uppercase;letter-spacing:3px;font-size:18px;text-align:center"/>  
        ${S.joinError?`<div style="color:#f85149;font-size:12px;margin-bottom:6px">${esc(S.joinError)}</div>`:''}  
        <div style="display:flex;gap:8px">  
          <button class="btn" id="btn-do-join" style="flex:1;padding:10px;background:#238636;color:#fff;font-size:13px">${S.joining?'Joining…':'Join'}</button>  
          <button class="btn" id="btn-cancel-join" style="padding:10px 12px;background:#1e2a38;color:#6b8aa8;font-size:13px">✕</button>  
        </div>  
      </div>`  
      :`<button class="btn" id="btn-join" style="flex:1;padding:13px;background:#0d1a10;color:#3fb950;font-size:14px;border-radius:12px;border:1.5px solid #238636">🔑 Join Trip</button>`}  
    </div>  
  
    ${trips.length===0?`  
    <div style="text-align:center;color:#1e2e3e;padding:60px 0">  
      <div style="font-size:60px;margin-bottom:14px">🧳</div>  
      <div style="font-size:15px;font-weight:700">No trips yet.<br/>Create or join one above!</div>  
    </div>`:`  
    <div class="label">${trips.length} Trip${trips.length!==1?'s':''} · ${fmt(grandTotal)} total</div>  
    ${trips.map(t=>{  
      const tot=(t.expenses||[]).reduce((s,e)=>s+e.amount,0);  
      const mc=t.people?.length||0,ec=(t.expenses||[]).length;  
      const date=new Date(t.createdAt).toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'2-digit'});  
      const pending=(t.expenses||[]).filter(e=>!e.reviewed).length;  
      const isOwner=t.ownerId===ME;  
      return`  
      <div class="trip-card anim-up" data-tid="${t.id}">  
        <div style="display:flex;align-items:center;justify-content:space-between">  
          <div style="display:flex;gap:14px;align-items:center;flex:1;min-width:0">  
            <div style="width:54px;height:54px;border-radius:14px;background:#0d1420;border:1px solid #1e2a38;display:flex;align-items:center;justify-content:center;font-size:30px;flex-shrink:0">${cover(t.name)}</div>  
            <div style="min-width:0;flex:1">  
              <div style="font-family:'Fredoka One',cursive;font-size:19px;color:#dce6f0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(t.name)}</div>  
              <div style="font-size:12px;color:#2e4a64;margin-top:2px">${date} · ${mc} member${mc!==1?'s':''} · ${ec} expense${ec!==1?'s':''}</div>  
              <div style="display:flex;flex-wrap:wrap;gap:5px;margin-top:5px">  
                <span style="font-size:11px;color:#4a9eff;background:#4a9eff11;padding:2px 8px;border-radius:10px;border:1px solid #4a9eff33">🔑 <b>${shareCode(t.id)}</b></span>  
                ${isOwner?`<span style="font-size:11px;color:#f0883e;background:#f0883e11;padding:2px 8px;border-radius:10px;border:1px solid #f0883e33">👑 Owner</span>`:''}  
                ${isOwner&&pending>0?`<span style="font-size:11px;color:#f85149;background:#f8514911;padding:2px 8px;border-radius:10px;border:1px solid #f8514933">⏳ ${pending} to review</span>`:''}  
              </div>  
            </div>  
          </div>  
          <div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px;margin-left:12px;flex-shrink:0">  
            <div style="font-family:'Fredoka One',cursive;font-size:18px;color:#3fb950">${fmt(tot)}</div>  
            <button class="btn btn-leave" data-tid="${t.id}" data-owner="${isOwner}" style="padding:3px 10px;background:#1e2a38;color:#f85149;font-size:12px">${isOwner?'🗑':'🚪 Leave'}</button>  
          </div>  
        </div>  
      </div>`;}).join('')}`}  
  </div>  
  <div style="position:fixed;bottom:0;left:0;right:0;background:#0f151d;border-top:1px solid #1a2434;padding:9px 16px;text-align:center;font-size:11px;color:#1e2e3e;font-weight:700">  
    🎒 SplitPack · Real-time sync · Share code to invite friends  
  </div>`;  
}  
  
function bindHome(){  
  // Me  
  document.getElementById('btn-edit-me')?.addEventListener('click',()=>set({editingMe:true,tempMe:ME}));  
  document.getElementById('me-inp')?.addEventListener('input',e=>S.tempMe=e.target.value);  
  document.getElementById('btn-save-me')?.addEventListener('click',()=>{  
    if(S.tempMe.trim()){ME=S.tempMe.trim();localStorage.setItem('sp_me',ME);}  
    set({editingMe:false});  
  });  
  // New trip  
  document.getElementById('btn-new')?.addEventListener('click',()=>set({showNewTrip:true,showJoin:false}));  
  document.getElementById('btn-cancel-new')?.addEventListener('click',()=>set({showNewTrip:false,newTripName:''}));  
  document.getElementById('new-trip-name')?.addEventListener('input',e=>S.newTripName=e.target.value);  
  document.getElementById('new-trip-name')?.addEventListener('keydown',e=>e.key==='Enter'&&createTrip());  
  document.getElementById('btn-create')?.addEventListener('click',createTrip);  
  // Join  
  document.getElementById('btn-join')?.addEventListener('click',()=>set({showJoin:true,showNewTrip:false,joinCode:'',joinError:''}));  
  document.getElementById('btn-cancel-join')?.addEventListener('click',()=>set({showJoin:false}));  
  document.getElementById('join-inp')?.addEventListener('input',e=>S.joinCode=e.target.value.toUpperCase());  
  document.getElementById('btn-do-join')?.addEventListener('click',joinTrip);  
  // Trip cards  
  document.querySelectorAll('.trip-card').forEach(el=>el.addEventListener('click',()=>openTrip(el.dataset.tid)));  
  document.querySelectorAll('.btn-leave').forEach(btn=>btn.addEventListener('click',e=>{  
    e.stopPropagation();  
    const isOwner=btn.dataset.owner==='true';  
    if(isOwner){if(confirm('Delete this trip for everyone?'))deleteTrip(btn.dataset.tid);}  
    else{if(confirm('Leave this trip?'))leaveTrip(btn.dataset.tid);}  
  }));  
}  
  
// ── TRIP SCREEN ───────────────────────────────────────────────────────────  
function tripScreen(t){  
  const {tab}=S;  
  const people=t.people||[], expenses=t.expenses||[];  
  const adults=people.filter(p=>!p.isDependent);  
  const total=expenses.reduce((s,e)=>s+e.amount,0);  
  const isOwner=t.ownerId===ME;  
  const pending=expenses.filter(e=>!e.reviewed).length;  
  const pName=id=>(people.find(p=>p.id===id)||{}).name||'?';  
  
  let tab_html='';  
  if(tab==='people')   tab_html=tabPeople(people,adults);  
  if(tab==='expenses') tab_html=tabExpenses(people,adults,expenses,isOwner,pName);  
  if(tab==='settle')   tab_html=tabSettle(t,people,adults,expenses,isOwner,pName);  
  
  return`  
  ${S.editingPerson?modalEdit(S.editingPerson,adults):''}  
  <!-- Top bar -->  
  <div style="background:#0f151d;border-bottom:1px solid #1a2434;padding:12px 16px;position:sticky;top:0;z-index:100">  
    <div style="max-width:600px;margin:0 auto">  
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">  
        <div style="display:flex;align-items:center;gap:10px;flex:1;min-width:0">  
          <button class="btn" id="btn-home" style="padding:6px 12px;background:#1e2a38;color:#6b8aa8;font-size:13px;flex-shrink:0">← Trips</button>  
          ${S.editTripName  
            ?`<input class="inp" id="tname-inp" value="${esc(S.tempTripName)}" style="font-size:15px;font-family:'Fredoka One',cursive;padding:5px 10px"/>`  
            :`<div id="btn-edit-tname" style="font-family:'Fredoka One',cursive;font-size:18px;color:#4a9eff;cursor:pointer;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${cover(t.name)} ${esc(t.name)}${isOwner?' <span style="font-size:12px">✏️</span>':''}</div>`}  
        </div>  
        <div style="text-align:right;flex-shrink:0;margin-left:10px">  
          <div style="font-size:10px;color:#2e4a64;font-weight:800;text-transform:uppercase">Total</div>  
          <div style="font-family:'Fredoka One',cursive;font-size:18px;color:#3fb950">${fmt(total)}</div>  
        </div>  
      </div>  
      <!-- Info bar -->  
      <div style="display:flex;gap:8px;margin-bottom:10px;flex-wrap:wrap">  
        <div style="background:#4a9eff0d;border:1px solid #4a9eff22;border-radius:10px;padding:5px 12px;font-size:12px;color:#4a6a88">  
          🔑 Share code: <b style="color:#4a9eff;letter-spacing:2px">${shareCode(t.id)}</b>  
        </div>  
        ${isOwner&&pending>0?`<div style="background:#f8514911;border:1px solid #f8514933;border-radius:10px;padding:5px 12px;font-size:12px;color:#f85149">⏳ <b>${pending}</b> expense${pending!==1?'s':''} to review</div>`:''}  
      </div>  
      <!-- Tabs -->  
      <div style="display:flex;gap:5px;background:#0b0f14;border-radius:12px;padding:4px">  
        ${[['people','👥 Crew'],['expenses','💸 Expenses'],['settle','🧮 Settle Up']].map(([k,l])=>`  
          <button class="btn tab-btn" data-tab="${k}" style="flex:1;padding:8px 0;font-size:12px;background:${tab===k?'#4a9eff':'transparent'};color:${tab===k?'#fff':'#3a5a78'};border-radius:9px">${l}</button>`).join('')}  
      </div>  
    </div>  
  </div>  
  <div style="max-width:600px;margin:0 auto;padding:16px 16px 80px">${tab_html}</div>  
  <div style="position:fixed;bottom:0;left:0;right:0;background:#0f151d;border-top:1px solid #1a2434;padding:9px 16px;text-align:center;font-size:11px;color:#1e2e3e;font-weight:700">  
    🎒 SplitPack · You: ${esc(ME)} · ${isOwner?'👑 Owner':'👤 Member'}  
  </div>`;  
}  
  
// ── PEOPLE TAB ────────────────────────────────────────────────────────────  
function tabPeople(people,adults){  
  return`<div class="anim-up">  
    <div class="card" style="margin-bottom:14px">  
      <div style="font-weight:800;font-size:14px;margin-bottom:12px;color:#dce6f0">➕ Add Member</div>  
      <input class="inp" id="new-name" placeholder="Name…" value="${esc(S.newName)}" style="margin-bottom:10px"/>  
      <label style="display:flex;align-items:center;gap:8px;margin-bottom:10px;cursor:pointer;font-size:13px;color:#6b8aa8;user-select:none">  
        <input type="checkbox" id="chk-dep" ${S.isDependent?'checked':''} style="width:16px;height:16px;accent-color:#f0883e"/> 👶 Dependent (non-paying)  
      </label>  
      ${S.isDependent?`<select class="inp" id="sel-guardian" style="margin-bottom:10px">  
        <option value="">— Assign guardian —</option>  
        ${adults.map(a=>`<option value="${a.id}" ${S.guardianId===a.id?'selected':''}>${avatar(a.name)} ${esc(a.name)}</option>`).join('')}  
      </select>`:''}  
      <button class="btn" id="btn-add-person" style="width:100%;padding:10px;background:#238636;color:#fff;font-size:14px">Add to Crew</button>  
      <div style="font-size:11px;color:#2e4a64;margin-top:8px;text-align:center">Tap ✏️ on a member to add photo & UPI</div>  
    </div>  
    ${people.length===0?`<div style="text-align:center;color:#1e2e3e;padding:40px 0;font-size:14px;font-weight:700">No crew yet 🧳</div>`:  
    `<div class="label">${people.length} member${people.length!==1?'s':''} · ${adults.length} paying · ${people.length-adults.length} dependent${people.length-adults.length!==1?'s':''}</div>  
    ${people.map(p=>{  
      const deps=people.filter(x=>x.isDependent&&x.guardianId===p.id);  
      return`<div class="card anim-pop" style="margin-bottom:10px;${p.isDependent?'border-color:#f0883e28':''}">  
        <div style="display:flex;align-items:center;justify-content:space-between">  
          <div style="display:flex;align-items:center;gap:12px;flex:1;min-width:0">  
            <div class="av-btn" data-pid="${p.id}" style="position:relative;flex-shrink:0;cursor:pointer">  
              ${avHtml(p,48)}  
              <div style="position:absolute;bottom:-2px;right:-2px;width:18px;height:18px;border-radius:50%;background:${p.isDependent?'#f0883e':'#4a9eff'};display:flex;align-items:center;justify-content:center;font-size:9px;border:2px solid #131920;color:#fff">✏️</div>  
            </div>  
            <div style="min-width:0;flex:1">  
              <div style="font-weight:800;font-size:15px">${esc(p.name)}</div>  
              ${p.upi?`<div style="font-size:11px;color:#4a9eff">💳 ${esc(p.upi)}</div>`:''}  
              ${p.isDependent?`<div style="font-size:11px;color:#f0883e">Billed under ${esc(adults.find(a=>a.id===p.guardianId)?.name||'?')}</div>`:''}  
              ${deps.length?`<div style="font-size:11px;color:#f0883e">Guardian of: ${deps.map(d=>esc(d.name)).join(', ')}</div>`:''}  
            </div>  
          </div>  
          <div style="display:flex;gap:6px;flex-shrink:0">  
            <button class="pencil-btn av-btn" data-pid="${p.id}">✏️</button>  
            <button class="pencil-btn btn-del-person" data-pid="${p.id}" style="color:#f85149">🗑</button>  
          </div>  
        </div>  
      </div>`;}).join('')}`}  
  </div>`;  
}  
  
// ── EXPENSES TAB ──────────────────────────────────────────────────────────  
function tabExpenses(people,adults,expenses,isOwner,pName){  
  const total=expenses.reduce((s,e)=>s+e.amount,0);  
  
  // Build custom shares input rows  
  let customRows='';  
  if(S.splitMode==='custom'&&S.expParticipants.length>0){  
    const involved=people.filter(p=>S.expParticipants.includes(p.id));  
    const resolvedIds=resolveP(S.expParticipants,people);  
    const resolvedPeople=adults.filter(p=>resolvedIds.includes(p.id));  
    const usedTotal=resolvedPeople.reduce((s,p)=>s+parseFloat(S.customShares[p.id]||0),0);  
    const remaining=parseFloat(S.expAmount||0)-usedTotal;  
    customRows=`  
    <div style="margin-top:10px;background:#0b0f14;border-radius:10px;padding:12px;border:1px solid #1e2a38">  
      <div style="font-size:12px;color:#6b8aa8;font-weight:700;margin-bottom:8px">Enter each person's share:</div>  
      ${resolvedPeople.map(p=>`  
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">  
          <div style="font-size:13px;font-weight:700;flex:1">${esc(p.name)}</div>  
          <div style="display:flex;align-items:center;gap:4px">  
            <span style="color:#3a5a78;font-size:13px">₹</span>  
            <input class="inp custom-share-inp" data-pid="${p.id}" value="${esc(S.customShares[p.id]||'')}" type="number" placeholder="0" style="width:90px;padding:6px 10px;text-align:right"/>  
          </div>  
        </div>`).join('')}  
      <div style="display:flex;justify-content:space-between;font-size:12px;padding-top:8px;border-top:1px solid #1e2a38;margin-top:4px">  
        <span style="color:#6b8aa8">Remaining unallocated</span>  
        <span style="font-weight:800;color:${Math.abs(remaining)<0.01?'#3fb950':remaining<0?'#f85149':'#f0883e'}">${fmt(remaining)}</span>  
      </div>  
    </div>`;  
  }  
  
  return`<div class="anim-up">  
    ${S.showExpForm?`  
    <div class="card anim-pop" style="margin-bottom:14px">  
      <div style="font-weight:800;font-size:14px;margin-bottom:12px;color:#dce6f0">💸 New Expense</div>  
      <input class="inp" id="exp-desc" placeholder="What was it? (Ice cream, Petrol…)" value="${esc(S.expDesc)}" style="margin-bottom:10px"/>  
      <input class="inp" id="exp-amount" type="number" placeholder="Total Amount (₹)" value="${esc(S.expAmount)}" style="margin-bottom:10px"/>  
      <select class="inp" id="exp-payer" style="margin-bottom:10px">  
        <option value="">— Who paid? —</option>  
        ${adults.map(a=>`<option value="${a.id}" ${S.expPayer===a.id?'selected':''}>${avatar(a.name)} ${esc(a.name)}</option>`).join('')}  
      </select>  
  
      <!-- Split mode toggle -->  
      <div style="display:flex;gap:6px;margin-bottom:12px">  
        <button class="btn split-mode-btn" data-mode="equal" style="flex:1;padding:8px;font-size:13px;background:${S.splitMode==='equal'?'#4a9eff':'#1e2a38'};color:${S.splitMode==='equal'?'#fff':'#6b8aa8'}">⚖️ Equal Split</button>  
        <button class="btn split-mode-btn" data-mode="custom" style="flex:1;padding:8px;font-size:13px;background:${S.splitMode==='custom'?'#f0883e':'#1e2a38'};color:${S.splitMode==='custom'?'#fff':'#6b8aa8'}">✏️ Custom Amounts</button>  
      </div>  
  
      <!-- Participants -->  
      <div style="margin-bottom:10px">  
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">  
          <span style="font-size:12px;color:#6b8aa8;font-weight:700">${S.splitMode==='custom'?'Who consumed? (select to enter amounts)':'Who consumed?'}</span>  
          <button class="btn" id="btn-all" style="padding:3px 10px;background:#1e2a38;color:#4a9eff;font-size:12px">${S.expParticipants.length===people.length?'Deselect All':'Select All'}</button>  
        </div>  
        <div style="display:flex;flex-wrap:wrap;gap:7px">  
          ${people.map(p=>`  
            <button class="chip ${S.expParticipants.includes(p.id)?'on':''} chip-p" data-pid="${p.id}">  
              ${p.photo?`<img src="${p.photo}" style="width:18px;height:18px;border-radius:50%;object-fit:cover"/>`:p.isDependent?'👶':avatar(p.name)}  
              ${esc(p.name)}  
              ${p.isDependent?`<span style="font-size:10px;color:#f0883e">→${esc(adults.find(a=>a.id===p.guardianId)?.name||'?')}</span>`:''}  
            </button>`).join('')}  
        </div>  
        ${S.splitMode==='equal'&&S.expParticipants.length>0&&S.expAmount?`  
        <div style="font-size:11px;color:#2e4a64;margin-top:8px;font-weight:700">  
          ${fmt(parseFloat(S.expAmount)/resolveP(S.expParticipants,people).length)} per adult × ${resolveP(S.expParticipants,people).length}  
          ${S.expParticipants.some(id=>people.find(p=>p.id===id)?.isDependent)?' · dependents billed to guardian':''}  
        </div>`:''}  
      </div>  
  
      ${customRows}  
  
      <div style="display:flex;gap:8px;margin-top:12px">  
        <button class="btn" id="btn-save-exp" style="flex:1;padding:10px;background:#238636;color:#fff;font-size:14px">Save Expense</button>  
        <button class="btn" id="btn-cancel-exp" style="padding:10px 14px;background:#1e2a38;color:#6b8aa8;font-size:14px">✕</button>  
      </div>  
    </div>`:`  
    <button class="btn" id="btn-show-exp" style="width:100%;padding:13px;background:linear-gradient(135deg,#1a6630,#2ea043);color:#fff;font-size:15px;margin-bottom:14px;border-radius:12px">+ Add Expense</button>`}  
  
    ${expenses.length===0?`<div style="text-align:center;color:#1e2e3e;padding:40px 0;font-size:14px;font-weight:700">No expenses yet 🎉</div>`:`  
    <div class="label">${expenses.length} expense${expenses.length!==1?'s':''} · ${fmt(total)} total</div>  
    ${[...expenses].reverse().map(e=>{  
      const isCustom=e.splitMode==='custom';  
      const addedByMe=e.addedBy===ME;  
      return`<div class="card anim-pop" style="margin-bottom:10px;${!e.reviewed?'border-color:#f0883e28':'border-color:#3fb95028'}">  
        <div style="display:flex;justify-content:space-between;align-items:flex-start">  
          <div style="display:flex;gap:12px;flex:1;min-width:0">  
            <div style="font-size:26px;line-height:1;flex-shrink:0">${expEmoji(e.desc)}</div>  
            <div style="flex:1;min-width:0">  
              <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">  
                <span style="font-weight:800;font-size:15px">${esc(e.desc)}</span>  
                <span style="font-size:10px;padding:2px 7px;border-radius:10px;font-weight:800;${e.reviewed?'background:#3fb95022;color:#3fb950;border:1px solid #3fb95044':'background:#f0883e22;color:#f0883e;border:1px solid #f0883e44'}">${e.reviewed?'✅ Reviewed':'⏳ Pending'}</span>  
                ${isCustom?`<span style="font-size:10px;padding:2px 7px;border-radius:10px;font-weight:800;background:#a66eff22;color:#a66eff;border:1px solid #a66eff44">✏️ Custom</span>`:''}  
              </div>  
              <div style="font-size:12px;color:#4a6a88;margin-top:2px">Paid by <span style="color:#4a9eff">${esc(pName(e.payerId))}</span> · Added by <span style="color:#6b8aa8">${esc(e.addedBy||'?')}</span></div>  
              ${isCustom  
                ?`<div style="font-size:11px;color:#2e4a64;margin-top:2px">${Object.entries(e.customShares||{}).map(([pid,amt])=>`${esc(pName(pid))}: ${fmt(amt)}`).join(' · ')}</div>`  
                :`<div style="font-size:11px;color:#3fb950;margin-top:2px">${fmt(e.amount/e.participants.length)}/person × ${e.participants.length}</div>`}  
            </div>  
          </div>  
          <div style="text-align:right;margin-left:10px;flex-shrink:0">  
            <div style="font-family:'Fredoka One',cursive;font-size:18px">${fmt(e.amount)}</div>  
            <div style="display:flex;gap:4px;margin-top:6px;justify-content:flex-end">  
              ${isOwner&&!e.reviewed?`<button class="btn btn-review" data-eid="${e.id}" style="padding:3px 8px;background:#3fb95022;color:#3fb950;font-size:11px;border:1px solid #3fb95044">✅ Review</button>`:''}  
              ${isOwner||addedByMe?`<button class="btn btn-del-exp" data-eid="${e.id}" style="padding:3px 8px;background:#1e2a38;color:#f85149;font-size:11px">🗑</button>`:''}  
            </div>  
          </div>  
        </div>  
      </div>`;}).join('')}`}  
  </div>`;  
}  
  
// ── SETTLE TAB ────────────────────────────────────────────────────────────  
function tabSettle(t,people,adults,expenses,isOwner,pName){  
  if(adults.length<2||expenses.length===0) return`  
    <div style="text-align:center;color:#1e2e3e;padding:60px 0">  
      <div style="font-size:50px;margin-bottom:12px">🧮</div>  
      <div style="font-size:14px;font-weight:700">Add at least 2 members &amp; 1 expense.</div>  
    </div>`;  
  
  const {bal,txns}=settle(adults,expenses);  
  const total=expenses.reduce((s,e)=>s+e.amount,0);  
  
  return`<div class="anim-up">  
    <button class="btn" id="btn-pdf" style="width:100%;padding:13px;background:linear-gradient(135deg,#6e30cc,#a66eff);color:#fff;font-size:15px;margin-bottom:18px;border-radius:12px">  
      🧾 Export Trip Report (PDF)  
    </button>  
  
    <div class="label">Balance Summary</div>  
    ${adults.map(p=>{  
      const b=bal[p.id]||0;  
      const deps=people.filter(x=>x.isDependent&&x.guardianId===p.id);  
      return`<div class="card anim-pop" style="margin-bottom:8px;display:flex;align-items:center;justify-content:space-between">  
        <div style="display:flex;align-items:center;gap:10px">  
          ${avHtml(p,42)}  
          <div>  
            <div style="font-weight:800">${esc(p.name)}</div>  
            ${p.upi?`<div style="font-size:11px;color:#4a9eff">💳 ${esc(p.upi)}</div>`:''}  
            ${deps.length?`<div style="font-size:11px;color:#f0883e">+${deps.map(d=>esc(d.name)).join(', ')}</div>`:''}  
          </div>  
        </div>  
        <div style="text-align:right">  
          <div style="font-family:'Fredoka One',cursive;font-size:18px;color:${b>0?'#3fb950':b<0?'#f85149':'#2e4a64'}">${b>0?'+':''}${fmt(b)}</div>  
          <div style="font-size:11px;color:#2e4a64">${b>0?'gets back':b<0?'owes':'settled ✅'}</div>  
        </div>  
      </div>`;}).join('')}  
  
    <div class="label" style="margin-top:20px">${txns.length===0?'✅ All Settled!':`${txns.length} Payment${txns.length!==1?'s':''} needed`}</div>  
    ${txns.length===0?`<div style="text-align:center;font-size:44px;padding:20px 0">🎉</div>`:''}  
    ${txns.map(tx=>{  
      const toP=people.find(p=>p.id===tx.to);  
      return`<div class="card anim-pop" style="margin-bottom:8px;border-color:#4a9eff28">  
        <div style="display:flex;align-items:center;justify-content:space-between">  
          <div style="display:flex;align-items:center;gap:10px">  
            ${avHtml(people.find(p=>p.id===tx.from),36)}  
            <div style="font-size:14px">  
              <span style="font-weight:800;color:#f85149">${esc(pName(tx.from))}</span>  
              <span style="color:#2e4a64;margin:0 6px">pays</span>  
              <span style="font-weight:800;color:#3fb950">${esc(pName(tx.to))}</span>  
            </div>  
            ${avHtml(toP,36)}  
          </div>  
          <div style="font-family:'Fredoka One',cursive;font-size:20px;color:#4a9eff">${fmt(tx.amount)}</div>  
        </div>  
        ${toP?.upi?`<div style="margin-top:8px;padding:7px 10px;background:#4a9eff0d;border-radius:8px;font-size:12px;color:#4a9eff">💳 Pay via UPI: <b>${esc(toP.upi)}</b></div>`:''}  
      </div>`;}).join('')}  
  
    <div class="label" style="margin-top:20px">Per Person Breakdown</div>  
    ${adults.map(p=>{  
      const myExp=expenses.filter(e=>e.splitMode==='custom'?e.customShares?.[p.id]!=null:e.participants?.includes(p.id));  
      const consumed=myExp.reduce((s,e)=>s+(e.splitMode==='custom'?(e.customShares?.[p.id]||0):e.amount/e.participants.length),0);  
      const paid=expenses.filter(e=>e.payerId===p.id).reduce((s,e)=>s+e.amount,0);  
      const deps=people.filter(x=>x.isDependent&&x.guardianId===p.id);  
      return`<div class="card" style="margin-bottom:10px">  
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">  
          ${avHtml(p,36)}  
          <div style="flex:1">  
            <div style="font-weight:800">${esc(p.name)}${deps.length?`<span style="color:#f0883e;font-size:12px"> +${deps.map(d=>esc(d.name)).join(', ')}</span>`:''}</div>  
            ${p.upi?`<div style="font-size:11px;color:#4a9eff">💳 ${esc(p.upi)}</div>`:''}  
          </div>  
          <div style="font-size:11px;color:#2e4a64;text-align:right">  
            <div>Paid ${fmt(paid)}</div>  
            <div>Consumed ${fmt(consumed)}</div>  
          </div>  
        </div>  
        ${myExp.length===0?`<div style="font-size:12px;color:#1e2e3e">No expenses</div>`:''}  
        ${myExp.map(e=>`<div style="display:flex;justify-content:space-between;font-size:12px;color:#4a6a88;padding:4px 0;border-top:1px solid #1a2434">  
          <span>${expEmoji(e.desc)} ${esc(e.desc)}</span>  
          <span style="color:#dce6f0;font-weight:700">${fmt(e.splitMode==='custom'?(e.customShares?.[p.id]||0):e.amount/e.participants.length)}</span>  
        </div>`).join('')}  
      </div>`;}).join('')}  
  </div>`;  
}  
  
// ── EDIT PERSON MODAL ─────────────────────────────────────────────────────  
function modalEdit(p,adults){  
  return`<div style="position:fixed;inset:0;z-index:200;display:flex;align-items:center;justify-content:center;padding:16px">  
    <div id="modal-bg" style="position:absolute;inset:0;background:rgba(0,0,0,.75);backdrop-filter:blur(4px)"></div>  
    <div style="position:relative;background:#131920;border:1px solid #1e2a38;border-radius:20px;padding:24px;width:100%;max-width:380px;z-index:201" class="anim-pop">  
      <div style="font-family:'Fredoka One',cursive;font-size:20px;color:#4a9eff;margin-bottom:20px">✏️ Edit Member</div>  
      <div style="display:flex;align-items:center;gap:16px;margin-bottom:20px">  
        <div style="position:relative;cursor:pointer" id="btn-photo">  
          <div style="width:72px;height:72px;border-radius:50%;overflow:hidden;border:2px solid #1e2a38;background:#0b0f14;display:flex;align-items:center;justify-content:center;font-size:34px">  
            ${p.photo?`<img src="${p.photo}" style="width:100%;height:100%;object-fit:cover"/>`:p.isDependent?'👶':avatar(p.name)}  
          </div>  
          <div style="position:absolute;bottom:0;right:0;width:22px;height:22px;border-radius:50%;background:#4a9eff;display:flex;align-items:center;justify-content:center;font-size:12px;border:2px solid #131920">📷</div>  
        </div>  
        <div style="flex:1">  
          <div style="font-weight:700;font-size:13px;color:#dce6f0;margin-bottom:4px">Profile Photo</div>  
          <div style="font-size:11px;color:#3a5a78;line-height:1.5">Tap to upload. Auto-cropped.</div>  
          ${p.photo?`<button class="btn" id="btn-rm-photo" style="margin-top:6px;padding:2px 10px;background:#1e2a38;color:#f85149;font-size:11px">Remove</button>`:''}  
        </div>  
        <input type="file" id="photo-inp" accept="image/*" style="display:none"/>  
      </div>  
      <div class="label">Name</div>  
      <input class="inp" id="edit-name" value="${esc(p.name)}" style="margin-bottom:14px"/>  
      <div class="label">UPI ID <span style="color:#2e4a64;text-transform:none;font-size:10px;letter-spacing:0">(optional)</span></div>  
      <input class="inp" id="edit-upi" value="${esc(p.upi||'')}" placeholder="e.g. raj@upi" style="margin-bottom:14px"/>  
      <label style="display:flex;align-items:center;gap:8px;margin-bottom:14px;cursor:pointer;font-size:13px;color:#6b8aa8;user-select:none">  
        <input type="checkbox" id="edit-dep" ${p.isDependent?'checked':''} style="width:16px;height:16px;accent-color:#f0883e"/> 👶 Dependent  
      </label>  
      ${p.isDependent?`<select class="inp" id="edit-guardian" style="margin-bottom:14px">  
        <option value="">— Guardian —</option>  
        ${adults.filter(a=>a.id!==p.id).map(a=>`<option value="${a.id}" ${p.guardianId===a.id?'selected':''}>${avatar(a.name)} ${esc(a.name)}</option>`).join('')}  
      </select>`:''}  
      <div style="display:flex;gap:8px">  
        <button class="btn" id="btn-save-person" style="flex:1;padding:11px;background:linear-gradient(135deg,#1254cc,#4a9eff);color:#fff;font-size:14px">Save</button>  
        <button class="btn" id="btn-cancel-edit" style="padding:11px 16px;background:#1e2a38;color:#6b8aa8;font-size:14px">Cancel</button>  
      </div>  
    </div>  
  </div>`;  
}  
  
// ── BIND TRIP ─────────────────────────────────────────────────────────────  
function bindTrip(t){  
  const people=t.people||[], adults=people.filter(p=>!p.isDependent);  
  const isOwner=t.ownerId===ME;  
  
  // Top  
  document.getElementById('btn-home')?.addEventListener('click',()=>set({activeTripId:null,tab:'people',showExpForm:false}));  
  document.getElementById('btn-edit-tname')?.addEventListener('click',()=>{if(isOwner)set({editTripName:true,tempTripName:t.name});});  
  document.getElementById('tname-inp')?.addEventListener('input',e=>S.tempTripName=e.target.value);  
  document.getElementById('tname-inp')?.addEventListener('blur',saveTripName);  
  document.getElementById('tname-inp')?.addEventListener('keydown',e=>(e.key==='Enter'||e.key==='Escape')&&saveTripName());  
  document.querySelectorAll('.tab-btn').forEach(b=>b.addEventListener('click',()=>set({tab:b.dataset.tab,showExpForm:false})));  
  
  // People  
  document.getElementById('new-name')?.addEventListener('input',e=>S.newName=e.target.value);  
  document.getElementById('chk-dep')?.addEventListener('change',e=>set({isDependent:e.target.checked}));  
  document.getElementById('sel-guardian')?.addEventListener('change',e=>S.guardianId=e.target.value);  
  document.getElementById('btn-add-person')?.addEventListener('click',addPerson);  
  document.querySelectorAll('.av-btn').forEach(b=>b.addEventListener('click',()=>{  
    const p=people.find(x=>x.id===b.dataset.pid);  
    if(p)set({editingPerson:{...p}});  
  }));  
  document.querySelectorAll('.btn-del-person').forEach(b=>b.addEventListener('click',()=>delPerson(b.dataset.pid)));  
  
  // Edit modal  
  document.getElementById('modal-bg')?.addEventListener('click',()=>set({editingPerson:null}));  
  document.getElementById('btn-cancel-edit')?.addEventListener('click',()=>set({editingPerson:null}));  
  document.getElementById('btn-save-person')?.addEventListener('click',saveEditedPerson);  
  document.getElementById('btn-photo')?.addEventListener('click',()=>document.getElementById('photo-inp')?.click());  
  document.getElementById('btn-rm-photo')?.addEventListener('click',()=>set({editingPerson:{...S.editingPerson,photo:null}}));  
  document.getElementById('photo-inp')?.addEventListener('change',async e=>{  
    const f=e.target.files[0]; if(!f)return;  
    const ph=await compress(f);  
    set({editingPerson:{...S.editingPerson,photo:ph}});  
  });  
  document.getElementById('edit-dep')?.addEventListener('change',e=>set({editingPerson:{...S.editingPerson,isDependent:e.target.checked}}));  
  document.getElementById('edit-guardian')?.addEventListener('change',e=>{ S.editingPerson.guardianId=e.target.value; });  
  
  // Expenses  
  document.getElementById('btn-show-exp')?.addEventListener('click',()=>{  
    if(people.length<2){alert('Add at least 2 members first!');return;}  
    set({showExpForm:true,expDesc:'',expAmount:'',expPayer:'',expParticipants:[],splitMode:'equal',customShares:{}});  
  });  
  document.getElementById('exp-desc')?.addEventListener('input',e=>S.expDesc=e.target.value);  
  document.getElementById('exp-amount')?.addEventListener('input',e=>{S.expAmount=e.target.value;render();});  
  document.getElementById('exp-payer')?.addEventListener('change',e=>S.expPayer=e.target.value);  
  document.getElementById('btn-all')?.addEventListener('click',()=>{  
    const all=people.map(p=>p.id);  
    set({expParticipants:S.expParticipants.length===all.length?[]:all,customShares:{}});  
  });  
  document.querySelectorAll('.split-mode-btn').forEach(b=>b.addEventListener('click',()=>set({splitMode:b.dataset.mode,customShares:{}})));  
  document.querySelectorAll('.chip-p').forEach(b=>b.addEventListener('click',()=>{  
    const pid=b.dataset.pid;  
    const cur=S.expParticipants;  
    const next=cur.includes(pid)?cur.filter(x=>x!==pid):[...cur,pid];  
    const shares={...S.customShares};  
    if(!next.includes(pid))delete shares[pid];  
    set({expParticipants:next,customShares:shares});  
  }));  
  document.querySelectorAll('.custom-share-inp').forEach(inp=>inp.addEventListener('input',e=>{  
    S.customShares={...S.customShares,[inp.dataset.pid]:e.target.value};  
    render();  
  }));  
  document.getElementById('btn-save-exp')?.addEventListener('click',saveExpense);  
  document.getElementById('btn-cancel-exp')?.addEventListener('click',()=>set({showExpForm:false}));  
  document.querySelectorAll('.btn-del-exp').forEach(b=>b.addEventListener('click',()=>delExpense(t,b.dataset.eid)));  
  document.querySelectorAll('.btn-review').forEach(b=>b.addEventListener('click',()=>reviewExpense(t,b.dataset.eid)));  
  
  // Settle  
  document.getElementById('btn-pdf')?.addEventListener('click',()=>printPDF(t));  
}  
  
// ── ACTIONS ───────────────────────────────────────────────────────────────  
async function createTrip(){  
  if(!S.newTripName.trim())return;  
  const t={id:uid(),name:S.newTripName.trim(),createdAt:Date.now(),ownerId:ME,people:[],expenses:[]};  
  await dbSaveTrip(t);  
  addMyId(t.id); subTrip(t.id);  
  set({showNewTrip:false,newTripName:'',myIds:getMyIds()});  
  openTrip(t.id);  
}  
  
async function joinTrip(){  
  if(!S.joinCode.trim()){set({joinError:'Enter a code'});return;}  
  set({joining:true,joinError:''});  
  const t=await dbJoin(S.joinCode);  
  if(!t){set({joining:false,joinError:'Trip not found. Check the code.'});return;}  
  addMyId(t.id); subTrip(t.id);  
  set({showJoin:false,joining:false,myIds:getMyIds()});  
  openTrip(t.id);  
}  
  
function openTrip(id){ set({activeTripId:id,tab:'people',showExpForm:false,newName:'',isDependent:false,guardianId:'',editingPerson:null}); }  
  
async function deleteTrip(id){  
  // Just remove locally — owner can delete  
  removeMyId(id);  
  if(uns[id]){uns[id]();delete uns[id];}  
  const {[id]:_,...rest}=S.trips;  
  set({trips:rest,myIds:getMyIds(),activeTripId:S.activeTripId===id?null:S.activeTripId});  
}  
function leaveTrip(id){ removeMyId(id); if(uns[id]){uns[id]();delete uns[id];} const {[id]:_,...rest}=S.trips; set({trips:rest,myIds:getMyIds()}); }  
  
async function saveTripName(){  
  if(!S.tempTripName.trim()){set({editTripName:false});return;}  
  const t=trip(); if(!t)return;  
  const updated={...t,name:S.tempTripName.trim()};  
  await dbSaveTrip(updated);  
  set({editTripName:false});  
}  
  
async function addPerson(){  
  if(!S.newName.trim())return;  
  const t=trip(); if(!t)return;  
  const p={id:uid(),name:S.newName.trim(),isDependent:S.isDependent,guardianId:S.isDependent?S.guardianId:'',photo:null,upi:''};  
  const updated={...t,people:[...t.people,p]};  
  await dbSaveTrip(updated);  
  set({newName:'',isDependent:false,guardianId:''});  
}  
  
async function saveEditedPerson(){  
  const t=trip(); if(!t||!S.editingPerson)return;  
  const name=document.getElementById('edit-name')?.value?.trim();  
  const upi=document.getElementById('edit-upi')?.value?.trim()||'';  
  const isDep=document.getElementById('edit-dep')?.checked||false;  
  const guardian=document.getElementById('edit-guardian')?.value||'';  
  if(!name)return;  
  const updated={...t,people:t.people.map(p=>p.id===S.editingPerson.id?{...S.editingPerson,name,upi,isDependent:isDep,guardianId:isDep?guardian:''}:p)};  
  await dbSaveTrip(updated);  
  set({editingPerson:null});  
}  
  
async function delPerson(pid){  
  const t=trip(); if(!t)return;  
  const updated={...t,  
    people:t.people.filter(p=>p.id!==pid&&p.guardianId!==pid),  
    expenses:t.expenses.filter(e=>e.payerId!==pid).map(e=>({...e,  
      participants:(e.participants||[]).filter(id=>id!==pid),  
      customShares:Object.fromEntries(Object.entries(e.customShares||{}).filter(([id])=>id!==pid))  
    }))  
  };  
  await dbSaveTrip(updated);  
}  
  
async function saveExpense(){  
  const t=trip(); if(!t)return;  
  if(!S.expDesc.trim()||!S.expAmount||!S.expPayer||S.expParticipants.length===0){alert('Please fill in all fields and select participants.');return;}  
  const amt=parseFloat(S.expAmount);  
  
  let exp;  
  if(S.splitMode==='custom'){  
    // Resolve to adult IDs  
    const resolvedIds=resolveP(S.expParticipants,t.people);  
    // Validate custom shares sum to total  
    const sharesTotal=resolvedIds.reduce((s,pid)=>s+parseFloat(S.customShares[pid]||0),0);  
    if(Math.abs(sharesTotal-amt)>0.5){  
      alert(`Custom shares total ${fmt(sharesTotal)} doesn't match expense amount ${fmt(amt)}. Please adjust.`);  
      return;  
    }  
    const customShares={};  
    resolvedIds.forEach(pid=>{ customShares[pid]=parseFloat(S.customShares[pid]||0); });  
    exp={id:uid(),desc:S.expDesc.trim(),amount:amt,payerId:S.expPayer,splitMode:'custom',customShares,participants:resolvedIds,addedBy:ME,reviewed:false,createdAt:Date.now()};  
  } else {  
    const participants=resolveP(S.expParticipants,t.people);  
    exp={id:uid(),desc:S.expDesc.trim(),amount:amt,payerId:S.expPayer,splitMode:'equal',participants,rawParticipants:[...S.expParticipants],addedBy:ME,reviewed:false,createdAt:Date.now()};  
  }  
  
  const updated={...t,expenses:[...t.expenses,exp]};  
  await dbSaveTrip(updated);  
  set({showExpForm:false,expDesc:'',expAmount:'',expPayer:'',expParticipants:[],splitMode:'equal',customShares:{}});  
}  
  
async function delExpense(t,eid){  
  const updated={...t,expenses:t.expenses.filter(e=>e.id!==eid)};  
  await dbSaveTrip(updated);  
}  
  
async function reviewExpense(t,eid){  
  const updated={...t,expenses:t.expenses.map(e=>e.id===eid?{...e,reviewed:true}:e)};  
  await dbSaveTrip(updated);  
}  
  
// ── Boot ──────────────────────────────────────────────────────────────────  
boot();  
</script>  
  
<!-- Service Worker registration -->  
  
<script>  
if('serviceWorker' in navigator){  
  navigator.serviceWorker.register('sw.js').catch(()=>{});  
}  
</script>  
  
</body>  
</html>  
