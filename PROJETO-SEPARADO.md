# MRQ Multitracks Play2 — projeto separado

Criado a pedido do usuário: dividir o app original (`mrq-multitracks-play`,
que **continua intocado** em `github.com/MQueirozair/mrq-multitracks-play`)
em 3 projetos independentes, cada um instalável/testável sozinho:

1. **MRQ Multitracks Play2** (este projeto) — o player de multitracks.
2. **MRQ Rack de Instrumentos** (`mrq-rack-instrumentos`) — o rack de
   instrumentos virtuais (SF2/NKI/EXS24/DX7/.mrq, efeitos, pads).
3. **MRQ Instrument Converter** (`mrq-instrument-converter`) — o
   conversor de formatos de instrumento pro formato próprio `.mrq`.

Este é o projeto que recebe o trabalho CONTÍNUO no player de multitracks
daqui pra frente — o original `mrq-multitracks-play` foi explicitamente
deixado intocado a pedido do usuário ("não mecha no projeto que é MRQ
Multitracks Play pois se der errado ele está aí").

## Estado atual (ENXUGADO ✅)

Este projeto manteve TODO o player de multitracks como estava — a
navegação principal (Biblioteca, Lista, Arranjar, Faixas, Tempo, Cifra,
Saídas, Tom, Voz guia, MIDI) e todas as telas do player continuam iguais.
O que foi removido foi só o que virou os OUTROS dois projetos:

- `src/App.tsx` / `src/components/IconRail.tsx`: removidos os itens de
  navegação "Rack de instrumentos" e "Conversor de instrumentos" e os
  `import`/branches de `InstrumentRack`/`InstrumentConverter`.
- Removidos de `src/components/`: `InstrumentRack.tsx`,
  `InstrumentConverter.tsx`, `MrqInstrumentAnalyzer.tsx`,
  `MappingEditor.tsx`, `KontaktCaptureDialog.tsx`, `RackFxModule.tsx`,
  `RackKnob.tsx`, `RackEqGraph.tsx` (exclusivos do Rack/Conversor, que já
  viraram projetos próprios).
- Removido o harness de pré-visualização do Conversor (`src/devPreview/`,
  `dev-preview.html`, `vite.preview.config.ts`, script `dev:preview`) —
  específico do outro projeto.
- **Mantidos**: todo o resto do player (`PlayerShell`, `ArrangeEditor`,
  `TracksView`, `TransportBar`, `WaveformCanvas`, `MixerStrip`,
  `ChordView`, `ChordIndicator`, `CountInOverlay`, `NextSongPreview`,
  `PartsGrid`, `SongHeader`, `SongNotes`, `TeleprompterOverlay`,
  `TransitionBanner`, `VisualMetronome`, `SetlistPanel`, `LibraryPanel`,
  `TempoPanel`, `OutputsPanel`, `KeyPanel`, `GuideVoicePanel`,
  `MidiPanel`, `MidiBridge`, `AudioWatchdog`, `PadWidget`, `TitleBar`,
  `RackMidiPanel` [usado pela TitleBar], `SessionTimer`,
  `AudioHealthIndicator`, `SettingsModal`, `HelpPanel`, `ErrorBoundary`).
- `src/audio/` e `src/midi/` **não foram tocados** (igual aos outros 2
  projetos): o motor de reprodução de multitracks e os módulos de
  formato de instrumento (usados pelo Rack/Conversor) continuam todos
  aqui — deduplicar entre os 3 projetos é tarefa de quando forem
  reunidos, não antes.
- Branding corrigido: `package.json` (`productName`, `description`,
  `appId` → `com.mrq.multitracksplay2`), `src-tauri/tauri.conf.json`
  (título da janela + endpoint/chave do auto-updater), `index.html`
  (`<title>`) — tudo agora diz "MRQ Multitracks Play2".
- **Chave de assinatura própria**: gerei um par de chaves Tauri novo
  (exclusivo deste projeto, não o do app original) e cadastrei a privada
  como secret do GitHub Actions deste repo (`TAURI_SIGNING_PRIVATE_KEY` /
  `TAURI_SIGNING_PRIVATE_KEY_PASSWORD`). O endpoint do updater em
  `tauri.conf.json` também foi corrigido pra apontar pra este repo.

### Verificação feita (sem compilar nativo nesta sandbox)

- `npx tsc -b --noEmit` → limpo, sem erros.
- `npm run build:renderer` → build limpo, ~670 KB de JS.
- Testes automatizados, todos passando: `test:parts`, `test:syx`,
  `test:nki`, `test:exs`, `test:mrq-rack`, `test:sf2-sanitize`,
  `test:kontakt-capture`.
- Smoke-test visual via `vite dev` (preview ao vivo) → app abre, título
  certo, sem crash.
- **Não** foi tentado build nativo Tauri/Rust nesta sandbox (sem
  `cargo`/`rustc`/`webkit2gtk` instalados). A verificação definitiva do
  instalador real (Windows/macOS/Linux) depende do GitHub Actions deste
  repo, que agora já tem a chave de assinatura própria cadastrada.

## Próximos passos

Com os 3 projetos agora cada um enxugado pro seu próprio propósito e
verificados até onde dá nesta sandbox (tsc + vite build + testes
automatizados + smoke-test visual), o próximo passo é deixar o GitHub
Actions de cada repo gerar os instaladores reais (Windows/macOS/Linux) e
testar cada um fisicamente. Depois que os 3 estiverem cada um 100%
funcionando de forma independente, o usuário pediu pra planejarmos
juntar os 3 de volta (como módulos/peças de um só produto, se der certo).
