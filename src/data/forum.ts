export interface ForumComment {
  author: string;
  age: string;
  score: number;
  body: string;
  replies?: ForumComment[];
}

export interface ForumPost {
  slug: string;
  category: string;
  categoryTone: 'purple' | 'blue' | 'green' | 'orange';
  title: string;
  excerpt: string;
  author: string;
  age: string;
  commentsCount: number;
  upvotes: number;
  flair?: string;
  body: string[];
  comments: ForumComment[];
  sourceTitle?: string;
  sourcePath?: string;
}

export const forumCategories = [
  { name: 'General', tone: 'purple', icon: 'users' },
  { name: 'Guides & Builds', tone: 'blue', icon: 'navBlog' },
  { name: 'Patch Talk', tone: 'orange', icon: 'refresh' },
  { name: 'Community', tone: 'green', icon: 'messageCircle' },
] as const;

function guideDiscussion(input: {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryTone: ForumPost['categoryTone'];
  sourceTitle: string;
  sourcePath: string;
  upvotes: number;
  answer: string;
  detail: string;
  tip: string;
}): ForumPost {
  const { answer, detail, tip, ...post } = input;
  return {
    ...post,
    author: 'guide_team',
    age: '2 days ago',
    commentsCount: 1,
    upvotes: 14,
    flair: 'Guide Q&A',
    body: [answer, detail],
    comments: [{ author: 'guide_team', age: 'From the guide', score: 0, body: tip }],
  };
}

