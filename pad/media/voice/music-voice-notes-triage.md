# Slice M — Music Triage
### deduplicated edition

**Source:** `Dropbox/Voice Notes/Music/` (recursive)  
**Recordings:** 804 unique, from 1060 files | **Audio:** 26.6 h unique (28.0 h on disk)  
**Engine:** Whisper `small.en`, 30-second probes · triage only, per runbook §8  
**Run:** 2026-08-18

---

## What changed in this edition

The first pass listed all 1060 files. **256 of them were the same recording stored
more than once** — as an `.mp3` and a `.wav` of one take, again under a `DZ_` prefix
instead of `DW_`, again with a four-digit hash glued on (`DW A0587-1634`), and in a
few places again with `revording` for `Recording`. This edition keeps **one filename
per recording** and drops the rest.

Duplicates were matched on normalised filename **and identical duration**, not on
the transcript. That matters: the `.mp3` and `.wav` of one take routinely produced
two different Whisper guesses — `DW_A0045` came out as both *"do with poofs on
cracked eggs"* and *"do whiff-a-poof song, um, on crack mix"* — so matching on text
would have split real twins. Duration is the audio; text is only an opinion about it.

Where twins disagreed, the **cleanest filename** was kept and the **best transcript**
of the set was kept with it, which are not always the same file. 69 entries below
carry a transcript taken from a discarded twin that heard the take more clearly.

Entries marked `×N copies` existed N times. Nothing was deleted from Dropbox — this
is a reading of the archive, not a change to it.

## Verdict counts

| Verdict | Recordings | Audio | What it means |
|---|---:|---:|---|
| NOTE | 288 | 1.4 h | **Voice note** — Doug dictating an idea. Candidate for a full pass. |
| MUSIC | 400 | 13.8 h | Music, sound sample, or silence. No speech. Left alone. |
| FIELD | 58 | 10.4 h | Real speech, not a note — family, dogs, ambience, phone calls. |
| FOUND | 19 | 0.8 h | Speech Doug *captured* to sample — broadcast, film, ads, sermons. |
| GEAR | 34 | 0.1 h | Mic checks, slates, level tests. |
| UNCERTAIN | 5 | 0.1 h | Could not call it from 30 seconds. |
| **TOTAL** | **804** | **26.6 h** | |

Against the first edition: **453 flagged notes collapse to 288 real ones.**
`Music projects` was storing most of its ideas two or three times over.

## By folder

| Folder | Files on disk | Unique | NOTE | MUSIC | FIELD | FOUND | GEAR | ? |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| `Music projects` | 392 | 236 | 231 | 2 | 0 | 0 | 0 | 3 |
| `Real Music for Normal People` | 19 | 19 | 18 | 0 | 0 | 0 | 0 | 1 |
| `(Music root)` | 25 | 25 | 10 | 4 | 2 | 9 | 0 | 0 |
| `Sounds and Samples` | 591 | 492 | 29 | 388 | 32 | 8 | 34 | 1 |
| `Samples (Music)` | 29 | 28 | 0 | 6 | 21 | 1 | 0 | 0 |
| `Alia and Judy` | 2 | 2 | 0 | 0 | 2 | 0 | 0 | 0 |
| `Medical Commercial Warnings` | 2 | 2 | 0 | 0 | 1 | 1 | 0 | 0 |

---

## The headline, unchanged

`Music/Music projects/` is **not music.** Every file is Doug at a dictaphone,
rattling off song, album, band-name and studio-technique ideas — one idea per file,
most under 30 seconds. `Real Music for Normal People/` is the same thing, narrower.

Because the notes are short, the 30-second probe captured the **whole recording**
for 256 of the 288 flagged notes. Those transcripts are complete as printed.
**Only 32 recordings need a genuine full-length pass** — §2.

## A note on accuracy

30-second machine probes, corrected against the project glossary and nothing else.
Mangled proper nouns are fixed; genuinely uncertain words are marked `[?]`. Nothing
has been smoothed or invented. Doug's dictation slate — he says *"new line"* to start
each item, a Dragon habit — is normalised to `[new line]`.

A second pass with Whisper's voice-activity filter **off** was run over every file
that came back silent, on the suspicion that VAD was eating quiet dictation. It was:
11 real notes came back (marked *VAD-off recovery*). The rest are genuinely music.

---

# 1 · FLAGGED — candidate voice notes

**288 recordings, 1.4 h.** The misfiled voice notes this triage was for.

## `Music projects` — 231 notes

**Work:** `unassigned` — see §5 for the projects these cluster into.

- **`120210_002.mp3`** — 11s · full file
  > [[new line]] music. Ask Alia to do a cover of this old brain.
- **`120216_022.mp3`** — 32s · first 30s of 32s
  > [[new line]]. Real new music for normal people. Blues. In the after world, you get to watch your life and death in infinity of times. Nominate.
- **`120329_001.mp3`** — 10s · full file
  > [[new line]] songs for Alia to cover this old brain and cure for pain
- **`120330_018.mp3`** — 13s · full file
  > Get the lead to write a song about our fashion place.
- **`120422_001.mp3`** — 13s · full file
  > [[new line]] music tell Alia or suggest to Alia that she do the mortal coil song with the heart
- **`120422_002.mp3`** — 28s · full file
  > [[new line]] music Real music for normal people the polka do it all about shagging in the hay In the hay all day Hey, hey, hey, hey, hey do it with a very suggestive beat with traditional polka
- **`120423_002.mp3`** — 26s · full file
  > [new line], real music for normal people, psychedelic, bubble of consciousness in the void. And I really like to play early Pink Floyd.
- **`120427_004.mp3`** — 15s · full file
  > [new line] Real music blues Daddy didn't like something about my color
- **`120702_003.MP3`** — 1m14s · first 30s of 1m14s
  > [[new line]], Alia, the serious song, maybe, it's got to have, if it's a Beach Boys treatment, it's got to have a catchy refrain and, you know, it should be, maybe that's where the silliness should reside and, you know, something like serious people, people from Syria.
- **`120817_002.mp3`** — 17s · full file
  > [[new line]] Real music for normal people the disco maybe call it cocaine brain I'm not here, but I'm having great fun
- **`120817_004.mp3`** — 9s · full file
  > Do Shakespeare's sonnets or other poems rhyming poems as rap
- **`120820_001.mp3`** — 17s · full file
  > [[new line]] song lyric maybe for the normal people Country of mustard She will smash your heart, but it's worth it for the ride
- **`120820_002.mp3`** — 39s · first 30s of 39s
  > [[new line]] just a funny observation to Alia laughing at you know how the how Craig asked if we were married and you know we looked at we've partners collaborators aid you know assistant but I think we should just call
- **`120905_002.mp3`** — 42s · first 30s of 42s
  > [[new line]] real music for normal people The love song I love the dirt under your fingernails this snot in your nose earwax
- **`120905_003.mp3`** — 29s · full file
  > [[new line]], real music for normal people. The love song after listening all the disgusting things that you love. about your pretty and your personality is bearable.
- **`120905_004.mp3`** — 17s · full file
  > [[new line]] real music for normal people Arena rock something like I've got a cock and I know how to use it I'm up on the stage making loud music and maybe on the
- **`120905_005.mp3`** — 23s · full file
  > [[new line]] real music for normal people the cover Should have like a couple with martini glasses with instead of olives and eyeballs
- **`121220_001.mp3`** — 19s · full file
  > [[new line]] Music a song Mandy and I came up with Hand me a Kleenex my girl laughed at my Phoenix. I dumped her body near me
- **`121225_003.mp3`** — 27s · full file
  > and I wanted to stop and turn around and say look you guys are you know I'm Doug everybody likes Doug but not everybody believes Doug is playing with a full tack being hunted like an animal was very painful I think that's it for the Doug for now
- **`121225_005.mp3`** — 5s · full file
  > You know how hard it is to get to that. Okay.
- **`121225_006.mp3`** — 27s · full file
  > Thank you You guys are shooting the wrong guy and I wanted to stop and turn around and say look you guys are you know? I'm Doug everybody likes Doug But not everybody believes Doug is playing with a full deck Watching Doug go through being hunted like an animal was very painful
- **`130708_026.mp3`** — 9s · full file
  > Sample, Jason Son.
- **`130708_035.mp3`** — 11s · full file
  > Something about channels, though, in which they just...
- **`130708_036.mp3`** — 18s · full file · *(VAD-off recovery)*
  > Um, I do a song just out of convos between Vince and I, called, uh, Personal The Racist It's regular, I'm seeing it.
- **`130708_037.mp3`** — 29s · full file
  > Just think about racism, you know, daily.
- **`130708_039.mp3`** — 29s · full file
  > Talk about how kids can end suicide because they realize it'll never be as groovy as a 59 and a half year old brain damaged.
- **`130708_040.mp3`** — 11s · full file
  > Just do interviews of favorite musicians occasionally on my blog, using the questions that I generally...
- **`130708_050.mp3`** — 15s · full file
  > Tell them you know I want to learn like two or three chords and get upstage and play with you on one song
- **`130708_056.mp3`** — 26s · full file
  > All I know is I've started 11. The most boring thing you say or play should be beyond that.
- **`130708_059.mp3`** — 10s · full file
  > Be sure and pass out passes to...
- **`130708_062.mp3`** — 8s · full file
  > Suggest the real drone machine with glass glass.
- **`130708_070.mp3`** — 9s · full file
  > Do an ultra geeky song about virtual world to graphic and the whole compendu-
- **`130708_095.mp3`** — 8s · full file
  > Music for people who don't like music
- **`130709_090.mp3`** — 34s · first 30s of 34s
  > I suggest group composing songs in a thread. Purposely use the thread.
- **`130709_092.mp3`** — 17s · full file
  > See if you can find the Vivid Blood Brothers Lost Boys, or just the opening.
- **`DS_20008.WMA`** — 13s · full file
  > This sad love song makes some correspondence between the kaching of the brass bed and the cash register.
- **`DS_20035 (2).WMA`** — 3s · full file
  > Next 12 remix tunes from my back catalog
- **`DS_20045.WMA`** — 31s · first 30s of 31s
  > My rapper name should be D Spot, D Spot, fresh out of Comstock, just to unabashedly nerdy nature
- **`DS_20112 (2).WMA`** — 9s · full file
  > Do the plunder pornix as dick change
- **`DS_20114 (2).WMA`** — 14s · full file
  > Look for songs that actually praise them to the sky Like anthems North Korean anthems Extolling their every virtue
- **`DS_20121 (2).WMA`** — 1m13s · first 30s of 1m13s
  > Palin-Cheney album, just right out, a theme album, just right out like 16 chapters, just Just a one-minor seropane is bored by...
- **`DS_20125.WMA`** — 5s · full file
  > sample a incontinence training
- **`DS_20126.WMA`** — 7s · full file
  > Cast Shakespeare play with the cast of Joe Smell
- **`DS_20135.WMA`** — 4s · full file
  > Wreck like music without beat
- **`DS_20141.WMA`** — 12s · full file
  > write a musical play a 20s comedy
