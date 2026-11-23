/* Clique Certo · CONFIGURAÇÃO ÚNICA (usada pelo app, pelo portal e pela verificação de certificados)
   Para mudar o endereço público, o domínio próprio ou as chaves do App Check, altere SÓ este arquivo
   e publique-o junto com os .html. */
window.CC_CONFIG={
  // Endereço público de cada ambiente: links das empresas, "CSV para o RH" e verificação dos certificados.
  // Quando o domínio próprio estiver ativo, troque prod para 'https://cliquecerto.ativait.com.br/'.
  urlBase:{
    prod:'https://henriquedonon.github.io/Clique-Certo/',
    staging:'https://henriquedonon.github.io/Clique-Certo-staging/'
  },
  // Domínio próprio da produção (vazio até o DNS e o GitHub Pages estarem prontos). Ex.: 'cliquecerto.ativait.com.br'
  dominioProd:'',
  // Endereço oficial citado no modelo de e-mail para o RH (vazio = o trecho não aparece). Ex.: 'cliquecerto.ativait.com.br'
  dominioOficial:'',
  // Chaves do SITE do reCAPTCHA v3 (App Check). Vazio = App Check desligado.
  appCheck:{prod:'',staging:''}
};
/* Ambiente: produção pelo domínio próprio ou pelo caminho /Clique-Certo/ no GitHub Pages; o resto é staging. */
window.CC_ENV=(function(){var c=window.CC_CONFIG,h=location.hostname,p=location.pathname;
  if(c.dominioProd&&h===c.dominioProd)return 'prod';
  if(/github\.io$/.test(h)&&/^\/Clique-Certo\/([^\/]*\.html)?$/i.test(p))return 'prod';
  return 'staging';})();
/* Endereço base (termina em "/"). Fora do GitHub Pages/domínio próprio (teste local) usa o próprio endereço. */
window.CC_URL=function(){var c=window.CC_CONFIG,h=location.hostname;
  if(/github\.io$/.test(h)||(c.dominioProd&&h===c.dominioProd))return c.urlBase[window.CC_ENV];
  return location.origin+location.pathname.replace(/[^\/]*$/,'');};
