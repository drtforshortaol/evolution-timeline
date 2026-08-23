const events = [
{type:'cosmic',context:true,date:'~13.8 billion years ago',title:'Universe begins',summary:'The Universe begins expanding from an extremely hot, dense early state. Hydrogen and helium dominate the earliest matter.',why:'This creates the physical setting from which stars, planets, chemistry and eventually life become possible.',flow:'Universe → stars → heavier elements',details:['The “Big Bang” is not an explosion into empty space; it describes the early expansion of space itself.']},
{type:'cosmic',context:true,date:'~13.6–13.0 billion years ago',title:'First stars and galaxies',summary:'Early stars ignite. Fusion inside stars and later stellar explosions create and disperse many heavier elements.',why:'Carbon, oxygen, nitrogen, silicon, iron and other elements needed for rocky planets and life are forged through stellar evolution.',flow:'Stars make ingredients for later solar systems'},
{type:'cosmic',context:true,date:'~4.6 billion years ago',title:'Sun and Solar System form',summary:'A cloud of interstellar gas and dust collapses. The Sun forms at the center while the surrounding disk produces planetesimals and planets.',why:'The material inherited from earlier stars becomes organized into our Solar System.',flow:'Solar nebula → Sun + planets'},
{type:'earth',context:true,date:'~4.54 billion years ago',title:'Earth forms',summary:'Rocky material in the inner Solar System accretes into the young Earth.',why:'Earth becomes the planetary setting for the biological story.',flow:'Young Earth → cooling crust and oceans'},
{type:'earth',context:true,date:'~4.5 billion years ago',title:'Moon forms',summary:'The leading model involves a giant impact early in Earth’s history, followed by accretion of orbiting debris.',why:'The Moon becomes a major part of Earth’s long-term planetary history.'},
{type:'earth',context:true,date:'By ~4.4 billion years ago',title:'Early crust and liquid water',summary:'Ancient minerals indicate that parts of Earth’s crust and liquid water existed surprisingly early.',why:'Liquid water provides an important environment for prebiotic chemistry and early life.'},
{type:'life',date:'Perhaps ~4.3–4.2 billion years ago (?)',title:'Origin of life',major:true,summary:'Some form of prebiotic chemistry crossed the threshold into evolving biological systems. Exactly how, where and when this happened remains unknown.',why:'This is the beginning of biology, but it is not yet the point from which all modern cellular life can be traced.',uncertainty:'Highly uncertain. This is a perhaps-date for perspective, not a known date. Life must predate LUCA, which one recent molecular-clock study places at ~4.2 Ga.',flow:'Prebiotic chemistry ? → early evolving systems',details:[`What Is Life? Before we can explore the Tree of Life, we first need to answer a simple question: What is life?`,`A simple scientific definition is: “Life is a self-maintaining system that uses energy, responds to its environment, reproduces, and has the capacity to evolve.”`,`Scientists do not have one universally accepted definition of life, but they generally agree that all living organisms share a common set of characteristics. A simple way to remember these characteristics is with the mnemonic HORGASM.`,`H – Homeostasis: Maintains a stable internal environment.`,`O – Organization: Is composed of one or more cells, the basic units of life.`,`R – Reproduction: Produces new organisms and passes genetic information to the next generation.`,`G – Growth: Increases in size and develops throughout its life cycle.`,`A – Adaptation: Populations evolve over generations, improving their ability to survive and reproduce.`,`S – Response to Stimuli: Detects and responds to changes in the environment.`,`M – Metabolism: Obtains, transforms, and uses energy and matter to build, maintain, and power the organism.`]},
{type:'life',date:'Perhaps ~4.25–4.2 Ga (?)',title:'FUCA-type stage (?)',summary:'FUCA (“First Universal Common Ancestor”) is a proposed label for a very early ancestral stage near the emergence of the genetic code and cellular life.',why:'It helps distinguish the hypothetical earliest shared biological ancestry from LUCA, which is the last shared ancestor of living cellular lineages.',uncertainty:'FUCA is a hypothetical concept, not a securely dated organism or fossil.',flow:'Possibly hundreds of millions of years of early evolution → LUCA'},
{type:'life',date:'~4.2 billion years ago (recent estimate: ~4.33–4.09 Ga)',title:'LUCA — Last Universal Common Ancestor',major:true,summary:'The ancestral population from which all cellular life alive today ultimately descends. LUCA was not the first life.',why:'LUCA is the first major anchor for reconstructing the tree of life.',flow:'LUCA → Bacteria + Archaea',details:['Likely had DNA and RNA','Universal genetic code','Ribosomes and protein synthesis','ATP-based energy metabolism and ATP synthase','Cellular membrane and ion gradients','Basic metabolic pathways and reproduction','Did NOT have a nucleus, mitochondria or chloroplasts']},
{type:'life',date:'Perhaps ~4.1–3.5 billion years ago',title:'The Great Split — Bacteria and Archaea',major:true,summary:'Descendants of the universal ancestral population diverged into the two fundamental prokaryotic domains: Bacteria and Archaea.',why:'These two lineages remain distinct today, and both later contribute crucial pieces to the eukaryotic story.',uncertainty:'Highly uncertain. The deepest split must follow LUCA, and published molecular-clock approaches place very early bacterial/archaeal divergences across a broad Hadean-to-Paleoarchean interval. The perhaps-range is included for perspective.',flow:'Bacteria ← ancestral split → Archaea',details:['Bacteria: membranes with ester-linked fatty acids; cell walls commonly contain peptidoglycan.','Archaea: ether-linked membrane lipids; no peptidoglycan; information-processing machinery has important similarities to eukaryotes.','Living bacterial examples: cyanobacteria, E. coli, Bacillus, Streptococcus.','Living archaeal examples: methanogens, halophiles, thermophiles, ammonia-oxidizers and Asgard archaea.']},
{type:'life',date:'By ~2.7 billion years ago; possibly earlier',title:'Cyanobacteria and oxygenic photosynthesis',summary:'Cyanobacteria evolve photosynthesis that uses water and releases molecular oxygen (O₂).',why:'Biology begins altering the planet on a global scale. Early oxygen is initially consumed by reduced iron, volcanic gases and other oxygen sinks.',uncertainty:'Oxygenic photosynthesis predates the GOE; estimates for its origin extend substantially earlier than 2.7 Ga.',flow:'Cyanobacteria → O₂ production → planetary oxygenation'},
{type:'earth',date:'~2.45–2.3 billion years ago',title:'Great Oxidation Event',major:true,summary:'Atmospheric oxygen rises from extremely low pre-GOE levels and becomes a persistent component of the atmosphere.',why:'Oxygen transforms Earth’s surface chemistry and expands ecological opportunities for aerobic energy metabolism.',flow:'Near-anoxic atmosphere → persistent atmospheric O₂',details:['Before the GOE, atmospheric O₂ was probably below 10⁻⁵ of the present atmospheric level.','Today O₂ is about 21% of the atmosphere.','The exact peak O₂ concentration during and soon after the GOE remains strongly debated; the app therefore avoids presenting one precise percentage.']},
{type:'earth',context:true,date:'~2.4–2.2 billion years ago',title:'Major Paleoproterozoic glaciations',summary:'Large glaciations occur around the broad interval of planetary oxygenation and major atmospheric change.',why:'A reminder that biological and planetary evolution are interacting, not occurring separately.'},
{type:'life',date:'~2.37–1.80 billion years ago (broad molecular-clock window)',title:'Mitochondrial endosymbiosis',major:true,summary:'An archaeal host related to the lineage that includes Asgard archaea forms a permanent partnership with an alphaproteobacterial relative capable of aerobic respiration.',why:'The bacterial partner becomes the mitochondrion, a defining feature of the eukaryotic lineage and a major expansion of cellular energy-processing capacity.',uncertainty:'The exact date and sequence of steps in eukaryogenesis remain debated; recent molecular-clock work places mitochondrial acquisition before LECA within this broad interval.',flow:'Archaeal host + alphaproteobacterial partner → mitochondrion',details:['Evidence for bacterial ancestry: mitochondrial DNA, bacterial-type ribosomes, double membrane, division by fission and phylogenetic affinity to Alphaproteobacteria.','For clarity, this app calls this “mitochondrial endosymbiosis”; “primary endosymbiosis” is reserved for plastid origin.']},
{type:'life',date:'~1.80–1.67 billion years ago (one recent estimate)',title:'LECA — Last Eukaryotic Common Ancestor',major:true,summary:'The ancestral population from which all living eukaryotic lineages descend. LECA was not the first eukaryote.',why:'By LECA, the core architecture of the modern eukaryotic cell was already highly developed.',uncertainty:'Molecular-clock estimates vary; published ranges extend more broadly than the interval shown here.',flow:'LECA → major eukaryotic diversification',details:['Mitochondria','Nucleus and linear chromosomes','Complex cytoskeleton','Internal membrane systems','Vesicle trafficking','Mitosis','Probably meiosis and sexual reproduction','Flagellar/ciliary machinery']},
{type:'life',date:'Perhaps ~1.8–1.5 billion years ago',title:'Eukaryotes diversify — three pathways we will follow',major:true,summary:'After LECA, eukaryotes branch into many lineages. To keep the story simple, this timeline follows three pathways: (1) the lineage leading to fungi and animals, (2) the primary-plastid lineage leading to red algae, green algae and plants, and (3) a separate eukaryotic lineage that later acquires a red alga and ultimately leads to brown algae and kelp.',why:'This is a teaching map, not a claim that eukaryotes split into only three groups.',uncertainty:'The branching occurred over long intervals and exact divergence dates vary among molecular-clock studies.',flow:'LECA → many eukaryotic lineages → three pathways followed here',details:['Pathway 1: a eukaryotic lineage → fungi and animals.','Pathway 2: a eukaryotic lineage + cyanobacterium → primary endosymbiosis → chloroplast → red algae + green algae → land plants.','Pathway 3: another eukaryotic lineage later engulfs a red alga → secondary endosymbiosis → lineage leading to brown algae → kelp.','Living unicellular eukaryotes remain on many branches; examples include amoebae, Paramecium, dinoflagellates, diatoms, yeasts and choanoflagellates.']},
{type:'life',date:'Perhaps ~1.6–1.0 billion years ago',title:'Pathway 1 — lineage toward fungi and animals',summary:'One branch of eukaryotic diversification ultimately gives rise to the lineages we recognize as fungi and animals.',why:'Animals and fungi are eukaryotes that never acquired chloroplasts; their cells retain the mitochondrial inheritance shared by eukaryotes.',uncertainty:'The deep divergence dates are molecular-clock estimates and vary by study.',flow:'Eukaryotic lineage → fungi + animals'},
{type:'life',date:'Probably before ~1.6 Ga; estimates extend roughly ~2.1–1.0 Ga',title:'Pathway 2 — primary plastid endosymbiosis',major:true,summary:'A different eukaryotic lineage permanently incorporates a cyanobacterium. The cyanobacterial partner evolves into a primary plastid — the ancestor of chloroplasts.',why:'This establishes the photosynthetic lineage that eventually includes red algae, green algae and land plants.',uncertainty:'Dating is actively debated. Different fossil calibrations and molecular clocks give substantially different estimates.',flow:'Eukaryote + cyanobacterium → primary endosymbiosis → chloroplast',details:['Why “primary”? The engulfed partner is a bacterium — a cyanobacterium — rather than another eukaryotic alga.','Chloroplast evidence for cyanobacterial ancestry includes plastid DNA, bacterial-type ribosomes, division by fission and membrane architecture.']},
{type:'life',date:'By ~1.05 billion years ago',title:'Red algae and green algae',summary:'The primary-plastid lineage diversifies into major photosynthetic branches including red algae and the green lineage.',why:'The green lineage eventually gives rise to land plants. The red-algal lineage later becomes the photosynthetic partner in the secondary-endosymbiosis story.',uncertainty:'A widely accepted red-algal fossil is ~1.05 Ga; candidate fossils may push this history considerably earlier.',flow:'Primary plastid lineage → red algae + green algae'},
{type:'life',date:'Perhaps ~1.7–1.3 billion years ago (?)',title:'Pathway 3 — secondary endosymbiosis involving a red alga',major:true,summary:'Another eukaryotic lineage engulfs an already photosynthetic red alga. The red alga becomes integrated rather than remaining an independent cell, and its photosynthetic plastid is retained.',why:'This red-algal photosynthetic inheritance ultimately contributes to the lineage that gives rise to brown algae.',uncertainty:'The big-picture relationship is well supported, but the exact ancient route, number of transfers and timing remain debated. The date shown is a perhaps-range for chronological perspective.',flow:'Eukaryotic host + red alga → secondary endosymbiosis → lineage toward brown algae',details:['Why “secondary”? Primary endosymbiosis happened first when a eukaryote engulfed a cyanobacterium. The resulting plastid was inherited by red algae. Secondary endosymbiosis happened later when another eukaryote engulfed an entire red alga that already contained that plastid.','The simple picture is nested ancestry: cyanobacterium → chloroplast inside a red alga → red alga engulfed by another eukaryote.','What was kept? Most importantly, the photosynthetic plastid was retained and integrated. Some red-algal genetic contributions also became incorporated into the host system.','What was lost? Most of the red alga’s independent cellular identity and structures disappeared over evolutionary time; in the lineage relevant to brown algae, the red-algal nucleus did not remain as a separate nucleus.','The result was not a red alga living permanently inside a brown alga. It was a newly integrated photosynthetic eukaryotic lineage with a plastid of red-algal ancestry.','Scientific caution: the exact path by which red-algal-derived plastids reached the ancestors of brown algae is more complex and remains debated. The main timeline intentionally shows the accepted big-picture relationship rather than every uncertain intermediate transfer.']},
{type:'life',date:'Perhaps ~500–200 million years ago (?)',title:'Brown-algal lineage and brown algae',summary:'Much later, within the eukaryotic lineage carrying this red-algal photosynthetic inheritance, the brown-algal lineage emerges and diversifies.',why:'Brown algae are not plants. They reached complex multicellularity along a separate eukaryotic pathway.',uncertainty:'Deep brown-algal divergence dates vary substantially among molecular-clock studies; this broad range is included to preserve chronological perspective.',flow:'Secondary-endosymbiosis pathway → brown-algal lineage → brown algae'},
{type:'life',date:'~470–450 million years ago',title:'Land plants become established',summary:'Descendants of the green algal lineage colonize terrestrial environments and diversify as land plants.',why:'A photosynthetic lineage that began with ancient primary plastid endosymbiosis now reshapes continents and terrestrial ecosystems.',flow:'Green algal lineage → land plants'},
{type:'life',date:'~34 million years ago',title:'Kelps emerge',major:true,summary:'Large marine brown algae in the kelp lineage (Laminariales) appear comparatively late in Earth history. Fossil and molecular evidence points near the Eocene–Oligocene transition.',why:'Kelp is the late outcome of a very old chain of events: cyanobacterium → primary plastid → red alga → secondary endosymbiosis → brown-algal lineage → kelp.',uncertainty:'The kelp fossil record is sparse; published molecular estimates have ranged more broadly, but early Oligocene fossils support an origin around this interval.',flow:'Brown algae → kelp → modern kelp forests'},
{type:'human',context:true,date:'~8–6 million years ago',title:'Human lineage and chimpanzee/bonobo lineage share a last common ancestor',summary:'The human lineage is one branch of the ape family tree; humans did not descend from living chimpanzees.',why:'This begins the very short human-scale portion of the timeline.'},
{type:'human',context:true,date:'~2.8 million years ago',title:'Earliest Homo',summary:'The genus Homo appears in the African fossil record.',why:'Human evolutionary history remains tiny compared with the billions of years preceding it.'},
{type:'human',context:true,date:'~300,000 years ago',title:'Homo sapiens',major:true,summary:'Our species appears in Africa and later spreads worldwide.',why:'Modern humans arrive extremely late in the history of Earth and life.'},
{type:'human',context:true,date:'Within the last ~12,000 years',title:'Agriculture',summary:'Multiple human societies begin farming and herding, transforming local ecosystems and eventually much of the planet.',why:'Cultural change now occurs on timescales far faster than deep biological evolution.'},
{type:'human',context:true,date:'~5,000 years ago',title:'Writing and recorded history',summary:'Writing systems appear in several early civilizations.',why:'Nearly all written history occupies only a microscopic sliver of the full timeline.'},
{type:'human',context:true,date:'~250 years ago to today',title:'Industrial age and present day',summary:'Industrialization rapidly increases human influence on Earth systems. Modern atmospheric oxygen is ~21% by volume.',why:'The 13.8-billion-year story reaches the present.'}
];