- **`DS_20169.WMA`** — 24s · full file
  > do a premix album in which you pick five tracks, lousy tracks, and your target has to mix a song with them and gets to choose one additional track.
- **`DS_20186.WMA`** — 15s · full file
  > It's a jitsu Beatles band the corporal crappers horny farts club
- **`DS_20187.WMA`** — 16s · full file
  > write a Mathematic on, make all the songs out of Wawa trumpet, bass, hi-hat, horn sounds, and equations.
- **`DS_20188.WMA`** — 4s · full file
  > A song with just Cad Biel on screen stitched again.
- **`DS_20201.WMA`** — 13s · full file
  > two drum tracks at different speeds that beat against one another, of course.
- **`DS_20220.WMA`** — 9s · full file
  > Credemon[?] Machines side-scroller games let people construct them
- **`DS_20227.WMA`** — 16s · full file
  > Music project. Sample a bunch of old Scratchy 78's and do a piece of music.
- **`DS_20239.WMA`** — 6s · full file
  > Heart to heart pure flirting game Dramaton driven
- **`DS_20260.WMA`** — 13s · full file
  > music can you ever drive a beat with silences like just leave regular holes then establish
- **`DS_20268.WMA`** — 14s · full file
  > Do yummy yummy yummy, but I had another
- **`DS_20269.WMA`** — 20s · full file
  > Oh, do a rap with the drum, the frog drum, and like Indian cadences and melodies. I'll go all in just to make it look like freestyle.
- **`DS_20284.WMA`** — 21s · full file
  > to a song like Do the Lurch with very explicit lyrics about how to dance.
- **`DS_20290.WMA`** — 27s · full file
  > And not to be taken orally track my, you know, elective self surgery for the oral torture. Just take corroded master and turbo grind and muffins and, you know.
- **`DS_20293.WMA`** — 11s · full file
  > Find the video of that newswoman saying terrorist fist jab. See if you can turn it into music
- **`DS_20301.WMA`** — 36s · first 30s of 36s
  > do a bunch of songs called Portrait of Evil, or Portrait of Very Bad People, and the utterances of Bush administration people.
- **`DS_20428.WMA`** — 9s · full file
  > Yeah, at least I've forbidden words over the intercon, school intercon system would be a nice little scene in a movie.
- **`DS_20488.WMA`** — 19s · full file
  > Make a silent CD, but then Score it make scratches in and play it in a CD and sample those very distinctive sounds
- **`DS_20545.WMA`** — 17s · full file
  > any Aeolian wind instrument, I would want to have it off, or you turn it explicitly on to listen to it, because otherwise it just becomes part of the background.
- **`DS_20657.WMA`** — 49s · first 30s of 49s
  > Tiny pieces of music, music quotes, that... and the lyrics can just be conceits or factoids or images, rhyme or don't, quotes, just...
- **`DS_20664.WMA`** — 14s · full file
  > Sing Mairzy Doats in a death metal voice. Mairzy Doats and Doazy Doats! A metal! Dancy-divey!
- **`DS_20708.WMA`** — 20s · full file
  > Develop a personal performance table, portable, with laptop speakers, harp, and little performance services built in.
- **`DW A0467-5061.mp3`** — 10s · full file
  > www.smoosh.com S-M-O-O-S-H A 9 and 11 year old girl band.
- **`DW A0590-2620.mp3`** — 9s · full file
  > It's certainly a good riff for a rock song, like an early rock sort of thing.
- **`DW A0791-1200.mp3`** — 30s · full file
  > I wonder if you could build a PAW-powered voice synthesizer that are player digitized voices for Mika[?] to step on, say, walk or whiz or play. It might be interesting.
- **`DW S0130-7431.mp3`** — 20s · full file
  > word orchestra have a whole section of speakers speak the same word or phrase while others are speaking different phrases perhaps a prana bass perhaps not
- **`DW S0135-8347.mp3`** — 3s · full file
  > Al julson, Al julson rap
- **`DW_A (3).mp3`** — 4s · full file · ×2 copies
  > to play Trump and Denny Old Farts.
- **`DW_A0018.mp3`** — 10s · full file · ×2 copies
  > sing and create art, sing and create core change for the better.
- **`DW_A0029.mp3`** — 21s · full file
  > Panasonic D sound, S wave, shock thingy, mp3 player I have, the FM has really porous channel separation, so you get some sort of like AF, overlap effects, and sometimes a strong channel span, multiple channels.
- **`DW_A0036_1.mp3`** — 11s · full file · ×2 copies
  > to a mystical convolution
- **`DW_A0045.mp3`** — 8s · full file · ×2 copies
  > do whiff-a-poof song, um, on crack mix.
- **`DW_A0049_1.mp3`** — 17s · full file · ×2 copies
  > 10 skiers by the station. Track 7. Uh, something.
- **`DW_A0054_1.mp3`** — 17s · full file · ×2 copies
  > and to the curious job friends, to the kids, so you know how to put it.
- **`DW_A0055_1.mp3`** — 8s · full file · ×2 copies · *(VAD-off recovery)*
  > Do a play, do play my own version of the whole magazine CD.
- **`DW_A0056.mp3`** — 17s · full file · ×2 copies
  > take hold out of copyright hymns and do noun substitutions and do rockin' pumpkin' versions of them.
- **`DW_A0058.mp3`** — 5s · full file · ×2 copies
  > I saw it called Guru Meditation number.
- **`DW_A0061_1.mp3`** — 28s · full file · *(VAD-off recovery)*
  > I wrapped that little wrap up when she filled up here on the target, raised my new brief, dimension lavished in there. Do a killer comparison. And then you. Bolt into the stratosphere. Thank you.
- **`DW_A0062 (2).mp3`** — 4s · full file
  > new genre of music, annoying music, and always.
- **`DW_A0062.mp3`** — 26s · full file
  > Payne's song, a singer. He's singing with the harp, the Brainrot music, with an existential beat.
- **`DW_A0062a.mp3`** — 4s · full file · ×2 copies
  > new genre of music, annoying music, and always.
- **`DW_A0065.mp3`** — 10s · full file · ×2 copies
  > do voice over science fiction stories to maybe first words pieces.
- **`DW_A0067_1.mp3`** — 17s · full file · ×2 copies · *(VAD-off recovery)*
  > Uh, Voldemort's band, uh, got a gentleman to that dark night or whatever they're telling about us. Three, two, just learned three chords, and listened to their models.
- **`DW_A0084.mp3`** — 14s · full file · ×2 copies
  > A song comparing losing your heart and having your heart ripped out to a Aztec sun god sacrifice.
- **`DW_A0124.mp3`** — 12s · full file · ×2 copies
  > Mary Faithful's eyes of Lucy Gordon might be worth singing.
- **`DW_A0140.mp3`** — 10s · full file · ×2 copies
  > Kegita[?], Grand Opening, Track 3, L.A. Luia, going to music, actually the whole Grand Opening on a Giant.
- **`DW_A0141.mp3`** — 17s · full file · ×2 copies
  > Another real good grand opening cut, number five, Peace Love. Peace together from a lot of samples near some of the ideas. I have been blathering over, expounding.
- **`DW_A0143.mp3`** — 12s · full file · ×2 copies
  > 60 channel is cool, sorta Samba-ish, electro, high voice, woman, nice background.
- **`DW_A0144.mp3`** — 6s · full file · ×2 copies
  > I record an intense version of Hush Little Baby on Sewer.
- **`DW_A0167_1.mp3`** — 12s · full file · ×2 copies
  > make a soundtrack of just lines, spoken lines, from porno films non-secretarily.
- **`DW_A0169_1.mp3`** — 15s · full file · ×2 copies
  > start an ultra-track guitar very slow and speed it up until it sounds virtuistic, virtuos-tized.
- **`DW_A0178.mp3`** — 8s · full file · ×2 copies
  > Transcard life bores out of me and try it on harp advice with maybe a cheesy drum machine.
- **`DW_A0180_2.mp3`** — 5s · full file · ×2 copies
  > Bikini area would be a great name for a band or a CD.
- **`DW_A0183_2.mp3`** — 36s · first 30s of 36s
  > In the historic aviation winter 2003 catalog on page 61, get one of the engine sound CDs like the Supersonics just jets 1895. If you love the sound of jets turn up the volume and light the burners. You're thrilled with the sound of jet startups. Taxiing takes off. Cinerabatics. We even got sonic booms here at the A-10, hard warthog. Don't know that's supersonic. Nighthawk, galaxy.
- **`DW_A0207.mp3`** — 7s · full file · ×3 copies
  > passion song, Fierce for Life, with me screaming.
- **`DW_A0209_2.mp3`** — 15s · full file · ×2 copies
  > Really, the under-appreciated songs of Iron Butterfly, the first side of Inigata to beat flowers and beads or something, is profound.
- **`DW_A0215_2.mp3`** — 12s · full file · ×2 copies
  > Okay, my music career, I may not be very good, but I'm better than your mama, except when she's better than me.
- **`DW_A0216_2.mp3`** — 29s · full file
  > Graping has this equivocating rapper who makes outrageous claims and then hedges them, as always, qualifying any claims he makes, and blowing up any insults with caveats about how the same insult applies to him.
- **`DW_A0217_2.mp3`** — 2s · full file
  > I wonder if anybody's done the bunny hip hop.
- **`DW_A0219_2.mp3`** — 8s · full file · ×2 copies
  > remix the intense parts of the In-A-Gadda-Da-Vida, the entire solos, the dinosaurs fighting.
- **`DW_A0220_1.mp3`** — 15s · full file · ×2 copies
  > Tis the asshole! We got, uh... You think you can make a fuck down? That's an English joke! We just do it on the damn top! Space! Hero! Sun-ron!
- **`DW_A0221.mp3`** — 9s · full file · ×2 copies
  > Chinese underwear repairman. I haven't thought of that in a while. These Chinese underwear repairmen.
- **`DW_A0222.mp3`** — 40s · first 30s of 40s
  > Different episodes have different Chinese underwear, repairman, give different readings of his name. Like Chinese underwear, that's my name. Repair is what I do. Man is who I repair. I am a doctor. Or Chinese. I'm Chinese.
- **`DW_A0222_1.mp3`** — 10s · full file · ×2 copies
  > Don't do a music CD called My Singing Sucks, deal with it.
- **`DW_A0224_2.mp3`** — 3s · full file · ×2 copies
  > My singing sucks. Deal with it.
- **`DW_A0225_2.mp3`** — 12s · full file · ×2 copies
  > A whole label of really bad singers, uh, what's his name, William Hung, the American Idol, uh, Marvel singer, who's making a career of it.
- **`DW_A0229_1.mp3`** — 7s · full file · ×2 copies
  > After bathing in Baxter’s, it's just an excellent album. I have to put it in my top 10 list.
- **`DW_A0234_1.mp3`** — 14s · full file · ×2 copies
  > songs today, I guess, listening to Baxter's version of Cash as I Walked the Line, uh, something like, uh, I Looked the Power Line.
- **`DW_A0257_1.mp3`** — 39s · first 30s of 39s
  > A new genre of music, sex music, the variant rhythms.
