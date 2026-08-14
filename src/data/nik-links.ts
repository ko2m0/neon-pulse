// Centralized data for Nik Owen Jones streaming and social links
// Update these URLs as they become available

export interface StreamingLink {
  name: string;
  url: string | null;
  icon: string;
  color: string;
}

export interface NavLink {
  href: string;
  label: string;
}

// Streaming platform links
// Set to null if URL is not yet available - component will hide it automatically
export const streamingLinks: StreamingLink[] = [
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/intl-es/artist/6KghxBK1iqWjxexjLldUlt?si=7_C0xnfjRlKloMb9_A0yqw&nd=1&dlsi=1ec06c51319c4248', // TODO: Add Nik's Spotify artist/album URL
    icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>`,
    color: 'from-green-500 to-green-400',
  },
  {
    name: 'Bandcamp',
    url: 'https://music-nikowenjones.bandcamp.com/', // TODO: Add Nik's Bandcamp URL
    icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M0 18.75l7.437-13.5H24l-7.438 13.5z"/></svg>`,
    color: 'from-blue-500 to-blue-400',
  },
  {
    name: 'Apple Music',
    url: 'https://music.apple.com/gb/artist/nik-owen-jones/1462804466', // TODO: Add Nik's Apple Music URL
    icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.193.403-1.336.532-2.3 1.452-2.865 2.78-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.802.42.127.856.187 1.293.228.555.053 1.11.06 1.667.06h11.03c.525 0 1.048-.034 1.57-.1.823-.106 1.593-.35 2.28-.81a5.046 5.046 0 001.88-2.207c.186-.42.293-.87.37-1.324.113-.675.138-1.358.137-2.04-.002-3.8 0-7.595-.003-11.393zm-6.423 3.99v5.712c0 .417-.058.827-.244 1.206-.29.59-.76.962-1.388 1.14-.414.117-.836.146-1.26.08-.603-.094-1.09-.378-1.44-.87-.32-.45-.46-.96-.46-1.505 0-.68.24-1.27.72-1.75.42-.42.93-.68 1.51-.81.44-.1.88-.15 1.33-.18.37-.03.74-.05 1.11-.08.06-.005.11-.01.17-.02V9.13c0-.07-.02-.1-.09-.11-.18-.02-.36-.05-.54-.06-.55-.04-1.1-.03-1.65.04-.68.09-1.32.28-1.9.66-.66.43-1.14 1.01-1.42 1.74-.18.47-.27.96-.29 1.46-.02.62.08 1.22.32 1.8.35.84.92 1.5 1.68 1.98.56.36 1.17.6 1.83.72.54.1 1.08.12 1.63.07.63-.06 1.22-.24 1.76-.56.68-.4 1.18-.96 1.48-1.68.18-.43.27-.88.3-1.35.01-.14.01-.28.01-.42V10.11z"/></svg>`,
    color: 'from-pink-500 to-rose-400',
  },
];

// Navigation links for Nik's page
export const nikNavLinks: NavLink[] = [
  { href: '#about', label: 'About' },
  { href: '#music', label: 'Music' },
  { href: '#live', label: 'Live' },
  { href: '#listen', label: 'Listen' },
  { href: '#contact', label: 'Contact' },
  { href: '/', label: 'Neon Pulse' },
];

// Contact information
export const contactInfo = {
  email: 'nik@ultrakeysmusic.co.uk', // TODO: Add Nik's email address when confirmed
  emailPlaceholder: 'nik@ultrakeysmusic.co.uk', // Fallback - update when Nik's email is confirmed
};