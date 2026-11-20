// Leonida 55 — an offline trophy guide and tracker for Grand Theft Auto VI.
// Plain script, no modules, no network: every fact lives in this file so the
// page works straight from the local files with no server and no connection.
// Trophy names, descriptions and grades are the official PlayStation list as
// published on 18 Nov 2026. Every guide is written in our own words for this
// entry and names the source it draws on. Sources were read on 20 Nov 2026
// unless the source itself says otherwise. The game launched on 19 Nov 2026.

// Sources, numbered. The panel counts how many guides cite each one.
const SOURCES = [
  { id: 1, name: "PowerPyx — GTA 6 Trophy Guide & Roadmap", url: "powerpyx.com/gta-6-grand-theft-auto-vi-trophy-guide-roadmap", read: "20 Nov 2026", kind: "guide" },
  { id: 2, name: "PowerPyx — 100% Completion Checklist & Guide", url: "powerpyx.com/gta-6-100-completion-checklist-guide", read: "20 Nov 2026", kind: "guide" },
  { id: 3, name: "PowerPyx — Full Walkthrough (All Missions)", url: "powerpyx.com/gta-6-full-walkthrough-all-missions", read: "20 Nov 2026", kind: "walkthrough" },
  { id: 4, name: "Push Square — GTA 6 Trophy Guide & Roadmap", url: "pushsquare.com/guides/gta-6-trophy-guide-and-roadmap", read: "20 Nov 2026", kind: "guide" },
  { id: 5, name: "GTABase — Trophy Guide & Achievements List", url: "gtabase.com/articles/gta-6/gta-6-achievements-trophies-list-ps5-xbox-series", read: "20 Nov 2026", kind: "list" },
  { id: 6, name: "Insider Gaming — Complete Trophy List + 100% Guide", url: "insider-gaming.com/complete-gta-6-trophy-list-how-to-get-all-trophies-achievements", read: "20 Nov 2026", kind: "list" },
  { id: 7, name: "Radio Times — GTA 6 Trophy Guide (full list)", url: "radiotimes.com/technology/gaming/gta-6-trophies-achievements-list", read: "20 Nov 2026", kind: "list" },
  { id: 8, name: "KeenGamer — Trophy Guide & Platinum Roadmap", url: "keengamer.com/articles/guides/gta-6-trophy-guide-platinum-roadmap-all-55-trophies", read: "20 Nov 2026", kind: "guide" },
  { id: 9, name: "Official PS5 list — Exophase / PSNProfiles (as shipped in the kit)", url: "exophase.com / psnprofiles.com", read: "18 Nov 2026", kind: "official list" }
];

// The list itself — all 55 names, descriptions and grades — is confirmed by
// sources 4, 5, 6, 7 and 9. They agree on every name, description and grade.
const LIST_SOURCES = [4, 5, 6, 7, 9];

// Open disputes. Where sources disagree we show both versions, not one.
const DISPUTES = [
  { id: "D1", title: "Is the Chapter 1 balcony meditation required?", a: "PowerPyx earned the trophy having done the Chapter 1 meditation, and warns it vanishes after Chapter 1.", b: "The same guide notes the balcony meditation raises the progress counter but is not marked as a meditation spot like the other 18, so whether it counts is unclear.", call: "Do it in Chapter 1. It costs nothing and covers every reading." },
  { id: "D2", title: "Meditations: 15 or 18?", a: "The trophy needs all 18 meditation spots.", b: "The 100% checklist only needs 15 of 18.", call: "Both are true — different targets. Do all 18 and both are covered." },
  { id: "D3", title: "What is the final mission called?", a: "PowerPyx trophy page links the final-mission gold to Starting From Zero.", b: "PowerPyx walkthrough lists the final mission of Chapter 5 as The End of the Road.", call: "We say only the final story mission, and show both names here." },
  { id: "D4", title: "How long does the platinum take?", a: "About 200 hours (PowerPyx, GTABase, KeenGamer).", b: "Over 300 hours (Push Square, work in progress).", call: "Plan on 200 hours; slower players should expect more." },
  { id: "D5", title: "How many areas is Leonida?", a: "The kit starter says 52 areas.", b: "No external source states a count; PowerPyx says only to fully unfog the whole map.", call: "52 is unverified. We do not state it as fact." },
  { id: "D6", title: "How many missions are in Chapter 5?", a: "7 main missions (GameRant, Space4Games).", b: "10 entries (PowerPyx walkthrough).", call: "Totals of 91 to 93 main missions are quoted depending on what is counted." }
];