- **`DW_A0259.mp3`** — 25s · full file
  > This music idea opened up twisted quartets with myself, with various types of lingering and melodic genre, verbal, contrapuntal, and shoal.
- **`DW_A0260.mp3`** — 4s · full file · ×2 copies
  > music, the genre of rap pruning.
- **`DW_A0262.mp3`** — 5s · full file · ×2 copies
  > Slitter kenny[?] one rock track six really a rock
- **`DW_A0276.mp3`** — 4s · full file · ×2 copies
  > So I'm told on kids, it's cool to be an atheist.
- **`DW_A0299.mp3`** — 19s · full file · ×2 copies
  > Sample the opening of The Ballad of You and Me and Pooneil, Jefferson Airplane, it's got this really sick guitar intro, also in that song, Sample Armadillo.
- **`DW_A0309.mp3`** — 4s · full file · ×2 copies
  > my Captain Beefheart tribute band.
- **`DW_A0310.mp3`** — 17s · full file · ×2 copies
  > run like Antares (Auto-Tune) software music over a totally screwed up Improv solo or guitar angle
- **`DW_A0311_1.mp3`** — 4s · full file · ×2 copies
  > Get a recording of Chickadee's singing, maybe make my own?
- **`DW_A0312.mp3`** — 8s · full file · ×2 copies
  > a songwriter compilation from our grid, a thick chestnut melt and choke to generate.
- **`DW_A0314_1.mp3`** — 11s · full file · ×2 copies
  > Uh, run some music. Run some lead text through a voice synthesizer.
- **`DW_A0316_2.mp3`** — 15s · full file · ×2 copies
  > music, some of the beasties, and do a disc wrap with construction idea.
- **`DW_A0319_1.mp3`** — 14s · full file · ×2 copies
  > He's an Ed Powers encounter to generate the tempos for a song.
- **`DW_A0328_1.mp3`** — 3s · full file · ×2 copies
  > Suburbs rock. I like cows. It is fine, so
- **`DW_A0340_1.mp3`** — 26s · full file · ×2 copies
  > do a bunch of MP3 mixes, obvious differences, depressed and perky, Chantuz[?]'s songwriters, Negro music.
- **`DW_A0343_2.mp3`** — 3s · full file · ×2 copies
  > Deus Stairs, Deus Musters[?].
- **`DW_A0345_2.mp3`** — 35s · first 30s of 35s · ×2 copies
  > record a music, record a guitar part by positioning my hand in different chords, strumming the chord like a dozen times to get different effects, resonances, and timings, and then you can build up songs out of the sample. Sample each of the chords or what have you.
- **`DW_A0351_2.mp3`** — 15s · full file · ×3 copies
  > a keyboard sound in which every note plays the right note, but using a different instrument or sound generation method or just whatever.
- **`DW_A0356_1.mp3`** — 3s · full file
  > ancient flatulences.
- **`DW_A0356_2.mp3`** — 11s · full file · ×3 copies
  > Music set up two different rhythms, or beats even, and play back and forth between them.
- **`DW_A0358_2.mp3`** — 10s · full file · ×3 copies
  > make new cylinders, wax cylinders, with cuts from Ammonon[?] and Brittany.
- **`DW_A0362_1.mp3`** — 20s · full file · ×2 copies
  > music piece idea stitched together like famous lines like use the forest hook and
- **`DW_A0363_1.mp3`** — 16s · full file · ×3 copies
  > skitter music, a real mentalist outlining background, sort of a symbol.
- **`DW_A0367.mp3`** — 16s · full file
  > and I've been gone nuts, like, uh...
- **`DW_A0369_2.mp3`** — 31s · first 30s of 31s · ×2 copies
  > music, Pankal Jezla[?], I Am Lost, has an interlude that is gorgeous and sort of focused and geometric. Check it out, dude.
- **`DW_A0370.mp3`** — 5s · full file · ×3 copies · *(VAD-off recovery)*
  > We have to record the little squealy flat, I'm gonna... Toy, dark toy.
- **`DW_A0387_2.mp3`** — 29s · full file · ×2 copies
  > music, a bunch of broken down jazz players, or blues player jazz, each taking a turn to play a little early decrepit solo, and one of them ends by spitting into a spittoon which lets out a ring which becomes a pure tone which transitions into whatever the next thing is.
- **`DW_A0388.mp3`** — 6s · full file · ×3 copies
  > to sample the X's rhythm of Hungry Wolf.
- **`DW_A0391_2.mp3`** — 8s · full file · ×3 copies
  > Do it right, reason, remix, key phrases.
- **`DW_A0393_2.mp3`** — 4s · full file
  > Right, red concert, in the hierarchy, Butler.
- **`DW_A0405.mp3`** — 17s · full file · ×3 copies
  > Play the voice quotes and shuffle play through the light as you match your medium-land. Hilarity will indubitably ensue.
- **`DW_A0410.mp3`** — 3m09s · first 30s of 3m09s · ×2 copies
  > I was thinking about the musical style and how, you know, supposedly criminalious rock music is rigidly in the western harmonic scales and scale and lock stick rhythm and that and, uh, straddling.
- **`DW_A0421_1.mp3`** — 17s · full file · ×2 copies
  > This song of all my catchphrases makes you want to thank your two kinds. Some music, lunch is death, a glint's in the autoclave.
- **`DW_A0445.mp3`** — 47s · first 30s of 47s
  > Try hooking a microphone up to the, oh, that weird pod sound processor, and let's try it with delays.
- **`DW_A0446.mp3`** — 30s · full file
  > Gotta do a band with Tony and Sam just use cheap instruments
- **`DW_A0452_2.mp3`** — 13s · full file
  > What's music sound like when it's gone through a cycle of MP3 compression, backed away back to MP3 a number of times?
- **`DW_A0452_3.mp3`** — 6s · full file · ×2 copies
  > X-16 on the Rollins, I have come to kill you.
- **`DW_A0453.mp3`** — 6s · full file · ×2 copies
  > I already can be a go-go dancer on stage, sketch artist.
- **`DW_A0453_2.mp3`** — 3s · full file · ×2 copies
  > High rack signs and cones.
- **`DW_A0454_2.mp3`** — 9s · full file · ×2 copies
  > to an Ayurvedic War[?] compilation. I've come to kill you, Raulans[?]. This might be from over Raulans[?].
- **`DW_A0455.mp3`** — 8s · full file · ×3 copies
  > A song called the Roth's Method Teaching.
- **`DW_A0455_1.mp3`** — 8s · full file
  > Lyric, we're cooler than you because we're in a rock band and you're down on the floor with worship fingers.
- **`DW_A0456.mp3`** — 4s · full file · ×3 copies
  > This one's about to pass, and I already dropped it.
- **`DW_A0457.mp3`** — 19s · full file · ×3 copies
  > Son, I'm not as dead, cooler than you'll ever be.
- **`DW_A0458.mp3`** — 3s · full file · ×3 copies
  > Boom, boom, boom, boom, boom.
- **`DW_A0460.mp3`** — 12s · full file · ×3 copies
  > Tell stories like his tube is over, soft, ominous.
- **`DW_A0460_1.mp3`** — 31s · first 30s of 31s · ×2 copies
  > Just thinking about this underlying sensibility of the early Moog music, Baby's First Words, and later this whole grain and Luncheon's Death. Just trying to come up with a slogan. It's like, go for it.
- **`DW_A0461.mp3`** — 7s · full file · ×3 copies
  > or the keyboard mounted on a walker or microphone.
- **`DW_A0461_1.mp3`** — 17s · full file · ×3 copies
  > Can you establish a rhythm in music by using a volume envelope over randomly sampled snippets of music and acquiring lines? Want to know.
- **`DW_A0462.mp3`** — 15s · full file · ×3 copies
  > Check the cans of fiber.
- **`DW_A0463.mp3`** — 10s · full file · ×3 copies
  > or the swinging Old Farts, the swinging farts.
- **`DW_A0464.mp3`** — 4s · full file · ×3 copies
  > There's so much surplus medical care at the end.
- **`DW_A0466.mp3`** — 6s · full file · ×2 copies
  > Crisis, a trophy wipe.
- **`DW_A0468.mp3`** — 9s · full file · ×2 copies
  > Social Security. Part of the, uh...
- **`DW_A0469.mp3`** — 5s · full file · ×2 copies
  > wear a black suit with glasses.
- **`DW_A0473_1.mp3`** — 7s · full file
  > Music for epileptics on steady beat.
- **`DW_A0474_1.mp3`** — 8s · full file
  > The epileptic music that's driven by listening to Danna Pennington in here, zero, half, a few bits.
- **`DW_A0481.mp3`** — 10s · full file · ×3 copies
  > load different loops into all the atleases[?] to control the speed with one of the bandwidth.
- **`DW_A0483.mp3`** — 27s · full file · ×2 copies
  > B-I-H-E-R-A[?], you've got the Arizona.
- **`DW_A0484.mp3`** — 24s · full file
  > The question of story is about blues from that Digital Sweatshop or something like that. Just wacky software development slash game, computer game development story. It's just in an alternative reality. Breeding stories, all the far out stuff. In fact, I don't...
- **`DW_A0485.mp3`** — 8s · full file · ×3 copies
  > old fart rants about how hard we had it in the old days and how everything was gone to hell.
- **`DW_A0487.mp3`** — 14s · full file · ×3 copies
  > Old farts. I always need threesomes, because I need someone.
- **`DW_A0492.mp3`** — 18s · full file
  > Okay, that'd be a Digital Sweatshop story coming up with a bill of commandments.
- **`DW_A0493.mp3`** — 20s · full file · ×3 copies
  > Old Farts song about Tony's idea of wanting to grow up to be the neighborhood mean old man yelling at kids to stay off his grass and keep their balls out of his property
- **`DW_A0526.mp3`** — 3s · full file · ×2 copies
  > Arabic hip-hop.
- **`DW_A0532.mp3`** — 15s · full file · ×3 copies
  > The band algorithm 14, this is a title 14 algorithm, the base case would be 00.
- **`DW_A0574.mp3`** — 20s · full file · ×2 copies
  > If time, music is fast and curious bits of music, and then stop, and say a word, and rip up a fucking phone, and then cut. Penis.
- **`DW_A0576.mp3`** — 7s · full file · ×2 copies
  > I can't skate for a music of his background.
- **`DW_A0584.mp3`** — 15s · full file · ×3 copies
  > Try out some pieces where I edit together some of the notes, the voice notes.
- **`DW_A0587.mp3`** — 30s · full file · ×2 copies
  > See if you can make a conversation between the right and left speaker, me, with the pitch shifted lower on one of the sides. It might be interesting to see if you could piece together a real conversation or if it would be, yeah, totally dot, dot, dot.
- **`DW_A0589.mp3`** — 11s · full file · ×3 copies
  > If I'm not that much of a fuddy-duddy, a fuddy-duddy might be a good name for the Old Fart, but at least for a C.D.
- **`DW_A0589_z.mp3`** — 27s · full file
  > Okay, this is September 2nd on the way to the cabin in North Dakota, Valley City, and the wind's blowing so hard.
- **`DW_A0600.mp3`** — 15s · full file
  > sample the copyright warnings at the beginning and end of videos, and make pirate copies of just the warnings.
