import React from 'react';
import styles from'./class-modules.module.css'

const ClassModules = () => {
    console.log(styles)
  return (
    <div className={styles['class-modules-wrapper']}>
      <h2 className={`${styles['title']} text-primary`}>Class Modules in React</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, incidunt excepturi in
        temporibus rem dolor deserunt beatae, accusantium quas, ipsam explicabo atque inventore sit
        debitis laudantium voluptate fuga aut quos!
      </p>
    </div>
  );
};

export default ClassModules;