const timeline = document.getElementById('timeline');
const contextToggle = document.getElementById('contextToggle');
const uncertaintyToggle = document.getElementById('uncertaintyToggle');
const expandAll = document.getElementById('expandAll');
let allOpen = false;

function esc(s=''){return s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function render(){
  timeline.innerHTML = events.map((e,i)=>{
    const details = e.details?.length ? `<details class="details" ${allOpen?'open':''}><summary>Learn more</summary><ul>${e.details.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></details>`:'';
    return `<article class="event ${e.type} ${e.context?'context':''}" data-index="${i}">
      <span class="marker" aria-hidden="true"></span>
      <div class="event-card ${e.major?'major':''}">
        <div class="kicker">${e.type}</div>
        <h2>${esc(e.title)}</h2>
        <p class="date">${esc(e.date)}</p>
        <p class="summary">${esc(e.summary)}</p>
        ${e.why?`<p class="why"><strong>Why it matters:</strong> ${esc(e.why)}</p>`:''}
        ${e.flow?`<p class="flow">${esc(e.flow)}</p>`:''}
        ${e.uncertainty?`<p class="uncertainty"><strong>Uncertainty:</strong> ${esc(e.uncertainty)}</p>`:''}
        ${details}
      </div>
    </article>`
  }).join('');
}
render();

contextToggle.addEventListener('change',()=>timeline.classList.toggle('context-hidden',!contextToggle.checked));
uncertaintyToggle.addEventListener('change',()=>timeline.classList.toggle('uncertainty-hidden',!uncertaintyToggle.checked));
document.querySelectorAll('.mode').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.mode').forEach(b=>b.classList.remove('active')); btn.classList.add('active');
  timeline.classList.toggle('compact',btn.dataset.mode==='compact');
}));
expandAll.addEventListener('click',()=>{allOpen=!allOpen;render();expandAll.textContent=allOpen?'Collapse all details':'Expand all details';});