- **`DW_A0650_2.mp3`** — 10s · full file
  > Get DVD in like Flint and one of the Bond films
- **`DW_A0698.mp3`** — 30s · full file
  > Music theory, the different chords are associated with different emotions. I wonder if discords last, because it seems like some discords are really weak and pathetic and some are like in-your-face blasts.
- **`DW_A0704.mp3`** — 49s · first 30s of 49s
  > Just, um, a morsel from the past, um, what is the, uh, okay, it's a beautiful day.
- **`DW_A0705.mp3`** — 2m24s · first 30s of 2m24s
  > Okay, music idea. This is a good one, I think, I had while listening to Hendrix in the original soundtrack of the music experience. And I just started drumming on the air on chair arms.
- **`DW_A0707.mp3`** — 1m11s · first 30s of 1m11s
  > Music project, I just remembered this, I think I wrote it down somewhere. Music project, download public domain out of copyright, MIDI, or even in copyright, MIDI files and then
- **`DW_A0969.mp3`** — 8s · full file · ×2 copies
  > A good CD title, Smoke Detectors in Hell, from Terry Pratchett.
- **`DW_A1062.mp3`** — 1m27s · first 30s of 1m27s
  > a computer game idea, an existential action game. Protagonist is a nihilist thing to fall apart. However, he really, really likes.
- **`DW_S0138.mp3`** — 11s · full file · ×3 copies
  > Sing over the pieces in Boogerfuh[?] music, operatic, country western, bunk.
- **`DW_S0318.mp3`** — 3s · full file · ×3 copies
  > The Floozy's. Good band name.
- **`DW_S0656.mp3`** — 7s · full file · ×2 copies
  > music made from car chase or car race sounds.
- **`DZ_A0341_1.mp3`** — 6s · full file · ×2 copies
  > Sugar Caves[?] delicious demon super villain
- **`DZ_A0354_2.mp3`** — 4s · full file · ×2 copies
  > Sugar Shoots[?], Chihuahua has great percussion.
- **`DZ_A0357_2.mp3`** — 6s · full file · ×2 copies
  > Suicide Commandos. Mosquito crucifixion. Quite inspiring.
- **`DZ_A0364.mp3`** — 11s · full file · ×2 copies
  > Music for Margaret, Weird Shit, titled something like What's So Great About Normal.
- **`DZ_A0381_1.mp3`** — 5s · full file · ×2 copies
  > Ivana, we can plant a house, we can build a tree.
- **`DZ_A0387.mp3`** — 11s · full file · ×2 copies
  > Great little hex line, I don't know the song, but they care more about the carburetors than their livers. It's a country western.
- **`DZ_A0444_3.mp3`** — 11s · full file · ×2 copies
  > On the MP3 discs, the artist after Guided by Voices, it's really good, don't forget that.
- **`DZ_A0445_3.mp3`** — 8s · full file · ×2 copies
  > Is it Henry Rollins? Hendrix would be first.
- **`DZ_A0446_3.mp3`** — 9s · full file · ×2 copies
  > When she screams, she turns on all the apartment lights from that album, Track 6.
- **`DZ_A0449_3.mp3`** — 8s · full file · ×2 copies
  > Track 12 on this N68D is drive-by shooting, surf, psycho.
- **`DZ_A0452_1.mp3`** — 13s · full file · ×2 copies
  > What's music sound like when it's gone through a cycle of MP3 compression, back to wave, back to MP3 a number of times?
- **`DZ_A0494.mp3`** — 8s · full file · ×2 copies
  > What's going on with the MP3 of Firesign Theatre from that bus? It's interesting, but I think it's edited.
- **`DZ_A0586.mp3`** — 27s · full file · ×2 copies
  > See if you can do one long, rambling choice in a sentence by cutting up voice samples and cutting out little phrases that might make sense over...
- **`DZ_A0592.mp3`** — 2m12s · first 30s of 2m12s
  > Comedy CD, it's a jugular, Christiana day. I'm Jesus God, I'm easy. Tells us it's a hobby.
- **`DZ_A0621.mp3`** — 12s · full file · ×2 copies
  > I post some of my tracks on an online music site, and as my style, you can do something like Mensa Rock, look at MensaRock.com.
- **`DZ_A0689.mp3`** — 10s · full file · ×3 copies
  > A permanent record can be a fine title for an Old Fart city.
- **`Maps1.mp3`** — 5s · full file
  > Harp rap, do anemone songs or make up
- **`Recording10.mp3`** — 29s · full file
  > a movie project, a quick march around America with the family, with song and dance, running in fast motion through hay fields and over mountains, and singing about natural features as a...
- **`Recording11.mp3`** — 16s · full file
  > Yes, a music project could commission rock bands to songs about features and have lyrics crawl across the bottom.
- **`Recording23.mp3`** — 5s · full file
  > and remix 78 records.
- **`Recording32.mp3`** — 40s · first 30s of 40s
  > Music I do a song in which of course I play all the instruments and sing cuz I'm so talented but We do it without multi-track now one by one beat up all the instrumentalists for various reasons miss playing notes
- **`Recording33.mp3`** — 24s · full file
  > Todd Chili Peppers, excellent opening to track 13, not sure which CD is about religion, but the opening musical interlude, prologue, is very cool, should be sampled.
- **`Recording35.mp3`** — 9s · full file
  > Check out music. Check out that track 13 on Red Hot Chili Peppers. I think the lyrics are too. It might be called Heretic
- **`Recording38.mp3`** — 17s · full file
  > a mixed CD of Doug's Best, brutal beauty, including Red Hot Chili Peppers' first cut.
- **`Recording39.mp3`** — 20s · full file
  > music. Can people make money by putting together compilation CDs, music services, being interested, set up standard license deals, songs. Artists could indicate that you can compile and resell their songs.
- **`Recording41.mp3`** — 30s · full file
  > book, do a moments with the dedicary inscription, put it within reach of people, not some outrageous one, just, or put it on eBay, auction it off, that'd be cool, inscription. If book comes out last, Channel Zilch, the inscription.
- **`Recording7.mp3`** — 50s · first 30s of 50s
  > Weird little reverie just watch a stand-up comic comedy show and just thinking how be funny Well, Lewis Black said I adore you to an audience and just thinking how do you characterize an audience? What would you joke about if you're just you know? Interacting with the audience all time point out the
- **`STE-002 (2).mp3`** — 17s · full file
  > Do the woods song with with footsteps in the leaves as the underlying beat
- **`STE-028 (2).mp3`** — 10s · full file
  > capture the audio from that Kat Bieland screen video.
- **`STE-037.mp3`** — 14s · full file
  > That's Jason and Neil about a time stretcher, a variable time stretcher.
- **`STE-146 (2).mp3`** — 20s · full file
  > do a track made up of the the candid snippets from the zoom recording the when I'm talking to the dogs are coughing or wrap on the table
- **`revording33.mp3`** — 24s · full file
  > Todd Chili Peppers, excellent opening to track 13, not sure which CD is about religion, but the opening musical interlude, prologue, very cool, should be sampled.
- **`revording35.mp3`** — 9s · full file · ×2 copies
  > Check out music. Check out that track 13 on Red Hot Chili Peppers. I think the lyrics are too, too. It might be called Heretic.
- **`revording38.mp3`** — 17s · full file · ×2 copies
  > a mixed CD of Doug's Best, brutal beauty, including Red Hot Chili Peppers first cut.
- **`revording39.mp3`** — 20s · full file · ×2 copies
  > music and people make money by putting together compilation CDs, music services, set up standard license deals, the artist could indicate that you can compile and resell their songs.
- **`voice03_12a6.mp3`** — 19s · full file
  > music project. Do a CD, offending as many nationalities as you can by parodying their national music, Arabic, Japanese, Mexican, German. It would be fun.

## `Real Music for Normal People` — 18 notes

**Work:** `unassigned` — see §5 for the projects these cluster into.

- **`130708_018.mp3`** — 33s · first 30s of 33s
  > song real music for normal people the father or obstetrician should
- **`130708_045.mp3`** — 14s · full file
  > The Ego Rock song, you know, you know our names.
- **`130708_046.mp3`** — 18s · full file
  > Ego rock, you know, we'll sleep with the prettiest, best of you. We don't need protect. We've got all the fish.
- **`130708_047.mp3`** — 13s · full file
  > You go right when it comes for all the fame and touch.
- **`130708_048.mp3`** — 12s · full file
  > you go rock and Motorhead sees us walk into a bar they run in
- **`130708_052.mp3`** — 47s · first 30s of 47s
  > For the Rocky Go song. Kaching, Kaching. Thank you for watching.
- **`130708_053.mp3`** — 12s · full file
  > Call it ego rock something, here's good sha-
- **`130708_054.mp3`** — 18s · full file · *(VAD-off recovery)*
  > Bigger Rock, we get stunned with Babel, and you argue its meaning.
- **`130708_060.mp3`** — 45s · first 30s of 45s
  > money made music.
- **`130708_061.mp3`** — 21s · full file
  > If you go to rock during this song, just take a break and then point out some people.
- **`130713_045.mp3`** — 30s · full file
  > for normal people.
- **`130713_077.mp3`** — 12s · full file · *(VAD-off recovery)*
  > You go rock when it comes to our Rock and Roll Hall of Fame induction, and we're going to fisc a puke on this stage.
- **`DS_20046.WMA`** — 12s · full file
  > D-spot Hard to locate Pager Ciflinalia
- **`DW_S0610.mp3`** — 5s · full file · ×2 copies
  > Old fart song with a complaint about alimony behavior.
- **`STE-100.mp3`** — 30s · full file
  > real music for normal people release 12 at a time and the rock number should be definitely be I've got a penis and I know how to use it I've got genitals they work real swell
- **`STE-101.mp3`** — 12s · full file
  > More rock I'm up on stage with his guitar in my hand. So my cock is bigger than any of yours
- **`STE-103.mp3`** — 31s · first 30s of 31s
  > The blues song the baby Writes the song in hell because of course it was born, but didn't believe and That's part of the blues. It's It was shot when it was just seconds old and wound up in hell
- **`STE-104.mp3`** — 22s · full file
  > And for the blues song, they let you watch your death. They make you watch your death over and over in hell. And then the last verse is about hell and why the baby's there.

## `(Music root)` — 10 notes

**Work:** `unassigned` — see §5 for the projects these cluster into.

- **`131029_002.mp3`** — 1m14s · first 30s of 1m14s
  > [[new line]], Hello World, Interwoven, Book of Hell, Book of Mac, Book of Head, and Eloise one could start my
- **`DW_A0220_2.mp3`** — 2s · full file · ×3 copies
  > and it got it to Vietnam, the heart.
- **`DW_A0335.mp3`** — 2s · full file · ×3 copies
  > Acoustic trauma has a band name.
- **`DW_A0361.mp3`** — 2s · full file · ×2 copies
  > Vic Chesnutt, Tarragon.
- **`DW_A0366.mp3`** — 2s · full file · ×3 copies
  > to the hot seat on the heart.
- **`DW_A0459.mp3`** — 2s · full file · ×3 copies
  > Cherry at your pump.
