# MRQ Multitracks Play2 — projeto separado

Criado a pedido do usuário: dividir o app original (`mrq-multitracks-play`,
que **continua intocado** em `github.com/MQueirozair/mrq-multitracks-play`)
em 3 projetos independentes, cada um instalável/testável sozinho:

1. **MRQ Multitracks Play2** (este projeto) — o player de multitracks.
2. **MRQ Rack de Instrumentos** (`mrq-rack-instrumentos`) — o rack de
   instrumentos virtuais (SF2/NKI/EXS24/DX7/.mrq, efeitos, pads).
3. **MRQ Instrument Converter** (`mrq-instrument-converter`) — o
   conversor de formatos de instrumento pro formato `.mrq`.

## Estado atual

Isto é uma **cópia completa** do código do `mrq-multitracks-play` na
versão v0.2.48 (nenhum código removido ainda) — ponto de partida seguro
combinado com o usuário antes de começar a enxugar.

## Próximo passo (ainda não feito)

Remover do código/UI deste projeto tudo que pertence ao Rack de
Instrumentos e ao Conversor de Instrumentos (que vão virar os outros 2
projetos), deixando aqui só o player de multitracks em si, até ficar
100% funcional sozinho. Depois que os 3 projetos estiverem cada um 100%
funcionando de forma independente, o usuário pediu pra planejarmos juntar
os 3 de volta (como módulos/peças de um só produto, se der certo).
