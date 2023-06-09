const Banner = (props) => {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>
          <span className={styles.title1}>Coffee</span>
          <span className={styles.title2}>Connoisseur</span>
        </h1>
        <p className={styles.subTitle}>Find new Coffee Shops near by</p>
        <button className={styles.button} onClick={props.onBtnClick}>
          {props.buttonText}
        </button>
      </div>
    );
}

export default Banner