- **`DW_A0470.mp3`** — 2s · full file · ×2 copies
  > version of Hush Little Baby.
- **`Voice0001.aac`** — 16s · full file
  > Does yours do this? No. I don't care if it works or it doesn't.
- **`Voice0008.aac`** — 9s · full file
  > Go to Larry's house for a month and make an album.
- **`Voice0018.aac`** — 41s · first 30s of 41s
  > okay a guitar in which the strings run to in wild directions overlapping and fanning out you know they all come to a couple one or a couple tuning fret head

## `Sounds and Samples` — 29 notes

**Work:** `unassigned` — see §5 for the projects these cluster into.

- **`120225_009.mp3`** — 6s · full file
  > [[new line]] central. I'm taking voice notes
- **`DS_20149.WMA`** — 13s · full file
  > But here's a little cheer a lot of people like it goes like this rat shit batshit 3001 69 assholes
- **`DS_20207.WMA`** — 7s · full file
  > the Scene Pre-Sound Project.
- **`DS_20289.WMA`** — 4s · full file
  > the great placebo in the sky.
- **`DS_20477.WMA`** — 5s · full file
  > Thank you. Thanks, Mark.
- **`DW A0620-2258.mp3`** — 3s · full file
  > A hippie matrix rather than a... cool.
- **`DW S0611-7227.mp3`** — 1s · full file
  > Alimony, please.
- **`DW_A0060.mp3`** — 10s · full file · ×2 copies
  > I've talked at times about how to think.
- **`DW_A0063.wav`** — 6s · full file
  > listening to On the Road where Dingle Dottie's band is.
- **`DW_A0085.mp3`** — 0s · full file · ×2 copies
  > I've got a girly daughter coming.
- **`DW_A0183_1.mp3`** — 1s · full file · ×2 copies
  > Great might.
- **`DW_A0211.mp3`** — 7s · full file · ×2 copies
  > I'm glad you made it through the last time I played it out.
- **`DW_A0213.mp3`** — 6s · full file · ×2 copies
  > Yeah, that could be right
- **`DW_A0282_1.mp3`** — 3s · full file · ×2 copies
  > This weird storyline popped into my head.
- **`DW_A0300_1.mp3`** — 7s · full file · ×2 copies
  > If you think we've got a mix about you, life seems strange. Try to let you know what to say about it.
- **`DW_A0335_1.mp3`** — 1s · full file
  > Christ is a zombie.
- **`DW_A0389_1.mp3`** — 4s · full file
  > So advertisers are buying eyeballs.
- **`DW_A0417_1.wav`** — 3s · full file
  > Probably been done, but uh
- **`DW_A0457_2.mp3`** — 5s · full file · ×2 copies
  > I never saw that Nile in the middle of annihilation.
- **`DW_A0554.mp3`** — 2s · full file · *(VAD-off recovery)*
  > collect maladicta
- **`DW_A0720.mp3`** — 7s · full file · ×2 copies
  > All the dogs. All the dogs are home.
- **`DW_S0263.mp3`** — 5s · full file
  > Just a solid state to everyone.
- **`STE-023.mp3`** — 31s · first 30s of 31s
  > use the zoom to just do sound effects in the woods branches hitting crunching leaves in hand just use the using nature as an instrument what's up marina oh yeah
- **`STE-033 (2).mp3`** — 7s · full file
  > Hey make make
- **`STE-039.mp3`** — 13s · full file
  > Just, if you thought I was talking to myself, making voice notes about Castle Rising.
- **`STE-053.mp3`** — 13s · full file
  > Talk to Angry Robot about Emma Bull's war for the oaks.
- **`STE-188.mp3`** — 38s · first 30s of 38s
  > on, do a, is it recording? Do a Homeric poetic treatment of a modern battle with description of individual deaths, maybe World War I.
- **`voice03_12a29.mp3`** — 4s · full file · ×2 copies
  > Excuse me, a stretch pacer.
- **`voice04_015.mp3`** — 20s · full file
  > Okay, this is now a shopping list. Pick up some hogs, long-burning hogs, flashlight.

---

# 2 · Needs a full-length pass

**32 recordings.** Everything else in §1 is complete as printed.

- `Music projects/DW_A0410.mp3` — 3m09s · ×2 copies
- `Music projects/DW_A0705.mp3` — 2m24s
- `Music projects/DZ_A0592.mp3` — 2m12s
- `Music projects/DW_A1062.mp3` — 1m27s
- `131029_002.mp3` — 1m14s
- `Music projects/120702_003.MP3` — 1m14s
- `Music projects/DS_20121 (2).WMA` — 1m13s
- `Music projects/DW_A0707.mp3` — 1m11s
- `Music projects/Recording7.mp3` — 50s
- `Music projects/DW_A0704.mp3` — 49s
- `Music projects/DS_20657.WMA` — 49s
- `Real Music for Normal People/130708_052.mp3` — 47s
- `Music projects/DW_A0445.mp3` — 47s
- `Real Music for Normal People/130708_060.mp3` — 45s
- `Music projects/120905_002.mp3` — 42s
- `Voice0018.aac` — 41s
- `Music projects/Recording32.mp3` — 40s
- `Music projects/DW_A0222.mp3` — 40s
- `Music projects/120820_002.mp3` — 39s
- `Music projects/DW_A0257_1.mp3` — 39s
- `Sounds and Samples/STE-188.mp3` — 38s
- `Music projects/DS_20301.WMA` — 36s
- `Music projects/DW_A0183_2.mp3` — 36s
- `Music projects/DW_A0345_2.mp3` — 35s · ×2 copies
- `Music projects/130709_090.mp3` — 34s
- `Real Music for Normal People/130708_018.mp3` — 33s
- `Music projects/120216_022.mp3` — 32s
- `Sounds and Samples/STE-023.mp3` — 31s
- `Real Music for Normal People/STE-103.mp3` — 31s
- `Music projects/DS_20045.WMA` — 31s
- `Music projects/DW_A0369_2.mp3` — 31s · ×2 copies
- `Music projects/DW_A0460_1.mp3` — 31s · ×2 copies

---

# 3 · Captured speech — deliberate samples, not notes

**19 recordings, 0.8 h.** Broadcast, film and print-ad audio recorded
off the air to chop up. Not his voice, not notes. Do not transcribe.

- **`130724_001.mp3`** — 1m58s · first 30s of 1m58s
  > So hard, blow her samaicata And blow her samaicata And blow her samaicata Before s-
- **`130724_002.mp3`** — 44s · first 30s of 44s
  > everyone is searching but here it's possibly a heightening of the sensations rather than total blackout
- **`130724_003.mp3`** — 1m49s · first 30s of 1m49s
  > Here also, the search goes on, for excitement, up the excitement of acquisition, because that phase of life is over. Here you click what you've acquired in jeopardy once more. This is no search for warmth or contact. This is the search deep inside for some dead nerve that will still give a kick. Sedo dangerous living. Stimulation by facing minor disaster, achieving minor triumphs, to say, I lost.
- **`130724_004.mp3`** — 1m52s · first 30s of 1m52s
  > the danger apparent to everyone except the person most central
- **`130724_005.mp3`** — 47s · first 30s of 47s
  > For others, the disaster is impending. Adusions shattered, the danger apparent to everyone, except the person most central. Look, I can't hear because I don't care, understand? Most of it feels so. And the place it seems so. Feel it's good, huh? I'll move it. I feel the beat's different. I'm more excited. Cheats, that's why I'm looking for big, big cheats. You
- **`130724_007.mp3`** — 2m02s · first 30s of 2m02s
  > people stand anxiously waiting for midnight and a new day like celebrants of some macabre feast they wait to see in the day the all-important new days in their hands they hold a piece of paper but to them is their last hold on life these men and women are drug addicts the paper is their prescription to obtain drugs and the object of their weight is the all-night dispensing pharmacy in Piccadilly. At the stroke of midnight, they're entitled to take another day's allotment of
- **`130724_008.mp3`** — 2m17s · first 30s of 2m17s
  > After dustbin, climb a dark stairway, clear small feet, and...
- **`130724_009.mp3`** — 55s · first 30s of 55s
  > Here's where we began at the Blue Angel, one of the oldest of London's nightclubs and by reputation, one of the most respectable. It serves good basic food and boasts no hostesses. The cabarets, rye, ironic songs or simple songs well sung. It's Cleontel, affluent, young, reset. Ladies and gentlemen, to open our show is the...
- **`130724_010.mp3`** — 1m34s · first 30s of 1m34s
  > Flashing facets like a floor of jewel. Some incomparably beautiful. Some not so beautiful. A hard exterior. A cold center. Look, taste and feel, but don't try to break it. It'll break you first.
- **`2016_04_30_04_54_52.mp3`** — 20s · full file
  > Ring does not protect against HIV and other sexually transmitted infections. Talk to your health care provider, or learn more, at neitherring.com. It's one less thing to think about doing every day. I am. This is going to be one of my tracks.
- **`DS_20228 (2).WMA`** — 11s · full file
  > Project Catwalk, a memorable line. We've considered your bikini and how well you've met your brief.
- **`120816_001-0799.mp3`** — 9m34s · first 30s of 9m34s
  > It's an interesting point. It could be a story of today's message. It's important to listen to it.
- **`120816_009.mp3`** — 13m45s · first 30s of 13m45s
  > supplications, prayers, intercessions, and giving of thanks be made for our authority, that we may lead a godliness, for this is he desires all, for here is one God, and pranks Jesus, who give himself the rent, first thing that be to, verses one through six.
- **`DS_20208.WMA`** — 9s · full file
  > I've always relied on the...
- **`DW_A0233.wav`** — 15s · full file
  > you can switch between them. But anyway, oh yeah, cool. And then there's different recording modes. HQ is high quality, which is what you want. And then this switches between, oops.
- **`DW_A0270.mp3`** — 5s · full file · ×2 copies
  > But no one knows how to write down the equations of this theory.
- **`DW_A0449.mp3`** — 35s · first 30s of 35s · ×2 copies
  > Okay. Brilliant. There is a soft little sound very similar to the one you get aged around seven. When you stick your finger in your mouth and flick it out again quickly and think it is incredibly funny.
- **`DW_B0456.mp3`** — 7m39s · first 30s of 7m39s
  > But the final line here is, when it comes to competing issues like the Constitution and politics, the constitutional principle has to win out here. And the fact that they were able to, at the end of the day, determine some type of compromise here and make it so that it is not a precedent is all a good thing. But they did pay a political price, but there's no doubt about it. Well, they did pay a political price, but I think they're going to be vindicated once the Constitution rights testifies. Testifies, but I think her testimony is gonna blow away anything that anybody else said and I think
- **`Recording33.mp3`** — 2s · full file · ×2 copies · *(VAD-off recovery)*
  > supreme executive power!

---

# 4 · Field, family and ambient recordings

**58 recordings, 10.4 h.** Real speech, no idea content — a child called
Judy doing radio shows and giving interviews, plus dogs, a lake, a bonfire and some
phone calls. Worth keeping; worth nobody's transcription budget.

