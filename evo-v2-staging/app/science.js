/** Data-owned preview module: never interprets conceptual parallels as descent. */
export function validateScience(feature){
  if(feature.targetApplication!=="EVO-v2" || feature.publicationAuthorized!==false)
    throw new Error("EVO-only, nonpublished staging required");
  if(feature.diagram.connectionType!=="conceptual-parallel-not-lineage-ancestor")
    throw new Error("Unsafe evolutionary connection");
  if(feature.review.integratedIntoRuntime!==false)
    throw new Error("Source module marked as integrated");
  return true;
}
function el(tag,value){const n=document.createElement(tag);n.textContent=value;return n;}
export function renderFeature(host,feature){
  host.replaceChildren();
  host.append(el("h2",feature.title));
  host.append(el("p",feature.interpretation.summary));
  for(const [label,path] of [["Archaeplastida pathway",feature.diagram.primaryPathway],["Independent Paulinella pathway",feature.diagram.independentPathway]]){
    const section=document.createElement("section");section.append(el("h3",label));
    const list=document.createElement("ol");for(const step of path){const item=el("li",step);list.append(item);}
    section.append(list);host.append(section);
  }
  host.append(el("p","These pathways share an evolutionary process—not a plastid ancestor."));
  host.append(el("h3","Evidence and further reading"));
  const ul=document.createElement("ul");
  for(const ref of feature.references){const li=document.createElement("li");const a=document.createElement("a");a.href=ref.url;a.textContent=ref.title;a.rel="noopener noreferrer";a.target="_blank";li.append(a);ul.append(li);}
  host.append(ul);
  host.append(el("small","Provisional science feature; independent scientific review incomplete."));
}
