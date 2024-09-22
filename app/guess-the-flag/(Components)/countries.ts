import { Country } from './constants';

const easySimilarFlags = [
  '🇺🇸',
  '🇨🇦',
  '🇬🇧',
  '🇫🇷',
  '🇩🇪',
  '🇮🇹',
  '🇪🇸',
  '🇯🇵',
  '🇨🇳',
  '🇮🇳',
  '🇷🇺',
  '🇧🇷',
  '🇲🇽',
  '🇦🇺',
  '🇳🇿',
  '🇿🇦',
  '🇰🇷',
  '🇸🇦',
  '🇦🇪',
  '🇹🇷',
  '🇳🇴',
  '🇸🇪',
  '🇩🇰',
  '🇫🇮',
  '🇬🇷',
  '🇵🇱',
  '🇵🇹',
  '🇮🇪',
  '🇨🇭',
  '🇦🇹',
  '🇧🇪',
  '🇳🇱',
  '🇨🇱',
  '🇦🇷',
  '🇨🇴',
  '🇵🇪',
  '🇻🇪',
  '🇿🇼',
  '🇳🇬',
  '🇳🇵',
];

export const easy: Country[] = [
  {
    name: 'Argentina',
    flag: '🇦🇷',
    similarFlags: easySimilarFlags.filter((flag) => flag !== '🇦🇷'),
  },
  {
    name: 'Australia',
    flag: '🇦🇺',
    similarFlags: easySimilarFlags.filter((flag) => flag !== '🇦🇺'),
  },
  {
    name: 'Austria',
    flag: '🇦🇹',
    similarFlags: easySimilarFlags.filter((flag) => flag !== '🇦🇹'),
  },
  {
    name: 'Belgium',
    flag: '🇧🇪',
    similarFlags: easySimilarFlags.filter((flag) => flag !== '🇧🇪'),
  },
  {
    name: 'Brazil',
    flag: '🇧🇷',
    similarFlags: easySimilarFlags.filter((flag) => flag !== '🇧🇷'),
  },
  {
    name: 'Canada',
    flag: '🇨🇦',
    similarFlags: easySimilarFlags.filter((flag) => flag !== '🇨🇦'),
  },
  {
    name: 'Chile',
    flag: '🇨🇱',
    similarFlags: easySimilarFlags.filter((flag) => flag !== '🇨🇱'),
  },
  {
    name: 'China',
    flag: '🇨🇳',
    similarFlags: easySimilarFlags.filter((flag) => flag !== '🇨🇳'),
  },
  {
    name: 'Colombia',
    flag: '🇨🇴',
    similarFlags: easySimilarFlags.filter((flag) => flag !== '🇨🇴'),
  },
  {
    name: 'Denmark',
    flag: '🇩🇰',
    similarFlags: easySimilarFlags.filter((flag) => flag !== '🇩🇰'),
  },
  {
    name: 'Finland',
    flag: '🇫🇮',
    similarFlags: easySimilarFlags.filter((flag) => flag !== '🇫🇮'),
  },
  {
    name: 'France',
    flag: '🇫🇷',
    similarFlags: easySimilarFlags.filter((flag) => flag !== '🇫🇷'),
  },
  {
    name: 'Germany',
    flag: '🇩🇪',
    similarFlags: easySimilarFlags.filter((flag) => flag !== '🇩🇪'),
  },
  {
    name: 'Greece',
    flag: '🇬🇷',
    similarFlags: easySimilarFlags.filter((flag) => flag !== '🇬🇷'),
  },
  {
    name: 'India',
    flag: '🇮🇳',
    similarFlags: easySimilarFlags.filter((flag) => flag !== '🇮🇳'),
  },
  {
    name: 'Ireland',
    flag: '🇮🇪',
    similarFlags: easySimilarFlags.filter((flag) => flag !== '🇮🇪'),
  },
  {
    name: 'Italy',
    flag: '🇮🇹',
    similarFlags: easySimilarFlags.filter((flag) => flag !== '🇮🇹'),
  },
  {
    name: 'Japan',
    flag: '🇯🇵',
    similarFlags: easySimilarFlags.filter((flag) => flag !== '🇯🇵'),
  },
  {
    name: 'Mexico',
    flag: '🇲🇽',
    similarFlags: easySimilarFlags.filter((flag) => flag !== '🇲🇽'),
  },
  {
    name: 'Nepal',
    flag: '🇳🇵',
    similarFlags: easySimilarFlags.filter((flag) => flag !== '🇳🇵'),
  },
  {
    name: 'Netherlands',
    flag: '🇳🇱',
    similarFlags: easySimilarFlags.filter((flag) => flag !== '🇳🇱'),
  },
  {
    name: 'New Zealand',
    flag: '🇳🇿',
    similarFlags: easySimilarFlags.filter((flag) => flag !== '🇳🇿'),
  },
  {
    name: 'Nigeria',
    flag: '🇳🇬',
    similarFlags: easySimilarFlags.filter((flag) => flag !== '🇳🇬'),
  },
  {
    name: 'Norway',
    flag: '🇳🇴',
    similarFlags: easySimilarFlags.filter((flag) => flag !== '🇳🇴'),
  },
  {
    name: 'Pakistan',
    flag: '🇵🇰',
    similarFlags: easySimilarFlags.filter((flag) => flag !== '🇵🇰'),
  },
  {
    name: 'Peru',
    flag: '🇵🇪',
    similarFlags: easySimilarFlags.filter((flag) => flag !== '🇵🇪'),
  },
  {
    name: 'Poland',
    flag: '🇵🇱',
    similarFlags: easySimilarFlags.filter((flag) => flag !== '🇵🇱'),
  },
  {
    name: 'Portugal',
    flag: '🇵🇹',
    similarFlags: easySimilarFlags.filter((flag) => flag !== '🇵🇹'),
  },
  {
    name: 'Saudi Arabia',
    flag: '🇸🇦',
    similarFlags: easySimilarFlags.filter((flag) => flag !== '🇸🇦'),
  },
  {
    name: 'South Africa',
    flag: '🇿🇦',
    similarFlags: easySimilarFlags.filter((flag) => flag !== '🇿🇦'),
  },
  {
    name: 'South Korea',
    flag: '🇰🇷',
    similarFlags: easySimilarFlags.filter((flag) => flag !== '🇰🇷'),
  },
  {
    name: 'Spain',
    flag: '🇪🇸',
    similarFlags: easySimilarFlags.filter((flag) => flag !== '🇪🇸'),
  },
  {
    name: 'Sweden',
    flag: '🇸🇪',
    similarFlags: easySimilarFlags.filter((flag) => flag !== '🇸🇪'),
  },
  {
    name: 'Switzerland',
    flag: '🇨🇭',
    similarFlags: easySimilarFlags.filter((flag) => flag !== '🇨🇭'),
  },
  {
    name: 'Türkiye (Turkey)',
    flag: '🇹🇷',
    similarFlags: easySimilarFlags.filter((flag) => flag !== '🇹🇷'),
  },
  {
    name: 'United Arab Emirates',
    flag: '🇦🇪',
    similarFlags: easySimilarFlags.filter((flag) => flag !== '🇦🇪'),
  },
  {
    name: 'United Kingdom',
    flag: '🇬🇧',
    similarFlags: easySimilarFlags.filter((flag) => flag !== '🇬🇧'),
  },
  {
    name: 'United States',
    flag: '🇺🇸',
    similarFlags: easySimilarFlags.filter((flag) => flag !== '🇺🇸'),
  },
  {
    name: 'Venezuela',
    flag: '🇻🇪',
    similarFlags: easySimilarFlags.filter((flag) => flag !== '🇻🇪'),
  },
  {
    name: 'Zimbabwe',
    flag: '🇿🇼',
    similarFlags: easySimilarFlags.filter((flag) => flag !== '🇿🇼'),
  },
];

