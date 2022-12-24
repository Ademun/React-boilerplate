type Mode = {
  id: number;
  name: string;
  translator: string
  port: number;
  status: 'online' | 'disabled';
};
const modes: Mode[] = [
  {
    id: 1,
    name: 'Attack',
    translator: 'atk_text',
    port: 1500,
    status: 'online',
  },
  {
    id: 2,
    name: 'Sandbox',
    translator: 'snd_text',
    port: 2000,
    status: 'online',
  },
  {
    id: 3,
    name: 'Survival',
    translator: 'sv_text',
    port: 3000,
    status: 'online',
  },
  {
    id: 4,
    name: 'Pvp',
    translator: 'pvp_text',
    port: 4000,
    status: 'online',
  },
  {
    id: 5,
    name: 'Castle Wars',
    translator: 'cw_text',
    port: 5000,
    status: 'online',
  },
  {
    id: 6,
    name: 'Hexed Pvp',
    translator: 'hx_text',
    port: 6000,
    status: 'online',
  },
  {
    id: 7,
    name: 'Tower Defense',
    translator: 'td_text',
    port: 7000,
    status: 'online',
  },
  {
    id: 8,
    name: 'Crawler Arena',
    translator: 'cr_text',
    port: 8000,
    status: 'online',
  },
];

export { modes };
export type { Mode };