- **`160624_001.wav`** — 10s · full file
  > Aloha and welcome to Hawaii. We are Doug and Sandy.
- **`160624_002.wav`** — 2m33s · first 30s of 2m33s
  > Wha-wha-wha-
- **`120826_003.mp3`** — 9m41s · first 30s of 9m41s
  > Mama, you throw marshmallow and it gets bigger and it gets angry. I know who you are.
- **`120826_004 (2).mp3`** — 196m20s · first 30s of 196m20s · *(VAD-off recovery)*
  > She likes a marshmallow frog. She wants to stay in hotels. Ah, let me, Mama. She wants to go shopping at the mall. But you're going to run. Ah, no running. Mommy! Mommy!
- **`2016_04_30_04_56_23.mp3`** — 1m05s · first 30s of 1m05s
  > All right, this is what I want. Yeah, you got this. Okay. Yeah, you got this. Okay.
- **`120417_003.mp3`** — 19m03s · first 30s of 19m03s
  > It's nice. It's got all kinds of lines in and mics and... Is it recording? Do something. Yeah, seems to be.
- **`130115_001.mp3`** — 28s · full file
  > Thank you
- **`130115_002.mp3`** — 14s · full file
  > I'll get you the good
- **`130115_004.mp3`** — 1m12s · first 30s of 1m12s
  > the heater recording. Testing, testing, one, two, three, testing.
- **`130123_001.mp3`** — 57s · first 30s of 57s
  > Okay, I'm ready. I'm a magician! Magician! The whale! Wrong! I'll kill the magician and dolphin! Yay! I'm just a dolphin! I have fun! I'll kill everyone! Ja, ja, ja! Ja!
- **`130123_003.mp3`** — 1s · full file
  > I think that
- **`130123_004.mp3`** — 1m16s · first 30s of 1m16s
  > Okay, hit it. The Ponty Pawn. The Ponty Pawn by... Judith. Fuckin' lies! I'm a little man!
- **`130123_005.mp3`** — 1s · full file
  > Radio.
- **`130123_006.mp3`** — 42s · first 30s of 42s
  > Wait a minute. Okay. Hello. Hello. Goodbye. Goodbye. Nerval Bluff. Spinky Wumble Torque. Dumbledore. Uh... Dumbledore! Zoopie!
- **`130123_007.mp3`** — 14s · full file
  > Doug is barking
- **`130123_008.mp3`** — 3m37s · first 30s of 3m37s
  > Okay, but I'm just gonna do one more Do your show We are plugged it and then plug it again After you do the show I'll plug it in and we'll hear how it went. You can't listen to the show before you do it
- **`130123_009.mp3`** — 1m14s · first 30s of 1m14s
  > Now if you say something, it'll be her voice. Splinters are marvelous. No! I once petted an alligator covered with feathers. very
- **`130123_010.mp3`** — 2m23s · first 30s of 2m23s
  > Um, I'd like to interview you. Can I ask you questions about what it means to be Judy in today's future world? I know. So, how do you feel about tattooing yourself every day? Good! What's your favorite tattoo? Hello Kitty. Everyone. Everyone talks. Yes.
- **`130123_011.mp3`** — 58s · first 30s of 58s
  > when it turns red, it's recording. So, hello, this is Doug Sharp's video. So let's show Doug Sharp. It's by me, by Doug Sharp. Now start it now, like a fox. Once I lived in the bottom of a cloud and my nose was long and loud, little things lived in my ears.
- **`130123_012.mp3`** — 35s · first 30s of 35s
  > This is Judy and this is the Judy show and if she feels like it She's gonna sing a song about being Judy
- **`130123_013.mp3`** — 1m21s · first 30s of 1m21s
  > I am dying. Record my dying words. You are duty. And I want to leave you with these thoughts. In the morning, when you are alive, wake up and
- **`130123_014.mp3`** — 20s · full file
  > Are you please to be interviewing me what sort of plant are you I'm a meeping plant
- **`130123_015.mp3`** — 1m00s · first 30s of 1m00s
  > We're recording now. So say something mysterious and invisible. And that was like... Time.
- **`Bonfire at Vashon Campground--Flawberry Straw.mp3`** — 196m20s · first 30s of 196m20s · *(VAD-off recovery)*
  > She likes a marshmallow frog. She wants to stay in hotels. Ah, let me, Mama. She wants to go shopping at the mall. But you're going to run. Ah, no running. Mommy! Mommy!
- **`DW_A0744.mp3`** — 11s · full file · ×4 copies
  > I'm feeling it though, huh? Yeah. I'm good.
- **`Mandy Washer Sample.mp3`** — 1m06s · first 30s of 1m06s
  > There, it's recording.
- **`120401_002.mp3`** — 8m46s · first 30s of 8m46s
  > How did the great book are they? I was just taking a bite of one to make sure. Do you? Yeah, I do.
- **`120513_001.mp3`** — 36m35s · first 30s of 36m35s
  > recording on the Big Island on Martel Lake, just ambient noise. If we're lucky, we'll get a loon. I'm reading A Distant Mirror by Tuchman.
- **`120816_013.mp3`** — 10m01s · first 30s of 10m01s
  > Well, no one knows. You stay there.
- **`120816_014.mp3`** — 41s · first 30s of 41s
  > Bumpy Rug! Bumpy Rug!
- **`121225_004.mp3`** — 2s · full file
  > Okay, wait. No, we've got all of that.
- **`130708_001.mp3`** — 10s · full file
  > thing is, I want to be back in the house. I've been out of the house for this long. It's my house. And those are important things for us to begin talking about. So Vanessa, what is it that you...
- **`130708_005.mp3`** — 23s · full file
  > Okay, now the bottom line is I'm not going to force you to do anything you don't want to do But what I'd like you to do is see if you can take one Let's put it in the trash and and see how it feels and if we got to get it out of the trash We get it out of the trash. Okay, okay Okay, before we put it in the trash, I want to look at it. You absolutely can. I just want to see what I was even saving it for. And the truth is is that it needs to be you
- **`130708_007.mp3`** — 19s · full file
  > doing them the ones we just went through. I honestly don't know because it's so mixed in. How about the pillow? The pillow, it's not going. OK, it's for my new sofa that I do not have. So here's what I'd like to do next. Some of these things right here, the easy stuff to get to. Thanks, everyone.
- **`130709_129.mp3`** — 4m31s · first 30s of 4m31s
  > And put them and oh, they're fine there. Yeah, I don't I don't mind I'm gonna take you a shower This is my team
- **`130709_130.mp3`** — 11m06s · first 30s of 11m06s
  > And put them and oh, they're fine there. Yeah, I don't I don't mind I'm gonna take you a shower
- **`DS_20041.WMA`** — 1m48s · first 30s of 1m48s
  > I wanna make it his.
- **`DS_20164.WMA`** — 40m21s · first 30s of 40m21s
  > Yeah, are you gonna are you gonna get in the boat? We'll go or do you gonna walk? Huh? Oh You're so silly Okay Okay, you can walk and swim
- **`DS_20262.WMA`** — 11m25s · first 30s of 11m25s · *(VAD-off recovery)*
  > Oh, oh, oh. You
- **`DW_S0041.mp3`** — 6m44s · first 30s of 6m44s
  > some pooches in here. You just moved from Seattle to Cavanana Lake over near Cumberland Rice Lake.
- **`DW_S0423.mp3`** — 8m15s · first 30s of 8m15s · *(VAD-off recovery)*
  > Can you sit down?
- **`DW_S0600.mp3`** — 22m07s · first 30s of 22m07s
  > Hey, hey, so how it's a light You get my return email. I I love it starting with the bull rider
- **`STE-015.mp3`** — 25s · full file
  > Hello, Doug speaking. I think you must have the wrong number. Bye-bye.
- **`STE-020.mp3`** — 13s · full file
  > Hey there, I left some port for you
- **`STE-027 (4).mp3`** — 20s · full file
  > tell Kellan that we need to just get some truths on the table and that he can ask me questions as well.
- **`STE-064 (3).mp3`** — 8s · full file
  > Oh ho, that wouldn't be bad actually.
- **`STE-064.mp3`** — 28s · full file
  > What grass what are you talking about nice grass?
- **`STE-073 (2).mp3`** — 12s · full file · *(VAD-off recovery)*
  > Come up here for a tummy scratch. Come on, come get a tummy scratch.
- **`STE-074 (2).mp3`** — 15s · full file
  > Get up here silly girl
- **`STE-075 (2).mp3`** — 11s · full file
  > Okay, where's Trav Trav? Where's the Trav?
- **`STE-076 (2).mp3`** — 5s · full file
  > Was that a deer? Did you chase it?
- **`STE-129.mp3`** — 1m48s · first 30s of 1m48s · *(VAD-off recovery)*
  > I'm sorry, I'm sorry, I'm sorry, I'm sorry.
- **`STE-133.mp3`** — 1m35s · first 30s of 1m35s · *(VAD-off recovery)*
  > I'm sorry, I'm sorry, I'm sorry.
- **`STE-158.mp3`** — 29s · full file
  > Hey big guy, that's my good trap job, huh? I was in the car but I came back
- **`STE-194.mp3`** — 6s · full file · *(VAD-off recovery)*
  > Oh, my God. Oh, my God.
- **`STE-238.mp3`** — 2m52s · first 30s of 2m52s · *(VAD-off recovery)*
  > I'm sorry, I'm sorry, I'm sorry.
- **`Voice0038.aac`** — 16s · full file · *(VAD-off recovery)*
  > I'm sorry, I'm sorry, I'm sorry.
- **`loon2.mp3`** — 6m28s · first 30s of 6m28s · *(VAD-off recovery)*
  > No, that's a loon. Just a little more. Are you sure? Not much. The loon? Yeah. Uh-huh. We have a lot to do about that. It's not just a loon, it's not really a loon. No. It's a loon. Yes, it's a loon. Yes. That's a loon. Sure. Yeah, it's a loon. Yeah. It's a loon. Yeah, it is a loon. Yeah, it is. It's a loon. Yeah, that's a loon. Oh, we should. We should. Yeah, I'm not sure. Uh, so I don't think we should. We should.

---

# 5 · Recurring projects in the notes

Names that come up again and again. Listed for Droog to rule on — **no catalog
entries invented.**