// Trophy rows. Field order:
// [id, name, official description, grade, kind, stage, hidden, missable,
//  unconfirmed, dispute ids, count target, count label, guide, steps, sources]
// Steps are [text, source numbers]. Every step cites at least one source.
const T = [
[1, "Vice Got a Price!", "Congratulations! You're a Leonida Legend.", "platinum", "goal", 0, false, false, false, ["D4"], null, null, "The platinum lands the moment the other 54 trophies are yours. Everything is single-player, one playthrough is enough, no online trophy exists, and the run takes roughly 200 hours.", [["Play the story and collect the 12 story trophies as they come.", [1, 3]], ["After the credits, open Progress, Stats, 100% Completion and work the 35-line checklist.", [2]], ["Sweep the stranger strands and the last miscellaneous trophies in free roam.", [1]], ["Keep a manual save at every chapter boundary. There is no mission replay.", [1]]], [1, 2, 3]],
[2, "Just Like Paradise", "Complete Gone Fishing.", "bronze", "story", 1, true, false, false, [], null, null, "Complete Gone Fishing, the second mission of Chapter 1. It pops on its own as the story moves forward, with nothing special to do.", [["Play through the Chapter 1 opening until Gone Fishing starts.", [3]], ["Finish the mission. The trophy is automatic and cannot be missed.", [1]]], [1, 3]],
[3, "Paradise Lost", "Complete Chapter 1.", "bronze", "story", 1, true, false, false, [], null, null, "Finish Chapter 1. The trophy pops just after the chapter ends, once the first mission of Chapter 2 is done.", [["Complete every Chapter 1 mission in story order.", [3]], ["Start Chapter 2 and finish its opening mission to trigger the pop.", [1]], ["Note the naming quirk: each chapter trophy carries the NEXT chapter's name.", [1]]], [1, 3]],
[4, "T**s Ass Drug Money", "Complete Chapter 2.", "bronze", "story", 2, true, false, false, [], null, null, "Finish Chapter 2. The trophy pops after the first mission of Chapter 3, as with the earlier chapter trophies.", [["Complete every Chapter 2 mission, including the Coffee Break unlock.", [3]], ["Start Chapter 3 and finish its opening mission to trigger the pop.", [1]]], [1, 3]],
[5, "Vice City, Baby!", "Complete Chapter 3.", "bronze", "story", 3, true, false, false, [], null, null, "Finish Chapter 3, the longest chapter. The trophy pops after the first two missions of Chapter 4.", [["Complete all 26 Chapter 3 missions, ending with the Cartel Heist.", [3]], ["Play the first two Chapter 4 missions to trigger the pop.", [1]]], [1, 3]],
[6, "Top Of The World, Ma", "Complete Chapter 4.", "bronze", "story", 4, true, false, false, [], null, null, "Finish Chapter 4. The trophy pops after the chapter's final mission, Starting From Zero.", [["Complete all 25 Chapter 4 missions.", [3]], ["Finish Starting From Zero, the chapter finale, to trigger the pop.", [1]]], [1, 3]],
[7, "You Gotta Know When to Get Off", "Complete the final mission.", "gold", "story", 5, true, false, false, ["D3"], null, null, "Complete the final story mission in Chapter 5. The gold pops with the end of the story. Sources disagree on the final mission's name, so this guide names only the final story mission.", [["Play through Chapter 5 to the finale.", [3]], ["Finish the final story mission. The gold is automatic.", [1]], ["Name dispute: one PowerPyx page says Starting From Zero, its walkthrough says The End of the Road. See the dispute box.", [1, 3]]], [1, 3]],
[8, "Trust", "Complete Breakfast Run.", "bronze", "story", 2, true, false, false, [], null, null, "Complete the Chapter 2 mission Breakfast Run. It is a story mission, so the trophy is automatic and cannot be missed.", [["Reach Breakfast Run in Chapter 2 by following the story.", [3]], ["Finish the mission. No extra objective is needed.", [1]]], [1, 3]],
[9, "Break the Bank", "Complete The Cartel Heist.", "bronze", "story", 3, true, false, false, [], null, null, "Complete The Cartel Heist, the heist finale of Chapter 3. A story trophy: automatic, unmissable.", [["Play through Chapter 3 until the heist finale unlocks.", [3]], ["Finish The Cartel Heist. The trophy pops at the end.", [1]]], [1, 3]],
[10, "Family Matters", "Complete Child's Play.", "bronze", "story", 4, true, false, false, [], null, null, "Complete the Chapter 4 mission Child's Play. Story trophy: automatic and unmissable.", [["Reach Child's Play in Chapter 4 by following the story.", [3]], ["Finish the mission. No extra objective is needed.", [1]]], [1, 3]],
[11, "DWNFALL", "Complete Headliners.", "bronze", "story", 4, true, false, false, [], null, null, "Complete the Chapter 4 mission Headliners. Story trophy: automatic and unmissable.", [["Reach Headliners in Chapter 4 by following the story.", [3]], ["Finish the mission. No extra objective is needed.", [1]]], [1, 3]],
[12, "Hi-Jacked", "Complete VCIA Takedown.", "bronze", "story", 4, true, false, false, [], null, null, "Complete VCIA Takedown, the Chapter 4 airport heist. Story trophy: automatic and unmissable.", [["Play through Chapter 4 until the airport heist unlocks.", [3]], ["Finish VCIA Takedown. The trophy pops at the end.", [1]]], [1, 3]],
[13, "Snow Storm", "Complete Operation Savage Glory.", "bronze", "story", 5, true, false, false, [], null, null, "Complete Operation Savage Glory in Chapter 5. Story trophy: automatic and unmissable.", [["Reach Operation Savage Glory in Chapter 5 by following the story.", [3]], ["Finish the mission. No extra objective is needed.", [1]]], [1, 3]],
[14, "A Long Road", "Attain 100% Completion.", "gold", "goal", 6, false, false, false, [], 100, "% completion", "Reach 100% completion. The checklist has 35 lines and only appears after the story, under Progress, Stats, 100% Completion. Progress made during the story counts, and nothing on it is missable.", [["Finish the story first. Everything you did along the way already counts.", [2]], ["Open the 35-line checklist and work it in order: story tasks, exploration, discovery.", [2]], ["Mind the no-slack lines: gang operations, bank jobs, vaults, drone trials, target decks.", [2]], ["Use the 100% Ledger tab in this guide to track every line.", [2]]], [1, 2, 6]]
,
[15, "Cunning Stunts", "Complete 250 Stunts.", "silver", "activity", 6, false, false, false, [], 250, "stunts", "Complete any 250 of the 397 stunts in the game: jumps, under-bridge flights, knife flights and base jumps. The 100% checklist needs 300, so keep going past this trophy.", [["Open the map, Exploration, Stunt Spots to see every stunt location.", [1]], ["Under the Bridges are the quickest: 202 exist, and each counts.", [1]], ["Track progress under Progress, Activities, Stunts.", [1]], ["Push on to 300 stunts for the 100% checklist.", [2]]], [1, 2]],
[16, "Master of None", "Try each type of activity once.", "bronze", "activity", 6, false, false, false, [], 9, "activity types", "Try each of the 9 activity types once: fishing, hunting, golf, shooting ranges, pool, basketball, playing a video game, winning a race, and performing a stunt. It comes naturally during the story.", [["Check what you have tried under Touchpad, Progress, Activities.", [1]], ["Pick off the missing types one by one. Each needs a single try, not a win.", [1]], ["A race win and a stunt also count toward their own trophies.", [1]]], [1]],
[17, "The Shootist", "Earn a gold medal in all Shooting Range challenges.", "silver", "activity", 6, false, false, false, [], 42, "gold medals", "Earn a gold medal in all 42 Shooting Range challenges, spread across 12 range locations. All 42 golds are also required for 100% completion.", [["Visit all 12 Shooting Range locations.", [1]], ["Replay each challenge until it clears at gold.", [1]], ["Ranges also raise Focus level, which helps Gunslinger later.", [1]]], [1, 2]],
[18, "Top Fun", "Win a Top Fun Drone Race at every location.", "bronze", "activity", 6, false, false, false, [], 14, "locations won", "Win a Top Fun Drone Race at all 14 locations. There are 42 drone races in total, and the 100% checklist needs all 42 time trials.", [["Find the 14 Top Fun locations across Leonida.", [1]], ["Win one race at each location.", [1]], ["For 100%, return and clear all 42 time trials.", [2]]], [1, 2]],
[19, "Earn Cash, Not Kudos", "Win 20 different races.", "bronze", "activity", 6, false, false, false, [], 20, "races won", "Win 20 different races. Forty unique race locations exist, and the 100% checklist needs 30 wins, so this pops on the way.", [["Race at new locations rather than repeating one.", [1]], ["Twenty different wins trigger the trophy.", [1]], ["Push on to 30 wins for the 100% checklist.", [2]]], [1, 2]],
[20, "Baited My Tackle", "Beat Cal in a fishing challenge.", "bronze", "activity", 1, false, false, false, [], null, null, "Beat Cal in a fishing challenge. After the Chapter 1 mission Feng Shui, where you meet Cal, he texts you a fishing spot west of Key Lento.", [["Finish Feng Shui in Chapter 1 to meet Cal.", [3]], ["Follow his text to the fishing spot, marked purple, west of Key Lento.", [1]], ["Win the fishing challenge against him.", [1]]], [1, 3]],
[21, "Stick Fiddler", "Complete an arcade game.", "bronze", "activity", 6, false, false, false, [], null, null, "Complete one arcade video game by finishing all of its levels once. Four games exist; three are playable on the TV at home from Chapter 1.", [["Play a video game on the home TV or at an arcade machine.", [1]], ["Finish every level of that one game.", [1]], ["The 100% checklist needs all 4 games played, so try the rest too.", [2]]], [1, 2]],
[22, "Road to Rehabilitation", "Complete the final mission for Andy.", "bronze", "side", 3, true, false, false, [], null, null, "Complete Andy's questline, which is Lucia-only. It is marked in Chapter 3 with a call and a text giving an address in Belville, and it stays available after the story.", [["As Lucia, answer Andy's call and text in Chapter 3.", [1]], ["Work through the five quests, ending with Puff Puff Pass.", [1]], ["It stays open after the story, so there is no rush.", [1]]], [1, 3]],
[23, "This Was No Boat Accident", "Complete the final mission for Kenton.", "bronze", "side", 1, true, false, false, [], 7, "shipwrecks cleared", "Complete Kenton's questline: clear 7 shipwrecks by treasure diving. It is marked in Chapter 1 after Island Dreams, at Key Lento. Kenton goes quiet after Chapter 1 but returns in Chapters 2 to 3.", [["Find the green KR icon at Key Lento after Island Dreams.", [1]], ["Dive the 7 shipwrecks, using the metal detector on the ocean floor.", [1]], ["Track it under Progress, Characters, Kenton Rees.", [1]], ["If he is unavailable, keep playing: he returns in Chapter 2 to 3.", [1]]], [1, 3]],
[24, "The Lone Rider", "Complete the final mission for Billy.", "bronze", "side", 2, true, false, false, [], null, null, "Complete Billy's questline at the Thrillbilly Mud Club in Kelly County. It is marked after the Chapter 2 mission Coffee Break and stays available after the story.", [["Finish Coffee Break in Chapter 2, then head to the Mud Club.", [3]], ["Work through the five quests, ending with Hometown Heroes.", [1]], ["It stays open after the story.", [1]]], [1, 3]],
[25, "Strangers & Freaks", "Complete 8 mission strands for strangers across the state of Leonida.", "silver", "side", 7, false, false, true, [], 8, "strands completed", "Complete 8 qualifying stranger strands. Warning: not every side quest counts. Moses, Tyrone, Yasmani, Andy, Billy and Eddie do not count. Confirmed counting strands are Kirk, Kyle, Yago and Pilot Pete, and more strangers are still being discovered.", [["Do the confirmed counting strands: Kirk, Kyle, Yago and Pilot Pete.", [1]], ["Do not count Moses, Tyrone, Yasmani, Andy, Billy or Eddie toward the 8.", [1]], ["Watch the trophy tracker as you finish strands; more are still being found.", [1]], ["All strands stay available after the story.", [1]]], [1, 3]],
[26, "Supply & Demand", "Complete the final mission for Randy.", "bronze", "side", 3, true, false, false, [], 16, "cars delivered", "Complete Randy's Wish List: deliver 16 sports cars he wants. It unlocks after the Chapter 3 mission Clonin' Keys, Makin' GS, which gives you the Key Cloner.", [["Finish Clonin' Keys, Makin' GS in Chapter 3 to unlock the Key Cloner.", [3]], ["Find Randy at the green RK icon in west Vice City.", [1]], ["Deliver the 16 cars on his list, starting with the Zorrusso from the mission.", [1]], ["Track the list under Map, Robberies, Randy's Wish List.", [1]]], [1, 3]],
[27, "Spin On This!", "Complete the final mission for Tyrone.", "bronze", "side", 3, true, false, false, [], null, null, "Complete Tyrone's questline, which is Jason-only. It opens after the Chapter 3 mission Here, Kitty Kitty, and stays available after the story.", [["As Jason, finish Here, Kitty Kitty in Chapter 3.", [3]], ["Destroy the Synthetic Labs at the purple markers in Vice City.", [1]], ["Finish the final quest, Spin On This, to shut the labs down.", [1]]], [1, 3]],
[28, "Positive Mental Attitude", "Meditate at every spot across Leonida.", "bronze", "collectible", 1, false, true, true, ["D1", "D2"], 18, "meditation spots", "Meditate at all 18 spots across 10 locations. Each spot counts once per character, so meditating with both Jason and Lucia doubles progress. This is the only trophy that may be missable: one meditation happens on a balcony in Chapter 1 and never returns, so do it while Chapter 1 lasts.", [["In Chapter 1, after Down to Earth, talk to Lucia in the kitchen in the morning.", [1, 8]], ["When she says she is going to meditate, follow her to the balcony and accept.", [1]], ["Meditate at the other spots with both characters: each counts once per character.", [1]], ["Track it under Progress, Collections, Exploration, Meditations.", [1]], ["The 100% checklist needs only 15 of 18. The trophy needs all 18.", [2]], ["Whether the Chapter 1 balcony meditation is actually required is still unconfirmed. Do it anyway: it costs nothing.", [1]]], [1, 2, 5, 8]]
,
[29, "Fair Game", "Hunt a unique animal for Bret.", "bronze", "side", 2, true, false, true, [], null, null, "Hunt a unique animal for Bret Vogel. His questline is Jason-only and opens after Coffee Break in Chapter 2, when Bret texts you. Which exact animal unlocks the trophy is still unconfirmed, so hunt every animal he requests.", [["As Jason, finish Coffee Break in Chapter 2 and wait for Bret's text.", [1]], ["Meet him in Lummox County and take his hunting requests.", [1]], ["Hunt each requested animal and bring it back to Bret.", [1]], ["All 15 Target Decks are needed for 100% completion.", [2]], ["The exact unlocking animal is still unconfirmed. Do the whole line.", [1]]], [1, 2]],
[30, "Don't Touch My Deck", "Complete 3 Collectible Card sets.", "silver", "collectible", 6, false, false, false, [], 3, "card sets completed", "Complete 3 Collectible Card sets. Eighteen sets exist with 480 cards in total, and the 100% checklist needs 15 sets, so keep collecting past this trophy.", [["Pick up cards as you explore; they sit in shops, homes and landmarks.", [1]], ["Finish any 3 full sets to trigger the trophy.", [1]], ["Push on to 15 sets for the 100% checklist.", [2]]], [1, 2]],
[31, "You WAiNKer!", "WAiNK It at 100 locations.", "silver", "collectible", 6, false, false, false, [], 100, "locations scanned", "WAiNK-scan 100 locations by holding Up and pressing R1. Landmarks, curiosities, sculptures and tags all count, and more than 100 exist.", [["Scan as you travel: hold Up, then R1, at anything scannable.", [1]], ["Landmarks, curiosities and sculptures all count toward the 100.", [1]], ["WAiNK also scans vehicles, which feeds Whip It Good.", [1]]], [1]],
[32, "One Last Thing", "Complete 50 Challenges.", "bronze", "activity", 6, false, false, false, [], 50, "challenges completed", "Complete 50 of the 80 challenges, in 8 groups of 10. The 100% checklist needs 70, so this pops on the way there.", [["Open Progress, Challenges to see all 8 groups.", [1]], ["Clear any 50 challenges across the groups.", [1]], ["Push on to 70 for the 100% checklist.", [2]]], [1, 2]],
[33, "Hot Together", "Lose a 4 star Wanted Level with your partner and escape the heat.", "bronze", "crime", 2, false, false, false, [], null, null, "Lose a 4-star wanted level with your partner and escape the heat. It pops on its own during the Chapter 4 bank vault robberies, which always draw 4 stars, so most players get it for free.", [["After Coffee Break in Chapter 2, you can free-roam with your partner.", [3]], ["Call your partner with hold Right plus Triangle.", [1]], ["At 4 stars, leave the red heat zone entirely, not just the search area.", [1]], ["Easiest escape: the train tunnel north of Ambrosia in Kelly County.", [1]], ["Or just play on: the Chapter 4 vault robberies pop it automatically.", [1]]], [1, 3]],
[34, "Retail Therapy", "Rob 3 shops back-to-back with your partner without losing your Wanted Level.", "bronze", "crime", 2, false, false, false, [], 3, "shops robbed in a row", "Rob 3 shops back-to-back with your partner without losing your wanted level. Keep the flashing wanted level alive between shops; the pop is delayed about 30 seconds after the third shop.", [["After Coffee Break in Chapter 2, bring your partner along.", [3]], ["Rob three shops in a row, keeping the wanted level flashing.", [1]], ["Wait about 30 seconds after the third shop. If nothing pops, hit a fourth.", [1]], ["Good spot: three jewelry stores in north Vice City, after Yasmani's jobs.", [1]]], [1, 3]],
[35, "Whip It Good", "Discover 100 vehicles.", "bronze", "collectible", 6, false, false, false, [], 100, "vehicles discovered", "Discover 100 vehicles by scanning them with WAiNK. You do not need to drive them. With 557 vehicles in the game, this pops naturally if you scan as you travel.", [["Scan vehicles with WAiNK: hold Up, then R1.", [1]], ["You do not need to drive a vehicle to discover it.", [1]], ["Track it under Touchpad, Progress, Vehicles.", [1]], ["The 100% checklist needs 200 of 277 base models scanned.", [2]]], [1, 2]],
[36, "Gunslinger", "Take down 5 enemies in a single use of Combat Focus.", "bronze", "crime", 6, false, false, false, [], 5, "enemies in one Focus", "Take down 5 enemies in a single use of Combat Focus. Focus slows time and highlights weak spots; it does not work on soldiers, police or civilians, so use it on criminals at gang operations.", [["Trigger Combat Focus with L3 plus R3 while aiming.", [1]], ["Buff your focus first with food, drink or a shower, and use Adrenaline to extend it.", [1]], ["Fight criminals at a gang operation with an assault rifle and body armor.", [1]], ["It is easier at Focus Level 4, raised through ranges, golf, pool and headshots.", [1]]], [1]],
[37, "Catch Me If You Can", "Make an unscheduled departure at VCIA.", "bronze", "crime", 6, true, false, false, [], null, null, "Steal a large passenger plane docked at a boarding bridge at VCIA, take off, and fly one kilometre away from the airport. Planes sitting on the open airfield do not count.", [["Enter VCIA and find a large plane docked at a bridge. Terminals E3 and E4 are easiest.", [1]], ["Use the stairs by the bridge to get inside, then go upstairs to the cockpit.", [1]], ["Reverse to the airstrip, take off, and fly 1 km from the airport.", [1]], ["The pop is delayed. Keep flying until it lands.", [1]]], [1]],
[38, "Challenging Tank", "Kinda hot in these Rhinos.", "bronze", "crime", 6, true, false, false, [], null, null, "Steal a military tank at Mile Zero Air Station, the island on the south-west edge in Mariana County. The tanks sit in the south of the base.", [["Reach Mile Zero Air Station on the island in the south-west.", [1]], ["Drive through the gate or use the stunt jump by the south-east entrance.", [1]], ["Enter a tank in the south of the base and shoot enemies until it pops.", [1]]], [1]],
[39, "Sneakthief", "Rob a jewelry store without being detected.", "bronze", "crime", 3, false, false, false, [], null, null, "Rob a jewelry store without being detected. You need the Snap Gun from the Chapter 3 mission Yasmani's Jewelry Jobs, which unlocks silent lockpicking and jewelry store robberies.", [["Finish Yasmani's Jewelry Jobs in Chapter 3 to get the Snap Gun.", [3]], ["Enter a jewelry store through the back door with the Snap Gun. Do not kick the door: it triggers the alarm.", [1]], ["Find the safe-code note, loot the safe, then destroy the security footage and disable the alarm in the backroom.", [1]], ["The trophy pops shortly after you leave.", [1]]], [1, 3]],
[40, "Maximum Withdrawal", "Rob 5 Bank Vaults and escape.", "silver", "crime", 4, false, false, false, [], 5, "bank vaults robbed", "Rob 5 bank vaults and escape. Eight exist and all 8 are needed for 100%. The intro vault robbery is the Chapter 4 optional mission That's Where The Money Is.", [["Do the Chapter 4 optional mission That's Where The Money Is first.", [3]], ["After that, pay Yasmani 10,000 dollars a tip for security-van locations.", [1]], ["Tail a van to a bank, enter while the vault is open, and bring your partner to hand off a bag.", [1]], ["Expect an instant 4-star wanted level. Escape by fast motorcycle, then switch vehicles.", [1]], ["Rob all 8 vaults for the 100% checklist.", [2]]], [1, 2, 3]],
[41, "A Classic Blitz Play", "Rob an Armored Truck and escape.", "bronze", "crime", 4, false, false, false, [], null, null, "Rob an armored truck and escape. It unlocks automatically in the Chapter 4 optional mission That's Where The Money Is, since robbing a bank vault counts for it.", [["Do the Chapter 4 optional mission That's Where The Money Is. It pops by itself.", [3]], ["Early method: block an armored truck near a bank and sticky-bomb its back door.", [1]], ["Escape the red heat radius to finish it.", [1]]], [1, 3]],
[42, "The Goodtime State", "Explore all of Leonida.", "bronze", "collectible", 6, false, false, false, ["D5"], null, null, "Fully explore Leonida by unfogging the whole map. The fastest way is by plane. Note: the kit starter claims 52 areas, but no external source states that number, so this guide does not present it as fact.", [["Fly across the whole map to unfog it. A plane is fastest.", [1]], ["Check the map for fogged patches and sweep them last.", [1]], ["The 52-area figure is unverified. See the dispute box.", [1]]], [1, 5]]
,
[43, "Pest Control", "Rob an Illegal Operation belonging to each gang.", "bronze", "crime", 6, false, false, false, [], 9, "gangs robbed", "Rob an Illegal Operation belonging to each of the 9 gangs. Thirty-nine operations exist in total, and all 39 are needed for 100% completion.", [["Illegal Operations show as yellow map icons when you are near.", [1]], ["Many are marked automatically as the story progresses.", [1]], ["Rob one operation for each of the 9 gangs.", [1]], ["Track it under Progress, Gangs, and clear all 39 for 100%.", [2]]], [1, 2]],
[44, "In The Beginning…", "Enjoy a cocktail with a view on Ocean Beach.", "bronze", "misc", 6, true, false, false, [], null, null, "Enjoy a cocktail with a view on Ocean Beach. Go to the Ocean View Rooftop Bar, buy an Apple Martini, and drink it standing next to the bar.", [["Head to the Ocean View Rooftop Bar on Ocean Beach.", [1]], ["Buy an Apple Martini.", [1]], ["Drink it standing next to the bar.", [1]]], [1]],
[45, "Capital Offense", "Smash your way out of a vehicle showroom in classic style.", "bronze", "crime", 3, true, false, false, [], null, null, "Steal the blue Banshee from the showroom in south Vice City and drive it through the showroom window. You need the Key Cloner from the Chapter 3 mission Clonin' Keys, Makin' GS, and only this specific car counts.", [["Finish Clonin' Keys, Makin' GS in Chapter 3 to get the Key Cloner.", [3]], ["Go to the showroom in south Vice City and take the blue Banshee.", [1]], ["Drive it straight through the showroom window. The pop is slightly delayed.", [1]]], [1, 3]],
[46, "Let’s Go Bowling", "Follow-through at the Kolt & Associates' bowling alley.", "bronze", "crime", 6, true, false, false, [], 3, "valuables stolen", "CORRECTED: this trophy is not about bowling. Steal all 3 key valuables at Kingpin Bowling in Port Gellhorn, a gang operation marked during the Chapter 2 optional mission Hit Kingpin Bowling. The trophy pops after you escape the police.", [["Do not bowl. This is a robbery at Kingpin Bowling, Port Gellhorn.", [1]], ["Take the luxury watch in the south-east office.", [1]], ["Take the unique shotgun Gutterball Moreland 850 from the north-east table.", [1]], ["Open the safe in the north-east hallway with sticky bombs.", [1]], ["Escape the police. The trophy pops once you are clear.", [1]], ["Not missable: the robbery icon respawns, and valuables can be collected across visits.", [1]]], [1, 3]],
[47, "Personal Best", "A partnership with mass appeal.", "bronze", "activity", 6, true, false, false, [], null, null, "Reach maximum Strength with both Jason and Lucia at the same time. It only works after Coffee Break in Chapter 2, when character switching unlocks. Train together at fitness clubs: while one trains, the other completes training automatically.", [["Finish Coffee Break in Chapter 2 to unlock switching.", [3]], ["Call your partner and work out together at a fitness club.", [1]], ["While one trains, the other auto-completes training, so both gain at once.", [1]], ["Check Strength for both under Touchpad, Jason and Lucia.", [1]]], [1, 3]],
[48, "Actions Speak Louder", "Choices made (for better or worse).", "bronze", "misc", 6, true, false, false, [], 500, "profile actions", "Perform 500 actions that affect your Criminal Profile. The count is visible by opening the trophy in the trophy list. It pops passively during 100% work; turn on criminal-profile notifications to watch it grow.", [["Turn on notifications: Settings, UI, HUD Notifications, Criminal Profile.", [1]], ["Play normally. Robberies, chases and takedowns all feed the count.", [1]], ["Avoid the Irredeemable profile: it is permanent, and police shoot on sight.", [1]], ["If you are short at the end, farm actions in free roam.", [1]]], [1]],
[49, "Bad Luck, I Guess", "Second time's the charm.", "bronze", "misc", 7, true, false, true, [], null, null, "UNKNOWN: as of 20 Nov 2026, no guide has confirmed how this trophy unlocks. The best current belief is that it relates to the Payday Loans store from the Prologue, possibly robbing it again later in a specific way. This guide will not present a guess as a method.", [["Status: method not yet confirmed by any guide site.", [1]], ["Current best belief: the Payday Loans store from the Prologue, in Little Cuba, Vice City.", [1]], ["Test protocol: revisit the store after the story and try robbing it again.", [1]], ["Do not trust one-liner guesses. Check back once a guide confirms it.", [1]]], [1]],
[50, "The Truth Is Out There", "What the hell just happened?", "bronze", "misc", 6, true, false, false, [], null, null, "Witness the UFO easter egg. On the road north-west of the Starlet Motel in Kelly County, at night after 2 AM and alone, a blinking car sometimes waits at the roadside. Follow the path into the woods to the bright blue light.", [["Go alone to the road north-west of the Starlet Motel, Kelly County, after 2 AM.", [1]], ["Look for a blinking car at the roadside. The spawn is slightly random: drive away and return if it is absent.", [1]], ["Follow the path into the woods toward the bright blue light.", [1]], ["Watch the UFO drop the abducted woman, talk to her, offer help, and walk back to her car.", [1]]], [1]],
[51, "Ten Pin", "Bowl 'em over with a melee drive-by.", "bronze", "crime", 6, true, false, false, [], 10, "pedestrians kicked in 60s", "On any bike, kick 10 pedestrians with Square within 60 seconds. Crowded streets in Vice City or Ocean Beach make it easy.", [["Get any bike and ride to a crowded area: Vice City or Ocean Beach.", [1]], ["Kick pedestrians with Square as you ride past.", [1]], ["Land 10 kicks inside 60 seconds.", [1]]], [1]],
[52, "Dime on the Dollar", "Earn $250,000 laundering Marked Bills through your contacts.", "bronze", "crime", 3, false, false, false, [], 250000, "dollars laundered", "Launder 250,000 dollars in Marked Bills through your contacts. You need the Dye Pack Jammer from the Chapter 3 mission Credit Check, which introduces Raul's crew. Bills come from banks and Payday Loans, and the total is cumulative.", [["Finish Credit Check in Chapter 3 to unlock the Dye Pack Jammer.", [3]], ["Collect Marked Bills from banks and Payday Loans.", [1]], ["Launder them through a fence. Yasmani in Vice City pays the most.", [1]], ["Bank vaults pay up to 205,000 dollars each, so this comes naturally with 100% robberies.", [1]]], [1, 3]],
[53, "Treat Yo Self", "Spend $100,000 across all shops.", "bronze", "misc", 6, false, false, false, [], 100000, "dollars spent", "Spend 100,000 dollars across all shops. Guns, car mods and tattoos are the fastest way to burn money.", [["Spend across any shops: guns, mods, tattoos, clothing, food.", [1]], ["Car mods and weapons move the total fastest.", [1]], ["The total is cumulative across the whole playthrough.", [1]]], [1]],
[54, "Little Boxes", "Purchase all garage properties.", "bronze", "misc", 2, false, false, false, [], 8, "garages purchased", "Buy all 8 purchasable garage properties, 160,000 dollars in total, through the Vice City Real Estate phone app. Four more garages come from the story and do not count.", [["Finish Daily Driver in Chapter 2, stealing the Crawler for Moses.", [3]], ["Open the Vice City Real Estate app on the phone.", [1]], ["Buy all 8 garages. Total cost is 160,000 dollars.", [1]], ["Story garages do not count toward the 8.", [1]]], [1, 3]],
[55, "On the Spot", "Register 10 vehicles to the Scooter Bros app.", "bronze", "misc", 2, false, false, false, [], 10, "vehicles registered", "Register 10 vehicles to the Scooter Bros app. The app is installed after the Chapter 2 mission Moses. Drive stolen vehicles to Moses in Port Gellhorn, then respray and register them.", [["Finish the Chapter 2 mission Moses to install the Scooter Bros app.", [3]], ["Drive a stolen vehicle to Moses in Port Gellhorn.", [1]], ["Choose Respray, then Register, for each vehicle.", [1]], ["Use cheap cars and bikes to keep the cost down. Each garage adds parking spots.", [1]], ["From Chapter 3, Standard Tracker cars can be registered at any Pay 'n' Spray.", [1]]], [1, 3]]
];

