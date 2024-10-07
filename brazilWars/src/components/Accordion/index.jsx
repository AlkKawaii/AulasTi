import { useEffect, useState } from "react";
import styles from "./Accordion.module.css";
import AccordionItem from "../AccordionItem";

export default function Accordion({
  labels = ["Teste1", "Teste2"],
  content = ["Teste1", "Teste2"],
}) {
  const [toggledItems, setToggledItems] = useState([]);

  function handleAccordionClick(index) {
    setToggledItems((prevToggled) => {
      const toggled = prevToggled.map((item, i) =>
        i === index ? !item : false
      );
      return toggled;
    });
  }

  useEffect(() => {
    const toggled = labels.map(() => false);
    setToggledItems(toggled);
  }, []);
  return (
    <div className={styles.accordion}>
      {labels.map((label, index) => {
        return (
          <AccordionItem
            key={index}
            label={label}
            content={content[index]}
            opened={toggledItems[index]}
            handleClick={() => handleAccordionClick(index)}
          />
        );
      })}
    </div>
  );
}