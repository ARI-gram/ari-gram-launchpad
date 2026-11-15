/**
 * Photos from Unsplash (free Unsplash licence), loaded from Unsplash's CDN.
 * Replace with ARI-GRAM's own photos (team, office, client sites) when available.
 */
const unsplash = (id: string, width: number) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=75`;

export const images = {
  heroTeam: (w = 1920) => unsplash("1573167101669-476636b96cea", w),
  aboutTeam: (w = 1000) => unsplash("1739302750702-e26a61113758", w),
  construction: (w = 1200) => unsplash("1700469919563-ef267d459da5", w),
  market: (w = 900) => unsplash("1558907530-fe311178388a", w),
  nairobi: (w = 1920) => unsplash("1781504842018-c51ce0dac23f", w),
  officeLaptops: (w = 1920) => unsplash("1776039325116-af3714eea110", w),
  storyTeam: (w = 1000) => unsplash("1655720357872-ce227e4164ba", w),
};
