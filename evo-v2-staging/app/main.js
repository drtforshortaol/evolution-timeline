import { validateScience, renderFeature } from "./science.js";
const host=document.getElementById("content");
try {
  const response=await fetch("../features/paulinella.json",{cache:"no-store"});
  if (!response.ok) throw new Error("Science module unavailable");
  const feature=await response.json();
  validateScience(feature);
  renderFeature(host,feature);
} catch(error) {
  host.replaceChildren();
  const p=document.createElement("p");
  p.textContent="Preview unavailable: "+error.message;
  host.append(p);
}