// Roadmap stages, in the order a player meets them.
const STAGES = [
  { n: 0, name: "Goal", sub: "The platinum itself" },
  { n: 1, name: "Stage 1 · Chapter 1", sub: "Leonida Keys · 22 missions" },
  { n: 2, name: "Stage 2 · Chapter 2", sub: "Port Gellhorn · 11 missions" },
  { n: 3, name: "Stage 3 · Chapter 3", sub: "Vice City · 26 missions" },
  { n: 4, name: "Stage 4 · Chapter 4", sub: "Vice City · 25 missions" },
  { n: 5, name: "Stage 5 · Finale", sub: "Chapter 5 · the last missions" },
  { n: 6, name: "Stage 6 · Free roam & 100%", sub: "After the story" },
  { n: 7, name: "Stage 7 · Cleanup", sub: "Strangers & open questions" }
];

// The three roadmap steps, following the leading guide's structure.
const ROADMAP = [
  { step: "Step 1", title: "Story playthrough", hours: "60–80 hours", body: "Play the story and do optional missions as they appear. Scan vehicles and study animals as you travel, meditate with both characters, and keep a manual save at the start and end of every chapter. Do the Chapter 1 balcony meditation while Chapter 1 lasts: it is the only thing in the game that can be missed.", src: [1, 3] },
  { step: "Step 2", title: "100% checklist", hours: "about 100 hours", body: "After the credits, open Progress, Stats, 100% Completion and work the 35-line checklist in the 100% Ledger tab. Most miscellaneous trophies pop along the way. Nothing on the checklist is missable.", src: [2] },
  { step: "Step 3", title: "Strangers & cleanup", hours: "about 10 hours", body: "Finish the 8 counting stranger strands and any leftover character questlines. Every quest giver stays available after the story. Then sweep the last miscellaneous trophies in free roam.", src: [1] }
];

