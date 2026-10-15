import{p as r,A as c,L as d}from"./index-Db2tNaHv.js";async function u(n){n.innerHTML=`
    <main class="runtime-verifier">
      <div class="runtime-copy">
        <p class="eyebrow">ENGINE VERIFICATION</p>
        <h1>Live2D Cubism 4</h1>
        <p>此页面只验证浏览器运行时能加载官方模型；它不代表西珀已经完成绑定。</p>
        <p id="runtime-status" role="status">正在加载模型…</p>
        <a href="${r()}">返回游戏 Preview</a>
      </div>
      <div id="live2d-canvas" aria-label="Live2D 官方验收模型"></div>
    </main>
  `;const a=n.querySelector("#runtime-status"),i=n.querySelector("#live2d-canvas");try{const t=new c({resizeTo:i,backgroundAlpha:0,antialias:!0,autoDensity:!0});i.appendChild(t.view);const e=await d.from(r("assets/live2d/Mark/Mark.model3.json"));t.stage.addChild(e);const s=()=>{const o=Math.min(i.clientWidth/e.width,i.clientHeight/e.height)*.88;e.scale.set(o),e.x=(i.clientWidth-e.width)/2,e.y=i.clientHeight-e.height};s(),window.addEventListener("resize",s),e.interactive=!0,e.on("pointertap",()=>e.motion("Idle")),a.textContent="运行时已加载 · 可移动指针观察视线并点击模型切换动作",a.dataset.ready="true"}catch(t){console.error(t),a.textContent=`运行时加载失败：${t instanceof Error?t.message:String(t)}`,a.dataset.ready="false"}}export{u as mountLive2DVerifier};
