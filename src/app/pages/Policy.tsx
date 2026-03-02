interface Policy {
  onNavigate: (page: string, sectionId?: string) => void;
}

export function Policy ({ onNavigate }: Policy) {
  return (
    <div className="min-h-screen bg-white">
      {/* Article Hero Section */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            
            <h1 className="font-['Varela_Round'] text-4xl md:text-5xl text-[#1a2e4a] ">
              POLÍTICA DE PRIVACIDADE
            </h1>
            
            <p className="font-['Quicksand'] text-xl text-gray-600 ">
              Procopio e Borowiec Consultoria e Serviços em RH LTDA
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-2">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-2">
            <article className="max-w-3xl">
              <div className="mb-2">
                <p className="font-['Quicksand'] text-gray-700 leading-relaxed">
                  CNPJ: 40.273.975/0001-08
                </p>
                <p className="font-['Quicksand'] text-gray-700 leading-relaxed">
                  Mogi das Cruzes – SP
                </p>
                <p className="font-['Quicksand'] text-gray-700 leading-relaxed">
                  E-mail para contato: contato@withconsultoria.com
                </p>
                <p className="font-['Quicksand'] text-gray-700 leading-relaxed">
                  Última atualização: 25 de fevereiro de 2026
                </p>              
              </div>

              <div className="mb-12">
                <hr className="  border: none;  height: 1px;  background-color: #444; margin: 30px 0; mb-6"></hr>
                <h2 className="font-['Varela_Round'] text-3xl text-[#1a2e4a] mb-4">
                  1. CONTROLADOR
                </h2>
                <p className="font-['Quicksand'] text-gray-700 leading-relaxed mb-6">
                  A Procopio e Borowiec Consultoria e Serviços em RH LTDA atua como Controladora dos dados pessoais tratados por meio deste site, nos termos da Lei nº 13.709/2018 (Lei Geral de Proteção de Dados – LGPD).
                </p>
               
                <hr className="  border: none;  height: 1px;  background-color: #444; margin: 30px 0; mb-6"></hr>
                <h2 className="font-['Varela_Round'] text-3xl text-[#1a2e4a] mb-4">
                  2. DADOS PESSOAIS TRATADOS
                </h2>
                <h3 className="font-['Varela_Round'] text-3xl text-[#1a2e4a] mb-4">
                  2.1 Dados fornecidos diretamente pelo titular
                </h3>
                <ul className="font-['Quicksand'] text-gray-700 space-y-2 mb-6 pl-6">
                  <li className="flex items-start">
                    <span className="text-[#1fa6a8] mr-2">•</span>
                    <span>Nome completo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1fa6a8] mr-2">•</span>
                    <span>E-mail</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1fa6a8] mr-2">•</span>
                    <span>Telefone/WhatsApp</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1fa6a8] mr-2">•</span>
                    <span>Cargo atual</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1fa6a8] mr-2">•</span>
                    <span>Empresa atual</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1fa6a8] mr-2">•</span>
                    <span>Perfil do LinkedIn</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1fa6a8] mr-2">•</span>
                    <span>Currículo em PDF</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#1fa6a8] mr-2">•</span>
                    <span>Pretensão salarial</span>
                  </li>
                </ul>
                
                <h3 className="font-['Varela_Round'] text-3xl text-[#1a2e4a] mb-6">
                  2.2 Dados pessoais sensíveis
                </h3>
                <p className="font-['Quicksand'] text-gray-700 leading-relaxed mb-6">
                  Quando contratado pacote que envolva inscrição em vagas, poderão ser tratados dados pessoais sensíveis, como informações sobre deficiência, gênero ou raça, exclusivamente para fins de recrutamento e encaminhamento profissional.
                </p>
                
                <hr className="  border: none;  height: 1px;  background-color: #444; margin: 30px 0; mb-6"></hr>
                <h2 className="font-['Varela_Round'] text-3xl text-[#1a2e4a] mb-4">
                  3. FINALIDADES DO TRATAMENTO
                </h2>
                <p className="font-['Quicksand'] text-gray-700 leading-relaxed mb-6">
                  Os dados pessoais são tratados para:
                </p>
                  <ul className="font-['Quicksand'] text-gray-700 space-y-2 mb-6 pl-6">
                    <li className="flex items-start">
                      <span className="text-[#1fa6a8] mr-2">•</span>
                      <span>Prestação de serviços de consultoria de carreira</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1fa6a8] mr-2">•</span>
                      <span>Execução de contrato e procedimentos preliminares</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1fa6a8] mr-2">•</span>
                      <span>Inscrição e encaminhamento para processos seletivos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1fa6a8] mr-2">•</span>
                      <span>Processamento de pagamentos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1fa6a8] mr-2">•</span>
                      <span>Cumprimento de obrigações legais e fiscais</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1fa6a8] mr-2">•</span>
                      <span>Exercício regular de direitos em processos administrativos ou judiciais</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1fa6a8] mr-2">•</span>
                      <span>Análise de métricas e desempenho de campanhas</span>
                    </li>
                  </ul>
               
                <hr className="  border: none;  height: 1px;  background-color: #444; margin: 30px 0; mb-6"></hr>
                <h2 className="font-['Varela_Round'] text-3xl text-[#1a2e4a] mb-4">
                  4. BASES LEGAIS
                </h2>
                <p className="font-['Quicksand'] text-gray-700 leading-relaxed mb-6">
                  O tratamento ocorre com fundamento nos seguintes dispositivos da LGPD:
                </p>
                  <ul className="font-['Quicksand'] text-gray-700 space-y-2 mb-6 pl-6">
                    <li className="flex items-start">
                      <span className="text-[#1fa6a8] mr-2">•</span>
                      <span>Art. 7º, V – Execução de contrato</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1fa6a8] mr-2">•</span>
                      <span>Art. 7º, IX – Legítimo interesse</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1fa6a8] mr-2">•</span>
                      <span>Art. 7º, II – Cumprimento de obrigação legal</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1fa6a8] mr-2">•</span>
                      <span>Art. 11, I – Consentimento específico para tratamento de dados sensíveis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1fa6a8] mr-2">•</span>
                      <span>Art. 11, II, “a” – Cumprimento de obrigação legal ou regulatória</span>
                    </li>
                  </ul>
                <p className="font-['Quicksand'] text-gray-700 leading-relaxed mb-6">
                  Observação importante: dados sensíveis somente são tratados quando estritamente necessários para fins de recrutamento e mediante consentimento específico.
                </p>
                
                <hr className="  border: none;  height: 1px;  background-color: #444; margin: 30px 0; mb-6"></hr>
                <h2 className="font-['Varela_Round'] text-3xl text-[#1a2e4a] mb-4">
                  5. COMPARTILHAMENTO DE DADOS
                </h2>
                <p className="font-['Quicksand'] text-gray-700 leading-relaxed mb-6">
                  Os dados poderão ser compartilhados com:
                </p>
                  <ul className="font-['Quicksand'] text-gray-700 space-y-2 mb-6 pl-6">
                    <li className="flex items-start">
                      <span className="text-[#1fa6a8] mr-2">•</span>
                      <span>Plataformas de pagamento (Asaas e Green)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1fa6a8] mr-2">•</span>
                      <span>CRM (Clint e MKTzap)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1fa6a8] mr-2">•</span>
                      <span>Plataforma de automação de marketing (ActiveCampaign)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1fa6a8] mr-2">•</span>
                      <span>Plataformas de anúncios (Meta e Google)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1fa6a8] mr-2">•</span>
                      <span>Provedores de armazenamento em nuvem</span>
                    </li>
                  </ul>

                <hr className="  border: none;  height: 1px;  background-color: #444; margin: 30px 0; mb-6"></hr>
                <h2 className="font-['Varela_Round'] text-3xl text-[#1a2e4a] mb-4">
                  6. TRANSFERÊNCIA INTERNACIONAL DE DADOS
                </h2>
                <p className="font-['Quicksand'] text-gray-700 leading-relaxed mb-6">
                  Algumas ferramentas utilizadas, como a ActiveCampaign, podem realizar armazenamento ou processamento de dados em servidores localizados fora do Brasil
                </p>
                <p className="font-['Quicksand'] text-gray-700 leading-relaxed mb-6">
                  Nesses casos, a empresa adota mecanismos contratuais e salvaguardas adequadas para garantir o cumprimento da LGPD e a proteção dos dados pessoais.
                </p>

                <hr className="  border: none;  height: 1px;  background-color: #444; margin: 30px 0; mb-6"></hr>
                <h2 className="font-['Varela_Round'] text-3xl text-[#1a2e4a] mb-4">
                  7. RETENÇÃO E ARMAZENAMENTO
                </h2>
                <p className="font-['Quicksand'] text-gray-700 leading-relaxed mb-6">
                  Os dados pessoais serão armazenados observando os seguintes critérios:
                </p>
                  <ul className="font-['Quicksand'] text-gray-700 space-y-2 mb-6 pl-6">
                    <li className="flex items-start">
                      <span className="text-[#1fa6a8] mr-2">•</span>
                      <span>Leads inativos: até 5 (cinco) anos a partir do último contato registrado;</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1fa6a8] mr-2">•</span>
                      <span>Clientes ativos: durante a vigência contratual;</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1fa6a8] mr-2">•</span>
                      <span>Ex-clientes: até 5 (cinco) anos após o término da relação contratual, para resguardo de direitos e cumprimento de obrigações legais.</span>
                    </li>
                  </ul>
                <p className="font-['Quicksand'] text-gray-700 leading-relaxed mb-6">
                  Após esses prazos, os dados poderão ser eliminados ou anonimizados, salvo obrigação legal que exija retenção por período superior.
                </p>
                
                <hr className="  border: none;  height: 1px;  background-color: #444; margin: 30px 0; mb-6"></hr>
                <h2 className="font-['Varela_Round'] text-3xl text-[#1a2e4a] mb-4">
                  8. SEGURANÇA DA INFORMAÇÃO
                </h2>
                <p className="font-['Quicksand'] text-gray-700 leading-relaxed mb-6">
                  São adotadas medidas técnicas e administrativas adequadas, incluindo:
                </p>
                  <ul className="font-['Quicksand'] text-gray-700 space-y-2 mb-6 pl-6">
                    <li className="flex items-start">
                      <span className="text-[#1fa6a8] mr-2">•</span>
                      <span>Controle restrito de acesso aos dados</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1fa6a8] mr-2">•</span>
                      <span>Uso de autenticação em dois fatores</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1fa6a8] mr-2">•</span>
                      <span>Armazenamento em plataformas com padrão de segurança reconhecido</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1fa6a8] mr-2">•</span>
                      <span>Backup periódico realizado a cada 6 (seis) meses</span>
                    </li>
                  </ul>
                
                <hr className="  border: none;  height: 1px;  background-color: #444; margin: 30px 0; mb-6"></hr>
                <h2 className="font-['Varela_Round'] text-3xl text-[#1a2e4a] mb-4">
                  9. COOKIES E TECNOLOGIAS DE RASTREAMENTO
                </h2>
                <p className="font-['Quicksand'] text-gray-700 leading-relaxed mb-6">
                  O site poderá utilizar cookies e tecnologias similares para:
                </p>
                  <ul className="font-['Quicksand'] text-gray-700 space-y-2 mb-6 pl-6">
                    <li className="flex items-start">
                      <span className="text-[#1fa6a8] mr-2">•</span>
                      <span>Funcionamento adequado da plataforma</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1fa6a8] mr-2">•</span>
                      <span>Análise de métricas de acesso</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1fa6a8] mr-2">•</span>
                      <span>Otimização de campanhas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1fa6a8] mr-2">•</span>
                      <span>Backup periódico realizado a cada 6 (seis) meses</span>
                    </li>
                  </ul>
                <p className="font-['Quicksand'] text-gray-700 leading-relaxed mb-6">
                  Caso sejam utilizados cookies não essenciais (como analytics ou marketing), será disponibilizado mecanismo de consentimento por meio de banner informativo.
                </p>
                <p className="font-['Quicksand'] text-gray-700 leading-relaxed mb-6">
                  O usuário poderá configurar seu navegador para bloquear ou excluir cookies a qualquer momento.
                </p>

                <hr className="  border: none;  height: 1px;  background-color: #444; margin: 30px 0; mb-6"></hr>
                <h2 className="font-['Varela_Round'] text-3xl text-[#1a2e4a] mb-4">
                  10. DIREITOS DO TITULAR
                </h2>
                <p className="font-['Quicksand'] text-gray-700 leading-relaxed mb-6">
                  Nos termos do art. 18 da LGPD, o titular poderá solicitar:
                </p>
                  <ul className="font-['Quicksand'] text-gray-700 space-y-2 mb-6 pl-6">
                    <li className="flex items-start">
                      <span className="text-[#1fa6a8] mr-2">•</span>
                      <span>Confirmação da existência de tratamento</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1fa6a8] mr-2">•</span>
                      <span>Acesso aos dados</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1fa6a8] mr-2">•</span>
                      <span>Correção</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1fa6a8] mr-2">•</span>
                      <span>Anonimização ou eliminação</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1fa6a8] mr-2">•</span>
                      <span>Portabilidade</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1fa6a8] mr-2">•</span>
                      <span>Informação sobre compartilhamentos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1fa6a8] mr-2">•</span>
                      <span>Revogação de consentimento</span>
                    </li>
                  </ul>
                <p className="font-['Quicksand'] text-gray-700 leading-relaxed mb-6">
                  Solicitações devem ser encaminhadas para: contato@withconsultoria.com
                </p>
                
                <hr className="  border: none;  height: 1px;  background-color: #444; margin: 30px 0; mb-6"></hr>
                <h2 className="font-['Varela_Round'] text-3xl text-[#1a2e4a] mb-4">
                  11. DADOS DE MENORES
                </h2>
                <p className="font-['Quicksand'] text-gray-700 leading-relaxed mb-6">
                  A empresa não direciona seus serviços a menores de 18 anos e não realiza tratamento intencional de dados de crianças ou adolescentes.
                </p>

                <hr className="  border: none;  height: 1px;  background-color: #444; margin: 30px 0; mb-6"></hr>
                <h2 className="font-['Varela_Round'] text-3xl text-[#1a2e4a] mb-4">
                  12. ATUALIZAÇÕES DESTA POLÍTICA
                </h2>
                <p className="font-['Quicksand'] text-gray-700 leading-relaxed mb-6">
                  Esta Política poderá ser atualizada periodicamente para refletir alterações legais ou operacionais.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