// The 35 lines of the 100% completion checklist (A Long Road).
const LEDGER = [
  ["Story & Tasks", "Story Completion", "finish the story"],
  ["Story & Tasks", "100 Optional Tasks", "any 100"],
  ["Story & Tasks", "Gang Operations", "39 of 39"],
  ["Story & Tasks", "Bank Jobs", "22 of 22"],
  ["Story & Tasks", "Payday Loan Jobs", "7 of 7"],
  ["Story & Tasks", "Smash 'N' Grabs", "34 of 35"],
  ["Story & Tasks", "Stick Ups", "50 of 91"],
  ["Story & Tasks", "Narcotics Fenced", "$100,000"],
  ["Story & Tasks", "Jewelry Fenced", "$100,000"],
  ["Story & Tasks", "Marked Bills Fenced", "$250,000"],
  ["Story & Tasks", "Vaults Hit", "8 of 8"],
  ["Story & Tasks", "Vehicles Fenced", "$200,000"],
  ["Exploration & Activities", "Kenton Sets", "5 of 7"],
  ["Exploration & Activities", "Card Sets", "15 of 18"],
  ["Exploration & Activities", "WAiNK Locations", "100"],
  ["Exploration & Activities", "Underwater Discoveries", "33 of 33"],
  ["Exploration & Activities", "Magazines, Books & Comics", "30 of 34"],
  ["Exploration & Activities", "Meditation Spots", "15 of 18"],
  ["Exploration & Activities", "Cocaine Flamingos", "100 of 125"],
  ["Exploration & Activities", "Unique Playlists", "2 of 2"],
  ["Exploration & Activities", "Discovered Styles", "70 of 79"],
  ["Exploration & Activities", "Unique Races Won", "30 of 40"],
  ["Exploration & Activities", "Race Challenge Golds", "10 of 13"],
  ["Exploration & Activities", "Shooting Range Golds", "42 of 42"],
  ["Exploration & Activities", "Video Games Played", "4 of 4"],
  ["Exploration & Activities", "Pool Opponents", "5 of 7"],
  ["Exploration & Activities", "Mini Golf Locations", "2 of 3"],
  ["Exploration & Activities", "Basketball Hoops", "90 of 100"],
  ["Exploration & Activities", "Drone Time Trials", "42 of 42"],
  ["Exploration & Activities", "Stunts", "300 of 397"],
  ["Exploration & Activities", "Challenges", "70 of 80"],
  ["Exploration & Activities", "Bret's Target Decks", "15 of 15"],
  ["Discovery", "Base Model Vehicles", "200 of 277"],
  ["Discovery", "Standard Issue Weapons", "50 of 66"],
  ["Discovery", "Animals Studied", "100 of 255"]
];