- **Real Music for Normal People** — The dominant album concept. Genre parodies with deliberately vulgar or banal lyrics — polka, disco, blues, arena rock, love song. Its own folder plus ~20 notes elsewhere. Cover art already specified: martini glasses with eyeballs instead of olives.
- **Old Farts** — Band/CD concept. Alimony, surplus medical care at the end, threesomes-because-I-need-help, wanting to grow up to be the neighborhood mean old man. Candidate titles: *Permanent Record*, *Fuddy Duddy*.
- **Ego Rock** — Song cycle inside Real Music for Normal People — rock-star braggadocio pushed past its limit.
- **My Singing Sucks, Deal With It** — Recurring CD title, plus a spin-off idea for an entire label of bad singers.
- **Chinese Underwear Repairman** — A comic bit Doug keeps rediscovering, with a running gag about how each episode parses the name.
- **Plunderphonics cluster** — The largest technical group: remix the back catalogue, sample scratchy 78s, cut new wax cylinders, run music through repeated MP3→WAV→MP3 cycles to hear it decay, pirate *only* the copyright warnings from videos, mine public-domain MIDI.
- **Voice-note music** — Several notes propose making music out of the voice notes themselves — editing phrases together, a stereo conversation with himself pitch-shifted on one channel. Given what this document is, worth noticing.
- **Palin-Cheney album** — `DS_20121.WMA` — a 16-chapter theme album. Routes to `palin-cheney-2012`.
- **Digital Sweatshop** — `DW_A0484.mp3`, `DW_A0492.mp3` — software/game-dev story notes. Routes to `sweatshop-in-the-sky`.
- **Brainrot** — `DW_A0062.mp3` — “Brainrot music, with an existential beat.” Routes to `brainrot-*`.
- **Dramaton** — `DS_20239.WMA` — “Heart to heart pure flirting game, Dramaton driven.” Routes to `dramaton`.
- **Castle Rising** — `STE-039.mp3` — an explicit aside about making Castle Rising voice notes. Routes to `castle-rising`.

---

# 6 · Gear tests and slates

**34 recordings, 0.1 h.** Whisper hears “test test one two three” as
“taste taste one two three” with total consistency, so every slate in the archive is
about flavour.

- `04_021.mp3` — 3s · ×3 copies
- `04_02_1.mp3` — 2s · ×2 copies
- `130712_007.mp3` — 2m16s
- `DS_20170.WMA` — 5s
- `DW_A0027.mp3` — 1s · ×2 copies
- `DW_A0104_1.mp3` — 1s · ×2 copies
- `DW_A0170.mp3` — 21s
- `DW_S0009.mp3` — 8s · ×2 copies
- `DW_S0015.mp3` — 12s
- `DW_S0016.mp3` — 16s
- `DW_S0017.mp3` — 7s
- `DW_S0019.mp3` — 6s
- `DW_S0020.mp3` — 3s
- `DW_S0021.mp3` — 3s
- `DW_S0124.mp3` — 6s
- `DW_S0125 (2).mp3` — 3s
- `DW_S0126.mp3` — 2s
- `DW_S0128.mp3` — 4s
- `Recording1.mp3` — 2s · ×2 copies
- `Recording2.mp3` — 1s · ×2 copies
- `STE-006.mp3` — 7s
- `STE-027.mp3` — 11s
- `STE-095.mp3` — 17s
- `STE-096.mp3` — 21s
- `STE-146.mp3` — 12s
- `STE-164.mp3` — 19s
- `STE-168.mp3` — 11s
- `STE-170.mp3` — 24s
- `STE-174.mp3` — 23s
- `STE-206.mp3` — 21s
- `STE-223.mp3` — 28s
- `~VRec_0.wav` — 4s · ×2 copies
- `~VRec_1.wav` — 2s · ×2 copies
- `~VRec_5.mp3` — 1s

---

# 7 · Uncertain

- **`DS_20304.WMA`** — 3m25s · first 30s of 3m25s · *(VAD-off recovery)*
  > Oh, you're a gorgeous camel. Thanks for watching!
- **`DW_A0056_1.wav`** — 1s · full file
  > Music
- **`DW_S0153.mp3`** — 23s · full file · ×3 copies
  > aren't very sing-a-ball.
- **`130713_076.mp3`** — 16s · full file
  > We'll see.
- **`DW_A0371.mp3`** — 11s · full file · ×3 copies
  > I'm sorry, I'm sorry, I'm sorry, I'm sorry, I'm sorry.

---

# 8 · Music and sound samples — no speech

**400 recordings, 13.8 h.** Listed for completeness. Not transcribed,
not flagged, left alone as the runbook directs.

<details><summary><code>Music projects</code> — 2 recordings</summary>

- `DW_A0369_1.mp3` — 3s
- `DW_A0578.mp3` — 8s · ×2 copies

</details>

<details><summary><code>(Music root)</code> — 4 recordings</summary>

- `130417_001.mp3` — 2m13s
- `130417_002.mp3` — 4m41s
- `130724_006.mp3` — 6s
- `131106_001.mp3` — 2s

</details>

<details><summary><code>Sounds and Samples</code> — 388 recordings</summary>

