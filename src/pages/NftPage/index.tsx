import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import whale from '../../assets/img/whale.png';

export const NftPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.background}>
      <div className={styles.top}>
        <div className={styles.ghostdrive}>
          <div className={styles.logo} /> GHOST<span>DRIVE</span>
        </div>
        <div
          className={styles.close}
          onClick={() => {
            navigate('/');
          }}
        />
      </div>
      <div className={styles.nft_content}>
        <div className={styles.card_container}>
          <div className={styles.card}>
            <div className={styles.inner_card} />
          </div>
          <div className={styles.image_wrapper}>
            <img className={styles.img} src={whale} alt='Baby Whale' />
            <div className={styles.img_border} />
            <div className={styles.img_logo} />
            <div className={styles.img_close} />
            <div className={styles.img_name}>BABY WHALE</div>
          </div>
          <div className={styles.content_wrapper}>
            <div className={styles.top}>
              <div className={styles.content_card} />
              <div className={styles.text}>
                <div className={styles.title}>{/* BLUEPASS */}</div>
                <div className={styles.subtitle}>GHOSTDRIVE</div>
                <div className={styles.items}>
                  <div>NFT PASS</div>
                  <div>EARLY ACCESS</div>
                  <div>BOOSTED REWARDS</div>
                  <div> MEMBER FOREVER</div>
                </div>
              </div>
            </div>
            <div className={styles.bottom}>
              <div className={styles.row}>
                <div>0.02</div>
                <div>BABY WHALE</div>
              </div>
              <div className={styles.row}>
                <div>BNB</div>
                <div>SUPPLY 1,222</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.description_container}>
          <div className={styles.title}>
            <span>WEB3+ </span> EXPERIENCE
          </div>
          <div className={styles.description_wrapper}>
            <div className={styles.description}>
              <div>
                <div className={`${styles.value} ${styles.title}`}>
                  BABY WHALE
                </div>
              </div>
              <div>
                <div className={styles.value}>COST</div>
                <div className={styles.key}>
                  0.02 <span>BNB</span>
                </div>
              </div>
              <div>
                <div className={styles.value}>POINTS</div>
                <div className={styles.key}>200</div>
              </div>
              <div>
                <div className={styles.value}>ROI</div>
                <div className={styles.key}>
                  160<span>%</span>
                </div>
              </div>
            </div>
            <div className={styles.statistics}>
              <div>
                <div className={styles.label}>20GB GHOSTDRIVE</div>
                <div className={`${styles.progress} ${styles.first}`} />
              </div>
              <div>
                <div className={styles.label}>200 BONUS</div>
                <div className={`${styles.progress} ${styles.second}`} />
              </div>
              <div>
                <div className={styles.label}>ROI +160%</div>
                <div className={`${styles.progress} ${styles.third}`} />
              </div>
              <div>
                <div className={styles.label}>ALL ACCESS</div>
                <div className={`${styles.progress} ${styles.fourth}`} />
              </div>
            </div>
            <div className={styles.blue_member}>
              <div className={styles.title}>Blue Member</div>
              <div className={styles.item}>Earn Rewards </div>
              <div className={styles.item}>Loyalty Program</div>
              <div className={styles.item}>Early Access</div>
              <div className={styles.item}>Beta Tester</div>
            </div>
          </div>
          <div className={styles.button_wrapper}>
            <div className={styles.cool_button}>
              <div className={styles.button}>MINT NOW</div>
            </div>
          </div>
          <div className={styles.under_button}>{'// TOTAL 1,222/343'}</div>
        </div>
      </div>
      <div className={styles.next_pass}>
        <div>BLUE GUARD \</div>
        <div>NEXT PASS</div>
      </div>
    </div>
  );
};
