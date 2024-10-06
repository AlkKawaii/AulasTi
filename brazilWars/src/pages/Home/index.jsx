import styles from './Home.module.css';
import db from '../../assets/db/wars.json';

export default function Home({}) {
  return (
    <>
      <h1 className={styles.title}>
        Sobre a importância do conhecimento das guerras
      </h1>
      <div className={styles.container}>
        <p className={styles.paragraph}>
          Saber sobre as guerras do Brasil é fundamental para compreender
          diversos aspectos da formação e da identidade do país. Esses conflitos
          moldaram tanto o território nacional quanto a estrutura política,
          econômica e social ao longo dos séculos. Além disso, conhecer essas
          guerras permite refletir sobre os erros e acertos do passado, ajudando
          a evitar a repetição de tragédias e contribuindo para a construção de
          um futuro mais pacífico. O estudo das guerras brasileiras revela as
          dinâmicas de poder que influenciaram a consolidação do país e a
          formação de suas fronteiras, permitindo uma visão mais ampla do
          desenvolvimento histórico do Brasil.
        </p>

        <img
          src={db[Math.floor(Math.random() * 10)].image}
          alt='imagem guerra'
          className={styles.image}
        />
      </div>
      <div className={styles.container}>
        <p className={styles.paragraph}>
          As guerras internas, como a Guerra de Canudos e a Revolução
          Farroupilha, são essenciais para entender as desigualdades regionais,
          as tensões sociais e a resistência de movimentos populares ao poder
          central. Conflitos como esses mostram como o Brasil, desde sua
          formação, enfrenta desafios relacionados à concentração de poder e à
          distribuição desigual de recursos. Essas lutas refletem a insatisfação
          de diferentes grupos com as políticas governamentais, o que nos ajuda
          a compreender como tais questões ainda reverberam no cenário atual, em
          temas como exclusão social, marginalização de regiões e a busca por
          maior equidade.
        </p>
      </div>
      <div className={styles.container}>
        <p className={styles.paragraph}>
          Já os conflitos externos, como a Guerra do Paraguai, mostraram a
          importância das alianças regionais e deixaram profundas marcas no
          relacionamento do Brasil com seus vizinhos na América do Sul. A Guerra
          do Paraguai, em particular, teve um impacto duradouro na geopolítica
          sul-americana, influenciando a distribuição de poder na região e
          redefinindo as relações diplomáticas entre os países. Além disso, esse
          conflito permitiu que o Brasil consolidasse sua posição como uma
          potência regional, ao mesmo tempo em que expôs as vulnerabilidades
          econômicas e sociais do país, especialmente no tocante ao sistema
          escravocrata, que começou a ser questionado mais fortemente após o fim
          da guerra.
        </p>
        <img
          src={db[Math.floor(Math.random() * 10)].image}
          alt='imagem guerra'
          className={styles.image}
        />
      </div>
      <div className={styles.container}>
        <p className={styles.paragraph}>
          Esses eventos históricos também influenciaram a organização das Forças
          Armadas e a estruturação do Estado brasileiro. As guerras contribuíram
          para a formação de uma identidade militar e de uma cultura de defesa
          nacional, que influenciam até os dias de hoje a maneira como o país
          lida com questões de segurança. Durante muitos dos conflitos, a
          participação do Exército e da Marinha foi decisiva para o desfecho, o
          que fortaleceu essas instituições. A importância das guerras também
          está em como elas influenciaram os debates políticos da época,
          resultando em mudanças constitucionais e estruturais que impactaram
          diretamente o desenvolvimento do Estado brasileiro.
        </p>
      </div>
      <div className={styles.container}>
        <p className={styles.paragraph}>
          Saber sobre as guerras permite perceber como o país lida com a questão
          da defesa e da segurança nacional, além de fornecer lições valiosas
          sobre diplomacia, estratégia e os custos humanos dos conflitos. A
          reflexão sobre esses aspectos possibilita um entendimento mais
          profundo da construção de políticas públicas voltadas para a defesa da
          nação e da manutenção da paz. O aprendizado das guerras também destaca
          a importância da diplomacia e do diálogo na prevenção de futuros
          conflitos, algo que pode ser aplicado tanto em nível interno quanto
          nas relações internacionais.
        </p>
        <img
          src={db[Math.floor(Math.random() * 10)].image}
          alt='imagem guerra'
          className={styles.image}
        />
      </div>
      <div className={styles.container}>
        <p className={styles.paragraph}>
          Por fim, estudar as guerras do Brasil é fundamental para cultivar uma
          cidadania mais consciente e crítica, promovendo uma reflexão sobre os
          valores que devem guiar a nação, como a justiça, a igualdade e a paz.
          A compreensão dos sacrifícios feitos no passado nos ajuda a valorizar
          ainda mais os direitos e liberdades conquistados ao longo da história.
          Além disso, o estudo das guerras reforça a necessidade de construção
          de um Brasil mais justo e inclusivo, onde as diferenças regionais e
          sociais possam ser superadas por meio do diálogo e do respeito mútuo.
          Dessa forma, o conhecimento sobre os conflitos brasileiros não apenas
          ilumina o passado, mas também aponta caminhos para um futuro melhor.
        </p>
      </div>
    </>
  );
}
