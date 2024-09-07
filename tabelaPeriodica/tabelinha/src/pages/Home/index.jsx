import Container from '../../components/Container';
import styles from './Home.module.css';
export default function Home() {
  return (
    <Container>
      <div className={styles.content}>
        <h1>A importância da Química nos dias atuais</h1>
        <p>
          A Química é uma ciência fundamental no mundo moderno, desempenhando um
          papel crucial em diversas áreas que impactam diretamente o nosso dia a
          dia e o desenvolvimento sustentável da sociedade. Sua influência é
          vasta e abrange desde a medicina até a tecnologia, passando pelo meio
          ambiente, indústria e alimentação.
        </p>

        <div className={styles.topic}>
          <p>
            Na <strong>medicina</strong>, a Química é essencial para o
            desenvolvimento de medicamentos, vacinas e tratamentos que salvam
            vidas. Ela permite a compreensão dos processos biológicos no nível
            molecular, possibilitando a criação de terapias mais eficazes e
            personalizadas. Além disso, a Química contribui para a inovação em
            diagnósticos, como a criação de exames que detectam doenças
            precocemente, aumentando as chances de cura.
          </p>{' '}
          <img
            src='https://crmvsp.gov.br/wp-content/uploads/2022/06/06.06.2022_Justica_exige_RT_medico-veterinario_em_estabelecimento_que_comercialize_vacinas_para_animais_Freepik_1-1024x683.jpg'
            alt='Imagem de vacina'
          />
        </div>

        <div className={styles.topic}>
          <p>
            No campo da <strong>tecnologia</strong>, a Química é o alicerce para
            o desenvolvimento de novos materiais, como semicondutores, polímeros
            e nanomateriais, que revolucionam a fabricação de dispositivos
            eletrônicos, desde smartphones até equipamentos médicos avançados. A
            pesquisa em Química de materiais também impulsiona a inovação em
            energia, como o desenvolvimento de baterias mais eficientes e
            duradouras.
          </p>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKDxajTkofK3yf6jtGfLcYFPhLbQwLJ6I0EA&s'
            alt='semicondutor'
          />
        </div>
        <div className={styles.topic}>
          <p>
            A <strong>preservação do meio ambiente</strong> também depende da
            Química. Essa ciência nos ajuda a entender e mitigar os impactos das
            atividades humanas no planeta, seja através da criação de
            tecnologias para a purificação da água, tratamento de resíduos ou
            desenvolvimento de combustíveis mais limpos.
          </p>
          <img
            src='https://www.uninter.com/noticias/wp-content/uploads/2021/09/noticias_trees-3822149_1920-1024x682.jpg'
            alt='Árvore'
          />
        </div>
        <div className={styles.topic}>
          <p>
            Na <strong>indústria</strong>, a Química é a base de inúmeros
            processos produtivos, desde a fabricação de plásticos até a síntese
            de produtos químicos utilizados em larga escala, como fertilizantes
            e produtos de limpeza. A inovação química permite a criação de
            materiais mais resistentes, leves e sustentáveis, que são aplicados
            em diversos setores, como construção civil, automotivo e têxtil.
          </p>
          <img
            src='https://triwi.com.br/wp-content/uploads/TRIWI-Marketing-Digital-B2B-Dicas-para-a-indu%CC%81stria-do-pla%CC%81stico.jpg'
            alt='industria produzindo plástico'
          />
        </div>
        <div className={styles.topic}>
          <p>
            Por fim, na <strong>alimentação</strong>, a Química está presente na
            segurança e qualidade dos alimentos. Ela é responsável pelo
            desenvolvimento de conservantes, aditivos e embalagens que prolongam
            a vida útil dos produtos, garantindo que cheguem ao consumidor em
            condições adequadas. Além disso, a Química é fundamental na
            compreensão dos processos de nutrição que promovem a saúde e o
            bem-estar.
          </p>
          <img
            src='https://i.ytimg.com/vi/9HC_us1afeE/maxresdefault.jpg'
            alt='tomates'
          />
        </div>

        <p>
          Em resumo, a Química é uma ciência vital para o progresso da
          humanidade. Seu impacto se faz sentir em todos os aspectos da vida
          moderna, promovendo a saúde, a inovação tecnológica, a proteção
          ambiental e a produção industrial de forma sustentável. Para alcançar
          um futuro mais sustentável e próspero, é essencial que continuemos a
          investir em pesquisas e aplicações químicas que beneficiem tanto a
          sociedade quanto o planeta.
        </p>
      </div>
    </Container>
  );
}