const additionalGuidePosts: ForumPost[] = [
  guideDiscussion({
    slug: 'what-does-dota-map-awareness-include', title: 'What does map awareness include in the guide?', upvotes: 73,
    excerpt: 'A quick breakdown of hero, ward, rune, and smoke information covered by the map awareness guide.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'Fortnite ESP setup guide', sourcePath: '/blog/dota-2-map-hack-setup/',
    answer: 'The guide covers player ESP, ward and sentry markers, rune information, smoke alerts, and last-seen positions. The exact options depend on the selected product tier.',
    detail: 'It recommends starting with a restrained layout and enabling only the information you can read comfortably during a team fight.',
    tip: 'Keep the overlay uncluttered: begin with the core indicators, then adjust the range and visibility settings one at a time.',
  }),
  guideDiscussion({
    slug: 'how-to-set-up-map-overlay', title: 'How should I set up the map overlay for the first time?', upvotes: 58,
    excerpt: 'Start with the basic display options, confirm the overlay in a practice session, then adjust one setting at a time.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'Fortnite ESP setup guide', sourcePath: '/blog/dota-2-map-hack-setup/',
    answer: 'Use the setup guide to enable the overlay, choose readable colors, and check that the indicators do not cover important parts of the game interface.',
    detail: 'Test your layout in a bot lobby before relying on it in a live match. A simple configuration is easier to understand than turning on every option immediately.',
    tip: 'If the screen feels crowded, reduce the number of indicators before changing their size or position.',
  }),
  guideDiscussion({
    slug: 'what-zoom-settings-are-comfortable', title: 'What camera zoom settings are comfortable to play with?', upvotes: 44,
    excerpt: 'The zoom guide focuses on finding a view that improves map context without making your hero hard to control.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'Fortnite FOV extender guide', sourcePath: '/blog/dota-2-zoom-hack-guide/',
    answer: 'There is no single ideal zoom value for every player. The guide recommends adjusting gradually and checking that you can still track your hero, spell ranges, and nearby fights.',
    detail: 'Keep a quick reset to the default camera view available so you can compare the wider view and return to familiar framing.',
    tip: 'Change one step at a time and play a short practice session before settling on a new camera distance.',
  }),
  guideDiscussion({
    slug: 'how-to-tune-script-delay-settings', title: 'How do delay settings affect aim assist?', upvotes: 32,
    excerpt: 'A practical question about timing, tracking readability, and why the ranked guide recommends conservative tuning.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'Fortnite aim settings for ranked', sourcePath: '/blog/dota-2-scripts-ranked-mmr/',
    answer: 'Delay settings control how quickly assist engages after you aim. The guide recommends starting with slower timings and testing in Creative before making changes.',
    detail: 'A consistent sequence is easier to review and tune than changing several timing values at once.',
    tip: 'Keep a note of each configuration you try so you can return to the last setup that behaved as expected.',
  }),
  guideDiscussion({
    slug: 'how-to-practice-auto-combos', title: 'What is a good way to practice triggerbot timing?', upvotes: 29,
    excerpt: 'Use a repeatable loadout, learn the swap sequence, and test each weapon profile in Creative.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'Weapon triggerbot presets for Fortnite', sourcePath: '/blog/dota-2-auto-combo-hero-scripts/',
    answer: 'Pick one weapon class at a time. The guide walks through AR, shotgun, and SMG presets and explains how target selection fits each fight.',
    detail: 'Creative aim maps let you repeat the same scenario until timing feels natural without ranked pressure.',
    tip: 'Learn manual tracking first; that makes it easier to spot when assist strength is too high.',
  }),
  guideDiscussion({
    slug: 'what-is-in-the-elite-tier', title: 'What additional tools are included in the Elite tier?', upvotes: 67,
    excerpt: 'The Elite guide explains how its extra utility modules compare with the Lite and Pro feature sets.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'Fortnite Elite tier guide', sourcePath: '/blog/dota-2-elite-tier-guide/',
    answer: 'The guide describes Elite as including the Lite and Pro feature sets plus additional utilities such as Loot Farmer, Auto Finish, Quick Swap, and Skin Unlocker.',
    detail: 'It also covers who may benefit from the extra modules and why it makes sense to understand the simpler feature set first.',
    tip: 'Compare the included features against your needs before choosing a tier; the full comparison is linked in the guide.',
  }),
  guideDiscussion({
    slug: 'how-do-lite-and-pro-differ', title: 'How do Lite and Pro differ in practice?', upvotes: 53,
    excerpt: 'Lite centers on ESP, while Pro adds aim modules; here is the short version.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'Fortnite Lite vs Pro: which tier fits you', sourcePath: '/blog/dota-2-lite-vs-pro/',
    answer: 'The comparison guide describes Lite as focused on player ESP, loot highlights, storm timers, and FOV tools. Pro adds triggerbot, recoil control, and smart aim on top.',
    detail: 'Choose Lite if you only need information overlays; choose Pro if you also want combat automation.',
    tip: 'Use the full side-by-side comparison to check specific modules before making a decision.',
  }),
  guideDiscussion({
    slug: 'what-to-know-about-skin-changer', title: 'What should I know about the Skin Unlocker utility?', upvotes: 38,
    excerpt: 'The product guide explains how cosmetic previews work and what to expect from the utility.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'Fortnite Skin Unlocker guide', sourcePath: '/blog/dota-2-skin-changer-guide/',
    answer: 'The guide describes Skin Unlocker as a local cosmetic preview utility. It explains setup, supported options, and how to restore the default appearance.',
    detail: 'Review the compatibility notes and follow the current setup instructions before using the utility.',
    tip: 'Cosmetic changes are local previews; check the guide for current limitations and setup steps.',
  }),
  guideDiscussion({
    slug: 'what-to-do-if-vac-cannot-verify', title: 'What should I do if EAC cannot verify my Fortnite install?', upvotes: 24,
    excerpt: 'Start with Epic Games file verification and a clean restart before assuming the issue is an account restriction.',
    category: 'Patch Talk', categoryTone: 'orange', sourceTitle: 'Easy Anti-Cheat unable to verify Fortnite', sourcePath: '/blog/valve-anti-cheat-unable-to-verify/',
    answer: 'The troubleshooting guide says the message can result from game-file problems or software conflicts and does not always mean an account ban. First verify Fortnite files through Epic Games.',
    detail: 'It also recommends fully exiting Epic Games, restarting the PC, and checking for conflicting overlays before trying more disruptive steps.',
    tip: 'Test a normal Epic Games launch before starting other software so you can narrow down the cause.',
  }),
  guideDiscussion({
    slug: 'how-does-an-external-loader-work', title: 'What does “external loader” mean?', upvotes: 46,
    excerpt: 'The external software guide explains the term and outlines the general setup described on the site.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'Fortnite external cheat guide', sourcePath: '/blog/dota-2-external-cheat-guide/',
    answer: 'The article uses “external” to describe software that runs separately from the Fortnite process and presents its interface as an overlay.',
    detail: 'It discusses the architecture at a high level and explains setup, patch updates, and the differences described between external and internal tools.',
    tip: 'Check compatibility and current status information whenever Fortnite receives an update.',
  }),
  guideDiscussion({
    slug: 'how-to-check-stream-proof-capture', title: 'How can I check whether OBS captures an overlay?', upvotes: 21,
    excerpt: 'The stream-proof setup guide recommends recording a short test and checking the playback before streaming.',
    category: 'Guides & Builds', categoryTone: 'blue', sourceTitle: 'Stream-proof overlay setup for Fortnite', sourcePath: '/blog/dota-2-stream-proof-setup/',
    answer: 'Record a short local test with the exact OBS scene and capture mode you plan to use, then review the playback for any overlay elements.',
    detail: 'The guide recommends testing game capture and display capture separately, since capture methods and multi-monitor setups can behave differently.',
    tip: 'Do not rely on the preview alone; review a saved recording from the same scene you intend to stream.',
  }),
  guideDiscussion({
    slug: 'what-to-do-after-hwid-change', title: 'What should I check after changing PCs or hardware?', upvotes: 33,
    excerpt: 'The HWID guide covers common setup checks and when to contact support for an account or device reset.',
    category: 'General', categoryTone: 'purple', sourceTitle: 'Fortnite HWID spoofer after ban', sourcePath: '/blog/dota-2-hwid-spoofer-after-ban/',
    answer: 'Start by checking the account and device instructions for your product. The guide explains common HWID questions and when a reset request may be needed.',
    detail: 'Avoid changing several system settings at once. If the product does not recognize your device, contact support with the relevant error details.',
    tip: 'Use the official support path for device resets instead of relying on unrelated third-party tools.',
  }),
  guideDiscussion({
    slug: 'what-to-check-before-installing-tools', title: 'What should I review before installing a new tool?', upvotes: 18,
    excerpt: 'Check the official setup steps, current compatibility notes, and support information before proceeding.',
    category: 'Community', categoryTone: 'green', sourceTitle: 'Fortnite hacks features guide', sourcePath: '/blog/dota-2-cheats-features-guide/',
    answer: 'Read the feature and setup information first, confirm that it matches your system, and check the current update/status notes.',
    detail: 'The site guide describes the available feature groups and links to more specific setup articles for individual modules.',
    tip: 'Use the linked product and support pages as the source of truth for current availability and compatibility.',
  }),
  guideDiscussion({
    slug: 'how-to-choose-dota-2-product-tier', title: 'How do I choose the right Fortnite product tier?', upvotes: 48,
    excerpt: 'Compare the feature sets first, then follow the official checkout and setup instructions for your selection.',
    category: 'Community', categoryTone: 'green', sourceTitle: 'How to buy Fortnite hacks in 2026', sourcePath: '/blog/how-to-buy-dota-2-cheats-2026/',
    answer: 'The buying guide recommends comparing included features and choosing the tier that fits your needs before continuing through the official checkout.',
    detail: 'It covers the purchase flow, account access, downloading the current build, and checking setup instructions before launching.',
    tip: 'If you have a payment or account question, use the site support page and avoid sharing purchase details publicly.',
  }),
];