let deferredPrompt;
const installBtn=document.getElementById('installBtn');
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;installBtn.hidden=false;});
installBtn.addEventListener('click',async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;installBtn.hidden=true;});

const refreshApp = document.getElementById('refreshApp');
const updateStatus = document.getElementById('updateStatus');

async function refreshToLatest(){
  refreshApp.disabled = true;
  const original = refreshApp.textContent;
  refreshApp.textContent = 'Checking…';
  updateStatus.textContent = 'Checking GitHub for the newest version…';
  try {
    if ('serviceWorker' in navigator) {
      const reg = await navigator.serviceWorker.getRegistration('./');
      if (reg) {
        await reg.update();
        if (reg.waiting) reg.waiting.postMessage({type:'SKIP_WAITING'});
      }
    }
    if ('caches' in window) {
      const keys = await caches.keys();
      await Promise.all(keys.filter(k=>k.startsWith('evolution-timeline-')).map(k=>caches.delete(k)));
    }
    updateStatus.textContent = 'Updating…';
    const url = new URL(location.href);
    url.searchParams.set('refresh', Date.now().toString());
    location.replace(url.toString());
  } catch (err) {
    updateStatus.textContent = 'Could not refresh. Check the internet connection and try again.';
    refreshApp.disabled = false;
    refreshApp.textContent = original;
  }
}
refreshApp.addEventListener('click', refreshToLatest);

if('serviceWorker' in navigator){
  window.addEventListener('load',async()=>{
    try {
      const reg = await navigator.serviceWorker.register('./sw.js');
      // Ask the browser to check GitHub for a newer service worker on each online launch.
      if (navigator.onLine) await reg.update();
    } catch (_) {}
  });
}

