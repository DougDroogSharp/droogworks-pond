# DRAMATON EDITOR 2.0 — SALVAGE DOCUMENT
**Extracted Aug 17, 2026, before retirement of the editor from droogworks.**
Source: github.com/DougDroogSharp/Dramaton-Editor-2.0 (last commit Jan 15, 2026).
The surviving trunk is **dramaton-studio-62** (last commit Jan 19, 2026), live at droogworks.netlify.app/dramaton-studio/.
Rule of use: where the trunk and this salvage disagree, the trunk wins; this document preserves ideas, not authority.

---

## 1. Two DramScript dialects existed — know both

**2.0's dialect (older, simpler):**
- Dialogue: `Actor Name: "Dialogue text"`
- Flow: `>> GOTO: Scene Name` (any line starting `>>` is a command)
- Comments: `// ignored by engine`
- One line = one beat; first line auto-plays on scene entry.

**Studio's dialect (the living one):** bracketed commands `[SCENE id]`, `[COMMAND arg]` etc., dialogue `ACTOR: "text"`, comments `#` or `//`. Fully specified in the trunk's `docs/DRAM_SCRIPT.md` (568 lines, auto-generated from `src/utils/scriptDocs.ts`).

**Salvage value:** any old scripts written in 2.0 style need `>> GOTO:` translated to bracket form. Historical note: the `>>` arrow syntax is what broke the 2026 JSX compiler during resurrection — Dramscript's third recorded casualty.

## 2. AGENCY / WITNESS scene taxonomy ★ (possibly unique to 2.0)

Scenes carried a `type: 'AGENCY' | 'WITNESS'`:
- **AGENCY** — the player acts.
- **WITNESS** — the player watches, but reacts. Witness reactions were a fixed audience palette: **CHEER / BOO / SILENCE / WALK AWAY**.

This is a genuinely good narrative-engine idea — the audience-participation register of King of Chicago formalized. Not confirmed present in the trunk; worth re-importing when Dramaton powers the Phrog onboarding (the onboarding is mostly WITNESS with moments of AGENCY).

## 3. World state & gated content model

- `worldState`: flat key → string|number|boolean store (trunk has this too).
- **Scene requirements:** `requiredWorldState` — scene only available when state matches.
- **Item system:** categories `costume | prop | knowledge | gear`; acquisition `pickup | earned`; `unlockCondition` = {variable, operator (> < >= <= ==), threshold}; `effects` = list of {variable, value} applied on acquisition. Compact, orthogonal, worth keeping as the canonical item grammar.

## 4. Stage & actor representation

- **StageElement:** {assetId, type: ACTOR|ITEM|BALLOON, x, y, scale, zIndex, rotation, pose, expression, spriteAngle, activeSfx[]}.
- **Balloons are stage citizens:** `balloonType: SPEECH | THOUGHT` with text — speech as an object on stage, not UI chrome. (Rhymes with BIRO's speech-wears-speech law.)
- **Actor graphics matrix:** each actor holds a library of renders keyed by **pose × expression × angle**; canonical vocabularies:
  - EXPRESSIONS: Neutral, Happy, Angry, Confused, Flirting, Sad, Surprised, Disgusted
  - POSES: Close-up, Full Body, Jump, Run, Wave, Pointing, Crouch, Dead
  - ANGLES: 0, 45, 90, 135, 180, 225, 270, 315 (eight-point sprite compass)
- Actors carry reference images (close-up + full body) used as generation anchors, plus optional `voiceId`.

## 5. SFX taxonomy

Two categories: **ATTACH** (persistent, on an element: pulse, jiggle, glow, electric) and **DO** (momentary, on the stage: shake, fade). Params: intensity, speed, color, duration. CSS keyframes for all six live in the retired index.html (`sfx-shake`, `sfx-jiggle`, `sfx-pulse`, `sfx-electric`, plus CRT `flicker` and `scanlines`).

## 6. Voice pipeline (three tiers, degrade gracefully)

1. **Per-line audio cache:** `scene.audioData` maps *exact line text* → base64 audio; playback prefers cache.
2. **ElevenLabs** by actor `voiceId`; default roster preserved: Rachel 21m00Tcm4TlvDq8ikWAM, Domi AZnzlk1XvdvUeBnXmlld, Bella EXAVITQu4vr4xnSDxMaL, Antoni ErXwobaYiN019PkySvjV, Elli MF3mGyEYCl7XYWbV9V6O, Josh TxGEqnHWrfWFTfGW9XjX, Arnold VR6AewLTigWg4xSOukaG, Adam pNInz6obpgDQGcFmaJgB, Sam yoZ06aMxZJJ28mfd3POQ.
3. **Browser speechSynthesis fallback:** rate 1.0, pitch 0.9 ("slightly lower for cyberpunk feel"), prefers Google/Zira/Samantha voices.

## 7. Game-level settings worth keeping

`gameMode: INTERACTIVE | AUTO_PLAY`; `titleSceneId` (any scene can be the title screen); `styleGuide` (a prose art-direction string fed to image generation); `customPoses` / `customExpressions` (per-game vocabulary extension); autosave default-on; IndexedDB persistence via idb-keyval.

## 8. AI generation pattern

Sprite/backdrop generation used `gemini-2.5-flash-image` with prompts anchored to the actor's reference images + the game's styleGuide ("Generate a high-quality 2D game sprite…"). The *pattern* — reference-anchored, style-guide-governed generation — is the keeper; the vendor is swappable and, per Phrog graphics law, the Mage's own library gets first refusal.

## 9. Aesthetic (for the Museum, and maybe for Dramaton's soul)

The dieselpunk cockpit: palette diesel-black #0a0908 / panel #1e1c1a / gold #cba96d / rust #a64d2d / steel #c0cfda / paper #dccfbb; Courier New mono + Impact; CRT flicker + scanlines. Named vibe: analog instrument panel telling stories.

---
*Everything above was read out of the source before the site retired the running copy. The GitHub repo remains untouched as the permanent raw backup.*