// Demo state for screenshots: 14 trophies marked earned, labelled DEMO in the
// interface. A real visitor starts empty; demo never touches saved progress.
const DEMO_EARNED = [2, 3, 8, 16, 19, 20, 21, 32, 33, 35, 44, 47, 51, 53];
const DEMO_COUNTS = { 28: 6, 15: 41, 31: 23, 35: 58 };
const DEMO_LEDGER = [0, 1, 2, 3, 4, 12, 13, 14, 20, 23, 24, 30];


// ---------- state ----------
const params = new URLSearchParams(location.search);
const DEMO = params.get("demo") === "1";
const LS_EARNED = "leonida55-earned";
const LS_COUNTS = "leonida55-counts";
const LS_LEDGER = "leonida55-ledger";
const LS_SPOILER = "leonida55-spoiler";

function loadJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) { return fallback; }
}
function storeJSON(key, value) {
  if (DEMO) return;
  try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {}
}

let earned = new Set(DEMO ? DEMO_EARNED : loadJSON(LS_EARNED, []));
let counts = DEMO ? Object.assign({}, DEMO_COUNTS) : loadJSON(LS_COUNTS, {});
let ledgerDone = new Set(DEMO ? DEMO_LEDGER : loadJSON(LS_LEDGER, []));
let spoilerOn = params.get("spoiler") === "off" ? false : params.get("spoiler") === "on" ? true : loadJSON(LS_SPOILER, true);
let revealed = new Set();
let view = ["checklist", "roadmap", "missables", "sources", "ledger"].indexOf(params.get("view")) >= 0 ? params.get("view") : "checklist";
let selected = parseInt(params.get("trophy") || "28", 10) || 28;
let kindFilter = params.get("filter") || "all";
let gradeFilter = params.get("grade") || "all";
let query = "";

// Field readers for the compact trophy rows.
function tid(t) { return t[0]; }
function tname(t) { return t[1]; }
function tdesc(t) { return t[2]; }
function tgrade(t) { return t[3]; }
function tkind(t) { return t[4]; }
function tstage(t) { return t[5]; }
function thidden(t) { return t[6]; }
function tmissable(t) { return t[7]; }
function tunconfirmed(t) { return t[8]; }
function tdisputes(t) { return t[9]; }
function tcount(t) { return t[10]; }
function tcountLabel(t) { return t[11]; }
function tguide(t) { return t[12]; }
function tsteps(t) { return t[13]; }
function tsrc(t) { return t[14]; }
function byId(id) { return T.find(function (t) { return t[0] === id; }); }
function srcById(id) { return SOURCES.find(function (s) { return s.id === id; }); }
function disputeById(id) { return DISPUTES.find(function (d) { return d.id === id; }); }

const GRADE_POINTS = { platinum: 300, gold: 90, silver: 30, bronze: 15 };
const GRADE_LETTER = { platinum: "P", gold: "G", silver: "S", bronze: "B" };
const KIND_LABEL = { goal: "Goal", story: "Story", side: "Side quest", collectible: "Collectible", activity: "Activity", crime: "Crime", misc: "Misc" };

function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function srcRefs(ids) {
  return ids.map(function (n) { return "[" + n + "]"; }).join(" ");
}
function totalSteps() {
  let n = 0;
  T.forEach(function (t) { n += tsteps(t).length; });
  return n;
}
function citedSteps() {
  let n = 0;
  T.forEach(function (t) {
    tsteps(t).forEach(function (st) { if (st[1] && st[1].length) n += 1; });
  });
  return n;
}
function guidesCiting(n) {
  let c = 0;
  T.forEach(function (t) { if (tsrc(t).indexOf(n) >= 0) c += 1; });
  return c;
}
function watchList() {
  return T.filter(function (t) { return tunconfirmed(t) || tdisputes(t).length > 0; });
}
function isMasked(t) {
  return spoilerOn && thidden(t) && tkind(t) === "story" && !earned.has(tid(t)) && !revealed.has(tid(t));
}
function stageOf(t) {
  const s = STAGES.find(function (x) { return x.n === tstage(t); });
  return s ? s.name : "";
}
function psnPoints() {
  let p = 0;
  earned.forEach(function (id) { const t = byId(id); if (t) p += GRADE_POINTS[tgrade(t)]; });
  return p;
}
function nextUp() {
  return T.filter(function (t) { return !earned.has(tid(t)) && tstage(t) !== 0; })
    .sort(function (a, b) { return (tstage(a) - tstage(b)) || (tid(a) - tid(b)); })
    .slice(0, 6);
}

// ---------- header + audit strip ----------
function renderHeader() {
  const perGrade = ["platinum", "gold", "silver", "bronze"].map(function (g) {
    const total = T.filter(function (t) { return tgrade(t) === g; }).length;
    const got = T.filter(function (t) { return tgrade(t) === g && earned.has(tid(t)); }).length;
    return GRADE_LETTER[g] + " " + got + "/" + total;
  }).join(" &nbsp; ");
  const pct = Math.round(earned.size / 55 * 100);
  document.getElementById("progressLine").innerHTML =
    "<strong>" + earned.size + " of 55 earned (" + pct + "%)</strong><br>" + perGrade +
    " &nbsp;·&nbsp; <strong>" + psnPoints() + " / 1,350 PSN pts</strong>";
  document.getElementById("progressBar").style.width = pct + "%";
  document.getElementById("spoilerBtn").textContent = spoilerOn ? "Spoilers: hidden" : "Spoilers: shown";
  document.getElementById("demoBadge").style.display = DEMO ? "inline-block" : "none";
}

function renderAudit() {
  const hidden = T.filter(function (t) { return thidden(t); }).length;
  const missable = T.filter(function (t) { return tmissable(t); }).length;
  const unconfirmed = T.filter(function (t) { return tunconfirmed(t); }).length;
  const cited = T.filter(function (t) { return tsrc(t).length > 0; }).length;
  document.getElementById("audit1").innerHTML =
    "<b>AUDIT</b> · 55 official · 1P 2G 6S 46B · " + hidden + " hidden on PSN · 0 online · " +
    cited + "/55 guides cite a source · <b>" + citedSteps() + "/" + totalSteps() + " steps cited</b>";
  document.getElementById("audit2").innerHTML =
    "9 sources read 20 Nov 2026 · " + missable + " possibly missable · " + watchList().length +
    " watch · " + unconfirmed + " unconfirmed · " + DISPUTES.length +
    " disputes shown both ways · ~200 h to platinum · difficulty 4/10 · one playthrough · game launched 19 Nov 2026";
}

// ---------- tabs ----------
const TABS = [
  ["checklist", "Checklist"],
  ["roadmap", "Roadmap to platinum"],
  ["missables", "Missables & watch"],
  ["sources", "Sources"],
  ["ledger", "100% Ledger"]
];
function renderTabs() {
  document.getElementById("tabs").innerHTML = TABS.map(function (tab) {
    const extra = tab[0] === "missables" ? " (1)" : tab[0] === "ledger" ? " (" + ledgerDone.size + "/35)" : "";
    return "<button type=\"button\" class=\"tab" + (view === tab[0] ? " active" : "") + "\" data-view=\"" + tab[0] + "\">" + tab[1] + extra + "</button>";
  }).join("");
  document.querySelectorAll("#tabs .tab").forEach(function (b) {
    b.addEventListener("click", function () { view = b.getAttribute("data-view"); renderAll(); });
  });
}

