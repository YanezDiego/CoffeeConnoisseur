const Banner = () => {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>
          <span className={styles.title1}>Coffee</span>
          <span className={styles.title2}>Connoisseur</span>
        </h1>
        <p className={styles.subTitle}>Find new Coffee Shops near by</p>
        <button className={styles.button}>View Stores</button>
      </div>
    );
}

export default Banner