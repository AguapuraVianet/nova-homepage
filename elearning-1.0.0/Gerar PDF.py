from fpdf import FPDF

titulo = "Medição de Cloro: Sensores Industriais e Alternativas com Eletrônica Digital"

conteudo = """
1. Sensores Industriais Endress+Hauser

1.1 Memosens CCS51E – Sensor de Cloro Livre
- Tipo: Amperométrico com membrana
- Mede: Cloro livre (HOCl)
- Princípio: Redução eletroquímica do cloro no cátodo; corrente gerada é proporcional à concentração de cloro.
- Vantagens: Rápido (t90 < 25s), sem reagentes, baixa manutenção.

1.2 Memosens CCS53E – Sensor de Cloro Total
- Tipo: Amperométrico direto
- Mede: Cloro total (livre + cloraminas)
- Princípio: Redução de todos os componentes do cloro no eletrodo de trabalho.
- Vantagens: Pouca influência do pH, mede de 0 a 20 mg/L, alta estabilidade.

Resumo Comparativo:
| Sensor     | Tipo de Cloro    | Método de Medição | Características |
|------------|------------------|-------------------|------------------|
| CCS51E     | Cloro livre      | Amperométrico     | Redução no cátodo; rápido |
| CCS53E     | Cloro total      | Amperométrico     | Quase independente do pH  |

2. Alternativas com Eletrônica Digital

2.1 Amperometria DIY
- Requer eletrodos, amplificador de corrente e microcontrolador.
- Princípio similar ao CCS51E/CCS53E.
- Vantagens: Medição contínua.
- Desvantagens: Sensível a pH, difícil de montar, precisa de eletrólito.

2.2 Colorimetria com Sensor RGB
- Usa reagente DPD + sensor óptico (ex. TCS34725).
- Mede a cor da reação química para estimar o cloro.
- Vantagens: Simples, barata, boa precisão.
- Desvantagens: Não contínuo, precisa de reagente.

2.3 Sensores Comerciais (DFRobot)
- Exemplo: Gravity Analog Chlorine Sensor.
- Compatível com Arduino, medição em tempo real.
- Precisão razoável para fins não industriais.

Conclusão:
| Método                         | Contínuo | Fácil de montar | Custo | Precisão |
|-------------------------------|----------|------------------|-------|----------|
| Amperométrico DIY             | Sim      | Difícil          | Médio | Média    |
| Colorimetria + RGB            | Não      | Fácil            | Baixo | Boa      |
| Sensor comercial (DFRobot)    | Sim      | Fácil            | Médio | Razoável |
"""

pdf = FPDF()
pdf.add_page()
pdf.set_font("Arial", 'B', 16)
pdf.multi_cell(0, 10, titulo)

pdf.set_font("Arial", size=11)
pdf.multi_cell(0, 8, conteudo)

pdf.output("Medição_de_Cloro_Sensores_e_Eletrônica_Digital.pdf")