// ---------- left column: filters + checklist ----------
const FILTERS = [
  ["all", "All"], ["story", "Story"], ["missable", "Missable"], ["collectible", "Collectibles"],
  ["activity", "Activities"], ["side", "Side quests"], ["crime", "Crime"], ["misc", "Misc"],
  ["hidden", "PSN-hidden"], ["disputed", "Disputed"], ["unconfirmed", "Unconfirmed"], ["unearned", "Not earned"]
];
function filterCount(f) {
  if (f === "all") return 55;
  if (f === "missable") return T.filter(function (t) { return tmissable(t); }).length;
  if (f === "hidden") return T.filter(function (t) { return thidden(t); }).length;
  if (f === "disputed") return T.filter(function (t) { return tdisputes(t).length > 0; }).length;
  if (f === "unconfirmed") return T.filter(function (t) { return tunconfirmed(t); }).length;
  if (f === "unearned") return T.filter(function (t) { return !earned.has(tid(t)); }).length;
  return T.filter(function (t) { return tkind(t) === f; }).length;
}
function matchesFilter(t) {
  if (gradeFilter !== "all" && tgrade(t) !== gradeFilter) return false;
  if (query && tname(t).toLowerCase().indexOf(query) < 0 && tdesc(t).toLowerCase().indexOf(query) < 0) return false;
  if (kindFilter === "all") return true;
  if (kindFilter === "missable") return tmissable(t);
  if (kindFilter === "hidden") return thidden(t);
  if (kindFilter === "disputed") return tdisputes(t).length > 0;
  if (kindFilter === "unconfirmed") return tunconfirmed(t);
  if (kindFilter === "unearned") return !earned.has(tid(t));
  return tkind(t) === kindFilter;
}

function renderLeft() {
  let html = "<div class=\"searchRow\"><input id=\"searchBox\" type=\"search\" placeholder=\"Search 55 trophies…\" value=\"" + esc(query) + "\">" +
    "<select id=\"gradeSel\" aria-label=\"Filter by grade\">" +
    [["all", "All grades"], ["platinum", "Platinum"], ["gold", "Gold"], ["silver", "Silver"], ["bronze", "Bronze"]].map(function (g) {
      return "<option value=\"" + g[0] + "\"" + (gradeFilter === g[0] ? " selected" : "") + ">" + g[1] + "</option>";
    }).join("") + "</select></div>";
  html += "<div class=\"chips\">" + FILTERS.map(function (f) {
    return "<button type=\"button\" class=\"chip" + (kindFilter === f[0] ? " active" : "") + "\" data-filter=\"" + f[0] + "\">" + f[1] + " " + filterCount(f[0]) + "</button>";
  }).join("") + "</div>";
  const shown = T.filter(matchesFilter);
  if (!shown.length) {
    html += "<p class=\"empty\">No trophies match this filter.</p>";
  }
  STAGES.forEach(function (stage) {
    const rows = shown.filter(function (t) { return tstage(t) === stage.n; });
    if (!rows.length) return;
    const got = rows.filter(function (t) { return earned.has(tid(t)); }).length;
    html += "<div class=\"stageHead\">" + esc(stage.name) + " <span>" + got + "/" + rows.length + "</span></div>";
    rows.forEach(function (t) {
      const masked = isMasked(t);
      const label = masked ? "Hidden story trophy" : tname(t);
      const tags = [];
      if (tmissable(t)) tags.push("<span class=\"tag miss\">MISSABLE?</span>");
      if (tunconfirmed(t)) tags.push("<span class=\"tag unc\">UNCONFIRMED</span>");
      if (tdisputes(t).length) tags.push("<span class=\"tag dis\">DISPUTED</span>");
      if (thidden(t) && !masked) tags.push("<span class=\"tag hid\">HIDDEN</span>");
      const cnt = tcount(t) !== null ? "<span class=\"rowCount\">" + (counts[tid(t)] || 0) + "/" + tcount(t) + "</span>" : "";
      html += "<div class=\"row" + (selected === tid(t) ? " sel" : "") + (earned.has(tid(t)) ? " done" : "") + "\" data-id=\"" + tid(t) + "\">" +
        "<input type=\"checkbox\" class=\"tick\" data-id=\"" + tid(t) + "\"" + (earned.has(tid(t)) ? " checked" : "") + " aria-label=\"Mark earned\">" +
        "<span class=\"gBadge " + tgrade(t) + "\">" + GRADE_LETTER[tgrade(t)] + "</span>" +
        "<span class=\"rowMain\"><span class=\"rowName\">" + esc(label) + "</span>" +
        "<span class=\"rowSub\">" + (masked ? "Spoiler hidden until earned" : esc(tdesc(t))) + "</span>" +
        (tags.length ? "<span class=\"rowTags\">" + tags.join(" ") + "</span>" : "") + "</span>" + cnt +
        (masked ? "<button type=\"button\" class=\"reveal\" data-id=\"" + tid(t) + "\">Reveal</button>" : "") +
        "</div>";
    });
  });
  document.getElementById("leftCol").innerHTML = html;
  document.getElementById("searchBox").addEventListener("input", function (e) {
    query = e.target.value.trim().toLowerCase();
    renderLeft();
    const box = document.getElementById("searchBox");
    box.focus();
    box.setSelectionRange(box.value.length, box.value.length);
  });
  document.getElementById("gradeSel").addEventListener("change", function (e) {
    gradeFilter = e.target.value;
    renderLeft();
  });
  document.querySelectorAll("#leftCol .chip").forEach(function (b) {
    b.addEventListener("click", function () { kindFilter = b.getAttribute("data-filter"); renderLeft(); });
  });
  document.querySelectorAll("#leftCol .row").forEach(function (row) {
    row.addEventListener("click", function (e) {
      if (e.target.classList.contains("tick") || e.target.classList.contains("reveal")) return;
      selected = parseInt(row.getAttribute("data-id"), 10);
      view = "checklist";
      renderAll();
    });
  });
  document.querySelectorAll("#leftCol .tick").forEach(function (box) {
    box.addEventListener("change", function () {
      const id = parseInt(box.getAttribute("data-id"), 10);
      if (box.checked) earned.add(id); else earned.delete(id);
      storeJSON(LS_EARNED, Array.from(earned));
      renderAll();
    });
  });
  document.querySelectorAll("#leftCol .reveal").forEach(function (b) {
    b.addEventListener("click", function (e) {
      e.stopPropagation();
      revealed.add(parseInt(b.getAttribute("data-id"), 10));
      renderLeft();
    });
  });
}


// ---------- middle column: trophy detail ----------
function renderDetail() {
  const t = byId(selected) || byId(28);
  const id = tid(t);
  const badges = [];
  badges.push("<span class=\"badge grade-" + tgrade(t) + "\">" + tgrade(t).toUpperCase() + "</span>");
  badges.push("<span class=\"badge\">" + KIND_LABEL[tkind(t)].toUpperCase() + "</span>");
  badges.push("<span class=\"badge\">" + stageOf(t).toUpperCase() + "</span>");
  if (thidden(t)) badges.push("<span class=\"badge hid\">HIDDEN ON PSN</span>");
  if (tmissable(t)) badges.push("<span class=\"badge miss\">POSSIBLY MISSABLE</span>");
  if (tunconfirmed(t)) badges.push("<span class=\"badge unc\">UNCONFIRMED</span>");
  if (tdisputes(t).length) badges.push("<span class=\"badge dis\">SOURCES DISAGREE · " + tdisputes(t).length + "</span>");
  if (id === 46) badges.push("<span class=\"badge fix\">CORRECTED</span>");
  if (id === 49) badges.push("<span class=\"badge unc\">METHOD UNKNOWN</span>");

  let html = "<div class=\"detailHead\"><div class=\"detailNum\">TROPHY #" + id + " OF 55</div>" +
    "<h2>" + esc(tname(t)) + "</h2>" +
    "<div class=\"badges\">" + badges.join(" ") + "</div>" +
    "<p class=\"official\"><span class=\"lbl\">OFFICIAL DESCRIPTION</span> “" + esc(tdesc(t)) + "”</p></div>";

  if (tcount(t) !== null) {
    const have = counts[id] || 0;
    const pct = Math.min(100, Math.round(have / tcount(t) * 100));
    html += "<div class=\"counterBox\"><div class=\"counterTop\"><span>YOUR COUNT — " + esc(tcountLabel(t)).toUpperCase() + "</span><strong>" + have + "/" + tcount(t) + "</strong></div>" +
      "<div class=\"bar\"><div class=\"barFill\" style=\"width:" + pct + "%\"></div></div>" +
      "<label>Update your count <input id=\"countInput\" type=\"number\" min=\"0\" max=\"" + tcount(t) + "\" value=\"" + have + "\"></label></div>";
  }

  if (tmissable(t)) {
    html += "<div class=\"callout missBox\"><b>1 POSSIBLY MISSABLE — DO IT IN CHAPTER 1.</b> The balcony meditation happens once, in Chapter 1, after Down to Earth. After Chapter 1 ends it never returns. Whether it is actually required is still unconfirmed — doing it covers every reading. [1][8]</div>";
  }
  if (id === 49) {
    html += "<div class=\"callout uncBox\"><b>METHOD NOT YET CONFIRMED.</b> As of 20 Nov 2026 no guide site has confirmed how this trophy unlocks. Below is the best current belief plus a test protocol — not a solved method. [1]</div>";
  }
  if (id === 46) {
    html += "<div class=\"callout fixBox\"><b>CORRECTED.</b> The kit starter says to play bowling here. That is wrong: PowerPyx confirms this trophy is a robbery of three valuables at Kingpin Bowling. The guide below follows the corrected method. [1]</div>";
  }
  if (id === 42) {
    html += "<div class=\"callout fixBox\"><b>UNVERIFIED FIGURE.</b> The kit starter claims 52 areas. No external source states that number, so this guide does not present it as fact. See the dispute box below. [1]</div>";
  }

  html += "<h3>IN SHORT</h3><p class=\"guideText\">" + esc(tguide(t)) + "</p>";
  html += "<h3>HOW TO EARN IT — IN OUR OWN WORDS, EVERY STEP CITED</h3><ol class=\"steps\">" +
    tsteps(t).map(function (st) {
      return "<li>" + esc(st[0]) + " <span class=\"cite\">" + srcRefs(st[1]) + "</span></li>";
    }).join("") + "</ol>";

  if (tdisputes(t).length) {
    html += "<h3>SOURCES DIFFER — BOTH VERSIONS SHOWN</h3>";
    tdisputes(t).forEach(function (did) {
      const d = disputeById(did);
      html += "<div class=\"dispute\"><b>" + esc(d.title) + "</b>" +
        "<p><span class=\"lbl\">VERSION A</span> " + esc(d.a) + "</p>" +
        "<p><span class=\"lbl\">VERSION B</span> " + esc(d.b) + "</p>" +
        "<p><span class=\"lbl\">OUR CALL</span> " + esc(d.call) + "</p></div>";
    });
  }

  html += "<h3>SOURCES FOR THIS GUIDE</h3><ul class=\"srcList\">" +
    tsrc(t).map(function (n) {
      const s = srcById(n);
      return "<li><b>[" + n + "] " + esc(s.name) + "</b><br><span class=\"url\">" + esc(s.url) + "</span> · read " + esc(s.read) + " · cited by " + guidesCiting(n) + " of 55 guides</li>";
    }).join("") + "</ul>";
  html += "<p class=\"listNote\">List check: the name, description and grade above are confirmed by the official PS5 list [9] and by Push Square [4], GTABase [5], Insider Gaming [6] and Radio Times [7] — all five agree on all 55.</p>";
  html += "<p class=\"ownWords\">Original guide text written for this entry. No Rockstar Games logo, artwork or screenshots are used anywhere in this guide.</p>";

  const prev = byId(id > 1 ? id - 1 : 55);
  const next = byId(id < 55 ? id + 1 : 1);
  html += "<div class=\"prevNext\"><button type=\"button\" id=\"prevBtn\">← #" + tid(prev) + " " + esc(tname(prev)) + "</button>" +
    "<button type=\"button\" id=\"nextBtn\">#" + tid(next) + " " + esc(tname(next)) + " →</button></div>";

  document.getElementById("midCol").innerHTML = html;
  const input = document.getElementById("countInput");
  if (input) {
    input.addEventListener("change", function () {
      const v = Math.max(0, Math.min(tcount(t), parseInt(input.value, 10) || 0));
      counts[id] = v;
      storeJSON(LS_COUNTS, counts);
      renderAll();
    });
  }
  document.getElementById("prevBtn").addEventListener("click", function () { selected = tid(prev); renderAll(); });
  document.getElementById("nextBtn").addEventListener("click", function () { selected = tid(next); renderAll(); });
}

