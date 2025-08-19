enum LanguageMap {
  json = 'Json',
  js = 'JavaScript',
  ts = 'TypeScript',
  html = 'HTML',
  css = 'CSS',
  vue = 'Vue',
  sh = 'Shell',
  mdc = 'MDC',
  md = 'Markdown',
  yaml = 'YAML',
}

export const useLanguageIcon = (extName: string): string => {
  if (!(extName in LanguageMap)) {
    return `i-ri-file-unknow-line`    
  }
  if ('mdc' === extName) {
    extName = 'md'
  }
  return `i-catppuccin-${LanguageMap[extName as keyof typeof LanguageMap].toLowerCase()}`
}