- `04_02_6.mp3` — 0s · ×2 copies
- `120216_009.mp3` — 15s
- `120226_003.mp3` — 3s
- `120226_016.mp3` — 1s
- `120226_018.mp3` — 0s
- `120329_007.mp3` — 1s
- `120330_019.mp3` — 4s
- `120407_002.mp3` — 19s
- `120521_001.mp3` — 29m02s
- `120626_001.mp3` — 15s
- `120626_002.mp3` — 6s
- `120702_005.MP3` — 1s
- `120713_001.MP3` — 4s
- `120816_002 (2).mp3` — 47s
- `120816_002.mp3` — 4s
- `120816_004 (2).mp3` — 11m06s
- `120816_005 (2).mp3` — 27m11s
- `120816_006.mp3` — 2s · ×2 copies
- `120816_007.mp3` — 3m57s
- `120816_008.mp3` — 11m12s
- `120816_012.mp3` — 0s · ×2 copies
- `120816_015.mp3` — 1m25s
- `120817_005.mp3` — 12m08s
- `121225_001.mp3` — 7s
- `121225_002.mp3` — 7s
- `130708_077.mp3` — 9s
- `130709_069.mp3` — 1m04s
- `130709_079.mp3` — 7s
- `130709_089.mp3` — 2m11s
- `130709_115.mp3` — 1m24s
- `130709_118.mp3` — 8s
- `130709_124.mp3` — 15s
- `DS_20005.WMA` — 7s
- `DS_20044.WMA` — 8m07s
- `DS_20046.WMA` — 4s
- `DS_20105.WMA` — 91m50s
- `DS_20117.WMA` — 12s
- `DS_20118.WMA` — 31s
- `DS_20119.WMA` — 5s
- `DS_20120.WMA` — 48s
- `DS_20138 (2).WMA` — 16s
- `DS_20141.WMA` — 3m43s
- `DS_20142 (2).WMA` — 3s
- `DS_20142.WMA` — 3m02s
- `DS_20148.WMA` — 5s
- `DS_20152.WMA` — 4s
- `DS_20166.WMA` — 0s
- `DS_20170 (2).WMA` — 2s · ×2 copies
- `DS_20178.WMA` — 1m29s
- `DS_20187.WMA` — 2s
- `DS_20208 (2).WMA` — 5s
- `DS_20231.WMA` — 50s
- `DS_20253.WMA` — 3m06s
- `DS_20261.WMA` — 135m34s
- `DS_20270.WMA` — 2m33s
- `DS_20288.WMA` — 1s
- `DS_20326.WMA` — 27s
- `DS_20343.WMA` — 9s
- `DS_20375.WMA` — 1m04s
- `DS_20387.WMA` — 1m38s
- `DS_20388.WMA` — 177m33s
- `DS_20419.WMA` — 22s
- `DS_20471.WMA` — 57m34s
- `DS_20489.WMA` — 5s
- `DS_20538.WMA` — 1s
- `DS_20573.WMA` — 8s
- `DS_20576.WMA` — 5s
- `DS_20608.WMA` — 29m11s
- `DS_20623.WMA` — 2s
- `DS_20631.WMA` — 10m03s
- `DS_20632.WMA` — 1s
- `DS_20633.WMA` — 40s
- `DS_20634.WMA` — 0s
- `DS_20635.WMA` — 3s
- `DS_20679.WMA` — 16s
- `DS_20684.WMA` — 0s
- `DS_20714.WMA` — 0s
- `DS_20750.WMA` — 35s
- `DS_20760.WMA` — 5s
- `DW A0223-2973.mp3` — 0s
- `DW A0235-0147.mp3` — 4s
- `DW A0294-2778.mp3` — 1m05s
- `DW A0327-5289.mp3` — 0s
- `DW S0364-3919.mp3` — 1s
- `DW S0850-5010.mp3` — 0s
- `DW_A0001.mp3` — 2s · ×2 copies
- `DW_A0020.mp3` — 2s · ×2 copies
- `DW_A0022.mp3` — 3s · ×2 copies
- `DW_A0047.mp3` — 1s · ×2 copies
- `DW_A0050_1.mp3` — 9s · ×2 copies
- `DW_A0089.mp3` — 10s · ×2 copies
- `DW_A0101_1.mp3` — 5m29s
- `DW_A0161.mp3` — 2s · ×2 copies
- `DW_A0185_2.mp3` — 14s · ×2 copies
- `DW_A0201.mp3` — 27s · ×2 copies
- `DW_A0202.mp3` — 23s · ×2 copies
- `DW_A0203.mp3` — 17s · ×2 copies
- `DW_A0204.mp3` — 23s · ×2 copies
- `DW_A0205.mp3` — 42s
- `DW_A0208.mp3` — 7s · ×2 copies
- `DW_A0214.wav` — 2s
- `DW_A0225.mp3` — 1s · ×2 copies
- `DW_A0236.mp3` — 35s · ×2 copies
- `DW_A0242.mp3` — 6s · ×2 copies
- `DW_A0245_2.mp3` — 2s · ×2 copies
- `DW_A0268_1.mp3` — 3s
- `DW_A0271_1.mp3` — 5m08s
- `DW_A0272_1.mp3` — 14m20s
- `DW_A0323.wav` — 1s
- `DW_A0331.mp3` — 4s · ×2 copies
- `DW_A0364_1.mp3` — 2s
- `DW_A0375.mp3` — 10s · ×2 copies
- `DW_A0382.mp3` — 2s · ×2 copies
- `DW_A0426_1.mp3` — 1m57s · ×2 copies
- `DW_A0538.mp3` — 2s
- `DW_A0541.mp3` — 2s · ×2 copies
- `DW_A0563.wav` — 1s · ×2 copies
- `DW_A0564.mp3` — 2s · ×2 copies
- `DW_A0603.mp3` — 4s
- `DW_A0650_1.wav` — 1s
- `DW_A0651.mp3` — 1s · ×2 copies
- `DW_A0675.mp3` — 16m28s · ×2 copies
- `DW_A0690.mp3` — 8m07s · ×2 copies
- `DW_A0701.wav` — 1s
- `DW_A0702.mp3` — 18s · ×4 copies
- `DW_A0758.mp3` — 6s · ×4 copies
- `DW_A0776.mp3` — 14s · ×4 copies
- `DW_A0807.mp3` — 14m31s · ×2 copies
- `DW_A0818.mp3` — 1m11s
- `DW_A0857.wav` — 2s
- `DW_A0951.wav` — 0s
- `DW_A0984.wav` — 0s
- `DW_B0117.wav` — 0s
- `DW_B0118.mp3` — 2s · ×2 copies
- `DW_B0276.mp3` — 4s · ×2 copies
- `DW_B0286.wav` — 0s
- `DW_B0287.mp3` — 8s · ×2 copies
- `DW_B0680.mp3` — 4m04s
- `DW_S0036.mp3` — 1s · ×2 copies
- `DW_S0099.mp3` — 2s · ×2 copies
- `DW_S0127.mp3` — 3s
- `DW_S0154.wav` — 1s
- `DW_S0158.mp3` — 3s · ×3 copies
- `DW_S0200.wav` — 0s
- `DW_S0232.wav` — 0s
- `DW_S0241.wav` — 1s
- `DW_S0253.wav` — 1s
- `DW_S0273.mp3` — 2s · ×2 copies
- `DW_S0277.wav` — 1s
- `DW_S0288.wav` — 1s
- `DW_S0289.wav` — 1s
- `DW_S0305.mp3` — 2s · ×2 copies
- `DW_S0395.wav` — 0s
- `DW_S0672.mp3` — 2s
- `DW_S0723.mp3` — 2s · ×2 copies
- `DW_S0764.wav` — 0s
- `DW_S0869.wav` — 1s
- `DW_S0883.mp3` — 2s · ×2 copies
- `DW_S0901.wav` — 1s
- `DW_S0923.mp3` — 0s · ×2 copies
- `DW_S0939.mp3` — 1s · ×2 copies
- `DW_S0947.mp3` — 0s · ×2 copies
- `DW_S0952.mp3` — 2s · ×2 copies
- `DW_S0966.wav` — 1s
- `Movie Repeated Glitch Sample.mp3` — 2m05s
- `Recording17 - 3.mp3` — 1s · ×2 copies
- `Recording74.mp3` — 2s · ×2 copies
- `STE-000.mp3` — 8s
- `STE-002.mp3` — 4s
- `STE-003.mp3` — 1m05s
- `STE-004.mp3` — 6s
- `STE-007.mp3` — 5s
- `STE-008.mp3` — 7s
- `STE-009.mp3` — 6s
- `STE-010.mp3` — 18s
- `STE-011.mp3` — 16s
- `STE-012.mp3` — 5s
- `STE-013.mp3` — 5s
- `STE-014.mp3` — 5s
- `STE-016.mp3` — 5s
- `STE-017 (4).mp3` — 5s
- `STE-018 (4).mp3` — 5s
- `STE-018.mp3` — 8s
- `STE-019 (4).mp3` — 1m19s
- `STE-019.mp3` — 5s
- `STE-020 (2).mp3` — 1s
- `STE-020 (4).mp3` — 5s
- `STE-021.mp3` — 6s
- `STE-022 (4).mp3` — 4s
- `STE-022.mp3` — 11s
- `STE-024.mp3` — 14s
- `STE-025.mp3` — 5s
- `STE-028.mp3` — 5s · ×2 copies
- `STE-029.mp3` — 14s
- `STE-030.mp3` — 9s
- `STE-031.mp3` — 5s · ×2 copies
- `STE-032.mp3` — 9s
- `STE-033.mp3` — 1m27s
- `STE-034.mp3` — 5s
- `STE-035.mp3` — 6s
- `STE-036 (2).mp3` — 0s
- `STE-036.mp3` — 7s
- `STE-040.mp3` — 6s
- `STE-041 (3).mp3` — 1s
- `STE-041.mp3` — 16s
- `STE-042.mp3` — 6s
- `STE-043.mp3` — 5s
- `STE-044 (2).mp3` — 6s
- `STE-044.mp3` — 2m06s
- `STE-045.mp3` — 5s
- `STE-046.mp3` — 10s
- `STE-047 (2).mp3` — 10s
- `STE-047.mp3` — 5s
- `STE-048.mp3` — 7s · ×2 copies
- `STE-049.mp3` — 8s · ×2 copies
- `STE-050.mp3` — 5s
- `STE-051.mp3` — 5s
- `STE-052.mp3` — 13s
- `STE-053 (2).mp3` — 18s
- `STE-054 (2).mp3` — 7s
- `STE-055 (2).mp3` — 10s
- `STE-055.mp3` — 5s
- `STE-057.mp3` — 7s
- `STE-059.mp3` — 13s
- `STE-060 (3).mp3` — 2m35s
- `STE-060.mp3` — 5s
- `STE-061 (2).mp3` — 17s
- `STE-062 (2).mp3` — 7s
- `STE-062.mp3` — 11s
- `STE-063.mp3` — 6s · ×2 copies
- `STE-064 (2).mp3` — 5s
- `STE-065 (2).mp3` — 6s
- `STE-066 (2).mp3` — 5s
- `STE-067 (2).mp3` — 19s
- `STE-068 (2).mp3` — 11s
- `STE-068.mp3` — 10s
- `STE-069 (2).mp3` — 20s
- `STE-069.mp3` — 12s
- `STE-070 (2).mp3` — 17s
- `STE-070.mp3` — 5s
- `STE-071 (2).mp3` — 6s
- `STE-072 (2).mp3` — 28s
- `STE-072.mp3` — 6s
- `STE-073.mp3` — 7s
- `STE-074.mp3` — 5s
- `STE-075.mp3` — 5s
- `STE-077.mp3` — 12s · ×2 copies
- `STE-078 (2).mp3` — 16s
- `STE-078.mp3` — 5s
- `STE-079 (2).mp3` — 6s
- `STE-080.mp3` — 5s
- `STE-081 (2).mp3` — 9s
- `STE-083 (2).mp3` — 26s
- `STE-084.mp3` — 5s · ×2 copies
- `STE-085 (2).mp3` — 8s
- `STE-085.mp3` — 21s
- `STE-086 (2).mp3` — 30s
- `STE-086.mp3` — 9s
- `STE-087 (2).mp3` — 9s
- `STE-087.mp3` — 5s
- `STE-088.mp3` — 5s · ×2 copies
- `STE-089.mp3` — 2m25s
- `STE-090 (2).mp3` — 15s
- `STE-090.mp3` — 12s
- `STE-091 (2).mp3` — 9s
- `STE-092 (2).mp3` — 14s
- `STE-092.mp3` — 7s
- `STE-093 (2).mp3` — 21s
- `STE-094 (2).mp3` — 33s
- `STE-095 (2).mp3` — 10s
- `STE-096 (2).mp3` — 6s
- `STE-097 (2).mp3` — 11s
- `STE-099.mp3` — 5s
- `STE-102.mp3` — 5s
- `STE-106.mp3` — 14s
- `STE-107.mp3` — 5s
- `STE-109.mp3` — 2m31s
- `STE-110.mp3` — 5s
- `STE-113.mp3` — 5s
- `STE-114.mp3` — 2s
- `STE-117.mp3` — 5s
- `STE-118.mp3` — 2s
- `STE-119.mp3` — 5s
- `STE-120.mp3` — 13s
- `STE-121.mp3` — 5s
- `STE-122.mp3` — 5s
- `STE-123.mp3` — 13s
- `STE-127.mp3` — 16s
- `STE-128.mp3` — 6s
- `STE-132.mp3` — 7s
- `STE-135.mp3` — 14s
- `STE-139.mp3` — 14s
- `STE-140.mp3` — 6s
- `STE-142.mp3` — 11s
- `STE-143.mp3` — 7s
- `STE-144.mp3` — 2m08s
- `STE-145.mp3` — 0s
- `STE-147.mp3` — 7s
- `STE-148.mp3` — 22s
- `STE-149.mp3` — 5s
- `STE-151.mp3` — 23s
- `STE-152.mp3` — 5s
- `STE-153.mp3` — 6s
- `STE-154.mp3` — 1m32s
- `STE-155.mp3` — 19s
- `STE-156.mp3` — 6s
- `STE-157.mp3` — 11s
- `STE-159.mp3` — 5s
- `STE-160.mp3` — 3m20s
- `STE-161.mp3` — 54s
- `STE-162.mp3` — 10s
- `STE-163.mp3` — 5s
- `STE-166.mp3` — 6s
- `STE-167.mp3` — 23s
- `STE-169.mp3` — 11s
- `STE-171.mp3` — 7s
- `STE-172.mp3` — 8s
- `STE-173.mp3` — 5s
- `STE-175.mp3` — 8s
- `STE-176.mp3` — 11s
- `STE-177.mp3` — 8s
- `STE-178.mp3` — 8s
- `STE-179.mp3` — 16s
- `STE-180.mp3` — 7s
- `STE-181.mp3` — 16s
- `STE-182.mp3` — 13s
- `STE-183.mp3` — 16s
- `STE-184.mp3` — 11s
- `STE-185.mp3` — 9s
- `STE-186.mp3` — 10s
- `STE-187.mp3` — 1m28s
- `STE-189.mp3` — 1m03s
- `STE-191.mp3` — 5s
- `STE-192.mp3` — 5s
- `STE-195.mp3` — 5s
- `STE-196.mp3` — 5s
- `STE-197.mp3` — 6s
- `STE-198.mp3` — 11s
- `STE-199.mp3` — 5s
- `STE-200.mp3` — 25s
- `STE-203.mp3` — 7s
- `STE-204.mp3` — 6s
- `STE-205.mp3` — 9s
- `STE-207.mp3` — 11s
- `STE-208.mp3` — 6s
- `STE-209.mp3` — 9s
- `STE-210.mp3` — 7s
- `STE-211.mp3` — 6s
- `STE-212.mp3` — 5s
- `STE-213.mp3` — 5s
- `STE-214.mp3` — 21s
- `STE-216.mp3` — 4s
- `STE-220.mp3` — 5s
- `STE-222.mp3` — 5s
- `STE-224.mp3` — 7s
- `STE-225.mp3` — 5s
- `STE-226.mp3` — 25s
- `STE-227.mp3` — 42s
- `STE-228.mp3` — 6s
- `STE-229.mp3` — 6s
- `STE-230.mp3` — 10s
- `STE-231.mp3` — 20s
- `STE-232.mp3` — 39s
- `STE-233.mp3` — 7s
- `STE-234.mp3` — 25s
- `STE-235.mp3` — 5s
- `STE-236.mp3` — 35s
- `STE-237.mp3` — 7s
- `STE-239.mp3` — 11s
- `STE-240.mp3` — 7s
- `STE-241.mp3` — 8s
- `STE-242.mp3` — 8s
- `STE-243.mp3` — 8s
- `STE-244.mp3` — 5s
- `STE-245.mp3` — 5s
- `STE-246.mp3` — 5s
- `STE-247.mp3` — 15s
- `STE-248.mp3` — 12s
- `candid sample - talking to dogs.mp3` — 3m26s
- `loon1.mp3` — 13m32s
- `loon3.mp3` — 8s
- `loon4.mp3` — 5m09s
- `voice03_12a16.mp3` — 3s · ×2 copies
- `voice03_12a26.mp3` — 1s · ×3 copies
- `~VRec_1b.mp3` — 0s
- `~VRec_2.mp3` — 1s · ×2 copies
- `~VRec_3.mp3` — 1s · ×2 copies
- `~VRec_4.wav` — 1s · ×2 copies

</details>

<details><summary><code>Samples (Music)</code> — 6 recordings</summary>

- `120411_001.mp3` — 15m37s
- `120417_001.mp3` — 4m37s
- `120417_002.mp3` — 1m41s
- `130115_006.mp3` — 1m54s
- `130115_007.mp3` — 51s
- `130123_002.mp3` — 0s

</details>

---

_Slice M complete. `catalog.json` untouched, nothing deployed._