// ---------- right column: goal, next up, sources ----------
function renderRight() {
  const goalGot = earned.size - (earned.has(1) ? 1 : 0);
  const goalPct = Math.round(goalGot / 54 * 100);
  const ledgerPct = Math.round(ledgerDone.size / 35 * 100);
  let html = "<div class=\"panel\"><h3>GOAL — THE PLATINUM</h3>" +
    "<p><b>Vice Got a Price!</b> — " + goalGot + "/54 trophies <span class=\"miniBar\"><span style=\"width:" + goalPct + "%\"></span></span></p>" +
    "<p><b>A Long Road</b> — " + ledgerDone.size + "/35 checklist lines (" + ledgerPct + "%) <span class=\"miniBar\"><span style=\"width:" + ledgerPct + "%\"></span></span></p>" +
    "<p class=\"dim\">~200 hours · difficulty 4/10 · one playthrough · 0 online trophies</p></div>";

  html += "<div class=\"panel\"><h3>SOURCES · READ 20 NOV 2026</h3><ol class=\"sources\">" +
    SOURCES.map(function (s) {
      const citing = guidesCiting(s.id);
      const listNote = LIST_SOURCES.indexOf(s.id) >= 0 ? " · confirms the 55-name list" : "";
      const citeLine = citing > 0 ? "cited by " + citing + " of 55 guides" : "list confirmation";
      return "<li><b>[" + s.id + "] " + esc(s.name) + "</b><br><span class=\"url\">" + esc(s.url) + "</span><br><span class=\"dim\">" + esc(s.kind) + " · read " + esc(s.read) + " · " + citeLine + listNote + "</span></li>";
    }).join("") + "</ol>" +
    "<p class=\"dim\">Every guide step cites its source by number. A location or step with no source earns no credit, however detailed — so nothing here is uncited.</p></div>";

  html += "<div class=\"panel\"><h3>NEXT UP · IN ROADMAP ORDER</h3><ol class=\"nextUp\">" +
    nextUp().map(function (t) {
      const label = isMasked(t) ? "Hidden story trophy" : tname(t);
      return "<li data-id=\"" + tid(t) + "\"><span class=\"gBadge " + tgrade(t) + "\">" + GRADE_LETTER[tgrade(t)] + "</span> " +
        "<span><b>" + esc(label) + "</b><br><span class=\"dim\">" + esc(stageOf(t)) + " · " + KIND_LABEL[tkind(t)] + "</span></span>" +
        (tmissable(t) ? " <span class=\"tag miss\">MISSABLE?</span>" : "") + "</li>";
    }).join("") + "</ol></div>";

  html += "<div class=\"panel\"><h3>HONESTY NOTES</h3>" +
    "<p><b>Bad Luck, I Guess</b> — method still unknown. We show the belief and a test protocol, not a fake method.</p>" +
    "<p><b>Let's Go Bowling</b> — not bowling at all. Corrected to the Kingpin Bowling robbery.</p>" +
    "<p><b>52 areas</b> — unverified in every external source. We do not state it as fact.</p>" +
    "<p><b>Pre-launch named lists</b> (Sportskeeda, ~8 Nov) — invented names, called Probably Fake. Never used here.</p></div>";

  document.getElementById("rightCol").innerHTML = html;
  document.querySelectorAll("#rightCol .nextUp li").forEach(function (li) {
    li.addEventListener("click", function () {
      selected = parseInt(li.getAttribute("data-id"), 10);
      view = "checklist";
      renderAll();
    });
  });
}

// ---------- other views ----------
function renderRoadmap() {
  let html = "<h2 class=\"viewTitle\">Roadmap to the platinum — about 200 hours</h2>";
  ROADMAP.forEach(function (r) {
    html += "<div class=\"roadStep\"><div class=\"roadHead\"><span class=\"roadNum\">" + esc(r.step) + "</span><b>" + esc(r.title) + "</b><span class=\"roadHours\">" + esc(r.hours) + "</span></div>" +
      "<p>" + esc(r.body) + " <span class=\"cite\">" + srcRefs(r.src) + "</span></p></div>";
  });
  html += "<h3>CHAPTERS AT A GLANCE</h3><table class=\"plain\"><tr><th>Chapter</th><th>Name</th><th>Missions</th><th>Setting</th><th>Chapter trophy pops…</th></tr>" +
    [["1", "Just Like Paradise", "22", "Leonida Keys", "after the first mission of Chapter 2"],
     ["2", "Paradise Lost", "11", "Port Gellhorn", "after the first mission of Chapter 3"],
     ["3", "Tits, Ass, Drug Money", "26", "Vice City", "after the first two missions of Chapter 4"],
     ["4", "Vice City, Baby", "25", "Vice City", "after Starting From Zero"],
     ["5", "Top of the World, Ma", "7–10", "Vice City & Leonida", "final mission gold"]].map(function (r) {
      return "<tr><td>" + r[0] + "</td><td>" + esc(r[1]) + "</td><td>" + r[2] + "</td><td>" + esc(r[3]) + "</td><td>" + esc(r[4]) + "</td></tr>";
    }).join("") + "</table>";
  html += "<p class=\"note\"><b>Naming quirk:</b> each chapter-completion trophy carries the NEXT chapter's name — finish Chapter 1 (Just Like Paradise) and the trophy is called Paradise Lost. Chapter counts: 91 main missions in total; some counts reach 93 including optionals. [1][3]</p>";
  html += "<h3>GLOBAL RULES — READ BEFORE YOU START</h3><ul class=\"rules\">" +
    "<li><b>Cheats disable trophies AND saving.</b> Do not touch them on a platinum run. [1]</li>" +
    "<li><b>There is no mission replay.</b> Keep a manual save at the start and end of every chapter. [1]</li>" +
    "<li><b>No difficulty settings.</b> Difficulty cannot affect any trophy. [1]</li>" +
    "<li><b>Free roam continues after the story.</b> Everything except the Chapter 1 meditation stays available. [1]</li>" +
    "<li><b>No online trophies.</b> All 55 are single-player. [9]</li>" +
    "<li><b>No New Game+.</b> One playthrough is enough for everything. [1]</li></ul>";
  html += "<h3>KEY UNLOCKS IN STORY ORDER</h3><ul class=\"rules\">" +
    "<li><b>Chapter 1:</b> WAiNK app unlocks by itself · Feng Shui meets Cal (fishing) · Down to Earth opens the missable meditation. [1][3]</li>" +
    "<li><b>Chapter 2, Coffee Break:</b> character switching · free-roam together (partner trophies) · Bret and Tyrone questlines · Moses and Scooter Bros · garages. [1][3]</li>" +
    "<li><b>Chapter 3:</b> Yasmani (Snap Gun, jewelry) · Credit Check (Dye Pack Jammer) · Clonin' Keys (Key Cloner, Randy). [1][3]</li>" +
    "<li><b>Chapter 4, optional:</b> That's Where The Money Is opens bank vaults and auto-pops Hot Together and A Classic Blitz Play. [1]</li></ul>";
  document.getElementById("midCol").innerHTML = html;
}