export const forumPosts: ForumPost[] = [
  {
    slug: 'can-custom-lobby-cheat-codes-be-used-in-ranked', category: 'General', categoryTone: 'purple',
    title: 'Can I use Fortnite cheat codes in ranked matchmaking?',
    excerpt: 'Quick answer from the practice lobby guide: built-in lobby commands only work in custom matches with cheats enabled.',
    author: 'guide_team', age: '2 hours ago', commentsCount: 3, upvotes: 128, flair: 'Guide Q&A',
    sourceTitle: 'Fortnite cheat codes guide: console commands for practice lobbies', sourcePath: '/blog/dota-2-cheat-codes-guide/',
    body: ['No. Built-in Creative and private-match tools are for practice only. They do not carry into ranked Battle Royale or Zero Build.', 'Use Creative islands to drill builds, edits, and aim. The guide explains the difference between Epic practice modes and third-party Fortnite hacks.'],
    comments: [
      { author: 'mid_or_feed', age: '1 hour ago', score: 24, body: 'Correct: create a lobby, enable cheats in lobby settings, and make sure the console is enabled in Advanced Options.' },
      { author: 'ancient_archivist', age: '48 min. ago', score: 11, body: 'The guide lists -refresh, -wtf, and vision commands for drills. Remember -disablewtf before testing real cooldowns.' },
      { author: 'blink_first', age: '35 min. ago', score: 8, body: 'Useful distinction. Practice lobby commands are not ranked features.' },
    ],
  },
  {
    slug: 'how-to-enable-the-dota-2-console', category: 'General', categoryTone: 'purple',
    title: 'How do I turn on the Fortnite developer console?',
    excerpt: 'Open Settings → Options → Advanced and enable the console. Here is the quick setup from our walkthrough.',
    author: 'guide_team', age: '4 hours ago', commentsCount: 2, upvotes: 86, flair: 'Guide Q&A',
    sourceTitle: 'How to use cheat codes in Fortnite', sourcePath: '/blog/how-to-use-dota-2-cheat-codes/',
    body: ['Open Settings, choose Options, then open Advanced Options and enable the developer console. In a custom lobby, press the console key (usually tilde) and enter the command. You also need the host to enable cheats in the lobby settings.', 'If a command does nothing, first confirm cheats are enabled for that lobby and check the command syntax.'],
    comments: [
      { author: 'pos4_roamer', age: '3 hours ago', score: 17, body: 'You can also bind the console key in the hotkey settings if tilde is unavailable on your keyboard layout.' },
      { author: 'carry_curious', age: '2 hours ago', score: 9, body: 'Commands need the right lobby permissions; spectators may not be able to use economy commands.' },
    ],
  },
  {
    slug: 'practice-dota-2-ward-spots-safely', category: 'Guides & Builds', categoryTone: 'blue',
    title: 'What is the safest way to practice loot routes?',
    excerpt: 'Use Creative or Battle Lab to study drop paths and rotations without affecting public stats.',
    author: 'guide_team', age: '6 hours ago', commentsCount: 2, upvotes: 64, flair: 'Guide Q&A',
    sourceTitle: 'All Fortnite console cheats and tips', sourcePath: '/blog/dota-2-console-cheats-tips/',
    body: ['Practice in Creative with respawn and loot spawns enabled. Mark chest chains and rotation paths, then replay the same route until it feels automatic.', 'Record a short clip and review whether you are taking unnecessary fights—loot route drills are about efficiency, not only raw aim.'],
    comments: [
      { author: 'stack_and_pull', age: '5 hours ago', score: 13, body: 'I toggle between allvision and normalvision to check the actual line of sight. Helpful for learning high-ground coverage.' },
      { author: 'map_reader', age: '4 hours ago', score: 6, body: 'And -killwards is handy when you want to replay the same path with a clean map.' },
    ],
  },
  {
    slug: 'what-to-check-after-a-dota-2-patch', category: 'Patch Talk', categoryTone: 'orange',
    title: 'What should I check before playing after a Fortnite season update?',
    excerpt: 'The patch-day checklist recommends checking build status, updating, and testing in a bot lobby before queueing.',
    author: 'guide_team', age: '9 hours ago', commentsCount: 2, upvotes: 42, flair: 'Guide Q&A',
    sourceTitle: 'EAC patch day checklist', sourcePath: '/blog/vac-patch-day-checklist/',
    body: ['Check the current build/status notice first. After a season update, wait for a compatible loader build, redownload if prompted, then verify settings in Creative before returning to ranked.', 'If anything behaves unexpectedly, stop and review Discord #status rather than assuming the old setup still applies. The EAC patch checklist covers the full routine.'],
    comments: [
      { author: 'farm_pattern', age: '8 hours ago', score: 12, body: 'Testing after the update before ranked is the part I used to skip. Now I check the build note and run a quick bot lobby.' },
      { author: 'support_main_5', age: '7 hours ago', score: 7, body: 'Agree. If the build/status has not caught up, wait. A checklist is better than guessing.' },
    ],
  },
  {
    slug: 'dota-2-lite-or-pro-hero-scripts', category: 'Community', categoryTone: 'green',
    title: 'Lite or Pro: which tier includes aimbot?',
    excerpt: 'Our comparison guide breaks down the difference: Lite focuses on ESP; Pro adds triggerbot and recoil modules.',
    author: 'guide_team', age: '12 hours ago', commentsCount: 1, upvotes: 31, flair: 'Guide Q&A',
    sourceTitle: 'Fortnite Lite vs Pro: feature comparison', sourcePath: '/blog/dota-2-lite-vs-pro/',
    body: ['According to the comparison guide, Lite centers on ESP—player boxes, loot highlights, storm timers, FOV tools, and stream-proof options. Pro includes those features and adds triggerbot, recoil control, smart aim, and target selector.', 'Pick the tier that matches how you play. Read the full Lite vs Pro article before checkout.'],
    comments: [
      { author: 'one_more_game', age: '10 hours ago', score: 10, body: 'The comparison page is useful because it shows which modules are included in each tier instead of only listing headlines.' },
    ],
  },
  {
    slug: 'how-to-learn-hero-combos-in-practice-lobbies', category: 'Guides & Builds', categoryTone: 'blue',
    title: 'How can I practice edits and aim without queueing ranked?',
    excerpt: 'Use Creative aim trainers and build maps with respawn enabled for repeatable drills.',
    author: 'guide_team', age: '1 day ago', commentsCount: 2, upvotes: 27, flair: 'Guide Q&A',
    sourceTitle: 'Fortnite cheat codes guide: console commands for practice lobbies', sourcePath: '/blog/dota-2-cheat-codes-guide/',
    body: ['Load a highly rated Creative aim or edit map, enable respawn, and run 10–15 minute sessions before touching ranked.', 'Keep sensitivity and FOV identical to your ranked settings so muscle memory transfers. The linked guide covers Creative setup and safe practice boundaries.'],
    comments: [
      { author: 'mid_or_feed', age: '20 hours ago', score: 10, body: 'Start with a bot target and repeat the same combo until the item and spell order feels automatic.' },
      { author: 'ancient_archivist', age: '18 hours ago', score: 5, body: 'Use -disablewtf when you want to practice with normal mana and cooldown constraints.' },
    ],
  },
  ...additionalGuidePosts,
];

export function getForumPost(slug: string): ForumPost | undefined {
  return forumPosts.find((post) => post.slug === slug);
}
