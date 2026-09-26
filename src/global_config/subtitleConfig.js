/**
 * CONFIGURACAO CENTRALIZADA DE LEGENDAS
 *
 * Controla posicao e tamanho de fonte para 3 modalidades:
 * - preview: janela normal do editor
 * - fullscreen: modo tela cheia
 * - export: arquivo ASS exportado
 */


export const SUBTITLE_DISPLAY_DEFAULTS = {
  preview: {
    positionMode: 'fixed',
    positionFixed: 'bottom',
    positionPercent: 80,
    fontSize: 14,
  },
  fullscreen: {
    positionMode: 'fixed',
    positionFixed: 'bottom',
    positionPercent: 80,
    fontSize: 32,
  },
  export: {
    positionMode: 'fixed',
    positionFixed: 'bottom',
    positionPercent: 80,
  },
}

export const SUBTITLE_HIGHLIGHT_BOX = {
  borderRadiusRatio: 0.18,
  paddingXRatio: 0.16,
  paddingYRatio: 0.08,
}

// POPLINE: faixa FINA na base da palavra - "quase como uma linha" com
// cantos levemente arredondados (referencia: popline.png / popline.md),
// em vez de caixa envolvendo a palavra:
//   - largura exatamente a da palavra (paddingXRatio 0);
//   - topo da faixa = bandTopRatio x fonte ACIMA da baseline (so raspa
//     a base das letras, como na referencia);
//   - altura da faixa = bandHeightRatio x fonte;
//   - borderRadiusRatio e relativo a ALTURA da faixa (nao a fonte).
export const SUBTITLE_POPLINE_BOX = {
  paddingXRatio: 0,
  bandTopRatio: 0.03,
  bandHeightRatio: 0.27,
  borderRadiusRatio: 0.30,
}

export function getPreviewFontSize(baseFontSize, fullscreen = false) {
  const displayFontSize = fullscreen
    ? SUBTITLE_DISPLAY_DEFAULTS.fullscreen.fontSize
    : SUBTITLE_DISPLAY_DEFAULTS.preview.fontSize
  return Math.round((baseFontSize / 105) * displayFontSize)
}

export function getExportFontSize(baseFontSize, videoHeight) {
  const dimensionScale = Math.max(videoHeight / 1080, 0.5)
  return Math.round(baseFontSize * dimensionScale)
}
