import Element from '../Element';
import styles from './FlipCard.module.css';
import '@google/model-viewer';
export default function FlipCard({ info }) {
  const nullInfo = <p>Clique Em Algum Elemento</p>;
  let frontInfo;
  let backInfo;

  if (info) {
    frontInfo = (
      <Element
        atomicNum={info.number}
        elementName={info.name}
        group={info.category}
        sym={info.symbol}
      />
    );
    backInfo = (
      <>
        <model-viewer
          src={info.bohr_model_3d}
          alt='Modelo atômico 3D do elemento Alumínio'
          autoplay=''
          camera-controls=''
          camera-orbit='-0.6751deg 70.99deg 1.4m'
          exposure='0.3'
          field-of-view='30deg'
          max-camera-orbit='auto 180deg 1.4m'
          min-camera-orbit='auto 0deg auto'
          style={{
            width: '60%',
            height: '60%',
            margin: 'auto',
          }}></model-viewer>
      </>
    );
    console.log(info.bohr_model_3d);
  } else {
    frontInfo = null;
    backInfo = null;
  }

  return (
    <div className={styles.flipCard}>
      <section className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>{frontInfo || nullInfo}</div>
        <article className={styles.flipCardBack}>
          {backInfo || nullInfo}
        </article>
      </section>
    </div>
  );
}
