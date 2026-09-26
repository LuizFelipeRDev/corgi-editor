/*
  Portugues — mesmas chaves de en.js (paridade checada em index.js).
  Os textos existentes do UI foram mantidos exatamente como estavam
  (inclusive a grafia sem acentos usada no app).
*/
export default {
  // --- Comum ---
  'common.save': 'SALVAR',
  'common.yes': 'SIM',
  'common.no': 'NAO',
  'common.close': 'FECHAR',
  'common.error': 'ERRO',

  // --- Abas do SettingsModal ---
  'tabs.system': 'Sistema',
  'tabs.general': 'Geral',
  'tabs.output': 'Saida',
  'tabs.subtitles': 'Legendas',

  // --- Aba Sistema ---
  'system.language': 'IDIOMA',
  'system.languageHint': 'Aplicado imediatamente e mantido ao fechar o aplicativo.',
  'system.theme': 'TEMA',
  'system.themeHint': 'Aparência da interface, aplicada imediatamente.',

  // --- Settings > Geral ---
  'settings.folderLabel': 'PASTA DE DESTINO',
  'settings.folderPlaceholder': 'Mesma pasta do arquivo',
  'settings.gpuLabel': 'GPU (NVIDIA)',
  'settings.gpuTooltip': 'Para placas de vídeo NVIDIA, a geração de legendas será mais rápida com CUDA instalado.',
  'settings.gpuInstalled': 'GPU instalada',
  'settings.reinstall': 'REINSTALAR',
  'settings.gpuNotInstalled': 'Nao instalado',
  'settings.downloadGpu': 'BAIXAR GPU (NVIDIA)',
  'settings.openDriversFolder': 'ABRIR PASTA DRIVERS',
  'settings.whisperModel': 'MODELO WHISPER',
  'settings.modelOption': '{label} ({size}) - GPU: {vram}',
  'settings.downloading': 'Baixando {model}...',
  'settings.modelNotDownloaded': 'Modelo nao baixado',
  'settings.downloadModelBtn': 'BAIXAR MODELO',
  'settings.modelInstalled': 'Modelo instalado',
  'settings.modelDesc.tiny': 'Rapido, qualidade basica',
  'settings.modelDesc.base': 'Melhor que tiny, ainda rapido',
  'settings.modelDesc.small': 'Bom equilibrio velocidade/qualidade',
  'settings.modelDesc.medium': 'Alta qualidade, mais lento',
  'settings.modelDesc.large-v3': 'Maxima qualidade, bem lento',

  // --- Settings > Saida ---
  'settings.formatLabel': 'FORMATO DE SAIDA',
  'settings.resolutionLabel': 'RESOLUCAO DE SAIDA',
  'settings.resOriginal': 'Original',
  'settings.resLandscape': 'Paisagem (16:9)',
  'settings.resPortrait': 'Retrato (9:16)',
  'settings.resOriginalDesc': 'Mesma resolucao do video de entrada',
  'settings.resLandscapeDesc': '1920x1080 - Formato 16:9 padrao',
  'settings.resPortraitDesc': '1080x1920 - Formato 9:16 para celular',
  'settings.auto': 'Auto',
  'settings.audioNoBurn': 'Formato atual ({format}) nao suporta legenda embarcada',

  // --- Settings > Legendas ---
  'settings.enableSubtitles': 'Ativar legendas',
  'settings.positionModeLabel': 'MODO DE POSICAO',
  'settings.posFixed': 'Posicao Pre-definida',
  'settings.posFree': 'Ajuste Livre',
  'settings.wordsPerLine': 'PALAVRAS POR LINHA',
  'settings.linesCount': 'LINHAS NA LEGENDA',
  'settings.persistence': 'PERSISTENCIA DA LEGENDA — {value}s',
  'settings.persistenceHint': 'Tempo que a legenda fica visivel entre frases',
  'settings.smartSubtitle': 'Legenda Inteligente',
  'settings.smartTooltip': 'Quebra automatica em pontuacao (. ! ?). Remove o ponto final, mantem ! e ?',
  'settings.burnSubtitles': 'Imbutir legenda no arquivo',
  'settings.burnTooltip': 'Anexa a legenda ao vídeo em vez de criar um arquivo SRT.',
  'settings.burnSrtOnly': 'Sera gerado apenas o arquivo .srt separado',
  'settings.requiresVideo': 'Requer formato de video (MP4, MKV, etc)',
  'settings.greenScreen': 'Criar video com fundo verde',
  'settings.greenScreenTooltip': 'Opcao disponivel apenas para entrada de audio',
  'settings.autoLineWrap': 'Quebra Automatica de Linha',
  'settings.autoLineWrapTooltip':
    'Marcado: se o texto nao couber na largura, quebra a linha e continua no mesmo grupo ate completar o numero de palavras. Desmarcado: o que nao cabe em uma linha vai para o proximo grupo de legenda.',
  'settings.inputDetected': 'Input detectado: audio - legendas serao criadas sobre fundo {bg}',
  'settings.bgGreen': 'verde',
  'settings.bgBlack': 'preto',

  // --- Confirmacoes (dialogo do SettingsModal) ---
  'settings.confirmBurn': 'Imbutir legenda requer saida em video. Trocar automaticamente para MP4?',
  'settings.confirmGreen': 'Video com fundo verde requer saida em video. Trocar automaticamente para MP4?',
  'settings.confirmAudioFormat': 'Formato de audio nao suporta legenda embarcada nem fundo verde. Desativar essas opcoes?',
  'settings.confirmSubtitles': 'Legendas embarcadas requerem saida em video. Trocar automaticamente para MP4?',
  'settings.confirmDownloadModel': 'Baixar modelo "{label}" ({size})?',

  // --- Painel de legendas ---
  'panel.title': 'LEGENDAS',
  'panel.style': 'Estilo',
  'panel.position': 'Posicao',
  'panel.bottom': 'BAIXO',
  'panel.top': 'TOPO',
  'panel.configBtn': 'CONFIGURACAO LEGENDA',
  'panel.selectFile': 'Selecione um arquivo para gerar legendas',
  'panel.noneGenerated': 'Nenhuma legenda gerada',
  'panel.generate': 'GERAR LEGENDAS',
  'panel.generating': 'Gerando legendas...',
  'panel.stop': 'PARAR',
  'panel.delete': 'EXCLUIR',
  'panel.add': '+ ADICIONAR LEGENDA',
  'panel.regenerate': 'REGERAR LEGENDA',
  'panel.regenerating': 'REGERANDO...',

  // --- Waveform (barra de transporte) ---
  'waveform.loading': 'Carregando...',
  'waveform.ready': 'Pronto',

  // --- Controls (export) ---
  'controls.minVolume': 'VOLUME MÍNIMO',
  'controls.margin': 'MARGEM',
  'controls.exportBtn': 'EXPORTAR',
  'controls.processing': 'PROCESSANDO...',

  // --- Barra inferior ---
  'bottombar.folder': 'PASTA:',
  'bottombar.sameAsFile': 'MESMA DO ARQUIVO',
  'bottombar.about': 'Sobre',
  'bottombar.openOutputFolder': 'Abrir pasta de destino',
  'bottombar.settings': 'Configurações',

  // --- App (erros / toast) ---
  'app.errGenerate': 'Erro ao gerar legendas',
  'app.errGenerateWhisper': 'Erro ao gerar legendas com whisper.cpp',
  'app.errRender': 'Erro ao renderizar legendas',
  'app.errUnknown': 'Erro desconhecido ao gerar legendas',
  'app.errModelNotInstalled':
    'O modelo "{model}" não está instalado.\n\nVá em Configurações (ícone de engrenagem) > Geral e baixe o modelo.',
  'app.exportToast': 'Exportacao concluida!',
  'app.openFolder': 'ABRIR PASTA',
}