export const countries: Country[] = [
  {
    name: 'Afghanistan',
    flag: '🇦🇫',
    similarFlags: ['🇰🇪', '🇲🇼', '🇮🇶', '🇯🇴', '🇦🇴', '🇸🇩', '🇪🇬', '🇺🇬', '🇬🇹', '🇵🇸'],
  },
  {
    name: 'Albania',
    flag: '🇦🇱',
    similarFlags: ['🇲🇹', '🇵🇱', '🇯🇵', '🇦🇹', '🇨🇭', '🇮🇩', '🇲🇨', '🇹🇷', '🇨🇳', '🇷🇸'],
  },
  {
    name: 'Algeria',
    flag: '🇩🇿',
    similarFlags: ['🇹🇷', '🇹🇳', '🇱🇾', '🇵🇰', '🇲🇷', '🇲🇦', '🇸🇩', '🇪🇭', '🇮🇷', '🇯🇴'],
  },
  {
    name: 'Andorra',
    flag: '🇦🇩',
    similarFlags: ['🇷🇴', '🇲🇩', '🇪🇸', '🇨🇴', '🇪🇨', '🇻🇪', '🇫🇷', '🇧🇪', '🇨🇭', '🇹🇩'],
  },
  {
    name: 'Angola',
    flag: '🇦🇴',
    similarFlags: ['🇲🇿', '🇰🇪', '🇲🇼', '🇹🇷', '🇦🇱', '🇪🇬', '🇪🇹', '🇸🇩', '🇳🇬', '🇿🇲'],
  },
  {
    name: 'Antigua and Barbuda',
    flag: '🇦🇬',
    similarFlags: ['🇳🇦', '🇸🇧', '🇰🇪', '🇸🇹', '🇬🇩', '🇻🇨', '🇧🇸', '🇬🇾', '🇫🇯', '🇨🇩'],
  },
  {
    name: 'Argentina',
    flag: '🇦🇷',
    similarFlags: ['🇺🇾', '🇬🇷', '🇮🇸', '🇫🇮', '🇸🇮', '🇸🇲', '🇳🇮', '🇸🇰', '🇪🇸', '🇨🇱'],
  },
  {
    name: 'Armenia',
    flag: '🇦🇲',
    similarFlags: ['🇷🇴', '🇲🇩', '🇨🇭', '🇪🇸', '🇧🇪', '🇪🇨', '🇨🇴', '🇻🇪', '🇫🇷', '🇦🇩'],
  },
  {
    name: 'Australia',
    flag: '🇦🇺',
    similarFlags: ['🇳🇿', '🇨🇦', '🇺🇸', '🇬🇧', '🇿🇦', '🇫🇯', '🇹🇴', '🇷🇺', '🇨🇳', '🇲🇭'],
  },
  {
    name: 'Austria',
    flag: '🇦🇹',
    similarFlags: ['🇱🇻', '🇪🇪', '🇳🇱', '🇷🇺', '🇹🇩', '🇭🇷', '🇱🇺', '🇮🇹', '🇳🇴', '🇱🇮'],
  },
  {
    name: 'Azerbaijan',
    flag: '🇦🇿',
    similarFlags: ['🇹🇷', '🇹🇲', '🇰🇬', '🇹🇯', '🇦🇲', '🇬🇪', '🇰🇿', '🇺🇿', '🇧🇾', '🇦🇫'],
  },
  {
    name: 'Bahamas',
    flag: '🇧🇸',
    similarFlags: ['🇹🇹', '🇧🇧', '🇬🇾', '🇯🇲', '🇬🇩', '🇱🇨', '🇩🇲', '🇦🇬', '🇻🇨', '🇰🇳'],
  },
  {
    name: 'Bahrain',
    flag: '🇧🇭',
    similarFlags: ['🇶🇦', '🇱🇧', '🇰🇼', '🇴🇲', '🇦🇪', '🇾🇪', '🇪🇬', '🇯🇴', '🇱🇾', '🇵🇸'],
  },
  {
    name: 'Bangladesh',
    flag: '🇧🇩',
    similarFlags: ['🇳🇵', '🇱🇰', '🇻🇳', '🇱🇦', '🇲🇾', '🇰🇭', '🇹🇭', '🇹🇩', '🇨🇲', '🇹🇬'],
  },
  {
    name: 'Barbados',
    flag: '🇧🇧',
    similarFlags: ['🇬🇩', '🇻🇨', '🇦🇬', '🇰🇳', '🇱🇨', '🇩🇲', '🇧🇸', '🇹🇹', '🇯🇲', '🇬🇾'],
  },
  {
    name: 'Belarus',
    flag: '🇧🇾',
    similarFlags: ['🇱🇻', '🇷🇺', '🇹🇯', '🇧🇬', '🇭🇺', '🇹🇷', '🇹🇲', '🇦🇿', '🇰🇬', '🇵🇹'],
  },
  {
    name: 'Belgium',
    flag: '🇧🇪',
    similarFlags: ['🇩🇪', '🇨🇴', '🇪🇨', '🇬🇾', '🇱🇹', '🇨🇲', '🇬🇼', '🇺🇬', '🇬🇳', '🇳🇪'],
  },
  {
    name: 'Belize',
    flag: '🇧🇿',
    similarFlags: ['🇭🇳', '🇬🇹', '🇨🇷', '🇳🇮', '🇪🇸', '🇱🇦', '🇵🇦', '🇨🇱', '🇹🇭', '🇭🇹'],
  },
  {
    name: 'Benin',
    flag: '🇧🇯',
    similarFlags: ['🇨🇮', '🇨🇲', '🇨🇬', '🇬🇳', '🇲🇱', '🇸🇳', '🇹🇬', '🇧🇫', '🇪🇹', '🇬🇼'],
  },
  {
    name: 'Bhutan',
    flag: '🇧🇹',
    similarFlags: ['🇳🇵', '🇱🇰', '🇲🇳', '🇻🇳', '🇱🇦', '🇲🇲', '🇮🇳', '🇨🇳', '🇹🇭', '🇰🇭'],
  },
  {
    name: 'Bolivia',
    flag: '🇧🇴',
    similarFlags: ['🇬🇭', '🇱🇹', '🇲🇱', '🇨🇲', '🇬🇳', '🇸🇳', '🇹🇬', '🇨🇬', '🇧🇯', '🇪🇹'],
  },
  {
    name: 'Bosnia and Herzegovina',
    flag: '🇧🇦',
    similarFlags: ['🇽🇰', '🇺🇦', '🇸🇪', '🇷🇸', '🇲🇪', '🇷🇴', '🇭🇷', '🇸🇮', '🇪🇺', '🇸🇰'],
  },
  {
    name: 'Botswana',
    flag: '🇧🇼',
    similarFlags: ['🇪🇪', '🇰🇳', '🇩🇪', '🇬🇾', '🇦🇷', '🇺🇾', '🇿🇦', '🇳🇦', '🇫🇮', '🇬🇷'],
  },
  {
    name: 'Brazil',
    flag: '🇧🇷',
    similarFlags: ['🇬🇳', '🇧🇫', '🇸🇳', '🇲🇱', '🇨🇲', '🇪🇹', '🇨🇴', '🇪🇨', '🇧🇴', '🇬🇭'],
  },
  {
    name: 'Brunei',
    flag: '🇧🇳',
    similarFlags: ['🇧🇪', '🇩🇪', '🇺🇬', '🇳🇦', '🇬🇪', '🇪🇬', '🇸🇬', '🇲🇾', '🇨🇬', '🇹🇭'],
  },
  {
    name: 'Bulgaria',
    flag: '🇧🇬',
    similarFlags: ['🇷🇸', '🇱🇹', '🇹🇩', '🇨🇾', '🇲🇰', '🇦🇲', '🇹🇷', '🇬🇷', '🇲🇪', '🇦🇱'],
  },
  {
    name: 'Burkina Faso',
    flag: '🇧🇫',
    similarFlags: ['🇬🇳', '🇧🇯', '🇲🇱', '🇨🇲', '🇬🇭', '🇸🇳', '🇹🇬', '🇨🇬', '🇪🇹', '🇬🇼'],
  },
  {
    name: 'Burundi',
    flag: '🇧🇮',
    similarFlags: ['🇷🇼', '🇳🇱', '🇱🇺', '🇷🇺', '🇬🇦', '🇬🇼', '🇸🇷', '🇸🇩', '🇨🇫', '🇨🇮'],
  },
  {
    name: 'Cambodia',
    flag: '🇰🇭',
    similarFlags: ['🇲🇾', '🇱🇦', '🇹🇭', '🇮🇩', '🇳🇱', '🇧🇭', '🇳🇬', '🇹🇬', '🇨🇲', '🇸🇧'],
  },
  {
    name: 'Cameroon',
    flag: '🇨🇲',
    similarFlags: ['🇬🇦', '🇬🇶', '🇨🇬', '🇧🇮', '🇧🇫', '🇲🇱', '🇳🇪', '🇨🇮', '🇪🇹', '🇲🇬'],
  },
  {
    name: 'Canada',
    flag: '🇨🇦',
    similarFlags: ['🇱🇺', '🇳🇱', '🇫🇮', '🇳🇿', '🇦🇺', '🇸🇪', '🇮🇸', '🇨🇭', '🇩🇰', '🇳🇴'],
  },
  {
    name: 'Cape Verde',
    flag: '🇨🇻',
    similarFlags: ['🇳🇱', '🇱🇹', '🇱🇻', '🇨🇾', '🇬🇷', '🇸🇰', '🇲🇹', '🇹🇭', '🇱🇰', '🇧🇹'],
  },
  {
    name: 'Central African Republic',
    flag: '🇨🇫',
    similarFlags: ['🇨🇮', '🇧🇫', '🇲🇱', '🇹🇬', '🇬🇭', '🇧🇯', '🇳🇪', '🇸🇳', '🇬🇳', '🇮🇩'],
  },
  {
    name: 'Chad',
    flag: '🇹🇩',
    similarFlags: ['🇷🇴', '🇲🇩', '🇦🇩', '🇳🇪', '🇵🇾', '🇧🇪', '🇧🇴', '🇨🇴', '🇸🇳', '🇨🇮'],
  },
  {
    name: 'Chile',
    flag: '🇨🇱',
    similarFlags: ['🇺🇸', '🇱🇷', '🇵🇪', '🇩🇴', '🇲🇽', '🇪🇨', '🇨🇻', '🇧🇷', '🇬🇹', '🇦🇷'],
  },
  {
    name: 'China',
    flag: '🇨🇳',
    similarFlags: ['🇲🇳', '🇻🇳', '🇰🇵', '🇱🇦', '🇹🇯', '🇰🇬', '🇳🇵', '🇧🇹', '🇩🇿', '🇪🇷'],
  },
  {
    name: 'Colombia',
    flag: '🇨🇴',
    similarFlags: ['🇪🇨', '🇻🇪', '🇩🇴', '🇲🇽', '🇵🇪', '🇧🇴', '🇬🇳', '🇸🇳', '🇲🇱', '🇨🇮'],
  },
  {
    name: 'Comoros',
    flag: '🇰🇲',
    similarFlags: ['🇲🇺', '🇲🇬', '🇹🇿', '🇸🇨', '🇰🇪', '🇿🇼', '🇲🇿', '🇷🇼', '🇧🇮', '🇹🇬'],
  },
  {
    name: 'Costa Rica',
    flag: '🇨🇷',
    similarFlags: ['🇹🇭', '🇳🇮', '🇬🇹', '🇭🇳', '🇸🇻', '🇬🇷', '🇬🇩', '🇩🇴', '🇪🇨', '🇧🇯'],
  },
  {
    name: "Côte d'Ivoire (Ivory Coast)",
    flag: '🇨🇮',
    similarFlags: ['🇳🇪', '🇧🇯', '🇲🇱', '🇧🇫', '🇬🇭', '🇸🇳', '🇬🇳', '🇹🇬', '🇪🇷', '🇲🇷'],
  },
  {
    name: 'Croatia',
    flag: '🇭🇷',
    similarFlags: ['🇸🇰', '🇸🇮', '🇨🇿', '🇵🇱', '🇷🇺', '🇸🇪', '🇳🇱', '🇷🇸', '🇧🇬', '🇲🇰'],
  },
  {
    name: 'Cuba',
    flag: '🇨🇺',
    similarFlags: ['🇵🇷', '🇩🇴', '🇻🇪', '🇪🇨', '🇵🇪', '🇧🇴', '🇬🇭', '🇸🇳', '🇲🇱', '🇹🇬'],
  },
  {
    name: 'Cyprus',
    flag: '🇨🇾',
    similarFlags: ['🇬🇷', '🇹🇷', '🇬🇪', '🇧🇬', '🇷🇺', '🇸🇰', '🇸🇮', '🇲🇰', '🇷🇸', '🇲🇪'],
  },
  {
    name: 'Czech Republic (Czechia)',
    flag: '🇨🇿',
    similarFlags: ['🇸🇰', '🇸🇮', '🇷🇺', '🇸🇪', '🇳🇱', '🇷🇸', '🇧🇬', '🇲🇰', '🇲🇪', '🇦🇱'],
  },
  {
    name: 'Democratic Republic of the Congo',
    flag: '🇨🇩',
    similarFlags: ['🇬🇦', '🇨🇬', '🇹🇩', '🇳🇪', '🇧🇯', '🇸🇳', '🇲🇱', '🇬🇳', '🇮🇩', '🇮🇹'],
  },
  {
    name: 'Denmark',
    flag: '🇩🇰',
    similarFlags: ['🇳🇴', '🇮🇸', '🇫🇮', '🇸🇪', '🇳🇱', '🇬🇧', '🇵🇱', '🇱🇻', '🇪🇪', '🇱🇹'],
  },
  {
    name: 'Djibouti',
    flag: '🇩🇯',
    similarFlags: ['🇪🇷', '🇸🇴', '🇸🇩', '🇪🇹', '🇰🇪', '🇹🇩', '🇱🇸', '🇿🇦', '🇲🇬', '🇨🇩'],
  },
  {
    name: 'Dominica',
    flag: '🇩🇲',
    similarFlags: ['🇪🇷', '🇬🇭', '🇮🇪', '🇲🇽', '🇨🇮', '🇸🇳', '🇬🇳', '🇲🇱', '🇧🇯', '🇹🇬'],
  },
  {
    name: 'Dominican Republic',
    flag: '🇩🇴',
    similarFlags: ['🇭🇹', '🇨🇺', '🇵🇷', '🇪🇨', '🇵🇪', '🇧🇴', '🇪🇸', '🇲🇽', '🇬🇭', '🇬🇳'],
  },
  {
    name: 'East Timor',
    flag: '🇹🇱',
    similarFlags: ['🇮🇩', '🇵🇭', '🇲🇾', '🇸🇬', '🇹🇭', '🇻🇳', '🇵🇬', '🇫🇯', '🇸🇧', '🇳🇺'],
  },
  {
    name: 'Ecuador',
    flag: '🇪🇨',
    similarFlags: ['🇨🇴', '🇻🇪', '🇵🇪', '🇧🇴', '🇵🇾', '🇩🇴', '🇬🇭', '🇲🇱', '🇸🇳', '🇨🇮'],
  },
  {
    name: 'Egypt',
    flag: '🇪🇬',
    similarFlags: ['🇸🇾', '🇮🇶', '🇾🇪', '🇸🇦', '🇯🇴', '🇸🇩', '🇦🇪', '🇰🇼', '🇴🇲', '🇵🇸'],
  },
  {
    name: 'El Salvador',
    flag: '🇸🇻',
    similarFlags: ['🇭🇳', '🇬🇹', '🇳🇮', '🇨🇷', '🇭🇹', '🇩🇴', '🇲🇽', '🇵🇪', '🇪🇨', '🇧🇴'],
  },
  {
    name: 'Equatorial Guinea',
    flag: '🇬🇶',
    similarFlags: ['🇨🇲', '🇬🇦', '🇨🇬', '🇨🇩', '🇹🇩', '🇧🇯', '🇳🇪', '🇸🇳', '🇲🇱', '🇬🇭'],
  },
  {
    name: 'Eritrea',
    flag: '🇪🇷',
    similarFlags: ['🇪🇹', '🇸🇦', '🇾🇪', '🇸🇾', '🇮🇶', '🇯🇴', '🇩🇯', '🇸🇩', '🇸🇴', '🇨🇲'],
  },
  {
    name: 'Estonia',
    flag: '🇪🇪',
    similarFlags: ['🇫🇮', '🇱🇻', '🇱🇹', '🇭🇺', '🇵🇱', '🇨🇿', '🇸🇰', '🇧🇬', '🇷🇺', '🇹🇷'],
  },
  {
    name: 'Eswatini (Swaziland)',
    flag: '🇸🇿',
    similarFlags: ['🇿🇦', '🇳🇦', '🇧🇼', '🇱🇸', '🇲🇿', '🇹🇿', '🇰🇪', '🇺🇬', '🇹🇩', '🇨🇩'],
  },
  {
    name: 'Ethiopia',
    flag: '🇪🇹',
    similarFlags: ['🇪🇷', '🇮🇪', '🇨🇮', '🇮🇹', '🇲🇽', '🇬🇭', '🇰🇪', '🇸🇩', '🇸🇴', '🇸🇸'],
  },
  {
    name: 'European Union',
    flag: '🇪🇺',
    similarFlags: ['🇺🇳', '🇸🇪', '🇷🇴', '🇧🇦', '🇧🇬', '🇺🇦', '🇰🇿', '🇦🇿', '🇰🇼', '🇧🇪'],
  },
  {
    name: 'Federated States of Micronesia',
    flag: '🇫🇲',
    similarFlags: ['🇺🇸', '🇱🇷', '🇵🇪', '🇩🇴', '🇲🇽', '🇪🇨', '🇨🇻', '🇧🇷', '🇬🇹', '🇦🇷'],
  },
  {
    name: 'Fiji',
    flag: '🇫🇯',
    similarFlags: ['🇳🇿', '🇦🇺', '🇹🇴', '🇼🇸', '🇨🇰', '🇵🇳', '🇳🇨', '🇹🇻', '🇻🇺', '🇸🇧'],
  },
  {
    name: 'Finland',
    flag: '🇫🇮',
    similarFlags: ['🇩🇰', '🇸🇪', '🇳🇴', '🇮🇸', '🇪🇪', '🇱🇻', '🇱🇹', '🇷🇺', '🇵🇱', '🇨🇿'],
  },
  {
    name: 'France',
    flag: '🇫🇷',
    similarFlags: ['🇮🇹', '🇱🇺', '🇷🇴', '🇨🇮', '🇧🇪', '🇳🇱', '🇷🇺', '🇬🇧', '🇨🇦', '🇲🇽'],
  },
  {
    name: 'Gabon',
    flag: '🇬🇦',
    similarFlags: ['🇪🇬', '🇨🇬', '🇨🇩', '🇪🇨', '🇲🇽', '🇨🇴', '🇻🇪', '🇧🇷', '🇮🇹', '🇹🇩'],
  },
  {
    name: 'Gambia',
    flag: '🇬🇲',
    similarFlags: ['🇲🇱', '🇸🇳', '🇬🇺', '🇲🇷', '🇧🇯', '🇳🇪', '🇮🇹', '🇮🇪', '🇨🇮', '🇬🇭'],
  },
  {
    name: 'Georgia',
    flag: '🇬🇪',
    similarFlags: ['🇦🇲', '🇷🇺', '🇧🇾', '🇸🇰', '🇸🇮', '🇭🇺', '🇲🇩', '🇦🇿', '🇹🇷', '🇦🇹'],
  },
  {
    name: 'Germany',
    flag: '🇩🇪',
    similarFlags: ['🇧🇪', '🇱🇮', '🇮🇹', '🇨🇿', '🇵🇱', '🇭🇺', '🇷🇺', '🇦🇹', '🇱🇻', '🇪🇪'],
  },
  {
    name: 'Ghana',
    flag: '🇬🇭',
    similarFlags: ['🇬🇳', '🇲🇱', '🇸🇳', '🇨🇮', '🇧🇯', '🇪🇹', '🇰🇪', '🇹🇿', '🇺🇬', '🇷🇪'],
  },
  {
    name: 'Greece',
    flag: '🇬🇷',
    similarFlags: ['🇹🇷', '🇲🇰', '🇦🇱', '🇧🇬', '🇪🇸', '🇮🇹', '🇨🇾', '🇱🇻', '🇩🇰', '🇳🇴'],
  },
  {
    name: 'Greenland',
    flag: '🇬🇱',
    similarFlags: ['🇩🇰', '🇸🇴', '🇧🇻', '🇨🇦', '🇺🇸', '🇮🇸', '🇫🇴', '🇦🇸', '🇹🇻', '🇲🇰'],
  },
  {
    name: 'Grenada',
    flag: '🇬🇩',
    similarFlags: ['🇧🇸', '🇧🇧', '🇩🇲', '🇦🇬', '🇻🇨', '🇰🇳', '🇱🇨', '🇹🇹', '🇯🇲', '🇧🇲'],
  },
  {
    name: 'Guatemala',
    flag: '🇬🇹',
    similarFlags: ['🇭🇳', '🇸🇻', '🇳🇮', '🇨🇷', '🇵🇦', '🇨🇴', '🇵🇪', '🇪🇨', '🇧🇴', '🇵🇾'],
  },
  {
    name: 'Guinea',
    flag: '🇬🇳',
    similarFlags: ['🇲🇱', '🇸🇳', '🇬🇼', '🇲🇷', '🇧🇯', '🇳🇪', '🇮🇹', '🇮🇪', '🇨🇮', '🇬🇭'],
  },
  {
    name: 'Guinea-Bissau',
    flag: '🇬🇼',
    similarFlags: ['🇬🇳', '🇸🇳', '🇲🇱', '🇲🇷', '🇧🇯', '🇳🇪', '🇮🇹', '🇮🇪', '🇨🇮', '🇬🇭'],
  },
  {
    name: 'Guyana',
    flag: '🇬🇾',
    similarFlags: ['🇧🇷', '🇸🇷', '🇻🇪', '🇪🇨', '🇨🇴', '🇹🇩', '🇹🇭', '🇱🇰', '🇲🇲', '🇮🇩'],
  },
  {
    name: 'Haiti',
    flag: '🇭🇹',
    similarFlags: ['🇩🇴', '🇧🇴', '🇪🇨', '🇲🇽', '🇵🇱', '🇨🇿', '🇸🇰', '🇸🇮', '🇷🇺', '🇹🇩'],
  },
  {
    name: 'Honduras',
    flag: '🇭🇳',
    similarFlags: ['🇸🇻', '🇬🇹', '🇳🇮', '🇨🇷', '🇵🇦', '🇨🇴', '🇵🇪', '🇪🇨', '🇧🇴', '🇵🇾'],
  },
  {
    name: 'Hungary',
    flag: '🇭🇺',
    similarFlags: ['🇩🇪', '🇵🇱', '🇱🇹', '🇪🇪', '🇮🇹', '🇧🇬', '🇷🇴', '🇦🇿', '🇦🇹', '🇵🇭'],
  },
  {
    name: 'Iceland',
    flag: '🇮🇸',
    similarFlags: ['🇳🇴', '🇫🇮', '🇸🇪', '🇩🇰', '🇱🇻', '🇪🇪', '🇱🇹', '🇨🇭', '🇳🇱', '🇬🇧'],
  },
  {
    name: 'India',
    flag: '🇮🇳',
    similarFlags: ['🇮🇪', '🇮🇷', '🇲🇽', '🇳🇪', '🇨🇮', '🇧🇯', '🇪🇹', '🇸🇳', '🇰🇪', '🇹🇿'],
  },
  {
    name: 'Indonesia',
    flag: '🇮🇩',
    similarFlags: ['🇲🇨', '🇵🇱', '🇸🇬', '🇱🇮', '🇨🇿', '🇬🇵', '🇩🇰', '🇨🇭', '🇲🇾', '🇹🇭'],
  },
  {
    name: 'Iran',
    flag: '🇮🇷',
    similarFlags: ['🇦🇿', '🇹🇯', '🇮🇶', '🇮🇪', '🇮🇳', '🇸🇾', '🇱🇧', '🇮🇹', '🇲🇽', '🇹🇩'],
  },
  {
    name: 'Iraq',
    flag: '🇮🇶',
    similarFlags: ['🇸🇾', '🇪🇬', '🇾🇪', '🇹🇳', '🇩🇿', '🇲🇦', '🇯🇴', '🇰🇼', '🇵🇸', '🇦🇪'],
  },
  {
    name: 'Ireland',
    flag: '🇮🇪',
    similarFlags: ['🇮🇳', '🇨🇮', '🇧🇯', '🇳🇪', '🇬🇭', '🇲🇽', '🇪🇹', '🇸🇳', '🇬🇳', '🇰🇪'],
  },
  {
    name: 'Italy',
    flag: '🇮🇹',
    similarFlags: ['🇲🇽', '🇭🇺', '🇮🇪', '🇵🇱', '🇨🇿', '🇸🇰', '🇸🇮', '🇩🇪', '🇸🇲', '🇱🇮'],
  },
  {
    name: 'Jamaica',
    flag: '🇯🇲',
    similarFlags: ['🇪🇹', '🇰🇪', '🇹🇿', '🇺🇬', '🇬🇭', '🇲🇱', '🇸🇳', '🇬🇺', '🇧🇯', '🇨🇮'],
  },
  {
    name: 'Japan',
    flag: '🇯🇵',
    similarFlags: ['🇲🇴', '🇵🇱', '🇮🇩', '🇨🇿', '🇬🇧', '🇧🇩', '🇵🇭', '🇱🇰', '🇻🇳', '🇩🇰'],
  },
  {
    name: 'Jordan',
    flag: '🇯🇴',
    similarFlags: ['🇮🇶', '🇸🇾', '🇵🇸', '🇦🇪', '🇪🇬', '🇸🇦', '🇰🇼', '🇾🇪', '🇸🇩', '🇪🇭'],
  },
  {
    name: 'Kazakhstan',
    flag: '🇰🇿',
    similarFlags: ['🇰🇬', '🇹🇯', '🇹🇲', '🇺🇿', '🇲🇳', '🇨🇳', '🇯🇵', '🇵🇱', '🇩🇪', '🇷🇺'],
  },
  {
    name: 'Kenya',
    flag: '🇰🇪',
    similarFlags: ['🇪🇹', '🇹🇿', '🇺🇬', '🇸🇴', '🇪🇷', '🇩🇯', '🇸🇳', '🇲🇱', '🇬🇭', '🇨🇮'],
  },
  {
    name: 'Kiribati',
    flag: '🇰🇮',
    similarFlags: ['🇨🇭', '🇳🇿', '🇵🇭', '🇹🇴', '🇪🇨', '🇸🇪', '🇩🇪', '🇦🇹', '🇲🇳', '🇵🇱'],
  },
  {
    name: 'Kosovo',
    flag: '🇽🇰',
    similarFlags: ['🇦🇱', '🇷🇸', '🇲🇪', '🇸🇮', '🇸🇰', '🇨🇿', '🇵🇱', '🇩🇪', '🇪🇺', '🇧🇦'],
  },
  {
    name: 'Kuwait',
    flag: '🇰🇼',
    similarFlags: ['🇦🇪', '🇶🇦', '🇴🇲', '🇾🇪', '🇸🇦', '🇮🇶', '🇮🇷', '🇯🇴', '🇵🇸', '🇧🇭'],
  },
  {
    name: 'Kyrgyzstan',
    flag: '🇰🇬',
    similarFlags: ['🇰🇿', '🇹🇯', '🇹🇲', '🇺🇿', '🇲🇳', '🇨🇳', '🇯🇵', '🇵🇱', '🇩🇪', '🇷🇺'],
  },
  {
    name: 'Laos',
    flag: '🇱🇦',
    similarFlags: ['🇹🇭', '🇻🇳', '🇰🇭', '🇲🇲', '🇮🇩', '🇯🇵', '🇵🇭', '🇧🇩', '🇹🇼', '🇨🇳'],
  },
  {
    name: 'Latvia',
    flag: '🇱🇻',
    similarFlags: ['🇱🇹', '🇪🇪', '🇩🇰', '🇸🇪', '🇫🇮', '🇵🇱', '🇨🇿', '🇸🇰', '🇦🇹', '🇩🇪'],
  },
  {
    name: 'Lebanon',
    flag: '🇱🇧',
    similarFlags: ['🇯🇴', '🇮🇶', '🇸🇾', '🇵🇸', '🇦🇪', '🇾🇪', '🇮🇷', '🇮🇳', '🇪🇬', '🇲🇦'],
  },
  {
    name: 'Lesotho',
    flag: '🇱🇸',
    similarFlags: ['🇿🇦', '🇸🇿', '🇳🇦', '🇩🇿', '🇹🇿', '🇰🇪', '🇬🇭', '🇸🇳', '🇲🇱', '🇬🇲'],
  },
  {
    name: 'Liberia',
    flag: '🇱🇷',
    similarFlags: ['🇺🇸', '🇲🇾', '🇵🇱', '🇨🇿', '🇸🇰', '🇸🇮', '🇬🇭', '🇸🇳', '🇬🇲', '🇬🇺'],
  },
  {
    name: 'Libya',
    flag: '🇱🇾',
    similarFlags: ['🇪🇬', '🇸🇾', '🇾🇪', '🇮🇶', '🇯🇴', '🇦🇪', '🇶🇦', '🇰🇼', '🇧🇭', '🇴🇲'],
  },
  {
    name: 'Liechtenstein',
    flag: '🇱🇮',
    similarFlags: ['🇨🇿', '🇵🇱', '🇸🇰', '🇸🇮', '🇭🇺', '🇩🇪', '🇦🇹', '🇧🇪', '🇳🇱', '🇱🇺'],
  },
  {
    name: 'Lithuania',
    flag: '🇱🇹',
    similarFlags: ['🇱🇻', '🇪🇪', '🇩🇰', '🇸🇪', '🇫🇮', '🇵🇱', '🇧🇾', '🇷🇺', '🇺🇦', '🇨🇿'],
  },
  {
    name: 'Luxembourg',
    flag: '🇱🇺',
    similarFlags: ['🇮🇹', '🇱🇺', '🇷🇴', '🇨🇮', '🇧🇪', '🇳🇱', '🇷🇺', '🇬🇧', '🇨🇦', '🇲🇽'],
  },
  {
    name: 'Madagascar',
    flag: '🇲🇬',
    similarFlags: ['🇲🇾', '🇲🇿', '🇿🇲', '🇿🇼', '🇹🇿', '🇰🇪', '🇸🇳', '🇬🇭', '🇬🇲', '🇲🇱'],
  },
  {
    name: 'Malawi',
    flag: '🇲🇼',
    similarFlags: ['🇲🇿', '🇿🇲', '🇿🇼', '🇹🇿', '🇰🇪', '🇸🇳', '🇬🇭', '🇬🇲', '🇬🇺', '🇸🇱'],
  },
  {
    name: 'Malaysia',
    flag: '🇲🇾',
    similarFlags: ['🇮🇩', '🇵🇭', '🇱🇮', '🇸🇬', '🇹🇭', '🇻🇳', '🇵🇬', '🇫🇯', '🇸🇧', '🇵🇱'],
  },
  {
    name: 'Maldives',
    flag: '🇲🇻',
    similarFlags: ['🇱🇰', '🇮🇩', '🇹🇭', '🇵🇭', '🇸🇬', '🇧🇩', '🇻🇳', '🇱🇦', '🇲🇾', '🇮🇷'],
  },
  {
    name: 'Mali',
    flag: '🇲🇱',
    similarFlags: ['🇸🇳', '🇬🇳', '🇮🇪', '🇨🇮', '🇧🇯', '🇸🇪', '🇬🇭', '🇬🇲', '🇬🇺', '🇲🇷'],
  },
  {
    name: 'Malta',
    flag: '🇲🇹',
    similarFlags: ['🇮🇩', '🇵🇱', '🇨🇿', '🇸🇰', '🇸🇮', '🇭🇺', '🇱🇮', '🇩🇪', '🇦🇹', '🇧🇪'],
  },
  {
    name: 'Marshall Islands',
    flag: '🇲🇭',
    similarFlags: ['🇵🇱', '🇮🇩', '🇨🇿', '🇸🇰', '🇸🇮', '🇫🇮', '🇳🇷', '🇩🇪', '🇵🇭', '🇹🇴'],
  },
  {
    name: 'Mauritania',
    flag: '🇲🇷',
    similarFlags: ['🇲🇱', '🇸🇳', '🇬🇭', '🇬🇲', '🇬🇺', '🇸🇪', '🇮🇪', '🇨🇮', '🇧🇯', '🇬🇳'],
  },
  {
    name: 'Mauritius',
    flag: '🇲🇺',
    similarFlags: ['🇮🇩', '🇲🇨', '🇸🇬', '🇵🇱', '🇨🇿', '🇸🇰', '🇸🇮', '🇮🇹', '🇮🇪', '🇮🇳'],
  },
  {
    name: 'Mexico',
    flag: '🇲🇽',
    similarFlags: ['🇮🇹', '🇭🇺', '🇮🇪', '🇮🇷', '🇮🇳', '🇨🇴', '🇪🇨', '🇬🇹', '🇭🇳', '🇸🇻'],
  },
  {
    name: 'Moldova',
    flag: '🇲🇩',
    similarFlags: ['🇷🇴', '🇦🇩', '🇹🇩', '🇷🇺', '🇵🇱', '🇨🇿', '🇸🇰', '🇸🇮', '🇧🇬', '🇺🇦'],
  },
  {
    name: 'Monaco',
    flag: '🇲🇨',
    similarFlags: ['🇲🇨', '🇵🇱', '🇸🇬', '🇱🇮', '🇨🇿', '🇬🇵', '🇩🇰', '🇨🇭', '🇲🇾', '🇹🇭'],
  },
  {
    name: 'Mongolia',
    flag: '🇲🇳',
    similarFlags: ['🇨🇳', '🇰🇵', '🇰🇷', '🇯🇵', '🇵🇭', '🇱🇦', '🇹🇭', '🇻🇳', '🇧🇩', '🇹🇼'],
  },
  {
    name: 'Montenegro',
    flag: '🇲🇪',
    similarFlags: ['🇷🇸', '🇸🇮', '🇭🇷', '🇸🇰', '🇨🇿', '🇵🇱', '🇷🇺', '🇧🇾', '🇺🇦', '🇧🇦'],
  },
  {
    name: 'Morocco',
    flag: '🇲🇦',
    similarFlags: ['🇪🇬', '🇩🇿', '🇹🇳', '🇱🇾', '🇹🇩', '🇲🇷', '🇸🇳', '🇲🇱', '🇬🇲', '🇬🇺'],
  },
  {
    name: 'Mozambique',
    flag: '🇲🇿',
    similarFlags: ['🇹🇿', '🇰🇪', '🇿🇦', '🇸🇿', '🇿🇲', '🇿🇼', '🇬🇭', '🇸🇳', '🇲🇱', '🇬🇲'],
  },
  {
    name: 'Myanmar (Burma)',
    flag: '🇲🇲',
    similarFlags: ['🇮🇩', '🇹🇭', '🇱🇦', '🇵🇭', '🇨🇳', '🇻🇳', '🇰🇭', '🇧🇩', '🇹🇼', '🇯🇵'],
  },
  {
    name: 'Namibia',
    flag: '🇳🇦',
    similarFlags: ['🇿🇦', '🇿🇼', '🇧🇼', '🇿🇲', '🇱🇸', '🇸🇿', '🇬🇭', '🇸🇳', '🇲🇱', '🇬🇲'],
  },
  {
    name: 'Nauru',
    flag: '🇳🇷',
    similarFlags: ['🇹🇴', '🇵🇦', '🇲🇭', '🇫🇯', '🇩🇪', '🇨🇿', '🇵🇱', '🇸🇰', '🇸🇮', '🇦🇹'],
  },
  {
    name: 'Nepal',
    flag: '🇳🇵',
    similarFlags: ['🇮🇳', '🇧🇹', '🇮🇩', '🇲🇲', '🇹🇭', '🇱🇦', '🇻🇳', '🇧🇩', '🇨🇳', '🇹🇼'],
  },
  {
    name: 'Netherlands',
    flag: '🇳🇱',
    similarFlags: ['🇱🇺', '🇷🇺', '🇫🇷', '🇸🇰', '🇮🇹', '🇬🇧', '🇮🇪', '🇸🇮', '🇦🇹', '🇩🇰'],
  },
  {
    name: 'New Zealand',
    flag: '🇳🇿',
    similarFlags: ['🇦🇺', '🇬🇧', '🇹🇴', '🇫🇯', '🇨🇰', '🇵🇭', '🇩🇪', '🇦🇹', '🇬🇷', '🇨🇿'],
  },
  {
    name: 'Nicaragua',
    flag: '🇳🇮',
    similarFlags: ['🇭🇳', '🇸🇻', '🇬🇹', '🇨🇷', '🇵🇦', '🇨🇴', '🇵🇪', '🇪🇨', '🇧🇴', '🇵🇾'],
  },
  {
    name: 'Niger',
    flag: '🇳🇪',
    similarFlags: ['🇮🇪', '🇨🇮', '🇲🇱', '🇸🇳', '🇲🇬', '🇬🇭', '🇧🇯', '🇲🇺', '🇲🇼', '🇿🇲'],
  },
  {
    name: 'Nigeria',
    flag: '🇳🇬',
    similarFlags: ['🇮🇪', '🇨🇮', '🇲🇽', '🇭🇺', '🇮🇹', '🇬🇭', '🇸🇳', '🇲🇱', '🇬🇲', '🇬🇺'],
  },
  {
    name: 'North Korea',
    flag: '🇰🇵',
    similarFlags: ['🇰🇷', '🇨🇳', '🇲🇳', '🇯🇵', '🇻🇳', '🇱🇦', '🇹🇭', '🇲🇲', '🇰🇭', '🇹🇼'],
  },
  {
    name: 'North Macedonia',
    flag: '🇲🇰',
    similarFlags: ['🇦🇱', '🇧🇦', '🇧🇬', '🇭🇷', '🇨🇿', '🇷🇸', '🇸🇮', '🇸🇰', '🇹🇷', '🇲🇪'],
  },
  {
    name: 'Norway',
    flag: '🇳🇴',
    similarFlags: ['🇩🇰', '🇸🇪', '🇮🇸', '🇫🇮', '🇬🇧', '🇮🇪', '🇱🇻', '🇪🇪', '🇱🇹', '🇩🇪'],
  },
  {
    name: 'Oman',
    flag: '🇴🇲',
    similarFlags: ['🇦🇪', '🇶🇦', '🇰🇼', '🇧🇭', '🇾🇪', '🇸🇦', '🇮🇶', '🇮🇷', '🇲🇦', '🇪🇬'],
  },
  {
    name: 'Pakistan',
    flag: '🇵🇰',
    similarFlags: ['🇮🇳', '🇮🇶', '🇮🇷', '🇦🇫', '🇹🇷', '🇹🇲', '🇰🇿', '🇰🇬', '🇺🇿', '🇧🇩'],
  },
  {
    name: 'Puerto Rico',
    flag: '🇵🇷',
    similarFlags: ['🇨🇺', '🇺🇸', '🇵🇦', '🇩🇴', '🇻🇪', '🇨🇱', '🇹🇭', '🇱🇦', '🇨🇷', '🇭🇳'],
  },
  {
    name: 'Palau',
    flag: '🇵🇼',
    similarFlags: ['🇲🇾', '🇮🇩', '🇫🇯', '🇹🇴', '🇳🇷', '🇩🇪', '🇨🇿', '🇵🇱', '🇸🇰', '🇸🇮'],
  },
  {
    flag: '🇵🇸',
    name: 'Palestine',
    similarFlags: ['🇯🇴', '🇰🇼', '🇦🇪', '🇪🇭', '🇶🇦', '🇪🇬', '🇾🇪', '🇸🇾', '🇸🇩', '🇮🇶'],
  },
  {
    name: 'Panama',
    flag: '🇵🇦',
    similarFlags: ['🇨🇷', '🇳🇮', '🇪🇨', '🇭🇳', '🇸🇻', '🇬🇹', '🇩🇴', '🇲🇽', '🇨🇴', '🇵🇾'],
  },
  {
    name: 'Papua New Guinea',
    flag: '🇵🇬',
    similarFlags: ['🇦🇺', '🇫🇯', '🇻🇺', '🇫🇷', '🇳🇿', '🇮🇩', '🇵🇭', '🇲🇾', '🇹🇭', '🇱🇦'],
  },
  {
    name: 'Paraguay',
    flag: '🇵🇾',
    similarFlags: ['🇦🇷', '🇺🇾', '🇧🇷', '🇪🇨', '🇨🇴', '🇵🇪', '🇧🇴', '🇻🇪', '🇨🇭', '🇮🇹'],
  },
  {
    name: 'Peru',
    flag: '🇵🇪',
    similarFlags: ['🇧🇴', '🇪🇨', '🇨🇴', '🇸🇻', '🇭🇳', '🇳🇮', '🇬🇹', '🇨🇷', '🇵🇦', '🇦🇷'],
  },
  {
    name: 'Philippines',
    flag: '🇵🇭',
    similarFlags: ['🇲🇾', '🇮🇩', '🇱🇮', '🇸🇬', '🇹🇭', '🇻🇳', '🇵🇬', '🇫🇯', '🇸🇧', '🇵🇱'],
  },
  {
    name: 'Poland',
    flag: '🇵🇱',
    similarFlags: ['🇨🇿', '🇸🇰', '🇸🇮', '🇭🇷', '🇧🇬', '🇷🇺', '🇺🇦', '🇧🇾', '🇱🇹', '🇱🇻'],
  },
  {
    name: 'Portugal',
    flag: '🇵🇹',
    similarFlags: ['🇪🇸', '🇧🇷', '🇲🇿', '🇬🇮', '🇨🇴', '🇪🇨', '🇩🇴', '🇲🇽', '🇬🇹', '🇭🇳'],
  },
  {
    name: 'Qatar',
    flag: '🇶🇦',
    similarFlags: ['🇦🇪', '🇴🇲', '🇰🇼', '🇧🇭', '🇾🇪', '🇸🇦', '🇮🇶', '🇮🇷', '🇲🇦', '🇪🇬'],
  },
  {
    name: 'Republic of Congo',
    flag: '🇨🇬',
    similarFlags: ['🇬🇦', '🇹🇩', '🇨🇩', '🇳🇪', '🇧🇯', '🇸🇳', '🇲🇱', '🇬🇳', '🇬🇭', '🇧🇷'],
  },
  {
    name: 'Romania',
    flag: '🇷🇴',
    similarFlags: ['🇲🇩', '🇮🇹', '🇦🇩', '🇹🇩', '🇨🇿', '🇵🇱', '🇸🇰', '🇸🇮', '🇧🇬', '🇲🇳'],
  },
  {
    name: 'Russia',
    flag: '🇷🇺',
    similarFlags: ['🇸🇰', '🇸🇮', '🇧🇬', '🇵🇱', '🇨🇿', '🇺🇦', '🇧🇾', '🇰🇿', '🇰🇬', '🇹🇯'],
  },
  {
    name: 'Rwanda',
    flag: '🇷🇼',
    similarFlags: ['🇧🇮', '🇹🇿', '🇰🇪', '🇺🇬', '🇩🇯', '🇪🇷', '🇪🇹', '🇸🇴', '🇸🇸', '🇸🇩'],
  },
  {
    name: 'San Marino',
    flag: '🇸🇲',
    similarFlags: ['🇮🇹', '🇻🇦', '🇲🇹', '🇱🇺', '🇦🇹', '🇲🇦', '🇧🇪', '🇩🇪', '🇫🇷', '🇿🇦'],
  },
  {
    name: 'Saint Kitts and Nevis',
    flag: '🇰🇳',
    similarFlags: ['🇩🇲', '🇸🇱', '🇬🇷', '🇩🇴', '🇧🇧', '🇸🇻', '🇭🇳', '🇬🇹', '🇳🇮', '🇨🇷'],
  },
  {
    name: 'Saint Lucia',
    flag: '🇱🇨',
    similarFlags: ['🇩🇲', '🇰🇳', '🇩🇴', '🇬🇷', '🇹🇹', '🇻🇨', '🇧🇧', '🇬🇩', '🇦🇬', '🇸🇻'],
  },
  {
    name: 'Saint Vincent and the Grenadines',
    flag: '🇻🇨',
    similarFlags: ['🇱🇨', '🇩🇲', '🇬🇷', '🇹🇹', '🇩🇴', '🇧🇧', '🇦🇬', '🇬🇩', '🇸🇻', '🇰🇳'],
  },
  {
    name: 'Samoa',
    flag: '🇼🇸',
    similarFlags: ['🇹🇴', '🇳🇿', '🇫🇯', '🇨🇰', '🇵🇭', '🇹🇱', '🇮🇩', '🇵🇬', '🇫🇮', '🇳🇷'],
  },
  {
    name: 'São Tomé and Príncipe',
    flag: '🇸🇹',
    similarFlags: ['🇬🇭', '🇪🇹', '🇬🇮', '🇵🇱', '🇨🇿', '🇸🇰', '🇸🇮', '🇷🇺', '🇧🇾', '🇺🇦'],
  },
  {
    name: 'Saudi Arabia',
    flag: '🇸🇦',
    similarFlags: ['🇶🇦', '🇦🇪', '🇴🇲', '🇰🇼', '🇧🇭', '🇾🇪', '🇮🇶', '🇮🇷', '🇯🇴', '🇪🇬'],
  },
  {
    name: 'Scotland',
    flag: '󠁧󠁢󠁳󠁣󠁴󠁿🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    similarFlags: ['🇬🇧', '🏴󠁧󠁢󠁥󠁮󠁧󠁿', '🏴󠁧󠁢󠁷󠁬󠁳󠁿', '🇮🇪', '🇫🇷', '🇩🇪', '🇮🇹', '🇪🇸', '🇵🇹', '🇧🇷'],
  },
  {
    name: 'Senegal',
    flag: '🇸🇳',
    similarFlags: ['🇲🇱', '🇲🇬', '🇬🇭', '🇬🇲', '🇬🇺', '🇳🇪', '🇮🇪', '🇨🇮', '🇲🇺', '🇲🇦'],
  },
  {
    name: 'Serbia',
    flag: '🇷🇸',
    similarFlags: ['🇲🇪', '🇸🇮', '🇸🇰', '🇷🇺', '🇧🇾', '🇺🇦', '🇧🇬', '🇭🇷', '🇲🇰', '🇵🇱'],
  },
  {
    name: 'Seychelles',
    flag: '🇸🇨',
    similarFlags: ['🇲🇾', '🇮🇩', '🇵🇭', '🇹🇱', '🇱🇮', '🇵🇱', '🇨🇿', '🇸🇰', '🇸🇮', '🇭🇺'],
  },
  {
    name: 'Sierra Leone',
    flag: '🇸🇱',
    similarFlags: ['🇬🇭', '🇳🇬', '🇬🇲', '🇬🇺', '🇸🇳', '🇲🇱', '🇬🇮', '🇱🇮', '🇨🇭', '🇩🇰'],
  },
  {
    name: 'Singapore',
    flag: '🇸🇬',
    similarFlags: ['🇹🇷', '🇲🇾', '🇮🇩', '🇵🇰', '🇹🇳', '🇵🇱', '🇨🇱', '🇻🇳', '🇲🇦', '🇰🇼'],
  },
  {
    name: 'Slovakia',
    flag: '🇸🇰',
    similarFlags: ['🇸🇮', '🇨🇿', '🇵🇱', '🇷🇺', '🇺🇦', '🇧🇾', '🇷🇸', '🇧🇬', '🇭🇷', '🇲🇪'],
  },
  {
    name: 'Slovenia',
    flag: '🇸🇮',
    similarFlags: ['🇸🇰', '🇨🇿', '🇵🇱', '🇷🇺', '🇺🇦', '🇧🇾', '🇭🇷', '🇷🇸', '🇧🇬', '🇲🇪'],
  },
  {
    name: 'Solomon Islands',
    flag: '🇸🇧',
    similarFlags: ['🇵🇬', '🇫🇯', '🇻🇺', '🇫🇷', '🇳🇿', '🇮🇩', '🇵🇭', '🇲🇾', '🇹🇭', '🇱🇦'],
  },
  {
    name: 'Somalia',
    flag: '🇸🇴',
    similarFlags: ['🇩🇯', '🇪🇷', '🇪🇹', '🇸🇩', '🇰🇪', '🇹🇷', '🇳🇪', '🇲🇷', '🇱🇸', '🇨🇩'],
  },
  {
    name: 'South Africa',
    flag: '🇿🇦',
    similarFlags: ['🇳🇦', '🇿🇼', '🇧🇼', '🇸🇿', '🇱🇸', '🇲🇿', '🇰🇪', '🇹🇿', '🇬🇭', '🇸🇳'],
  },
  {
    name: 'South Korea',
    flag: '🇰🇷',
    similarFlags: ['🇯🇵', '🇨🇳', '🇲🇳', '🇻🇳', '🇱🇦', '🇹🇭', '🇲🇲', '🇵🇭', '🇮🇩', '🇲🇾'],
  },
  {
    name: 'South Sudan',
    flag: '🇸🇸',
    similarFlags: ['🇸🇩', '🇪🇷', '🇩🇯', '🇪🇹', '🇸🇴', '🇰🇪', '🇺🇬', '🇷🇼', '🇧🇮', '🇹🇿'],
  },
  {
    name: 'Spain',
    flag: '🇪🇸',
    similarFlags: ['🇩🇴', '🇨🇴', '🇲🇽', '🇵🇪', '🇪🇨', '🇧🇴', '🇵🇭', '🇦🇩', '🇲🇿', '🇬🇮'],
  },
  {
    name: 'Sri Lanka',
    flag: '🇱🇰',
    similarFlags: ['🇮🇳', '🇧🇩', '🇲🇲', '🇳🇵', '🇵🇭', '🇹🇭', '🇮🇩', '🇲🇾', '🇻🇳', '🇱🇦'],
  },
  {
    name: 'Sudan',
    flag: '🇸🇩',
    similarFlags: ['🇪🇬', '🇸🇦', '🇾🇪', '🇪🇷', '🇩🇯', '🇵🇸', '🇸🇸', '🇪🇹', '🇦🇪', '🇰🇪'],
  },
  {
    name: 'Suriname',
    flag: '🇸🇷',
    similarFlags: ['🇬🇾', '🇬🇫', '🇧🇷', '🇬🇭', '🇮🇩', '🇲🇾', '🇸🇬', '🇹🇭', '🇻🇳', '🇵🇭'],
  },
  {
    name: 'Sweden',
    flag: '🇸🇪',
    similarFlags: ['🇩🇰', '🇳🇴', '🇫🇮', '🇮🇸', '🇪🇪', '🇱🇻', '🇱🇹', '🇬🇧', '🇩🇪', '🇵🇱'],
  },
  {
    name: 'Switzerland',
    flag: '🇨🇭',
    similarFlags: ['🇩🇪', '🇧🇪', '🇱🇺', '🇮🇹', '🇨🇿', '🇵🇱', '🇸🇰', '🇭🇺', '🇩🇰', '🇸🇪'],
  },
  {
    name: 'Syria',
    flag: '🇸🇾',
    similarFlags: ['🇮🇶', '🇯🇴', '🇪🇬', '🇸🇦', '🇾🇪', '🇱🇧', '🇮🇷', '🇦🇪', '🇶🇦', '🇴🇲'],
  },
  {
    name: 'Taiwan',
    flag: '🇹🇼',
    similarFlags: ['🇨🇳', '🇯🇵', '🇰🇷', '🇲🇳', '🇵🇭', '🇱🇦', '🇹🇭', '🇻🇳', '🇧🇩', '🇮🇩'],
  },
  {
    name: 'Tajikistan',
    flag: '🇹🇯',
    similarFlags: ['🇰🇿', '🇰🇬', '🇹🇲', '🇺🇿', '🇦🇫', '🇮🇷', '🇵🇰', '🇮🇳', '🇨🇳', '🇷🇺'],
  },
  {
    name: 'Tanzania',
    flag: '🇹🇿',
    similarFlags: ['🇰🇪', '🇺🇬', '🇷🇼', '🇧🇮', '🇩🇲', '🇲🇿', '🇿🇦', '🇿🇲', '🇲🇼', '🇸🇴'],
  },
  {
    name: 'Thailand',
    flag: '🇹🇭',
    similarFlags: ['🇲🇾', '🇮🇩', '🇱🇦', '🇻🇳', '🇵🇭', '🇲🇲', '🇸🇬', '🇧🇷', '🇵🇾', '🇨🇴'],
  },
  {
    name: 'Togo',
    flag: '🇹🇬',
    similarFlags: ['🇬🇭', '🇧🇯', '🇳🇪', '🇧🇫', '🇸🇳', '🇬🇲', '🇲🇱', '🇬🇮', '🇸🇱', '🇨🇮'],
  },
  {
    name: 'Tonga',
    flag: '🇹🇴',
    similarFlags: ['🇼🇸', '🇳🇿', '🇫🇯', '🇨🇰', '🇵🇭', '🇹🇱', '🇮🇩', '🇵🇬', '🇫🇮', '🇳🇷'],
  },
  {
    name: 'Trinidad and Tobago',
    flag: '🇹🇹',
    similarFlags: ['🇧🇧', '🇬🇩', '🇬🇾', '🇯🇲', '🇧🇸', '🇻🇨', '🇱🇨', '🇩🇲', '🇰🇳', '🇦🇬'],
  },
  {
    name: 'Tunisia',
    flag: '🇹🇳',
    similarFlags: ['🇩🇿', '🇱🇾', '🇲🇦', '🇲🇷', '🇲🇱', '🇸🇳', '🇬🇭', '🇬🇲', '🇬🇺', '🇲🇿'],
  },
  {
    name: 'Türkiye (Turkey)',
    flag: '🇹🇷',
    similarFlags: ['🇬🇷', '🇧🇬', '🇦🇲', '🇬🇪', '🇷🇸', '🇲🇰', '🇦🇱', '🇧🇦', '🇽🇰', '🇦🇿'],
  },
  {
    name: 'Turkmenistan',
    flag: '🇹🇲',
    similarFlags: ['🇰🇿', '🇹🇯', '🇺🇿', '🇦🇫', '🇮🇷', '🇵🇰', '🇮🇳', '🇨🇳', '🇷🇺', '🇦🇿'],
  },
  {
    name: 'Tuvalu',
    flag: '🇹🇻',
    similarFlags: ['🇵🇼', '🇫🇯', '🇳🇷', '🇸🇧', '🇫🇷', '🇳🇿', '🇵🇬', '🇨🇰', '🇼🇸', '🇵🇭'],
  },
  {
    name: 'Uganda',
    flag: '🇺🇬',
    similarFlags: ['🇰🇪', '🇹🇿', '🇷🇼', '🇧🇮', '🇨🇩', '🇸🇸', '🇸🇴', '🇪🇹', '🇪🇷', '🇸🇩'],
  },
  {
    name: 'Ukraine',
    flag: '🇺🇦',
    similarFlags: ['🇷🇺', '🇧🇾', '🇵🇱', '🇸🇰', '🇸🇮', '🇷🇸', '🇭🇷', '🇧🇬', '🇲🇰', '🇲🇪'],
  },
  {
    name: 'United Arab Emirates',
    flag: '🇦🇪',
    similarFlags: ['🇶🇦', '🇸🇦', '🇴🇲', '🇰🇼', '🇧🇭', '🇾🇪', '🇮🇶', '🇮🇷', '🇲🇦', '🇪🇬'],
  },
  {
    name: 'United Kingdom',
    flag: '🇬🇧',
    similarFlags: ['🏴󠁧󠁢󠁥󠁮󠁧󠁿', '🏴󠁧󠁢󠁳󠁣󠁴󠁿', '🏴󠁧󠁢󠁷󠁬󠁳󠁿', '🇮🇪', '🇫🇷', '🇫🇯', '🇮🇹', '🇨🇰', '🇫🇮', '🇳🇿'],
  },
  {
    name: 'United States',
    flag: '🇺🇸',
    similarFlags: ['🇨🇦', '🇲🇽', '🇨🇺', '🇧🇷', '🇦🇷', '🇨🇴', '🇵🇪', '🇨🇱', '🇻🇪', '🇬🇾'],
  },
  {
    name: 'Uruguay',
    flag: '🇺🇾',
    similarFlags: ['🇦🇷', '🇵🇾', '🇧🇷', '🇨🇴', '🇨🇱', '🇵🇪', '🇧🇴', '🇻🇪', '🇨🇭', '🇮🇹'],
  },
  {
    name: 'Uzbekistan',
    flag: '🇺🇿',
    similarFlags: ['🇹🇯', '🇹🇲', '🇰🇬', '🇦🇫', '🇮🇷', '🇵🇰', '🇮🇳', '🇨🇳', '🇷🇺', '🇹🇷'],
  },
  {
    name: 'Vanuatu',
    flag: '🇻🇺',
    similarFlags: ['🇵🇬', '🇸🇧', '🇫🇷', '🇳🇿', '🇵🇼', '🇹🇴', '🇫🇯', '🇨🇰', '🇼🇸', '🇹🇱'],
  },
  {
    name: 'Vatican City',
    flag: '🇻🇦',
    similarFlags: ['🇮🇹', '🇸🇲', '🇲🇨', '🇫🇷', '🇪🇸', '🇦🇩', '🇦🇹', '🇨🇭', '🇸🇮', '🇭🇷'],
  },
  {
    name: 'Venezuela',
    flag: '🇻🇪',
    similarFlags: ['🇨🇴', '🇧🇷', '🇵🇪', '🇨🇱', '🇦🇷', '🇨🇷', '🇵🇦', '🇨🇺', '🇲🇽', '🇵🇾'],
  },
  {
    name: 'Vietnam',
    flag: '🇻🇳',
    similarFlags: ['🇹🇭', '🇲🇾', '🇮🇩', '🇱🇦', '🇵🇭', '🇲🇲', '🇨🇳', '🇹🇼', '🇰🇭', '🇧🇩'],
  },
  {
    name: 'Wales',
    flag: '󠁧󠁢🏴󠁧󠁢󠁷󠁬󠁳󠁿',
    similarFlags: ['🇬🇧', '🏴󠁧󠁢󠁥󠁮󠁧󠁿', '🏴󠁧󠁢󠁳󠁣󠁴󠁿', '🇮🇪', '🇫🇷', '🇫🇯', '🇮🇹', '🇪🇸', '🇵🇹', '🇮🇸'],
  },
  {
    name: 'Western Sahara',
    flag: '󠁧󠁢🇪🇭',
    similarFlags: ['🇯🇴', '🇰🇼', '🇦🇪', '🇵🇸', '🇶🇦', '🇪🇬', '🇾🇪', '🇸🇾', '🇸🇩', '🇮🇶'],
  },
  {
    name: 'Yemen',
    flag: '🇾🇪',
    similarFlags: ['🇴🇲', '🇸🇦', '🇶🇦', '🇦🇪', '🇰🇼', '🇧🇭', '🇮🇶', '🇮🇷', '🇲🇦', '🇪🇬'],
  },
  {
    name: 'Zambia',
    flag: '🇿🇲',
    similarFlags: ['🇿🇼', '🇲🇼', '🇲🇿', '🇧🇼', '🇳🇦', '🇸🇿', '🇱🇸', '🇿🇦', '🇲🇦', '🇬🇭'],
  },
  {
    name: 'Zimbabwe',
    flag: '🇿🇼',
    similarFlags: ['🇿🇲', '🇲🇼', '🇲🇿', '🇧🇼', '🇳🇦', '🇸🇿', '🇱🇸', '🇿🇦', '🇲🇦', '🇬🇭'],
  },
];
