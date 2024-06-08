export interface Country {
  name: string;
  flag: string;
  similarFlags: string[];
}

export const countries: Country[] = [
  {
    name: 'Afghanistan',
    flag: '🇦🇫',
    similarFlags: ['🇰🇪', '🇲🇼', '🇮🇶', '🇯🇴', '🇦🇴', '🇸🇩', '🇪🇬', '🇺🇬', '🇬🇹', '🇵🇸'], // Kenya, Malawi, Iraq, Jordan, Angola, Sudan, Egypt, Uganda, Guatemala, Palestine
  },
  {
    name: 'Albania',
    flag: '🇦🇱',
    similarFlags: ['🇲🇹', '🇵🇱', '🇯🇵', '🇦🇹', '🇨🇭', '🇮🇩', '🇲🇨', '🇹🇷', '🇨🇳', '🇷🇸'], // Malta, Poland, Japan, Austria, Switzerland, Indonesia, Monaco, Turkey, China, Serbia
  },
  {
    name: 'Algeria',
    flag: '🇩🇿',
    similarFlags: ['🇹🇷', '🇹🇳', '🇱🇾', '🇵🇰', '🇲🇷', '🇲🇦', '🇸🇩', '🇪🇭', '🇮🇷', '🇯🇴'], // Turkey, Tunisia, Libya, Pakistan, Mauritania, Morocco, Sudan, Western Sahara, Iran, Jordan
  },
  {
    name: 'Andorra',
    flag: '🇦🇩',
    similarFlags: ['🇷🇴', '🇲🇩', '🇪🇸', '🇨🇴', '🇪🇨', '🇻🇪', '🇫🇷', '🇧🇪', '🇨🇭', '🇹🇩'], // Romania, Moldova, Spain, Colombia, Ecuador, Venezuela, France, Belgium, Switzerland, Chad
  },
  {
    name: 'Angola',
    flag: '🇦🇴',
    similarFlags: ['🇲🇿', '🇰🇪', '🇲🇼', '🇹🇷', '🇦🇱', '🇪🇬', '🇪🇹', '🇸🇩', '🇳🇬', '🇿🇲'], // Mozambique, Kenya, Malawi, Turkey, Albania, Egypt, Ethiopia, Sudan, Nigeria, Zambia
  },
  {
    name: 'Antigua and Barbuda',
    flag: '🇦🇬',
    similarFlags: ['🇳🇦', '🇸🇧', '🇰🇪', '🇸🇹', '🇬🇩', '🇻🇨', '🇧🇸', '🇬🇾', '🇫🇯', '🇨🇩'], // Namibia, Solomon Islands, Kenya, São Tomé and Príncipe, Grenada, Saint Vincent and the Grenadines, Bahamas, Guyana, Fiji, Democratic Republic of the Congo
  },
  {
    name: 'Argentina',
    flag: '🇦🇷',
    similarFlags: ['🇺🇾', '🇬🇷', '🇮🇸', '🇫🇮', '🇸🇮', '🇸🇲', '🇳🇮', '🇸🇰', '🇪🇸', '🇨🇱'], // Uruguay, Greece, Iceland, Finland, Slovenia, San Marino, Nicaragua, Slovakia, Spain, Chile
  },
  {
    name: 'Armenia',
    flag: '🇦🇲',
    similarFlags: ['🇷🇴', '🇲🇩', '🇨🇭', '🇪🇸', '🇧🇪', '🇪🇨', '🇨🇴', '🇻🇪', '🇫🇷', '🇦🇩'], // Romania, Moldova, Switzerland, Spain, Belgium, Ecuador, Colombia, Venezuela, France, Andorra
  },
  {
    name: 'Australia',
    flag: '🇦🇺',
    similarFlags: ['🇳🇿', '🇹🇴', '🇫🇯', '🇻🇺', '🇼🇸', '🇰🇮', '🇳🇷', '🇵🇬', '🇲🇭', '🇰🇮'], // New Zealand, Tonga, Fiji, Vanuatu, Samoa, Kiribati, Nauru, Papua New Guinea, Marshall Islands, Kiribati
  },
  {
    name: 'Austria',
    flag: '🇦🇹',
    similarFlags: ['🇱🇻', '🇪🇪', '🇳🇱', '🇷🇺', '🇹🇩', '🇭🇷', '🇱🇺', '🇮🇹', '🇳🇴', '🇱🇮'], // Latvia, Estonia, Netherlands, Russia, Romania, Croatia, Luxembourg, Italy, Norway, Liechtenstein
  },
  {
    name: 'Azerbaijan',
    flag: '🇦🇿',
    similarFlags: ['🇹🇷', '🇹🇲', '🇰🇬', '🇹🇯', '🇦🇲', '🇬🇪', '🇰🇿', '🇺🇿', '🇧🇾', '🇦🇫'], // Turkey, Turkmenistan, Kyrgyzstan, Tajikistan, Armenia, Georgia, Kazakhstan, Uzbekistan, Belarus, Afghanistan
  },
  {
    name: 'Bahamas',
    flag: '🇧🇸',
    similarFlags: ['🇹🇹', '🇧🇧', '🇬🇾', '🇯🇲', '🇬🇩', '🇧🇧', '🇧🇧', '🇱🇨', '🇩🇲', '🇦🇬'], // Trinidad and Tobago, Barbados, Guyana, Jamaica, Grenada, Barbados, Barbados, Saint Lucia, Dominica, Antigua and Barbuda
  },
  {
    name: 'Bahrain',
    flag: '🇧🇭',
    similarFlags: ['🇶🇦', '🇱🇧', '🇰🇼', '🇴🇲', '🇦🇪', '🇾🇪', '🇪🇬', '🇯🇴', '🇱🇾', '🇵🇸'], // Qatar, Lebanon, Kuwait, Oman, United Arab Emirates, Yemen, Egypt, Jordan, Libya, Palestine
  },
  {
    name: 'Bangladesh',
    flag: '🇧🇩',
    similarFlags: ['🇳🇵', '🇱🇰', '🇻🇳', '🇱🇦', '🇲🇾', '🇰🇭', '🇹🇭', '🇹🇩', '🇨🇲', '🇹🇬'], // Nepal, Sri Lanka, Vietnam, Laos, Malaysia, Cambodia, Thailand, Chad, Cameroon, Togo
  },
  {
    name: 'Barbados',
    flag: '🇧🇧',
    similarFlags: ['🇱🇨', '🇬🇩', '🇰🇳', '🇦🇬', '🇻🇨', '🇧🇧', '🇻🇨', '🇧🇸', '🇧🇿', '🇹🇹'], // Saint Lucia, Grenada, Saint Kitts and Nevis, Antigua and Barbuda, Saint Vincent and the Grenadines, Barbados, Saint Vincent and the Grenadines, Bahamas, Belize, Trinidad and Tobago
  },
];
