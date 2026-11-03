import { Library, ListMusic, LayoutGrid, AudioWaveform, Timer, FileText, Volume2, Hash, Mic, Piano, Settings, HelpCircle } from 'lucide-react';
import type { NavId } from '../state/useStore';
import { useStore } from '../state/useStore';

// Projeto separado "MRQ Multitracks Play2" (ver PROJETO-SEPARADO.md): os
// itens de nav "rack" (Rack de instrumentos) e "converter" (Conversor de
// instrumentos) foram removidos daqui de propósito — viraram os projetos
// independentes mrq-rack-instrumentos e mrq-instrument-converter.
const ITEMS: { id: NavId; icon: typeof Library; label: string }[] = [
  { id: 'library', icon: Library, label: 'Biblioteca' },
  { id: 'setlist', icon: ListMusic, label: 'Lista' },
  { id: 'arrange', icon: LayoutGrid, label: 'Arranjar' },
  { id: 'tracks', icon: AudioWaveform, label: 'Faixas' },
  { id: 'tempo', icon: Timer, label: 'Tempo' },
  { id: 'chord', icon: FileText, label: 'Cifra' },
  { id: 'outputs', icon: Volume2, label: 'Saídas' },
  { id: 'key', icon: Hash, label: 'Tom' },
  { id: 'guide', icon: Mic, label: 'Voz guia' },
  { id: 'midi', icon: Piano, label: 'MIDI' },
];

export default function IconRail({ onOpenSettings }: { onOpenSettings: () => void }) {
  const nav = useStore((s) => s.nav);
  const setNav = useStore((s) => s.setNav);
  const items = ITEMS;

  return (
    <div className="rail">
      {items.map((item) => (
        <button
          key={item.id}
          className={`rail-btn ${nav === item.id ? 'active' : ''}`}
          title={item.label}
          onClick={() => setNav(item.id)}
        >
          <item.icon size={19} strokeWidth={2} />
        </button>
      ))}
      <div className="rail-spacer" />
      <button
        className={`rail-btn ${nav === 'help' ? 'active' : ''}`}
        title="Ajuda / Sobre o MRQ"
        onClick={() => setNav('help')}
      >
        <HelpCircle size={19} strokeWidth={2} />
      </button>
      <button className="rail-btn" title="Configurações" onClick={onOpenSettings}>
        <Settings size={19} strokeWidth={2} />
      </button>
    </div>
  );
}