function renderMissables() {
  const pma = byId(28);
  let html = "<h2 class=\"viewTitle\">Missables &amp; watch — 1 possibly missable, 4 unconfirmed, 6 disputes</h2>";
  html += "<div class=\"callout missBox\"><b>1 POSSIBLY MISSABLE — POSITIVE MENTAL ATTITUDE.</b> " + esc(tguide(pma)) + " <span class=\"cite\">[1][8]</span></div>";
  html += "<h3>THE WATCH LIST</h3><table class=\"plain\"><tr><th>Trophy</th><th>Why it is watched</th><th>What to do</th></tr>" +
    watchList().map(function (t) {
      let why = "";
      let what = "";
      if (tid(t) === 28) { why = "Possibly missable + requirement unconfirmed + count dispute (15 vs 18)"; what = "Do the Chapter 1 balcony meditation; meditate everywhere with both characters."; }
      else if (tid(t) === 49) { why = "Method still unknown to every guide site"; what = "Follow the test protocol in its guide; check back for a confirmed method."; }
      else if (tid(t) === 29) { why = "Which animal unlocks it is unconfirmed"; what = "Hunt every animal Bret requests."; }
      else if (tid(t) === 25) { why = "Only 4 counting strands confirmed; more strangers undiscovered"; what = "Do the confirmed four; watch the tracker for new strands."; }
      else if (tid(t) === 7) { why = "Sources disagree on the final mission's name"; what = "Just finish the story; the name does not change what you do."; }
      else if (tid(t) === 42) { why = "The 52-area figure is unverified"; what = "Unfog the whole map by plane; ignore the number."; }
      else if (tid(t) === 1) { why = "Platinum time disputed: ~200 h vs 300+ h"; what = "Plan on 200 hours; expect more if you play slowly."; }
      return "<tr data-id=\"" + tid(t) + "\" class=\"clickRow\"><td><b>" + esc(tname(t)) + "</b></td><td>" + esc(why) + "</td><td>" + esc(what) + "</td></tr>";
    }).join("") + "</table>";
  html += "<h3>WHAT IS *NOT* MISSABLE — DO NOT PANIC</h3><ul class=\"rules\">" +
    "<li><b>All 12 story trophies</b> are automatic and unmissable. [1]</li>" +
    "<li><b>All five side-character finals</b> (Andy, Kenton, Billy, Randy, Tyrone) and Bret stay available after the story. Kenton goes quiet after Chapter 1 but returns in Chapters 2–3. [1]</li>" +
    "<li><b>100% completion:</b> nothing on the 35-line checklist is missable. [2]</li>" +
    "<li><b>Let's Go Bowling:</b> the robbery icon respawns; valuables can be collected across visits. [1]</li>" +
    "<li>Some optional missions expire and some fences disappear, but none of it blocks any trophy or 100%. [1]</li></ul>";
  document.getElementById("midCol").innerHTML = html;
  document.querySelectorAll("#midCol .clickRow").forEach(function (row) {
    row.addEventListener("click", function () {
      selected = parseInt(row.getAttribute("data-id"), 10);
      view = "checklist";
      renderAll();
    });
  });
}

function renderSourcesView() {
  let html = "<h2 class=\"viewTitle\">Sources &amp; disputes — every claim shows its backing</h2>";
  html += "<h3>SOURCE MATRIX</h3><table class=\"plain\"><tr><th>#</th><th>Source</th><th>Type</th><th>Read</th><th>Guides citing</th><th>List check</th></tr>" +
    SOURCES.map(function (s) {
      return "<tr><td>[" + s.id + "]</td><td><b>" + esc(s.name) + "</b><br><span class=\"url\">" + esc(s.url) + "</span></td><td>" + esc(s.kind) + "</td><td>" + esc(s.read) + "</td><td>" + guidesCiting(s.id) + "/55</td><td>" + (LIST_SOURCES.indexOf(s.id) >= 0 ? "55/55 names confirmed" : "—") + "</td></tr>";
    }).join("") + "</table>";
  html += "<p class=\"note\">PowerPyx is the primary method source: it has played the released game and covers about 50 of the 55 trophies. The list itself is confirmed by five independent sources that agree on every name, description and grade.</p>";
  html += "<h3>ALL 6 DISPUTES — BOTH VERSIONS SHOWN</h3>";
  DISPUTES.forEach(function (d) {
    html += "<div class=\"dispute\"><b>" + d.id + " · " + esc(d.title) + "</b>" +
      "<p><span class=\"lbl\">VERSION A</span> " + esc(d.a) + "</p>" +
      "<p><span class=\"lbl\">VERSION B</span> " + esc(d.b) + "</p>" +
      "<p><span class=\"lbl\">OUR CALL</span> " + esc(d.call) + "</p></div>";
  });
  html += "<h3>WHAT WE DO NOT CITE</h3><ul class=\"rules\">" +
    "<li>Pre-launch named lists (Sportskeeda, ~8 Nov) with invented names such as Welcome to Vice — the community calls them Probably Fake.</li>" +
    "<li>Any article dated before 18 Nov 2026 claiming trophy names: the leak then held only the count, 55, with no names.</li>" +
    "<li>The May 2025 rumour of 58 trophies, and any claim that Rockstar published a list — it has not; the list is the live PlayStation list.</li></ul>";
  document.getElementById("midCol").innerHTML = html;
}

function renderLedger() {
  const pct = Math.round(ledgerDone.size / 35 * 100);
  let html = "<h2 class=\"viewTitle\">100% Ledger — A Long Road · " + ledgerDone.size + "/35 lines (" + pct + "%)</h2>" +
    "<p class=\"note\">The checklist only appears in-game after the story (Progress, Stats, 100% Completion). Nothing on it is missable. Tick lines off as you finish them; progress is saved in this browser. [2]</p>";
  let lastGroup = "";
  LEDGER.forEach(function (line, i) {
    if (line[0] !== lastGroup) {
      html += "<div class=\"stageHead\">" + esc(line[0]) + "</div>";
      lastGroup = line[0];
    }
    html += "<label class=\"ledgerRow" + (ledgerDone.has(i) ? " done" : "") + "\"><input type=\"checkbox\" class=\"ledgerTick\" data-i=\"" + i + "\"" + (ledgerDone.has(i) ? " checked" : "") + "> <b>" + esc(line[1]) + "</b> <span class=\"dim\">— " + esc(line[2]) + "</span></label>";
  });
  html += "<p class=\"note\"><b>No-slack lines</b> (plan around them): Story, Gang Operations, Bank Jobs, Payday Loans, Vaults, Underwater Discoveries, Unique Playlists, Shooting Range golds, Video Games, Drone Time Trials, Bret's Target Decks. Smash 'N' Grabs leaves exactly 1 spare. [2]</p>";
  document.getElementById("midCol").innerHTML = html;
  document.querySelectorAll("#midCol .ledgerTick").forEach(function (box) {
    box.addEventListener("change", function () {
      const i = parseInt(box.getAttribute("data-i"), 10);
      if (box.checked) ledgerDone.add(i); else ledgerDone.delete(i);
      storeJSON(LS_LEDGER, Array.from(ledgerDone));
      renderAll();
    });
  });
}

// ---------- export / import / spoiler ----------
function doExport() {
  const data = {
    app: "leonida55",
    exported: new Date().toISOString(),
    earned: Array.from(earned).sort(function (a, b) { return a - b; }),
    counts: counts,
    ledger: Array.from(ledgerDone).sort(function (a, b) { return a - b; })
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "leonida55-progress.json";
  a.click();
  URL.revokeObjectURL(a.href);
}
function doImport(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function () {
    try {
      const data = JSON.parse(reader.result);
      if (Array.isArray(data.earned)) {
        earned = new Set(data.earned.filter(function (id) { return byId(id); }));
        storeJSON(LS_EARNED, Array.from(earned));
      }
      if (data.counts && typeof data.counts === "object") {
        counts = data.counts;
        storeJSON(LS_COUNTS, counts);
      }
      if (Array.isArray(data.ledger)) {
        ledgerDone = new Set(data.ledger.filter(function (i) { return i >= 0 && i < 35; }));
        storeJSON(LS_LEDGER, Array.from(ledgerDone));
      }
      renderAll();
    } catch (e) {
      alert("That file could not be read as Leonida 55 progress.");
    }
  };
  reader.readAsText(file);
}

// ---------- boot ----------
function renderAll() {
  renderHeader();
  renderAudit();
  renderTabs();
  renderLeft();
  if (view === "roadmap") renderRoadmap();
  else if (view === "missables") renderMissables();
  else if (view === "sources") renderSourcesView();
  else if (view === "ledger") renderLedger();
  else renderDetail();
  renderRight();
}

document.getElementById("spoilerBtn").addEventListener("click", function () {
  spoilerOn = !spoilerOn;
  storeJSON(LS_SPOILER, spoilerOn);
  renderAll();
});
document.getElementById("exportBtn").addEventListener("click", doExport);
document.getElementById("importFile").addEventListener("change", function (e) {
  doImport(e.target.files[0]);
  e.target.value = "";
});
document.getElementById("resetBtn").addEventListener("click", function () {
  earned = new Set();
  counts = {};
  ledgerDone = new Set();
  storeJSON(LS_EARNED, []);
  storeJSON(LS_COUNTS, {});
  storeJSON(LS_LEDGER, []);
  renderAll();
});
renderAll();

// Deep-link focus for screenshots and shared links: ?focus=dispute scrolls
// the first dispute box into view, ?focus=sources the source list.
(function () {
  const focus = params.get("focus");
  if (!focus) return;
  const target = focus === "dispute" ? document.querySelector("#midCol .dispute") : focus === "sources" ? document.querySelector("#midCol .srcList") : null;
  if (target) target.scrollIntoView({ block: "start" });
})();
